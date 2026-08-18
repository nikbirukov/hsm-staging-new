const { Button, Card, Icon, Badge, StatusPill, Tag, StatCard } = window.HSManagerDesignSystem_7bf991;

function Placeholder({ label, height = 420, tone = 'navy', style }) {
  return (
    <div style={{
      height, borderRadius: 'var(--radius-card)', display: 'grid', placeItems: 'center', textAlign: 'center',
      background: tone === 'navy' ? 'var(--navy-800)' : 'var(--grey-100)',
      color: tone === 'navy' ? 'rgba(255,255,255,.5)' : 'var(--text-muted)',
      border: tone === 'navy' ? 'none' : '1px dashed var(--border-default)', ...style,
    }}>
      <div>
        <Icon name="image" size={28} />
        <div style={{ fontSize: 'var(--text-caption)', marginTop: 6, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 700 }}>{label}</div>
      </div>
    </div>
  );
}

function Hero({ onNav }) {
  return (
    <section style={{ background: 'linear-gradient(180deg, var(--green-50) 0%, #fff 62%)', paddingTop: 84, paddingBottom: 72 }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 56, alignItems: 'center' }}>
        <div>
          <span className="hsm-eyebrow">Warehousing · Logistics · Manufacturing · 3PL</span>
          <h1 className="hsm-display" style={{ fontSize: 'var(--text-display-md)', margin: '14px 0 18px' }}>
            Eliminate compliance risks with unified warehouse safety oversight.
          </h1>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-muted)', maxWidth: 520 }}>
            Replace fragmented manual inspections with a single source of truth. Protect your personnel, your facility, and your professional standing with The HS Manager.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
            <Button size="lg" pill iconEnd="arrow_forward">Get started for free</Button>
            <Button size="lg" pill variant="outline" iconStart="event">Book a 20-minute demo</Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 18, fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>
            <Icon name="check_circle" size={18} fill={1} color="var(--green-500)" />
            Start inspecting instantly — no card details needed.
          </div>
        </div>
        <Placeholder label="Hero — app on phone, tablet and laptop" height={420} />
      </div>
    </section>
  );
}

function LogoWall() {
  return (
    <section style={{ padding: '20px 0 56px' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, opacity: .5 }}>
        {['adidas', 'smylies', 'GXO', 'zedify', 'Storage Systems', 'Transformers'].map((c) => (
          <span key={c} style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy-500)', letterSpacing: '-.02em' }}>{c}</span>
        ))}
      </div>
    </section>
  );
}

const PROBLEMS = [
  ['description', 'Fragmented Data & Professional Liability', 'Manual reporting is flawed. Inaccurate notes and missing evidence create significant liability, wasting hours on reconciliation and risking non-compliance during HSE inspections.'],
  ['hourglass_top', 'The Cost of Operational Delays', 'Safety decisions are often stalled by protracted email chains. When hazard data remains trapped in inboxes rather than a dashboard, oversight is compromised, leading to remedial delays and unnecessary downtime.'],
  ['shuffle', 'Inconsistent Safety Standards', 'Inspection quality often varies between shifts or sites. This inconsistency undermines your safety culture, making it difficult to identify recurring risks across your warehouse and distribution network.'],
];

