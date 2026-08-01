'use client';

import React, { useState } from 'react';
import { STORY_CONTENT } from '@/content/storyData';
import { ChapterFrame } from '@/components/ui/ChapterFrame';
import { FloatingLetterCard } from '@/components/ui/FloatingLetterCard';
import { BotanicalDivider } from '@/components/ui/BotanicalDivider';
import { MotionEntrance } from '@/components/primitives/MotionEntrance';
import { PaperAirplaneIcon } from '@/components/graphics/CustomIcons';

export const Chapter5PathAhead: React.FC = () => {
  const content = STORY_CONTENT.pathAhead;
  const [savedDate, setSavedDate] = useState(false);
  const [shared, setShared] = useState(false);

  const handleSaveDate = () => {
    setSavedDate(true);
    setTimeout(() => setSavedDate(false), 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'The Marigold Hour',
        text: 'A quiet place built for just one person.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 3000);
    }
  };

  return (
    <ChapterFrame id="chapter-5">
      <div className="py-12 max-w-3xl mx-auto text-center space-y-10">
        {/* Header */}
        <MotionEntrance>
          <div className="space-y-2">
            <span className="font-sans text-xs uppercase tracking-widest text-antique-brass">
              Chapter Five
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-ink-maroon">
              {content.headline}
            </h2>
            <p className="font-sans text-sm text-muted-taupe">
              {content.subheadline}
            </p>
          </div>
        </MotionEntrance>

        {/* Narrative Card */}
        <MotionEntrance delay={0.2}>
          <FloatingLetterCard rotationDeg={1.2}>
            <div className="space-y-6 font-sans text-lg text-ink-maroon leading-relaxed">
              <p>{content.bodyText}</p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleSaveDate}
                  className="rounded-full bg-marigold px-6 py-3 font-sans text-sm font-medium text-white shadow-warm-md hover:bg-marigold/90 transition-all hover:scale-105 focus:ring-2 focus:ring-antique-brass"
                >
                  {savedDate ? '✓ Date Saved in Calendar' : content.saveDateLabel}
                </button>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 rounded-full border border-antique-brass/40 px-6 py-3 font-sans text-sm font-medium text-ink-maroon hover:border-marigold hover:bg-dawn-ivory transition-all hover:scale-105 focus:ring-2 focus:ring-antique-brass"
                >
                  <PaperAirplaneIcon size={16} />
                  <span>{shared ? 'Link Copied ✓' : content.shareLabel}</span>
                </button>
              </div>
            </div>
          </FloatingLetterCard>
        </MotionEntrance>

        <BotanicalDivider />
      </div>
    </ChapterFrame>
  );
};
