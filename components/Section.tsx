import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'dark' | 'darker' | 'charcoal';
}

export default function Section({
  id,
  children,
  className = '',
  background = 'dark'
}: SectionProps) {
  const backgrounds = {
    dark: 'bg-luxury-charcoal-light',
    darker: 'bg-luxury-black',
    charcoal: 'bg-luxury-charcoal',
  };

  return (
    <section
      id={id}
      className={`section-spacing ${backgrounds[background]} ${className}`}
    >
      <div className="container-luxury">
        {children}
      </div>
    </section>
  );
}
