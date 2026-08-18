import { Icon } from '../ui/Icon.jsx';
import { Button } from '../ui/Button.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const INCLUDED = [
  '70+ HSE-aligned inspection templates',
  'Unlimited inspections & offline mode',
  'Real-time dashboards & reporting',
  'RIDDOR-ready incident workflows',
];

export function PricingTeaser() {
  return (
    <section id="pricing" style={{ padding: '0 0 clamp(56px, 8vw, 104px)' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <Reveal>
          <div style={{
            borderRadius: 'var(--radius-card)', padding: 'clamp(32px, 5vw, 56px)',
            background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)',
            display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 40, alignItems: 'center',
          }} className="pricing-grid">
            <div className="pricing-teaser-copy">
              <div className="hsm-eyebrow" style={{ marginBottom: 12 }}>Simple, transparent pricing</div>
              <h2 style={{ fontSize: 'var(--text-h1)', marginBottom: 20 }}>No hidden fees. No sales games.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {INCLUDED.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Icon name="check_circle" size={18} color="var(--green-600)" fill={1} />
                    <span style={{ fontSize: 'var(--text-body)', color: 'var(--text-body)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pricing-teaser-price">
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
                <span style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-muted)' }}>&pound;</span>
                <span className="hsm-display" style={{ fontSize: 48 }}>20</span>
                <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>/user/mo</span>
              </div>
              <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', margin: '4px 0 20px' }}>billed annually</div>
              <Button variant="primary" size="lg" pill block>Start Free 30-Day Trial</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
