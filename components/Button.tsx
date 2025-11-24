import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', children, className = '', href, ...props }, ref) => {
    const baseStyles = 'inline-block px-8 py-4 font-sans font-medium transition-all duration-300 text-center';

    const variants = {
      primary: 'bg-luxury-gold text-luxury-dark hover:bg-luxury-gold-light hover:shadow-lg hover:shadow-luxury-gold/20',
      secondary: 'bg-transparent border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark',
      outline: 'bg-transparent border border-luxury-cream/30 text-luxury-cream hover:border-luxury-gold hover:text-luxury-gold',
    };

    const classes = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <a href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
        </a>
      );
    }

    return (
      <button className={classes} ref={ref as React.Ref<HTMLButtonElement>} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
