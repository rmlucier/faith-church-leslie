import { motion } from 'framer-motion';

/**
 * Visual placeholder for a photo James/Roy still needs to supply. Dashed
 * hunter border on kraft so it reads unmistakably as "not a real photo yet"
 * rather than a design choice. Not wrapped in ProposedString — the label is
 * already self-evidently a placeholder, not copy needing review.
 */
export default function PhotoNeeded({ label, aspect = '16/9', className = '' }) {
  return (
    <motion.div
      className={`bg-kraft border-2 border-dashed border-hunter rounded-sm flex flex-col items-center justify-center text-center p-6 ${className}`}
      style={{ aspectRatio: aspect }}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5A523C" strokeWidth="1.6" className="mb-3">
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <circle cx="12" cy="13" r="3.5" />
        <path d="M8 6l1.5-2h5L16 6" />
      </svg>
      <div className="font-body font-semibold text-xs uppercase tracking-[0.28em] text-hunter mb-2">
        Photo needed
      </div>
      <div className="font-display text-ink text-base leading-snug max-w-[260px]">
        {label}
      </div>
    </motion.div>
  );
}
