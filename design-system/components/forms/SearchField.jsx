import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function SearchField({ placeholder = 'Search…', value, onChange, width = '100%', style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, width, height: 'var(--control-h-md)', padding: '0 14px',
      background: 'var(--surface-card)', borderRadius: 'var(--radius-pill)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)', transition: 'var(--transition-control)', ...style,
    }}>
      <Icon name="search" size={18} color="var(--text-muted)" />
      <input
        value={value} onChange={onChange} placeholder={placeholder}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ flex: 1, minWidth: 0, border: 0, outline: 'none', background: 'transparent', font: 'inherit', fontSize: 'var(--text-body)', color: 'var(--text-strong)' }}
        {...rest}
      />
    </span>
  );
}
