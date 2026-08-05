import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getAdminEmailTemplate } from '../../../emails/adminTemplate';
import { getCustomerEmailTemplate } from '../../../emails/customerTemplate';

// Simple In-Memory Rate Limiter
const rateLimitMap = new Map();
const RATE_LIMIT_MAX = 3; // Max requests
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip) {
  const now = Date.now();
  const userRecord = rateLimitMap.get(ip);

  if (!userRecord) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return true; // Allowed
  }

  // If the window has expired, reset it
  if (now - userRecord.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return true; // Allowed
  }

  // If they are within the window but haven't exceeded the limit
  if (userRecord.count < RATE_LIMIT_MAX) {
    userRecord.count += 1;
    rateLimitMap.set(ip, userRecord);
    return true; // Allowed
  }

  // Rate limit exceeded
  return false;
}

export async function POST(req) {
  try {
    // 1. Get IP and enforce Rate Limit
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'Unknown IP';
    const isAllowed = checkRateLimit(ip);
    
    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 } // 429 Too Many Requests
      );
    }

    // 2. Parse incoming data
    const data = await req.json();
    const { name, company, needHelpWith, budget, email } = data;

    // Validate the data
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // Capture extra metadata for the Admin email
    const userAgent = req.headers.get('user-agent') || 'Unknown Browser';
    const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST';
    
    const enrichedData = { ...data, ip, userAgent, date };

    // 3. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this if you use Yahoo, Outlook, etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Send Emails in Parallel (cuts latency in half)
    await Promise.all([
      // Email to ADMIN (You)
      transporter.sendMail({
        from: `"AutoHub Labs" <${process.env.EMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL, 
        subject: `New Contact from ${name} at ${company || 'Unknown'}`,
        html: getAdminEmailTemplate(enrichedData),
      }),
      // Auto-Reply to CUSTOMER
      transporter.sendMail({
        from: `"AutoHub Labs Team" <${process.env.EMAIL_USER}>`,
        to: email, // Send back to the user who filled the form
        subject: `We received your message, ${name.split(' ')[0]}!`,
        html: getCustomerEmailTemplate(enrichedData),
      })
    ]);

    // 6. Respond back to the frontend
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
