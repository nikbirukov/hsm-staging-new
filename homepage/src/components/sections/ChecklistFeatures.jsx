import { Icon } from '../ui/Icon.jsx';
import { Reveal, RevealGroup, revealItem } from '../ui/Reveal.jsx';
import { motion } from 'framer-motion';

const FEATURES = [
  { icon: 'edit_note', title: 'Easy to record answers', body: 'Structured Yes / No / N-A and rating fields keep every answer consistent and audit-ready.' },
  { icon: 'route', title: 'Follows inspection procedures', body: 'Each checklist mirrors the real-world walk-through, question by question, section by section.' },
  { icon: 'assignment_turned_in', title: 'Instantly assign corrective actions', body: 'Flag a fail and route it straight to the right person &mdash; no separate spreadsheet needed.' },
  { icon: 'share', title: 'Instantly share photos with colleagues', body: 'Evidence attaches to the report in real time, visible to the whole team the moment it&rsquo;s captured.' },
];

export function ChecklistFeatures() {
  return (
    <section style={{ padding: '0 0 clamp(56px, 8vw, 104px)', background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'clamp(48px, 7vw, 72px) var(--gutter-page-lg) 0' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 40px' }}>
            <div className="hsm-eyebrow" style={{ marginBottom: 12 }}>Every checklist, built the same way</div>
            <h2 style={{ fontSize: 'var(--text-display-sm)', letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-tight)' }}>
              Consistent, evidence-backed, ready in seconds
            </h2>
          </div>
        </Reveal>

        <RevealGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 20 }} className="checklist-features-grid">
          {FEATURES.map((f) => (
            <motion.div key={f.title} variants={revealItem} style={{ textAlign: 'center' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-md)', margin: '0 auto 16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-brand-soft)',
              }}>
                <Icon name={f.icon} size={24} color="var(--green-600)" fill={1} />
              </div>
              <h3 style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-strong)', marginBottom: 6 }}>{f.title}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }} dangerouslySetInnerHTML={{ __html: f.body }} />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
