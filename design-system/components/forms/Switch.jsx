import React from 'react';

export function Switch({ checked, onChange, label, disabled, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1, ...style }}>
      <input type="checkbox" checked={!!checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 46, height: 27, borderRadius: 'var(--radius-pill)', padding: 3, display: 'flex',
        background: checked ? 'var(--action-primary)' : 'var(--grey-300)',
        transition: 'background-color var(--dur-base) var(--ease-standard)',
      }}>
        <span style={{
          width: 21, height: 21, borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-sm)',
          transform: checked ? 'translateX(19px)' : 'none',
          transition: 'transform var(--dur-base) var(--ease-standard)',
        }} />
      </span>
      {label && <span style={{ fontSize: 'var(--text-body)', color: 'var(--text-strong)' }}>{label}</span>}
    </label>
  );
}
