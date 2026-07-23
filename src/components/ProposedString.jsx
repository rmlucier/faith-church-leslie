import { useEffect } from 'react';
import { useProposed } from '../hooks/useProposed.js';

/**
 * Wraps a not-yet-approved string and appends a superscript footnote number.
 * Registers in an effect so items land in document order; the number comes
 * from the shared registry and matches the entry in <ReviewNotes>.
 *
 *   <ProposedString id="home-hero-sub" note="Come on in. Coffee's hot at 9:45…">
 *     Come on in. Coffee's hot at 9:45 and we saved you a seat at 10.
 *   </ProposedString>
 */
export default function ProposedString({ id, note, children }) {
  const { register, numberOf } = useProposed();
  const fallbackNote = typeof children === 'string' ? children : '';

  useEffect(() => {
    register(id, note ?? fallbackNote);
  }, [id, note, fallbackNote, register]);

  const n = numberOf(id);

  return (
    <>
      {children}
      {n != null && (
        <sup
          className="ml-0.5 align-super font-body font-semibold text-hunter"
          style={{ fontSize: '0.62em' }}
          title="Proposed copy — see Review Notes below"
        >
          *{n}
        </sup>
      )}
    </>
  );
}
