import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink-maroon': '#3A2420',
        'marigold': '#E0932E',
        'dawn-ivory': '#F3E6D2',
        'clay-rose': '#C97C6D',
        'moss': '#6E7F4F',
        'antique-brass': '#9C7A3E',
        'parchment': '#ECDFC7',
        'hairline': '#D9C6AE',
        'muted-taupe': '#8A7A6E',
        'turmeric': '#C99A2E',
        'brick': '#8C3B2E',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(58, 36, 32, 0.08)',
        'warm-md': '0 8px 24px rgba(58, 36, 32, 0.12)',
        'warm-lg': '0 16px 40px rgba(58, 36, 32, 0.16)',
        'marigold-glow': '0 0 30px rgba(224, 147, 46, 0.35)',
        'locket-press': 'inset 0 2px 4px rgba(58, 36, 32, 0.25)',
      },
      transitionTimingFunction: {
        'settle': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'drift': 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
