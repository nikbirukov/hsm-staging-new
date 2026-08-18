import { Logo } from '../ui/Logo.jsx';
import { Icon } from '../ui/Icon.jsx';

const COLUMNS = [
  { title: 'Product', links: ['Checklists', 'Pricing', 'Free Trial', 'Book a Demo', 'Mobile App'] },
  { title: 'Solutions', links: ['Transport & Logistics', 'Warehousing & 3PL', 'Manufacturing', 'Construction'] },
  { title: 'Resources', links: ['News & Blog', 'HSE Guidance', 'SEMA Compliance', 'Help Centre'] },
  { title: 'Company', links: ['About Us', 'Contact', 'Login'] },
];

export function Footer() {
  return (
    <footer style={{ background: 'var(--navy-900)', color: 'rgba(255,255,255,.6)', paddingTop: 'clamp(48px,7vw,80px)' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) repeat(4, minmax(0,1fr))', gap: 32, paddingBottom: 48 }} className="footer-grid">
          <div>
            <Logo tone="white" height={28} />
            <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-relaxed)', margin: '18px 0 0', maxWidth: '32ch' }}>
              Digital health &amp; safety inspection software for warehouse, logistics and industrial teams across the UK.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div style={{ color: '#fff', fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-bold)', marginBottom: 16 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <a key={link} href="#" style={{ fontSize: 'var(--text-body-sm)', color: 'rgba(255,255,255,.55)' }}>{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,.08)', padding: '20px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: 'var(--text-caption)' }}>&copy; {new Date().getFullYear()} The HS Manager. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 6 }}>
            {['language', 'mail', 'phone_iphone'].map((icon) => (
              <span key={icon} style={{
                width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name={icon} size={16} color="rgba(255,255,255,.6)" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
