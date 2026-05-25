'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function TourismCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/tourism-luxury-resort.png" alt="Luxury destination" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6 block">Start Your Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Dream Trip<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">Starts Here</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Let our luxury travel specialists craft a personalized itinerary that exceeds your every expectation. Contact us today for a complimentary consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(245,158,11,0.3)' }} whileTap={{ scale: 0.97 }}
              className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-navy rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl shadow-amber-500/20 btn-magnetic">
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="px-10 py-5 border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-all">
              View All Packages
            </motion.button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: Phone, label: '+251 96 744 6447', href: 'tel:+251967446447' },
              { icon: Mail, label: 'travel@wennovate.com', href: 'mailto:travel@wennovate.com' },
              { icon: MessageCircle, label: 'Live Chat', href: '#' },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-center gap-2 text-white/40 hover:text-amber-400 transition-colors text-sm">
                <c.icon className="w-4 h-4" />
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
