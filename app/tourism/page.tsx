import { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import TourismHero from '@/components/sections/tourism/TourismHero';
import FeaturedDestinations from '@/components/sections/tourism/FeaturedDestinations';
import LuxuryPackages from '@/components/sections/tourism/LuxuryPackages';
import AdventureExperiences from '@/components/sections/tourism/AdventureExperiences';
import CulturalTourism from '@/components/sections/tourism/CulturalTourism';
import BusinessVIPTravel from '@/components/sections/tourism/BusinessVIPTravel';
import HotelsResorts from '@/components/sections/tourism/HotelsResorts';
import PersonalizedPlanning from '@/components/sections/tourism/PersonalizedPlanning';
import TourismGallery from '@/components/sections/tourism/TourismGallery';
import ClientTestimonials from '@/components/sections/tourism/ClientTestimonials';
import GlobalPartners from '@/components/sections/tourism/GlobalPartners';
import TourismCTA from '@/components/sections/tourism/TourismCTA';

export const metadata: Metadata = {
  title: 'Luxury Tourism | WENNOVATE',
  description: 'Experience world-class luxury travel with Wennovate. Discover extraordinary destinations, bespoke itineraries, and VIP services across Africa.',
  keywords: [
    'luxury travel',
    'tourism',
    'safari',
    'cultural tourism',
    'Ethiopia travel',
    'VIP travel',
    'premium resorts',
    'adventure experiences',
  ],
  openGraph: {
    title: 'Luxury Tourism Experiences | WENNOVATE',
    description: 'Discover the extraordinary with our curated luxury travel experiences.',
    type: 'website',
  },
};

export default function TourismPage() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header />
      <TourismHero />
      <FeaturedDestinations />
      <LuxuryPackages />
      <AdventureExperiences />
      <CulturalTourism />
      <HotelsResorts />
      <BusinessVIPTravel />
      <PersonalizedPlanning />
      <TourismGallery />
      <ClientTestimonials />
      <GlobalPartners />
      <TourismCTA />
      <Footer />
    </main>
  );
}
