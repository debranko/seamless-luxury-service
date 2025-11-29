'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import { motion } from 'framer-motion';

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/yacht-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/95 to-luxury-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/50" />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-luxury-bronze/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-luxury-gold/5 rounded-full blur-[120px]" />

      <div className="container-luxury relative z-10 py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-luxury-bronze text-sm uppercase tracking-[0.3em] font-medium"
            >
              Superyacht Guest Service System
            </motion.p>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-luxury-white mb-8 leading-[1.1]"
              >
                You've seen call buttons,
                <br />
                <span className="text-gradient-bronze">you haven't seen Obedio.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-luxury-cream/80 max-w-xl leading-relaxed"
              >
                The first luxury guest service system with real offline voice to text, instant translation, and nine-month battery life.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                variant="primary"
                href="mailto:info@obedio.de?subject=Demo Request"
                className="bg-luxury-bronze text-luxury-black hover:bg-luxury-bronze-light px-8 py-4 text-base font-medium"
              >
                Request Demo
              </Button>
              <Button
                variant="outline"
                href="#integrators"
                className="border-2 border-luxury-bronze/30 text-luxury-bronze hover:border-luxury-bronze hover:bg-luxury-bronze/10 px-8 py-4 text-base"
              >
                For Integrators
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-6 pt-6 text-luxury-gray-light text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>100% Offline</span>
              </div>
              <div className="w-px h-4 bg-luxury-bronze/30" />
              <span>30+ Languages</span>
              <div className="w-px h-4 bg-luxury-bronze/30" />
              <span>9-Month Battery</span>
            </motion.div>
          </motion.div>

          {/* Right: Product Render with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Bronze glow behind product */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] bg-luxury-bronze/20 rounded-full blur-[80px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[50%] h-[50%] bg-luxury-gold/15 rounded-full blur-[60px]" />
            </div>

            {/* Product image */}
            <Image
              src="/images/button-leather-gold.png"
              alt="Obedio Luxury Call Button"
              width={550}
              height={550}
              className="relative z-10 w-full max-w-[550px] h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-luxury-black to-transparent" />
    </section>
  );
}
