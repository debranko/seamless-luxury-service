'use client';

import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function BespokeArchitecture() {
  const materials = [
    { name: 'Marine-Grade Steel', icon: '🔩' },
    { name: 'Minimalist Aluminum', icon: '⚙️' },
    { name: 'Sustainable Wood', icon: '🌳' },
    { name: 'Polished Marble', icon: '💎' },
    { name: 'Hand-Stitched Leather', icon: '🧵' },
    { name: 'Custom Materials', icon: '✨' },
  ];

  return (
    <Section id="design" background="charcoal">
      <div className="max-w-6xl mx-auto">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-luxury-gold/80 max-w-4xl mx-auto leading-relaxed">
            "Unlike other systems, Obedio is not defined by its shape—it defines its own."
          </blockquote>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-6">
            THIS IS NOT CUSTOMIZATION.<br />IT IS BESPOKE ARCHITECTURE.
          </h2>
          <p className="text-xl md:text-2xl text-luxury-cream/80 font-light max-w-4xl mx-auto leading-relaxed">
            While competitors offer variations in color, Obedio offers true design freedom. Our engineering allows the internal components to be re-architected to fit entirely new forms.
          </p>
        </motion.div>

        {/* Design Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="luxury-border bg-luxury-dark/50 p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <div className="mb-6 flex justify-center h-48 items-center">
              <Image
                src="/images/button-wood-4.jpg"
                alt="Wood Obedio Button"
                width={250}
                height={250}
                className="w-auto h-44 object-contain"
              />
            </div>
            <h3 className="text-xl font-serif font-semibold text-luxury-gold mb-2">Organic</h3>
            <p className="text-luxury-cream/70 text-sm">Sustainable wood with natural grain</p>
          </div>
          <div className="luxury-border bg-luxury-dark/50 p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <div className="mb-6 flex justify-center h-48 items-center">
              <Image
                src="/images/button-wood-labels.jpg"
                alt="Labeled Obedio Button"
                width={250}
                height={250}
                className="w-auto h-44 object-contain"
              />
            </div>
            <h3 className="text-xl font-serif font-semibold text-luxury-gold mb-2">Refined</h3>
            <p className="text-luxury-cream/70 text-sm">Wood with precision metalwork</p>
          </div>
          <div className="luxury-border bg-luxury-dark/50 p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <div className="mb-6 flex justify-center h-48 items-center">
              <Image
                src="/images/button-leather-gold.png"
                alt="Leather and Gold Obedio Button"
                width={250}
                height={250}
                className="w-auto h-44 object-contain"
              />
            </div>
            <h3 className="text-xl font-serif font-semibold text-luxury-gold mb-2">Opulent</h3>
            <p className="text-luxury-cream/70 text-sm">Hand-stitched leather with gold accents</p>
          </div>
        </motion.div>

        {/* Possibilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="luxury-border bg-luxury-dark/30 p-8 md:p-12 rounded-lg mb-12"
        >
          <h3 className="text-2xl font-serif font-semibold text-luxury-gold mb-6 text-center">
            Infinite Possibilities
          </h3>
          <p className="text-lg text-luxury-cream/80 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            We can change the shape, height, dimensions, and curvature. We can craft the enclosure from any material that matches your vision.
          </p>

          {/* Material Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-luxury-charcoal/50 p-4 rounded-lg text-center hover:bg-luxury-charcoal transition-all duration-300"
              >
                <div className="text-3xl mb-2">{material.icon}</div>
                <div className="text-xs text-luxury-cream/70">{material.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Freedom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-luxury-cream/80 italic">
            Your yacht. Your estate. Your vision. We'll architect Obedio to match.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
