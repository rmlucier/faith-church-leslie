import { sourced, proposed } from './_helpers.js';

/** Visit — "what to expect on Sunday", expanded. Mostly proposed (the current
 *  site had no plan-a-visit content), grounded in sourced service facts. */
export const visit = {
  hero: {
    eyebrow: 'Plan your visit',
    headline: proposed('visit-hero-h', 'No hoops. Just walk in.', 'Hero headline.'),
    subhead: proposed('visit-hero-sub', 'Come on in. Coffee’s hot at 9:45 and we saved you a seat at 10. Here’s exactly what your first Sunday looks like.', 'Hero subhead — Feed & Seed voice; the "we saved you a seat" posture from the Brand Guide.'),
    photo: '/images/from-current-site/IMG_1195_Large-1591768.jpeg',
  },

  facts: {
    time: sourced('Sundays at 10:00 AM', 'faithchurchleslie.com/contact'),
    coffee: sourced('Coffee, refreshments & fellowship from 9:45 AM', 'faithchurchleslie.com/contact'),
    address: sourced('4020 N. Main St., Leslie, MI 49251 — next to Leslie High School', 'faithchurchleslie.com'),
  },

  flow: {
    label: proposed('visit-flow-label', 'What to expect', 'Section label.'),
    heading: proposed('visit-flow-h', 'Your first Sunday, start to finish.', 'Heading.'),
    steps: [
      { title: proposed('visit-step1-t', 'Arrive at 9:45', 'Step title.'), body: proposed('visit-step1-b', 'Pull in off North Main — there’s plenty of parking. Grab coffee in the foyer and let someone say hello before anything official starts.', 'Step body.') },
      { title: proposed('visit-step2-t', 'Worship at 10:00', 'Step title.'), body: proposed('visit-step2-b', 'Music you can actually sing, led by Pastor Crystal. Expression is real and unforced — you’re welcome to engage however you’re comfortable.', 'Step body.') },
      { title: proposed('visit-step3-t', 'Teaching that treats you like a grown-up', 'Step title.'), body: proposed('visit-step3-b', 'Pastor James preaches to form you, not to wow you — plain-spoken, honest about hard things, rooted in Scripture. The whole gathering runs about 90 minutes.', 'Step body — Brand Guide voice ("teacher, not a performer").') },
      { title: proposed('visit-step4-t', 'Stay after', 'Step title.'), body: proposed('visit-step4-b', 'Ask anybody anything. Where your kids went, how Engage Groups work, what “Welcome to Faith” is. No one will rush you out.', 'Step body.') },
    ],
  },

  faqs: {
    label: proposed('visit-faq-label', 'The practical stuff', 'Section label.'),
    items: [
      { q: proposed('visit-faq1-q', 'What do people wear?', 'FAQ.'), a: proposed('visit-faq1-a', 'Whatever you’ve got. Jeans, boots, Sunday best — nobody’s checking.', 'FAQ answer — the posture, not the slogan.') },
      { q: proposed('visit-faq2-q', 'Where do my kids go?', 'FAQ.'), a: proposed('visit-faq2-a', 'Check-in is easy and secure — we’ll print a tag for your kid and a matching one for you, and text you if they need you during service.', 'FAQ answer — from brand mockup kids check-in. CONFIRM kids ministry details with James.') },
      { q: proposed('visit-faq3-q', 'How long is the service?', 'FAQ.'), a: proposed('visit-faq3-a', 'About 90 minutes, start to finish.', 'FAQ answer.') },
      { q: proposed('visit-faq4-q', 'Will I get singled out?', 'FAQ.'), a: proposed('visit-faq4-a', 'No. We’re glad you’re here, but you can come, sit, and just watch. No spotlight, no pressure.', 'FAQ answer.') },
    ],
  },
};
