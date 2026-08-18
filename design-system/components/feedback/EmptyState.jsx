import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function EmptyState({ icon = 'inbox', title, description, action, style }) {
  return (
    <div style={{ textAlign: 'center', padding: '48px 24px', ...style }}>
      <span style={{ display: 'inline-grid', placeItems: 'center', width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: 'var(--green-50)', marginBottom: 16 }}>
        <Icon name={icon} size={28} color="var(--green-600)" />
      </span>
      <div style={{ fontSize: 'var(--text-h4)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }}>{title}</div>
      {description && <div style={{ maxWidth: 380, margin: '6px auto 0', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{description}</div>}
      {action && <div style={{ marginTop: 20 }}>{action}</div>}
    </div>
  );
}
