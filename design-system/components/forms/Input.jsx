import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Input({ label, hint, error, iconStart, suffix, size = 'md', style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const h = size === 'lg' ? 'var(--control-h-lg)' : size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h-md)';
  return (
    <label htmlFor={uid} style={{ display: 'block', ...style }}>
      {label && <span style={{ display: 'block', marginBottom: 6, fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{label}</span>}
      <span style={{
        display: 'flex', alignItems: 'center', gap: 8, height: h, padding: '0 14px',
        background: 'var(--surface-card)', borderRadius: 'var(--radius-control)',
        border: `1px solid ${error ? 'var(--fail-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
        boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)',
        transition: 'var(--transition-control)',
      }}>
        {iconStart && <Icon name={iconStart} size={18} color="var(--text-muted)" />}
        <input
          id={uid}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, border: 0, outline: 'none', background: 'transparent', font: 'inherit', fontSize: 'var(--text-body)', color: 'var(--text-strong)' }}
          {...rest}
        />
        {suffix && <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{suffix}</span>}
      </span>
      {(hint || error) && <span style={{ display: 'block', marginTop: 6, fontSize: 'var(--text-caption)', color: error ? 'var(--fail-600)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </label>
  );
}
