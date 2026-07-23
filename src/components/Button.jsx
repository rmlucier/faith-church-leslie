import { Link } from 'react-router-dom';

/**
 * Two variants matching the Feed & Seed style sheet:
 *   primary — filled hunter, manila text
 *   ghost   — transparent, 1.5px hunter border, hunter text; fills on hover
 *
 * Renders the right element for the destination:
 *   to="/path"        → React Router <Link> (internal)
 *   href="https://…"  → <a target=_blank> (external)
 *   href="#anchor"    → plain <a> (same-page anchor)
 *   onClick only      → <button>
 */
export default function Button({
  variant = 'primary',
  to,
  href,
  children,
  className = '',
  ...rest
}) {
  const cls = `${variant === 'ghost' ? 'btn-ghost' : 'btn-primary'} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
