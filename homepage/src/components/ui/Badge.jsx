import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  neutral: ['var(--grey-100)', 'var(--navy-600)'],
  pass: ['var(--pass-50)', 'var(--green-700)'],
  fail: ['var(--fail-50)', 'var(--fail-600)'],
  warn: ['var(--warn-50)', 'var(--warn-600)'],
  info: ['var(--info-50)', 'var(--info-600)'],
  brand: ['var(--green-500)', '#fff'],
};

export function Badge({ tone = 'neutral', icon, size = 'md', children, style, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: bg, color: fg,
      padding: sm ? '2px 8px' : '4px 11px',
      borderRadius: 'var(--radius-pill)',
      fontSize: sm ? 'var(--text-micro)' : 'var(--text-caption)',
      fontWeight: 'var(--weight-bold)', letterSpacing: '.01em', lineHeight: 1.5,
      whiteSpace: 'nowrap', ...style,
    }} {...rest}>
      {icon && <Icon name={icon} size={sm ? 13 : 15} fill={1} />}
      {children}
    </span>
  );
}
