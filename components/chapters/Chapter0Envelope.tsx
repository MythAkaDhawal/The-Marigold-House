'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { STORY_CONTENT } from '@/content/storyData';
import { MarigoldBloom } from '@/components/graphics/MarigoldBloom';
import { ChapterFrame } from '@/components/ui/ChapterFrame';
import { useChapter } from '@/lib/context/ChapterContext';
import { useAudio } from '@/lib/context/AudioContext';

export const Chapter0Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToChapter, reducedMotion } = useChapter();
  const { playInteractionSound } = useAudio();

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    playInteractionSound('rustle');

    setTimeout(() => {
      scrollToChapter('chapter-1');
    }, 1200);
  };

  return (
    <ChapterFrame id="chapter-0">
      <div className="flex flex-col items-center justify-center text-center py-12">
        {/* Logotype */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-script text-2xl md:text-3xl text-antique-brass tracking-wider mb-8"
        >
          {STORY_CONTENT.envelope.logotype}
        </motion.span>

        {/* Envelope Graphic Container */}
        <motion.div
          animate={reducedMotion ? {} : { y: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
          className="relative max-w-lg w-full cursor-pointer my-8"
          onClick={handleOpen}
        >
          {/* Main Envelope Body Card */}
          <div className="deckled-card relative aspect-[1.5/1] w-full p-8 flex flex-col justify-between items-center shadow-warm-lg transition-transform duration-500 hover:scale-[1.02]">
            {/* Top Triangular Flap */}
            <motion.div
              animate={isOpen ? { rotateX: 180, y: -30 } : { rotateX: 0, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top center' }}
              className="absolute inset-x-0 top-0 h-1/2 bg-parchment border-b border-hairline/60 rounded-t-md shadow-warm-sm flex justify-center items-end pb-2 z-20"
            >
              {/* Wax Seal Stamp Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen();
                }}
                className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-marigold text-ink-maroon shadow-warm-md transition-all duration-300 ${
                  isOpen ? 'scale-90 opacity-80' : 'hover:scale-110 focus:ring-2 focus:ring-antique-brass'
                }`}
                aria-label="Open the sealed letter"
              >
                <MarigoldBloom size={32} stage={isOpen ? 'full' : 'bud'} />
              </button>
            </motion.div>

            {/* Recipient Name Hand-lettered Front */}
            <div className="my-auto z-10 space-y-2">
              <span className="font-sans text-xs uppercase tracking-widest text-muted-taupe">
                {STORY_CONTENT.envelope.subtext}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-normal text-ink-maroon">
                {STORY_CONTENT.envelope.recipient}
              </h1>
            </div>

            {/* Micro Prompt */}
            <div className="z-10 text-xs font-sans text-antique-brass tracking-wider">
              {isOpen ? 'Opening letter...' : STORY_CONTENT.envelope.sealPrompt}
            </div>
          </div>
        </motion.div>
      </div>
    </ChapterFrame>
  );
};
