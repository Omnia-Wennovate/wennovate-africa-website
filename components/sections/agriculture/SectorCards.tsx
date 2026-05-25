'use client';

import { motion, type Variants } from 'framer-motion';
import { Zap, TrendingUp, Sprout } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface SectorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  stats: { label: string; value: string }[];
  gradient: string;
}

function SectorCard({
  title,
  description,
  icon,
  image,
  stats,
  gradient,
}: SectorCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full group"
      whileHover={{ y: -10 }}
    >
      <div className="relative h-full rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald/50 transition-colors bg-slate-800/20 backdrop-blur-sm">
        {/* Image Background */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-90`} />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col p-8 justify-between">
          {/* Top Icon */}
          <motion.div
            initial={{ opacity: 0.8, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center backdrop-blur-md text-white"
          >
            {icon}
          </motion.div>

          {/* Bottom Content */}
          <div className="space-y-4">
            {/* Title & Description */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="space-y-2"
            >
              <h3 className="text-2xl font-bold text-slate-50">{title}</h3>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  height: isHovered ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-sm text-slate-200 leading-relaxed overflow-hidden"
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0.7,
                y: isHovered ? 0 : 10,
              }}
              className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10"
            >
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-xs text-slate-300 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold text-gold mt-1">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function SectorCards() {
  const sectors = [
    {
      title: 'Crop Production',
      description:
        'Advanced crop cultivation leveraging diverse climatic zones and fertile soils for staple and export crops.',
      icon: <Sprout className="w-6 h-6" />,
      image: '/images/agriculture-crops.jpg',
      stats: [
        { label: 'Potential', value: '70%' },
        { label: 'Growth', value: '+45%' },
      ],
      gradient: 'from-emerald-900',
    },
    {
      title: 'Livestock',
      description:
        'Large-scale animal husbandry with adaptable genotypes and export-focused value chains for meat and dairy.',
      icon: <Zap className="w-6 h-6" />,
      image: '/images/agriculture-livestock.jpg',
      stats: [
        { label: 'Capacity', value: '6,000' },
        { label: 'Growth', value: '+35%' },
      ],
      gradient: 'from-sapphire-900',
    },
    {
      title: 'Horticulture',
      description:
        'Fruit and vegetable production with international market penetration and premium pricing opportunities.',
      icon: <TrendingUp className="w-6 h-6" />,
      image: '/images/agriculture-horticulture.jpg',
      stats: [
        { label: 'Hectares', value: '12K' },
        { label: 'Opportunity', value: '+60%' },
      ],
      gradient: 'from-gold-900',
    },
  ];

  return (
    <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald text-sm font-semibold uppercase tracking-wider mb-4">
            Core Sectors
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4 text-balance">
            Three Pillars of Agricultural Excellence
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Strategic focus areas representing the highest growth potential and investment returns in Ethiopian agriculture
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sectors.map((sector, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <SectorCard
                title={sector.title}
                description={sector.description}
                icon={sector.icon}
                image={sector.image}
                stats={sector.stats}
                gradient={sector.gradient}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
