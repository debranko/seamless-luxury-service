'use client';

import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import { motion } from 'framer-motion';

const PROBLEMS = [
  {
    title: 'No voice. No context.',
    description: 'Service arrives, doesn\'t know what the guest wants.',
  },
  {
    title: 'No multi-language support.',
    description: 'Guest speaks English, French, or Chinese – crew guesses.',
  },
  {
    title: 'No real workflow.',
    description: 'System isn\'t built for yachts. No duty management, task reassignment, or guest preferences.',
  },
];

const SOLUTIONS = [
  {
    title: 'Voice to Text',
    subtitle: 'Offline',
    icon: '🎤',
    image: '/images/button-leather-top.png',
  },
  {
    title: 'Instant Translation',
    subtitle: '30+ languages',
    icon: '🌍',
    image: '/images/watch-round.png',
  },
  {
    title: 'Crew Management',
    subtitle: 'Duty system',
    icon: '👥',
    image: '/images/watch-square.png',
  },
];

export default function ProblemSolution() {
  return (
    <Section background="charcoal">
      <div className="max-w-6xl mx-auto">
        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-white mb-16 text-center">
            The old call button era is <span className="text-gradient-bronze">over.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEMS.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-luxury-charcoal-light/50 rounded-lg border border-luxury-gray-dark/30"
              >
                <h3 className="text-2xl font-serif text-luxury-white mb-4">
                  {problem.title}
                </h3>
                <p className="text-luxury-gray-light text-base leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="relative my-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-luxury-bronze/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-luxury-charcoal px-8 text-luxury-bronze text-xs uppercase tracking-[0.2em]">
              Obedio Solves This
            </span>
          </div>
        </div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative p-10 bg-gradient-to-br from-luxury-charcoal-light to-luxury-black rounded-lg border border-luxury-bronze/20 hover:border-luxury-bronze/40 transition-all duration-300 group overflow-hidden"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="text-5xl mb-6">{solution.icon}</div>
                  <h3 className="text-3xl font-serif text-luxury-white mb-3 group-hover:text-luxury-bronze transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-luxury-bronze text-xs uppercase tracking-[0.2em]">
                    {solution.subtitle}
                  </p>
                </div>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-luxury-bronze/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
