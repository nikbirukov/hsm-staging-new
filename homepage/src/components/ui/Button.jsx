import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 'var(--control-h-sm)', padding: '0 14px', font: 'var(--text-body-sm)', icon: 16, gap: 6 },
  md: { height: 'var(--control-h-md)', padding: '0 20px', font: 'var(--text-body)', icon: 18, gap: 8 },
  lg: { height: 'var(--control-h-lg)', padding: '0 28px', font: 'var(--text-body-lg)', icon: 20, gap: 10 },
};

const VARIANTS = {
  primary: { '--btn-bg': 'var(--action-primary)', '--btn-bg-hover': 'var(--action-primary-hover)', '--btn-border': 'transparent', '--btn-shadow-hover': 'var(--shadow-brand)', color: '#fff' },
  secondary: { '--btn-bg': 'var(--action-secondary)', '--btn-bg-hover': 'var(--action-secondary-hover)', '--btn-border': 'transparent', '--btn-shadow-hover': 'var(--shadow-md)', color: '#fff' },
  outline: { '--btn-bg': 'var(--surface-card)', '--btn-bg-hover': 'var(--grey-50)', '--btn-border': 'var(--border-default)', '--btn-border-hover': 'var(--border-strong)', '--btn-shadow-hover': 'var(--shadow-xs)', color: 'var(--text-strong)' },
  ghost: { '--btn-bg': 'transparent', '--btn-bg-hover': 'var(--grey-100)', '--btn-border': 'transparent', '--btn-shadow-hover': 'none', color: 'var(--text-body)' },
  danger: { '--btn-bg': 'var(--fail-500)', '--btn-bg-hover': 'var(--fail-600)', '--btn-border': 'transparent', '--btn-shadow-hover': 'var(--shadow-xs)', color: '#fff' },
};

const Button = React.forwardRef(function Button({
  variant = 'primary', size = 'md', pill = false, block = false,
  iconStart, iconEnd, disabled = false, type = 'button', children, style, className, ...rest
}, ref) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`hsm-btn ${className || ''}`.trim()}
      style={{
        display: block ? 'flex' : 'inline-flex', width: block ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding, fontSize: s.font,
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
        letterSpacing: '-.005em', whiteSpace: 'nowrap', cursor: disabled ? 'not-allowed' : 'pointer',
        borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-control)',
        background: 'var(--btn-bg)', border: '1px solid var(--btn-border)', boxShadow: 'var(--shadow-xs)',
        opacity: disabled ? 0.45 : 1,
        ...v,
        ...style,
      }}
      {...rest}
    >
      {iconStart && <Icon name={iconStart} size={s.icon} />}
      {children}
      {iconEnd && <Icon name={iconEnd} size={s.icon} />}
    </button>
  );
});

export { Button };
