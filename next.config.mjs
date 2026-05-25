/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  turbopack: {
    root: import.meta.dirname,
  },

  /**
   * Canonical domain redirect at the Vercel routing layer.
   *
   * Belt-and-suspenders alongside middleware.ts — Vercel evaluates
   * next.config redirects at the CDN level before hitting the app,
   * so both layers enforce the www canonical.
   */
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'wennovate.africa' }],
        destination: 'https://www.wennovate.africa/:path*',
        permanent: true, // 308 → CDN + browser will cache this redirect
      },
    ]
  },

  /**
   * Cache-Control headers for the homepage.
   *
   * `max-age=0, must-revalidate` tells:
   * - Browsers: always revalidate before serving from local cache
   * - Vercel CDN: `s-maxage=0` via stale-while-revalidate semantics —
   *   always check origin for a fresh copy on homepage requests
   *
   * Static assets (_next/static/*) remain immutably cached — no perf impact.
   */
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig
