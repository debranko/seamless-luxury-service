'use client';

import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    title: 'Voice-to-Text',
    subtitle: 'FROM SPOKEN WORD TO ACTION',
    description: 'Guests speak naturally. Crew receives clear, written requests instantly. The original audio file is always attached for context.',
    image: '/images/button-leather-top.png',
  },
  {
    title: 'Instant Translation',
    subtitle: '30+ LANGUAGES',
    description: 'A guest speaks Turkish, Russian, or Mandarin. The crew instantly receives the message in English. No delays, no misunderstandings.',
    image: '/images/watch-round.png',
  },
  {
    title: 'Privacy by Design',
    subtitle: 'THE TWO-STEP MICROPHONE',
    description: 'Obedio listens only when invited. A mechanical two-step switch ensures the microphone is physically disconnected until the button is pressed.',
    image: '/images/button-exploded.jpg',
  },
];

export default function GuestExperience() {
  return (
    <Section background="charcoal" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-6">
            Guest Experience
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-white mb-8">
            From spoken word to <span className="text-gradient-gold">immediate action.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-luxury-gold/10 bg-luxury-black/50 hover:border-luxury-gold/30 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
              </div>
              
              <div className="relative p-8">
                <p className="text-luxury-gold text-xs uppercase tracking-[0.2em] mb-4">
                  {feature.subtitle}
                </p>
                <h3 className="text-2xl font-serif text-luxury-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-luxury-gray-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
