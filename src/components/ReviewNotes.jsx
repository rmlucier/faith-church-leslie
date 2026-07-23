import { useProposed } from '../hooks/useProposed.js';

/**
 * Renders the numbered list of proposed strings collected on this page.
 * Sits above the global footer inside a kraft-toned band. Collapsible on
 * mobile via <details>. Returns nothing if the page has no proposed copy.
 *
 * Must render AFTER all <ProposedString>s in the page tree (i.e. last child of
 * the ProposedProvider) so the registry is fully populated by the time it reads.
 */
export default function ReviewNotes({ page }) {
  const { items } = useProposed();
  const notes = items.map((it, i) => ({ ...it, n: i + 1 }));
  if (notes.length === 0) return null;

  // A real CSS rule, not a run of box-drawing glyphs — the glyph version was a
  // single unbreakable token that forced ~587px min-width and broke mobile.
  const Rule = () => (
    <span aria-hidden="true" className="block h-0.5 w-full max-w-full bg-burlap/40" />
  );

  return (
    <aside
      aria-label="Review notes for this page"
      className="bg-kraft/70 border-t border-burlap/30"
    >
      <div className="container-fc py-14">
        <details open className="group">
          <summary className="cursor-pointer list-none select-none">
            <Rule />
            <span className="mt-2 block font-display font-bold text-lg text-hunter">
              Review Notes
              <span className="text-burlap font-body font-normal text-sm normal-case tracking-normal">
                {' '}
                · this page{page ? ` (${page})` : ''} · {notes.length}{' '}
                proposed {notes.length === 1 ? 'item' : 'items'}
                <span className="ml-2 text-xs opacity-70 group-open:hidden">
                  [tap to open]
                </span>
              </span>
            </span>
            <span className="mt-1 block">
              <Rule />
            </span>
          </summary>

          <p className="mt-6 max-w-2xl font-body text-sm text-burlap leading-relaxed">
            Pastor James — the numbered items below are proposed copy, not
            verbatim from the current site. Reply to Roy with just the numbers
            you want changed, killed, or approved.
          </p>

          <ol className="mt-6 space-y-4">
            {notes.map(({ id, n, note }) => (
              <li key={id} className="flex gap-4">
                <span className="shrink-0 font-body font-semibold text-hunter tabular-nums">
                  *{n}
                </span>
                <span className="font-body text-ink/90 leading-relaxed">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-burlap/80">
                    {id}
                  </span>
                  <span className="italic">“{note}”</span>
                </span>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </aside>
  );
}
