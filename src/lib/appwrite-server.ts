import { Client, Databases, ID } from "node-appwrite"

// Initialize Appwrite client for server-side
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "")
  .setKey(process.env.APPWRITE_API_KEY || "") // Server-side secret key

const databases = new Databases(client)

export async function createBookingInAppwrite(bookingData: any) {
  try {
    const response = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_APPWRITE_BOOKINGS_COLLECTION_ID || "",
      ID.unique(),
      bookingData,
    )

    return response
  } catch (error) {
    console.error("Appwrite server error:", error)
    throw error
  }
}

