'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, Users, TrendingUp, Leaf, Shield } from 'lucide-react';

const advantages = [
  {
    icon: Globe,
    title: 'Strategic Location',
    description: 'Gateway to Middle East, Europe, and Asian markets with COMESA access',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Cost Advantages',
    description: 'Competitive labor and electricity costs (2-3 cents/kWh)',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Users,
    title: 'Skilled Workforce',
    description: 'Available mining expertise and technical talent pool',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Market Growth',
    description: '400M+ consumer market in East Africa with 110M domestic market',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Leaf,
    title: 'Sustainability Focus',
    description: 'Government commitment to responsible mining practices',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Shield,
    title: 'Policy Support',
    description: 'Industrial policy framework and export incentive programs',
    color: 'from-red-500 to-red-600',
  },
];

export function MiningAdvantages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-navy to-slate-900">
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
            className="text-5xl font-bold text-slate-50 mb-4"
          >
            Competitive Advantages
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
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Strategic positioning for sustainable and profitable mining operations
          </motion.p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, idx) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 cursor-pointer"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-50" />

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${advantage.color} flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-50">{advantage.title}</h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">{advantage.description}</p>

                  {/* Hover Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className={`h-1 bg-gradient-to-r ${advantage.color} rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
