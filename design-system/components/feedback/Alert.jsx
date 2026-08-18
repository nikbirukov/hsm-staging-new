import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  info: ['var(--info-50)', 'var(--info-500)', 'info'],
  success: ['var(--pass-50)', 'var(--pass-500)', 'check_circle'],
  warning: ['var(--warn-50)', 'var(--warn-500)', 'warning'],
  danger: ['var(--fail-50)', 'var(--fail-500)', 'report'],
};

export function Alert({ tone = 'info', title, children, action, style, ...rest }) {
  const [bg, accent, icon] = TONES[tone] || TONES.info;
  return (
    <div style={{
      display: 'flex', gap: 12, padding: 16, background: bg,
      borderRadius: 'var(--radius-md)', border: '1px solid rgba(13,31,45,.06)', ...style,
    }} {...rest}>
      <Icon name={icon} size={20} fill={1} color={accent} />
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)', marginBottom: children ? 3 : 0 }}>{title}</div>}
        {children && <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)' }}>{children}</div>}
      </div>
      {action}
    </div>
  );
}
