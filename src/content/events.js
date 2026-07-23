import { sourced, proposed } from './_helpers.js';

/** Events — full feed page. The live list comes from <EventsFeed limit={null} />;
 *  the recurring rhythm below is sourced from the current /events page. */
export const events = {
  hero: {
    eyebrow: sourced('Upcoming events', 'faithchurchleslie.com/events'),
    headline: proposed('events-hero-h', 'Something’s always going on.', 'Hero headline.'),
    subhead: proposed('events-hero-sub', 'Gatherings, prayer, classes, and outreach. Here’s what’s next at Faith Church.', 'Hero subhead.'),
    photo: '/images/from-current-site/image-asset-6929259.jpeg',
  },

  // Sourced recurring rhythm (from /events) — shown as our weekly cadence.
  rhythm: {
    label: sourced('Our weekly rhythm', 'faithchurchleslie.com/events'),
    items: [
      sourced('Sunday Morning Gathering — every Sunday at 10:00 AM', 'faithchurchleslie.com/events'),
      sourced('Prayer Thursday — every Thursday at 12:00 PM', 'faithchurchleslie.com/events'),
      sourced('50 Days of Prayer — every Thursday at 7:00 PM', 'faithchurchleslie.com/events'),
      sourced('Communion — the first Sunday of every month at 10:00 AM', 'faithchurchleslie.com/events'),
      sourced('Encounter Night — the first Sunday of every month at 6:00 PM', 'faithchurchleslie.com/events'),
    ],
  },
};
