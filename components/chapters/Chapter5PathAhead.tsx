'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_CONTENT } from '@/content/storyData';
import { ChapterFrame } from '@/components/ui/ChapterFrame';
import { FloatingLetterCard } from '@/components/ui/FloatingLetterCard';
import { BotanicalDivider } from '@/components/ui/BotanicalDivider';
import { MotionEntrance } from '@/components/primitives/MotionEntrance';
import { PaperAirplaneIcon } from '@/components/graphics/CustomIcons';
import { generateGoogleCalendarUrl, downloadIcsFile, CalendarEventConfig } from '@/lib/calendar';

export const Chapter5PathAhead: React.FC = () => {
  const content = STORY_CONTENT.pathAhead;
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDayOffset, setSelectedDayOffset] = useState<number>(0); // 0 = Today, 1 = Tomorrow, 7 = Next Week
  const [shared, setShared] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Calculate target start & end dates (defaulting to Evening at 18:00 / 6:00 PM)
  const getEventConfig = (dayOffset: number): CalendarEventConfig => {
    const start = new Date();
    start.setDate(start.getDate() + dayOffset);
    start.setHours(18, 0, 0, 0); // 6:00 PM evening

    const end = new Date(start);
    end.setHours(20, 0, 0, 0); // 8:00 PM evening

    return {
      title: 'The Marigold Hour — Our Evening Together',
      description: 'A quiet evening planned for just the two of us. Unhurried time, warm tea, and good conversation.',
      location: 'Our Favorite Quiet Spot',
      startDate: start,
      endDate: end,
    };
  };

  const handleGoogleCalendar = () => {
    const event = getEventConfig(selectedDayOffset);
    const url = generateGoogleCalendarUrl(event);
    window.open(url, '_blank', 'noopener,noreferrer');
    triggerSuccess();
  };

  const handleAppleIcsCalendar = () => {
    const event = getEventConfig(selectedDayOffset);
    downloadIcsFile(event);
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setShowCalendarModal(false);
    }, 2000);
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
                  onClick={() => setShowCalendarModal(true)}
                  className="rounded-full bg-marigold px-6 py-3 font-sans text-sm font-medium text-white shadow-warm-md hover:bg-marigold/90 transition-all hover:scale-105 focus:ring-2 focus:ring-antique-brass"
                >
                  📅 {content.saveDateLabel}
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

        {/* Calendar Reservation Modal Popup */}
        <AnimatePresence>
          {showCalendarModal && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowCalendarModal(false)}
                className="fixed inset-0 z-50 bg-ink-maroon"
              />

              {/* Calendar Selection Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-x-4 top-1/4 md:top-1/3 z-50 max-w-md mx-auto deckled-card p-8 shadow-warm-lg border border-hairline bg-parchment text-left space-y-6"
              >
                <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                  <div>
                    <span className="font-sans text-xs text-antique-brass uppercase tracking-wider">
                      Save Our Date
                    </span>
                    <h3 className="font-serif text-2xl text-ink-maroon font-normal">
                      Choose an Evening
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowCalendarModal(false)}
                    className="text-muted-taupe hover:text-ink-maroon p-1"
                    aria-label="Close calendar modal"
                  >
                    ✕
                  </button>
                </div>

                {/* Day Selection Options */}
                <div className="space-y-2">
                  <label className="block font-sans text-xs text-muted-taupe">
                    When would you like to meet?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'This Evening', offset: 0 },
                      { label: 'Tomorrow', offset: 1 },
                      { label: 'This Weekend', offset: 5 },
                    ].map((opt) => (
                      <button
                        key={opt.offset}
                        onClick={() => setSelectedDayOffset(opt.offset)}
                        className={`rounded-lg border px-3 py-2 text-xs font-sans transition-all ${
                          selectedDayOffset === opt.offset
                            ? 'border-marigold bg-marigold text-white shadow-warm-sm font-medium'
                            : 'border-hairline bg-dawn-ivory text-ink-maroon hover:border-antique-brass'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-antique-brass italic pt-1">
                    Scheduled for 6:00 PM – 8:00 PM in the Marigold Hour.
                  </p>
                </div>

                {/* Integration Action Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleGoogleCalendar}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-marigold py-3 font-sans text-sm font-medium text-white shadow-warm-md hover:bg-marigold/90 transition-transform hover:scale-[1.02]"
                  >
                    <span>Open in Google Calendar</span>
                    <span>→</span>
                  </button>

                  <button
                    onClick={handleAppleIcsCalendar}
                    className="w-full flex items-center justify-center gap-2 rounded-full border border-antique-brass/40 bg-dawn-ivory py-3 font-sans text-sm font-medium text-ink-maroon hover:border-marigold transition-transform hover:scale-[1.02]"
                  >
                    <span>Download Apple / iCal Event (.ics)</span>
                  </button>
                </div>

                {savedSuccess && (
                  <div className="text-center font-sans text-xs text-moss font-medium pt-1">
                    ✓ Calendar Event Created! See you then.
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <BotanicalDivider />
      </div>
    </ChapterFrame>
  );
};
