"use client"

import { Client, Account, Databases, ID, AppwriteException } from "appwrite"

// Initialize the Appwrite client
export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "")

// Initialize Appwrite services
export const account = new Account(client)
export const databases = new Databases(client)

// Database and collection IDs
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || ""
export const BOOKINGS_COLLECTION_ID = "bookings"

// Helper function to create a booking
export const createBookingInAppwrite = async (bookingData: any) => {
  try {
    // Validate required environment variables
    if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || !DATABASE_ID) {
      throw new Error("Missing required Appwrite configuration")
    }

    // Sanitize and validate input data
    const sanitizedData = {
      name: String(bookingData.name).trim(),
      email: String(bookingData.email).trim().toLowerCase(),
      phone: String(bookingData.phone).trim(),
      package: String(bookingData.package),
      travelDate: bookingData.travelDate,
      numberOfPeople: String(bookingData.numberOfPeople),
      specialRequirements: bookingData.specialRequirements ? String(bookingData.specialRequirements).trim() : "",
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    // Create document in Appwrite
    const response = await databases.createDocument(DATABASE_ID, BOOKINGS_COLLECTION_ID, ID.unique(), sanitizedData)

    return response
  } catch (error) {
    // Handle Appwrite specific errors
    if (error instanceof AppwriteException) {
      console.error("Appwrite error:", error.message, error.code)

      // Handle specific error codes
      if (error.code === 401) {
        throw new Error("Authentication failed. Please check your Appwrite credentials.")
      } else if (error.code === 404) {
        throw new Error("Database or collection not found. Please check your configuration.")
      } else if (error.code === 409) {
        throw new Error("A booking with this information already exists.")
      }
    }

    console.error("Error creating booking:", error)
    throw error
  }
}

