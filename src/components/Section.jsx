/**
 * Consistent page-section wrapper.
 *
 * tone:
 *   'manila' (default) — paper background, ink text
 *   'kraft'            — deeper inset background, ink text
 *   'hunter'           — brand green, inverts text to manila
 *
 * Renders a real <section> with an aria-labelledby hook derived from `id`.
 * Padding + container match the brand spacing rhythm.
 */
const TONES = {
  manila: 'bg-manila text-ink',
  kraft: 'bg-kraft text-ink',
  hunter: 'bg-hunter text-manila',
};

export default function Section({
  id,
  tone = 'manila',
  className = '',
  containerClassName = '',
  labelledBy,
  children,
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${TONES[tone] || TONES.manila} py-24 md:py-32 ${className}`}
    >
      <div className={`container-fc ${containerClassName}`}>{children}</div>
    </section>
  );
}
