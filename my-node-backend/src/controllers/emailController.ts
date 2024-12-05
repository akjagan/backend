import { Request, Response } from "express";

export const sendEmail = async (req: Request, res: Response) => {
  const { to, subject, message } = req.body;
  
  // Mock email sending logic (can use nodemailer or other services)
  if (!to || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  
  console.log(`Email sent to ${to} with subject "${subject}" and message: ${message}`);
  res.status(200).json({ success: true, message: "Email sent successfully!" });
};
