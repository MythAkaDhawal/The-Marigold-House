/**
 * Motion System Tokens for The Marigold Hour
 * Strictly defined according to WEBSITE_SPECIFICATION.md
 */

export const EASINGS = {
  // Settle: gentle overshoot-then-rest curve for arriving elements
  settle: [0.16, 1, 0.3, 1] as const,
  // Drift: slow, near-linear curve for ambient idle motion
  drift: [0.4, 0, 0.6, 1] as const,
  // ClickOpen: bouncy/elastic curve for the single Locket Button stamp motion
  clickOpen: [0.34, 1.56, 0.64, 1] as const,
  // Linear fallback
  linear: [0, 0, 1, 1] as const,
};

export const DURATIONS = {
  micro: 0.15,      // 150ms: Hover / focus feedback
  interaction: 0.3,  // 300ms: Taps, toggles, small reveals
  transition: 0.75, // 750ms: Card entrances, divider draw-ins
  chapter: 1.5,     // 1500ms: Background / scene changes
};

export const MOTION_VARIANTS = {
  entrance: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: DURATIONS.transition,
        ease: EASINGS.settle,
      },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: {
        duration: DURATIONS.interaction,
        ease: EASINGS.drift,
      },
    },
  },
  bloom: {
    rest: { scale: 1, filter: 'brightness(1)' },
    hover: {
      scale: 1.03,
      filter: 'brightness(1.08)',
      transition: {
        duration: DURATIONS.micro,
        ease: EASINGS.settle,
      },
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: DURATIONS.micro,
        ease: EASINGS.settle,
      },
    },
  },
  driftIdle: {
    animate: {
      rotate: [-1.5, 1.5, -1.5],
      y: [-2, 2, -2],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: EASINGS.drift,
      },
    },
  },
  glowBreathe: {
    animate: {
      opacity: [0.2, 0.35, 0.2],
      scale: [0.98, 1.03, 0.98],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: EASINGS.drift,
      },
    },
  },
};
