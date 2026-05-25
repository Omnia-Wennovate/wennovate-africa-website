'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  { src: '/images/tourism-luxury-resort.png', title: 'Luxury Resort', category: 'Resorts' },
  { src: '/images/tourism-safari-sunset.png', title: 'African Safari', category: 'Safari' },
  { src: '/images/tourism-mountains-sunrise.png', title: 'Mountain Vista', category: 'Nature' },
  { src: '/images/tourism-cultural.jpg', title: 'Cultural Heritage', category: 'Culture' },
  { src: '/images/tourism-coastal.jpg', title: 'Coastal Paradise', category: 'Beach' },
  { src: '/images/tourism-landmarks.jpg', title: 'Historic Landmarks', category: 'Heritage' },
  { src: '/images/tourism-resort.jpg', title: 'Premium Stay', category: 'Resorts' },
  { src: '/images/tourism-adventure.jpg', title: 'Wild Adventure', category: 'Safari' },
];

const categories = ['All', 'Safari', 'Nature', 'Culture', 'Beach', 'Heritage', 'Resorts'];

export default function TourismGallery() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? galleryImages : galleryImages.filter(img => img.category === active);

  return (
    <section className="relative py-32 bg-gradient-to-b from-navy via-[#080a10] to-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Tourism <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Gallery</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">A glimpse into the extraordinary experiences awaiting you.</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-navy shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <motion.div key={img.src + active} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <div className={`relative ${i === 0 ? 'h-full min-h-[400px]' : 'h-56'}`}>
                <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-semibold text-sm">{img.title}</h4>
                  <span className="text-amber-400/70 text-xs">{img.category}</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-amber-400/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
