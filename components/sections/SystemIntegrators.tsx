'use client';

import React from 'react';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function SystemIntegrators() {
  const steps = [
    {
      number: '1',
      title: 'Send GA Plan',
      description: 'Provide your General Arrangement plan with button and repeater locations.',
      icon: '📋',
    },
    {
      number: '2',
      title: 'Receive Pre-Provisioned Box',
      description: 'We configure every device for its exact location and function.',
      icon: '📦',
    },
    {
      number: '3',
      title: 'Plug-and-Play Install',
      description: 'Your only job is to physically install and connect. Everything is pre-configured.',
      icon: '🔌',
    },
  ];

  return (
    <Section id="integrators" background="dark">
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
            DESIGNED FOR RAPID,<br />HASSLE-FREE INTEGRATION
          </h2>
          <p className="text-xl md:text-2xl text-luxury-cream/80 font-light max-w-4xl mx-auto leading-relaxed">
            The system is engineered to work out-of-the-box.
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-4 text-luxury-gold text-3xl z-10">
                  →
                </div>
              )}

              <div className="luxury-border bg-luxury-charcoal/30 p-8 rounded-lg hover:bg-luxury-charcoal/50 transition-all duration-300 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-luxury-gold text-luxury-dark rounded-full text-2xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>
                <div className="text-5xl mb-4 text-center">{step.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-luxury-gold mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-luxury-cream/80 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* API Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="luxury-border bg-luxury-charcoal/50 p-8 md:p-12 rounded-lg"
        >
          <h3 className="text-2xl font-serif font-semibold text-luxury-gold mb-6 text-center">
            API & Crestron Ready
          </h3>
          <p className="text-lg text-luxury-cream/80 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            The local server offers a powerful REST API and WebSocket bridge. It is designed to "speak" to other systems, including Crestron, Control4, and Savant.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-luxury-dark/50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">🔗</div>
              <div className="text-luxury-gold font-semibold mb-2">REST API</div>
              <div className="text-luxury-cream/70 text-sm">Full HTTP access</div>
            </div>
            <div className="bg-luxury-dark/50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">⚡</div>
              <div className="text-luxury-gold font-semibold mb-2">WebSocket</div>
              <div className="text-luxury-cream/70 text-sm">Real-time events</div>
            </div>
            <div className="bg-luxury-dark/50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">🎛️</div>
              <div className="text-luxury-gold font-semibold mb-2">Crestron</div>
              <div className="text-luxury-cream/70 text-sm">Native integration</div>
            </div>
            <div className="bg-luxury-dark/50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">🏠</div>
              <div className="text-luxury-gold font-semibold mb-2">Control4/Savant</div>
              <div className="text-luxury-cream/70 text-sm">Full compatibility</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
