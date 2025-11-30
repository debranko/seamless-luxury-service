'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function ForIntegrators() {
  const availableIntegrations = [
    { name: 'Crestron', logo: '/images/integrations/crestron.svg' },
    { name: 'KNX', logo: '/images/integrations/knx.svg' },
  ];

  const comingSoonIntegrations = [
    { name: 'Control4', logo: '/images/integrations/control4.svg' },
    { name: 'Lutron', logo: '/images/integrations/lutron.svg' },
    { name: 'AMX', logo: '/images/integrations/amx.svg' },
  ];

  return (
    <Section id="integrators" background="charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-white mb-6">
            Built for AV integrators.
            <br />
            <span className="text-gradient-bronze">Not just for guests.</span>
          </h2>
          <p className="text-xl md:text-2xl text-luxury-cream/80 max-w-3xl mx-auto">
            Works with what you already have
          </p>
        </motion.div>

        {/* Integration Logos - Available */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-luxury-bronze text-sm uppercase tracking-[0.2em] text-center mb-6">
            Available Now
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {availableIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center p-4 md:p-6 bg-luxury-black/50 rounded-lg border border-luxury-bronze/20 hover:border-luxury-bronze/40 transition-colors"
              >
                <div className="h-12 md:h-16 w-32 md:w-44 flex items-center justify-center bg-white rounded p-3">
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} integration`}
                    width={140}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="mt-3 text-luxury-white font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integration Logos - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-luxury-gray-light text-sm uppercase tracking-[0.2em] text-center mb-6">
            Coming Soon
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {comingSoonIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center p-3 opacity-60"
              >
                <div className="h-10 w-28 flex items-center justify-center bg-white/10 rounded p-2">
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} coming soon`}
                    width={100}
                    height={32}
                    className="object-contain grayscale"
                  />
                </div>
                <span className="mt-2 text-luxury-gray-light text-sm">{integration.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Features - Condensed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="text-center p-6 border border-luxury-bronze/10 rounded-lg">
            <div className="text-luxury-bronze mb-3">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-luxury-white mb-1">No Cloud</h3>
            <p className="text-luxury-gray-light text-sm">100% local operation</p>
          </div>
          <div className="text-center p-6 border border-luxury-bronze/10 rounded-lg">
            <div className="text-luxury-bronze mb-3">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-luxury-white mb-1">On-Prem</h3>
            <p className="text-luxury-gray-light text-sm">Data stays on board</p>
          </div>
          <div className="text-center p-6 border border-luxury-bronze/10 rounded-lg">
            <div className="text-luxury-bronze mb-3">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 20V10" />
                <path d="M12 20V4" />
                <path d="M6 20v-6" />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-luxury-white mb-1">API Ready</h3>
            <p className="text-luxury-gray-light text-sm">REST API & WebHooks</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/for-integrators"
            className="inline-flex items-center justify-center px-8 py-4 bg-luxury-bronze text-luxury-black font-medium rounded hover:bg-luxury-bronze-light transition-colors"
          >
            Learn More
          </Link>
          <Button
            variant="secondary"
            href="mailto:info@obedio.de?subject=Partnership Inquiry"
            className="border-luxury-bronze text-luxury-bronze hover:bg-luxury-bronze/10 px-8 py-4"
          >
            Partner with us
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
