import React from 'react';
import { Icon } from '../core/Icon.jsx';

const OPTIONS = [
  { id: 'pass', label: 'Pass', colour: 'var(--pass-500)' },
  { id: 'fail', label: 'Fail', colour: 'var(--fail-500)' },
  { id: 'na', label: 'N/A', colour: 'var(--na-500)' },
];

export function ChecklistRow({ index, question, value, onChange, photos = 0, note, style }) {
  return (
    <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)', ...style }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)', paddingTop: 3, minWidth: 22 }}>{String(index).padStart(2, '0')}</span>
        <span style={{ flex: 1, fontSize: 'var(--text-body)', color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' }}>{question}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, paddingLeft: 34, flexWrap: 'wrap' }}>
        {OPTIONS.map((o) => {
          const on = value === o.id;
          return (
            <button key={o.id} onClick={() => onChange && onChange(o.id)} style={{
              minHeight: 'var(--tap-min)', padding: '0 18px', cursor: 'pointer',
              borderRadius: 'var(--radius-control)', fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-bold)',
              background: on ? o.colour : 'var(--surface-card)',
              color: on ? '#fff' : 'var(--text-muted)',
              border: `1px solid ${on ? o.colour : 'var(--border-default)'}`,
              transition: 'var(--transition-control)',
            }}>{o.label}</button>
          );
        })}
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginLeft: 4, color: photos ? 'var(--text-strong)' : 'var(--text-muted)', fontSize: 'var(--text-body-sm)' }}>
          <Icon name="photo_camera" size={18} />{photos || 'Add photo'}
        </span>
      </div>
      {note && <div style={{ marginTop: 10, marginLeft: 34, padding: '10px 12px', background: 'var(--grey-50)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-body-sm)', color: 'var(--text-body)' }}>{note}</div>}
    </div>
  );
}
