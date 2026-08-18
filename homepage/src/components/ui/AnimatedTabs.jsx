import { useState } from 'react';
import { motion } from 'framer-motion';

export function AnimatedTabs({ tabs, defaultTab, onChange, layoutId = 'tab-pill', size = 'md' }) {
  const [active, setActive] = useState(defaultTab || tabs[0]);
  const sm = size === 'sm';

  const select = (tab) => {
    setActive(tab);
    onChange?.(tab);
  };

  return (
    <div
      role="tablist"
      aria-label="Inspection template"
      className={`hsm-tabs${sm ? ' hsm-tabs--sm' : ''}`}
      style={{
        display: 'inline-flex', gap: 2, padding: 3, maxWidth: '100%',
        background: 'var(--grey-100)', borderRadius: 'var(--radius-pill)',
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={active === tab}
          onClick={() => select(tab)}
          style={{
            position: 'relative', zIndex: 1, cursor: 'pointer', whiteSpace: 'nowrap',
            padding: sm ? '5px 11px' : '7px 15px', borderRadius: 'var(--radius-pill)', minWidth: 0,
            fontFamily: 'inherit', fontSize: sm ? 'var(--text-micro)' : 'var(--text-caption)',
            fontWeight: 'var(--weight-semibold)',
            color: active === tab ? 'var(--text-strong)' : 'var(--text-muted)',
            transition: 'color var(--dur-fast) var(--ease-standard)',
          }}
        >
          {active === tab && (
            <motion.span
              layoutId={layoutId}
              transition={{ type: 'spring', stiffness: 500, damping: 36 }}
              style={{
                position: 'absolute', inset: 0, zIndex: -1,
                background: 'var(--surface-card)', borderRadius: 'var(--radius-pill)',
                boxShadow: 'var(--shadow-xs)',
              }}
            />
          )}
          {tab}
        </button>
      ))}
    </div>
  );
}
