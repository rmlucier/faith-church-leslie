/**
 * Renders its children as-is.
 *
 * Historically this appended a superscript footnote marker (*N) for
 * not-yet-approved copy and registered the string with <ReviewNotes>. That
 * first-draft review treatment has been removed (Sept 2026) — the proposed
 * copy now stands as the live copy — so this is a transparent pass-through.
 * Kept (rather than deleted) because Copy.jsx and EventsFeed still render it;
 * the `id`/`note` props are accepted and ignored.
 */
export default function ProposedString({ children }) {
  return <>{children}</>;
}
