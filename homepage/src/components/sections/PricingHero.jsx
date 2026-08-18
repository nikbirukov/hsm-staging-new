import { Reveal } from '../ui/Reveal.jsx';

export function PricingHero() {
  return (
    <section style={{ padding: 'clamp(140px, 16vw, 176px) 0 clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <Reveal>
          <div className="hsm-eyebrow" style={{ marginBottom: 16 }}>Simple, transparent pricing</div>
          <h1 className="hsm-display" style={{ fontSize: 'var(--text-display-md)', margin: '0 auto 18px', maxWidth: '18ch' }}>
            One simple price plan
          </h1>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-body)', lineHeight: 'var(--leading-relaxed)', maxWidth: '52ch', margin: '0 auto' }}>
            Full access to every feature, with no hidden setup costs or long-term contracts. Everything you need to manage H&amp;S on the go.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
