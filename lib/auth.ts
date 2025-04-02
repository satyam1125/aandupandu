import { cookies } from 'next/headers'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)


export async function getSession() {
  const cookieStore = cookies()
  const session = cookieStore.get('session')?.value
  
  if (!session) return null

  try {
    const { email } = JSON.parse(session)
    const { data } = await supabase
      .from('admins')
      .select('email')
      .eq('email', email)
      .single()

    return data ? { email } : null
  } catch (error) {
    return null
  }
}

export async function createSession(email: string) {
  cookies().set('session', JSON.stringify({ email }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
    sameSite: 'lax'
  })
}

export async function destroySession() {
  cookies().delete('session')
}