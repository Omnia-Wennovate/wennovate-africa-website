'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 60000, suffix: ' MW', label: 'Renewable Potential', color: 'text-yellow-400' },
  { value: 1350, suffix: ' GW', label: 'Wind Capacity', color: 'text-blue-400' },
  { value: 324, suffix: ' MW', label: 'Current Operations', color: 'text-emerald-400' },
  { value: 2500, suffix: 'B', label: 'Investment Opportunity', color: 'text-purple-400', prefix: '$' },
];

function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.floor(increment * frame));
      if (frame === 60) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return <>{prefix}{count.toLocaleString()}{suffix}</>;
}

export default function RenewableStatistics() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-navy">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            By The Numbers
          </h2>
          <p className="text-slate-300 text-lg">Africa's renewable energy transformation</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-slate-300 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
