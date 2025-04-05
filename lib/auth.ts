// lib/auth.ts
import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

// Type definitions
interface SessionData {
  email: string;
}




// Initialize Supabase client with error handling
const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(`
      Supabase environment variables not configured!
      Please check your .env.local file and Vercel project settings.
    `);
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = getSupabaseClient();

// Session management functions
export async function getSession(): Promise<SessionData | null> {
  try {
    const cookieStore = cookies();
    const session = (await cookieStore).get('session')?.value;

    if (!session) return null;

    const sessionData: SessionData = JSON.parse(session);
    
    // Verify email exists in admins table
    const { data, error } = await supabase
      .from('admins')
      .select('email')
      .eq('email', sessionData.email)
      .single();

    if (error || !data) {
      console.error('Session validation failed:', error?.message);
      return null;
    }

    return sessionData;
  } catch (error) {
    console.error('Session parsing error:', error);
    return null;
  }
}

export async function createSession(email: string): Promise<void> {
  try {
    const cookieStore = cookies();
    const sessionData: SessionData = { email };
    
    (await cookieStore).set('session', JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
      sameSite: 'lax'
    });
  } catch (error) {
    console.error('Failed to create session:', error);
    throw new Error('Session creation failed');
  }
}

export async function destroySession(): Promise<void> {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('session');
  } catch (error) {
    console.error('Failed to destroy session:', error);
    throw new Error('Session destruction failed');
  }
}