import { useState } from 'react';
import { church } from '../content/site.js';
import Copy from './Copy.jsx';

/**
 * Contact form — posts same-origin to /api/contact (Resend behind a serverless
 * function, so the site's CSP stays connect-src 'self'). Accessible: real
 * <label>s, required fields, aria-live status. If the API isn't configured yet
 * (no RESEND_API_KEY), it falls back to the office email so nobody hits a dead
 * end. `content` is contact.form from the content module.
 */
export default function ContactForm({ content }) {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [fallback, setFallback] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setFallback(false);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setStatus('success');
        return;
      }
      // 503 = not wired up yet → point people at email instead of a dead form.
      if (res.status === 503) setFallback(true);
      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-hunter/30 bg-manila p-6 font-body text-lg text-ink"
      >
        <Copy item={content.success} />
      </div>
    );
  }

  const inputClass =
    'mt-2 w-full border border-burlap/40 bg-manila px-4 py-3 font-body text-ink ' +
    'focus:border-hunter focus:outline-none';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot — visually hidden, off the tab order. Bots fill it; we drop those. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="cf-name" className="font-body font-semibold text-ink">
          Name
        </label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="cf-email" className="font-body font-semibold text-ink">
          Email
        </label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>

      <div>
        <label htmlFor="cf-message" className="font-body font-semibold text-ink">
          How can we help?
        </label>
        <textarea id="cf-message" name="message" required rows={5} className={inputClass} />
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60">
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p role="alert" aria-live="assertive" className="font-body text-burlap">
          {fallback ? (
            <>
              Our form isn’t quite ready yet — please email us at{' '}
              <a href={`mailto:${church.email}`} className="link-fc">{church.email}</a>.
            </>
          ) : (
            <Copy item={content.error} />
          )}
        </p>
      )}
    </form>
  );
}
