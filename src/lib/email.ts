"use server"

import nodemailer from "nodemailer"

interface EmailParams {
  to: string
  subject: string
  text: string
  html?: string
}

export async function sendEmailNotification({ to, subject, text, html }: EmailParams) {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Send the email
    const info = await transporter.sendMail({
      from: `"Triloki Hospitality" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      text,
      html: html || text.replace(/\n/g, "<br>"),
    })

    console.log("Email sent:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}
