'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio, VolumeLevel } from '@/lib/context/AudioContext';
import { BudIcon } from '@/components/graphics/CustomIcons';

export const SoundscapeToggle: React.FC = () => {
  const { isPlaying, volumeLevel, togglePlay, setVolumeLevel } = useAudio();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const handleVolumeChange = (level: VolumeLevel) => {
    setVolumeLevel(level);
    setShowVolumeSlider(false);
  };

  return (
    <>
      {/* Soundscape Control Container — Fixed Bottom Right (Desktop/Tablet) / Bottom Safe Area (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* Expanded 3-Notch Volume Selector Popup */}
        <AnimatePresence>
          {showVolumeSlider && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1.5 rounded-full border border-hairline bg-dawn-ivory/95 px-3 py-1.5 shadow-warm-md backdrop-blur-sm"
            >
              {(['soft', 'medium', 'full'] as VolumeLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => handleVolumeChange(level)}
                  className={`rounded-full px-2 py-0.5 font-sans text-xs capitalize transition-all ${
                    volumeLevel === level
                      ? 'bg-marigold text-white font-medium shadow-warm-sm'
                      : 'text-muted-taupe hover:text-ink-maroon'
                  }`}
                  aria-label={`Set volume to ${level}`}
                >
                  {level}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Locket-shaped Main Audio Toggle Button */}
        <div className="relative group">
          <button
            onClick={togglePlay}
            onContextMenu={(e) => {
              e.preventDefault();
              setShowVolumeSlider(!showVolumeSlider);
            }}
            className={`group relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 shadow-warm-md backdrop-blur-sm focus:ring-2 focus:ring-antique-brass ${
              isPlaying
                ? 'border-marigold bg-dawn-ivory text-marigold shadow-marigold-glow'
                : 'border-antique-brass/40 bg-dawn-ivory/80 text-ink-maroon hover:border-marigold'
            }`}
            aria-label={isPlaying ? 'Pause Soundscape' : 'Play Soundscape'}
            title={isPlaying ? 'Pause Soundscape (Right-click for volume)' : 'Play Soundscape'}
          >
            <BudIcon size={20} isBlooming={isPlaying} className="transition-transform duration-300 group-hover:scale-110" />

            {/* Satellite Volume Gear Dot */}
            <span
              onClick={(e) => {
                e.stopPropagation();
                setShowVolumeSlider(!showVolumeSlider);
              }}
              className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-hairline bg-parchment text-[9px] text-ink-maroon shadow-warm-sm hover:scale-115 transition-transform"
              title="Adjust Volume"
            >
              ⚙
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
