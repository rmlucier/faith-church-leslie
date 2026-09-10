/**
 * Site-wide constants. Everything here is SOURCED from the current site
 * (faithchurchleslie.com, crawled 2026-07-22) or from the Site Info & Link
 * Inventory — no proposed values live in this file, so nav/footer/contact
 * never need footnotes.
 */

export const church = {
  name: 'Faith Church',
  city: 'Leslie',
  state: 'MI',
  tagline: 'Learning to slow down to be with Jesus.', // brand line (Pastor James, Sept 2026 — replaced the AI placeholder)
  mission:
    'A Jesus-centered family experiencing whole-life transformation.', // from /about-faith
  since: 1976, // Faith Assembly of God planted 1976 (/about-faith)
  affiliation: 'Assemblies of God',
  address: {
    street: '4020 N. Main St.',
    line: '4020 North Main Street, Leslie, MI 49251',
    city: 'Leslie',
    state: 'MI',
    zip: '49251',
  },
  serviceTime: 'Sundays at 10:00 AM',
  coffeeTime: 'Coffee & fellowship at 9:45',
  officeHours: [
    'Tues–Thurs: 9:00 AM – 3:00 PM (by appointment)',
    'Sunday: 9:30 AM – 12:30 PM',
  ],
  phone: '(517) 589-9121',
  phoneHref: '+15175899121',
  email: 'Office@FaithChurchLeslie.com',
};

/** Reusable external URLs — do not change (Site Info & Link Inventory). */
export const links = {
  giving: 'https://faithchurchleslie.churchcenter.com/giving',
  engageGroupsReg:
    'https://faithchurchleslie.churchcenter.com/registrations/events/3390062',
  engageClassesReg:
    'https://faithchurchleslie.churchcenter.com/registrations/events/3367911',
  agBeliefs: 'https://ag.org/Beliefs/Statement-of-Fundamental-Truths',
  facebook: 'https://www.facebook.com/FaithChurchLeslie',
  youtube: 'https://www.youtube.com/channel/UCQcteR3ANgrgtEUvNFLry8w',
  mapsEmbed:
    'https://www.google.com/maps?q=4020+North+Main+Street,+Leslie,+MI+49251&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=4020+North+Main+Street,+Leslie,+MI+49251',
};

/** Primary nav (order per brief). Sections resolve on the home long-scroll. */
export const nav = [
  { label: 'About', to: '/about', type: 'page' },
  { label: 'Discipleship', to: '/discipleship', type: 'page' },
  { label: 'Sermons', to: '/sermons', type: 'page' },
  { label: 'Events', to: '/events', type: 'page' },
  { label: 'Give', to: '/give', type: 'page' },
];
