import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  href,
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-4 font-sans font-medium transition-all duration-300 text-center';

  const variants = {
    primary: 'bg-luxury-gold text-luxury-dark hover:bg-luxury-gold-light hover:shadow-lg hover:shadow-luxury-gold/20',
    secondary: 'bg-transparent border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark',
    outline: 'bg-transparent border border-luxury-cream/30 text-luxury-cream hover:border-luxury-gold hover:text-luxury-gold',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
