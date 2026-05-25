'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Ethiopian Airlines', logo: '✈️' },
  { name: 'Marriott International', logo: '🏨' },
  { name: 'National Geographic', logo: '📸' },
  { name: 'UNESCO', logo: '🌍' },
  { name: 'African Wildlife Foundation', logo: '🦁' },
  { name: 'World Travel Awards', logo: '🏆' },
];

export default function GlobalPartners() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-navy to-[#080a10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-white/30 text-sm font-medium tracking-widest uppercase">Trusted by Global Leaders</span>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
              <span className="text-4xl">{p.logo}</span>
              <span className="text-white/40 text-xs font-medium group-hover:text-white/70 transition-colors">{p.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
