'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';

const opportunities = [
  {
    title: 'Solar Farm Development',
    roi: '28-32%',
    timeline: '3-4 years',
    investment: '$250M+',
    benefits: ['Scalable deployment', 'Government incentives', 'International funding'],
    icon: DollarSign,
  },
  {
    title: 'Wind Energy Plants',
    roi: '24-28%',
    timeline: '4-5 years',
    investment: '$400M+',
    benefits: ['Long-term contracts', 'Climate finance access', 'Export potential'],
    icon: TrendingUp,
  },
  {
    title: 'Energy Storage Hub',
    roi: '32-38%',
    timeline: '2-3 years',
    investment: '$150M+',
    benefits: ['Grid stability', 'Commercial applications', 'Tech growth'],
    icon: CheckCircle,
  },
  {
    title: 'Smart Manufacturing',
    roi: '30-35%',
    timeline: '3-4 years',
    investment: '$300M+',
    benefits: ['Job creation', 'Export markets', 'Technology transfer'],
    icon: Clock,
  },
];

export default function RenewableInvestment() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Investment <span className="text-emerald-400">Opportunities</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Attractive returns with measurable sustainability impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {opportunities.map((opp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-emerald-400/50 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{opp.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                  <opp.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                <div>
                  <p className="text-slate-400 text-xs mb-1">Expected ROI</p>
                  <p className="text-emerald-400 font-bold text-sm sm:text-lg">{opp.roi}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">Timeline</p>
                  <p className="text-blue-400 font-bold text-sm sm:text-lg">{opp.timeline}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">Capital</p>
                  <p className="text-white font-bold text-sm sm:text-lg">{opp.investment}</p>
                </div>
              </div>

              <div className="space-y-2">
                {opp.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
