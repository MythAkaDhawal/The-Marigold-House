'use client';

import React from 'react';
import { ProgressRibbon } from '@/components/ui/ProgressRibbon';
import { SoundscapeToggle } from '@/components/ui/SoundscapeToggle';
import { PetalCursorTrail } from '@/components/ui/PetalCursorTrail';
import { Chapter0Envelope } from '@/components/chapters/Chapter0Envelope';
import { Chapter1Beginning } from '@/components/chapters/Chapter1Beginning';
import { Chapter2SmallMoments } from '@/components/chapters/Chapter2SmallMoments';
import { Chapter3Letter } from '@/components/chapters/Chapter3Letter';
import { Chapter4Promise } from '@/components/chapters/Chapter4Promise';
import { Chapter5PathAhead } from '@/components/chapters/Chapter5PathAhead';
import { EpilogueGarden } from '@/components/chapters/EpilogueGarden';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dawn-ivory text-ink-maroon">
      {/* Persistent UI Controls & Ambient Cursor Atmosphere */}
      <ProgressRibbon />
      <SoundscapeToggle />
      <PetalCursorTrail />

      {/* Narrative Single-Thread Chapter Flow */}
      <Chapter0Envelope />
      <Chapter1Beginning />
      <Chapter2SmallMoments />
      <Chapter3Letter />
      <Chapter4Promise />
      <Chapter5PathAhead />
      <EpilogueGarden />
    </div>
  );
}
