import { Reveal } from '../ui/Reveal.jsx';

const CLIENTS = [
  { name: 'GXO', file: 'gxo.png', width: 112 },
  { name: 'Zedify', file: 'zedify.png', width: 132 },
  { name: 'Smylies Exports', file: 'smylies.png', width: 146 },
  { name: 'Adidas Europe', file: 'adidas.png', width: 112 },
  { name: 'Storage Systems', file: 'storage-systems.png', width: 175 },
  { name: 'Transformers &amp; Rectifiers', file: 'transformers.png', width: 196 },
];

export function TrustBar({ heading = 'Trusted by safety & operations teams at', borderBottom = true }) {
  return (
    <section style={{
      padding: '32px 0 56px',
      borderBottom: borderBottom ? '1px solid var(--border-subtle)' : 'none',
    }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <Reveal>
          <h2 style={{
            textAlign: 'center', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)',
            letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)',
            margin: '0 0 28px',
          }}>
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
            gap: '26px clamp(22px, 3vw, 38px)',
          }}>
            {CLIENTS.map((c) => (
              <img
                key={c.name}
                src={`/logos/${c.file}`}
                alt={c.name}
                width={c.width}
                style={{
                  height: 34, width: c.width, objectFit: 'contain', flexShrink: 0,
                  filter: 'grayscale(1) brightness(0) opacity(.34)',
                  transition: 'filter var(--dur-fast) var(--ease-standard)', cursor: 'default',
                }}
                onMouseOver={(e) => (e.currentTarget.style.filter = 'grayscale(1) brightness(0) opacity(.62)')}
                onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(1) brightness(0) opacity(.34)')}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
