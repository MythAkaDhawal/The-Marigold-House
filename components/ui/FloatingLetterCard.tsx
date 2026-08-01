'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useChapter } from '@/lib/context/ChapterContext';

interface FloatingLetterCardProps {
  children: React.ReactNode;
  rotationDeg?: number;
  className?: string;
}

export const FloatingLetterCard: React.FC<FloatingLetterCardProps> = ({
  children,
  rotationDeg = -1.2,
  className = '',
}) => {
  const { reducedMotion } = useChapter();

  if (reducedMotion) {
    return (
      <div className={`deckled-card p-8 md:p-12 text-ink-maroon ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ rotate: rotationDeg, y: 0 }}
      whileHover={{
        rotate: 0,
        y: -4,
        boxShadow: '0 16px 40px rgba(58, 36, 32, 0.18)',
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`deckled-card p-8 md:p-12 text-ink-maroon transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
