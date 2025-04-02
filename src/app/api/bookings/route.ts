import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const bookingData = await request.json()

    // Validate required fields
    if (!bookingData.name || !bookingData.email || !bookingData.package) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert([{
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        package: bookingData.package,
        travel_date: bookingData.travelDate,
        number_of_people: parseInt(bookingData.numberOfPeople),
        special_requirements: bookingData.specialRequirements
      }])
      .select()

    if (error) throw error

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}