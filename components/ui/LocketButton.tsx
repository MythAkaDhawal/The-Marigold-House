'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MarigoldBloom } from '@/components/graphics/MarigoldBloom';

interface LocketButtonProps {
  label: string;
  onSuccess?: () => void;
  className?: string;
}

export const LocketButton: React.FC<LocketButtonProps> = ({
  label,
  onSuccess,
  className = '',
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    if (isPressed || isSuccess) return;
    setIsPressed(true);

    setTimeout(() => {
      setIsSuccess(true);
      setIsPressed(false);
      if (onSuccess) onSuccess();
    }, 400);
  };

  return (
    <div className={`relative inline-flex flex-col items-center justify-center ${className}`}>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className={`group relative flex h-24 w-64 items-center justify-center rounded-full border-2 transition-all duration-300 shadow-warm-lg focus:ring-2 focus:ring-antique-brass ${
          isSuccess
            ? 'border-moss bg-moss text-white shadow-warm-lg ring-4 ring-moss/30'
            : isPressed
            ? 'border-marigold bg-marigold text-white scale-95 shadow-locket-press'
            : 'border-antique-brass/60 bg-ink-maroon/90 text-dawn-ivory hover:border-marigold hover:bg-marigold hover:text-white shadow-marigold-glow'
        }`}
        aria-label={label}
      >
        <div className="flex items-center gap-3">
          <MarigoldBloom size={32} stage={isSuccess ? 'full' : 'bud'} />
          <span className="font-serif text-lg font-medium tracking-wide">
            {isSuccess ? 'Sealed in Light ✓' : label}
          </span>
        </div>
      </motion.button>

      {/* Success Moss Green Flash Effect */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.4] }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute inset-0 rounded-full border-4 border-moss"
        />
      )}
    </div>
  );
};
