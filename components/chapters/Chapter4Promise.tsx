'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_CONTENT } from '@/content/storyData';
import { ChapterFrame } from '@/components/ui/ChapterFrame';
import { LocketButton } from '@/components/ui/LocketButton';
import { MotionEntrance } from '@/components/primitives/MotionEntrance';

export const Chapter4Promise: React.FC = () => {
  const [hasResponded, setHasResponded] = useState(false);
  const content = STORY_CONTENT.promise;

  return (
    <ChapterFrame id="chapter-4">
      <div className="py-16 max-w-2xl mx-auto text-center space-y-12">
        {/* Nocturnal Opener */}
        <MotionEntrance>
          <div className="space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-antique-brass">
              Chapter Four
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-dawn-ivory">
              {content.headline}
            </h2>
            <p className="font-sans text-base text-muted-taupe">
              {content.subtext}
            </p>
          </div>
        </MotionEntrance>

        {/* Sole Element: Glowing Locket Button */}
        <MotionEntrance delay={0.3}>
          <div className="py-6 flex justify-center">
            <LocketButton
              label={content.ctaLabel}
              onSuccess={() => setHasResponded(true)}
            />
          </div>
        </MotionEntrance>

        {/* Post-Response Warm Message */}
        <AnimatePresence>
          {hasResponded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="deckled-card p-8 bg-parchment text-ink-maroon max-w-md mx-auto space-y-2 border border-marigold/40 shadow-marigold-glow"
            >
              <h3 className="font-serif text-2xl text-ink-maroon">
                {content.successHeadline}
              </h3>
              <p className="font-sans text-sm text-ink-maroon/90">
                {content.successMessage}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ChapterFrame>
  );
};
