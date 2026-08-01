/**
 * Calendar Utilities for The Marigold Hour
 * Generates Google Calendar URLs and .ics (iCalendar) download files for native calendar integration.
 */

export interface CalendarEventConfig {
  title: string;
  description: string;
  location?: string;
  startDate: Date;
  endDate: Date;
}

const formatUtcDate = (date: Date): string => {
  return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
};

/**
 * Generates a web link to open Google Calendar with pre-populated event details.
 */
export function generateGoogleCalendarUrl(event: CalendarEventConfig): string {
  const start = formatUtcDate(event.startDate);
  const end = formatUtcDate(event.endDate);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    details: event.description,
    location: event.location || '',
    dates: `${start}/${end}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates and downloads a standard .ics file for Apple Calendar, Outlook, and mobile devices.
 */
export function downloadIcsFile(event: CalendarEventConfig): void {
  const start = formatUtcDate(event.startDate);
  const end = formatUtcDate(event.endDate);

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//The Marigold Hour//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location || ''}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'marigold-hour-date.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
