import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';
import LiteYouTube from './LiteYouTube.jsx';

/**
 * Recent sermons. Fetches /api/sermons on mount (Vercel serverless → the
 * channel's YouTube RSS feed) so new Sunday messages appear automatically. If
 * the request fails — e.g. `npm run dev`, which has no serverless runtime — it
 * falls back to the curated static list from the content module, so the page
 * always renders.
 *
 * Props:
 *   fallback — curated list from content/sermons.js (recent[]): items shaped
 *              { videoId, title:{text}, date:{text}, speaker:{text} }
 *   limit    — max cards (default 6)
 */
function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/New_York',
  }).format(d);
}

function Skeleton() {
  return (
    <div className="grid gap-10 md:grid-cols-3" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i}>
          <div className="aspect-video animate-pulse bg-kraft/70" />
          <div className="mt-4 h-4 w-24 animate-pulse bg-kraft/70" />
          <div className="mt-2 h-5 w-3/4 animate-pulse bg-kraft/70" />
        </div>
      ))}
    </div>
  );
}

export default function SermonsFeed({ fallback = [], limit = 6 }) {
  const [status, setStatus] = useState('loading'); // loading | ready
  const [items, setItems] = useState([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await fetch(`/api/sermons?limit=${limit}`, {
          headers: { Accept: 'application/json' },
        });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const data = await r.json();
        if (!alive) return;
        const live =
          data.source === 'youtube' && Array.isArray(data.sermons) && data.sermons.length > 0;
        if (live) {
          setItems(
            data.sermons.map((s) => ({
              videoId: s.videoId,
              title: s.title,
              dateLabel: formatDate(s.published),
              speaker: '',
            }))
          );
        } else {
          throw new Error('empty feed');
        }
      } catch {
        // Dev, network error, or empty feed → curated static list.
        if (!alive) return;
        setItems(
          (fallback || []).map((s) => ({
            videoId: s.videoId,
            title: s.title?.text ?? '',
            dateLabel: s.date?.text ?? '',
            speaker: s.speaker?.text ?? '',
          }))
        );
      } finally {
        if (alive) setStatus('ready');
      }
    })();
    return () => {
      alive = false;
    };
  }, [limit, fallback]);

  if (status === 'loading') return <Skeleton />;

  const shown = items.slice(0, limit);

  return (
    <div className="grid gap-10 md:grid-cols-3">
      {shown.map((s, i) => (
        <Reveal as="article" delay={i * 0.08} key={s.videoId}>
          <div className="relative aspect-video bg-hunter">
            <LiteYouTube videoId={s.videoId} title={s.title} />
          </div>
          {s.dateLabel && <p className="mt-4 eyebrow text-hunter">{s.dateLabel}</p>}
          <h3 className="mt-1 font-display font-bold text-xl leading-snug">{s.title}</h3>
          {s.speaker && <p className="mt-1 font-body text-sm text-burlap">{s.speaker}</p>}
        </Reveal>
      ))}
    </div>
  );
}
