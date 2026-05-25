'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export function MiningHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const stats = [
    { value: '$505M', label: 'Gold Export (2020/21)' },
    { value: '4M+', label: 'Tons Annual Production' },
    { value: '1% GDP', label: 'Current Contribution' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-navy via-slate-900 to-navy pt-32 pb-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-yellow-400"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Mining Sector Excellence</span>
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight"
              >
                Unlocking Africa&apos;s Mineral Wealth
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl"
              >
                Ethiopia&apos;s significant mineral deposits—gold, gemstones, and industrial minerals—present extraordinary investment opportunities with competitive advantages and strategic market positioning.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                  className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 hover:border-yellow-400/50 transition-colors"
                >
                  <motion.div
                    className="text-2xl sm:text-3xl font-bold text-yellow-400"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm text-slate-400 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-navy font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transition-all"
              >
                Explore Opportunities <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-slate-50 font-semibold px-8 py-4 rounded-lg border border-white/20 transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden"
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-navy via-transparent to-yellow-500/20 z-10" />
            <Image
              src="/images/mining-hero.jpg"
              alt="Mining Operations"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
