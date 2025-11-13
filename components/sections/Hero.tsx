'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-luxury-charcoal to-luxury-dark overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold-light rounded-full blur-3xl"></div>
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex justify-center"
          >
            <Image
              src="/images/button-logo-full.png"
              alt="Obedio Logo"
              width={400}
              height={400}
              className="w-64 md:w-80 lg:w-96 h-auto"
              priority
            />
          </motion.div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-gradient-gold leading-tight">
            OBEDIO: THE INTELLIGENCE OF SERVICE
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-luxury-cream/90 font-light mb-8 leading-relaxed"
          >
            The next-generation service platform engineered to solve the greatest challenges in luxury: time and language. From spoken word to immediate, precise action.
          </motion.p>

          {/* Key claims */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 text-luxury-gold font-sans font-medium text-sm md:text-base"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
              <span>100% Local</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
              <span>Absolute Privacy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-luxury-gold rounded-full"></span>
              <span>Zero Internet Dependency</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="primary" href="#contact">
              Request a Demo
            </Button>
            <Button variant="outline" href="#service-revolution">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-luxury-gold/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-luxury-gold rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
