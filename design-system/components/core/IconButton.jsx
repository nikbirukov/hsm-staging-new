import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon, variant = 'ghost', size = 'md', label, disabled, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const base = {
    ghost: { background: 'transparent', color: 'var(--text-muted)', border: '1px solid transparent' },
    outline: { background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border-default)' },
    solid: { background: 'var(--action-primary)', color: '#fff', border: '1px solid transparent' },
  }[variant];
  const hov = {
    ghost: { background: 'var(--grey-100)', color: 'var(--text-strong)' },
    outline: { background: 'var(--grey-50)' },
    solid: { background: 'var(--action-primary-hover)' },
  }[variant];
  return (
    <button
      type="button" aria-label={label} title={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: d, height: d, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-control)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, transition: 'var(--transition-control)',
        ...base, ...(hover && !disabled ? hov : null), ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={size === 'sm' ? 18 : 20} />
    </button>
  );
}
