'use client';

import { motion } from 'framer-motion';
import { Compass, Calendar, Heart, Shield, Sparkles } from 'lucide-react';

const steps = [
  { icon: Compass, title: 'Share Your Vision', description: 'Tell us about your dream trip — interests, dates, style, budget. We listen carefully to every detail.' },
  { icon: Heart, title: 'Custom Crafted', description: 'Our experts design a fully personalized itinerary, hand-selecting every experience just for you.' },
  { icon: Calendar, title: 'Seamless Booking', description: 'We handle every reservation, transfer, and detail. You simply prepare to be amazed.' },
  { icon: Shield, title: '24/7 Support', description: 'From departure to return, our concierge team is always available to ensure perfection.' },
];

export default function PersonalizedPlanning() {
  return (
    <section className="relative py-32 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">White-Glove Service</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Personalized <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Travel Planning</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Every journey is unique. Our dedicated travel architects create bespoke experiences tailored to your desires.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+28px)] right-[-50%] h-[1px] bg-gradient-to-r from-amber-400/20 to-transparent z-0" />
              )}
              <div className="relative p-7 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-400/20 hover:bg-white/[0.04] transition-all duration-500 text-center z-10">
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-500">
                    <step.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center">
                    <span className="text-amber-400 text-xs font-bold">{i + 1}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Promise */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-amber-500/5 via-white/[0.02] to-amber-500/5 border border-amber-400/10 text-center">
          <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-4" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Every trip includes our <span className="text-amber-300 font-semibold">Wennovate Promise</span> — satisfaction guaranteed, flexible rebooking, and complimentary travel insurance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
