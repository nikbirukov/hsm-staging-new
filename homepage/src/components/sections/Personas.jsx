import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon.jsx';
import { Badge } from '../ui/Badge.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

const PERSONAS = [
  {
    tag: 'For QHSE & EHS Directors',
    title: 'Multi-site governance you can defend in an audit',
    points: [
      'Real-time dashboards across every site, region and template',
      'RIDDOR-ready incident workflows with a full evidence trail',
      'UK-based, ISO 27001 secure cloud storage',
    ],
    icon: 'monitoring',
    tone: 'navy',
  },
  {
    tag: 'For Warehouse & Logistics Managers',
    title: 'Inspections finished before the shift is',
    points: [
      'Voice-to-text notes &mdash; dictate hands-free, no typing on the floor',
      'Fully offline mode for cold storage and dead signal zones',
      'Instant PDF reports, no laptop or spreadsheet required',
    ],
    icon: 'bolt',
    tone: 'green',
  },
];

export function Personas() {
  return (
    <section style={{ padding: 'clamp(56px, 8vw, 104px) 0' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
            <div className="hsm-eyebrow" style={{ marginBottom: 12 }}>Built for both sides of the org chart</div>
            <h2 style={{ fontSize: 'var(--text-display-sm)', letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-tight)' }}>
              One platform. Two very different days.
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 24 }} className="personas-grid">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.1} y={26}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: EASE }}
                style={{
                  height: '100%', borderRadius: 'var(--radius-card)', padding: 32,
                  background: p.tone === 'navy' ? 'var(--surface-inverse)' : 'var(--surface-brand-soft)',
                  border: `1px solid ${p.tone === 'navy' ? 'rgba(255,255,255,.08)' : 'var(--green-200)'}`,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 'var(--radius-md)', marginBottom: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: p.tone === 'navy' ? 'rgba(255,255,255,.08)' : 'var(--green-500)',
                }}>
                  <Icon name={p.icon} size={24} color={p.tone === 'navy' ? '#fff' : '#fff'} fill={1} />
                </div>

                <Badge tone={p.tone === 'navy' ? 'neutral' : 'brand'} size="sm" style={p.tone === 'navy' ? { background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.85)' } : undefined}>
                  {p.tag}
                </Badge>

                <h3 style={{
                  fontSize: 'var(--text-h2)', margin: '16px 0 20px', lineHeight: 'var(--leading-snug)',
                  color: p.tone === 'navy' ? '#fff' : 'var(--text-strong)',
                }}>
                  {p.title}
                </h3>

                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {p.points.map((point) => (
                    <li key={point} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      fontSize: 'var(--text-body)', lineHeight: 'var(--leading-normal)',
                      color: p.tone === 'navy' ? 'rgba(255,255,255,.82)' : 'var(--text-body)',
                    }}>
                      <Icon name="check" size={18} color={p.tone === 'navy' ? 'var(--green-400)' : 'var(--green-600)'} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span dangerouslySetInnerHTML={{ __html: point }} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
