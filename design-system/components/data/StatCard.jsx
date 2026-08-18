import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Card } from '../core/Card.jsx';

export function StatCard({ label, value, unit, delta, deltaTone = 'up', icon, tone = 'default', style }) {
  const dcol = deltaTone === 'up' ? 'var(--green-600)' : deltaTone === 'down' ? 'var(--fail-500)' : 'var(--text-muted)';
  return (
    <Card padding={20} tone={tone} style={style}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
        {icon && <span style={{ display: 'grid', placeItems: 'center', width: 32, height: 32, borderRadius: 'var(--radius-sm)', background: 'var(--green-50)' }}><Icon name={icon} size={18} color="var(--green-600)" /></span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-sm)', lineHeight: 1, letterSpacing: 'var(--tracking-display)', color: 'var(--text-strong)' }}>{value}</span>
        {unit && <span style={{ fontSize: 'var(--text-body)', color: 'var(--text-muted)', fontWeight: 'var(--weight-semibold)' }}>{unit}</span>}
      </div>
      {delta && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8, fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: dcol }}>
          <Icon name={deltaTone === 'down' ? 'trending_down' : 'trending_up'} size={16} />{delta}
        </div>
      )}
    </Card>
  );
}
