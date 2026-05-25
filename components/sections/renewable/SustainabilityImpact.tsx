'use client';

import { motion } from 'framer-motion';
import { Leaf, Globe, Zap, Users } from 'lucide-react';

const impacts = [
  {
    icon: Leaf,
    title: 'Carbon Reduction',
    value: '50M+ Tons',
    description: 'Annual CO2 emissions offset through renewable adoption',
  },
  {
    icon: Globe,
    title: 'Climate Action',
    value: 'Net Zero Goal',
    description: 'Aligned with Paris Agreement targets by 2050',
  },
  {
    icon: Users,
    title: 'Job Creation',
    value: '100K+ Jobs',
    description: 'Direct employment across renewable sector',
  },
  {
    icon: Zap,
    title: 'Energy Access',
    value: '50M People',
    description: 'Clean electricity access to underserved communities',
  },
];

export default function SustainabilityImpact() {
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
            Sustainability <span className="text-emerald-400">Impact</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Measurable environmental and social benefits from renewable energy adoption
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center mb-4">
                <impact.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{impact.title}</h3>
              <p className="text-emerald-400 font-bold text-2xl mb-2">{impact.value}</p>
              <p className="text-slate-300 text-sm">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
