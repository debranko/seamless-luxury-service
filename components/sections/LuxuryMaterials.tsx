'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Section from '../Section';
import { motion, AnimatePresence } from 'framer-motion';

export default function LuxuryMaterials() {
  const materials = [
    {
      name: 'Leather & Bronze',
      subtitle: 'Hand-stitched Italian leather with brushed bronze accents',
      image: '/images/button-leather-gold.png',
    },
    {
      name: 'Wave Pattern',
      subtitle: 'Sculptured ridges for tactile elegance',
      image: '/images/button-wood-6.jpg',
    },
    {
      name: 'Natural Oak',
      subtitle: 'Sustainably sourced European oak with matte finish',
      image: '/images/button-wood-4.jpg',
    },
    {
      name: 'Brushed Silver',
      subtitle: 'Aerospace-grade aluminum with satin finish',
      image: '/images/button-wood-silver.jpg',
    },
    {
      name: 'Leather Side Profile',
      subtitle: 'Precision stitching meets bronze craftsmanship',
      image: '/images/button-leather-side.png',
    },
    {
      name: 'Classic Top View',
      subtitle: 'Eight auxiliary buttons for complete control',
      image: '/images/button-leather-top.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % materials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [materials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + materials.length) % materials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % materials.length);
  };

  return (
    <Section background="darker" className="bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-white mb-6">
            Designed for luxury yachts and villas.
          </h2>
          <p className="text-2xl text-luxury-gray-light mb-4">
            Handcrafted materials. <span className="text-luxury-bronze">Zero visible plastic.</span>
          </p>
          <p className="text-lg text-luxury-gray-light">
            Every button is bespoke.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main carousel container */}
          <div className="flex items-center justify-center gap-8 px-4">
            {/* Previous preview */}
            <button
              onClick={goToPrevious}
              className="hidden lg:block w-48 opacity-30 hover:opacity-50 transition-opacity cursor-pointer"
            >
              <Image
                src={materials[(currentIndex - 1 + materials.length) % materials.length].image}
                alt="Previous"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </button>

            {/* Current image - center focus */}
            <div className="relative w-full max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="relative"
                >
                  <Image
                    src={materials[currentIndex].image}
                    alt={materials[currentIndex].name}
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-lg"
                  />

                  {/* Material name overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 text-center"
                  >
                    <h3 className="text-3xl md:text-4xl font-serif text-luxury-white mb-3">
                      {materials[currentIndex].name}
                    </h3>
                    <p className="text-luxury-bronze/80 text-sm md:text-base tracking-wide">
                      {materials[currentIndex].subtitle}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next preview */}
            <button
              onClick={goToNext}
              className="hidden lg:block w-48 opacity-30 hover:opacity-50 transition-opacity cursor-pointer"
            >
              <Image
                src={materials[(currentIndex + 1) % materials.length].image}
                alt="Next"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </button>
          </div>

          {/* Navigation arrows for mobile */}
          <div className="lg:hidden flex justify-center gap-8 mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full border border-luxury-bronze/30 text-luxury-bronze hover:border-luxury-bronze hover:bg-luxury-bronze/10 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-full border border-luxury-bronze/30 text-luxury-bronze hover:border-luxury-bronze hover:bg-luxury-bronze/10 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide counter */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <span className="text-luxury-bronze/60 text-sm font-mono tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <div className="w-32 h-px bg-luxury-bronze/20 relative overflow-hidden">
              <motion.div
                key={currentIndex}
                className="absolute inset-y-0 left-0 bg-luxury-bronze"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            </div>
            <span className="text-luxury-bronze/40 text-sm font-mono tracking-wider">
              {String(materials.length).padStart(2, '0')}
            </span>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {materials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-luxury-bronze'
                    : 'w-2 bg-luxury-bronze/30 hover:bg-luxury-bronze/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
