'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CHAPTERS_META, ChapterMeta } from '@/content/storyData';

interface ChapterContextType {
  activeChapter: string;
  activeMeta: ChapterMeta;
  chapterProgress: number;
  unlockedChapters: Set<string>;
  setActiveChapter: (id: string) => void;
  scrollToChapter: (id: string) => void;
  reducedMotion: boolean;
}

const ChapterContext = createContext<ChapterContextType | undefined>(undefined);

export const ChapterProvider = ({ children }: { children: ReactNode }) => {
  const [activeChapter, setActiveChapterState] = useState<string>('chapter-0');
  const [chapterProgress, setChapterProgress] = useState<number>(0);
  const [unlockedChapters, setUnlockedChapters] = useState<Set<string>>(
    new Set(['chapter-0'])
  );
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Check system reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Restore stored session position
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = sessionStorage.getItem('marigold_active_chapter');
      if (stored && CHAPTERS_META[stored]) {
        setActiveChapterState(stored);
        setUnlockedChapters((prev) => new Set([...Array.from(prev), stored]));
      }
    } catch {
      // Session storage ignored if unavailable
    }
  }, []);

  const setActiveChapter = (id: string) => {
    if (!CHAPTERS_META[id]) return;
    setActiveChapterState(id);
    setUnlockedChapters((prev) => new Set([...Array.from(prev), id]));
    try {
      sessionStorage.setItem('marigold_active_chapter', id);
    } catch {
      // Ignore
    }
  };

  const scrollToChapter = (id: string) => {
    setActiveChapter(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  // Listen to window scroll to update progress ribbon and current active chapter
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
      setChapterProgress(progress);

      // Determine active chapter based on viewport intersection
      const chapterKeys = Object.keys(CHAPTERS_META);
      for (const key of chapterKeys) {
        const el = document.getElementById(key);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            if (activeChapter !== key) {
              setActiveChapterState(key);
              setUnlockedChapters((prev) => new Set([...Array.from(prev), key]));
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeChapter]);

  const activeMeta = CHAPTERS_META[activeChapter] || CHAPTERS_META['chapter-0'];

  return (
    <ChapterContext.Provider
      value={{
        activeChapter,
        activeMeta,
        chapterProgress,
        unlockedChapters,
        setActiveChapter,
        scrollToChapter,
        reducedMotion,
      }}
    >
      {children}
    </ChapterContext.Provider>
  );
};

export const useChapter = () => {
  const context = useContext(ChapterContext);
  if (!context) {
    throw new Error('useChapter must be used within a ChapterProvider');
  }
  return context;
};
