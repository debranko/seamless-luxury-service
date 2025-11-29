'use client';

import React from 'react';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function ForCrew() {
  const features = [
    {
      number: '1',
      title: 'Voice-to-Text & Live Translation',
      problem: 'A guest calls. You walk to the cabin. They speak Russian. You use Google Translate. You walk back to get the item.',
      solution: 'The guest speaks Russian. Your watch vibrates. You see the request: "Please bring one bottle of water." You bring the water on the first trip.',
    },
    {
      number: '2',
      title: 'The 7-Day Battery Watch',
      problem: 'Your Apple Watch or standard watch is dead by the afternoon, or you forget to charge it during a busy charter.',
      solution: 'Our optimized Wear OS watch lasts up to 7 days on a single charge. It is a reliable tool, not another liability.',
    },
    {
      number: '3',
      title: 'Automated Duty Roster',
      problem: 'Manually swapping shared watches at the end of every shift.',
      solution: 'You keep your own watch. The "Automatic Duty" software knows your schedule. When your shift starts, calls are routed to you. When it ends, they stop.',
    },
    {
      number: '4',
      title: '"Shake-to-Delegate"',
      problem: 'You\'re carrying a heavy tray or cleaning, and a new call comes in. You can\'t tap "Delegate."',
      solution: 'Simply shake your wrist. The call is instantly delegated to the next crew member on duty, hands-free.',
    },
    {
      number: '5',
      title: '"Serving Now" & 3-Stage Escalation',
      problem: 'Two crew members show up for the same request, while another request is ignored.',
      solution: 'When you tap "Accept," you appear in the "Serving Now" dashboard. Everyone knows you\'re handling it. If a call is not accepted, the system automatically escalates it until someone responds.',
    },
  ];

  const benefits = [
    {
      title: 'Local & Reliable',
      description: 'It works even if the ship\'s internet fails.',
    },
    {
      title: 'Charter Management',
      description: 'Automatically logs requests against the current charter guests.',
    },
    {
      title: '"On My Way"',
      description: 'If a voice message is unclear, one tap tells the guest you are "On My Way" to hear the request personally.',
    },
  ];

  return (
    <Section id="crew" background="darker" className="bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-white mb-8">
            Stop managing your call system.
            <br />
            <span className="text-gradient-bronze">Start managing your service.</span>
          </h2>
          <p className="text-xl md:text-2xl text-luxury-gray-light max-w-4xl mx-auto">
            For too long, crew call systems have created more work. Lost signals, dead batteries, language barriers, and endless charging cycles.
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-serif text-luxury-white mb-4">
            5 Ways Obedio Gives You Time Back
          </h3>
        </motion.div>

        {/* Features */}
        <div className="space-y-16 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Number */}
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <div className="w-16 h-16 rounded-full border-2 border-luxury-bronze flex items-center justify-center">
                  <span className="text-3xl font-serif text-luxury-bronze">{feature.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-11 space-y-6">
                <h4 className="text-3xl md:text-4xl font-serif text-luxury-white">
                  {feature.title}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Problem */}
                  <div className="p-6 bg-luxury-charcoal-light/30 border border-luxury-gray-dark/30 rounded-lg">
                    <p className="text-xs uppercase tracking-[0.2em] text-luxury-gray-light mb-3">
                      The Problem
                    </p>
                    <p className="text-lg text-luxury-cream leading-relaxed">
                      {feature.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-6 bg-luxury-bronze/5 border border-luxury-bronze/20 rounded-lg">
                    <p className="text-xs uppercase tracking-[0.2em] text-luxury-bronze mb-3">
                      The Obedio Solution
                    </p>
                    <p className="text-lg text-luxury-white leading-relaxed">
                      {feature.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-luxury-bronze/20 pt-16"
        >
          <h3 className="text-3xl md:text-4xl font-serif text-luxury-white text-center mb-12">
            A system built for <span className="text-luxury-bronze">your reality</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <h4 className="text-2xl font-serif text-luxury-white mb-4">
                  {benefit.title}
                </h4>
                <p className="text-lg text-luxury-gray-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-2xl text-luxury-bronze font-serif">
              Stop being a technician for your call system. Let Obedio work for you.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
