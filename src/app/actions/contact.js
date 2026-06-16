"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required." };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // A premium HTML template for the incoming email
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background-color: #0f172a;
          color: #f8fafc;
          margin: 0;
          padding: 40px 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #1e293b;
          border-radius: 12px;
          border: 1px solid #334155;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        }
        .header {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          padding: 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          color: #ffffff;
          font-size: 24px;
          letter-spacing: 1px;
        }
        .content {
          padding: 30px;
        }
        .field {
          margin-bottom: 20px;
        }
        .label {
          font-size: 12px;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .value {
          font-size: 16px;
          color: #f1f5f9;
          background-color: #0f172a;
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #334155;
        }
        .message-box {
          white-space: pre-wrap;
          line-height: 1.6;
        }
        .footer {
          text-align: center;
          padding: 20px;
          font-size: 12px;
          color: #64748b;
          border-top: 1px solid #334155;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Portfolio Inquiry</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Sender Name</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">Email Address</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Subject</div>
            <div class="value">${subject}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="value message-box">${message}</div>
          </div>
        </div>
        <div class="footer">
          This message was securely routed from your Next.js Portfolio.
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: htmlTemplate,
    });

    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, message: "Failed to send the message. Please ensure the server credentials are valid." };
  }
}
