'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const stats = [
  { value: 505, label: 'Gold Export (2020/21)', suffix: 'M USD', color: 'text-yellow-400' },
  { value: 4, label: 'Million Tons Capacity', suffix: 'Annually', color: 'text-blue-400' },
  { value: 300, label: 'Emerald Discovery', suffix: 'Miles South', color: 'text-green-400' },
  { value: 50, label: 'Manufacturing', suffix: '% in Food/Bev', color: 'text-red-400' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-5xl font-bold">
      {count}
      <span className="text-3xl ml-2">{suffix}</span>
    </div>
  );
}

export function MiningStatistics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold text-slate-50 mb-4"
          >
            Mining Sector Metrics
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex gap-2 justify-center mb-4"
          >
            <div className="w-4 h-1 bg-yellow-500 rounded-full" />
            <div className="w-12 h-1 bg-yellow-500 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 25px 50px rgba(250, 204, 21, 0.2)',
              }}
              className="relative overflow-hidden rounded-xl border border-yellow-500/20 bg-gradient-to-br from-white/5 to-yellow-500/5 backdrop-blur-sm p-8"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-transparent to-transparent opacity-10" />

              {/* Content */}
              <div className="relative space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`${stat.color}`}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </motion.div>

                <p className="text-slate-300 font-medium">{stat.label}</p>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
