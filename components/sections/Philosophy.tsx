'use client';

import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <Section background="darker" className="relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/Adobe Express - file (2).png"
          alt=""
          fill
          className="object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-black/90 to-luxury-black" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-luxury-gold text-sm uppercase tracking-[0.3em] mb-8">
            The Philosophy
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-white mb-12 leading-tight">
            "Unlike other systems, Obedio is not defined by its shape—
            <span className="text-gradient-gold">it defines its own.</span>"
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-luxury-cream/80 leading-relaxed font-light">
            <p>
              In the realm of discreet service and absolute comfort, Obedio establishes a new paradigm. 
              It is a system engineered for sovereign reliability and uncompromising privacy.
            </p>
            <p>
              Guests speak in their native language; crew members instantly understand the context and the request.
            </p>
            <p>
              Obedio operates entirely locally, secured by end-to-end encryption, and is engineered to remain 
              operational even if the internet connection, ship's network, or main power fails.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sovereign Reliability', desc: '100% Local Operation' },
              { title: 'Uncompromising Privacy', desc: 'End-to-End Encryption' },
              { title: 'Native Understanding', desc: 'Instant Translation' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-luxury-gold/10 rounded-lg bg-luxury-charcoal/30 backdrop-blur-sm"
              >
                <h3 className="text-luxury-gold font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-luxury-gray-light text-sm uppercase tracking-wider">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}