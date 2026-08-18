import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 'var(--control-h-sm)', padding: '0 14px', font: 'var(--text-body-sm)', icon: 16, gap: 6 },
  md: { height: 'var(--control-h-md)', padding: '0 20px', font: 'var(--text-body)', icon: 18, gap: 8 },
  lg: { height: 'var(--control-h-lg)', padding: '0 28px', font: 'var(--text-body-lg)', icon: 20, gap: 10 },
};

const VARIANTS = {
  primary: { background: 'var(--action-primary)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-xs)' },
  secondary: { background: 'var(--action-secondary)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-xs)' },
  outline: { background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-xs)' },
  ghost: { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent', boxShadow: 'none' },
  danger: { background: 'var(--fail-500)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-xs)' },
};

const HOVER = {
  primary: { background: 'var(--action-primary-hover)', boxShadow: 'var(--shadow-brand)' },
  secondary: { background: 'var(--action-secondary-hover)', boxShadow: 'var(--shadow-md)' },
  outline: { background: 'var(--grey-50)', borderColor: 'var(--border-strong)' },
  ghost: { background: 'var(--grey-100)' },
  danger: { background: 'var(--fail-600)' },
};

export function Button({
  variant = 'primary', size = 'md', pill = false, block = false,
  iconStart, iconEnd, disabled = false, type = 'button', children, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: block ? 'flex' : 'inline-flex', width: block ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding, fontSize: s.font,
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
        letterSpacing: '-.005em', whiteSpace: 'nowrap', cursor: disabled ? 'not-allowed' : 'pointer',
        borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-control)',
        transition: 'var(--transition-control)',
        opacity: disabled ? 0.45 : 1,
        transform: press && !disabled ? 'translateY(1px)' : hover && !disabled ? 'translateY(-1px)' : 'none',
        ...v,
        ...(hover && !disabled ? HOVER[variant] : null),
        ...style,
      }}
      {...rest}
    >
      {iconStart && <Icon name={iconStart} size={s.icon} />}
      {children}
      {iconEnd && <Icon name={iconEnd} size={s.icon} />}
    </button>
  );
}
