'use client';

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, ChevronDown, MapPin, Star, Compass } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const floatingBadges = [
  { label: 'Lalibela', icon: '⛪', x: '8%', y: '25%', delay: 0.5 },
  { label: 'Zanzibar', icon: '🏝️', x: '85%', y: '20%', delay: 0.8 },
  { label: 'Safari', icon: '🦁', x: '78%', y: '65%', delay: 1.1 },
  { label: 'Omo Valley', icon: '🌍', x: '12%', y: '70%', delay: 1.4 },
];

const stats = [
  { value: '500+', label: 'Destinations' },
  { value: '50K+', label: 'Happy Travelers' },
  { value: '4.9', label: 'Rating', icon: Star },
  { value: '24/7', label: 'Concierge' },
];

// Particle component for luxury ambient effect
function Particles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-amber-300/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function TourismHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-navy">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <Image
          src="/images/tourism-luxury-resort.png"
          alt="Luxury travel destination"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy/80 via-navy/40 to-navy/90" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-navy/60 via-transparent to-navy/40" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-navy to-transparent" />

      {/* Animated Light Rays */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-amber-400/20 via-amber-300/5 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-blue-400/15 via-blue-300/5 to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Particles */}
      <Particles />

      {/* Floating Destination Badges */}
      <div className="absolute inset-0 z-[3] pointer-events-none hidden lg:block">
        {floatingBadges.map((badge) => (
          <motion.div
            key={badge.label}
            className="absolute"
            style={{ left: badge.x, top: badge.y }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: badge.delay, duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white/90 text-sm font-medium shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
              <span className="text-base">{badge.icon}</span>
              <span>{badge.label}</span>
              <MapPin className="w-3 h-3 text-amber-400" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 backdrop-blur-sm">
              <Compass className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-semibold tracking-wider uppercase">
                Premium Travel Experiences
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95] tracking-tight"
          >
            <span className="block">Discover the</span>
            <span className="block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
                Extraordinary
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Immerse yourself in world-class luxury travel. From ancient wonders to pristine
            wilderness, every journey is crafted to create{' '}
            <span className="text-amber-300/90 font-medium">unforgettable moments</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(245, 158, 11, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-navy rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl shadow-amber-500/20 btn-magnetic transition-all duration-300"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
            >
              Explore Destinations
            </motion.button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center px-4 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(245,158,11,0.3)' }}
              >
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                  {stat.icon && <stat.icon className="w-5 h-5 text-amber-400 fill-amber-400" />}
                </div>
                <span className="text-white/50 text-sm font-medium mt-1 block">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
