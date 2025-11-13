'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SignatureAnimation() {
  return (
    <section className="relative w-full bg-luxury-black py-20 md:py-32 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-luxury-white mb-4">
            The <span className="text-gradient-bronze">Obedio Signature</span>
          </h2>
          <p className="text-luxury-gray-light text-sm uppercase tracking-widest">
            Craftsmanship in Motion
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video container with bronze border */}
          <div className="relative luxury-border rounded-lg overflow-hidden bg-luxury-charcoal/30 p-2">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded"
            >
              <source src="/videos/obedio-signature.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-luxury-bronze/5 blur-3xl rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
