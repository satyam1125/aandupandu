"use client"

import { Client, Account, Databases, ID } from "appwrite"

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
    const response = await databases.createDocument(DATABASE_ID, BOOKINGS_COLLECTION_ID, ID.unique(), bookingData)
    return response
  } catch (error) {
    console.error("Appwrite error:", error)
    throw error
  }
}

