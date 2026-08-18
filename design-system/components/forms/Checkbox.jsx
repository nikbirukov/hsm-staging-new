import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, description, checked, onChange, disabled, style, ...rest }) {
  return (
    <label style={{ display: 'flex', gap: 12, alignItems: description ? 'flex-start' : 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1, ...style }}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        width: 22, height: 22, flex: '0 0 22px', display: 'grid', placeItems: 'center',
        borderRadius: 7, transition: 'var(--transition-control)',
        background: checked ? 'var(--action-primary)' : 'var(--surface-card)',
        border: `1px solid ${checked ? 'var(--action-primary)' : 'var(--border-default)'}`,
        boxShadow: 'var(--shadow-xs)',
      }}>
        {checked && <Icon name="check" size={16} color="#fff" weight={600} />}
      </span>
      <span>
        <span style={{ display: 'block', fontSize: 'var(--text-body)', color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' }}>{label}</span>
        {description && <span style={{ display: 'block', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{description}</span>}
      </span>
    </label>
  );
}
