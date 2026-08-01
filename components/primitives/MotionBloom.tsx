'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MOTION_VARIANTS } from '@/lib/motion/tokens';
import { useChapter } from '@/lib/context/ChapterContext';

interface MotionBloomProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MotionBloom: React.FC<MotionBloomProps> = ({
  children,
  className = '',
  onClick,
}) => {
  const { reducedMotion } = useChapter();

  if (reducedMotion) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={MOTION_VARIANTS.bloom}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};
