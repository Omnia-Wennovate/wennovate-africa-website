'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export function AgricultureHero() {
  return (
    <section className="relative min-h-screen bg-navy pt-32 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald/20 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6 z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <Leaf className="w-5 h-5 text-emerald" />
              <span className="text-sm font-medium text-emerald uppercase tracking-wider">
                Agriculture Sector
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-50 leading-tight text-balance"
            >
              Transforming African Agriculture
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              Ethiopia's agricultural sector represents Africa's most promising frontier, with 1.22 million square kilometers of arable land, diverse climates, and untapped investment opportunities. We unlock sustainable growth through strategic innovation and development.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald to-sapphire text-navy font-semibold rounded-lg flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
              >
                Explore Opportunities
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-emerald/50 text-slate-50 font-semibold rounded-lg hover:border-emerald hover:bg-emerald/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-700"
            >
              {[
                { value: '50%', label: 'GDP Share' },
                { value: '85%', label: 'Employment' },
                { value: '1.22M', label: 'Sq Kilometers' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="pt-4"
                >
                  <p className="text-2xl font-bold text-gold">{stat.value}</p>
                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="relative h-96 lg:h-full min-h-96"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden border border-emerald/20 shadow-2xl"
              whileHover={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}
            >
              <Image
                src="/images/agriculture-hero.jpg"
                alt="Sustainable agriculture fields"
                fill
                className="object-cover"
                priority
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-30" />
            </motion.div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 left-0 sm:-left-8 bg-navy border border-emerald/30 rounded-xl p-4 sm:p-6 shadow-xl max-w-[200px] sm:max-w-xs"
            >
              <p className="text-sm text-slate-400 mb-2">Agriculture Growth</p>
              <p className="text-2xl font-bold text-emerald">+315.14M USD</p>
              <p className="text-xs text-slate-500 mt-2">2018/19 Export Revenue</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
