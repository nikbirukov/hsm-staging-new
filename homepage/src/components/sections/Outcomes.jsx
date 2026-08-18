import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon.jsx';
import { Button } from '../ui/Button.jsx';
import { Reveal, RevealGroup, revealItem } from '../ui/Reveal.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

const OUTCOMES = [
  {
    icon: 'mic',
    title: 'Finish audits up to 50% faster',
    body: 'Dictate inspections hands-free with voice-to-text notes &mdash; no typing while wearing gloves or climbing racking.',
  },
  {
    icon: 'my_location',
    title: 'Build a bulletproof audit trail',
    body: 'Every photo is automatically geotagged and time-stamped, so evidence stands up when HSE or an auditor asks for it.',
  },
  {
    icon: 'wifi_off',
    title: 'Never lose evidence, even offline',
    body: 'Full offline mode keeps inspections running in cold storage, basements and dead zones &mdash; everything syncs the moment signal returns.',
  },
  {
    icon: 'library_books',
    title: 'Skip the blank-page problem',
    body: '70+ HSE-aligned templates for SEMA racking, COSHH, fire safety and daily walks &mdash; or build your own in minutes.',
  },
  {
    icon: 'insights',
    title: 'See risk across every site, live',
    body: 'Real-time dashboards roll up every inspection, every site, into one governance view for multi-site leadership.',
  },
  {
    icon: 'fact_check',
    title: 'Close the loop on every issue',
    body: 'RIDDOR-ready incident and remediation workflows track a finding from flagged to fixed &mdash; automatically.',
  },
];

export function Outcomes() {
  return (
    <section style={{ padding: 'clamp(56px, 8vw, 104px) 0', background: 'var(--surface-card)' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
            <div className="hsm-eyebrow" style={{ marginBottom: 12 }}>From feature list to results</div>
            <h2 style={{ fontSize: 'var(--text-display-sm)', letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-tight)' }}>
              Every feature earns its place on the floor
            </h2>
          </div>
        </Reveal>

        <RevealGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 20 }} className="outcomes-grid">
          {OUTCOMES.map((o) => (
            <motion.div
              key={o.title}
              variants={revealItem}
              whileHover={{ y: -3, boxShadow: 'var(--shadow-lg)' }}
              transition={{ duration: 0.22, ease: EASE }}
              style={{
                borderRadius: 'var(--radius-card)', padding: 28,
                background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 'var(--radius-md)', marginBottom: 18,
                display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-brand-soft)',
              }}>
                <Icon name={o.icon} size={22} color="var(--green-600)" fill={1} />
              </div>
              <h3 style={{ fontSize: 'var(--text-h3)', color: 'var(--text-strong)', marginBottom: 8, lineHeight: 'var(--leading-snug)' }}>{o.title}</h3>
              <p style={{ fontSize: 'var(--text-body)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }} dangerouslySetInnerHTML={{ __html: o.body }} />
            </motion.div>
          ))}
        </RevealGroup>

        {/* Mid-funnel CTA: the stretch from the trust bar to the form builder
            previously had no way to convert. One primary action only — the
            dual-CTA decision already happens in the hero and the final close. */}
        <Reveal delay={0.1}>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
            marginTop: 'clamp(36px, 5vw, 52px)',
          }}>
            <Button variant="primary" size="lg" pill iconEnd="arrow_forward">
              Start Free 30-Day Trial
            </Button>
            <span style={{
              display: 'flex', alignItems: 'center', gap: 7,
              fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)',
            }}>
              <Icon name="lock" size={15} color="var(--green-600)" fill={1} />
              No card details &mdash; full platform access for 30 days
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
