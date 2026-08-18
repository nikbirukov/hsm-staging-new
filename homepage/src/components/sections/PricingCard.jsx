import { Icon } from '../ui/Icon.jsx';
import { Button } from '../ui/Button.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const BENEFITS = [
  '70+ HSE-aligned inspection templates',
  'ISO 27001 certified security',
  'No setup costs or contracts',
  'Dedicated technical support',
];

const FEATURES = [
  'Custom form builder',
  'Fully branded reports',
  'iOS, Android & Windows apps',
  'Online & offline mode',
  'GPS &amp; time-stamped photos',
  'Voice-to-text dictation',
  'Digital signatures',
  'CSV, Excel &amp; Word export',
  'Instant data sharing',
  'Teams &amp; Zoom training',
  'Action log tracking',
  'Corrective action PDFs',
];

export function PricingCard() {
  return (
    <section style={{ padding: '0 0 clamp(56px, 8vw, 104px)' }}>
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <Reveal>
          <div className="pricing-card-split" style={{
            borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-subtle)', display: 'flex',
          }}>
            {/* Left — price, benefits, CTA */}
            <div style={{
              flex: '0 0 50%', padding: 'clamp(32px, 4vw, 48px)', display: 'flex', flexDirection: 'column',
              background: 'linear-gradient(150deg, var(--navy-700) 0%, var(--navy-900) 100%)', color: '#fff', position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden="true" style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(420px 260px at 100% 0%, rgba(18,183,29,.28) 0%, rgba(18,183,29,0) 70%)',
              }} />
              <div style={{ position: 'relative' }}>
                <div style={{
                  fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-caps)',
                  textTransform: 'uppercase', color: 'var(--green-400)', marginBottom: 12,
                }}>
                  Professional plan
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                  <span className="hsm-display" style={{ fontSize: 48, color: '#fff' }}>&pound;20</span>
                  <span style={{ fontSize: 'var(--text-body-lg)', color: 'rgba(255,255,255,.72)' }}>+ VAT / user / month</span>
                </div>
                <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-relaxed)', color: 'rgba(255,255,255,.62)', margin: '0 0 28px' }}>
                  Annual billing applies to teams with fewer than 5 users. No UK VAT for international customers outside the EU.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                  {BENEFITS.map((b) => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Icon name="check_circle" size={18} color="var(--green-400)" fill={1} />
                      <span style={{ fontSize: 'var(--text-body-sm)', color: 'rgba(255,255,255,.88)' }}>{b}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <Button
                    variant="primary" size="lg" pill block iconEnd="arrow_forward"
                    style={{ background: '#fff', color: 'var(--navy-800)', '--btn-bg-hover': 'var(--grey-50)', '--btn-shadow-hover': 'var(--shadow-md)' }}
                  >
                    Start Your 30-Day Free Trial
                  </Button>
                  <p style={{ textAlign: 'center', fontSize: 'var(--text-caption)', color: 'rgba(255,255,255,.55)', margin: '14px 0 0' }}>
                    Two fields, no card details. That is the whole form.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — features */}
            <div style={{ flex: '0 0 50%', padding: 'clamp(32px, 4vw, 48px)', background: 'var(--surface-card)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: 'var(--text-h3)', margin: '0 0 20px' }}>Packed with everything you need</h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '10px 16px', marginBottom: 24 }} className="pricing-features-grid">
                {FEATURES.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon name="add" size={13} color="var(--green-600)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }} dangerouslySetInnerHTML={{ __html: f }} />
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
                <a href="/checklists/" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-link)',
                }}>
                  Browse all 70+ checklists
                  <Icon name="arrow_forward" size={15} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
