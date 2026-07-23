import { motion } from 'framer-motion';

/**
 * Split-word headline reveal. Each word rises + fades in, staggered — a
 * restrained "settling into place" for the hero mission line. Word-level only
 * (never letter-by-letter). Reduced motion is handled globally by the app-root
 * <MotionConfig reducedMotion>, which neutralizes the y transform.
 *
 * Only works on plain strings (it splits on spaces). Non-string children are
 * rendered as-is — callers pass a string for the split effect.
 */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const word = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function HeadlineReveal({ text, className = '', as = 'h1' }) {
  const MotionTag = motion[as] || motion.h1;

  if (typeof text !== 'string') {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(' ');
  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          className="inline-block whitespace-pre"
          aria-hidden="true"
        >
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </MotionTag>
  );
}
