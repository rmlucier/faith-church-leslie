import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll-in reveal: small upward drift + fade the first time an element enters
 * the viewport. Honors prefers-reduced-motion (renders static). Used across
 * sections for the Feed & Seed "settle into place" feel. Phase 6 polish.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 20,
  className = '',
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
