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

Add when Pastor James sends his Planning Center credentials. Until then the
events feed serves sample data automatically (no error).

```
PCO_APP_ID=<from James>
PCO_SECRET=<from James>
```

These are read only by the `/api/events.js` serverless function — they never
reach the browser. Redeploy (or push any commit) after adding them.

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
