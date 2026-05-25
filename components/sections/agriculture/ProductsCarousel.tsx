'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Product {
  name: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

const products: Product[] = [
  {
    name: 'Certified Grains & Cereals',
    category: 'Crop Production',
    description: 'International standard grains with premium pricing and export certification',
    image: '/images/agriculture-crops.jpg',
    highlights: ['Export-ready', 'Certified quality', '100% traceability'],
  },
  {
    name: 'Premium Livestock Products',
    category: 'Livestock',
    description: 'Grass-fed beef and dairy products meeting global food safety standards',
    image: '/images/agriculture-livestock.jpg',
    highlights: ['Grass-fed', 'Hormone-free', 'FSSC certified'],
  },
  {
    name: 'Fresh Horticultural Produce',
    category: 'Horticulture',
    description: 'Year-round supply of fresh fruits and vegetables for export markets',
    image: '/images/agriculture-horticulture.jpg',
    highlights: ['Organic certified', 'Cold-chain managed', 'Weekly shipments'],
  },
  {
    name: 'Agricultural Technology',
    category: 'Innovation',
    description: 'Smart farming solutions for optimized yields and resource management',
    image: '/images/agriculture-technology.jpg',
    highlights: ['IoT sensors', 'AI analytics', 'Real-time monitoring'],
  },
];

export function ProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + products.length) % products.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const currentProduct = products[currentIndex];

  return (
    <section className="bg-gradient-to-b from-navy to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald text-sm font-semibold uppercase tracking-wider mb-4">
            Market Products
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4 text-balance">
            Premium Agricultural Products
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-slate-700/50"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute inset-0"
            >
              {/* Image */}
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl"
                >
                  <p className="text-emerald text-sm font-semibold uppercase tracking-wider mb-2">
                    {currentProduct.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-50 mb-3">
                    {currentProduct.name}
                  </h3>
                  <p className="text-slate-300 text-lg mb-6 max-w-xl leading-relaxed">
                    {currentProduct.description}
                  </p>

                  {/* Highlights */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-3"
                  >
                    {currentProduct.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-emerald/20 border border-emerald/50 text-slate-50 text-sm rounded-lg"
                      >
                        {highlight}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {products.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                  setIsAutoPlay(false);
                  setTimeout(() => setIsAutoPlay(true), 8000);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-8 bg-emerald'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Product thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {products.map((product, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 8000);
              }}
              whileHover={{ scale: 1.05 }}
              className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? 'border-emerald ring-2 ring-emerald/50'
                  : 'border-slate-700 hover:border-slate-500'
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
              <p className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-slate-50 line-clamp-1">
                {product.name}
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
