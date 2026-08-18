import React from 'react';

export function DataTable({ columns = [], rows = [], onRowClick, dense = false, style }) {
  return (
    <div style={{ overflowX: 'auto', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-body-sm)' }}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={{
                textAlign: c.align || 'left', padding: dense ? '10px 14px' : '12px 16px',
                fontSize: 'var(--text-micro)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
                color: 'var(--text-muted)', fontWeight: 'var(--weight-bold)',
                borderBottom: '1px solid var(--border-subtle)', whiteSpace: 'nowrap', width: c.width,
              }}>{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id || i}
              onClick={() => onRowClick && onRowClick(r)}
              style={{ cursor: onRowClick ? 'pointer' : undefined, transition: 'background-color var(--dur-fast) var(--ease-standard)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--grey-50)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              {columns.map((c) => (
                <td key={c.key} style={{
                  padding: dense ? '10px 14px' : '14px 16px', textAlign: c.align || 'left',
                  borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-body)', verticalAlign: 'middle',
                }}>{c.render ? c.render(r) : r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
