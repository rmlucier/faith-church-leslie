import { sourced, proposed } from './_helpers.js';

/** Contact — service times, office hours, address, phone, email, map. All facts
 *  sourced. The current site's contact form used reCAPTCHA; for the new build we
 *  link out to the office email (proposed) rather than rebuild a form now. */
export const contact = {
  hero: {
    eyebrow: sourced('Contact', 'faithchurchleslie.com/contact'),
    headline: proposed('contact-hero-h', 'Question? Need prayer? Just want to say hi?', 'Hero headline — sourced form prompt, reworded.'),
    subhead: proposed('contact-hero-sub', 'We’d love to hear from you. Reach the office any time, or come find us on North Main.', 'Hero subhead.'),
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
    label: proposed('contact-reach-label', 'Get in touch', 'Section label.'),
    emailNote: proposed('contact-email-note', 'The fastest way to reach us is email — we read every message.', 'Note above the email button.'),
  },
};
