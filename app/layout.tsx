import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1116' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'WENNOVATE | System • Strategy • Sustainability',
    template: '%s | WENNOVATE',
  },
  description: 'Transforming businesses through sustainable innovation, entrepreneurship support, and strategic development. Discover our sustainable business solutions.',
  keywords: ['sustainability', 'entrepreneurship', 'business innovation', 'consulting', 'development', 'research'],
  authors: [{ name: 'WENNOVATE' }],
  metadataBase: new URL('https://wennovate.com'),
  openGraph: {
    title: 'WENNOVATE | System • Strategy • Sustainability',
    description: 'Transform your business with sustainable innovation and strategic consulting',
    type: 'website',
    siteName: 'WENNOVATE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WENNOVATE | System • Strategy • Sustainability',
    description: 'Transform your business with sustainable innovation and strategic consulting',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
