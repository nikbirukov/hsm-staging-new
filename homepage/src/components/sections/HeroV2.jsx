import { motion, useReducedMotion } from 'framer-motion';
import { Icon } from '../ui/Icon.jsx';
import { Button } from '../ui/Button.jsx';
import { PhoneFrame } from '../ui/DeviceFrames.jsx';
import { AnswerQuestionsScreen } from '../ui/AppScreens.jsx';
import { useResponsiveScale } from '../ui/useResponsiveScale.js';

const EASE = [0.2, 0.8, 0.2, 1];

/* Cinematic-hero pattern: the phone owns the centre, the wordmark passes
   behind it for depth, and proof cards float in front overlapping its edges. */

const PROOF = [
  {
    icon: 'photo_camera',
    title: 'Evidence attached',
    body: 'Bay 3 · GPS + 14:13',
    style: { top: '11%', left: '-14%' },
    float: -7,
    delay: 0.55,
  },
  {
    icon: 'picture_as_pdf',
    title: 'Report generated',
    body: 'Weekly H&S Check · PDF',
    style: { bottom: '16%', right: '-16%' },
    float: 6,
    delay: 0.7,
  },
];

function ProofCard({ icon, title, body, style, float, delay }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className="v2-proof"
      style={{ position: 'absolute', zIndex: 4, ...style }}
    >
      <motion.div
        animate={reduceMotion ? {} : { y: [0, float, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ display: 'flex', alignItems: 'center', gap: 11 }}
      >
        <span style={{
          width: 34, height: 34, borderRadius: 10, flexShrink: 0,
          background: 'rgba(18,183,29,.16)', border: '1px solid rgba(18,183,29,.32)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name={icon} size={17} color="var(--green-400)" fill={1} />
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', lineHeight: 1.25 }}>{title}</div>
          <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.55)', lineHeight: 1.3 }}>{body}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HeroV2() {
  const reduceMotion = useReducedMotion();
  const scale = useResponsiveScale();

  return (
    <section className="v2-hero">
      {/* Atmosphere: brand-green bloom behind the device, warm at the top-left. */}
      <div aria-hidden="true" className="v2-hero-glow" />

      <div className="v2-hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE }}
          className="v2-hero-copy"
        >
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff',
            fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.04,
            letterSpacing: 'var(--tracking-display)', margin: '0 0 20px',
          }}>
            Every inspection.<br />One app.
          </h1>

          <p style={{
            fontSize: 'var(--text-body-lg)', color: 'rgba(255,255,255,.68)',
            lineHeight: 'var(--leading-relaxed)', maxWidth: '38ch', margin: '0 0 32px',
          }}>
            Racking, forklift, fire door and MHE checks &mdash; turned into audit-ready
            PDF reports before you&rsquo;ve left the floor.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 26 }}>
            <Button variant="primary" size="lg" pill iconEnd="arrow_forward">Start Free 30-Day Trial</Button>
            <Button
              variant="outline" size="lg" pill iconStart="calendar_month"
              style={{
                background: 'transparent', border: '1px solid rgba(255,255,255,.26)', color: '#fff',
                '--btn-bg-hover': 'rgba(255,255,255,.1)', '--btn-border-hover': 'rgba(255,255,255,.48)', '--btn-shadow-hover': 'none',
              }}
            >
              Book a 20-Minute Demo
            </Button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 22px', fontSize: 'var(--text-body-sm)', color: 'rgba(255,255,255,.5)' }}>
            {['No card details', '70+ HSE-aligned templates', 'Works offline'].map((t) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <Icon name="check_circle" size={16} color="var(--green-400)" fill={1} />
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="v2-hero-stage">
          {/* Wordmark sits behind the device — the phone occludes its middle. */}
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="v2-wordmark"
          >
            HSM
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
            style={{ position: 'relative', zIndex: 3 }}
          >
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ borderRadius: 46, filter: 'drop-shadow(0 40px 60px rgba(0,0,0,.55))' }}
            >
              <PhoneFrame width={Math.round(268 * scale)}>
                <AnswerQuestionsScreen />
              </PhoneFrame>
            </motion.div>
          </motion.div>

          {PROOF.map((p) => (
            <ProofCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
