# Faith Church — Leslie · CLAUDE.md

Persistent context. Read this every session. Do NOT re-read the source files listed below unless editing them.

## What this is
Vite + React + Tailwind + Framer Motion + React Router SPA. Feed & Seed brand direction. Replacing faithchurchleslie.com. Deployed at faith-church-leslie.vercel.app (Vercel team: Roy Lucier's projects, project name: faith-church-leslie). Repo: https://github.com/rmlucier/faith-church-leslie (public).

## Brand tokens — LOCKED
- Palette (Tailwind config): manila #EFE4C7, kraft #D9C9A1, hunter #2D4A2B, faded #9CAA8E, burlap #5A523C, ink #1A1A14
- Display: Roboto Slab 700 (Google Fonts family "Roboto+Slab:wght@400;700")
- Body: IBM Plex Sans Condensed 400/600 (family "IBM+Plex+Sans+Condensed:wght@400;600")
- Tagline: "Built for people who came to do something."

## Voice — LOCKED
Sourced from /Users/fc-office/Documents/Claude/Projects/Faith Church/_voice-evidence.md. Signature phrases: "Come on in", "I want you to", "we're the church that prays", "around tables, not in rows". Banned: "relevant", "authentic community", "full gospel", "unlock", "elevate".

## Content discipline
Every string in src/content/*.js is either `{ text, source: "url" }` (from the crawl) or `{ text, proposed: true }` (Claude Code wrote it). No untagged strings anywhere. Helpers: `sourced()` / `proposed()` in `src/content/_helpers.js`.

## Serverless functions in /api (read env only, never client)
- `/api/events.js` — PCO events. MOCK_EVENTS for now; do NOT wire a live Planning Center feed yet (Roy will pick iCal vs API). All mock event names are sourced from the crawl.
- `/api/contact.js` — contact form → Resend email. Live and wired (`<ContactForm>` on /contact). Needs `RESEND_API_KEY` (+ verified `CONTACT_FROM`) in Vercel to actually deliver; without it the form shows a graceful "email us directly" fallback. Has honeypot + validation.
- `/api/sermons.js` — reads the channel's public YouTube RSS (no key), filters out prayer/midweek/shorts, dedupes same-titled re-uploads, returns latest Sunday messages. `<SermonsFeed>` on /sermons fetches it and falls back to the curated static `sermons.recent` list in dev. So the sermon archive auto-updates. Known gap: a rare short devotional clip can slip through (RSS has no duration).

## Give hero
Uses the evergreen-forest photo (`black-forest-…jpg`), NOT the Kingdom Builders text-graphic (which had baked-in wording that fought the headline). The KB graphic now sits in the /give "Where it goes" section.

## Deploy — ACTUAL mechanism (overrides any "Roy deploys manually" note elsewhere)
GitHub → Vercel auto-deploy is live and connected. **Push to `main` and Vercel redeploys automatically** — this is the real, current pipeline, confirmed working across multiple commits. Do not use the local `vercel` CLI (not linked in this environment); just commit + push. Roy has asked for pushes to be autonomous — don't ask permission per-commit, just push and report what shipped.

## Read-only source files (do NOT re-read unless editing)
- ../_build-new-faith-church-site.md (master spec, ~10KB)
- ../_voice-evidence.md (voice, 17KB)
- ../sets/picks/seed-and-feed/world.html (900KB, brand render)
- ../sets/01-rural-vernacular/Faith_Church__feed-and-seed.html (119KB, brand source)
- ../sermons/* (transcripts, don't touch)

## Assets
- Logo: ../outputs/assets/FC_Horizontal_Black.png and _White.png
- Favicon set already built from the logo's F leaf-mark (public/favicon.ico, favicon.png, apple-touch-icon.png) — hunter on manila, don't regenerate.
- Photos from the current site crawl live in public/images/from-current-site/ (see content-map.md for the manifest).

## Known gotchas already fixed here — don't reintroduce
- `vercel.json` uses `cleanUrls: true`. Per Vercel's own docs, the SPA catch-all rewrite destination must be `/`, **not** `/index.html`, when cleanUrls is on — using `/index.html` causes every non-home route to 404 in production even though it works fine in local dev (Vite's own dev server has its own history fallback, which is why this bug is invisible locally).
- `ReviewNotes.jsx`: never use a run of repeated non-breaking characters (e.g. `'━'.repeat(40)`) for a divider — it's one unbreakable token that forces a wide min-content width and breaks the mobile nav (this happened once already; see git history "Fix mobile nav" commit). Use a CSS-drawn rule instead.

## Model
Use claude-sonnet-5 for implementation. Only switch to Opus for design/brand decisions.
