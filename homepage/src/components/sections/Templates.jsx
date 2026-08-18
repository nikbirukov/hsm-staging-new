import { motion } from 'framer-motion';
import { Tag } from '../ui/Tag.jsx';
import { Button } from '../ui/Button.jsx';
import { Icon } from '../ui/Icon.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const TEMPLATES = [
  'SEMA Racking Inspection', 'COSHH Risk Assessment', 'Daily Warehouse Walk', 'Fire Safety Audit',
  'Forklift Pre-Use Check', 'Fire Extinguisher Log', 'Manual Handling Assessment', 'Loading Bay Safety',
  'PPE Compliance Check', 'Cold Store Safety Audit', 'Site Induction Checklist', '+ 60 more',
];

export function Templates() {
  return (
    <section id="templates" style={{ padding: 'clamp(56px, 8vw, 104px) 0' }}>
      <div style={{
        maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)',
        display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: 'clamp(32px,5vw,64px)', alignItems: 'center',
      }} className="templates-grid">

        <Reveal y={26}>
          <div className="hsm-eyebrow" style={{ marginBottom: 12 }}>70+ HSE-aligned templates</div>
          <h2 style={{ fontSize: 'var(--text-display-sm)', letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-tight)', marginBottom: 18 }}>
            Never start an inspection from a blank page
          </h2>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', marginBottom: 28, maxWidth: '48ch' }}>
            Pre-built, HSE-aligned templates for every corner of your operation &mdash; from SEMA racking to COSHH. Deploy instantly, or drag-and-drop your own in minutes.
          </p>
          <Button variant="secondary" size="lg" pill iconEnd="arrow_forward">See All 70+ Checklists</Button>
        </Reveal>

        <Reveal delay={0.12} y={26}>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 10, padding: 28,
            background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)',
          }}>
            {TEMPLATES.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Tag style={t.startsWith('+') ? { background: 'var(--navy-800)', color: '#fff', border: '1px solid var(--navy-800)' } : undefined}>
                  {!t.startsWith('+') && <Icon name="checklist" size={15} color="var(--text-muted)" />}
                  {t}
                </Tag>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
