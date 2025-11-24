'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import { motion } from 'framer-motion';

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-luxury-charcoal via-luxury-black to-luxury-black overflow-hidden">
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255_/_0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container-luxury relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl font-serif text-luxury-white mb-8"
              >
                You've seen call buttons,
                <br />
                <span className="text-gradient-bronze">you haven't seen Obedio.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-luxury-gray-light max-w-2xl"
              >
                The first luxury guest service system with real offline voice to text, instant translation, and nine-month battery life.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                href="#demo"
                className="bg-luxury-bronze text-luxury-black hover:bg-luxury-bronze-light px-8 py-4 text-base font-medium"
              >
                See the Demo
              </Button>
              <Button
                variant="outline"
                href="#integrators"
                className="border-2 border-luxury-bronze/30 text-luxury-bronze hover:border-luxury-bronze hover:bg-luxury-bronze/10 px-8 py-4 text-base"
              >
                For Integrators
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Product Render */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <Image
              src="/images/button-leather-top.png"
              alt="Obedio Luxury Call Button"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-luxury-black to-transparent"></div>
    </section>
  );
}
