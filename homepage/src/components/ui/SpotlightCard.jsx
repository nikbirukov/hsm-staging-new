import { useRef } from 'react';

export function SpotlightCard({ children, style, className = '', spotlightColor = 'rgba(18,183,29,.14)', radius = 340, ...rest }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`.trim()}
      style={{ position: 'relative', overflow: 'hidden', isolation: 'isolate', ...style }}
      {...rest}
    >
      <div
        aria-hidden="true"
        className="spotlight-layer"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          background: `radial-gradient(${radius}px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </div>
  );
}
