import { Icon } from '../ui/Icon.jsx';

/**
 * Presentational only at this stage — no submit handling or validation wired up.
 * Markup is kept form-correct (labels, autocomplete, required) so behaviour can
 * be added later without reworking the structure.
 */
export function DemoForm() {
  return (
    <div className="demo-card">
      <h2 style={{ fontSize: 'var(--text-h2)', margin: '0 0 6px' }}>Book your demo</h2>
      <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', margin: '0 0 24px' }}>
        We&rsquo;ll come back to you the same working day to fix a time.
      </p>

      <form>
        <div className="demo-row">
          <div className="demo-field">
            <label htmlFor="demo-first">First name</label>
            <input id="demo-first" name="firstName" type="text" autoComplete="given-name" className="hsm-input" required />
          </div>
          <div className="demo-field">
            <label htmlFor="demo-last">Last name</label>
            <input id="demo-last" name="lastName" type="text" autoComplete="family-name" className="hsm-input" required />
          </div>
        </div>

        <div className="demo-field">
          <label htmlFor="demo-email">Work email address</label>
          <input
            id="demo-email" name="email" type="email" inputMode="email"
            autoComplete="email" placeholder="you@yourcompany.co.uk" className="hsm-input" required
          />
        </div>

        <div className="demo-field">
          <label htmlFor="demo-phone">
            Phone <span className="demo-optional">optional</span>
          </label>
          <input
            id="demo-phone" name="phone" type="tel" inputMode="tel"
            autoComplete="tel" className="hsm-input"
          />
        </div>

        <div className="demo-field">
          <label htmlFor="demo-message">
            Anything specific you want to see? <span className="demo-optional">optional</span>
          </label>
          <textarea
            id="demo-message" name="message" rows={3} className="hsm-input"
            placeholder="e.g. SEMA racking inspections across three sites"
            style={{ resize: 'vertical', minHeight: 88 }}
          />
        </div>

        <label className="demo-consent">
          <input type="checkbox" name="consent" required />
          <span>
            I agree to The HS Manager&rsquo;s{' '}
            <a href="https://www.thehsmanager.co.uk/terms-conditions">Terms &amp; Conditions</a> and{' '}
            <a href="https://www.thehsmanager.co.uk/privacy-policy">Privacy Policy</a>.
          </span>
        </label>

        <button type="submit" className="hsm-submit" style={{ marginTop: 22 }}>
          Book my demo
          <Icon name="arrow_forward" size={20} />
        </button>
      </form>

      <p style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
        fontSize: 'var(--text-caption)', color: 'var(--text-muted)', margin: '16px 0 0',
      }}>
        <Icon name="lock" size={14} color="var(--green-600)" fill={1} />
        No card details, and we won&rsquo;t pass your details on.
      </p>
    </div>
  );
}
