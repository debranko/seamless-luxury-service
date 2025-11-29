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
            <div className="p-10 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg group hover:border-luxury-bronze/40 transition-all duration-300">
              <div className="text-luxury-bronze mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <circle cx="12" cy="16" r="1" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif text-luxury-white mb-4">
                Two-Step Microphone
              </h3>
              <p className="text-luxury-gray-light text-lg leading-relaxed">
                Step 1 activates the microphone. Step 2 begins recording. The device never listens passively—privacy is built into the hardware.
              </p>
            </div>

            <div className="p-10 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg group hover:border-luxury-bronze/40 transition-all duration-300">
              <div className="text-luxury-bronze mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-14 h-14">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 9h6v6H9z" />
                  <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
                  <path d="M4 12h-3M23 12h-3" strokeDasharray="2 2" />
                </svg>
              </div>
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
