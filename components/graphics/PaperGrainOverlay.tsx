'use client';

import React from 'react';

/**
 * PaperGrainOverlay component
 * Renders an ultra-lightweight SVG filter noise overlay across the screen,
 * establishing the cold-press cotton rag paper texture across all chapters.
 */
export const PaperGrainOverlay: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.045] mix-blend-multiply"
      aria-hidden="true"
    >
      <svg className="h-full w-full">
        <filter id="marigold-paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#marigold-paper-noise)"
        />
      </svg>
    </div>
  );
};
