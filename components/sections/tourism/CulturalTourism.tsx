'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Palette, Music } from 'lucide-react';
import Image from 'next/image';

const cultures = [
  { title: 'Ancient Ceremonies', description: 'Witness sacred rituals dating back millennia in the heart of Ethiopia.', image: '/images/tourism-cultural.jpg', icon: Globe, stat: '3,000+ years of history' },
  { title: 'Tribal Encounters', description: 'Meet the indigenous peoples of the Omo Valley and learn their timeless traditions.', image: '/images/tourism-adventure.jpg', icon: Users, stat: '80+ ethnic groups' },
  { title: 'Art & Craftsmanship', description: 'Discover handcrafted textiles, pottery, and jewelry from master artisans.', image: '/images/tourism-landmarks.jpg', icon: Palette, stat: 'UNESCO recognized' },
  { title: 'Music & Dance', description: 'Experience the rhythm of traditional music and colorful ceremonial dances.', image: '/images/tourism-mountains.jpg', icon: Music, stat: 'Living heritage' },
];

export default function CulturalTourism() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-navy via-[#080a10] to-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Featured Image */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image src="/images/tourism-cultural.jpg" alt="Cultural tourism" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:right-8 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl">
              <div className="text-3xl font-bold text-amber-400">9</div>
              <div className="text-white/60 text-sm">UNESCO World<br />Heritage Sites</div>
            </motion.div>
            {/* Decorative border */}
            <div className="absolute -inset-3 rounded-3xl border border-amber-400/10 -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Immersive Culture</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Cultural <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Immersion</span></h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">Step into living history. Ethiopia&apos;s cultural tapestry is one of the richest on Earth, with traditions that have endured for over three millennia.</p>

            <div className="space-y-4">
              {cultures.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <c.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-amber-300 transition-colors">{c.title}</h3>
                    <p className="text-white/40 text-sm mt-1">{c.description}</p>
                    <span className="text-amber-400/60 text-xs font-medium mt-2 block">{c.stat}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
