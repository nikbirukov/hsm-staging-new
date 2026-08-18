const { Button, Card, Icon, Badge, RadioGroup } = window.HSManagerDesignSystem_7bf991;

const INCLUDED = [
  '70+ HSE-aligned checklist templates',
  'Drag-and-drop custom form builder',
  'Unlimited photo evidence with GPS stamps',
  'Offline inspections on iOS, Android and Windows',
  'Action tracking through to resolution',
  'Audit-ready PDF and CSV export',
  'UK-hosted data, ISO 27001 accredited',
];

function PricingSection({ onNav }) {
  return (
    <section className="sec" style={{ background: 'var(--grey-50)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <span className="hsm-eyebrow">Pricing</span>
          <h2 className="hsm-display" style={{ fontSize: 'var(--text-display-sm)', margin: '12px 0 16px' }}>One plan. Every feature. £20 per user, per month.</h2>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-muted)' }}>
            Billed annually, after a free 30-day trial. No card details needed to start, and access expires automatically if you decide not to proceed.
          </p>
          <Button size="lg" pill style={{ marginTop: 26 }} onClick={() => onNav && onNav('pricing')}>See full pricing</Button>
        </div>
        <Card padding={32}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 'var(--text-h3)', fontWeight: 700, color: 'var(--text-strong)' }}>Standard</span>
            <Badge tone="brand">30-day free trial</Badge>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, margin: '18px 0 22px' }}>
            <span className="hsm-display" style={{ fontSize: 'var(--text-display-md)' }}>£20</span>
            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>per user / month</span>
          </div>
          <div style={{ display: 'grid', gap: 11 }}>
            {INCLUDED.map((i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Icon name="check_circle" size={19} fill={1} color="var(--green-500)" />
                <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)' }}>{i}</span>
              </div>
            ))}
          </div>
          <Button block size="lg" style={{ marginTop: 26 }}>Create my free 30-day account</Button>
        </Card>
      </div>
    </section>
  );
}

function PricingPage({ onNav }) {
  return (
    <div>
      <section style={{ background: 'var(--navy-800)', padding: '80px 0 64px', textAlign: 'center', color: 'rgba(255,255,255,.72)' }}>
        <div className="wrap">
          <h1 className="hsm-display" style={{ fontSize: 'var(--text-display-md)', color: '#fff' }}>Straightforward pricing</h1>
          <p style={{ fontSize: 'var(--text-body-lg)', marginTop: 14 }}>Every feature, every checklist, every device — one per-user price.</p>
        </div>
      </section>
      <PricingSection onNav={onNav} />
    </div>
  );
}

Object.assign(window, { PricingSection, PricingPage });
