'use client';

import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// Custom 1.5px ink stroke SVG icons designed specifically for The Marigold Hour

export const EnvelopeIcon: React.FC<IconProps & { isOpen?: boolean }> = ({
  size = 20,
  isOpen = false,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    {isOpen ? (
      <path d="M3 7l9 6 9-6M3 19l6-6M21 19l-6-6M12 3l-9 5h18l-9-5z" />
    ) : (
      <path d="M3 7l9 6 9-6M3 19l6-6M21 19l-6-6" />
    )}
  </svg>
);

export const BudIcon: React.FC<IconProps & { isBlooming?: boolean }> = ({
  size = 20,
  isBlooming = true,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22V12" />
    {isBlooming ? (
      <>
        <path d="M12 12c-3-3-6-2-6 2s4 6 6 6c2 0 6-2 6-6s-3-5-6-2z" />
        <path d="M12 7c-2-2-4-1-4 2s2 4 4 4c1 0 4-1 4-4s-2-3-4-2z" />
      </>
    ) : (
      <path d="M12 12c-2-4-5-3-4 1s3 4 4 4c1 0 3-1 2-4s-1-2-2-1z" />
    )}
  </svg>
);

export const PaperAirplaneIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
);

export const LoopingRibbonIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M4 12a8 8 0 0 1 14.93-4M20 12a8 8 0 0 1-14.93 4" />
    <path d="M18 4v4h-4" />
    <path d="M6 20v-4h4" />
  </svg>
);

export const FallingPetalIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2C8 6 4 11 4 15a8 8 0 0 0 16 0c0-4-4-9-8-13z" />
    <path d="M12 6v10" />
  </svg>
);

export const RibbonMarkerIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M6 3h12v18l-6-4-6 4V3z" />
    <circle cx="12" cy="9" r="2" />
  </svg>
);
