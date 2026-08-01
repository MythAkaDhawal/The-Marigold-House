'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChapter } from '@/lib/context/ChapterContext';
import { CHAPTERS_META } from '@/content/storyData';
import { RibbonMarkerIcon } from '@/components/graphics/CustomIcons';

export const ProgressRibbon: React.FC = () => {
  const { activeChapter, chapterProgress, unlockedChapters, scrollToChapter, reducedMotion } = useChapter();
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const chaptersList = Object.values(CHAPTERS_META);

  return (
    <>
      {/* Desktop / Tablet Vertical Progress Ribbon (Fixed Left Side) */}
      <aside
        className="fixed left-6 top-0 bottom-0 z-40 hidden md:flex flex-col items-center pointer-events-none"
        aria-label="Story Progress and Navigation"
      >
        {/* Ribbon Top Anchor */}
        <div className="pt-6 pointer-events-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-antique-brass/40 bg-dawn-ivory/80 text-ink-maroon shadow-warm-sm backdrop-blur-sm transition-all duration-300 hover:border-marigold hover:bg-dawn-ivory hover:shadow-warm-md focus:ring-2 focus:ring-antique-brass"
            aria-expanded={isOpen}
            aria-label="Toggle Table of Contents"
            title="Table of Contents"
          >
            <RibbonMarkerIcon size={18} className="transition-transform group-hover:scale-110" />
            <span className="sr-only">Toggle Table of Contents</span>
          </button>
        </div>

        {/* Unspooling Vertical Ribbon Line */}
        <div className="relative my-4 flex-1 w-[2px] bg-hairline/40 overflow-hidden rounded-full">
          <motion.div
            className="w-full bg-marigold"
            style={{ height: `${chapterProgress}%` }}
            transition={{ duration: reducedMotion ? 0 : 0.2, ease: 'easeOut' }}
          />
        </div>

        {/* Wax-seal Chapter Markers along the edge */}
        <div className="absolute inset-y-24 left-1/2 -translate-x-1/2 flex flex-col justify-between pointer-events-auto">
          {chaptersList.map((ch) => {
            const isUnlocked = unlockedChapters.has(ch.id);
            const isActive = activeChapter === ch.id;

            return (
              <button
                key={ch.id}
                onClick={() => scrollToChapter(ch.id)}
                className={`relative group flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? 'scale-125 bg-marigold text-white ring-2 ring-antique-brass'
                    : isUnlocked
                    ? 'bg-antique-brass/80 hover:bg-marigold hover:scale-110'
                    : 'bg-hairline/50'
                }`}
                aria-label={`Jump to Chapter ${ch.number}: ${ch.title}`}
                title={`Chapter ${ch.number}: ${ch.title}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-dawn-ivory" />
                {/* Tooltip on hover */}
                <span className="absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap rounded border border-hairline bg-dawn-ivory px-2 py-1 font-serif text-xs text-ink-maroon shadow-warm-sm opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                  Ch. {ch.number} — {ch.title}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile Top Progress Bar (<744px) */}
      <div className="fixed top-0 left-0 right-0 z-40 md:hidden bg-dawn-ivory/90 backdrop-blur-md border-b border-hairline/50 px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 font-serif text-xs text-ink-maroon focus:outline-none"
          aria-expanded={isOpen}
        >
          <RibbonMarkerIcon size={16} className="text-marigold" />
          <span>Ch. {CHAPTERS_META[activeChapter]?.number || 0} — {CHAPTERS_META[activeChapter]?.title}</span>
        </button>

        <div className="h-1.5 w-24 bg-hairline/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-marigold transition-all duration-300"
            style={{ width: `${chapterProgress}%` }}
          />
        </div>
      </div>

      {/* Slide-out Table of Contents Drawer (Manuscript Page Markers) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-ink-maroon pointer-events-auto"
            />

            {/* Manuscript TOC Modal */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-4 top-16 md:left-20 md:top-12 z-50 max-w-sm w-72 rounded-lg border border-hairline bg-parchment p-6 shadow-warm-lg pointer-events-auto deckled-card"
            >
              <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                <h3 className="font-serif text-lg font-normal text-ink-maroon">
                  Table of Contents
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded p-1 text-muted-taupe hover:text-ink-maroon focus:ring-1 focus:ring-antique-brass"
                  aria-label="Close Table of Contents"
                >
                  ✕
                </button>
              </div>

              <ul className="mt-4 space-y-3 font-serif text-sm">
                {chaptersList.map((ch) => {
                  const isActive = activeChapter === ch.id;

                  return (
                    <li key={ch.id}>
                      <button
                        onClick={() => {
                          scrollToChapter(ch.id);
                          setIsOpen(false);
                        }}
                        className={`group flex w-full items-center justify-between rounded px-3 py-2 text-left transition-colors ${
                          isActive
                            ? 'bg-dawn-ivory text-marigold font-medium shadow-warm-sm'
                            : 'hover:bg-dawn-ivory/60 text-ink-maroon'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-sans text-xs text-antique-brass">
                            0{ch.number}
                          </span>
                          <span>{ch.title}</span>
                        </span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-marigold" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
