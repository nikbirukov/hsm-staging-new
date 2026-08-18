import { Icon } from '../ui/Icon.jsx';
import { Reveal, RevealGroup, revealItem } from '../ui/Reveal.jsx';
import { motion } from 'framer-motion';

const STANDARDS = [
  { code: 'HSE', label: 'Aligned to HSE guidance' },
  { code: 'SEMA', label: 'SEMA racking inspection standard' },
  { code: 'COSHH', label: 'COSHH assessment ready' },
  { code: 'RIDDOR', label: 'RIDDOR reporting workflows' },
  { code: 'ISO 27001', label: 'UK-based secure cloud storage' },
];

export function Compliance() {
  return (
    <section style={{ padding: '0 0 clamp(56px, 8vw, 104px)' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <Reveal>
          <div style={{
            borderRadius: 'var(--radius-card)', padding: 'clamp(28px, 4vw, 44px)',
            background: 'var(--surface-inverse)', boxShadow: 'var(--shadow-sm)',
            display: 'flex', flexDirection: 'column', gap: 32,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,.7)' }}>
              <Icon name="verified_user" size={20} color="var(--green-400)" fill={1} />
              <h2 style={{ margin: 0, fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'inherit' }}>
                Built for UK compliance from day one
              </h2>
            </div>

            <RevealGroup style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0,1fr))', gap: 16 }} className="compliance-grid">
              {STANDARDS.map((s) => (
                <motion.div key={s.code} variants={revealItem} style={{
                  borderRadius: 'var(--radius-lg)', padding: '18px 16px',
                  background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.09)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 6 }}>{s.code}</div>
                  <div style={{ fontSize: 'var(--text-caption)', color: 'rgba(255,255,255,.62)', lineHeight: 'var(--leading-normal)' }}>{s.label}</div>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
