'use client';

import React from 'react';
import Button from '../Button';

export default function MetstradeBanner() {
  return (
    <div className="bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="container-luxury flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-luxury-dark font-sans font-semibold text-center md:text-left text-sm md:text-base">
          Meet us at METSTRADE! See the future of service intelligence live at Stand 08.862 (in partnership with Mr Smith).
        </p>
        <Button
          variant="primary"
          className="bg-luxury-dark text-luxury-gold hover:bg-luxury-charcoal border-2 border-luxury-dark whitespace-nowrap text-sm md:text-base"
          href="#contact"
        >
          Schedule Your METSTRADE Demo
        </Button>
      </div>
    </div>
  );
}
