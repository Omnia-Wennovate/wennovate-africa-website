'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, Gem, Pickaxe, Crown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const subsectors = [
  {
    id: 1,
    name: 'Gold Mining',
    color: 'from-yellow-500 to-yellow-600',
    icon: Crown,
    description: 'World-class gold reserves with $505M export value in 2020/21',
    features: ['Major deposits in Oromia & SNNPR', '$5M to $505M growth', '4M+ tons annual capacity'],
    image: '/images/mining-gold.jpg',
    accentColor: 'text-yellow-400',
    bgAccent: 'bg-yellow-500/10',
    borderAccent: 'border-yellow-500/30',
  },
  {
    id: 2,
    name: 'Gemstones',
    color: 'from-blue-500 to-blue-600',
    icon: Gem,
    description: 'Opal, emerald, beryl & sapphire deposits with international markets',
    features: ['Emerald discovered near Addis Ababa', 'Opal, cordium, garnet reserves', 'Export to global markets'],
    image: '/images/mining-gemstone.jpg',
    accentColor: 'text-blue-400',
    bgAccent: 'bg-blue-500/10',
    borderAccent: 'border-blue-500/30',
  },
  {
    id: 3,
    name: 'Industrial Minerals',
    color: 'from-green-500 to-green-600',
    icon: Pickaxe,
    description: 'Potash, limestone, and other industrial mineral reserves',
    features: ['Strategic mineral deposits', 'Infrastructure support', 'Competitive market positioning'],
    image: '/images/mining-industrial.jpg',
    accentColor: 'text-green-400',
    bgAccent: 'bg-green-500/10',
    borderAccent: 'border-green-500/30',
  },
  {
    id: 4,
    name: 'Precious Stones',
    color: 'from-red-500 to-red-600',
    icon: Zap,
    description: 'High-value precious stone processing and international trade',
    features: ['Global market access', 'Processing facilities', 'Export-oriented growth'],
    image: '/images/mining-precious.jpg',
    accentColor: 'text-red-400',
    bgAccent: 'bg-red-500/10',
    borderAccent: 'border-red-500/30',
  },
];

export function MiningSubsectors() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50 mb-4"
          >
            Mining Subsectors
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex gap-2 justify-center mb-4"
          >
            <div className="w-4 h-1 bg-yellow-500 rounded-full" />
            <div className="w-12 h-1 bg-yellow-500 rounded-full" />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Strategic investment opportunities across Ethiopia&apos;s mineral sector
          </motion.p>
        </motion.div>

        {/* Subsector Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {subsectors.map((subsector) => {
            const Icon = subsector.icon;
            return (
              <motion.div
                key={subsector.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(subsector.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${subsector.borderAccent} ${subsector.bgAccent} backdrop-blur-md cursor-pointer`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${subsector.color} opacity-5`} />

                {/* Content Wrapper */}
                <div className="relative p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {/* Left Content */}
                  <div className="flex flex-col justify-between space-y-6">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: hoveredId === subsector.id ? 12 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className={`w-16 h-16 rounded-xl ${subsector.bgAccent} border ${subsector.borderAccent} flex items-center justify-center`}
                    >
                      <Icon className={`w-8 h-8 ${subsector.accentColor}`} />
                    </motion.div>

                    {/* Text Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-50">{subsector.name}</h3>
                      <p className="text-slate-300 leading-relaxed">{subsector.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {subsector.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: hoveredId === subsector.id ? 1 : 0.7, x: 0 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full ${subsector.accentColor} mt-2 flex-shrink-0`} />
                          <span className="text-sm text-slate-400">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ gap: '12px' }}
                      className={`flex items-center gap-2 font-semibold ${subsector.accentColor} hover:opacity-80 transition-opacity pt-4`}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Right Image */}
                  <motion.div
                    className="relative h-80 rounded-xl overflow-hidden hidden md:block"
                    animate={{
                      scale: hoveredId === subsector.id ? 1.05 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-tr ${subsector.color} opacity-20 z-10`} />
                    <Image
                      src={subsector.image}
                      alt={subsector.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
