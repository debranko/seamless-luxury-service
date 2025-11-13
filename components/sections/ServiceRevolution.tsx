'use client';

import React from 'react';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function ServiceRevolution() {
  const features = [
    {
      title: 'Sovereign Local Processing',
      description: 'All transcription and translation occur locally on the server. Guest data never leaves the property, ensuring absolute privacy and zero dependency on cloud services.',
      icon: '🔒',
    },
    {
      title: 'Original Audio Attached',
      description: 'Alongside the text, the crew receives the original audio file, ensuring nuance and context are never lost.',
      icon: '🎵',
    },
    {
      title: 'Privacy by Design',
      description: 'A unique mechanical two-step microphone. Obedio listens only when invited. For absolute privacy, the microphone module is fully optional and can be physically removed.',
      icon: '🎙️',
    },
  ];

  return (
    <Section id="service-revolution" background="charcoal">
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
            FROM SPOKEN WORD TO IMMEDIATE ACTION
          </h2>
          <p className="text-xl md:text-2xl text-luxury-cream/80 font-light max-w-4xl mx-auto leading-relaxed">
            A guest speaks in their native language—be it Turkish, Russian, or Mandarin. The crew instantly receives the message on their watch, translated into English.
          </p>
        </motion.div>

        {/* Visual Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="luxury-border bg-luxury-dark/50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🗣️</div>
              <h3 className="text-xl font-serif font-semibold text-luxury-gold mb-2">Guest Speaks</h3>
              <p className="text-luxury-cream/70">Turkish, Russian, Mandarin...</p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="text-luxury-gold text-4xl">→</div>
            </div>

            <div className="luxury-border bg-luxury-dark/50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">⌚</div>
              <h3 className="text-xl font-serif font-semibold text-luxury-gold mb-2">Crew Receives</h3>
              <p className="text-luxury-cream/70">Instant translation in English</p>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="luxury-border bg-luxury-dark/30 p-8 rounded-lg hover:bg-luxury-dark/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-luxury-gold mb-4">
                {feature.title}
              </h3>
              <p className="text-luxury-cream/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
