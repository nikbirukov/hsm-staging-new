import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Icon } from '../ui/Icon.jsx';

const EASE = [0.2, 0.8, 0.2, 1];
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];

const ASSURANCES = [
  'No card details',
  'Cancel any time',
  'UK-hosted, ISO 27001',
];

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function TrialForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | sent
  const [utm, setUtm] = useState({});
  const inputRef = useRef(null);
  const startedRef = useRef(false);
  const viewSentRef = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    setUtm(Object.fromEntries(UTM_KEYS.map((k) => [k, q.get(k) || ''])));
    window.dataLayer = window.dataLayer || [];
    if (viewSentRef.current) return;
    viewSentRef.current = true;
    window.dataLayer.push({ event: 'trial_page_view' });
  }, []);

  const onChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(null);
    if (!startedRef.current) {
      startedRef.current = true;
      window.dataLayer?.push({ event: 'trial_form_start' });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!email.trim()) {
      setError('Enter your work email address so we can send your sign-in link.');
      inputRef.current?.focus();
      return;
    }
    if (!isValidEmail(email)) {
      setError('That email address doesn’t look right — check for a typo and try again.');
      inputRef.current?.focus();
      return;
    }

    setStatus('submitting');
    window.dataLayer?.push({ event: 'trial_form_submit' });
    // Wire to the real trial endpoint here; the UTM fields below travel with it.
    window.setTimeout(() => setStatus('sent'), 900);
  };

  if (status === 'sent') {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="trial-card"
        role="status"
        aria-live="polite"
      >
        <span style={{
          width: 52, height: 52, borderRadius: '50%', marginBottom: 20,
          background: 'var(--surface-brand-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name="mark_email_read" size={26} color="var(--green-600)" fill={1} />
        </span>
        <h2 style={{ fontSize: 'var(--text-h2)', margin: '0 0 8px' }}>Check your inbox</h2>
        <p style={{ fontSize: 'var(--text-body)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 20px' }}>
          We&rsquo;ve sent a sign-in link to <strong style={{ color: 'var(--text-strong)' }}>{email.trim()}</strong>. It usually
          lands within a minute and stays valid for 7 days.
        </p>
        <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', margin: 0 }}>
          Nothing yet? Check spam, or{' '}
          <button
            type="button"
            onClick={() => { setStatus('idle'); setEmail(''); }}
            style={{
              cursor: 'pointer', color: 'var(--text-link)', fontWeight: 'var(--weight-semibold)',
              fontSize: 'inherit', fontFamily: 'inherit', textDecoration: 'underline', padding: 0,
            }}
          >
            try a different address
          </button>.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="trial-card">
      <h2 style={{ fontSize: 'var(--text-h2)', margin: '0 0 6px' }}>Create your free account</h2>
      <p style={{ fontSize: 'var(--text-body)', color: 'var(--text-muted)', margin: '0 0 24px' }}>
        We&rsquo;ll email your sign-in link straight away. One field &mdash; that&rsquo;s the whole form.
      </p>

      <form onSubmit={onSubmit} noValidate>
        <div style={{ marginBottom: 20 }}>
          <label
            htmlFor="trial-email"
            style={{
              display: 'block', fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)',
              color: 'var(--text-strong)', marginBottom: 8,
            }}
          >
            Work email address
          </label>
          <input
            ref={inputRef}
            id="trial-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@yourcompany.co.uk"
            value={email}
            onChange={onChange}
            disabled={status === 'submitting'}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? 'trial-email-error' : undefined}
            className="hsm-input"
          />
          <AnimatePresence>
            {error && (
              <motion.p
                id="trial-email-error"
                role="alert"
                initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 6, overflow: 'hidden',
                  fontSize: 'var(--text-body-sm)', color: 'var(--fail-600)', margin: '8px 0 0',
                }}
              >
                <Icon name="error" size={16} fill={1} style={{ flexShrink: 0, marginTop: 1 }} />
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {UTM_KEYS.map((k) => (
          <input key={k} type="hidden" name={k} value={utm[k] || ''} readOnly />
        ))}

        <button type="submit" className="hsm-submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <span className="hsm-spinner" aria-hidden="true" />
              Sending your link&hellip;
            </>
          ) : (
            <>
              Create my free account
              <Icon name="arrow_forward" size={20} />
            </>
          )}
        </button>
      </form>

      <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', textAlign: 'center', margin: '16px 0 0' }}>
        Any reports you produce during the trial are yours to keep.
      </p>

      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 20px',
        margin: '22px 0 0', paddingTop: 20, borderTop: '1px solid var(--border-subtle)',
      }}>
        {ASSURANCES.map((a) => (
          <span key={a} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>
            <Icon name="check_circle" size={15} color="var(--green-600)" fill={1} />
            {a}
          </span>
        ))}
      </div>

      <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 'var(--leading-normal)', margin: '16px 0 0' }}>
        By creating a free account you agree to our{' '}
        <a href="https://www.thehsmanager.co.uk/terms-conditions">Terms</a> and{' '}
        <a href="https://www.thehsmanager.co.uk/privacy-policy">Privacy Policy</a>.
      </p>
    </div>
  );
}
