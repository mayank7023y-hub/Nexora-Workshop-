'use client';

import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}
      <textarea
        ref={ref}
        className={`w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 resize-none ${
          error ? 'border-red-500' : ''
        } ${className || ''}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
);

Textarea.displayName = 'Textarea';