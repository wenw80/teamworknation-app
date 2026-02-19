import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, subject, organization, message } = await request.json();

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Name, email, subject, and message are required." },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const toEmail =
    process.env.TO_EMAIL || "info@teamworknation.org";
  const smtpServer = process.env.SMTP_SERVER || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);

  const transporter = nodemailer.createTransport({
    host: smtpServer,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const orgLine = organization ? `Organization: ${organization}\n` : "";

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USERNAME,
      to: toEmail,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n${orgLine}Subject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
