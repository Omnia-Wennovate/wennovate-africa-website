'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Crown, Gem, Shield } from 'lucide-react';
import Image from 'next/image';

const packages = [
  {
    name: 'Heritage Explorer',
    duration: '7 Days',
    price: '$2,490',
    image: '/images/tourism-landmarks.jpg',
    icon: Crown,
    color: 'from-amber-500 to-orange-500',
    features: ['UNESCO Heritage Sites', 'Private Expert Guide', 'Luxury Boutique Hotels', 'Traditional Cuisine Tour', 'Airport Transfers'],
    popular: false,
  },
  {
    name: 'Royal Safari',
    duration: '10 Days',
    price: '$4,890',
    image: '/images/tourism-safari-sunset.png',
    icon: Gem,
    color: 'from-emerald-500 to-teal-500',
    features: ['Big Five Game Drives', 'Luxury Tented Camps', 'Hot Air Balloon Ride', 'Bush Dinner Experience', 'Professional Photography', 'Spa & Wellness'],
    popular: true,
  },
  {
    name: 'Ultimate Retreat',
    duration: '14 Days',
    price: '$7,990',
    image: '/images/tourism-luxury-resort.png',
    icon: Shield,
    color: 'from-blue-500 to-indigo-500',
    features: ['Private Villa Stay', 'Helicopter Transfers', 'Yacht Excursion', 'Personal Concierge', 'Fine Dining', 'Cultural Immersion', 'Wellness Program'],
    popular: false,
  },
];

export default function LuxuryPackages() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-navy via-[#0a0d14] to-navy overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/10 via-transparent to-transparent rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Curated Packages</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Travel Packages</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Thoughtfully designed itineraries that blend luxury, culture, and adventure into unforgettable journeys.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`group relative rounded-3xl overflow-hidden ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}>
              {pkg.popular && (
                <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-400 z-0 animate-pulse" style={{ animationDuration: '3s' }} />
              )}
              <div className={`relative bg-[#0d1017] rounded-3xl overflow-hidden border ${pkg.popular ? 'border-transparent' : 'border-white/5'} z-[1] h-full flex flex-col`}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] to-transparent" />
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-navy text-xs font-bold">Most Popular</div>
                  )}
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                      <pkg.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                      <span className="text-white/40 text-sm">{pkg.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold text-white">{pkg.price}</span>
                    <span className="text-white/30 text-sm">/ person</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-white/60 text-sm">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-navy shadow-lg shadow-amber-500/20'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }`}>
                    Book Now <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
