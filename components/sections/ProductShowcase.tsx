'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Section from '../Section';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { src: '/images/button-leather-top.png', alt: 'Leather Button Top View', category: 'leather' },
  { src: '/images/button-leather-angle.png', alt: 'Leather Button Angle View', category: 'leather' },
  { src: '/images/button-leather-gold.png', alt: 'Leather & Gold Button', category: 'leather' },
  { src: '/images/button-leather-gold-side.png', alt: 'Gold Button Side View', category: 'leather' },
  { src: '/images/button-wood-1.jpg', alt: 'Wood Button Design 1', category: 'wood' },
  { src: '/images/button-wood-2.jpg', alt: 'Wood Button Design 2', category: 'wood' },
  { src: '/images/button-wood-3.jpg', alt: 'Wood Button Design 3', category: 'wood' },
  { src: '/images/button-wood-4.jpg', alt: 'Wood Button Design 4', category: 'wood' },
  { src: '/images/button-wood-silver.jpg', alt: 'Wood Button with Silver', category: 'wood' },
  { src: '/images/button-wood-labels.jpg', alt: 'Wood Button with Labels', category: 'wood' },
  { src: '/images/button-exploded.jpg', alt: 'Exploded View', category: 'technical' },
];

export default function ProductShowcase() {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <Section id="showcase" background="dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-6">
            CRAFTSMANSHIP IN EVERY DETAIL
          </h2>
          <p className="text-xl md:text-2xl text-luxury-cream/80 font-light max-w-4xl mx-auto leading-relaxed mb-8">
            Each Obedio button is a masterpiece of engineering and design, crafted to seamlessly integrate into the world's most luxurious spaces.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-luxury-gold text-luxury-dark'
                  : 'bg-luxury-charcoal text-luxury-cream hover:bg-luxury-gold/20'
              }`}
            >
              All Designs
            </button>
            <button
              onClick={() => setFilter('wood')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === 'wood'
                  ? 'bg-luxury-gold text-luxury-dark'
                  : 'bg-luxury-charcoal text-luxury-cream hover:bg-luxury-gold/20'
              }`}
            >
              Wood Collection
            </button>
            <button
              onClick={() => setFilter('leather')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === 'leather'
                  ? 'bg-luxury-gold text-luxury-dark'
                  : 'bg-luxury-charcoal text-luxury-cream hover:bg-luxury-gold/20'
              }`}
            >
              Leather Collection
            </button>
            <button
              onClick={() => setFilter('technical')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === 'technical'
                  ? 'bg-luxury-gold text-luxury-dark'
                  : 'bg-luxury-charcoal text-luxury-cream hover:bg-luxury-gold/20'
              }`}
            >
              Technical View
            </button>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="luxury-border bg-luxury-charcoal/30 p-4 rounded-lg hover:bg-luxury-charcoal/50 transition-all duration-300 group"
              >
                <div className="relative h-64 flex items-center justify-center overflow-hidden rounded-lg bg-luxury-dark/50">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-luxury-cream/70 text-sm text-center mt-4">{product.alt}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
