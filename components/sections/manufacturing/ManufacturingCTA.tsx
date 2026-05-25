'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function ManufacturingCTA() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-navy to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, 0, 20],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sapphire-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Heading */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-crimson-500/20 text-crimson-400 rounded-full text-sm font-medium mb-6">
              Ready to Invest?
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-50 mb-6 leading-tight">
              Partner with Ethiopia&apos;s Manufacturing Future
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Connect with industry experts and investment specialists to explore opportunities across our manufacturing sectors.
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Email Option */}
            <motion.a
              href="mailto:manufacturing@wennovate.africa"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald to-emerald/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 group-hover:border-transparent p-8 rounded-lg transition-all duration-300">
                <Mail className="w-8 h-8 text-emerald-400 mb-4 group-hover:text-white transition-colors" />
                <h3 className="text-lg font-semibold text-slate-50 mb-2 group-hover:text-white transition-colors">
                  Email us
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-4">
                  manufacturing@wennovate.africa
                </p>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-white transition-colors font-semibold">
                  Send Message <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>

            {/* Phone Option */}
            <motion.a
              href="tel:+251967446447"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sapphire to-sapphire/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 group-hover:border-transparent p-8 rounded-lg transition-all duration-300">
                <Phone className="w-8 h-8 text-sapphire mb-4 group-hover:text-white transition-colors" />
                <h3 className="text-lg font-semibold text-slate-50 mb-2 group-hover:text-white transition-colors">
                  Call us
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-4">
                  +251 96 744 6447
                </p>
                <div className="flex items-center gap-2 text-sapphire-400 group-hover:text-white transition-colors font-semibold">
                  Start Conversation <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-emerald-500 to-sapphire-500 text-white font-semibold rounded-lg shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-slate-700"
          >
            <p className="text-slate-400 text-sm">
              Trusted by industry leaders and institutional investors across Africa
            </p>
            <div className="flex justify-center gap-8 mt-6 flex-wrap">
              {['ISO Certified', 'AAA Rated', 'Industry Leading', 'Expert Team'].map((badge, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-400"
                >
                  ✓ {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
