import { sourced, proposed } from './_helpers.js';

/** Discipleship — the 5-stop pathway expanded. Rooted & EHD copy is sourced;
 *  the two empty stops (Welcome to Faith, Discover Partnership) are proposed. */
export const discipleship = {
  hero: {
    eyebrow: sourced('The discipleship pathway', 'faithchurchleslie.com/engagegroups'),
    headline: proposed('disc-hero-h', 'A pathway, not a program.', 'Hero headline — Pillar 2.'),
    photo: '/images/from-current-site/IMG_3634_Large-1591768.jpeg',
    tagline: sourced('Be / Become / Do', 'faithchurchleslie.com/engagegroups'),
  },

  intro: proposed(
    'disc-intro',
    'At Faith Church you’ll always know what’s next. Five stages, in order, each one a real step — not a hoop. Some of it will cost you something. It’s worth it.',
    'Pathway intro — Brand Guide discipleship tone ("This will cost you something. It’s worth it.").'
  ),

  stops: [
    {
      n: 1,
      name: sourced('Welcome to Faith', 'faithchurchleslie.com/engagegroups'),
      what: proposed('disc-1-what', 'Four Sundays that introduce the church — who we are, what we believe, and how to belong here.', 'Stop 1 — NO copy existed on current site.'),
      who: proposed('disc-1-who', 'For anyone new, or anyone who’s been around a while and never made it official.', 'Stop 1 audience.'),
      when: proposed('disc-1-when', 'Four Sundays after service. Coffee provided. No homework.', 'Stop 1 cadence (from brand mockup bulletin).'),
    },
    {
      n: 2,
      name: sourced('The Rooted Experience', 'faithchurchleslie.com/engagegroups'),
      what: sourced('A ten-week experience that helps you connect with God, the church, and your purpose through the key rhythms of faith — daily devotion, prayer, repentance, generosity, serving, and sharing your story.', 'faithchurchleslie.com/engagegroups'),
      who: sourced('Best as a first step to grow in faith and connect with others.', 'faithchurchleslie.com/engagegroups'),
      when: sourced('Groups of 10–15 gather weekly for discussion, journaling, prayer, and service experiences.', 'faithchurchleslie.com/engagegroups'),
    },
    {
      n: 3,
      name: sourced('Discover Partnership', 'faithchurchleslie.com/engagegroups'),
      what: proposed('disc-3-what', 'Where belonging becomes commitment. What partnership at Faith Church means, and how your gifts fit the mission.', 'Stop 3 — NO copy existed on current site.'),
      who: proposed('disc-3-who', 'For those ready to move from attending to belonging.', 'Stop 3 audience.'),
      when: proposed('disc-3-when', 'Offered periodically — ask at the welcome table for the next date.', 'Stop 3 cadence (placeholder — confirm with James).'),
    },
    {
      n: 4,
      name: sourced('Emotionally Healthy Discipleship', 'faithchurchleslie.com/engagegroups'),
      what: sourced('Integrates emotional health and spiritual depth, moving beyond surface-level practice — addressing unhealthy spirituality, discovering your authentic self in Christ, integrating grief, practicing Sabbath, and healing family patterns.', 'faithchurchleslie.com/engagegroups'),
      who: sourced('Best for those who have completed the Rooted Experience.', 'faithchurchleslie.com/engagegroups'),
      when: sourced('Two eight-week courses (Emotionally Healthy Spirituality and Emotionally Healthy Relationships) with readings, video teaching, and small-group discussion.', 'faithchurchleslie.com/engagegroups'),
    },
    {
      n: 5,
      name: sourced('Engage Groups', 'faithchurchleslie.com/engagegroups'),
      what: sourced('Micro-churches within our larger family — relational, pastoral, and missional. Food and fellowship, Scripture, honest conversation, prayer and ministry, and mission and service together.', 'faithchurchleslie.com/engagegroups'),
      who: proposed('disc-5-who', 'For everyone. This is where the family actually lives day to day.', 'Stop 5 audience.'),
      when: sourced('Each group is unique — meeting weekly, twice a month, or as the group decides, usually in a home.', 'faithchurchleslie.com/engagegroups'),
    },
  ],

  classes: {
    heading: sourced('Core Engage Classes', 'faithchurchleslie.com/engagegroups'),
    body: sourced('Engage Classes focus on specific teaching and the core discipleship values of Faith Church. They provide the foundation for spiritual and emotional health within our community.', 'faithchurchleslie.com/engagegroups'),
  },

  ctas: [
    { label: 'Join an Engage Group', href: 'engageGroupsReg', variant: 'primary' },
    { label: 'Register for a class', href: 'engageClassesReg', variant: 'ghost' },
  ],
};
