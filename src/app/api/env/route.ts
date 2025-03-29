import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    variables: [
      {
        name: "NEXT_PUBLIC_APPWRITE_PROJECT_ID",
        description: "Your Appwrite project ID",
      },
      {
        name: "NEXT_PUBLIC_APPWRITE_DATABASE_ID",
        description: "Your Appwrite database ID",
      },
      {
        name: "EMAIL_SERVER_HOST",
        description: "SMTP server host (e.g., smtp.gmail.com)",
      },
      {
        name: "EMAIL_SERVER_PORT",
        description: "SMTP server port (e.g., 465)",
      },
      {
        name: "EMAIL_SERVER_USER",
        description: "SMTP server username",
      },
      {
        name: "EMAIL_SERVER_PASSWORD",
        description: "SMTP server password",
      },
      {
        name: "EMAIL_FROM",
        description: "Email address to send from",
      },
      {
        name: "TWILIO_ACCOUNT_SID",
        description: "Your Twilio account SID",
      },
      {
        name: "TWILIO_AUTH_TOKEN",
        description: "Your Twilio auth token",
      },
      {
        name: "TWILIO_WHATSAPP_NUMBER",
        description: "Your Twilio WhatsApp number",
      },
    ],
  })
}

