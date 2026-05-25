'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, Globe, Shield } from 'lucide-react'

export function CTA() {
  const trustBadges = [
    { icon: Globe, label: 'Norway & Ethiopia' },
    { icon: Shield, label: '24/7 Support' },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 md:px-12 bg-slate-50/50 dark:bg-navy">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald/3 dark:bg-emerald/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sapphire/3 dark:bg-sapphire/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white dark:bg-white/5 rounded-[2rem] p-10 md:p-16 border border-slate-100 dark:border-white/5 shadow-2xl shadow-slate-200/40 dark:shadow-none overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald/5 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-sapphire/5 to-transparent rounded-tl-full" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="inline-block px-5 py-2 bg-emerald/10 text-emerald text-sm font-semibold rounded-full mb-6">
                Ready to Transform?
              </motion.span>

              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 tracking-tight">
                Let&apos;s Build Something <span className="text-shimmer">Extraordinary</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Whether you&apos;re looking for sustainable business solutions, innovation support, or strategic development, we&apos;re here to help you succeed.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }} className="grid md:grid-cols-2 gap-4 mb-12">
              <motion.a href="mailto:wennovate2021@gmail.com" whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 hover:border-emerald/30 hover:bg-emerald/5 dark:hover:bg-emerald/10 transition-all duration-400 group">
                <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center group-hover:bg-emerald/20 transition-colors">
                  <Mail size={22} className="text-emerald" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Email us</p>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold group-hover:text-slate-900 dark:group-hover:text-white transition-colors">wennovate2021@gmail.com</p>
                </div>
              </motion.a>

              <motion.a href="tel:+251967446447" whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 hover:border-sapphire/30 hover:bg-sapphire/5 dark:hover:bg-sapphire/10 transition-all duration-400 group">
                <div className="w-12 h-12 rounded-xl bg-sapphire/10 flex items-center justify-center group-hover:bg-sapphire/20 transition-colors">
                  <Phone size={22} className="text-sapphire" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Call us</p>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold group-hover:text-slate-900 dark:group-hover:text-white transition-colors">+251 96 744 6447</p>
                </div>
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="mailto:wennovate2021@gmail.com" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="group relative px-10 py-4 bg-slate-900 dark:bg-gradient-to-r dark:from-emerald dark:to-sapphire text-white dark:text-navy rounded-2xl font-semibold text-lg overflow-hidden shadow-xl shadow-slate-900/15 dark:shadow-emerald/20 hover:bg-slate-800 transition-all duration-300 btn-magnetic">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a href="tel:+251967446447" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="px-10 py-4 bg-white dark:bg-transparent border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 rounded-2xl font-semibold text-lg hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white transition-all duration-300 text-center shadow-sm dark:shadow-none">
                Schedule a Call
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 text-center">
          <p className="text-slate-400 text-sm mb-5 uppercase tracking-wider font-medium">Trusted worldwide</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon
              return (
                <motion.div key={i} whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-full shadow-sm dark:shadow-none hover:shadow-md transition-all duration-300 cursor-default">
                  <Icon size={14} className="text-emerald" />
                  <span className="text-sm text-slate-500 dark:text-slate-400">{badge.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
