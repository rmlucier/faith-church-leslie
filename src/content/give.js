import { sourced, proposed } from './_helpers.js';

/** Give — Kingdom Builders detail, giving methods (Church Center), year-end
 *  statements, transparency line. Partner list sourced; framing proposed. */
export const give = {
  hero: {
    eyebrow: sourced('Kingdom Builders', 'faithchurchleslie.com'),
    headline: proposed('give-hero-h', 'Some seed to keep. Some to sow.', 'Hero headline — Feed & Seed offering line.'),
    subhead: proposed('give-hero-sub', 'He gives seed to the sower. Giving at Faith Church plants into Leslie, into people in hard places, and into the world.', 'Hero subhead — 2 Cor. 9:10 paraphrase.'),
    // Clean evergreen backdrop (seed/sow theme) — replaced the Kingdom Builders
    // text-graphic, whose baked-in wording competed with the hero headline.
    // The graphic now lives in the "Where it goes" section below.
    photo: '/images/from-current-site/black-forest-featuring-coniferous-evergreen-trees-2021-09-02-05-59-47-utc-1087055.jpg',
  },

  supports: {
    label: sourced('Where it goes', 'faithchurchleslie.com'),
    heading: proposed('give-supports-h', 'Local, global, and future.', 'Heading — sourced Kingdom Builders language.'),
    body: sourced('When partnering with Kingdom Builders you support local, global, and future initiatives — ministries like Jackson Interfaith Shelter, Youth Haven Ranch and the Leslie Outreach, plus our national and global workers and missionaries.', 'faithchurchleslie.com'),
    partners: [
      sourced('Jackson Interfaith Shelter', 'faithchurchleslie.com'),
      sourced('Youth Haven Ranch', 'faithchurchleslie.com'),
      sourced('Leslie Outreach', 'faithchurchleslie.com'),
      sourced('National & global missionaries', 'faithchurchleslie.com'),
    ],
  },

  how: {
    label: proposed('give-how-label', 'How to give', 'Section label.'),
    methods: [
      proposed('give-how-online', 'Online — securely through Church Center, our Planning Center giving portal. One-time or recurring.', 'Method — online via Church Center.'),
      proposed('give-how-sunday', 'On Sunday — in the offering during any gathering.', 'Method — in person.'),
      proposed('give-how-mail', 'By mail — Faith Church, 4020 N. Main St., Leslie, MI 49251.', 'Method — mail; address sourced.'),
    ],
    cta: { label: 'Give Now', href: 'giving' },
  },

  transparency: proposed(
    'give-transparency',
    'Year-end giving statements are available on request. Faith Church is an Assemblies of God church committed to handling every gift with integrity and care.',
    'Transparency line — confirm year-end statement process with the office.'
  ),
};
