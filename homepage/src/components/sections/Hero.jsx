import { motion } from 'framer-motion';
import { Button } from '../ui/Button.jsx';
import { Icon } from '../ui/Icon.jsx';
import { HeroDevices } from '../ui/HeroDevices.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

export function Hero() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      paddingTop: 'calc(clamp(48px, 8vw, 96px) + 88px)', paddingBottom: 'clamp(64px, 10vw, 120px)',
      background: 'radial-gradient(1100px 520px at 82% -10%, var(--green-50) 0%, rgba(234,251,235,0) 60%), var(--surface-page)',
    }}>
      <div style={{
        maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)',
        display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 'clamp(32px, 5vw, 64px)',
        alignItems: 'center',
      }} className="hero-grid">

        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="hsm-eyebrow"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-500)' }} />
            The UK&rsquo;s H&amp;S Inspection Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="hsm-display"
            style={{ fontSize: 'clamp(34px, 4.6vw, 56px)', margin: '0 0 20px' }}
          >
            Unified safety oversight, from the warehouse floor to the boardroom
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
            style={{ fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-body)', maxWidth: '52ch', margin: '0 0 32px' }}
          >
            Replace paper checklists and scattered spreadsheets with one digital inspection platform. Cut admin time by up to 50%, keep every site HSE-audit ready, and never lose evidence &mdash; even offline in cold storage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
            className="hero-actions"
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}
          >
            <Button variant="primary" size="lg" pill iconEnd="arrow_forward">Start Free 30-Day Trial</Button>
            <Button variant="outline" size="lg" pill iconStart="calendar_month">Book a 20-Minute Demo</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="hero-trust"
            style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px 18px', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="check_circle" size={16} color="var(--green-600)" fill={1} />No credit card required</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="bolt" size={16} color="var(--green-600)" fill={1} />Live in under a day</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="hero-visual"
        >
          <HeroDevices />
          <div style={{
            textAlign: 'center', marginTop: 4, display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 6, fontSize: 'var(--text-caption)', color: 'var(--text-muted)',
          }}>
            <Icon name="devices" size={14} color="var(--green-600)" fill={1} />
            Your dashboard and mobile app, working together
          </div>
        </motion.div>
      </div>
    </section>
  );
}
