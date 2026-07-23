import { sourced, proposed } from './_helpers.js';

/**
 * Home — long-scroll page. Copy grounded in the 5 messaging pillars
 * (Brand Guide §7) and the current-site content map. Sourced strings carry a
 * `source`; everything we wrote is `proposed` for James. The brand tagline is
 * a locked brand asset (like the logo/palette) and is not footnoted.
 */
export const home = {
  hero: {
    eyebrow: 'Leslie, Michigan · Sundays 10 AM', // sourced facts
    tagline: 'Built for people who came to do something.', // locked brand tagline
    subhead: proposed(
      'home-hero-sub',
      "Come on in. Coffee's hot at 9:45 and we saved you a seat at 10 — a Jesus-centered family doing the real work of becoming like Jesus.",
      'Hero subhead — Feed & Seed voice ("Come on in," "we saved you a seat") over the sourced mission line.'
    ),
    photo: '/images/from-current-site/IMG_1195_Large-1591768.jpeg',
  },

  // Sunday strip (hunter band)
  sundayStrip: sourced(
    '10:00 AM · Sundays · 4020 N. Main St., Leslie',
    'faithchurchleslie.com/contact'
  ),

  // Gather · Engage · Serve — the sourced strategy, each with proposed framing.
  strategy: {
    label: sourced('Gather · Engage · Serve', 'faithchurchleslie.com/about-faith'),
    heading: proposed(
      'home-strategy-heading',
      'A family, not a crowd.',
      'Section heading — Pillar 1 ("A Family, Not a Crowd").'
    ),
    columns: [
      {
        eyebrow: sourced('Gather'),
        heading: proposed('home-gather-h', 'You’ll be known before you’re impressed.', 'Gather column heading — Pillar 1 language.'),
        body: sourced(
          'As we Gather, worship, pray and share the Gospel of Jesus Christ, we seek the glory of God.',
          'faithchurchleslie.com/about-faith'
        ),
        link: { label: 'What Sunday is like', to: '/visit' },
      },
      {
        eyebrow: sourced('Engage'),
        heading: proposed('home-engage-h', 'Around tables, not in rows.', 'Engage column heading — sourced Engage Groups language, brand-approved phrase.'),
        body: sourced(
          'The most effective discipleship takes place around tables, in small groups we call Engage Groups — relational, pastoral, and missional.',
          'faithchurchleslie.com/engagegroups'
        ),
        link: { label: 'The discipleship pathway', to: '/discipleship' },
      },
      {
        eyebrow: sourced('Serve'),
        heading: proposed('home-serve-h', 'We go where it hurts.', 'Serve column heading — Pillar 4 ("Sent Into the Mess").'),
        body: sourced(
          'For His glory, we Serve and care for one another, our community, our nation, and our world.',
          'faithchurchleslie.com/about-faith'
        ),
        link: { label: 'How we serve', to: '/serve' },
      },
    ],
  },

  // What to expect on Sunday — 3 numbered items (all proposed voice)
  visit: {
    label: proposed('home-visit-label', 'What to expect on Sunday', 'Section label.'),
    heading: proposed('home-visit-h', 'No hoops. Just walk in.', 'Section heading.'),
    items: [
      proposed(
        'home-visit-1',
        'Come at 9:45. Coffee, refreshments, and a real welcome in the foyer before anything starts.',
        'Step 1 — sourced coffee-at-9:45 fact in Feed & Seed voice.'
      ),
      proposed(
        'home-visit-2',
        'Worship and teaching run about 90 minutes. Music you can actually sing, a message that treats you like a grown-up.',
        'Step 2 — service length + tone.'
      ),
      proposed(
        'home-visit-3',
        'Stay after. Ask anybody anything — where the kids go, how Engage Groups work, what to do next.',
        'Step 3 — staying after.'
      ),
    ],
  },

  // The pathway — 5 stops (names sourced; one-liners proposed where the current
  // site had no copy)
  pathway: {
    label: sourced('The discipleship pathway', 'faithchurchleslie.com/engagegroups'),
    heading: proposed('home-path-h', 'A pathway, not a program.', 'Heading — Pillar 2.'),
    tagline: sourced('Be / Become / Do', 'faithchurchleslie.com/engagegroups'),
    stops: [
      { name: sourced('Welcome to Faith'), body: proposed('home-path-1', 'Four Sundays, coffee, no homework. Meet the church and find your footing.', 'Stop 1 — NO copy existed on current site.') },
      { name: sourced('The Rooted Experience'), body: sourced('Ten weeks connecting with God, the church, and your purpose through the key rhythms of faith.', 'faithchurchleslie.com/engagegroups') },
      { name: sourced('Discover Partnership'), body: proposed('home-path-3', 'Where belonging becomes commitment — what it means to call Faith Church home.', 'Stop 3 — NO copy existed on current site.') },
      { name: sourced('Emotionally Healthy Discipleship'), body: sourced('Eight weeks integrating emotional health and spiritual depth — beyond surface-level practice.', 'faithchurchleslie.com/engagegroups') },
      { name: sourced('Engage Groups'), body: sourced('Micro-churches within the family — six to ten people, in a home, doing the slow work of becoming like Jesus.', 'faithchurchleslie.com/engagegroups') },
    ],
    cta: { label: 'Find your Engage Group', href: 'engageGroupsReg' },
  },

  // Sent into the mess — Pillar 4 (Brand Guide §7). All proposed.
  serve: {
    label: proposed('home-mess-label', 'Sent into the mess', 'Section label — Pillar 4.'),
    heading: proposed('home-mess-h', 'Swing sets for single moms. Furnaces for neighbors. Haiti.', 'Heading — verbatim from Brand Guide Pillar 4.'),
    body: proposed(
      'home-mess-body',
      'Football team dinners. A decade in Haiti in the leadership’s bones. A church that doesn’t tidy up suffering before it shows up in it. We go where it hurts.',
      'Body — Brand Guide voice; carries the Haiti differentiator.'
    ),
    scripture: {
      quote: proposed('home-mess-verse', 'He gives seed to the sower.', 'Scripture card — Feed & Seed offering line (2 Cor. 9:10 paraphrase).'),
      ref: sourced('2 Corinthians 9:10'),
    },
  },

  events: {
    label: proposed('home-events-label', 'This week at Faith', 'Section label.'),
    heading: proposed('home-events-h', 'Something’s always going on.', 'Heading.'),
  },

  give: {
    label: sourced('Kingdom Builders', 'faithchurchleslie.com'),
    heading: proposed('home-give-h', 'Some seed to keep. Some to sow.', 'Heading — Feed & Seed offering line.'),
    body: sourced(
      'Kingdom Builders giving supports ministries like Jackson Interfaith Shelter, Youth Haven Ranch and the Leslie Outreach, plus our national and global workers and missionaries.',
      'faithchurchleslie.com'
    ),
    cta: { label: 'Give Now', href: 'giving' },
  },

  sermons: {
    label: sourced('Message Archive', 'faithchurchleslie.com/sermons'),
    heading: proposed('home-sermons-h', 'Miss a Sunday? Catch up here.', 'Heading.'),
    recentVideoId: 'FN4AtPLlvDM', // "Roots — Week 2" (most recent, from crawl)
    recentTitle: sourced('Roots — Week 2', 'faithchurchleslie.com/sermons'),
  },

  contact: {
    label: proposed('home-contact-label', 'Come find us', 'Section label.'),
    heading: proposed('home-contact-h', 'Next to Leslie High, on North Main.', 'Heading — sourced location detail.'),
  },
};