function ProblemSection() {
  return (
    <section className="sec" style={{ background: 'var(--grey-50)' }}>
      <div className="wrap">
        <div style={{ maxWidth: 720, marginBottom: 44 }}>
          <h2 className="hsm-display" style={{ fontSize: 'var(--text-display-sm)' }}>The hidden cost of manual administration</h2>
          <p style={{ marginTop: 14, fontSize: 'var(--text-body-lg)', color: 'var(--text-muted)' }}>
            Paper-based systems and disconnected spreadsheets compromise your response to risks. The HS Manager centralises safety data, ensuring every hazard is tracked, resolved, and audit-ready.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {PROBLEMS.map(([icon, title, body]) => (
            <Card key={title} padding={28}>
              <span style={{ display: 'grid', placeItems: 'center', width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--green-50)', marginBottom: 18 }}>
                <Icon name={icon} size={24} color="var(--green-600)" />
              </span>
              <h3 style={{ fontSize: 'var(--text-h4)', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  ['photo_camera', 'Verified Visual Evidence', 'High-resolution photo capture with mandatory date and GPS-stamping for absolute accountability and audit-readiness.'],
  ['cloud_off', 'Resilient Offline Functionality', 'Complete rigorous inspections in “dead zones” or cold storage; data auto-syncs the moment a connection is restored.'],
  ['rocket_launch', 'Frictionless Deployment', 'Minimal configuration ensures rapid site-wide adoption across multiple facilities with zero operational downtime.'],
  ['monitoring', 'Strategic Compliance Oversight', 'Use live dashboards to identify recurring risks and site failings before they escalate into serious incidents.'],
];

function FeatureSplit() {
  return (
    <section className="sec">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 56, alignItems: 'center' }}>
        <Placeholder label="Racking inspection in the app" height={460} tone="grey" />
        <div>
          <h2 className="hsm-display" style={{ fontSize: 'var(--text-display-sm)', marginBottom: 28 }}>Driving consistency across audits and daily inspections</h2>
          <div style={{ display: 'grid', gap: 22 }}>
            {FEATURES.map(([icon, t, b]) => (
              <div key={t} style={{ display: 'flex', gap: 16 }}>
                <span style={{ display: 'grid', placeItems: 'center', width: 42, height: 42, flex: '0 0 42px', borderRadius: 'var(--radius-sm)', background: 'var(--navy-800)' }}>
                  <Icon name={icon} size={21} color="#fff" />
                </span>
                <div>
                  <div style={{ fontSize: 'var(--text-h4)', fontWeight: 700, color: 'var(--text-strong)' }}>{t}</div>
                  <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 4 }}>{b}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="secondary" pill iconStart="play_circle" style={{ marginTop: 30 }}>Watch 2-minute intro video</Button>
        </div>
      </div>
    </section>
  );
}

const CATEGORIES = [
  ['forklift', 'Operational & MHE', 'Forklift and MHE pre-use checks, daily handovers, and lifting operations (LOLER).'],
  ['local_fire_department', 'Compliance & Safety', 'Weekly fire safety, COSHH assessments, and SEMA-aligned racking inspections.'],
  ['emergency', 'Incident Management', 'RIDDOR-ready accident logs, near-miss reports, and contractor inductions.'],
  ['fact_check', 'Audit Readiness', 'Daily site walk-throughs, weekly safety audits, and environmental inspections.'],
];

function ChecklistSection() {
  return (
    <section className="sec" style={{ background: 'var(--navy-800)', color: 'rgba(255,255,255,.72)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <h2 className="hsm-display" style={{ fontSize: 'var(--text-display-sm)', color: '#fff' }}>Built for UK warehouses, logistics &amp; manufacturing</h2>
            <p style={{ marginTop: 16, fontSize: 'var(--text-body-lg)' }}>
              70+ pre-loaded HSE-aligned checklists, or create bespoke templates via our drag-and-drop form builder.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
              {['Racking', 'Forklift', 'Fire safety', 'COSHH', 'LOLER', 'Environmental', 'Contractor induction'].map((t) => (
                <span key={t} style={{ padding: '7px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(255,255,255,.18)', fontSize: 'var(--text-body-sm)' }}>{t}</span>
              ))}
            </div>
            <Button pill iconEnd="arrow_forward" style={{ marginTop: 28 }}>See all 70+ checklists</Button>
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            {CATEGORIES.map(([icon, t, b]) => (
              <div key={t} style={{ display: 'flex', gap: 14, padding: 18, borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)' }}>
                <Icon name={icon} size={22} color="var(--green-400)" />
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 'var(--text-body)' }}>{t}</div>
                  <div style={{ fontSize: 'var(--text-body-sm)', marginTop: 3 }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const QUOTES = [
  ['This platform has streamlined our inspections, recording compliance tasks accurately. We have improved efficiency and transparency throughout our warehouse operations.', 'Sohail Shabbir', 'Adidas — Europe'],
  ['HS Manager transformed our monthly racking inspections. The system has improved efficiency and makes reporting significantly faster.', 'Chris Hills', 'A-Z Rack Inspections'],
  ['The app keeps our busy warehouse compliant. The structured checklists and digital signoffs ensure consistent, audit-ready inspections.', 'Mike Thomas', 'Smylies Exports'],
];

function Testimonials() {
  return (
    <section className="sec">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {QUOTES.map(([q, n, c]) => (
            <Card key={n} padding={28}>
              <Icon name="format_quote" size={28} color="var(--green-500)" />
              <p style={{ fontSize: 'var(--text-body)', color: 'var(--text-strong)', margin: '10px 0 20px' }}>{q}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--border-subtle)', paddingTop: 16 }}>
                <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--navy-800)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 700 }}>{n.split(' ').map(w => w[0]).join('')}</span>
                <div>
                  <div style={{ fontSize: 'var(--text-body-sm)', fontWeight: 700, color: 'var(--text-strong)' }}>{n}</div>
                  <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{c}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ['Create your free account', 'Gain full platform access in under five minutes with no credit card required or commitment.'],
  ['Equip your team', 'Install the app on any device (iOS, Android, Windows) to eliminate manual paperwork and ensure real-time reporting.'],
  ['Generate professional reports', 'Utilise our 70+, HSE-aligned checklists to produce comprehensive, audit-ready PDF reports from day one.'],
];

function StepsSection() {
  return (
    <section className="sec" style={{ background: 'var(--grey-50)' }}>
      <div className="wrap">
        <h2 className="hsm-display" style={{ fontSize: 'var(--text-display-sm)', textAlign: 'center', marginBottom: 44 }}>Go live in 3 simple steps</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {STEPS.map(([t, b], i) => (
            <Card key={t} padding={28}>
              <span className="hsm-display" style={{ fontSize: 40, color: 'var(--green-500)' }}>{i + 1}</span>
              <h3 style={{ fontSize: 'var(--text-h4)', margin: '10px 0 8px' }}>{t}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{b}</p>
            </Card>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Button size="lg" pill iconEnd="arrow_forward">Start your free 30-day trial</Button>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ['Is HS Manager compliant with UK HSE regulations?', 'Yes. Our platform is built around the Health and Safety at Work etc. Act 1974, RIDDOR 2013, COSHH 2002, and the Management of Health and Safety at Work Regulations 1999. All incident forms are RIDDOR-ready and can be customised to current UK legislation.'],
  ['Does the app work offline?', 'Yes. The HS Manager app (iOS, Windows, and Android) is fully functional offline, essential for cold stores and loading bays. Completed inspections and photo evidence are saved securely to the device and automatically synced once connectivity is restored.'],
  ['How long does deployment take?', 'Most customers are operational within two hours. Our onboarding team will help configure your account, allowing you to deploy immediately using our 70+ HSE-aligned templates without any operational downtime.'],
  ['What happens to our data if we cancel?', 'You retain absolute ownership of your data. Upon cancellation, you can export the data in PDF and CSV formats. We hold your data for a 60-day period before secure, permanent deletion.'],
];

function FaqSection() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="sec">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <h2 className="hsm-display" style={{ fontSize: 'var(--text-display-sm)', marginBottom: 32 }}>Frequently asked questions</h2>
        <div style={{ display: 'grid', gap: 10 }}>
          {FAQS.map(([q, a], i) => (
            <div key={q} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 16, padding: '18px 22px', background: 'none', border: 0, cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ flex: 1, fontSize: 'var(--text-body-lg)', fontWeight: 700, color: 'var(--text-strong)' }}>{q}</span>
                <Icon name={open === i ? 'remove' : 'add'} size={22} color="var(--green-600)" />
              </button>
              {open === i && <p style={{ padding: '0 22px 20px', fontSize: 'var(--text-body)', color: 'var(--text-muted)' }}>{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Placeholder, Hero, LogoWall, ProblemSection, FeatureSplit, ChecklistSection, Testimonials, StepsSection, FaqSection });
