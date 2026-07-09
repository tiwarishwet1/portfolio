import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  as = 'button',
  href,
  target,
  rel,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyle =
    'inline-flex items-center justify-center gap-1.5 font-medium rounded-xl transition-all duration-300 select-none';

  const variants = {
    primary:
      'bg-accent-primary hover:bg-accent-primary/90 text-white border border-white/10 shadow-[0_4px_12px_rgba(124,108,255,0.25)] hover:shadow-[0_8px_24px_rgba(124,108,255,0.35)] hover:-translate-y-0.5',
    secondary:
      'bg-surface-base hover:bg-card-base border border-border-subtle text-white hover:-translate-y-0.5',
    outline:
      'bg-transparent border border-border-subtle hover:border-white/20 hover:bg-surface-base text-white',
    ghost:
      'bg-transparent border border-transparent text-text-secondary hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4.5 py-2.5 text-xs md:text-sm',
    lg: 'px-6 py-3.5 text-sm md:text-base',
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={combinedClassName}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
