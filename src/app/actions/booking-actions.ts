'use server'

import { supabase } from '../../../lib/auth';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  package: string;
  date: string; // This is coming from your form as 'date'
  numberOfPeople: string;
  specialRequirements?: string;
  [key: string]: string | number | boolean | null | undefined;
}

export async function createBooking(formData: BookingFormData) {
  try {
    // Create a properly formatted booking object that matches your database schema
    const bookingData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      package: formData.package,
      travel_date: formData.date, // Map 'date' to 'travel_date'
      number_of_people: parseInt(formData.numberOfPeople), // Convert to integer for int4 column
      special_requirements: formData.specialRequirements || null
      // created_at will be handled automatically if default is set in Supabase
    };

    // Insert into bookings table
    const { data, error } = await supabase
      .from('bookings')
      .insert([bookingData])
      .select();

    if (error) {
      console.error('Booking submission failed:', error.message);
      throw new Error(error.message || 'Failed to create booking');
    }

    return data[0];
  } catch (error) {
    console.error('Booking submission error:', error);
    throw error;
  }
}