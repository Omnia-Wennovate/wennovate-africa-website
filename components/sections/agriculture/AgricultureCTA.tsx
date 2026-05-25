'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export function AgricultureCTA() {
  return (
    <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-emerald/30 bg-gradient-to-br from-slate-800/50 via-navy to-slate-900/50 p-12 md:p-16 overflow-hidden"
        >
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald/10 via-sapphire/10 to-gold/10 opacity-0"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10 text-center space-y-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-50 text-balance">
                Ready to Transform Agriculture?
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Connect with our agricultural experts to explore investment opportunities, develop sustainable strategies, and unlock growth potential
              </p>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8"
            >
              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+251 96 744 6447',
                  href: 'tel:+251967446447',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'agriculture@wennovate.com',
                  href: 'mailto:agriculture@wennovate.com',
                },
              ].map((method, idx) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={idx}
                    href={method.href}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-3 px-6 py-4 rounded-lg border border-emerald/50 bg-emerald/5 hover:bg-emerald/10 transition-all group"
                  >
                    <Icon className="w-5 h-5 text-emerald group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        {method.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-50">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Primary CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald to-sapphire text-navy font-bold rounded-lg hover:shadow-2xl transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Footer text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm text-slate-400 italic"
            >
              Our team responds within 24 hours • Personalized analysis • Zero commitment
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
