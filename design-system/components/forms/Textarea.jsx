import React from 'react';

export function Textarea({ label, hint, rows = 4, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return (
    <label htmlFor={uid} style={{ display: 'block', ...style }}>
      {label && <span style={{ display: 'block', marginBottom: 6, fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{label}</span>}
      <textarea
        id={uid} rows={rows}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', padding: '12px 14px', resize: 'vertical',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)', color: 'var(--text-strong)',
          background: 'var(--surface-card)', borderRadius: 'var(--radius-control)', outline: 'none',
          border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
          boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)',
          transition: 'var(--transition-control)',
        }}
        {...rest}
      />
      {hint && <span style={{ display: 'block', marginTop: 6, fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
