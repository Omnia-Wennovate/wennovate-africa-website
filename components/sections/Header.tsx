'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from 'framer-motion'
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const { scrollY } = useScroll()
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  )
  const headerBgDark = useTransform(
    scrollY,
    [0, 100],
    ['rgba(15, 17, 22, 0)', 'rgba(15, 17, 22, 0.85)']
  )
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.06)']
  )
  const headerBorderDark = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,0.06)']
  )

  useEffect(() => setMounted(true), [])

  const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'About Us', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ]

  const serviceItems = [
    { label: 'Agriculture', href: '/agriculture' },
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Minings', href: '/mining' },
    { label: 'Renewable Energy', href: '/renewable-energy' },
    { label: 'Tourism', href: '/tourism' },
  ]

  const navVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  }

  const navItemVariant: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const isDark = theme === 'dark'

  // Use stable SSR values (transparent) before mount to avoid hydration mismatch.
  // After mount, switch to theme-aware MotionValues.
  const bgStyle = mounted ? (isDark ? headerBgDark : headerBg) : 'rgba(0,0,0,0)'
  const borderStyle = mounted ? (isDark ? headerBorderDark : headerBorder) : 'rgba(0,0,0,0)'

  return (
    <motion.header
      style={{
        backgroundColor: bgStyle,
        borderBottomColor: borderStyle,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b transition-all duration-500"
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 group"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="relative"
          >
            <div className="dark:bg-white dark:rounded-lg dark:px-3 dark:py-1.5">
              <Image
                src="/images/wennovate-logo.png"
                alt="WENNOVATE"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-1"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              variants={navItemVariant}
              href={item.href}
              className="relative px-5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald to-sapphire group-hover:w-3/4 transition-all duration-400 ease-out rounded-full" />
            </motion.a>
          ))}

          {/* Services Dropdown */}
          <motion.div
            variants={navItemVariant}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="relative flex items-center gap-1 px-5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 group"
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald to-sapphire group-hover:w-3/4 transition-all duration-400 ease-out rounded-full" />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-[#0f1116] rounded-2xl shadow-2xl shadow-slate-900/10 dark:shadow-black/40 border border-slate-100 dark:border-white/8 overflow-hidden z-50"
                >
                  {serviceItems.map((s, i) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className={`block px-5 py-3.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors duration-200 ${
                        i < serviceItems.length - 1 ? 'border-b border-slate-100 dark:border-white/5' : ''
                      }`}
                    >
                      {s.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}

          {/* CTA Button */}
          <motion.a
            href="/#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-gradient-to-r dark:from-emerald dark:to-sapphire text-white dark:text-navy rounded-full font-semibold text-sm shadow-lg shadow-slate-900/10 dark:shadow-emerald/20 hover:bg-slate-800 transition-all duration-300 btn-magnetic"
          >
            Get Started
            <ArrowRight size={16} />
          </motion.a>
        </div>

        {/* Mobile: Theme Toggle + Menu */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="w-10 h-10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          )}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-white/95 dark:bg-navy/95 backdrop-blur-2xl border-t border-slate-100 dark:border-white/5 px-6 py-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    href={item.href}
                    className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Mobile Services Dropdown */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navItems.length * 0.08 }}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5"
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pl-4"
                      >
                        {serviceItems.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2.5 px-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 border-l-2 border-slate-200 dark:border-white/10"
                          >
                            {s.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="/#contact"
                className="mt-4 flex items-center justify-center gap-2 w-full px-6 py-3 bg-slate-900 dark:bg-gradient-to-r dark:from-emerald dark:to-sapphire text-white dark:text-navy rounded-xl font-semibold text-sm"
                onClick={() => setIsOpen(false)}
              >
                Get Started
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
