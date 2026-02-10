import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const languages = ['pl', 'en', 'de']
const defaultLanguage = 'pl'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname already has a language prefix
  const pathnameHasLanguage = languages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )

  if (pathnameHasLanguage) {
    return NextResponse.next()
  }

  // Redirect to default language if no language prefix
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLanguage}`, request.url))
  }

  // For other paths without language prefix, add default language
  return NextResponse.redirect(new URL(`/${defaultLanguage}${pathname}`, request.url))
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
