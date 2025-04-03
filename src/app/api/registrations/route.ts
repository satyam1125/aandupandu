import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.preferredDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('registrations')
      .insert([{
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        number_of_people: parseInt(formData.numberOfPeople),
        preferred_date: formData.preferredDate,
        special_requirements: formData.specialRequirements,
        terms_accepted: formData.termsAccepted
      }])
      .select()

    if (error) throw error

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Failed to submit registration' },
      { status: 500 }
    )
  }
}