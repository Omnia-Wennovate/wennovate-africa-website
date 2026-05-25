import { Metadata } from 'next';
import ManufacturingHero from '@/components/sections/manufacturing/ManufacturingHero';
import SubsectorCards from '@/components/sections/manufacturing/SubsectorCards';
import ManufacturingInvestment from '@/components/sections/manufacturing/ManufacturingInvestment';
import ManufacturingStatistics from '@/components/sections/manufacturing/ManufacturingStatistics';
import CompetitiveAdvantages from '@/components/sections/manufacturing/CompetitiveAdvantages';
import ManufacturingCTA from '@/components/sections/manufacturing/ManufacturingCTA';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Manufacturing | WENNOVATE | System • Strategy • Sustainability',
  description:
    'Explore manufacturing investment opportunities in Ethiopia. Agro-processing, leather, textiles, and food & beverage sectors with competitive ROI and government support.',
  keywords: [
    'manufacturing',
    'industrial investment',
    'agro-processing',
    'leather manufacturing',
    'textile industry',
    'food & beverage',
    'Ethiopia',
    'investment opportunities',
  ],
  openGraph: {
    title: 'Manufacturing Sector | WENNOVATE',
    description:
      'Strategic manufacturing opportunities with 22-35% expected ROI across multiple subsectors',
    type: 'website',
  },
};

export default function ManufacturingPage() {
  return (
    <main className="bg-navy overflow-x-hidden">
      <Header />
      <ManufacturingHero />
      <SubsectorCards />
      <ManufacturingInvestment />
      <ManufacturingStatistics />
      <CompetitiveAdvantages />
      <ManufacturingCTA />
      <Footer />
    </main>
  );
}
