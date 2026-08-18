import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.2, 0.8, 0.2, 1];

const LAYOUT = [
  { rotate: -9, scale: 0.86, z: 1 },
  { rotate: -3, scale: 0.97, z: 2 },
  { rotate: 4, scale: 1.04, z: 3 },
  { rotate: 10, scale: 0.86, z: 1 },
];

export function PhoneShowcase({ images }) {
  const reduceMotion = useReducedMotion();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {images.map((img, i) => {
        const l = LAYOUT[i] || LAYOUT[LAYOUT.length - 1];
        return (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 44, rotate: l.rotate, scale: l.scale * 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: l.scale }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
            whileHover={{ scale: l.scale * 1.06, zIndex: 20, transition: { duration: 0.22, ease: EASE } }}
            style={{
              width: 'clamp(120px, 15vw, 176px)', marginLeft: i === 0 ? 0 : 'clamp(-56px, -7vw, -46px)',
              zIndex: l.z, position: 'relative', cursor: 'default',
              borderRadius: 30, boxShadow: l.z === 3 ? 'var(--shadow-xl)' : 'var(--shadow-lg)',
            }}
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              animate={reduceMotion ? {} : { y: [0, -9, 0] }}
              transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
              style={{ width: '100%', display: 'block', borderRadius: 30 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
