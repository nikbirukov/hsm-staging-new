import { motion } from 'framer-motion';
import { Nav } from './components/sections/Nav.jsx';
import { Icon } from './components/ui/Icon.jsx';
import { TrialForm } from './components/sections/TrialForm.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

const STEPS = [
  { title: 'Your sign-in link arrives by email', body: 'Usually within a minute.' },
  { title: 'Install the app on phone, tablet or Windows', body: 'One download from the App Store, Google Play or Microsoft Store.' },
  { title: 'Pick a template and walk the floor', body: 'Your first PDF report comes out at the end.' },
];

const SAMPLES = [
  { name: 'Racking Inspection', href: 'https://www.thehsmanager.co.uk/wp-content/uploads/2026/05/Acme-Logistics-_Racking-Inspection_7_5_2026.pdf' },
  { name: 'Forklift Pre-Start', href: 'https://www.thehsmanager.co.uk/wp-content/uploads/2026/05/Forklift-Pre-Start-Checklist-n.pdf' },
  { name: 'Daily H&amp;S Check', href: 'https://www.thehsmanager.co.uk/wp-content/uploads/2026/04/HSM-Check.pdf' },
];

const LOGOS = [
  { name: 'Adidas Europe', file: 'adidas.png', width: 76 },
  { name: 'GXO', file: 'gxo.png', width: 76 },
  { name: 'Smylies Exports', file: 'smylies.png', width: 92 },
  { name: 'Zedify', file: 'zedify.png', width: 86 },
];

function SectionLabel({ children, sub }) {
  return (
    <>
      <h2 style={{
        fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase', color: 'var(--text-strong)', margin: '0 0 4px',
      }}>
        {children}
      </h2>
      {sub && <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', margin: '0 0 20px' }}>{sub}</p>}
    </>
  );
}

function FreeTrialApp() {
  return (
    <>
      <Nav />

      <main style={{
        maxWidth: 660, margin: '0 auto',
        padding: 'calc(clamp(32px, 6vw, 56px) + 88px) var(--gutter-page) clamp(48px, 8vw, 72px)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 20,
            padding: '6px 14px', borderRadius: 'var(--radius-pill)',
            background: 'var(--surface-brand-soft)', border: '1px solid var(--green-200)',
            fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-bold)',
            letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--green-700)',
          }}>
            <Icon name="schedule" size={13} />
            30-day free trial
          </span>

          <h1 className="hsm-display" style={{ fontSize: 'clamp(30px, 5vw, 44px)', margin: '0 0 14px' }}>
            Your first audit-ready report,{' '}
            <span style={{ color: 'var(--green-600)' }}>in about 20 minutes.</span>
          </h1>

          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 30px' }}>
            Racking, forklift, fire door and MHE checks, turned into branded PDF reports on the spot.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <TrialForm />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ marginTop: 44 }}
        >
          <SectionLabel sub="About 20 minutes, start to finish.">What happens next</SectionLabel>
          <ol className="trial-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="trial-step-num" aria-hidden="true">{i + 1}</span>
                <strong>{s.title}</strong>
                <span className="trial-step-body">{s.body}</span>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.aside
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            marginTop: 36, padding: 'clamp(20px, 4vw, 26px)',
            background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <Icon name="lock" size={18} color="var(--navy-600)" fill={1} />
            <strong style={{ fontSize: 'var(--text-h4)', color: 'var(--text-strong)' }}>On a locked-down company device?</strong>
          </div>
          <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 18px' }}>
            If your IT policy blocks app installs, we&rsquo;ll show you the platform instead.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 20px', alignItems: 'center' }}>
            <a href="https://www.thehsmanager.co.uk/book-platform-demo/" className="trial-ghost-btn">
              <Icon name="calendar_month" size={17} />
              Book a 15-minute walkthrough
            </a>
            <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>
              or call{' '}
              <a href="tel:+443450179944" style={{ color: 'var(--text-strong)', fontWeight: 'var(--weight-bold)', textDecoration: 'none' }}>
                03450 17 99 44
              </a>
            </span>
          </div>
        </motion.aside>

        <motion.section
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ marginTop: 44 }}
        >
          <SectionLabel sub="No signup needed.">Real reports from the app</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {SAMPLES.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="trial-sample"
                aria-label={`${s.name.replace(/&amp;/g, '&')} — open sample PDF in a new tab`}
              >
                <Icon name="description" size={17} color="var(--green-600)" fill={1} />
                <span dangerouslySetInnerHTML={{ __html: s.name }} />
                <span className="trial-sample-tag">PDF</span>
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ marginTop: 44, paddingTop: 28, borderTop: '1px solid var(--border-subtle)' }}
        >
          <h2 style={{
            fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-caps)',
            textTransform: 'uppercase', color: 'var(--text-muted)', textAlign: 'center', margin: '0 0 18px',
          }}>
            Trusted by UK H&amp;S teams
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px 34px' }}>
            {LOGOS.map((l) => (
              <img
                key={l.name}
                src={`/logos/${l.file}`}
                alt={l.name}
                width={l.width}
                style={{ height: 24, width: l.width, objectFit: 'contain', filter: 'grayscale(1) brightness(0) opacity(.34)' }}
              />
            ))}
          </div>
        </motion.section>
      </main>

      <footer style={{
        background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)',
        padding: '28px 24px', fontSize: 'var(--text-caption)', color: 'var(--text-muted)',
      }}>
        <div style={{ maxWidth: 660, margin: '0 auto', textAlign: 'center', lineHeight: 1.7 }}>
          &copy; The HS Manager {new Date().getFullYear()}. A product developed by the Inventory Manager Ltd, Company No: 06381122.<br />
          <a href="https://www.thehsmanager.co.uk/terms-conditions">Terms and Conditions</a> &middot;{' '}
          <a href="https://www.thehsmanager.co.uk/privacy-policy">Privacy Policy</a> &middot;{' '}
          ISO 27001 &middot; UK Cloud Data &middot; GDPR Compliant
        </div>
      </footer>
    </>
  );
}

export default FreeTrialApp;
