'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export function MiningCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-navy via-slate-900 to-navy overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Heading */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-slate-50"
            >
              Ready to Invest?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Let&apos;s discuss how your investment can unlock Africa&apos;s mineral wealth and achieve exceptional returns
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(250, 204, 21, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-navy font-bold px-10 py-4 rounded-lg flex items-center gap-3 transition-all text-lg"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 text-slate-50 font-bold px-10 py-4 rounded-lg border border-white/20 transition-all text-lg"
            >
              Download Prospectus
            </motion.button>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"
          >
            <motion.a
              href="mailto:wennovate2021@gmail.com"
              whileHover={{ x: 4 }}
              className="flex items-center justify-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>wennovate2021@gmail.com</span>
            </motion.a>
            <motion.a
              href="tel:+251967446447"
              whileHover={{ x: 4 }}
              className="flex items-center justify-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>+251 96 744 6447</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
