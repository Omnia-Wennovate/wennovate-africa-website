'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState, useEffect, useCallback } from 'react'

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const hasStarted = useRef(false)

  const animate = useCallback(() => {
    if (hasStarted.current) return
    hasStarted.current = true
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(end)
    }
    requestAnimationFrame(step)
  }, [end, duration])

  useEffect(() => {
    if (inView) animate()
  }, [inView, animate])

  return <span ref={ref}>{count}{suffix}</span>
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85])
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  const stats = [
    { end: 50, suffix: '+', label: 'Active Projects', gradient: 'from-emerald to-emerald/60', glow: 'bg-emerald', shadow: 'shadow-emerald/20' },
    { end: 3, suffix: '', label: 'Service Areas', gradient: 'from-sapphire to-sapphire/60', glow: 'bg-sapphire', shadow: 'shadow-sapphire/20' },
    { end: 5, suffix: '', label: 'Key Sectors', gradient: 'from-gold to-gold/60', glow: 'bg-gold', shadow: 'shadow-gold/20' },
    { end: 2, suffix: '', label: 'Global Offices', gradient: 'from-crimson to-emerald', glow: 'bg-crimson', shadow: 'shadow-crimson/20' },
  ]

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{ position: 'relative' }}
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-navy"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald/5 dark:bg-emerald/8 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -60, 40, 0], y: [0, 30, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-sapphire/5 dark:bg-sapphire/8 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-gold/3 dark:bg-gold/5 rounded-full blur-[100px]"
        />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 -z-5 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Particles — deterministic values to avoid hydration mismatch */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[
          { w: 4.2, h: 4.6, bg: '#10B981', t: 45.9, l: 87.2, dur: 9.0, del: 1.4, op: 0.46 },
          { w: 5.1, h: 5.6, bg: '#0066CC', t: 54.0, l: 14.7, dur: 13.9, del: 2.9, op: 0.67 },
          { w: 7.0, h: 3.2, bg: '#FCD34D', t: 61.7, l: 57.6, dur: 12.0, del: 4.6, op: 0.67 },
          { w: 4.4, h: 3.7, bg: '#10B981', t: 18.3, l: 77.9, dur: 13.2, del: 3.1, op: 0.63 },
          { w: 3.4, h: 4.7, bg: '#0066CC', t: 81.2, l: 41.9, dur: 8.8, del: 3.0, op: 0.49 },
          { w: 5.0, h: 6.5, bg: '#FCD34D', t: 57.1, l: 30.7, dur: 12.2, del: 2.5, op: 0.68 },
          { w: 6.3, h: 4.9, bg: '#10B981', t: 64.1, l: 20.6, dur: 12.8, del: 0.5, op: 0.51 },
          { w: 4.8, h: 4.6, bg: '#0066CC', t: 89.8, l: 62.4, dur: 8.1, del: 2.8, op: 0.56 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${p.w}px`,
              height: `${p.h}px`,
              background: p.bg,
              top: `${p.t}%`,
              left: `${p.l}%`,
              animation: `floatSlow ${p.dur}s ease-in-out infinite`,
              animationDelay: `${p.del}s`,
              opacity: p.op,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y: contentY }} className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 pb-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-emerald/20">
                <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                  <Sparkles size={16} className="text-emerald" />
                </motion.div>
                <span className="text-sm text-slate-600 dark:text-slate-200 font-medium tracking-wide">Welcome to Innovation</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold leading-[1.05] tracking-tight">
                <span className="text-slate-900 dark:text-slate-50">We Innovate</span>
                <br />
                <span className="text-shimmer">Better Solutions</span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 dark:text-slate-300/90 max-w-xl leading-relaxed font-light">
              Transform your business through sustainable innovation, strategic entrepreneurship support, and forward-thinking development research.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.a href="#contact" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-4 bg-slate-900 dark:bg-gradient-to-r dark:from-emerald dark:to-sapphire text-white dark:text-navy rounded-2xl font-semibold text-lg overflow-hidden shadow-xl shadow-slate-900/15 dark:shadow-emerald/25 hover:bg-slate-800 transition-all duration-500 btn-magnetic">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.a>
              <motion.a href="#services" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-transparent rounded-2xl font-semibold text-lg text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-emerald/30 transition-all duration-400 shadow-sm dark:shadow-none">
                <div className="w-8 h-8 rounded-full bg-emerald/10 dark:bg-emerald/20 flex items-center justify-center group-hover:bg-emerald/20 dark:group-hover:bg-emerald/30 transition-colors">
                  <Play size={14} className="text-emerald ml-0.5" />
                </div>
                Learn More
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Logo */}
          <motion.div style={{ scale: logoScale, opacity: logoOpacity }} className="relative hidden lg:flex items-center justify-center min-h-[550px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald/4 rounded-full blur-[100px]" />

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-3xl opacity-30"
                style={{ background: 'conic-gradient(from 0deg, transparent, rgba(16,185,129,0.2), transparent, rgba(0,102,204,0.2), transparent, rgba(252,211,77,0.15), transparent)' }}
              />

              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-white dark:bg-white rounded-3xl p-10 md:p-14 shadow-2xl shadow-slate-200/60 dark:shadow-emerald/10 border border-slate-100 dark:border-emerald/20">
                <Image src="/images/wennovate-logo-lines.png" alt="WENNOVATE" width={400} height={160} className="w-full max-w-[340px] h-auto object-contain mx-auto" priority />
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-emerald/30" />
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-sapphire/30" />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gold/30" />
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-crimson/30" />
              </motion.div>

              {/* Floating Tags */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, duration: 0.8 }}>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-5 -right-5 bg-white dark:bg-navy/80 rounded-xl px-4 py-2.5 shadow-lg shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-emerald/20 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald glow-emerald" />
                    <span className="text-xs text-slate-700 dark:text-emerald font-semibold">Sustainable</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8, duration: 0.8 }}>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-3 -left-8 bg-white dark:bg-navy/80 rounded-xl px-4 py-2.5 shadow-lg shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-sapphire/20 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sapphire" />
                    <span className="text-xs text-slate-700 dark:text-sapphire font-semibold">Innovation</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1, duration: 0.8 }}>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute bottom-10 -right-10 bg-white dark:bg-navy/80 rounded-xl px-4 py-2.5 shadow-lg shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-gold/20 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-xs text-slate-700 dark:text-gold font-semibold">Strategy</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Cards — Full Width Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-16 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="relative group cursor-default"
            >
              <div className={`relative overflow-hidden rounded-2xl px-4 py-7 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50 backdrop-blur-sm group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-all duration-300 group-hover:shadow-lg`}>
                {/* Top glow bar */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[3px] rounded-b-full ${stat.glow} opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-500`} />

                {/* Counting Value */}
                <p className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-b ${stat.gradient} bg-clip-text text-transparent tracking-tight text-center leading-none`}>
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2000 + i * 300} />
                </p>

                {/* Dot separator */}
                <div className="flex justify-center my-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${stat.glow} opacity-50`} />
                </div>

                {/* Label */}
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium text-center tracking-wide">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="flex flex-col items-center gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] font-medium">Scroll</p>
          <div className="w-5 h-9 border border-slate-200 dark:border-white/15 rounded-full flex justify-center p-1">
            <motion.div animate={{ y: [0, 14, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="w-1 h-1.5 bg-slate-400 dark:bg-emerald rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
