'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Leaf, Zap, BookOpen, ArrowRight } from 'lucide-react'
import { useRef } from 'react'

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const Icon = service.icon

  const spotlightX = useTransform(mouseX, (v) => `${v}px`)
  const spotlightY = useTransform(mouseY, (v) => `${v}px`)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl bg-white dark:bg-white/5 overflow-hidden border border-slate-100 dark:border-white/10 shadow-lg shadow-slate-100/50 dark:shadow-none hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-500 cursor-pointer"
    >
      <motion.div
        className="pointer-events-none absolute -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          width: '300px', height: '300px', borderRadius: '50%',
          background: `radial-gradient(circle, ${service.spotlightColor}, transparent 70%)`,
          left: spotlightX, top: spotlightY, transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10 p-8 md:p-10">
        <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500`}>
          <Icon size={28} className={service.iconColor} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">{service.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">{service.description}</p>
        <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
          <span className="font-semibold text-sm tracking-wide">Explore</span>
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-400" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px]">
          <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out ${service.accentGradient}`} />
        </div>
      </div>
    </motion.div>
  )
}

const services = [
  {
    id: 1, title: 'Sustainable Business',
    description: 'Support and recognize businesses in the community by making substantial efforts to reduce environmental impact, act socially responsible, and contribute to economic vitality.',
    icon: Leaf, iconBg: 'bg-emerald/10', iconColor: 'text-emerald',
    spotlightColor: 'rgba(16, 185, 129, 0.06)', accentGradient: 'bg-gradient-to-r from-emerald/0 via-emerald to-emerald/0',
  },
  {
    id: 2, title: 'Entrepreneurship & Innovation',
    description: 'Help and support entrepreneurs build successful business ventures or grow existing ones. Support the innovation process since it is an essential driver of competitive advantage.',
    icon: Zap, iconBg: 'bg-sapphire/10', iconColor: 'text-sapphire',
    spotlightColor: 'rgba(0, 102, 204, 0.06)', accentGradient: 'bg-gradient-to-r from-sapphire/0 via-sapphire to-sapphire/0',
  },
  {
    id: 3, title: 'Development & Research',
    description: 'Undertake various research and development programs to assist and fill gaps with information asymmetry. Provide valuable knowledge and insights leading to improvements.',
    icon: BookOpen, iconBg: 'bg-gold/15', iconColor: 'text-amber-600 dark:text-gold',
    spotlightColor: 'rgba(252, 211, 77, 0.08)', accentGradient: 'bg-gradient-to-r from-amber-400/0 via-amber-500 to-amber-400/0',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36 px-6 md:px-12 bg-slate-50/50 dark:bg-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 bg-emerald/10 text-emerald text-sm font-semibold rounded-full mb-6">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6 tracking-tight">
            Three Pillars of <span className="text-shimmer">Innovation</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions across sustainability, entrepreneurship, and strategic development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a href="#contact" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-gradient-to-r dark:from-emerald dark:to-sapphire text-white dark:text-navy rounded-2xl font-semibold text-lg shadow-xl shadow-slate-900/10 dark:shadow-emerald/20 hover:bg-slate-800 transition-all duration-300 btn-magnetic">
            Explore All Services <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
