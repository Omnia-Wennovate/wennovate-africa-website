'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const timeline = [
  {
    phase: 'Phase 1: Exploration',
    duration: 'Months 1-6',
    tasks: ['Site survey & assessment', 'Feasibility studies', 'Geological mapping'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    phase: 'Phase 2: Development',
    duration: 'Months 7-18',
    tasks: ['Infrastructure setup', 'Equipment procurement', 'Workforce training'],
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    phase: 'Phase 3: Operations',
    duration: 'Months 19-36',
    tasks: ['Full production launch', 'Quality assurance', 'Market distribution'],
    color: 'from-green-500 to-green-600',
  },
  {
    phase: 'Phase 4: Scaling',
    duration: 'Months 37+',
    tasks: ['Capacity expansion', 'New site exploration', 'Export optimization'],
    color: 'from-purple-500 to-purple-600',
  },
];

export function MiningTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold text-slate-50 mb-4"
          >
            Development Timeline
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex gap-2 justify-center mb-4"
          >
            <div className="w-4 h-1 bg-yellow-500 rounded-full" />
            <div className="w-12 h-1 bg-yellow-500 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {idx < timeline.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  transition={{ delay: 0.3 }}
                  className="absolute left-7 top-20 w-1 h-24 bg-gradient-to-b from-yellow-500 to-transparent"
                />
              )}

              {/* Content Card */}
              <motion.div
                whileHover={{ x: 8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {/* Circle + Title */}
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl relative z-10`}
                  >
                    {idx + 1}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-50">{item.phase}</h3>
                    <p className="text-yellow-400 font-semibold">{item.duration}</p>
                  </div>
                </div>

                {/* Tasks */}
                <div className="space-y-3">
                  {item.tasks.map((task, taskIdx) => (
                    <motion.div
                      key={taskIdx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * taskIdx }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{task}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
