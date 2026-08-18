import React from 'react';

export function Tabs({ tabs = [], active, onChange, style }) {
  return (
    <div style={{ display: 'flex', gap: 4, padding: 4, background: 'var(--grey-100)', borderRadius: 'var(--radius-pill)', ...style }}>
      {tabs.map((t) => {
        const id = typeof t === 'string' ? t : t.id;
        const label = typeof t === 'string' ? t : t.label;
        const on = id === active;
        return (
          <button key={id} onClick={() => onChange && onChange(id)} style={{
            border: 0, cursor: 'pointer', padding: '8px 18px', borderRadius: 'var(--radius-pill)',
            background: on ? 'var(--surface-card)' : 'transparent',
            color: on ? 'var(--text-strong)' : 'var(--text-muted)',
            boxShadow: on ? 'var(--shadow-sm)' : 'none',
            fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)',
            transition: 'var(--transition-control)',
          }}>{label}</button>
        );
      })}
    </div>
  );
}
