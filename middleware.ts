import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['id', 'en'],
  defaultLocale: 'id',
  localePrefix: 'always',
  localeDetection: false,
})

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request)

  if (request.nextUrl.pathname === '/' && response.status === 307) {
    response.cookies.set('NEXT_LOCALE', 'id', { path: '/', sameSite: 'lax' })
  }

  return response
}

export const config = {
  matcher: [
    '/',
    '/(id|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}