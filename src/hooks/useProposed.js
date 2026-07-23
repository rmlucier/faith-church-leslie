import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useMemo,
  createElement,
} from 'react';

/**
 * Proposed-content registry (reactive).
 *
 * Every string on the new site is either sourced from the current site or
 * written by us and marked `proposed`. Proposed strings are wrapped in
 * <ProposedString>, which registers here (in an effect) and gets a footnote
 * number by document order. <ReviewNotes> reads the same list and prints the
 * numbered notes for Pastor James.
 *
 * State-backed (not a bare ref) so that components which register AFTER first
 * paint — e.g. <EventsFeed>, which registers once its async fetch resolves —
 * still appear in the review list. Registration happens in ProposedString's
 * effect, so items land in mount (document) order; the id Set dedupes
 * StrictMode's double-invoke. Each page mounts a fresh provider → numbering
 * restarts per page.
 */
const ProposedContext = createContext(null);

export function ProposedProvider({ children }) {
  const [items, setItems] = useState([]); // [{ id, note }] in registration order
  const idsRef = useRef(new Set());

  const register = useCallback((id, note) => {
    if (idsRef.current.has(id)) return;
    idsRef.current.add(id);
    setItems((prev) => [...prev, { id, note }]);
  }, []);

  const numberOf = useCallback(
    (id) => {
      const idx = items.findIndex((x) => x.id === id);
      return idx === -1 ? null : idx + 1;
    },
    [items]
  );

  const value = useMemo(
    () => ({ register, numberOf, items }),
    [register, numberOf, items]
  );

  return createElement(ProposedContext.Provider, { value }, children);
}

export function useProposed() {
  const ctx = useContext(ProposedContext);
  // Fail soft outside a provider.
  if (!ctx) {
    return { register: () => {}, numberOf: () => null, items: [] };
  }
  return ctx;
}
