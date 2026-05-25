'use client';

import { motion } from 'framer-motion';
import { Mountain, Waves, Camera, Tent } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  { title: 'Mountain Trekking', subtitle: 'Conquer the peaks', description: 'Scale the Simien Mountains with expert guides and luxury base camps.', image: '/images/tourism-mountains.jpg', icon: Mountain, gradient: 'from-emerald-500/20 to-teal-500/20' },
  { title: 'Ocean Adventures', subtitle: 'Dive into the deep', description: 'Snorkeling, diving, and sailing across crystal-clear East African waters.', image: '/images/tourism-coastal.jpg', icon: Waves, gradient: 'from-blue-500/20 to-cyan-500/20' },
  { title: 'Wildlife Photography', subtitle: 'Capture the wild', description: 'Guided photography safaris with professional National Geographic photographers.', image: '/images/tourism-safari.jpg', icon: Camera, gradient: 'from-amber-500/20 to-orange-500/20' },
  { title: 'Luxury Camping', subtitle: 'Glamping in paradise', description: 'Five-star tented camps in the heart of untouched African wilderness.', image: '/images/tourism-adventure.jpg', icon: Tent, gradient: 'from-purple-500/20 to-pink-500/20' },
];

export default function AdventureExperiences() {
  return (
    <section className="relative py-32 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Unforgettable Moments</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Adventure <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Experiences</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Push your boundaries with curated adventure experiences that blend thrill with luxury.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div key={exp.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer">
              <div className="relative h-80 md:h-96">
                <Image src={exp.image} alt={exp.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.gradient} backdrop-blur-xl border border-white/10 mb-4`}>
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="block text-amber-400/80 text-sm font-medium mb-1">{exp.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">{exp.title}</h3>
                  <p className="text-white/50 text-sm max-w-md">{exp.description}</p>

                  {/* Animated line */}
                  <motion.div className="h-[2px] bg-gradient-to-r from-amber-400 to-transparent mt-4 origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }} />
                </div>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-amber-400/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
