'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useChapter } from '@/lib/context/ChapterContext';

interface PetalParticle {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export const PetalCursorTrail: React.FC = () => {
  const { reducedMotion } = useChapter();
  const [petals, setPetals] = useState<PetalParticle[]>([]);

  useEffect(() => {
    if (reducedMotion) return;

    let idCount = 0;
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle petal creation to keep particles subtle & performance high
      if (Math.random() > 0.35) return;

      const newPetal: PetalParticle = {
        id: ++idCount,
        x: e.clientX,
        y: e.clientY,
        rotation: Math.random() * 360,
      };

      setPetals((prev) => [...prev.slice(-12), newPetal]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ opacity: 0.6, scale: 0.8, y: 0 }}
          animate={{ opacity: 0, scale: 0.3, y: 35, x: Math.random() * 20 - 10 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: petal.x,
            top: petal.y,
            transform: `rotate(${petal.rotation}deg)`,
          }}
          className="h-2 w-1.5 rounded-full bg-marigold/40 blur-[0.5px]"
        />
      ))}
    </div>
  );
};
