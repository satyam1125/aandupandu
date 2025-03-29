"use server"

import { revalidatePath } from "next/cache"
import  {createBookingInAppwrite}  from "../../lib/appwrite"
import { sendEmailNotification } from "../../lib/email"
import { sendWhatsAppNotification } from "../../lib/whatsapp"

export async function createBooking(formData: any) {
  try {
    // Format the data for Appwrite
    const bookingData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      package: formData.package,
      travelDate: formData.travelDate.toISOString(),
      numberOfPeople: formData.numberOfPeople,
      specialRequirements: formData.specialRequirements || "",
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    // Save to Appwrite
    const response = await createBookingInAppwrite(bookingData)

    // Send email notification
    await sendEmailNotification({
      to: "hospitality.triloki@gmail.com",
      subject: "New Booking Request",
      text: `
        New booking request received:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Package: ${formData.package}
        Travel Date: ${formData.travelDate.toLocaleDateString()}
        Number of People: ${formData.numberOfPeople}
        Special Requirements: ${formData.specialRequirements || "None"}
      `,
    })

    // Send WhatsApp notification
    await sendWhatsAppNotification({
      to: "+919720340187", // Replace with your actual WhatsApp number
      body: `New booking request from ${formData.name} for ${formData.package} package. Travel date: ${formData.travelDate.toLocaleDateString()}. Please check your email for details.`,
    })

    // Also send confirmation email to customer
    await sendEmailNotification({
      to: formData.email,
      subject: "Your Booking Request with Triloki Hospitality",
      text: `
        Dear ${formData.name},
        
        Thank you for booking with Triloki Hospitality. We have received your request for the following:
        
        Package: ${formData.package}
        Travel Date: ${formData.travelDate.toLocaleDateString()}
        Number of People: ${formData.numberOfPeople}
        
        Our team will contact you shortly to confirm your booking and provide further details.
        
        If you have any questions, please contact us at hospitality.triloki@gmail.com or call us at +91-9720340187.
        
        We look forward to providing you with a memorable spiritual journey.
        
        Warm regards,
        Triloki Hospitality Team
      `,
    })

    revalidatePath("/")
    return response
  } catch (error) {
    console.error("Error creating booking:", error)
    throw new Error("Failed to create booking")
  }
}

