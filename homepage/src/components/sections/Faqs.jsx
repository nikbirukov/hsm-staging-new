import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Icon } from '../ui/Icon.jsx';
import { Reveal } from '../ui/Reveal.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

const CATEGORIES = ['All', 'Compliance', 'Platform', 'Security & data', 'Billing & account'];

/* Answers are the live site's own copy. Two obvious typos in the source are
   corrected here ("export the date" -> data, "a 60-days period" -> 60-day). */
const FAQS = [
  {
    cat: 'Compliance',
    q: 'Is HS Manager compliant with UK HSE regulations?',
    a: 'Yes. Our platform is built around the Health and Safety at Work etc. Act 1974, RIDDOR 2013, COSHH 2002, and the Management of Health and Safety at Work Regulations 1999. All incident forms are RIDDOR-ready and can be customised to current UK legislation.',
  },
  {
    cat: 'Platform',
    q: 'Can I inspect my entire facility?',
    a: 'Absolutely. Our library of 70+ pre-built checklists covers racking, MHE, forklift checks, fire safety, and environmental audits. Every template is fully customisable, allowing you to tailor the reporting process to the specific requirements of your warehouse or logistics hub.',
  },
  {
    cat: 'Platform',
    q: 'Can I create my own bespoke templates?',
    a: 'Yes. For unique assets or specific internal protocols, our intuitive drag-and-drop builder allows you to digitise bespoke inspections in minutes. This ensures every check meets your exact internal standards while maintaining a professional, audit-ready format.',
  },
  {
    cat: 'Platform',
    q: 'Does the app work offline?',
    a: 'Yes. The HS Manager app (iOS, Windows, and Android) is fully functional offline, essential for cold stores and loading bays. Completed inspections and photo evidence are saved securely to the device and automatically synced once connectivity is restored.',
  },
  {
    cat: 'Platform',
    q: 'How long does deployment take?',
    a: 'Most customers are operational within two hours. Our onboarding team will help configure your account, allowing you to deploy immediately using our 70+ HSE-aligned templates without any operational downtime.',
  },
  {
    cat: 'Security & data',
    q: 'What data security measures are in place?',
    a: 'All information is securely stored and backed up via the Amazon Cloud Platform, accredited to ISO 27001:2005, SSAE 16 Type II, and ISAE 3402 Type II standards. We do not store sensitive financial data, ensuring your corporate information remains protected.',
  },
  {
    cat: 'Security & data',
    q: 'What happens to our data if we cancel?',
    a: 'You retain absolute ownership of your data. Upon cancellation, you can export the data in PDF and CSV formats. We hold your data for a 60-day period before secure, permanent deletion.',
  },
  {
    cat: 'Billing & account',
    q: 'What happens after the 30-day trial?',
    a: 'Following your trial, you can subscribe at £20 per user, per month (billed annually). If you decide not to proceed, your access will expire automatically with no obligation and no manual action required to avoid charges.',
  },
  {
    cat: 'Billing & account',
    q: 'How do I reset my password?',
    a: 'To reset your login credentials, follow the steps below.',
    steps: [
      { t: 'Request a reset', d: 'On the website login page, enter your username or registered email and select ‘Reset Password’. A temporary password is sent to your inbox.' },
      { t: 'Update your credentials', d: 'Return to the login page and enter the temporary password. You’ll then be prompted to choose and confirm a new, secure password.' },
      { t: 'Synchronise the app', d: 'In the mobile app, open the side menu (top left) → Settings → Login Details, enter your new password, then Select ‘Test Connection’. Once three green ticks appear, press Save.' },
    ],
  },
];

function FaqRow({ item, index, isOpen, onToggle }) {
  const reduceMotion = useReducedMotion();
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div className="faq-row">
      <h3 style={{ margin: 0 }}>
        <button
          id={btnId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="faq-trigger"
        >
          <span className="faq-num">{String(index + 1).padStart(2, '0')}</span>
          <span className="faq-q">{item.q}</span>
          {/* Lucide, not a Material Symbols ligature — the ligature's text
              ("expand_more") leaks into this h3's text for crawlers. */}
          <span className="faq-chevron" aria-hidden="true">
            <ChevronDown size={19} strokeWidth={1.75} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.3, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-answer">
              <p style={{ margin: 0 }}>{item.a}</p>

              {item.steps && (
                <ol className="faq-steps">
                  {item.steps.map((s) => (
                    <li key={s.t}>
                      <strong>{s.t}.</strong> {s.d}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);
  const [cat, setCat] = useState('All');

  const visible = cat === 'All' ? FAQS : FAQS.filter((f) => f.cat === cat);

  const selectCat = (next) => {
    setCat(next);
    setOpenIndex(null);
  };

  return (
    <section id="faqs" className="faq-section">
      <div className="faq-inner">
        <Reveal y={22}>
          <div className="faq-aside">
            <h2 style={{
              fontSize: 'var(--text-display-sm)', letterSpacing: 'var(--tracking-display)',
              lineHeight: 'var(--leading-tight)', margin: '0 0 16px',
            }}>
              Questions, answered
            </h2>
            <p style={{
              fontSize: 'var(--text-body-lg)', color: 'var(--text-muted)',
              lineHeight: 'var(--leading-relaxed)', margin: '0 0 28px', maxWidth: '34ch',
            }}>
              The things QHSE and warehouse managers ask us before they roll it out across a site.
            </p>

            <div className="faq-contact">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Icon name="support_agent" size={20} color="var(--green-600)" fill={1} />
                <span style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }}>
                  Still need an answer?
                </span>
              </div>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 16px' }}>
                Talk it through with someone who knows the platform &mdash; not a sales script.
              </p>
              <a href="/book-platform-demo/" className="faq-contact-link">
                Book a 20-minute demo
                <Icon name="arrow_forward" size={16} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} y={22}>
          <div>
            <div className="faq-filters" role="group" aria-label="Filter questions by topic">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => selectCat(c)}
                  aria-pressed={cat === c}
                  className={`faq-pill${cat === c ? ' is-active' : ''}`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="faq-list">
              {visible.map((item) => {
                const realIndex = FAQS.indexOf(item);
                return (
                  <FaqRow
                    key={item.q}
                    item={item}
                    index={realIndex}
                    isOpen={openIndex === realIndex}
                    onToggle={() => setOpenIndex((i) => (i === realIndex ? null : realIndex))}
                  />
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
