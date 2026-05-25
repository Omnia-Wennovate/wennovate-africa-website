'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  decimals?: number;
}

// Smooth easeOutExpo curve for a satisfying deceleration
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function StatItem({ value, suffix, label, delay, decimals = 0 }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000; // 2 seconds for a smooth, satisfying count
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      setDisplayValue(easedProgress * value);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    }

    requestAnimationFrame(tick);
  }, [value]);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Small stagger delay before counting starts
          setTimeout(startAnimation, delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation, delay]);

  const formattedValue =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString();

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.7, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center text-center group"
    >
      {/* Glowing card container */}
      <div className="relative w-full flex flex-col items-center justify-center rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 px-6 py-10 transition-all duration-500 hover:border-emerald/30 hover:bg-slate-800/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]">
        {/* Top accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-12 bg-gradient-to-r from-emerald via-sapphire to-gold rounded-full group-hover:w-24 transition-all duration-500" />

        {/* Number */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline justify-center gap-1"
        >
          <span
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tabular-nums bg-gradient-to-br from-emerald via-sapphire to-gold bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {formattedValue}
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-emerald/80">
            {suffix}
          </span>
        </motion.div>

        {/* Divider dot */}
        <div className="mt-4 mb-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald to-sapphire" />

        {/* Label */}
        <p className="text-slate-400 text-base sm:text-lg font-medium tracking-wide group-hover:text-slate-300 transition-colors duration-300">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function AgriculturalStatistics() {
  const stats = [
    { value: 50, suffix: '%', label: 'GDP Share', decimals: 0 },
    { value: 85, suffix: '%', label: 'Employment Rate', decimals: 0 },
    { value: 315.14, suffix: 'M USD', label: 'Export Revenue 2018/19', decimals: 2 },
    { value: 70, suffix: '%', label: 'Untapped Potential', decimals: 0 },
  ];

  return (
    <section className="relative bg-navy py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 -right-32 w-64 h-64 bg-gradient-to-br from-sapphire/20 to-emerald/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-emerald/20 to-gold/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald text-sm font-semibold uppercase tracking-wider mb-4">
            Market Insights
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4 text-balance">
            Agricultural Sector at a Glance
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-12">
          {stats.map((stat, idx) => (
            <StatItem
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={idx * 0.15}
              decimals={stat.decimals}
            />
          ))}
        </div>

        {/* Additional insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald/10 to-sapphire/10 border border-emerald/20 rounded-xl p-8 text-center"
        >
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Africa&apos;s population is projected to reach 2.5 billion by 2050, more than doubling per capita food consumption demand. Ethiopia&apos;s agricultural sector is strategically positioned to meet this growth through sustainable innovation and strategic investment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
