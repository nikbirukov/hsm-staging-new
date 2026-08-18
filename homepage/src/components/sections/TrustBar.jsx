import { Reveal } from '../ui/Reveal.jsx';
import { url } from '../../lib/paths.js';

const CLIENTS = [
  { name: 'GXO', file: 'gxo.png', width: 112 },
  { name: 'Zedify', file: 'zedify.png', width: 132 },
  { name: 'Smylies Exports', file: 'smylies.png', width: 146 },
  { name: 'Adidas Europe', file: 'adidas.png', width: 112 },
  { name: 'Storage Systems', file: 'storage-systems.png', width: 175 },
  { name: 'Transformers & Rectifiers', file: 'transformers.png', width: 196 },
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
            margin: '0 0 28px', textWrap: 'balance',
          }}>
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="trustbar-logos">
            {CLIENTS.map((c) => (
              <img
                key={c.name}
                className="trustbar-logo"
                src={url(`/logos/${c.file}`)}
                alt={c.name}
                width={c.width}
                height={34}
                loading="lazy"
                decoding="async"
                style={{ '--logo-w': `${c.width}px` }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
