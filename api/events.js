/**
 * Vercel serverless function — Planning Center Calendar feed.
 *
 * Reads PCO credentials from environment variables (never the client) and
 * returns a normalized events array. With no credentials configured it returns
 * mock data so the site works in development and before James sends his token.
 *
 * Env vars (set in Vercel project settings):
 *   PCO_APP_ID
 *   PCO_SECRET
 */
export default async function handler(req, res) {
  const APP_ID = process.env.PCO_APP_ID;
  const SECRET = process.env.PCO_SECRET;

  if (!APP_ID || !SECRET) {
    return res.status(200).json({ events: MOCK_EVENTS, source: 'mock' });
  }

  const auth =
    'Basic ' + Buffer.from(`${APP_ID}:${SECRET}`).toString('base64');
  const url =
    'https://api.planningcenteronline.com/calendar/v2/events?filter=future&per_page=20&order=starts_at';

  try {
    const r = await fetch(url, { headers: { Authorization: auth } });
    if (!r.ok) throw new Error(`PCO ${r.status}`);
    const data = await r.json();
    const events = (data.data || []).map((e) => ({
      id: e.id,
      name: e.attributes.name,
      summary: e.attributes.summary,
      startsAt: e.attributes.starts_at,
      endsAt: e.attributes.ends_at,
      location: e.attributes.location,
      registrationUrl: e.attributes.registration_url,
    }));
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
    return res.status(200).json({ events, source: 'live' });
  } catch (err) {
    return res
      .status(200)
      .json({ events: MOCK_EVENTS, source: 'fallback', error: err.message });
  }
}

/**
 * Fallback / development data. Seeded from the current site's live event list
 * (crawled 2026-07-22) so the mock feels real: the recurring rhythm plus the
 * fixed 50th-anniversary date. The <EventsFeed> flags this copy as proposed.
 */
const MOCK_EVENTS = [
  {
    id: 'mock-sunday',
    name: 'Sunday Morning Gathering',
    summary: 'Coffee and fellowship at 9:45, worship and teaching at 10.',
    startsAt: '2026-07-26T14:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
  {
    id: 'mock-prayer-noon',
    name: 'Prayer Thursday',
    summary: 'Midweek noon prayer — part of 50 Days of Prayer.',
    startsAt: '2026-07-23T16:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
  {
    id: 'mock-prayer-evening',
    name: '50 Days of Prayer',
    summary: 'Thursday evening prayer gathering.',
    startsAt: '2026-07-23T23:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
  {
    id: 'mock-encounter',
    name: 'Encounter Night',
    summary: 'First-Sunday-of-the-month evening of worship and prayer.',
    startsAt: '2026-08-02T22:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
  {
    id: 'mock-50th',
    name: '50th Celebration — Faith Forward',
    summary: 'Marking 50 years of Faith Church. One gathering, 9:00 AM.',
    startsAt: '2026-08-16T13:00:00Z',
    location: '4020 N. Main St., Leslie, MI',
  },
];
