import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { SearchField } from '../forms/SearchField.jsx';

export function TopBar({ title, subtitle, search = false, actions, user, style }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', gap: 20, height: 72, padding: '0 28px',
      background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)', ...style,
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-heading)' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{subtitle}</div>}
      </div>
      {search && <SearchField width={260} placeholder="Search inspections…" />}
      {actions}
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 16, borderLeft: '1px solid var(--border-subtle)' }}>
          <span style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--navy-800)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-bold)' }}>
            {user.initials}
          </span>
          <div style={{ lineHeight: 1.25 }}>
            <div style={{ fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{user.name}</div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{user.role}</div>
          </div>
          <Icon name="expand_more" size={18} color="var(--text-muted)" />
        </div>
      )}
    </header>
  );
}
