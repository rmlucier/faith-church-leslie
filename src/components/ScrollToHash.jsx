import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll behavior on route change:
 *   - URL has a hash (e.g. /#discipleship) → smooth-scroll to that element once
 *     it mounts, retrying briefly to cover late-rendering / lazy content.
 *   - Otherwise → jump to top.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    const id = decodeURIComponent(hash.replace('#', ''));
    let cancelled = false;
    const deadline = Date.now() + 1500;

    const tick = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (Date.now() < deadline) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [pathname, hash]);

  return null;
}
