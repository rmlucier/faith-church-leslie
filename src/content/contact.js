import { sourced, approved } from './_helpers.js';

/** Contact — service times, office hours, address, phone, email, map, and the
 *  contact form. Facts sourced; the UX microcopy is approved (routine, blessed
 *  at Roy's sign-off in the Sept 2026 pass). */
export const contact = {
  hero: {
    eyebrow: sourced('Contact', 'faithchurchleslie.com/contact'),
    headline: approved('Question? Need prayer? Just want to say hi?'),
    subhead: approved('We’d love to hear from you. Reach the office any time, or come find us on North Main.'),
  },

  serviceTimes: {
    label: sourced('Service times', 'faithchurchleslie.com/contact'),
    items: [
      sourced('Sunday Morning Gathering — Sundays at 10:00 AM', 'faithchurchleslie.com/contact'),
      sourced('Coffee, refreshments & fellowship — 9:45 AM', 'faithchurchleslie.com/contact'),
    ],
  },

  officeHours: {
    label: sourced('Office hours', 'faithchurchleslie.com/contact'),
    items: [
      sourced('Tues–Thurs: 9:00 AM – 3:00 PM (by appointment only)', 'faithchurchleslie.com/contact'),
      sourced('Sunday: 9:30 AM – 12:30 PM', 'faithchurchleslie.com/contact'),
    ],
  },

  reach: {
    label: approved('Get in touch'),
    emailNote: approved('The fastest way to reach us is email — we read every message.'),
  },

  form: {
    label: approved('Send a note'),
    heading: approved('Tell us how we can help.'),
    intro: approved('Prayer request, a question, or just saying hi — we’ll get back to you.'),
    success: approved('Thanks — your note is on its way. We’ll be in touch soon.'),
    error: approved('Something went wrong sending that. Please email us directly and we’ll make it right.'),
  },
};
