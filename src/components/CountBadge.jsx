import { motion } from 'framer-motion';

/**
 * Number badge with a small "count-up" scale bounce (1 → 1.15 → 1) the first
 * time it scrolls into view — used on the pathway stops and "what to expect"
 * steps. Reduced motion is neutralized globally by the app-root <MotionConfig>
 * (scale is a transform, so it simply renders static).
 */
export default function CountBadge({ children, className = '' }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ scale: 1 }}
      whileInView={{ scale: [1, 1.15, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.span>
  );
}
