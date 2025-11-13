'use client';

import React from 'react';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function SovereignAutonomy() {
  const pillars = [
    {
      title: '100% Local (No Internet Required)',
      description: 'The entire system is 100% local. It does not rely on a VSAT/LTE connection to function. If the internet fails, service quality is zero-percent affected.',
      icon: '🌐',
    },
    {
      title: 'Intelligent Hybrid Communication',
      description: 'The system intelligently assesses signal strength and network congestion, dynamically choosing the optimal path (RF or Wi-Fi) for each transmission.',
      icon: '📡',
    },
    {
      title: 'Emergency Mesh & Blackout-Proof',
      description: 'In the critical event of a server failure, the Obedio Repeaters automatically form a mesh network, taking over the server\'s role to receive standard calls.',
      icon: '⚡',
    },
  ];

  return (
    <Section id="sovereignty" background="dark">
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
            WHEN ALL ELSE FAILS, OBEDIO PERFORMS
          </h2>
          <p className="text-xl md:text-2xl text-luxury-cream/80 font-light max-w-4xl mx-auto leading-relaxed">
            Engineered for the most challenging environments—from multi-deck superyachts with dense steel bulkheads to sprawling private estates—guaranteeing every call is delivered.
          </p>
        </motion.div>

        {/* Failsafe Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="luxury-border bg-luxury-charcoal/50 p-8 md:p-12 rounded-lg mb-16 text-center"
        >
          <h3 className="text-2xl font-serif font-semibold text-luxury-gold mb-8">
            Failsafe Mesh Network Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-luxury-dark/50 p-6 rounded-lg">
              <div className="text-3xl mb-3">✅</div>
              <p className="text-luxury-cream/90 font-semibold mb-2">Normal Operation</p>
              <p className="text-luxury-cream/70 text-sm">Server coordinates all communications</p>
            </div>
            <div className="bg-luxury-dark/50 p-6 rounded-lg border-2 border-luxury-gold/30">
              <div className="text-3xl mb-3">🛡️</div>
              <p className="text-luxury-gold font-semibold mb-2">Emergency Mode</p>
              <p className="text-luxury-cream/70 text-sm">Repeaters form autonomous mesh network</p>
            </div>
          </div>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="luxury-border bg-luxury-charcoal/30 p-8 rounded-lg hover:bg-luxury-charcoal/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-luxury-gold mb-4">
                {pillar.title}
              </h3>
              <p className="text-luxury-cream/80 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
