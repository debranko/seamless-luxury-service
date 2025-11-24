import React, { forwardRef } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'dark' | 'darker' | 'charcoal';
}

const Section = forwardRef<HTMLElement, SectionProps>(({
  id,
  children,
  className = '',
  background = 'dark',
  ...props
}, ref) => {
  const backgrounds = {
    dark: 'bg-luxury-charcoal-light',
    darker: 'bg-luxury-black',
    charcoal: 'bg-luxury-charcoal',
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`section-spacing ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className="container-luxury">
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
