'use client';

import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function Ecosystem() {
  return (
    <Section id="ecosystem" background="dark">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-6">
            WE SOLVED THE #1 FAILURE POINT
          </h2>
          <p className="text-2xl md:text-3xl text-luxury-gold font-light mb-4">
            The 7-Day Battery Watch
          </p>
          <p className="text-xl text-luxury-cream/80 font-light max-w-4xl mx-auto leading-relaxed">
            The greatest failure of any wearable service system is battery life. Our specially designed, firmware-optimized Wear OS device achieves up to 7 days of battery life on a single charge. It's a reliable tool, not another liability.
          </p>
        </motion.div>

        {/* Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Watch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="luxury-border bg-luxury-charcoal/30 p-8 rounded-lg"
          >
            <div className="text-6xl mb-6 text-center">⌚</div>
            <h3 className="text-2xl font-serif font-semibold text-luxury-gold mb-4 text-center">
              Obedio Smartwatch
            </h3>
            <ul className="space-y-3 text-luxury-cream/80">
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">✓</span>
                <span>7-day battery life on a single charge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">✓</span>
                <span>Firmware-optimized Wear OS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">✓</span>
                <span>Instant call reception with audio & text</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">✓</span>
                <span>Shake-to-delegate functionality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">✓</span>
                <span>Personal assignment (no device swapping)</span>
              </li>
            </ul>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="luxury-border bg-luxury-charcoal/30 p-8 rounded-lg"
          >
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/button-leather-top.png"
                alt="Obedio Button"
                width={300}
                height={300}
                className="w-48 h-auto"
              />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-luxury-gold mb-4 text-center">
              Obedio Button
            </h3>
            <ul className="space-y-3 text-luxury-cream/80">
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">✓</span>
                <span>5 distinct functions: Touch, Press, Double Touch, Double Press, Press & Hold (Voice)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">✓</span>
                <span>Optional voice-to-text with mechanical privacy switch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">✓</span>
                <span>Integrated LED ring for status feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-luxury-gold mt-1">✓</span>
                <span>Physically removable microphone module</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Auxiliary Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="luxury-border bg-luxury-charcoal/50 p-8 md:p-12 rounded-lg"
        >
          <h3 className="text-2xl font-serif font-semibold text-luxury-gold mb-6 text-center">
            Four Auxiliary Buttons
          </h3>
          <p className="text-lg text-luxury-cream/80 mb-8 text-center max-w-3xl mx-auto">
            The button can be configured with four discreet auxiliary buttons. Program them via the server bridge to control lighting, trigger Crestron scenes (e.g., "Cinema Mode"), or activate "Do Not Disturb" (DND) status.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-luxury-dark/50 p-4 rounded text-center">
              <div className="text-2xl mb-2">💡</div>
              <div className="text-sm text-luxury-cream/70">Lighting Control</div>
            </div>
            <div className="bg-luxury-dark/50 p-4 rounded text-center">
              <div className="text-2xl mb-2">🎬</div>
              <div className="text-sm text-luxury-cream/70">Cinema Mode</div>
            </div>
            <div className="bg-luxury-dark/50 p-4 rounded text-center">
              <div className="text-2xl mb-2">🚪</div>
              <div className="text-sm text-luxury-cream/70">Do Not Disturb</div>
            </div>
            <div className="bg-luxury-dark/50 p-4 rounded text-center">
              <div className="text-2xl mb-2">⚙️</div>
              <div className="text-sm text-luxury-cream/70">Custom Scene</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
