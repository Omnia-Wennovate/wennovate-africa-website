import { Metadata } from 'next';
import { MiningHero } from '@/components/sections/mining/MiningHero';
import { MiningSubsectors } from '@/components/sections/mining/MiningSubsectors';
import { MiningInvestment } from '@/components/sections/mining/MiningInvestment';
import { MiningStatistics } from '@/components/sections/mining/MiningStatistics';
import { MiningAdvantages } from '@/components/sections/mining/MiningAdvantages';
import { MiningTimeline } from '@/components/sections/mining/MiningTimeline';
import { MiningCTA } from '@/components/sections/mining/MiningCTA';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Mining Sector | WENNOVATE - Gold, Gemstones & Minerals Investment',
  description: 'Explore premium mining investment opportunities in gold extraction, gemstones, and industrial minerals. Strategic positioning, high ROI, and proven market access.',
  keywords: ['mining', 'gold mining', 'gemstones', 'industrial minerals', 'investment', 'Ethiopia', 'precious stones'],
};

export default function MiningPage() {
  return (
    <main className="bg-navy overflow-x-hidden">
      <Header />
      <MiningHero />
      <MiningSubsectors />
      <MiningInvestment />
      <MiningStatistics />
      <MiningAdvantages />
      <MiningTimeline />
      <MiningCTA />
      <Footer />
    </main>
  );
}
