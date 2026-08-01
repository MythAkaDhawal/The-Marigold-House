'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_CONTENT } from '@/content/storyData';
import { MarigoldBloom } from '@/components/graphics/MarigoldBloom';
import { useChapter } from '@/lib/context/ChapterContext';

export const RevealEnvelope: React.FC = () => {
  const [isUnfolded, setIsUnfolded] = useState(false);
  const { reducedMotion } = useChapter();
  const letter = STORY_CONTENT.letter;

  return (
    <div className="relative w-full max-w-2xl mx-auto my-6">
      <AnimatePresence mode="wait">
        {!isUnfolded ? (
          /* Sealed Reveal Envelope State */
          <motion.div
            key="sealed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setIsUnfolded(true)}
            className="deckled-card relative p-12 text-center cursor-pointer shadow-warm-lg bg-parchment border border-hairline hover:shadow-marigold-glow transition-all"
          >
            <div className="space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-marigold/20 text-marigold border border-marigold/40">
                <MarigoldBloom size={36} stage="half" />
              </div>

              <div className="space-y-2">
                <span className="font-sans text-xs uppercase tracking-widest text-antique-brass">
                  {letter.dateStamp}
                </span>
                <h3 className="font-serif text-3xl font-light text-ink-maroon">
                  {letter.headline}
                </h3>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsUnfolded(true);
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-3 font-sans text-sm font-medium text-white shadow-warm-md hover:bg-marigold/90 focus:ring-2 focus:ring-antique-brass transition-transform hover:scale-105"
              >
                <span>{letter.promptToOpen}</span>
                <span className="text-xs">→</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Unfolded Uninterrupted Letter State */
          <motion.div
            key="unfolded"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="deckled-card relative p-8 md:p-14 bg-dawn-ivory text-ink-maroon shadow-warm-lg border border-hairline/80 space-y-8"
          >
            {/* Letter Date & Salutation */}
            <div className="space-y-2 border-b border-hairline/60 pb-6">
              <div className="font-sans text-xs uppercase tracking-widest text-antique-brass">
                {letter.dateStamp}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink-maroon font-normal">
                {letter.salutation}
              </h2>
            </div>

            {/* Letter Body Paragraphs */}
            <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed text-ink-maroon/90">
              {letter.bodyParagraphs.map((paragraph, idx) => (
                <p key={idx} className="whitespace-pre-line">{paragraph}</p>
              ))}
            </div>

            {/* Closing & Handwritten Signature */}
            <div className="pt-8 border-t border-hairline/60 space-y-2">
              <div className="font-sans text-base text-muted-taupe">
                {letter.closing}
              </div>
              <div className="font-script text-4xl text-marigold pt-1">
                {letter.signature}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
