'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Target, Zap } from 'lucide-react';

const opportunities = [
  {
    id: 1,
    title: 'Gold Extraction & Refining',
    roi: '25-35%',
    timeline: '3-5 years',
    investment: '$50-150M',
    description: 'Establish premium gold mining and refining facilities with international standards',
    features: ['Modern extraction tech', 'ISO certified refining', 'Export market access'],
    icon: TrendingUp,
  },
  {
    id: 2,
    title: 'Gemstone Processing',
    roi: '28-40%',
    timeline: '2-4 years',
    investment: '$20-80M',
    description: 'World-class gemstone cutting, polishing, and certification operations',
    features: ['International quality', 'Certification hubs', 'Luxury market focus'],
    icon: Target,
  },
  {
    id: 3,
    title: 'Industrial Mineral Ops',
    roi: '20-30%',
    timeline: '2-3 years',
    investment: '$30-100M',
    description: 'Large-scale industrial mineral mining with infrastructure development',
    features: ['Strategic deposits', 'Infrastructure support', 'Domestic + export'],
    icon: Zap,
  },
  {
    id: 4,
    title: 'Mining Technology Hub',
    roi: '30-45%',
    timeline: '2-3 years',
    investment: '$25-75M',
    description: 'Advanced automation, drone surveying, and digital mining operations center',
    features: ['Industry 4.0 ready', 'Data analytics', 'Remote operations'],
    icon: Calendar,
  },
];

export function MiningInvestment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-navy via-slate-900 to-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Investment Opportunities
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
            High-ROI mining ventures with proven market demand and strategic positioning
          </motion.p>
        </motion.div>

        {/* Opportunity Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {opportunities.map((opp, idx) => {
            const Icon = opp.icon;
            return (
              <motion.div
                key={opp.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px rgba(250, 204, 21, 0.15)',
                }}
                className="relative overflow-hidden rounded-xl border border-yellow-500/20 bg-gradient-to-br from-white/5 to-yellow-500/5 backdrop-blur-sm p-8 group"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Top Row */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Expected ROI</p>
                      <p className="text-2xl font-bold text-green-400">{opp.roi}</p>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-50 mb-2">{opp.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{opp.description}</p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Investment</p>
                      <p className="text-lg font-semibold text-yellow-400">{opp.investment}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Timeline</p>
                      <p className="text-lg font-semibold text-blue-400">{opp.timeline}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {opp.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center gap-2 text-slate-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="w-full py-3 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 font-semibold transition-colors text-sm uppercase tracking-wide"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
