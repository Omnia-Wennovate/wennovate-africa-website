'use client';

import { motion, type Variants } from 'framer-motion';
import { DollarSign, Zap, Shield, TrendingUp } from 'lucide-react';

interface OpportunityProps {
  title: string;
  description: string;
  roiRange: string;
  timeline: string;
  icon: React.ReactNode;
  highlights: string[];
}

const opportunities: OpportunityProps[] = [
  {
    title: 'Agro-Processing Hub',
    description: 'Establish integrated processing facilities leveraging local agricultural inputs.',
    roiRange: '28-35%',
    timeline: '3-4 years',
    icon: <Zap className="w-6 h-6" />,
    highlights: ['Low input costs', 'Export markets', 'Technology transfer'],
  },
  {
    title: 'Leather Cluster Development',
    description: 'Develop world-class leather production and finished goods manufacturing.',
    roiRange: '24-31%',
    timeline: '2-3 years',
    icon: <Shield className="w-6 h-6" />,
    highlights: ['Premium materials', 'Global demand', 'Certification ready'],
  },
  {
    title: 'Textile Manufacturing Parks',
    description: 'Build modern textile facilities with integrated supply chain management.',
    roiRange: '22-28%',
    timeline: '4-5 years',
    icon: <TrendingUp className="w-6 h-6" />,
    highlights: ['Skilled workforce', 'Competitive costs', 'Market growth'],
  },
  {
    title: 'Food & Beverage Production',
    description: 'Create state-of-the-art food processing and packaging facilities.',
    roiRange: '20-26%',
    timeline: '2-3 years',
    icon: <DollarSign className="w-6 h-6" />,
    highlights: ['Local demand', 'Export potential', 'Premium margins'],
  },
];

export default function ManufacturingInvestment() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const },
    },
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sapphire-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sapphire-500/20 text-sapphire-400 rounded-full text-sm font-medium mb-4">
            Investment Opportunities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            High-Return Opportunities
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Strategic investment vehicles offering competitive returns and sustainable growth
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {opportunities.map((opp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900 border border-slate-700 rounded-xl group-hover:border-emerald-500/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-emerald-500/10" />

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-50 mb-2 group-hover:text-emerald-400 transition-colors">
                      {opp.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-sapphire-500 text-white flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all">
                    {opp.icon}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors">
                  {opp.description}
                </p>

                {/* ROI & Timeline */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                      Expected ROI
                    </p>
                    <p className="text-2xl font-bold text-emerald-400">
                      {opp.roiRange}
                    </p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                      Timeline
                    </p>
                    <p className="text-lg font-bold text-sapphire-400">
                      {opp.timeline}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {opp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-sm text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 bg-gradient-to-r from-emerald to-emerald/80 text-navy font-semibold rounded-lg opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
                >
                  Request Prospectus
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
