'use client'

import { motion } from 'framer-motion'
import { Facebook, Linkedin, Twitter, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'Company', links: ['About Us', 'Services', 'Sectors', 'Contacts'] },
    { title: 'Services', links: ['Sustainable Business', 'Entrepreneurship', 'Development & Research', 'Consulting'] },
    { title: 'Resources', links: ['Blog', 'Case Studies', 'Documentation', 'FAQ'] },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:info@omniatravel.com', label: 'Email' },
  ]

  return (
    <footer className="relative bg-slate-900 dark:bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-sapphire/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2">
            <div className="mb-6 inline-block bg-white rounded-lg px-3 py-1.5">
              <Image src="/images/wennovate-logo.png" alt="WENNOVATE" width={160} height={44} className="h-9 w-auto object-contain" />
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
              Transforming businesses through sustainable innovation, strategic entrepreneurship, and forward-thinking development.
            </p>
            <div className="space-y-3">
              <a href="tel:+251967446447" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Phone size={14} className="text-emerald" />
                </div>
                <span className="text-sm">+251 96 744 6447</span>
              </a>
              <a href="mailto:info@omniatravel.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Mail size={14} className="text-emerald" />
                </div>
                <span className="text-sm">info@omniatravel.com</span>
              </a>
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 * (index + 1), duration: 0.6 }}>
              <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-emerald transition-colors duration-300 text-sm relative group inline-block">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald/50 group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 dark:border-white/5 py-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="flex justify-center gap-3 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a key={social.label} href={social.href} aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-white/[0.06] rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald hover:border-emerald/30 hover:bg-emerald/10 transition-all duration-300">
                  <Icon size={16} />
                </motion.a>
              )
            })}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 text-center md:text-left text-sm text-slate-500">
            <p>&copy; {currentYear} WENNOVATE. All rights reserved. Powered by WENA SIRAJ CONSULTANT.</p>
            <div className="flex justify-center md:justify-end gap-6">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 dark:bg-gradient-to-br dark:from-emerald dark:to-sapphire text-white dark:text-navy rounded-xl flex items-center justify-center font-bold shadow-xl shadow-slate-900/30 border border-slate-700 dark:border-none hover:bg-slate-800 transition-all duration-300 z-40">
        ↑
      </motion.button>
    </footer>
  )
}
