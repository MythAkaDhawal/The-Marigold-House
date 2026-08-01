'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MarigoldBloomProps {
  size?: number;
  stage?: 'bud' | 'half' | 'full';
  className?: string;
  onClick?: () => void;
}

export const MarigoldBloom: React.FC<MarigoldBloomProps> = ({
  size = 48,
  stage = 'full',
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-marigold transition-transform duration-300 hover:scale-110"
      >
        {/* Outer Stem */}
        <path d="M50 95V70" stroke="#6E7F4F" strokeWidth="2.5" strokeLinecap="round" />

        {stage === 'bud' && (
          <g>
            <path
              d="M50 70C40 60 42 40 50 35C58 40 60 60 50 70Z"
              fill="#E0932E"
              fillOpacity="0.8"
              stroke="#3A2420"
              strokeWidth="2"
            />
            <path d="M44 70C38 65 38 52 48 42" stroke="#6E7F4F" strokeWidth="2" strokeLinecap="round" />
            <path d="M56 70C62 65 62 52 52 42" stroke="#6E7F4F" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {stage === 'half' && (
          <g>
            <path d="M50 70C35 55 35 35 50 25C65 35 65 55 50 70Z" fill="#E0932E" fillOpacity="0.85" stroke="#3A2420" strokeWidth="2" />
            <path d="M50 70C25 50 30 30 50 35" stroke="#3A2420" strokeWidth="1.8" />
            <path d="M50 70C75 50 70 30 50 35" stroke="#3A2420" strokeWidth="1.8" />
          </g>
        )}

        {stage === 'full' && (
          <g>
            {/* Concentric Marigold Petal Layers */}
            <circle cx="50" cy="50" r="14" fill="#E0932E" />
            {/* Inner Petal Ring */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <g key={i} transform={`rotate(${angle} 50 50)`}>
                <path
                  d="M50 50C44 32 56 32 50 50Z"
                  fill="#E0932E"
                  stroke="#3A2420"
                  strokeWidth="1.5"
                />
              </g>
            ))}
            {/* Outer Petal Ring */}
            {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
              <g key={i} transform={`rotate(${angle} 50 50)`}>
                <path
                  d="M50 50C38 22 62 22 50 50Z"
                  fill="#C97C6D"
                  fillOpacity="0.4"
                  stroke="#3A2420"
                  strokeWidth="1.5"
                />
              </g>
            ))}
            {/* Center Stamen Dot */}
            <circle cx="50" cy="50" r="5" fill="#3A2420" />
          </g>
        )}
      </svg>
    </div>
  );
};
