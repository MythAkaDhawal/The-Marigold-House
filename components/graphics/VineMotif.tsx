'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useChapter } from '@/lib/context/ChapterContext';

export const VineMotif: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { reducedMotion } = useChapter();

  return (
    <div className={`flex justify-center ${className}`}>
      <svg
        width="200"
        height="80"
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-moss"
      >
        {/* Main Growing Stem */}
        <motion.path
          d="M10 40C40 20 70 60 100 40C130 20 160 60 190 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Leaves along vine */}
        <motion.path
          d="M40 32C32 20 20 28 35 34Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="1.2"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.5 }}
        />
        <motion.path
          d="M100 40C108 52 120 44 105 38Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="1.2"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.9 }}
        />
        <motion.path
          d="M160 32C152 20 140 28 155 34Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="1.2"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 1.3 }}
        />
      </svg>
    </div>
  );
};
