import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from './lib/auth'
export async function middleware(request: NextRequest) {
  const session = await getSession()
  const path = request.nextUrl.pathname

  if (path.startsWith('/admin') && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}