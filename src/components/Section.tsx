import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  preTitle?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  preTitle,
  title,
  description,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 border-t border-border-subtle max-w-5xl mx-auto px-6 overflow-hidden ${className}`}
    >
      {(preTitle || title || description) && (
        <motion.div
          className="mb-12 space-y-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {preTitle && (
            <span className="text-xs font-mono tracking-widest text-accent-primary uppercase font-semibold">
              {preTitle}
            </span>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl text-sm md:text-base text-text-secondary font-light leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}
