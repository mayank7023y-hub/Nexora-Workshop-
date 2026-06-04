'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild, ...props }, ref) => {
    const baseStyles =
      'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue';

    const variants = {
      primary: 'bg-brand-blue hover:bg-brand-blue-dark text-white disabled:opacity-50',
      secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
      ghost: 'hover:bg-white/10 text-white',
      outline: 'border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    if (asChild) {
      return (
        <button
          ref={ref}
          className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };