# Deploy — Faith Church Leslie

**Live:** https://faith-church-leslie.vercel.app
**Repo:** https://github.com/rmlucier/faith-church-leslie
**Stack:** Vite + React 18 + Tailwind + Framer Motion + React Router (mirrors Freeway)

## How deploys work (auto)

The GitHub repo is connected to Vercel. **Every push to `main` auto-deploys** —
no manual `vercel` command needed. Claude Code pushes after each change; you
review the live URL.

- Framework preset: **Vite** (auto-detected)
- Build command: `npm run build` (auto)
- Output directory: `dist` (auto)

## Environment variables (Vercel → Project → Settings → Environment Variables)

All of these are read only by serverless functions in `/api/*` — they never
reach the browser. After adding/changing any, redeploy (push any commit, or hit
"Redeploy" in Vercel).

### Contact form — Resend (set this up to turn the form on)

The contact form (`/contact`) posts to `/api/contact.js`, which emails the
office via Resend. **Until `RESEND_API_KEY` is set, the form still works but
shows a "please email us at Office@…" fallback instead of actually sending.**

```
RESEND_API_KEY=<from resend.com → API Keys>
CONTACT_TO=Office@FaithChurchLeslie.com        # optional; this is the default
CONTACT_FROM=Faith Church <noreply@faithchurchleslie.com>   # must be a Resend-VERIFIED sender
```

Steps:
1. Log in to **resend.com** (you can reuse the account behind Shepard Care).
2. **Verify a sender:** Resend → Domains → add `faithchurchleslie.com` and add
   the DNS records it shows to GoDaddy. (Or, to test immediately, skip this and
   leave `CONTACT_FROM` unset — it falls back to `onboarding@resend.dev`, which
   only delivers to *your own* Resend-account email, not the church inbox.)
3. Resend → API Keys → create one → paste as `RESEND_API_KEY` in Vercel.
4. Set `CONTACT_FROM` to an address at the verified domain.
5. Redeploy, then submit a test message on `/contact` and confirm it arrives.

### Planning Center events (optional, later)

Add when Pastor James sends his PCO credentials. Until then the events feed
serves sample data automatically (no error).

```
PCO_APP_ID=<from James>
PCO_SECRET=<from James>
```

### Sermons feed (optional)

The `/sermons` page auto-pulls the church's latest YouTube uploads via
`/api/sermons.js` (public RSS — no key needed). Only set this to point at a
different channel:

```
SERMONS_CHANNEL_ID=UCQcteR3ANgrgtEUvNFLry8w   # default = Faith Church Leslie
```

### Canonical / OG URL

`VITE_SITE_URL` lives in `.env.production` (committed) — currently the Vercel
URL. After the DNS cutover below, change it to `https://faithchurchleslie.com`
and redeploy so canonical/OG/JSON-LD point at the real domain.

## Custom domain (do LAST, after James signs off on the copy)

In Vercel → Project → Settings → Domains → add `faithchurchleslie.com`, then set
these records at GoDaddy (pull the exact values from Vercel's Add-Domain screen —
they can differ from the defaults below):

```
Type: A       Host: @     Value: 76.76.21.21          TTL: 600
Type: CNAME   Host: www   Value: cname.vercel-dns.com.  TTL: 600
```

DNS can take up to an hour to propagate. Vercel issues the SSL cert automatically
once the records resolve.

## Local development

```bash
cd "/Users/fc-office/Documents/Claude/Projects/Faith Church/faith-church-leslie"
npm install
npm run dev      # http://localhost:5175
npm run build    # production build → dist/
npm run preview  # serve the built site locally
```
