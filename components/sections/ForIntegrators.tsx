'use client';

import React from 'react';
import Button from '../Button';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function ForIntegrators() {
  const keyReasons = [
    {
      title: 'Sovereign Autonomy',
      subtitle: 'NO CLOUD, NO INTERNET',
      description: 'The entire system operates locally. If the internet fails, the ship\'s network goes down, or a server blackout occurs, Obedio continues to function. In Emergency Mode, Repeaters form a mesh network.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Local Voice Processing',
      subtitle: 'ALL DATA STAYS ON BOARD',
      description: 'Voice-to-Text and translation happen on the local server. Guest data never leaves the vessel. No cloud dependency means no privacy concerns.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: 'True Integration',
      subtitle: 'API & AUTOMATION READY',
      description: 'REST API and WebHooks for advanced automation. Four auxiliary buttons can control lighting, scenes, or DND status via the server bridge.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
          <circle cx="18" cy="7" r="3" />
          <circle cx="6" cy="11" r="3" />
        </svg>
      ),
    },
  ];

  const benefits = [
    'Zero cloud failures',
    'Full documentation & support',
    'Pre-provisioned systems (send GA, receive configured)',
    'Bespoke enclosure design available',
    'Optional white labeling for fleet owners',
  ];

  const integrations = [
    { name: 'REST API', status: 'Available Now' },
    { name: 'WebHooks', status: 'Available Now' },
    { name: 'Crestron', status: 'Coming Soon' },
    { name: 'Control4', status: 'Coming Soon' },
  ];

  return (
    <Section id="integrators" background="charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-white mb-6">
            Built for AV integrators.
            <br />
            <span className="text-gradient-bronze">Not just for guests.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {keyReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg group hover:border-luxury-bronze/40 transition-all duration-300"
            >
              <div className="text-luxury-bronze mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <p className="text-luxury-bronze text-xs uppercase tracking-[0.2em] mb-2">
                {reason.subtitle}
              </p>
              <h3 className="text-2xl font-serif text-luxury-white mb-4 group-hover:text-luxury-bronze transition-colors">
                {reason.title}
              </h3>
              <p className="text-luxury-gray-light text-base leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif text-luxury-white mb-8">Key Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-luxury-cream">
                  <svg className="w-5 h-5 text-luxury-bronze mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Integrations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif text-luxury-white mb-8">Integrations</h3>
            <div className="space-y-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-luxury-black/30 border border-luxury-bronze/10 rounded"
                >
                  <span className="text-luxury-white text-lg">{integration.name}</span>
                  <span className="text-xs text-luxury-bronze uppercase tracking-[0.2em]">
                    {integration.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="primary"
            href="mailto:info@obedio.de"
            className="bg-luxury-bronze text-luxury-black hover:bg-luxury-bronze-light px-8 py-4"
          >
            Partner with us
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
