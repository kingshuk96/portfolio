import { motion } from 'framer-motion'

// Fade up — general purpose section/card reveal
export function FadeUp({ children, delay = 0, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

// Stagger container — parent that cascades children
export function StaggerContainer({ children, className = '', style = {}, stagger = 0.1, delayStart = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delayStart,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

// Stagger item — child of StaggerContainer
export function StaggerItem({ children, className = '', style = {}, slideFrom = 'bottom' }) {
  const variants = {
    bottom: {
      hidden: { opacity: 0, y: 28 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    },
    left: {
      hidden: { opacity: 0, x: -28 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.92 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    },
  }

  return (
    <motion.div variants={variants[slideFrom]} className={className} style={style}>
      {children}
    </motion.div>
  )
}

// Section tag — the `// section` amber labels
export function SectionTag({ children }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="font-mono text-[14px] text-accent mb-7 mt-0 tracking-[0.02em]"
    >
      {children}
    </motion.p>
  )
}
