'use server'

export async function createBooking(formData: any) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    
    const response = await fetch(`${apiUrl}/api/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to create booking')
    }

    return await response.json()
  } catch (error) {
    console.error('Booking submission failed:', error)
    throw error
  }
}