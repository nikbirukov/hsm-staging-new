import React from 'react';

export function RadioGroup({ label, options = [], value, onChange, name, direction = 'vertical', style }) {
  const gname = name || React.useId();
  return (
    <div style={style}>
      {label && <span style={{ display: 'block', marginBottom: 8, fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{label}</span>}
      <div style={{ display: 'flex', flexDirection: direction === 'horizontal' ? 'row' : 'column', gap: direction === 'horizontal' ? 20 : 10 }}>
        {options.map((o) => {
          const v = typeof o === 'string' ? o : o.value;
          const l = typeof o === 'string' ? o : o.label;
          const on = value === v;
          return (
            <label key={v} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
              <input type="radio" name={gname} checked={on} onChange={() => onChange && onChange(v)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
              <span style={{
                width: 20, height: 20, borderRadius: '50%', display: 'grid', placeItems: 'center',
                border: `1px solid ${on ? 'var(--action-primary)' : 'var(--border-default)'}`,
                background: 'var(--surface-card)', transition: 'var(--transition-control)',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: on ? 'var(--action-primary)' : 'transparent' }} />
              </span>
              <span style={{ fontSize: 'var(--text-body)', color: 'var(--text-strong)' }}>{l}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
