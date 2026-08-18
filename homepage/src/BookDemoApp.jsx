import { motion } from 'framer-motion';
import { Nav } from './components/sections/Nav.jsx';
import { TrustBar } from './components/sections/TrustBar.jsx';
import { Footer } from './components/sections/Footer.jsx';
import { Icon } from './components/ui/Icon.jsx';
import { DemoForm } from './components/sections/DemoForm.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

const AGENDA = [
  {
    icon: 'play_circle',
    title: 'A walkthrough, not a slide deck',
    body: 'We open the actual app and show the features that cut inspection admin time by up to 50%.',
  },
  {
    icon: 'forum',
    title: 'Your requirements, not a sales pitch',
    body: 'Straight answers about your sites, your shift patterns and what you already have in place.',
  },
  {
    icon: 'tune',
    title: 'Forms adapted to your process',
    body: 'See how the 70+ templates bend to match the way your team already inspects — or build one live.',
  },
  {
    icon: 'rocket_launch',
    title: 'Start the same day',
    body: 'Happy after the call? Your 30-day trial can begin straight away. No card details.',
  },
];

function BookDemoApp() {
  return (
    <>
      <Nav />

      <main style={{
        position: 'relative', overflow: 'hidden',
        paddingTop: 'calc(clamp(32px, 6vw, 64px) + 88px)', paddingBottom: 'clamp(56px, 8vw, 96px)',
        background: 'radial-gradient(1100px 520px at 20% -10%, var(--green-50) 0%, rgba(234,251,235,0) 62%), var(--surface-page)',
      }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
          <div className="demo-grid">

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <h1 className="hsm-display" style={{ fontSize: 'clamp(31px, 4.4vw, 48px)', margin: '0 0 18px', maxWidth: '16ch' }}>
                Book your 20-minute app demo
              </h1>
              <p style={{
                fontSize: 'var(--text-body-lg)', color: 'var(--text-body)',
                lineHeight: 'var(--leading-relaxed)', maxWidth: '46ch', margin: '0 0 36px',
              }}>
                A working walkthrough on your own processes &mdash; racking, MHE, fire doors, whatever your
                sites actually run. Twenty minutes, and you&rsquo;ll know if it fits.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: 36 }}>
                {AGENDA.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.12 + i * 0.07, ease: EASE }}
                    style={{ display: 'flex', gap: 15, alignItems: 'flex-start' }}
                  >
                    <span style={{
                      width: 40, height: 40, borderRadius: 'var(--radius-md)', flexShrink: 0,
                      background: 'var(--surface-brand-soft)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon name={a.icon} size={20} color="var(--green-600)" fill={1} />
                    </span>
                    <div>
                      <h2 style={{
                        fontSize: 'var(--text-body)', fontWeight: 'var(--weight-bold)',
                        color: 'var(--text-strong)', margin: '0 0 3px',
                      }}>
                        {a.title}
                      </h2>
                      <p style={{
                        fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)',
                        lineHeight: 'var(--leading-relaxed)', margin: 0,
                      }}>
                        {a.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="demo-form-col"
            >
              <DemoForm />
              <p style={{
                textAlign: 'center', fontSize: 'var(--text-body-sm)',
                color: 'var(--text-muted)', margin: '18px 0 0',
              }}>
                Rather just try it? <a href="/free-trial/">Start a free 30-day trial</a> &mdash; no call needed.
              </p>
            </motion.div>

          </div>
        </div>
      </main>

      <TrustBar heading="Trusted by industry leaders to keep their teams safe" borderBottom={false} />

      <Footer />
    </>
  );
}

export default BookDemoApp;
