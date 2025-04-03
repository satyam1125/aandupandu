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

    // Validate and parse data
    const parsedData = {
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone || '',
      package: bookingData.package,
      travel_date: new Date(bookingData.travelDate).toISOString(),
      number_of_people: parseInt(bookingData.numberOfPeople) || 1,
      special_requirements: bookingData.specialRequirements || ''
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert([parsedData])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    console.error('Booking creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}