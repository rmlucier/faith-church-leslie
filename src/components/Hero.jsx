import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Reusable hero. A photo under a hunter overlay (~legibility), with eyebrow /
 * headline / subhead / CTAs stacked left. Parallax drift on scroll unless the
 * visitor prefers reduced motion.
 *
 * Props:
 *   eyebrow   — small label above the headline
 *   headline  — node (the big Roboto Slab line)
 *   subhead   — node (supporting line, may include <ProposedString>)
 *   photo     — image src (from /public)
 *   photoAlt  — alt text (decorative heroes pass '')
 *   children  — CTA buttons row
 *   short     — true → ~70vh inner-page hero; default full screen
 */
export default function Hero({
  eyebrow,
  headline,
  subhead,
  photo,
  photoAlt = '',
  children,
  short = false,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      id="top"
      className={`relative flex items-end overflow-hidden ${
        short ? 'min-h-[62vh] pt-32 pb-16' : 'min-h-screen pt-28 pb-24'
      }`}
    >
      <div className="absolute inset-0 z-0">
        {reduce ? (
          <img
            src={photo}
            alt={photoAlt}
            className="h-full w-full object-cover"
            fetchpriority="high"
          />
        ) : (
          <motion.img
            src={photo}
            alt={photoAlt}
            style={{ y, scale }}
            className="h-full w-full object-cover"
            fetchpriority="high"
          />
        )}
        {/* Hunter tint for brand cohesion + scrims anchored to the text zone
            (bottom-left) so the cream headline/subhead always clear WCAG AA. */}
        <div className="absolute inset-0 bg-hunter/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-hunter/60 to-hunter/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/25 to-transparent" />
      </div>

      <div className="container-fc relative z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow !text-manila/90"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 font-display font-bold text-manila leading-[1.02] text-[clamp(2.6rem,7vw,5.5rem)]"
          >
            {headline}
          </motion.h1>

          {subhead && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl font-body text-lg md:text-xl text-manila/90 leading-relaxed"
            >
              {subhead}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
