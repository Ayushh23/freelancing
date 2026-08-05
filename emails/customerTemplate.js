export const getCustomerEmailTemplate = (data) => {
  const { name } = data;
  const firstName = name ? name.split(' ')[0] : 'there';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 0; color: #18181b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .header { background-color: #000000; color: #ffffff; padding: 30px 40px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
        .content { padding: 40px; line-height: 1.6; font-size: 16px; color: #3f3f46; }
        .greeting { font-size: 18px; font-weight: 600; color: #18181b; margin-bottom: 20px; }
        .highlight { background-color: #f4f4f5; padding: 16px; border-left: 4px solid #000000; margin: 24px 0; border-radius: 0 6px 6px 0; }
        .footer { background-color: #fafafa; padding: 30px 40px; text-align: center; font-size: 14px; color: #71717a; border-top: 1px solid #e4e4e7; }
        .footer p { margin: 5px 0; }
        .logo { font-weight: 700; color: #18181b; margin-bottom: 10px; display: block; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>We received your message!</h1>
        </div>
        <div class="content">
          <div class="greeting">Hi ${firstName},</div>
          <p>Thank you for reaching out! We're excited to hear about what you're trying to build.</p>
          
          <div class="highlight">
            We have successfully received your inquiry and our team is currently reviewing your details.
          </div>
          
          <p>We usually respond within <strong>24 to 48 hours</strong> with some initial thoughts on how we can help.</p>
          <p>If you have any additional details or files to share in the meantime, feel free to reply directly to this email.</p>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>AutoHub Labs Team</strong></p>
        </div>
        <div class="footer">
          <span class="logo">AutoHub Labs</span>
          <p>Transforming workflows with automation & bots.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
