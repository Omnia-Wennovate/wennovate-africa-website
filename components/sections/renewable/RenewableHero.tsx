'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';

// Fixed particle positions to avoid SSR/client hydration mismatch
const PARTICLES = [
  { left: '15%', top: '20%', xOffset: 12 },
  { left: '40%', top: '55%', xOffset: -18 },
  { left: '65%', top: '30%', xOffset: 20 },
  { left: '80%', top: '70%', xOffset: -10 },
  { left: '30%', top: '80%', xOffset: 15 },
];

export default function RenewableHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-navy via-slate-900 to-navy pt-32 pb-20 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, p.xOffset, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: p.left,
              top: p.top,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-emerald-400 font-semibold text-sm">Clean Energy Revolution</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Power the Future with{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Renewable Energy
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Africa&apos;s sustainable energy potential is immense. Ethiopia leads with 60,000 MW renewable capacity and growing manufacturing innovation transforming the continent&apos;s economic future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-2xl transition-shadow"
            >
              Explore Opportunities
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-400 text-slate-300 rounded-lg font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-colors"
            >
              View Roadmap
            </motion.button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-96 md:h-full"
        >
          <Image
            src="/images/renewable-hero.jpg"
            alt="Renewable energy landscape"
            fill
            className="object-cover rounded-2xl"
            priority
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy/80 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
