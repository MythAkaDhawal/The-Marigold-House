'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MOTION_VARIANTS } from '@/lib/motion/tokens';
import { useChapter } from '@/lib/context/ChapterContext';

interface MotionDriftProps {
  children: React.ReactNode;
  className?: string;
}

export const MotionDrift: React.FC<MotionDriftProps> = ({
  children,
  className = '',
}) => {
  const { reducedMotion } = useChapter();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={MOTION_VARIANTS.driftIdle}
      animate="animate"
      className={className}
    >
      {children}
    </motion.div>
  );
};
