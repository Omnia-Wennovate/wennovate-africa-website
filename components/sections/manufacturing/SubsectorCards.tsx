'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { TrendingUp, Zap, Award, Target } from 'lucide-react';
import { useState } from 'react';

interface SubsectorProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  stats: { label: string; value: string }[];
  color: string;
  accentColor: string;
  benefits: string[];
}

const subsectors: SubsectorProps[] = [
  {
    id: 'agro-processing',
    title: 'Agro-Processing',
    icon: <Zap className="w-8 h-8" />,
    image: '/images/manufacturing-agro-processing.jpg',
    description: 'Transform raw agricultural inputs into value-added products with world-class processing facilities.',
    stats: [
      { label: 'Market Size', value: '$850M' },
      { label: 'Growth Rate', value: '18%' },
    ],
    color: 'from-emerald to-emerald/80',
    accentColor: 'emerald',
    benefits: [
      'Abundant agricultural inputs',
      'Strategic market position',
      'Export opportunities',
      'Technology transfer',
    ],
  },
  {
    id: 'leather',
    title: 'Leather & Leather Products',
    icon: <Award className="w-8 h-8" />,
    image: '/images/manufacturing-leather.jpg',
    description: 'Produce premium quality leather and finished goods for the global market.',
    stats: [
      { label: 'Export Value', value: '$315M' },
      { label: 'Product Range', value: '50+' },
    ],
    color: 'from-sapphire to-sapphire/80',
    accentColor: 'sapphire',
    benefits: [
      'World-class raw materials',
      'International certifications',
      'Competitive pricing',
      'Skilled workforce',
    ],
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    icon: <TrendingUp className="w-8 h-8" />,
    image: '/images/manufacturing-textiles.jpg',
    description: 'Manufacturing high-quality textiles and apparel for domestic and international markets.',
    stats: [
      { label: 'Industry Size', value: '$425M' },
      { label: 'Capacity Utilization', value: '72%' },
    ],
    color: 'from-gold to-gold/80',
    accentColor: 'gold',
    benefits: [
      'Low labor costs',
      'Modern machinery',
      'Quality standards',
      'Market access',
    ],
  },
  {
    id: 'food-beverage',
    title: 'Food & Beverage',
    icon: <Target className="w-8 h-8" />,
    image: '/images/manufacturing-food-beverage.jpg',
    description: 'State-of-the-art food and beverage production facilities with international standards.',
    stats: [
      { label: 'Facility Count', value: '280+' },
      { label: 'Employment', value: '35K' },
    ],
    color: 'from-crimson to-crimson/80',
    accentColor: 'crimson',
    benefits: [
      'Local ingredient supply',
      'Growing domestic demand',
      'Export certifications',
      'Innovation capacity',
    ],
  },
];

export default function SubsectorCards() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative py-20 bg-navy overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-sapphire-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">
            Four Pillars
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Manufacturing Subsectors
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Strategic investment opportunities across key manufacturing segments
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {subsectors.map((subsector) => (
            <motion.div
              key={subsector.id}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredId(subsector.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative h-full"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl group-hover:border-slate-600 transition-all duration-300" />

              {/* Gradient Overlay on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredId === subsector.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-br ${subsector.color} opacity-5 rounded-2xl pointer-events-none`}
              />

              {/* Content */}
              <div className="relative z-10 h-full p-6 flex flex-col">
                {/* Icon */}
                <motion.div
                  animate={{
                    scale: hoveredId === subsector.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subsector.color} text-navy flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  {subsector.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {subsector.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-4 flex-grow group-hover:text-slate-300 transition-colors">
                  {subsector.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {subsector.stats.map((stat, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-lg p-3">
                      <p className={`text-sm font-semibold bg-gradient-to-r ${subsector.color} text-transparent bg-clip-text`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Benefits List */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredId === subsector.id ? 1 : 0,
                    height: hoveredId === subsector.id ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pt-3 border-t border-slate-700">
                    {subsector.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${subsector.color}`} />
                        <span className="text-xs text-slate-400">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-4 py-2 px-4 bg-gradient-to-r ${subsector.color} text-navy font-semibold rounded-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
