import React from 'react';
import { motion } from 'motion/react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = '',
  onClick,
  hoverEffect = true,
}: CardProps) {
  const hoverProps = hoverEffect
    ? {
        whileHover: { y: -4 },
        transition: { duration: 0.3, ease: 'easeOut' },
      }
    : {};

  return (
    <motion.div
      onClick={onClick}
      className={`liquid-glass rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      {...hoverProps}
    >
      {children}
    </motion.div>
  );
}
