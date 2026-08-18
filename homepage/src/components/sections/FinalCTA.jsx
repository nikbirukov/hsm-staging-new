import { Button } from '../ui/Button.jsx';
import { Reveal } from '../ui/Reveal.jsx';

export function FinalCTA() {
  return (
    <section style={{ padding: '0 0 clamp(56px, 8vw, 104px)' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <Reveal>
          <div className="finalcta-panel" style={{
            position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(40px, 7vw, 80px)', textAlign: 'center',
            background: 'var(--surface-inverse)',
          }}>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(600px 300px at 50% 0%, rgba(18,183,29,.22) 0%, rgba(18,183,29,0) 70%)',
            }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ color: '#fff', fontSize: 'var(--text-display-sm)', letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-tight)', margin: '0 0 16px' }}>
                Ready to retire the paper checklist?
              </h2>
              <p style={{ color: 'rgba(255,255,255,.72)', fontSize: 'var(--text-body-lg)', maxWidth: '52ch', margin: '0 auto 32px' }}>
                Join safety and operations teams across the UK running audit-ready inspections from day one.
              </p>
              <div className="finalcta-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                <Button variant="primary" size="lg" pill iconEnd="arrow_forward">Start Free 30-Day Trial</Button>
                <Button
                  variant="outline" size="lg" pill iconStart="calendar_month"
                  style={{
                    background: 'transparent', border: '1px solid rgba(255,255,255,.28)', color: '#fff',
                    '--btn-bg-hover': 'rgba(255,255,255,.1)', '--btn-border-hover': 'rgba(255,255,255,.5)', '--btn-shadow-hover': 'none',
                  }}
                >
                  Book a 20-Minute Demo
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
