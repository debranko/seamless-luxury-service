'use client';

import React from 'react';
import Section from '../Section';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    title: 'Speak Your Language',
    subtitle: 'INSTANT TRANSLATION',
    description: 'Your guests speak Turkish, Russian, or Mandarin. The crew instantly receives the request in English. No delays, no misunderstandings.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Privacy by Design',
    subtitle: 'TWO-STEP ACTIVATION',
    description: 'The microphone activates only when pressed. A second press begins recording. Your conversations remain private—always.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Truly Bespoke',
    subtitle: 'UNIQUE TO YOUR VESSEL',
    description: 'Unlike other systems, Obedio is not defined by its shape—it defines its own. Custom materials, dimensions, and design to match your interior.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function ForOwners() {
  return (
    <Section id="owners" background="darker">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-luxury-bronze text-sm uppercase tracking-[0.3em] mb-6">
            For Yacht & Villa Owners
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-white mb-8 leading-tight">
            Time is the only luxury
            <br />
            <span className="text-gradient-bronze">you cannot buy back.</span>
          </h2>
          <p className="text-xl md:text-2xl text-luxury-gray-light max-w-3xl mx-auto leading-relaxed">
            Obedio transforms a spoken word into immediate, precise action.
            Your guests deserve service without delays, without barriers.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group p-10 bg-gradient-to-br from-luxury-charcoal-light/50 to-luxury-black border border-luxury-bronze/20 rounded-xl hover:border-luxury-bronze/40 transition-all duration-500"
            >
              <div className="text-luxury-bronze mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <p className="text-luxury-bronze text-xs uppercase tracking-[0.2em] mb-3">
                {feature.subtitle}
              </p>
              <h3 className="text-2xl font-serif text-luxury-white mb-4 group-hover:text-luxury-bronze transition-colors">
                {feature.title}
              </h3>
              <p className="text-luxury-gray-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 border border-luxury-bronze/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-luxury-bronze animate-pulse" />
            <p className="text-luxury-bronze text-sm uppercase tracking-[0.2em]">
              100% Local • Absolute Privacy • Zero Internet Dependency
            </p>
            <div className="w-2 h-2 rounded-full bg-luxury-bronze animate-pulse" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
