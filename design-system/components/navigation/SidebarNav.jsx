import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function SidebarNav({ items = [], active, onSelect, footer, width = 244, style }) {
  return (
    <nav style={{
      width, flex: `0 0 ${width}px`, background: 'var(--navy-800)', color: 'rgba(255,255,255,.7)',
      display: 'flex', flexDirection: 'column', padding: '20px 14px', gap: 4, ...style,
    }}>
      {items.map((it) => {
        const on = it.id === active;
        return (
          <button key={it.id} onClick={() => onSelect && onSelect(it.id)} style={{
            display: 'flex', alignItems: 'center', gap: 12, width: '100%', height: 44, padding: '0 14px',
            border: 0, cursor: 'pointer', textAlign: 'left',
            borderRadius: 'var(--radius-control)',
            background: on ? 'var(--green-500)' : 'transparent',
            color: on ? '#fff' : 'rgba(255,255,255,.72)',
            fontSize: 'var(--text-body)', fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
            transition: 'var(--transition-control)',
          }}>
            <Icon name={it.icon} size={20} fill={on ? 1 : 0} />
            <span style={{ flex: 1 }}>{it.label}</span>
            {it.count != null && (
              <span style={{ fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-bold)', padding: '2px 7px', borderRadius: 'var(--radius-pill)', background: on ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.1)' }}>{it.count}</span>
            )}
          </button>
        );
      })}
      <div style={{ marginTop: 'auto' }}>{footer}</div>
    </nav>
  );
}
