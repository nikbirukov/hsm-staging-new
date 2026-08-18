import { motion, useReducedMotion } from 'framer-motion';

const EASE_STANDARD = [0.2, 0.8, 0.2, 1];

export function Reveal({ children, delay = 0, y = 20, duration = 0.6, once = true, style, ...rest }) {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : y;
  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: EASE_STANDARD }}
      style={style}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({ children, stagger = 0.08, ...rest }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_STANDARD } },
};
