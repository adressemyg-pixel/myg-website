import pkg from "pg";
import nodemailer from "nodemailer";

const { Client } = pkg;

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { name, email, subject, message, organization, phone } = body;
  if (!name || !email || !subject || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  const client = new Client({ connectionString: process.env.DATABASE_URL });
  try {
    await client.connect();
    await client.query(
      `INSERT INTO contacts (name, email, subject, message, organization, phone) VALUES ($1,$2,$3,$4,$5,$6)`,
      [name, email, subject, message, organization || null, phone || null]
    );
  } catch (err) {
    console.error("DB error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Server error. Please try again." }) };
  } finally {
    await client.end();
  }

  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: "adresse.myg@gmail.com",
        replyTo: email,
        subject: `[MYG Contact] ${subject}`,
        html: `<h2>New Contact — MYG Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>`,
      });
    } catch (err) {
      console.warn("Email send failed (submission saved):", err.message);
    }
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ success: true, message: "Thank you for reaching out! We'll get back to you soon." }),
  };
};
