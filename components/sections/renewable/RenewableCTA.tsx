'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function RenewableCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-navy via-slate-900 to-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Power the Future?
          </h2>
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
            Join Africa's renewable energy revolution. Connect with our investment specialists to explore opportunities in solar, wind, and sustainable manufacturing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-2xl transition-shadow"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-400/10 transition-colors"
            >
              Download Prospectus
            </motion.button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-left">
            <motion.a
              href="mailto:contact@wennovate.com"
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Email</p>
                <p className="font-semibold">contact@wennovate.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+251967446447"
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-400/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Phone</p>
                <p className="font-semibold">+251 96 744 6447</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
