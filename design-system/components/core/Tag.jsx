import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ children, onRemove, selected = false, style, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 12px', borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)',
      background: selected ? 'var(--navy-800)' : 'var(--surface-card)',
      color: selected ? '#fff' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--navy-800)' : 'var(--border-default)'}`,
      transition: 'var(--transition-control)', ...style,
    }} {...rest}>
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove" style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', display: 'flex', color: 'inherit', opacity: .6 }}>
          <Icon name="close" size={14} />
        </button>
      )}
    </span>
  );
}
