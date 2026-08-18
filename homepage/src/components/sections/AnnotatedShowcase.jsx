import { motion, useReducedMotion } from 'framer-motion';
import { Icon } from '../ui/Icon.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { PhoneFrame } from '../ui/DeviceFrames.jsx';
import { AnnotatedFeatureScreen } from '../ui/AppScreens.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

// Three-layer elevation, translated from Stocketa's shadow philosophy into HSM's own
// navy-tinted ink (the same rgba(13,31,45,...) family already used across the token system)
// instead of importing a foreign blue tint.
const FLOAT_SHADOW = '0 4px 20px rgba(13,31,45,.12), inset 0 1px 1px rgba(255,255,255,.7), 0 1px 1px rgba(13,31,45,.08)';

const FEATURES = [
  {
    icon: 'mic',
    title: 'Voice-to-text dictation',
    body: 'Dictate inspection notes hands-free &mdash; no typing while wearing gloves or climbing racking.',
  },
  {
    icon: 'my_location',
    title: 'Verified visual evidence',
    body: 'Every photo is automatically GPS-stamped and time-stamped for a bulletproof audit trail.',
  },
  {
    icon: 'wifi_off',
    title: 'Offline in cold storage',
    body: 'Inspections keep running with zero signal &mdash; everything syncs the moment you’re back online.',
  },
];

const ANNOTATIONS = [
  { number: 1, icon: 'mic', label: 'Voice-to-text dictation', style: { top: '18%', left: -8 } },
  { number: 2, icon: 'my_location', label: 'GPS + time-stamped photos', style: { top: '46%', right: -18 } },
  { number: 3, icon: 'wifi_off', label: 'Works fully offline', style: { bottom: '12%', left: -10 } },
];

function FloatingAnnotation({ number, icon, label, style, delay }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="annotated-pin"
      style={{
        position: 'absolute', zIndex: 6, ...style,
        display: 'flex', alignItems: 'center', gap: 8,
        background: '#fff', borderRadius: 'var(--radius-lg)', padding: '9px 14px 9px 10px',
        boxShadow: FLOAT_SHADOW, maxWidth: 178,
      }}
    >
      <motion.div
        animate={reduceMotion ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 4.5 + number * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ display: 'flex', alignItems: 'center', gap: 8 }}
      >
        <span style={{
          width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
          background: 'var(--green-500)', color: '#fff', fontSize: 10, fontWeight: 800,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {number}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name={icon} size={14} color="var(--green-600)" />
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-strong)', lineHeight: 1.2 }}>{label}</span>
        </span>
      </motion.div>
    </motion.div>
  );
}

export function AnnotatedShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section style={{
      position: 'relative', overflow: 'hidden', padding: 'clamp(64px, 9vw, 112px) 0',
      background: 'radial-gradient(1200px 640px at 50% -8%, var(--green-50) 0%, rgba(234,251,235,0) 65%), var(--surface-page)',
    }}>
      <div style={{
        maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)',
        display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center',
      }} className="annotated-grid">

        <Reveal y={26} className="annotated-copy">
          <div className="hsm-eyebrow" style={{ marginBottom: 16 }}>See it in your hand</div>

          <h2
            className="hsm-display"
            style={{
              fontSize: 'clamp(30px, 4vw, 50px)', margin: '0 0 20px', maxWidth: '14ch',
              lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)',
              backgroundImage: 'linear-gradient(90deg, var(--green-600), var(--navy-800))',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}
          >
            Every detail, captured in the moment
          </h2>

          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', maxWidth: '48ch', margin: '0 0 40px' }}>
            No re-typing from a paper clipboard back at a desk. What&rsquo;s recorded on the floor is what lands in the report.
          </p>

          <div className="annotated-features" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {FEATURES.map((f) => (
              <div key={f.title} className="annotated-feature" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-md)', flexShrink: 0,
                  background: 'var(--surface-brand-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={f.icon} size={20} color="var(--green-600)" fill={1} />
                </span>
                <div>
                  <div style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)', marginBottom: 2 }}>{f.title}</div>
                  <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }} dangerouslySetInnerHTML={{ __html: f.body }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} y={26}>
          <div className="annotated-stage" style={{ position: 'relative', display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                borderRadius: 44,
                boxShadow: FLOAT_SHADOW.replace(/rgba\(13,31,45,\.12\)/, 'rgba(13,31,45,.18)'),
              }}
            >
              <PhoneFrame width={220}>
                <AnnotatedFeatureScreen />
              </PhoneFrame>
            </motion.div>

            {ANNOTATIONS.map((a, i) => (
              <FloatingAnnotation key={a.number} {...a} delay={0.2 + i * 0.12} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
