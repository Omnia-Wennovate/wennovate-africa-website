'use client';

import { motion, useInView } from 'framer-motion';
import { MapPin, ArrowUpRight, Star } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const destinations = [
  { name: 'Lalibela', country: 'Ethiopia', description: 'Ancient rock-hewn churches carved from living stone.', image: '/images/tourism-landmarks.jpg', rating: 4.9, tours: 12, tag: 'Heritage' },
  { name: 'Zanzibar', country: 'Tanzania', description: 'Crystal-clear waters and pristine white sand beaches.', image: '/images/tourism-coastal.jpg', rating: 4.8, tours: 8, tag: 'Beach' },
  { name: 'Simien Mountains', country: 'Ethiopia', description: 'Dramatic cliffs and breathtaking highland landscapes.', image: '/images/tourism-mountains-sunrise.png', rating: 4.9, tours: 6, tag: 'Adventure' },
  { name: 'Serengeti', country: 'Tanzania', description: 'Witness the Great Migration across golden plains.', image: '/images/tourism-safari-sunset.png', rating: 5.0, tours: 15, tag: 'Safari' },
  { name: 'Omo Valley', country: 'Ethiopia', description: 'Encounter ancient tribal cultures preserved for millennia.', image: '/images/tourism-cultural.jpg', rating: 4.7, tours: 5, tag: 'Cultural' },
  { name: 'Bali', country: 'Indonesia', description: 'Lush rice terraces and world-class luxury retreats.', image: '/images/tourism-resort.jpg', rating: 4.8, tours: 10, tag: 'Wellness' },
];

function DestinationCard({ dest, index }: { dest: typeof destinations[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale3d(1.02,1.02,1.02)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1,1,1)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
        className="group relative rounded-3xl overflow-hidden cursor-pointer transition-[transform] duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-amber-400/40 via-transparent to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        <div className="relative bg-navy/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 group-hover:border-transparent transition-colors duration-500 z-[1]">
          <div className="relative h-64 overflow-hidden">
            <Image src={dest.image} alt={dest.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 text-white text-xs font-semibold">{dest.tag}</div>
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-amber-500/90 text-navy text-xs font-bold">{dest.tours} tours</div>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">{dest.name}</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400/70" />
                  <span className="text-white/50 text-sm">{dest.country}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-white text-sm font-semibold">{dest.rating}</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">{dest.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-amber-400/70 text-sm font-medium">Explore</span>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-amber-400 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedDestinations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section ref={ref} className="relative py-32 bg-navy overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-block text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Handpicked Destinations</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Where Will You <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Go Next?</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Each destination is personally curated by our travel experts to deliver extraordinary experiences.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => <DestinationCard key={d.name} dest={d} index={i} />)}
        </div>
      </div>
    </section>
  );
}
