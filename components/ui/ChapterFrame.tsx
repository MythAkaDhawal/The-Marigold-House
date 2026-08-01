'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CHAPTERS_META } from '@/content/storyData';
import { useChapter } from '@/lib/context/ChapterContext';

interface ChapterFrameProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const ChapterFrame: React.FC<ChapterFrameProps> = ({ id, children, className = '' }) => {
  const meta = CHAPTERS_META[id];
  const { reducedMotion } = useChapter();

  const bgColor = meta?.bgColor || '#F3E6D2';
  const textColor = meta?.textColor || '#3A2420';

  return (
    <section
      id={id}
      style={{ backgroundColor: bgColor, color: textColor }}
      className={`relative min-h-screen w-full transition-colors duration-1000 ease-settle overflow-hidden py-16 px-6 md:px-16 flex flex-col justify-center items-center ${className}`}
    >
      {/* Ambient background glow radial spot */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(circle at 50% 40%, rgba(224, 147, 46, 0.15) 0%, transparent 70%)`,
        }}
      />

      {/* Floating Petal Atmosphere (disabled when reduced motion is requested) */}
      {!reducedMotion && id === 'epilogue' && (
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/5 h-2 w-2 rounded-full bg-marigold/30 blur-[1px]"
          />
          <motion.div
            animate={{
              y: [0, 60, 0],
              x: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/2 right-1/4 h-3 w-3 rounded-full bg-antique-brass/25 blur-[1px]"
          />
        </div>
      )}

      {/* Chapter Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};
