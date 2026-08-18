import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Modal({ open = true, title, children, footer, onClose, width = 480, style }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 60, display: 'grid', placeItems: 'center', padding: 24,
      background: 'rgba(7,19,28,.55)', backdropFilter: 'blur(4px)',
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: '100%', maxWidth: width, background: 'var(--surface-card)',
        borderRadius: 'var(--radius-sheet)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden', ...style,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px 0' }}>
          <h3 style={{ fontSize: 'var(--text-h3)' }}>{title}</h3>
          {onClose && <IconButton icon="close" label="Close" onClick={onClose} />}
        </div>
        <div style={{ padding: '12px 24px 24px', fontSize: 'var(--text-body)', color: 'var(--text-body)' }}>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '16px 24px', background: 'var(--grey-50)', borderTop: '1px solid var(--border-subtle)' }}>{footer}</div>}
      </div>
    </div>
  );
}
