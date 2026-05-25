'use client';

import { motion } from 'framer-motion';
import { Briefcase, Plane, Building, Award, Users, Globe } from 'lucide-react';

const services = [
  { icon: Briefcase, title: 'Executive Travel', description: 'Premium business travel with VIP lounge access, private transfers, and 5-star accommodations.' },
  { icon: Plane, title: 'Private Charter', description: 'Exclusive aircraft charters for seamless point-to-point luxury travel across Africa.' },
  { icon: Building, title: 'MICE Solutions', description: 'Full-service meetings, incentives, conferences, and exhibitions planning and execution.' },
  { icon: Award, title: 'VIP Concierge', description: '24/7 dedicated concierge for exclusive reservations, events, and premium experiences.' },
  { icon: Users, title: 'Group Retreats', description: 'Bespoke corporate retreats and team-building experiences in stunning locations.' },
  { icon: Globe, title: 'Global Network', description: 'Access to our worldwide network of luxury partners, hotels, and travel specialists.' },
];

export default function BusinessVIPTravel() {
  return (
    <section className="relative py-32 bg-navy overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Corporate Excellence</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Business & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">VIP Travel</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Elevate your corporate travel with white-glove service, exclusive access, and premium experiences.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div key={svc.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-7 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-amber-400/20 hover:bg-white/[0.06] transition-all duration-500 cursor-pointer relative overflow-hidden">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-5 group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-500">
                  <svc.icon className="w-7 h-7 text-blue-400 group-hover:text-amber-400 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">{svc.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{svc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
