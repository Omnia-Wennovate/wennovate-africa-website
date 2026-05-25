'use client';

import { motion } from 'framer-motion';
import { Star, Wifi, UtensilsCrossed, Dumbbell, Waves as Pool } from 'lucide-react';
import Image from 'next/image';

const hotels = [
  { name: 'Kuriftu Resort & Spa', location: 'Lake Tana, Ethiopia', stars: 5, image: '/images/tourism-resort.jpg', amenities: ['Spa', 'Fine Dining', 'Infinity Pool', 'Lake View'], price: 'From $320/night' },
  { name: 'Simien Lodge', location: 'Simien Mountains, Ethiopia', stars: 5, image: '/images/tourism-mountains-sunrise.png', amenities: ['Mountain Views', 'Fireplace Suite', 'Guided Treks', 'Organic Dining'], price: 'From $280/night' },
  { name: 'Haile Resort', location: 'Hawassa, Ethiopia', stars: 5, image: '/images/tourism-luxury-resort.png', amenities: ['Private Beach', 'Water Sports', 'Gym & Spa', 'Conference Hall'], price: 'From $250/night' },
];

const amenityIcons: Record<string, typeof Wifi> = { 'Spa': Pool, 'Fine Dining': UtensilsCrossed, 'Infinity Pool': Pool, 'Gym & Spa': Dumbbell };

export default function HotelsResorts() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#080a10] to-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Premium Accommodations</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Hotels & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Resorts</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Handpicked luxury accommodations that redefine comfort and elegance.</p>
        </motion.div>

        <div className="space-y-8">
          {hotels.map((hotel, i) => (
            <motion.div key={hotel.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="group grid md:grid-cols-2 rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-amber-400/15 transition-all duration-500 cursor-pointer">
              <div className={`relative h-72 md:h-auto overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent md:bg-none" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: hotel.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">{hotel.name}</h3>
                <p className="text-white/40 text-sm mb-6">{hotel.location}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {hotel.amenities.map(a => (
                    <span key={a} className="px-3 py-1.5 rounded-full bg-white/5 text-white/50 text-xs border border-white/5">{a}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-semibold">{hotel.price}</span>
                  <motion.button whileHover={{ scale: 1.05 }} className="px-5 py-2.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium border border-amber-400/20 hover:bg-amber-500/20 transition-all">View Details</motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
