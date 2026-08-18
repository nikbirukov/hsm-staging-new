import { Icon } from '../ui/Icon.jsx';
import { Reveal, RevealGroup, revealItem } from '../ui/Reveal.jsx';
import { motion } from 'framer-motion';

const SAMPLES = [
  { name: 'Daily H&amp;S Check', tone: 'var(--green-500)', href: 'https://www.thehsmanager.co.uk/wp-content/uploads/2026/04/HSM-Check.pdf' },
  { name: 'ForkLift Pre-Start', tone: 'var(--navy-700)', href: 'https://www.thehsmanager.co.uk/wp-content/uploads/2026/05/Forklift-Pre-Start-Checklist-n.pdf' },
  { name: 'Racking Inspection', tone: 'var(--warn-500)', href: 'https://www.thehsmanager.co.uk/wp-content/uploads/2026/05/Acme-Logistics-_Racking-Inspection_7_5_2026.pdf' },
];

function ReportThumb({ tone }) {
  return (
    <div style={{
      borderRadius: 'var(--radius-md)', background: '#fff', border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)', overflow: 'hidden', marginBottom: 16,
    }}>
      <div style={{ height: 10, background: tone }} />
      <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ width: '70%', height: 8, borderRadius: 4, background: 'var(--grey-200)' }} />
        <div style={{ width: '45%', height: 6, borderRadius: 3, background: 'var(--grey-100)', marginBottom: 6 }} />
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, background: 'var(--grey-100)', flexShrink: 0 }} />
            <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'var(--grey-100)' }} />
          </div>
        ))}
        <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 22, height: 22, borderRadius: 4, background: 'var(--grey-50)', border: '1px solid var(--border-subtle)' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ReportSamples() {
  return (
    <section style={{ padding: 'clamp(56px, 8vw, 104px) 0' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 40px' }}>
            <div className="hsm-eyebrow" style={{ marginBottom: 12 }}>Audit-ready, every time</div>
            <h2 style={{ fontSize: 'var(--text-display-sm)', letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-tight)' }}>
              Generate reports like these in minutes
            </h2>
          </div>
        </Reveal>

        <RevealGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 20 }} className="report-samples-grid">
          {SAMPLES.map((s) => (
            <motion.a
              key={s.name} variants={revealItem}
              href={s.href} target="_blank" rel="noopener noreferrer"
              aria-label={`View ${s.name.replace(/&amp;/g, '&')} sample PDF (opens in a new tab)`}
              whileHover={{ y: -3, boxShadow: 'var(--shadow-lg)' }}
              transition={{ duration: 0.22 }}
              style={{
                display: 'block', borderRadius: 'var(--radius-card)', padding: 20,
                background: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)',
              }}
            >
              <ReportThumb tone={s.tone} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }} dangerouslySetInnerHTML={{ __html: s.name }} />
                  <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>Sample PDF report</div>
                </div>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36,
                    borderRadius: '50%', background: 'var(--surface-card)', border: '1px solid var(--border-default)', flexShrink: 0,
                  }}
                >
                  <Icon name="visibility" size={17} color="var(--text-strong)" />
                </span>
              </div>
            </motion.a>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
