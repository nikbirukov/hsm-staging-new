const { Button, Logo, Icon } = window.HSManagerDesignSystem_7bf991;

const NAV = ['Home', 'Checklists', 'Pricing', 'Free Trial', 'News & Blogs', 'Contact Us'];

function SiteHeader({ page, onNav }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(255,255,255,.86)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', gap: 32, height: 78 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }}><Logo height={42} basePath="../../assets" /></a>
        <nav style={{ display: 'flex', gap: 26, marginLeft: 12 }}>
          {NAV.map((n) => (
            <a key={n} href="#" onClick={(e) => { e.preventDefault(); onNav(n === 'Pricing' ? 'pricing' : 'home'); }}
              style={{ fontSize: 'var(--text-body-sm)', fontWeight: n === 'Free Trial' ? 700 : 500, color: n === 'Free Trial' ? 'var(--green-600)' : 'var(--text-body)', textDecoration: 'none' }}>{n}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="#" style={{ fontSize: 'var(--text-body-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>Login</a>
          <Button size="sm" pill iconEnd="arrow_forward">Get started free</Button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  const cols = [
    ['Product', ['Home', 'Checklists', 'Pricing', 'Free Trial']],
    ['Company', ['About Us', 'News & Blog', 'FAQs', 'Contact Us']],
    ['Legal', ['Terms and Conditions', 'Privacy Policy']],
  ];
  return (
    <footer style={{ background: 'var(--navy-800)', color: 'rgba(255,255,255,.6)', paddingTop: 72 }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 40, paddingBottom: 56 }}>
        <div>
          <Logo height={44} tone="white" basePath="../../assets" />
          <p style={{ marginTop: 18, fontSize: 'var(--text-body-sm)', maxWidth: 280 }}>
            Digital inspections, incident reporting and audit-ready evidence for UK warehousing, logistics and manufacturing.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            {['ISO 27001', 'UK Cloud Data', 'GDPR Compliant'].map((t) => (
              <span key={t} style={{ fontSize: 'var(--text-micro)', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '5px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.78)' }}>{t}</span>
            ))}
          </div>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <div style={{ color: '#fff', fontSize: 'var(--text-body-sm)', fontWeight: 700, marginBottom: 14 }}>{h}</div>
            <div style={{ display: 'grid', gap: 10 }}>
              {links.map((l) => <a key={l} href="#" style={{ fontSize: 'var(--text-body-sm)', color: 'rgba(255,255,255,.62)', textDecoration: 'none' }}>{l}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }}>
        <div className="wrap" style={{ padding: '22px 32px', fontSize: 'var(--text-caption)' }}>
          © The HS Manager 2026. A product developed by the Inventory Manager Ltd, Company No: 06381122.
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
