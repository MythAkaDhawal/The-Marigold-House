'use client';

import React from 'react';
import { ChapterFrame } from '@/components/ui/ChapterFrame';
import { RevealEnvelope } from '@/components/ui/RevealEnvelope';
import { MotionEntrance } from '@/components/primitives/MotionEntrance';

export const Chapter3Letter: React.FC = () => {
  return (
    <ChapterFrame id="chapter-3">
      <div className="py-12 max-w-3xl mx-auto space-y-8 text-center">
        {/* Chapter Opener */}
        <MotionEntrance>
          <div className="space-y-2">
            <span className="font-sans text-xs uppercase tracking-widest text-dawn-ivory/80">
              Chapter Three
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-dawn-ivory">
              The Letter
            </h2>
            <p className="font-sans text-sm text-dawn-ivory/70">
              For quiet, uninterrupted reading
            </p>
          </div>
        </MotionEntrance>

        {/* Unfolding Reveal Envelope */}
        <MotionEntrance delay={0.3}>
          <RevealEnvelope />
        </MotionEntrance>
      </div>
    </ChapterFrame>
  );
};
