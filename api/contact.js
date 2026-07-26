/**
 * Vercel serverless function — contact form handler.
 *
 * Accepts a same-origin POST from <ContactForm> and emails the office via
 * Resend. Keeps the site's CSP tight (connect-src 'self') — no third-party
 * form service. Credentials live only here, never on the client.
 *
 * Env vars (set in Vercel project settings):
 *   RESEND_API_KEY   — required to actually send; without it the endpoint
 *                      returns 503 { error: 'not_configured' } and the form
 *                      falls back to the mailto link.
 *   CONTACT_TO       — recipient (default Office@FaithChurchLeslie.com)
 *   CONTACT_FROM     — verified Resend sender (default onboarding@resend.dev;
 *                      swap to a faithchurchleslie.com sender once the domain
 *                      is verified in Resend).
 */
const TO = process.env.CONTACT_TO || 'Office@FaithChurchLeslie.com';
const FROM = process.env.CONTACT_FROM || 'Faith Church <onboarding@resend.dev>';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clip = (s, n) => String(s || '').trim().slice(0, n);
const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  // Body may arrive parsed (Vercel) or as a raw string.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  // Honeypot: real users never fill "company". Pretend success for bots.
  if (clip(body.company, 100)) return res.status(200).json({ ok: true });

  const name = clip(body.name, 120);
  const email = clip(body.email, 200);
  const message = clip(body.message, 5000);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'missing_fields' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'invalid_email' });
  }

  const KEY = process.env.RESEND_API_KEY;
  if (!KEY) {
    // Not wired up yet — client will show the email fallback.
    return res.status(503).json({ error: 'not_configured' });
  }

  const text = `New message from the Faith Church website\n\nName: ${name}\nEmail: ${email}\n\n${message}`;
  const html = `<p><strong>New message from the Faith Church website</strong></p>
<p><strong>Name:</strong> ${escapeHtml(name)}<br/>
<strong>Email:</strong> ${escapeHtml(email)}</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Website contact — ${name}`,
        text,
        html,
      }),
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      return res.status(502).json({ error: 'send_failed', detail: detail.slice(0, 300) });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(502).json({ error: 'send_failed', detail: err.message });
  }
}
