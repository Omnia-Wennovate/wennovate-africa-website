// Prevent the homepage from being served as an indefinitely cached static page.
// Vercel purges ISR caches on deployment, but bare-domain edge nodes may still
// serve a stale snapshot. Setting revalidate = 0 ensures Next.js emits
// Cache-Control: no-store so the CDN always fetches a fresh render.
export const dynamic = 'force-dynamic'

import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { ValueProp } from '@/components/sections/ValueProp'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <ValueProp />
      <CTA />
      <Footer />
    </main>
  )
}
