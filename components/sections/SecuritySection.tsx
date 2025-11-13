'use client';

import React from 'react';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function SecuritySection() {
  const securityFeatures = [
    {
      title: 'Local server',
      description: 'All processing happens on-premises. No cloud dependency.',
    },
    {
      title: 'AES-encrypted RF',
      description: 'Military-grade encryption for all wireless communications.',
    },
    {
      title: 'TLS 1.3 for Wi-Fi',
      description: 'Latest encryption standard for network communications.',
    },
    {
      title: 'Multi-frequency RF hopping',
      description: 'Advanced interference avoidance and security.',
    },
    {
      title: 'No cloud, no data leaks',
      description: 'Your data never leaves the vessel. Full privacy guaranteed.',
    },
  ];

  return (
    <Section background="charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-luxury-white mb-6">
            <span className="text-gradient-bronze">Security</span> is not optional.
          </h2>
          <p className="text-xl text-luxury-gray-light font-light max-w-3xl mx-auto">
            Engineered for the most demanding privacy requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg group hover:border-luxury-bronze/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-serif text-luxury-white mb-3 group-hover:text-luxury-bronze transition-colors">
                {feature.title}
              </h3>
              <p className="text-luxury-gray-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block px-8 py-4 border border-luxury-bronze/30 rounded-full">
            <p className="text-luxury-bronze text-sm uppercase tracking-widest">
              Zero-trust architecture. Complete data sovereignty.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
