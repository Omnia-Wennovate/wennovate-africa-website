import { Metadata } from 'next';
import RenewableHero from '@/components/sections/renewable/RenewableHero';
import RenewableSubsectors from '@/components/sections/renewable/RenewableSubsectors';
import RenewableInvestment from '@/components/sections/renewable/RenewableInvestment';
import RenewableStatistics from '@/components/sections/renewable/RenewableStatistics';
import SustainabilityImpact from '@/components/sections/renewable/SustainabilityImpact';
import RenewableCTA from '@/components/sections/renewable/RenewableCTA';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Renewable Energy & Manufacturing | WENNOVATE',
  description: 'Invest in Africa\'s renewable energy revolution. Solar, wind, smart manufacturing with 60,000 MW potential and world-class returns.',
  keywords: ['renewable energy', 'solar power', 'wind energy', 'clean energy', 'sustainable manufacturing', 'green technology'],
};

export default function RenewableEnergyPage() {
  return (
    <main className="min-h-screen bg-navy overflow-x-hidden">
      <Header />
      <RenewableHero />
      <RenewableSubsectors />
      <RenewableInvestment />
      <RenewableStatistics />
      <SustainabilityImpact />
      <RenewableCTA />
      <Footer />
    </main>
  );
}
