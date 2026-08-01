'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useChapter } from '@/lib/context/ChapterContext';

interface BotanicalDividerProps {
  className?: string;
}

export const BotanicalDivider: React.FC<BotanicalDividerProps> = ({ className = '' }) => {
  const { reducedMotion } = useChapter();

  return (
    <div className={`my-8 flex items-center justify-center ${className}`}>
      <svg
        width="160"
        height="32"
        viewBox="0 0 160 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-antique-brass opacity-75"
        aria-hidden="true"
      >
        {/* Left Stem */}
        <motion.path
          d="M10 16H65"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Left Leaves */}
        <motion.path
          d="M30 16C25 10 18 12 20 16C22 20 28 18 30 16Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Center Marigold Bud */}
        <motion.circle
          cx="80"
          cy="16"
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="#E0932E"
          fillOpacity="0.2"
          initial={reducedMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M80 8C76 12 76 20 80 24M80 8C84 12 84 20 80 24"
          stroke="currentColor"
          strokeWidth="1.2"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Right Leaves */}
        <motion.path
          d="M130 16C135 10 142 12 140 16C138 20 132 18 130 16Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Right Stem */}
        <motion.path
          d="M95 16H150"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </div>
  );
};
