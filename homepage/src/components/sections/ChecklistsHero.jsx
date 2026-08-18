import { Reveal } from '../ui/Reveal.jsx';

const STATS = [
  { value: '70+', label: 'Ready-made checklists' },
  { value: '10', label: 'Compliance categories' },
  { value: '0', label: 'Setup or IT support needed' },
];

export function ChecklistsHero() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      paddingTop: 'calc(clamp(48px, 8vw, 96px) + 88px)', paddingBottom: 'clamp(48px, 7vw, 80px)',
      background: 'radial-gradient(1100px 520px at 50% -10%, var(--green-50) 0%, rgba(234,251,235,0) 60%), var(--surface-page)',
    }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)', textAlign: 'center' }}>
        <Reveal>
          <div className="hsm-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green-500)' }} />
            Explore the checklist library
          </div>
          <h1 className="hsm-display" style={{ fontSize: 'clamp(32px, 4.6vw, 54px)', margin: '0 auto 20px', maxWidth: '20ch' }}>
            See exactly how each checklist works
          </h1>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', maxWidth: '58ch', margin: '0 auto 40px' }}>
            What questions are covered, how many, and how to use them to get the best results &mdash; browse every HSE-aligned template before you ever open the app.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{
            display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(28px, 6vw, 56px)',
            paddingTop: 32, borderTop: '1px solid var(--border-subtle)',
          }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span className="hsm-display" style={{ fontSize: 36, color: 'var(--green-600)' }}>{s.value}</span>
                <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', maxWidth: '14ch', lineHeight: 'var(--leading-snug)', textAlign: 'left' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
