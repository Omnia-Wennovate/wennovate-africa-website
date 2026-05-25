import { Metadata } from 'next';
import { AgricultureHero } from '@/components/sections/agriculture/AgricultureHero';
import { SectorCards } from '@/components/sections/agriculture/SectorCards';
import { InvestmentOpportunities } from '@/components/sections/agriculture/InvestmentOpportunities';
import { AgriculturalStatistics } from '@/components/sections/agriculture/AgriculturalStatistics';
import { ProductsCarousel } from '@/components/sections/agriculture/ProductsCarousel';
import { AgricultureCTA } from '@/components/sections/agriculture/AgricultureCTA';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Agriculture | WENNOVATE - Sustainable Farming Innovation',
  description: 'Explore investment opportunities in Ethiopian agriculture. Sustainable farming, crop production, livestock management, and horticulture solutions.',
  keywords: [
    'agriculture',
    'sustainable farming',
    'crop production',
    'livestock',
    'horticulture',
    'agricultural investment',
    'farming innovation',
    'Ethiopia agriculture',
  ],
  openGraph: {
    title: 'Agriculture Sector | WENNOVATE',
    description: 'Transform African agriculture through sustainable innovation and strategic investment',
    type: 'website',
  },
};

export default function AgriculturePage() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header />
      <AgricultureHero />
      <SectorCards />
      <InvestmentOpportunities />
      <AgriculturalStatistics />
      <ProductsCarousel />
      <AgricultureCTA />
      <Footer />
    </main>
  );
}
