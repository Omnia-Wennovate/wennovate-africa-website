import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Edge middleware: enforces canonical www domain.
 *
 * Redirects all bare-domain (wennovate.africa) requests to
 * https://www.wennovate.africa — runs at the edge BEFORE any
 * CDN cache lookup, ensuring stale non-www content is never served.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''

  // Redirect bare domain to www (canonical)
  if (host === 'wennovate.africa') {
    const { pathname, search } = request.nextUrl
    const destination = `https://www.wennovate.africa${pathname}${search}`

    return NextResponse.redirect(destination, {
      status: 308, // Permanent redirect — browser & CDN will cache it
    })
  }

  return NextResponse.next()
}

export const config = {
  /*
   * Run on all routes EXCEPT:
   * - Next.js internal static assets (_next/static, _next/image)
   * - favicon and other public file extensions
   *
   * This keeps static asset delivery fast while intercepting
   * all page requests for the canonical redirect check.
   */
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|woff|woff2|ttf|otf|css|js|map)$).*)'],
}
