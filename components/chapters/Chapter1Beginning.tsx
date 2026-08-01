'use client';

import React from 'react';
import { STORY_CONTENT } from '@/content/storyData';
import { ChapterFrame } from '@/components/ui/ChapterFrame';
import { FloatingLetterCard } from '@/components/ui/FloatingLetterCard';
import { BotanicalDivider } from '@/components/ui/BotanicalDivider';
import { VineMotif } from '@/components/graphics/VineMotif';
import { MotionEntrance } from '@/components/primitives/MotionEntrance';

export const Chapter1Beginning: React.FC = () => {
  const content = STORY_CONTENT.beginning;

  return (
    <ChapterFrame id="chapter-1">
      <div className="py-12 max-w-3xl mx-auto space-y-12">
        {/* Chapter Header */}
        <MotionEntrance>
          <div className="text-center space-y-2">
            <span className="font-sans text-xs uppercase tracking-widest text-antique-brass">
              Chapter One
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-ink-maroon">
              The Beginning
            </h2>
          </div>
        </MotionEntrance>

        {/* Origin Narrative Card */}
        <MotionEntrance delay={0.2}>
          <FloatingLetterCard rotationDeg={-1.5}>
            <div className="space-y-6 font-sans text-lg leading-relaxed text-ink-maroon">
              <h3 className="font-serif text-2xl md:text-3xl text-ink-maroon font-normal border-b border-hairline/60 pb-4">
                {content.headline}
              </h3>

              {content.paragraphs.map((para, i) => (
                <p key={i} className="text-opacity-90">
                  {para}
                </p>
              ))}

              <blockquote className="font-serif text-xl italic text-antique-brass pt-4 border-t border-hairline/60">
                {content.quote}
              </blockquote>
            </div>
          </FloatingLetterCard>
        </MotionEntrance>

        {/* Botanical Vine Draw-in Divider */}
        <MotionEntrance delay={0.4}>
          <VineMotif className="my-6" />
          <BotanicalDivider />
        </MotionEntrance>
      </div>
    </ChapterFrame>
  );
};
