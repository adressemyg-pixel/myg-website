import { Router, type IRouter, type Request, type Response } from "express";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";
import { db, contactsTable } from "@workspace/db";
import nodemailer from "nodemailer";

const router: IRouter = Router();

async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  organization?: string | null;
  phone?: string | null;
}) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    // Email not configured — log the submission but don't fail
    return false;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const html = `
    <h2>New Contact Form Submission — MYG Website</h2>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;font-family:sans-serif;">
      <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
      ${data.organization ? `<tr><td><strong>Organization</strong></td><td>${data.organization}</td></tr>` : ""}
      ${data.phone ? `<tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>` : ""}
      <tr><td><strong>Subject</strong></td><td>${data.subject}</td></tr>
      <tr><td><strong>Message</strong></td><td>${data.message}</td></tr>
    </table>
  `;

  await transporter.sendMail({
    from: smtpUser,
    to: "adresse.myg@gmail.com",
    replyTo: data.email,
    subject: `[MYG Contact] ${data.subject}`,
    html,
  });

  return true;
}

router.post("/contact", async (req: Request, res: Response) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data. Please fill in all required fields." });
    return;
  }

  const { name, email, subject, message, organization, phone } = parsed.data;

  try {
    await db.insert(contactsTable).values({ name, email, subject, message, organization, phone });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact to DB");
    res.status(500).json({ error: "Server error. Please try again later." });
    return;
  }

  try {
    await sendContactEmail({ name, email, subject, message, organization, phone });
  } catch (err) {
    req.log.warn({ err }, "Failed to send contact email (submission saved to DB)");
  }

  res.json(
    SubmitContactResponse.parse({
      success: true,
      message: "Thank you for reaching out! We'll get back to you soon.",
    })
  );
});

export default router;
