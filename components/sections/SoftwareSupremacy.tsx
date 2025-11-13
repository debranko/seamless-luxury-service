'use client';

import React from 'react';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function SoftwareSupremacy() {
  const features = [
    {
      title: 'Automated Duty Roster',
      description: 'Stop swapping devices. Every crew member has their own assigned watch. The software automatically knows who is on duty and routes calls only to them.',
      icon: '📋',
    },
    {
      title: '"Serving Now" & "Shake-to-Delegate"',
      description: 'The Chief Stewardess sees exactly who is attending to which guest in real-time. If a crew member\'s hands are full, a simple shake of the wrist instantly delegates the call to the next person on duty.',
      icon: '🤝',
    },
    {
      title: '3-Stage Escalation Logic',
      description: 'Guarantees no guest is ever ignored. If a call is unaccepted, it repeats and escalates until a response is guaranteed.',
      icon: '🔔',
    },
    {
      title: 'Charter Intelligence',
      description: 'This is a dedicated charter management tool. Automatically log all guest requests against their specific charter period for accountability and preference tracking.',
      icon: '📊',
    },
  ];

  return (
    <Section id="software" background="charcoal">
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
            THE BRAIN OF THE OPERATION
          </h2>
          <p className="text-xl md:text-2xl text-luxury-cream/80 font-light max-w-4xl mx-auto leading-relaxed">
            Obedio's true power is its sophisticated, locally-hosted management software. It's a comprehensive platform built to optimize every facet of crew operations.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="luxury-border bg-luxury-dark/50 p-8 md:p-12 rounded-lg mb-16"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-luxury-gold/20 pb-4">
              <h3 className="text-2xl font-serif font-semibold text-luxury-gold">Admin Dashboard</h3>
              <div className="flex gap-3">
                <div className="w-3 h-3 bg-luxury-gold rounded-full"></div>
                <div className="w-3 h-3 bg-luxury-gold/50 rounded-full"></div>
                <div className="w-3 h-3 bg-luxury-gold/30 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-luxury-charcoal/50 p-6 rounded-lg">
                <h4 className="text-luxury-gold font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Crew Roster
                </h4>
                <div className="space-y-2 text-sm text-luxury-cream/70">
                  <div className="flex justify-between items-center p-2 bg-luxury-dark/50 rounded">
                    <span>Sarah Chen</span>
                    <span className="text-green-500">On Duty</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-luxury-dark/50 rounded">
                    <span>Marcus Webb</span>
                    <span className="text-green-500">On Duty</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-luxury-dark/50 rounded">
                    <span>Elena Rossi</span>
                    <span className="text-luxury-cream/40">Off Duty</span>
                  </div>
                </div>
              </div>

              <div className="bg-luxury-charcoal/50 p-6 rounded-lg">
                <h4 className="text-luxury-gold font-semibold mb-3">Serving Now</h4>
                <div className="space-y-2 text-sm text-luxury-cream/70">
                  <div className="p-3 bg-luxury-dark/50 rounded border-l-2 border-luxury-gold">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold">Master Suite</span>
                      <span className="text-xs text-luxury-gold">Active</span>
                    </div>
                    <div className="text-xs">Sarah Chen responding...</div>
                  </div>
                  <div className="p-3 bg-luxury-dark/50 rounded">
                    <div className="text-luxury-cream/50 text-xs">No active calls</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
