'use client'

import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useRef } from 'react'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
      {isInView ? <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>{value}{suffix}</motion.span> : '0'}
    </motion.span>
  )
}

export function ValueProp() {
  const values = [
    'Proven track record across 2 continents',
    'Expert team with 15+ years experience',
    'Strategic innovation in 50+ projects',
    'Sustainable & responsible approach',
    'Measurable business growth outcomes',
    'Long-term partnership mindset',
  ]

  const statsData = [
    { value: 50, suffix: '+', label: 'Active Clients', color: 'text-emerald', bg: 'bg-emerald/5 dark:bg-emerald/10', border: 'border-emerald/10 dark:border-emerald/20' },
    { value: 100, suffix: '%', label: 'Success Rate', color: 'text-sapphire', bg: 'bg-sapphire/5 dark:bg-sapphire/10', border: 'border-sapphire/10 dark:border-sapphire/20' },
    { value: 15, suffix: '+', label: 'Years Experience', color: 'text-amber-600 dark:text-gold', bg: 'bg-amber-50 dark:bg-gold/10', border: 'border-amber-100 dark:border-gold/20' },
  ]

  return (
    <section id="about" className="relative py-24 md:py-36 px-6 md:px-12 bg-white dark:bg-navy">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-sapphire/5 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-5 py-2 bg-sapphire/10 text-sapphire text-sm font-semibold rounded-full mb-6">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-8 leading-tight tracking-tight">
              Transform Your Business <span className="text-shimmer">With Confidence</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 leading-relaxed">
              We combine strategic expertise with sustainable practices to deliver measurable results.
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-4 group">
                  <motion.div whileHover={{ scale: 1.2 }} className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={22} className="text-emerald" />
                  </motion.div>
                  <span className="text-slate-600 dark:text-slate-300 text-lg group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative bg-slate-50 dark:bg-white/5 rounded-3xl p-8 md:p-10 border border-slate-100 dark:border-white/10">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {statsData.slice(0, 2).map((stat, i) => (
                  <motion.div key={i} animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    className={`${stat.bg} rounded-2xl p-6 border ${stat.border}`}>
                    <p className={`text-4xl font-bold ${stat.color} mb-1 tracking-tight`}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                whileHover={{ scale: 1.02 }} className={`${statsData[2].bg} rounded-2xl p-6 border ${statsData[2].border}`}>
                <p className={`text-4xl font-bold ${statsData[2].color} tracking-tight`}>
                  <AnimatedCounter value={statsData[2].value} suffix={statsData[2].suffix} />
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{statsData[2].label}</p>
              </motion.div>

              <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-navy bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  <span className="text-emerald font-semibold">50+</span> satisfied partners
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
