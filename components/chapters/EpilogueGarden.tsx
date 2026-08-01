'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_CONTENT } from '@/content/storyData';
import { ChapterFrame } from '@/components/ui/ChapterFrame';
import { MotionEntrance } from '@/components/primitives/MotionEntrance';
import { LoopingRibbonIcon } from '@/components/graphics/CustomIcons';
import { useChapter } from '@/lib/context/ChapterContext';

export const EpilogueGarden: React.FC = () => {
  const { scrollToChapter } = useChapter();
  const content = STORY_CONTENT.epilogue;
  const [starClicks, setStarClicks] = useState(0);
  const [showConstellation, setShowConstellation] = useState(false);
  const [secretFootnote, setSecretFootnote] = useState(false);

  // Easter Egg 2: Typing 'marigold' anywhere triggers secret footnote
  useEffect(() => {
    let typedBuffer = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      typedBuffer = (typedBuffer + e.key.toLowerCase()).slice(-10);
      if (typedBuffer.includes('marigold') || typedBuffer.includes('always')) {
        setSecretFootnote(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleStarClick = () => {
    const next = starClicks + 1;
    setStarClicks(next);
    if (next >= 3) {
      setShowConstellation(true);
      setTimeout(() => setShowConstellation(false), 5000);
      setStarClicks(0);
    }
  };

  return (
    <ChapterFrame id="epilogue">
      <div className="py-16 max-w-3xl mx-auto text-center space-y-10 relative">
        {/* Star Flecks Night Sky Trigger */}
        <div className="flex justify-center items-center gap-6 my-4 cursor-pointer" onClick={handleStarClick}>
          {[1, 2, 3, 4, 5].map((s) => (
            <motion.span
              key={s}
              animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.2, 0.9] }}
              transition={{ duration: 3 + s, repeat: Infinity, ease: 'easeInOut' }}
              className="text-antique-brass text-lg select-none hover:text-marigold transition-colors"
            >
              ★
            </motion.span>
          ))}
        </div>

        {/* Constellation Easter Egg Popup */}
        <AnimatePresence>
          {showConstellation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="deckled-card p-6 bg-ink-maroon text-dawn-ivory border border-antique-brass max-w-sm mx-auto shadow-marigold-glow"
            >
              <span className="font-sans text-xs text-antique-brass uppercase tracking-widest">
                Constellation Discovered
              </span>
              <p className="font-serif text-lg mt-2 text-marigold">
                ✦ M & A ✦
              </p>
              <p className="font-sans text-xs text-muted-taupe mt-1">
                Written into the night sky forever.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Secret Footnote Easter Egg */}
        <AnimatePresence>
          {secretFootnote && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded border border-hairline/40 bg-parchment/10 p-4 text-xs font-serif italic text-antique-brass max-w-md mx-auto"
            >
              "Some words do not fade even when the page is closed."
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <MotionEntrance>
          <div className="space-y-2">
            <span className="font-sans text-xs uppercase tracking-widest text-antique-brass">
              Epilogue
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-dawn-ivory">
              {content.headline}
            </h2>
            <p className="font-sans text-sm text-dawn-ivory/70 max-w-lg mx-auto">
              {content.subtext}
            </p>
          </div>
        </MotionEntrance>

        {/* Replay & Navigation Controls */}
        <MotionEntrance delay={0.3}>
          <div className="pt-6 flex flex-col items-center justify-center gap-4">
            <button
              onClick={() => scrollToChapter('chapter-0')}
              className="inline-flex items-center gap-3 rounded-full border border-antique-brass/50 bg-dawn-ivory/10 px-6 py-3 font-serif text-sm text-dawn-ivory shadow-warm-md hover:bg-marigold hover:text-ink-maroon hover:border-marigold transition-all hover:scale-105 focus:ring-2 focus:ring-antique-brass"
            >
              <LoopingRibbonIcon size={18} />
              <span>{content.replayLabel}</span>
            </button>

            <span className="font-sans text-xs text-muted-taupe">
              {content.easterEggHint}
            </span>
          </div>
        </MotionEntrance>

        {/* Quiet Footer */}
        <div className="pt-16 border-t border-hairline/20 text-xs font-sans text-muted-taupe">
          {content.credits}
        </div>
      </div>
    </ChapterFrame>
  );
};
