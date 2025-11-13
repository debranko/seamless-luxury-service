'use client';

import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function ObedioExperience() {
  return (
    <Section background="darker" className="bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-white mb-6">
            A luxury moment should{' '}
            <span className="text-gradient-bronze">never be interrupted.</span>
          </h2>
        </motion.div>

        {/* Guest Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/button-leather-angle.png"
                alt="Obedio Guest Button"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-4xl md:text-5xl font-serif text-luxury-white">
                Guest Button
              </h3>
              <p className="text-luxury-gray-light text-xs uppercase tracking-[0.2em] mb-8">
                Main Device
              </p>

              <ul className="space-y-4">
                {[
                  'Capacitive main button with two-stage tactile click',
                  'Shake-to-call via LIS3DH',
                  'Offline voice capture with physical microphone switch',
                  'No cloud dependency',
                  '9 months battery life',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-luxury-cream"
                  >
                    <span className="text-luxury-bronze mt-1 flex-shrink-0 text-xl">—</span>
                    <span className="text-lg leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Crew Smartwatches */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-serif text-luxury-white">
                Crew Smartwatches
              </h3>
              <p className="text-luxury-gray-light text-xs uppercase tracking-[0.2em] mb-8">
                Real-time Crew Interface
              </p>

              <ul className="space-y-4">
                {[
                  'Real-time alerts',
                  'Voice message playback',
                  'Instant translation',
                  'Duty switch on wrist',
                  '7-day battery with firmware optimization',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-luxury-cream"
                  >
                    <span className="text-luxury-bronze mt-1 flex-shrink-0 text-xl">—</span>
                    <span className="text-lg leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Watch Render */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/watch-square.png"
                  alt="Obedio Crew Smartwatch"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Obedio Server */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Server Render */}
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/server.png"
                alt="Obedio Server"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-4xl md:text-5xl font-serif text-luxury-white">
                Obedio Server
              </h3>
              <p className="text-luxury-gray-light text-xs uppercase tracking-[0.2em] mb-8">
                Local Intelligence Hub
              </p>

              <ul className="space-y-4">
                {[
                  'Local server',
                  'Full privacy',
                  'End-to-end encrypted RF',
                  'Zero dependency on internet',
                  'All AI processing on-premises',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 text-luxury-cream"
                  >
                    <span className="text-luxury-bronze mt-1 flex-shrink-0 text-xl">—</span>
                    <span className="text-lg leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
