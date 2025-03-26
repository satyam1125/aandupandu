import { Client, Databases, ID } from "appwrite"

// Initialize Appwrite client
const client = new Client()

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "")

const databases = new Databases(client)

// Database and collection IDs (to be configured)
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || ""
const REGISTRATIONS_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_REGISTRATIONS_COLLECTION_ID || ""
const CONTACT_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID || ""

// Function to create a new registration
export async function createRegistration(registrationData: any) {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      REGISTRATIONS_COLLECTION_ID,
      ID.unique(),
      registrationData,
    )

    return response
  } catch (error) {
    console.error("Error creating registration:", error)
    throw error
  }
}

// Function to create a new contact form submission
export async function createContactSubmission(contactData: any) {
  try {
    const response = await databases.createDocument(DATABASE_ID, CONTACT_COLLECTION_ID, ID.unique(), contactData)

    return response
  } catch (error) {
    console.error("Error creating contact submission:", error)
    throw error
  }
}

// Function to get all registrations (for admin purposes)
export async function getRegistrations() {
  try {
    const response = await databases.listDocuments(DATABASE_ID, REGISTRATIONS_COLLECTION_ID)

    return response.documents
  } catch (error) {
    console.error("Error fetching registrations:", error)
    throw error
  }
}

// Function to get all contact submissions (for admin purposes)
export async function getContactSubmissions() {
  try {
    const response = await databases.listDocuments(DATABASE_ID, CONTACT_COLLECTION_ID)

    return response.documents
  } catch (error) {
    console.error("Error fetching contact submissions:", error)
    throw error
  }
}

