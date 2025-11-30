'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Section from '../Section';
import { motion, AnimatePresence } from 'framer-motion';

const COLLECTIONS = [
  {
    id: 'signature',
    title: 'Obedio Signature',
    description: 'Hand-stitched leather with gold accents.',
    images: [
      '/images/button-leather-gold.png',
      '/images/button-leather-angle.png',
      '/images/button-leather-top.png',
      '/images/button-leather-side.png',
    ]
  },
  {
    id: 'wood',
    title: 'Simple Wood',
    description: 'Sustainable wood with natural grain.',
    images: [
      '/images/button-wood-1.jpg',
      '/images/button-wood-2.jpg',
      '/images/button-wood-3.jpg',
      '/images/button-wood-4.jpg',
    ]
  }
];

export default function BespokeGallery() {
  const [activeCollection, setActiveCollection] = useState('signature');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentImages = COLLECTIONS.find(c => c.id === activeCollection)?.images || [];

  return (
    <Section background="darker" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-6">
            Bespoke Gallery
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-white mb-8">
            Curated Collections
          </h2>
          
          {/* Collection Switcher */}
          <div className="flex justify-center gap-8 mb-12">
            {COLLECTIONS.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setActiveCollection(collection.id)}
                className={`text-lg tracking-widest uppercase transition-all duration-300 ${
                  activeCollection === collection.id
                    ? 'text-luxury-gold border-b-2 border-luxury-gold pb-2'
                    : 'text-luxury-gray-light hover:text-luxury-cream pb-2'
                }`}
              >
                {collection.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {currentImages.map((src, index) => (
              <motion.div
                key={src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg bg-luxury-charcoal/30"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-5xl w-full aspect-square md:aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Selected Gallery Image"
                  fill
                  className="object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}