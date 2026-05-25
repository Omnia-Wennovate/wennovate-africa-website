/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  turbopack: {
    root: import.meta.dirname,
  },
}

export default nextConfig
