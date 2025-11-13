'use client';

import React from 'react';
import Button from '../Button';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function ForIntegrators() {
  const benefits = [
    'Zero cloud failures',
    'Predictive diagnostics',
    'Ethernet repeaters',
    'Full documentation',
    'Optional white labeling for fleet owners',
  ];

  const integrations = [
    { name: 'Crestron', status: 'Available Later' },
    { name: 'Control4', status: 'Available Later' },
    { name: 'REST API', status: 'Available Now' },
    { name: 'WebHooks', status: 'Optional' },
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg"
          >
            <h3 className="text-3xl font-serif text-luxury-white mb-4">
              Local-only architecture
            </h3>
            <p className="text-luxury-gray-light text-lg">
              No dependency on external servers. Complete system autonomy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg"
          >
            <h3 className="text-3xl font-serif text-luxury-white mb-4">
              API / Webhooks
            </h3>
            <p className="text-luxury-gray-light text-lg">
              Optional integrations for advanced automation workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-luxury-black/50 border border-luxury-bronze/20 rounded-lg"
          >
            <h3 className="text-3xl font-serif text-luxury-white mb-4">
              Integration support
            </h3>
            <p className="text-luxury-gray-light text-lg">
              Crestron / Control4 compatibility coming soon.
            </p>
          </motion.div>
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
                <li key={index} className="flex items-start gap-4 text-luxury-cream">
                  <span className="text-luxury-bronze mt-1 text-xl">—</span>
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
