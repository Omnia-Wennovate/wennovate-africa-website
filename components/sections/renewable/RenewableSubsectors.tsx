'use client';

import { motion } from 'framer-motion';
import { Sun, Wind, Zap, Leaf, Battery, Cpu, Building2, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const subsectors = [
  {
    icon: Sun,
    title: 'Solar Energy',
    description: 'Harness Ethiopia\'s abundant sunlight for clean power generation',
    color: 'from-yellow-400 to-orange-500',
    image: '/images/renewable-solar.jpg',
    stats: '60,000+ MW Potential',
  },
  {
    icon: Wind,
    title: 'Wind Energy',
    description: '1,350 GW wind power potential across diverse geographical zones',
    color: 'from-blue-400 to-cyan-500',
    image: '/images/renewable-wind.jpg',
    stats: '324 MW Operating',
  },
  {
    icon: Zap,
    title: 'Smart Manufacturing',
    description: 'Next-generation industrial automation powered by clean energy',
    color: 'from-emerald-400 to-teal-500',
    image: '/images/renewable-smart-manufacturing.jpg',
    stats: '45% Growth Expected',
  },
  {
    icon: Battery,
    title: 'Energy Storage',
    description: 'Advanced battery systems for reliable renewable energy distribution',
    color: 'from-purple-400 to-pink-500',
    image: '/images/renewable-energy-storage.jpg',
    stats: '$2.5B Market Size',
  },
  {
    icon: Cpu,
    title: 'Green Tech',
    description: 'Innovation hub for sustainable technology development',
    color: 'from-green-400 to-emerald-500',
    image: '/images/renewable-innovation.jpg',
    stats: '500+ Patents Filed',
  },
  {
    icon: Building2,
    title: 'Sustainable Infrastructure',
    description: 'Eco-friendly construction and urban development projects',
    color: 'from-slate-400 to-gray-500',
    image: '/images/renewable-infrastructure.jpg',
    stats: '$8B Investment Pool',
  },
  {
    icon: Leaf,
    title: 'Carbon Reduction',
    description: 'Environmental impact solutions and climate action programs',
    color: 'from-lime-400 to-green-500',
    image: '/images/renewable-carbon-reduction.jpg',
    stats: '50M Tons CO2 Offset',
  },
  {
    icon: TrendingUp,
    title: 'Future Energy',
    description: 'Next-generation renewable technologies and innovations',
    color: 'from-indigo-400 to-blue-500',
    image: '/images/renewable-hero.jpg',
    stats: '35% Annual Growth',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function RenewableSubsectors() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Renewable Energy <span className="text-emerald-400">Subsectors</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Transform Africa's energy landscape across eight strategic sectors
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {subsectors.map((subsector, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <Image
                  src={subsector.image}
                  alt={subsector.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subsector.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <subsector.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{subsector.title}</h3>
                <p className="text-slate-300 text-sm mb-4 flex-grow">{subsector.description}</p>

                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-emerald-400 font-semibold text-sm">{subsector.stats}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
