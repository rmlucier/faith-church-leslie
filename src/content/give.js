import { sourced, approved } from './_helpers.js';

/** Give — Kingdom Builders detail, giving methods (Church Center), year-end
 *  statements, transparency line. Partner list sourced; framing proposed. */
export const give = {
  hero: {
    eyebrow: sourced('Kingdom Builders', 'faithchurchleslie.com'),
    headline: approved('Some seed to keep. Some to sow.'),
    subhead: approved('He gives seed to the sower. Giving at Faith Church plants into Leslie, into people in hard places, and into the world.'),
    // Clean evergreen backdrop (seed/sow theme) — replaced the Kingdom Builders
    // text-graphic, whose baked-in wording competed with the hero headline.
    // The graphic now lives in the "Where it goes" section below.
    photo: '/images/from-current-site/black-forest-featuring-coniferous-evergreen-trees-2021-09-02-05-59-47-utc-1087055.jpg',
  },

  supports: {
    label: sourced('Where it goes', 'faithchurchleslie.com'),
    heading: approved('Local, global, and future.'),
    body: sourced('When partnering with Kingdom Builders you support local, global, and future initiatives — ministries like Jackson Interfaith Shelter, Youth Haven Ranch and the Leslie Outreach, plus our national and global workers and missionaries.', 'faithchurchleslie.com'),
    partners: [
      sourced('Jackson Interfaith Shelter', 'faithchurchleslie.com'),
      sourced('Youth Haven Ranch', 'faithchurchleslie.com'),
      sourced('Leslie Outreach', 'faithchurchleslie.com'),
      sourced('National & global missionaries', 'faithchurchleslie.com'),
    ],
  },

  how: {
    label: approved('How to give'),
    methods: [
      approved('Online — securely through Church Center, our Planning Center giving portal. One-time or recurring.'),
      approved('On Sunday — in the offering during any gathering.'),
      approved('By mail — Faith Church, 4020 N. Main St., Leslie, MI 49251.'),
    ],
    cta: { label: 'Give Now', href: 'giving' },
  },

  transparency: approved(
    'Year-end giving statements are available on request. Faith Church is an Assemblies of God church committed to handling every gift with integrity and care.'
  ),
};
