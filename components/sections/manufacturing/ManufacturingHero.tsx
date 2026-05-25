'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ManufacturingHero() {
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
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as const },
    },
  };

  const stats = [
    { label: 'Manufacturing Growth', value: '23%' },
    { label: 'Job Creation', value: '45K+' },
    { label: 'Export Potential', value: '$2.1B' },
  ];

  return (
    <section className="relative min-h-screen bg-navy pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sapphire-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">
                Industrial Excellence
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-50 leading-tight">
                Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-sapphire">Excellence</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg"
            >
              Ethiopia&apos;s manufacturing sector is transforming with world-class facilities, skilled workforce, and strategic advantages. Discover investment opportunities in agro-processing, leather, textiles, and food & beverage manufacturing.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald to-emerald/80 text-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Explore Opportunities
                <ArrowRight size={20} />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border border-slate-600 text-slate-50 font-semibold rounded-lg hover:bg-slate-600/10 transition-all duration-300">
                View Market Analysis
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                  <p className="text-2xl font-bold text-emerald-400 mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald/20 to-sapphire/20 rounded-2xl" />
            <Image
              src="/images/manufacturing-hero.jpg"
              alt="Manufacturing facility"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent rounded-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
