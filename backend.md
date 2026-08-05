# Contact Form Backend Integration Guide (Email Only Approach)

This guide shows you how to connect your frontend `ContactForm.jsx` to a Next.js backend API that sends the form data directly to your inbox using **Nodemailer**. No database is required!

## Step 1: Install Nodemailer

First, open your terminal (in the root of your project) and run the following command to install the required package:

```bash
npm install nodemailer
```

## Step 2: Set up Environment Variables

To send emails securely, you should never hardcode your email password in your code. We will use environment variables.

Create a file named `.env.local` in the root of your project (next to `package.json`) and add your email credentials.

**File: `.env.local`**
```env
# The email address you want to send FROM
EMAIL_USER=your_email@gmail.com 

# Your email password (If using Gmail, use an "App Password", not your normal password)
EMAIL_PASS=your_app_password 

# The email address you want to RECEIVE the messages AT (can be the same as EMAIL_USER)
RECEIVER_EMAIL=hello@autohub.dev
```
*(Note: If you are using Gmail, you need to go to your Google Account Settings -> Security -> 2-Step Verification -> App Passwords to generate an `EMAIL_PASS`.)*

---

## Step 3: Create the API Route (Backend)

Create a new file at `app/api/contact/route.js`. This code uses an in-memory rate limiter to prevent spam, and then imports your email templates to send beautifully formatted HTML emails to both you and the customer.

**File: `app/api/contact/route.js`**

```javascript
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getAdminEmailTemplate } from '../../../emails/adminTemplate';
import { getCustomerEmailTemplate } from '../../../emails/customerTemplate';

// ----------------------------------------------------------------------
// Simple In-Memory Rate Limiter
// ----------------------------------------------------------------------
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

  return false;
}

// ----------------------------------------------------------------------
// POST Handler
// ----------------------------------------------------------------------
export async function POST(req) {
  try {
    // 1. Get IP and enforce Rate Limit
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'Unknown IP';
    const isAllowed = checkRateLimit(ip);
    
    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 } 
      );
    }

    // 2. Parse incoming data
    const data = await req.json();
    const { name, company, needHelpWith, budget, email } = data;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    // Capture extra metadata for the Admin email
    const userAgent = req.headers.get('user-agent') || 'Unknown Browser';
    const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) + ' IST';
    const enrichedData = { ...data, ip, userAgent, date };

    // 3. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Send Email to ADMIN (You)
    await transporter.sendMail({
      from: \`"Autohub System" <\${process.env.EMAIL_USER}>\`,
      to: process.env.RECEIVER_EMAIL, 
      subject: \`New Contact from \${name} at \${company || 'Unknown'}\`,
      html: getAdminEmailTemplate(enrichedData),
    });

    // 5. Send Auto-Reply to CUSTOMER
    await transporter.sendMail({
      from: \`"Autohub Team" <\${process.env.EMAIL_USER}>\`,
      to: email, 
      subject: \`We received your message, \${name.split(' ')[0]}!\`,
      html: getCustomerEmailTemplate(enrichedData),
    });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
```

---

## Step 4: Create Email Templates

Create a new folder named `emails` in the root of your project, and add the two following files.

**File: `emails/adminTemplate.js`**
(Paste the HTML string code here that formats the card layout for the Admin)

**File: `emails/customerTemplate.js`**
This file should export a function `getCustomerEmailTemplate(data)` that returns an HTML string. This acts as a friendly "Thank You" acknowledgement to confirm you received their message.

---

## Step 5: Update the Frontend Form

Replace your entire `ContactForm.jsx` with the code below. This code adds React State to track the user's input and sends a POST request to our API route.

**File: `app/contact/ContactForm.jsx`**

```javascript
"use client";

import { useState, useEffect } from "react";
import styles from "./contact.module.css";

export default function ContactForm() {
  const [time, setTime] = useState("");
  
  // 1. Setup Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    needHelpWith: "automation & bots",
    budget: "",
    email: ""
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  // 2. Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Clear the form fields
        setFormData({
          name: "",
          company: "",
          needHelpWith: "automation & bots",
          budget: "",
          email: ""
        });
        
        // Reset success message after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Failed to submit:", error);
      setStatus("error");
    }
  };

  // Clock Effect
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.grid}>
      {/* ── Left: Human side ── */}
      <div className={styles.left}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for new projects
        </div>

        <h1 className={styles.title}>
          Skip the<br />
          <span className="text-chrome">corporate talk.</span>
        </h1>
        <p className={styles.subtitle}>
          Tell me what you're trying to build and I'll tell you if I can help — usually within a few hours.
        </p>

        <div className={styles.infoList}>
          <div className={styles.infoRow}>
            <span className="mono" style={{ color: "var(--text-muted)" }}>LOCAL TIME</span>
            <span className={styles.infoVal}>{time} IST</span>
          </div>
          <div className={styles.infoRow}>
            <span className="mono" style={{ color: "var(--text-muted)" }}>EMAIL</span>
            <a href="mailto:hello@autohub.dev" className={styles.infoLink}>
              hello@autohub.dev
            </a>
          </div>
          <div className={styles.infoRow}>
            <span className="mono" style={{ color: "var(--text-muted)" }}>SOCIALS</span>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a href="#" className={styles.infoLink}>Twitter</a>
              <a href="#" className={styles.infoLink}>LinkedIn</a>
              <a href="#" className={styles.infoLink}>GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Mad Libs form ── */}
      <form className={`glass ${styles.form}`} onSubmit={handleSubmit}>
        <p className={styles.madlibText}>
          Hey! My name is{" "}
          <input 
            className={styles.il} 
            placeholder="your name" 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {" "}and I'm from{" "}
          <input 
            className={styles.il} 
            placeholder="company / college" 
            type="text" 
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          .
        </p>

        <p className={styles.madlibText}>
          I need help with{" "}
          <select 
            className={styles.sel}
            name="needHelpWith"
            value={formData.needHelpWith}
            onChange={handleChange}
          >
            <option>automation & bots</option>
            <option>a website or platform</option>
            <option>an AI chatbot</option>
            <option>workflow scripts</option>
            <option>something else</option>
          </select>
          {" "}and my budget is around{" "}
          <input 
            className={styles.il} 
            placeholder="₹20k — ₹1L" 
            style={{ width: "130px" }} 
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          />.
        </p>

        <p className={styles.madlibText}>
          Reach me at{" "}
          <input 
            className={styles.il} 
            placeholder="your@email.com" 
            type="email" 
            style={{ width: "220px" }} 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {" "}to get started.
        </p>

        <button 
          type="submit" 
          className={styles.submit}
          disabled={status === "loading"}
          style={{ opacity: status === "loading" ? 0.7 : 1 }}
        >
          {status === "loading" ? "Sending..." : status === "success" ? "Sent! ✓" : "Send it →"}
        </button>
        {status === "error" && (
          <p style={{ color: "red", marginTop: "10px", fontSize: "14px" }}>
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
```

## Step 6: Start testing

1. Make sure to **restart your Next.js server** (`npm run dev`) so that it picks up the new `.env.local` variables.
2. Fill out your form and hit send!
3. Check your `RECEIVER_EMAIL` inbox for the automated message.
