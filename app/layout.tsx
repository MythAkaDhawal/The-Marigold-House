import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans, Alex_Brush } from 'next/font/google';
import './globals.css';
import { ChapterProvider } from '@/lib/context/ChapterContext';
import { AudioProvider } from '@/lib/context/AudioContext';
import { PaperGrainOverlay } from '@/components/graphics/PaperGrainOverlay';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Marigold Hour — A Story Built For You',
  description: 'An unhurried, single-thread storytelling experience built for one person, for one occasion, at their own pace.',
  authors: [{ name: 'The Marigold Hour' }],
  keywords: ['Marigold Hour', 'Storytelling', 'Personal Love Letter', 'Digital Keepsake'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${alexBrush.variable}`}
    >
      <body className="relative bg-dawn-ivory text-ink-maroon selection:bg-marigold selection:text-white">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AudioProvider>
          <ChapterProvider>
            <PaperGrainOverlay />
            <main id="main-content" className="relative min-h-screen">
              {children}
            </main>
          </ChapterProvider>
        </AudioProvider>
      </body>
    </html>
  );
}
