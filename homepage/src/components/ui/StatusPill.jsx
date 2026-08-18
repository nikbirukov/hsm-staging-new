import React from 'react';
import { Icon } from './Icon.jsx';

const MAP = {
  pass: { label: 'Pass', icon: 'check_circle', bg: 'var(--pass-50)', fg: 'var(--green-700)', solid: 'var(--pass-500)' },
  fail: { label: 'Fail', icon: 'cancel', bg: 'var(--fail-50)', fg: 'var(--fail-600)', solid: 'var(--fail-500)' },
  na: { label: 'N/A', icon: 'remove_circle', bg: 'var(--na-50)', fg: 'var(--na-500)', solid: 'var(--na-500)' },
  open: { label: 'Open', icon: 'error', bg: 'var(--warn-50)', fg: 'var(--warn-600)', solid: 'var(--warn-500)' },
  overdue: { label: 'Overdue', icon: 'schedule', bg: 'var(--fail-50)', fg: 'var(--fail-600)', solid: 'var(--fail-500)' },
  resolved: { label: 'Resolved', icon: 'task_alt', bg: 'var(--pass-50)', fg: 'var(--green-700)', solid: 'var(--pass-500)' },
  synced: { label: 'Synced', icon: 'cloud_done', bg: 'var(--info-50)', fg: 'var(--info-600)', solid: 'var(--info-500)' },
  pending: { label: 'Pending sync', icon: 'cloud_sync', bg: 'var(--grey-100)', fg: 'var(--navy-600)', solid: 'var(--navy-400)' },
};

export function StatusPill({ status = 'pass', label, solid = false, size = 'md', style, ...rest }) {
  const s = MAP[status] || MAP.pass;
  const sm = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: sm ? '3px 9px' : '5px 12px', borderRadius: 'var(--radius-pill)',
      background: solid ? s.solid : s.bg, color: solid ? '#fff' : s.fg,
      fontSize: sm ? 'var(--text-micro)' : 'var(--text-caption)', fontWeight: 'var(--weight-bold)',
      whiteSpace: 'nowrap', ...style,
    }} {...rest}>
      <Icon name={s.icon} size={sm ? 14 : 16} fill={1} />
      {label || s.label}
    </span>
  );
}
