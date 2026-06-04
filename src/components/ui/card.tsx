'use client';

import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'dark';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', children }, ref) => (
    <div
      ref={ref}
      className={`p-6 rounded-xl ${
        variant === 'default'
          ? 'bg-white/5 backdrop-blur-md border border-white/10'
          : 'bg-black/40 backdrop-blur-xl border border-white/5'
      } hover:border-brand-blue/50 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
);

Card.displayName = 'Card';

export const CardHeader = ({ className = '', children }: { className?: string; children: React.ReactNode }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ className = '', children }: { className?: string; children: React.ReactNode }) => (
  <h3 className={`text-xl font-bold ${className}`}>{children}</h3>
);

export const CardDescription = ({ className = '', children }: { className?: string; children: React.ReactNode }) => (
  <p className={`text-white/70 ${className}`}>{children}</p>
);

export const CardContent = ({ className = '', children }: { className?: string; children: React.ReactNode }) => (
  <div className={className}>{children}</div>
);

export const CardFooter = ({ className = '', children }: { className?: string; children: React.ReactNode }) => (
  <div className={`mt-4 pt-4 border-t border-white/10 ${className}`}>{children}</div>
);