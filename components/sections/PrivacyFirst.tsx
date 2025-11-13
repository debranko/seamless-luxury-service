'use client';

import React from 'react';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function PrivacyFirst() {
  return (
    <Section background="charcoal">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-white mb-12">
            Privacy First, <span className="text-gradient-bronze">by Design.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-10 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg">
              <div className="text-5xl mb-6">🔒</div>
              <h3 className="text-3xl font-serif text-luxury-white mb-4">
                Physical Microphone Switch
              </h3>
              <p className="text-luxury-gray-light text-lg leading-relaxed">
                The microphone activates only when the button is pressed. No background listening. No cloud. No remote activation.
              </p>
            </div>

            <div className="p-10 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg">
              <div className="text-5xl mb-6">📴</div>
              <h3 className="text-3xl font-serif text-luxury-white mb-4">
                Fully Removable Module
              </h3>
              <p className="text-luxury-gray-light text-lg leading-relaxed">
                For absolute privacy, the entire microphone module can be physically removed. No software switch. True hardware privacy.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-4 border border-luxury-bronze/30 rounded-full"
          >
            <p className="text-luxury-bronze text-xs uppercase tracking-[0.2em]">
              Your data never leaves the vessel
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
