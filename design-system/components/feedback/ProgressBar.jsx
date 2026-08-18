import React from 'react';

export function ProgressBar({ value = 0, max = 100, tone = 'brand', label, height = 8, showValue = false, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const colour = { brand: 'var(--green-500)', warn: 'var(--warn-500)', fail: 'var(--fail-500)', navy: 'var(--navy-800)' }[tone];
  return (
    <div style={style}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 'var(--text-caption)', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)' }}>
          <span>{label}</span>{showValue && <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-strong)' }}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div style={{ height, borderRadius: 'var(--radius-pill)', background: 'var(--grey-200)', overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', borderRadius: 'var(--radius-pill)', background: colour, transition: 'width var(--dur-slow) var(--ease-standard)' }} />
      </div>
    </div>
  );
}
