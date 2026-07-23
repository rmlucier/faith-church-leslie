import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProposed } from '../hooks/useProposed.js';

/**
 * Collapsed-by-default review block. An always-visible warning bar makes clear
 * the proposed copy is a first draft; clicking expands the numbered list for
 * Pastor James. Auto-hides on any page with zero proposed items — so as his
 * approved copy replaces `proposed()` with `sourced()`, the bar quietly
 * disappears page by page.
 *
 * Data comes from the ProposedProvider registry (useProposed), not a prop —
 * <ProposedString>s register there in document order. `page` is the human
 * label for context in the bar.
 */
export default function ReviewNotes({ page }) {
  const { items } = useProposed();
  const [open, setOpen] = useState(false);

  // Persist expand state per-session so it survives client-side navigation.
  useEffect(() => {
    if (sessionStorage.getItem('reviewnotes-open') === '1') setOpen(true);
  }, []);
  useEffect(() => {
    sessionStorage.setItem('reviewnotes-open', open ? '1' : '0');
  }, [open]);

  if (!items || items.length === 0) return null;

  return (
    <section
      aria-labelledby="review-heading"
      className="bg-kraft border-y-2 border-hunter"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-4 text-left"
          aria-expanded={open}
        >
          <span className="flex items-center gap-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2D4A2B"
              strokeWidth="2"
              className="shrink-0"
              aria-hidden="true"
            >
              <path d="M12 9v4M12 17h.01M4.93 19h14.14a2 2 0 001.74-3L13.73 4a2 2 0 00-3.46 0L3.19 16a2 2 0 001.74 3z" />
            </svg>
            <span
              id="review-heading"
              className="font-body font-semibold text-hunter uppercase tracking-widest text-xs"
            >
              First draft copy — will be deleted at publish
            </span>
            <span className="font-body text-burlap text-xs italic hidden md:inline">
              Pastor James's edits pending{page ? ` · ${page}` : ''} ·{' '}
              {items.length} item{items.length === 1 ? '' : 's'} on this page
            </span>
          </span>
          <span className="font-body text-hunter text-sm shrink-0">
            {open ? '−' : '+'}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-3">
                {items.map((item, i) => (
                  <div key={item.id} className="grid grid-cols-[40px_1fr] gap-3">
                    <div className="font-display text-hunter tabular-nums">
                      *{i + 1}
                    </div>
                    <div>
                      <div className="font-body font-semibold text-xs uppercase tracking-wide text-burlap mb-1">
                        {item.id}
                      </div>
                      <div className="font-body text-ink italic">
                        “{item.note}”
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
