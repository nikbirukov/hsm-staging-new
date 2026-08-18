import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, options = [], hint, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return (
    <label htmlFor={uid} style={{ display: 'block', ...style }}>
      {label && <span style={{ display: 'block', marginBottom: 6, fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{label}</span>}
      <span style={{
        display: 'flex', alignItems: 'center', height: 'var(--control-h-md)', padding: '0 12px 0 14px',
        background: 'var(--surface-card)', borderRadius: 'var(--radius-control)',
        border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
        boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)', transition: 'var(--transition-control)',
      }}>
        <select
          id={uid} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, appearance: 'none', border: 0, outline: 'none', background: 'transparent', font: 'inherit', fontSize: 'var(--text-body)', color: 'var(--text-strong)', cursor: 'pointer' }}
          {...rest}
        >
          {options.map((o) => {
            const v = typeof o === 'string' ? o : o.value;
            const l = typeof o === 'string' ? o : o.label;
            return <option key={v} value={v}>{l}</option>;
          })}
        </select>
        <Icon name="expand_more" size={20} color="var(--text-muted)" />
      </span>
      {hint && <span style={{ display: 'block', marginTop: 6, fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
