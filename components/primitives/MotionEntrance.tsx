'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MOTION_VARIANTS } from '@/lib/motion/tokens';
import { useChapter } from '@/lib/context/ChapterContext';

interface MotionEntranceProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const MotionEntrance: React.FC<MotionEntranceProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const { reducedMotion } = useChapter();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={MOTION_VARIANTS.entrance}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
