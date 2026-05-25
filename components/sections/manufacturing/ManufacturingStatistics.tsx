'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItemProps[] = [
  { value: 50, suffix: '%', label: 'Manufacturing in GDP', color: 'emerald' },
  { value: 280, suffix: '+', label: 'Manufacturing Facilities', color: 'sapphire' },
  { value: 420000, suffix: '+', label: 'Direct Employment', color: 'gold' },
  { value: 12, suffix: 'B+', label: 'Investment Potential', color: 'crimson' },
];

function CounterValue({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let interval: NodeJS.Timeout;
    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;

    let current = 0;
    interval = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ManufacturingStatistics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const colorMap = {
    emerald: 'from-emerald to-emerald/80',
    sapphire: 'from-sapphire to-sapphire/80',
    gold: 'from-gold to-gold/80',
    crimson: 'from-crimson to-crimson/80',
  };

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald/5 to-sapphire/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Manufacturing by the Numbers
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Scale and opportunity in Ethiopia&apos;s growing manufacturing sector
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900 border border-slate-700 rounded-xl group-hover:border-slate-600 transition-all duration-300" />

              {/* Gradient Accent */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`absolute inset-0 bg-gradient-to-br ${colorMap[stat.color as keyof typeof colorMap]} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                {/* Icon/Accent */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${colorMap[stat.color as keyof typeof colorMap]} mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                  <div className="text-2xl font-bold text-white">
                    {stat.suffix === '%' ? stat.suffix : stat.suffix.charAt(0)}
                  </div>
                </div>

                {/* Value */}
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${colorMap[stat.color as keyof typeof colorMap]} text-transparent bg-clip-text`}
                >
                  <CounterValue target={stat.value} suffix={stat.suffix} />
                </motion.p>

                {/* Label */}
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </p>
              </div>

              {/* Border animation on hover */}
              <motion.div
                initial={{ pathLength: 0 }}
                whileHover={{ pathLength: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-emerald-500/30 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
