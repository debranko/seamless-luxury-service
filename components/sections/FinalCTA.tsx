'use client';

import React from 'react';
import Section from '../Section';
import Button from '../Button';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <Section id="contact" background="charcoal">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient-gold mb-6">
            EXPERIENCE THE INTELLIGENCE OF SERVICE
          </h2>
          <p className="text-xl md:text-2xl text-luxury-cream/80 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Don't let your service be anything less than perfect. Elevate your guest experience with the platform built for sovereign reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="primary" href="mailto:info@obedio.de">
              Request a Live Demo
            </Button>
            <Button variant="secondary" href="mailto:info@obedio.de">
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="luxury-border bg-luxury-dark/30 p-8 rounded-lg mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-luxury-gold font-semibold mb-3 text-lg">Email</h3>
              <a
                href="mailto:info@obedio.de"
                className="text-luxury-cream/90 hover:text-luxury-gold transition-colors duration-300 text-lg"
              >
                info@obedio.de
              </a>
            </div>
            <div>
              <h3 className="text-luxury-gold font-semibold mb-3 text-lg">Website</h3>
              <a
                href="https://obedio.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-cream/90 hover:text-luxury-gold transition-colors duration-300 text-lg"
              >
                obedio.de
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-luxury-gold/20 text-center text-luxury-cream/50 text-sm"
      >
        <p>&copy; {new Date().getFullYear()} Obedio. The Intelligence of Service.</p>
      </motion.div>
    </Section>
  );
}
