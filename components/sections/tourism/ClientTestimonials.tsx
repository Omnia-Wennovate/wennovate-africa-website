'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  { name: 'Alexandra Chen', role: 'CEO, Pacific Ventures', avatar: '👩‍💼', text: 'Wennovate crafted the most extraordinary safari experience for our executive team. Every detail was impeccable — from the luxury tented camps to our private bush dinner under the stars. Truly world-class.', rating: 5, location: 'Serengeti Safari' },
  { name: 'James Whitfield', role: 'Travel Journalist', avatar: '✍️', text: 'In 20 years of travel writing, few experiences have moved me like Lalibela with Wennovate. Their cultural expertise and attention to detail transformed a trip into a profound, life-changing journey.', rating: 5, location: 'Lalibela Heritage Tour' },
  { name: 'Sophia Laurent', role: 'Director, Maison de Luxe', avatar: '👩‍🎨', text: 'The Omo Valley cultural immersion was beyond anything I imagined. Wennovate arranged authentic encounters with indigenous communities while ensuring complete comfort and safety throughout.', rating: 5, location: 'Omo Valley Experience' },
  { name: 'Marcus Bauer', role: 'Photographer', avatar: '📸', text: 'As a wildlife photographer, I need guides who understand both the land and the craft. Wennovate paired me with experts who knew exactly where to be and when. The results were magazine-cover worthy.', rating: 5, location: 'Wildlife Photography Tour' },
];

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 bg-navy overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Voices of Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Travelers Say</span></h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div key={activeIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12">
          <div className="relative p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl">
            <Quote className="w-12 h-12 text-amber-400/20 mb-6" />
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 font-light italic">
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-2xl border border-white/10">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="text-white/40 text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-amber-400/60 text-xs">{testimonials[activeIndex].location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Selector dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-amber-400 w-8' : 'bg-white/20 hover:bg-white/40'
              }`} />
          ))}
        </div>
      </div>
    </section>
  );
}
