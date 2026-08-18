import React from 'react';

export function Card({ padding = 24, interactive = false, tone = 'default', children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' },
    sunken: { background: 'var(--grey-50)', border: '1px solid var(--border-subtle)' },
    brand: { background: 'var(--surface-brand-soft)', border: '1px solid var(--green-200)' },
    inverse: { background: 'var(--surface-inverse)', border: '1px solid rgba(255,255,255,.08)', color: 'rgba(255,255,255,.82)' },
  };
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        borderRadius: 'var(--radius-card)', padding,
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        cursor: interactive ? 'pointer' : undefined,
        ...tones[tone], ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
