'use server'

interface BookingFormData {
  name: string;
  email: string;
  date: string;
  [key: string]: string | number | boolean | null | undefined; // Optional: if additional fields are expected
}

export async function createBooking(formData: BookingFormData) {
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