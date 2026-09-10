/**
 * Content-module helpers. Every user-facing string is authored as one of two
 * shapes so its provenance is explicit and machine-checkable:
 *
 *   sourced(text, source)      — verbatim / derived from the current site
 *   proposed(id, text, note?)  — written by us; needs James's review
 *
 * Pages render both through <Copy>, which prints sourced text plainly and wraps
 * proposed text in <ProposedString> (footnote number + Review Notes entry).
 */
export const sourced = (text, source = 'faithchurchleslie.com') => ({
  text,
  source,
});

export const proposed = (id, text, note) => ({
  text,
  proposed: true,
  id,
  note: note || text,
});

/**
 * approved(text, by?) — copy Pastor James has reviewed and blessed (his own
 * words, or ours that he signed off on). Renders plainly like `sourced` (no
 * footnote — it drops out of Review Notes), but its provenance is his review,
 * not the current site. Introduced with his Sept 2026 copy pass.
 */
export const approved = (text, by = 'Pastor James — Sept 2026 review') => ({
  text,
  source: by,
});
