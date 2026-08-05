export const getAdminEmailTemplate = (data) => {
  const { name, email, company, needHelpWith, budget, ip, userAgent, date } = data;

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
        .content { padding: 40px; }
        .field { margin-bottom: 24px; }
        .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; font-weight: 600; margin-bottom: 8px; }
        .value { font-size: 16px; color: #18181b; background-color: #f4f4f5; padding: 12px 16px; border-radius: 6px; border: 1px solid #e4e4e7; }
        .meta { margin-top: 40px; padding-top: 24px; border-top: 1px solid #e4e4e7; font-size: 13px; color: #71717a; line-height: 1.6; }
        .meta strong { color: #3f3f46; }
        .footer { background-color: #fafafa; padding: 20px 40px; text-align: center; font-size: 13px; color: #71717a; border-top: 1px solid #e4e4e7; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${name || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
          </div>
          <div class="field">
            <div class="label">Company / College</div>
            <div class="value">${company || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Needs Help With</div>
            <div class="value">${needHelpWith || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Estimated Budget</div>
            <div class="value">${budget || 'Not provided'}</div>
          </div>

          <div class="meta">
            <strong>Submission Details:</strong><br>
            Date & Time: ${date}<br>
            Customer IP: ${ip}<br>
            User Agent: ${userAgent}
          </div>
        </div>
        <div class="footer">
          Generated securely via AutoHub Labs System
        </div>
      </div>
    </body>
    </html>
  `;
};
