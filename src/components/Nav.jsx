import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { nav, church } from '../content/site.js';

/**
 * Sticky top nav. Two states:
 *   - transparent over the home hero (first screen) — white logo + light links
 *   - solid manila everywhere else — black logo + ink links
 * Mobile: hamburger → full-screen manila overlay, links stacked in Roboto Slab.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  // Solid whenever we're scrolled past the hero, off the home page, or the
  // mobile menu is open.
  const solid = scrolled || !onHome || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  const linkClass = `font-body font-semibold uppercase tracking-[0.14em] text-sm transition-colors ${
    solid ? 'text-ink/80 hover:text-hunter' : 'text-manila/90 hover:text-white'
  }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        solid
          ? 'bg-manila/95 backdrop-blur-sm border-b border-burlap/20'
          : 'bg-transparent'
      } ${scrolled ? 'shadow-[0_2px_20px_rgba(90,82,60,0.15)]' : 'shadow-none'}`}
    >
      <div className="container-fc flex items-center justify-between h-20">
        <Link to="/" aria-label={`${church.name} — home`} className="block">
          <img
            src={
              solid
                ? '/images/logo/FC_Horizontal_Black.png'
                : '/images/logo/FC_Horizontal_White.png'
            }
            alt={church.name}
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((l) => (
            <Link key={l.label} to={l.to} className={linkClass}>
              {l.label}
            </Link>
          ))}
          <Link
            to="/visit"
            className={solid ? 'btn-primary' : 'btn-ghost !text-manila !border-manila hover:!bg-manila hover:!text-hunter'}
          >
            Plan a Visit
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`h-0.5 w-6 transition-transform ${solid ? 'bg-ink' : 'bg-manila'} ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 transition-opacity ${solid ? 'bg-ink' : 'bg-manila'} ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 transition-transform ${solid ? 'bg-ink' : 'bg-manila'} ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-manila border-t border-burlap/20"
          >
            <div className="container-fc py-6 flex flex-col gap-5">
              {nav.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="font-display font-bold uppercase tracking-wide text-2xl text-ink hover:text-hunter"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/visit" className="btn-primary self-start mt-2">
                Plan a Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
