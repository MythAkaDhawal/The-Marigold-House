'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_CONTENT, KeepsakeItem } from '@/content/storyData';
import { ChapterFrame } from '@/components/ui/ChapterFrame';
import { MotionEntrance } from '@/components/primitives/MotionEntrance';
import { MarigoldBloom } from '@/components/graphics/MarigoldBloom';

export const Chapter2SmallMoments: React.FC = () => {
  const content = STORY_CONTENT.smallMoments;
  const [selectedKeepsake, setSelectedKeepsake] = useState<KeepsakeItem | null>(null);

  return (
    <ChapterFrame id="chapter-2">
      <div className="py-12 max-w-4xl mx-auto space-y-10 text-center">
        {/* Header */}
        <MotionEntrance>
          <div className="space-y-2">
            <span className="font-sans text-xs uppercase tracking-widest text-antique-brass">
              Chapter Two
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-ink-maroon">
              {content.headline}
            </h2>
            <p className="font-sans text-sm text-muted-taupe">
              {content.subheadline}
            </p>
          </div>
        </MotionEntrance>

        {/* Scattered Grid of 5 Keepsake Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
          {content.keepsakes.map((item, idx) => (
            <MotionEntrance key={item.id} delay={0.1 * idx}>
              <motion.div
                initial={{ rotate: item.rotationDeg }}
                whileHover={{ rotate: 0, scale: 1.04, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedKeepsake(item)}
                className="deckled-card p-6 cursor-pointer text-left flex flex-col justify-between h-48 shadow-warm-md hover:shadow-warm-lg transition-all border border-hairline/70"
              >
                <div className="flex items-center justify-between border-b border-hairline/40 pb-2">
                  <span className="font-sans text-xs font-medium text-antique-brass uppercase tracking-wider">
                    {item.date}
                  </span>
                  <MarigoldBloom size={20} stage="bud" />
                </div>

                <div className="my-auto space-y-1">
                  <h4 className="font-serif text-lg text-ink-maroon font-medium">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-muted-taupe">
                    {item.summary}
                  </p>
                </div>

                <div className="text-right font-sans text-xs text-marigold font-medium">
                  Read Memory →
                </div>
              </motion.div>
            </MotionEntrance>
          ))}
        </div>

        {/* Memory Detail Modal Popup */}
        <AnimatePresence>
          {selectedKeepsake && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedKeepsake(null)}
                className="fixed inset-0 z-50 bg-ink-maroon"
              />

              {/* Memory Card Window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-x-4 top-1/4 md:top-1/3 z-50 max-w-lg mx-auto deckled-card p-8 shadow-warm-lg border border-hairline bg-parchment text-left space-y-4"
              >
                <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                  <div>
                    <span className="font-sans text-xs text-antique-brass uppercase">
                      {selectedKeepsake.date}
                    </span>
                    <h3 className="font-serif text-2xl text-ink-maroon font-normal">
                      {selectedKeepsake.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedKeepsake(null)}
                    className="text-muted-taupe hover:text-ink-maroon p-1"
                    aria-label="Close memory detail"
                  >
                    ✕
                  </button>
                </div>

                <p className="font-sans text-base leading-relaxed text-ink-maroon/90">
                  {selectedKeepsake.detail}
                </p>

                <div className="pt-4 text-right">
                  <button
                    onClick={() => setSelectedKeepsake(null)}
                    className="rounded-full border border-antique-brass/40 px-5 py-2 font-sans text-xs text-ink-maroon hover:border-marigold hover:bg-dawn-ivory transition-colors"
                  >
                    Keep Close
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </ChapterFrame>
  );
};
