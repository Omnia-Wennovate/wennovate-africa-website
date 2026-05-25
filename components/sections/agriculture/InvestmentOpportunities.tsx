'use client';

import { motion, type Variants } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const opportunities = [
  {
    title: 'Export-Grade Production',
    description: 'Scale certified agricultural production for international markets with premium pricing',
    features: ['International standards', 'Quality assurance', 'Market access'],
    roi: '+40%',
  },
  {
    title: 'Agricultural Processing',
    description: 'Establish value-added processing facilities for crops and livestock products',
    features: ['Higher margins', 'Employment creation', 'Tech integration'],
    roi: '+55%',
  },
  {
    title: 'Agritech Solutions',
    description: 'Deploy smart farming technologies, irrigation, and soil monitoring systems',
    features: ['Digital farming', 'Efficiency gains', 'Sustainability'],
    roi: '+65%',
  },
  {
    title: 'Cold Chain & Logistics',
    description: 'Build post-harvest infrastructure to reduce losses and enable market access',
    features: ['Reduce waste', 'Market expansion', 'Infrastructure'],
    roi: '+50%',
  },
];

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

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export function InvestmentOpportunities() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-navy py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald text-sm font-semibold uppercase tracking-wider mb-4">
            Investment Opportunities
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4 text-balance">
            Strategic Growth Initiatives
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            High-return investment opportunities across the agricultural value chain
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {opportunities.map((opp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, borderColor: 'rgba(16, 185, 129, 0.5)' }}
              className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 overflow-hidden transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-sapphire/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-50 mb-2 group-hover:text-emerald transition-colors">
                      {opp.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {opp.description}
                    </p>
                  </div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="text-3xl font-bold text-gold whitespace-nowrap ml-4"
                  >
                    {opp.roi}
                  </motion.div>
                </div>

                {/* Features */}
                <div className="space-y-3 border-t border-slate-700/50 pt-6">
                  {opp.features.map((feature, fidx) => (
                    <motion.div
                      key={fidx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fidx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-emerald text-sm font-semibold flex items-center gap-2 pt-2 group/btn"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">Ready to explore investment opportunities?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-emerald to-sapphire text-navy font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
