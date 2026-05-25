'use client';

import { motion, type Variants } from 'framer-motion';
import { Users, Zap, Globe, TrendingUp, DollarSign, Award } from 'lucide-react';

interface AdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const advantages: AdvantageProps[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Skilled Workforce',
    description: 'Large, trainable population with growing technical expertise',
    details: [
      'Over 100M population',
      'Youth bulge advantage',
      'Technical training programs',
      'Cost-competitive labor',
    ],
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Competitive Costs',
    description: 'Lowest manufacturing costs in Sub-Saharan Africa',
    details: [
      'Wage costs 40-60% lower',
      'Power costs $0.02-0.03/kWh',
      'Land availability',
      'Tax incentives',
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Infrastructure',
    description: 'Modern industrial zones and logistics networks',
    details: [
      'Industrial parks ready',
      'Road network expanding',
      'Port access improving',
      'Digital connectivity',
    ],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Market Access',
    description: 'Preferential trade access and growing regional markets',
    details: [
      'AGOA benefits',
      'African trade blocs',
      '1.4B+ regional population',
      'Customs benefits',
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Local Inputs',
    description: 'Abundant agricultural and mineral raw materials',
    details: [
      'Agricultural surplus',
      'Mineral resources',
      'Processing potential',
      'Export ready',
    ],
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Government Support',
    description: 'Strong policy framework and investment incentives',
    details: [
      'Industrial policy focus',
      'Customs duty exemptions',
      'Export incentives',
      'Land guarantees',
    ],
  },
];

export default function CompetitiveAdvantages() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const },
    },
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-sapphire-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold-500/20 text-gold-400 rounded-full text-sm font-medium mb-4">
            Competitive Strengths
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Why Ethiopia?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Unique combination of factors positioning Ethiopia as Africa&apos;s manufacturing hub
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900 border border-slate-700 rounded-xl group-hover:border-emerald-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/10" />

              {/* Gradient Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-br from-emerald to-sapphire opacity-0 group-hover:opacity-[0.03] rounded-xl transition-opacity duration-300"
              />

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500 to-sapphire-500 text-white flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-shadow"
                >
                  {advantage.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-emerald-400 transition-colors">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors">
                  {advantage.description}
                </p>

                {/* Details List */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 'auto' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  {advantage.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-sapphire-500" />
                      <span className="text-sm text-slate-300">{detail}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
