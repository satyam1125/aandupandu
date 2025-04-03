'use server'

export async function createBooking(formData: any) {
  try {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Booking submission failed:', errorText)
      throw new Error(errorText || 'Failed to create booking')
    }

    return await response.json()
  } catch (error) {
    console.error('Booking submission error:', error)
    throw error
  }
}