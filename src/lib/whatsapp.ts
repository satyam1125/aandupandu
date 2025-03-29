"use server"

import twilio from "twilio"

interface WhatsAppParams {
  to: string
  body: string
}

export async function sendWhatsAppNotification({ to, body }: WhatsAppParams) {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER

    if (!accountSid || !authToken || !fromNumber) {
      throw new Error("Missing Twilio credentials")
    }

    const client = twilio(accountSid, authToken)

    const message = await client.messages.create({
      body,
      from: `whatsapp:${fromNumber}`,
      to: `whatsapp:${to}`,
    })

    console.log("WhatsApp message sent:", message.sid)
    return { success: true, sid: message.sid }
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    return { success: false, error }
  }
}

