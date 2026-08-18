export function DeviceChrome({ urlPath, children, style }) {
  return (
    <div className="device-chrome" style={{
      background: '#fff', borderRadius: 10, border: '0.8px solid #D0D0DE',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8), 0 1px 3px rgba(0,0,0,.08), var(--shadow-lg)',
      overflow: 'hidden', ...style,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, height: 32, padding: '0 10px',
        background: '#F5F5F8', borderBottom: '0.8px solid #E0E0EA',
      }}>
        <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FC5C57' }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FDBC40' }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#34C749' }} />
        </div>
        <div style={{
          flex: 1, textAlign: 'center', fontSize: 11, color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {urlPath}
        </div>
        <div style={{ width: 30, flexShrink: 0 }} aria-hidden="true" />
      </div>
      <div className="device-chrome-body">
        {children}
      </div>
    </div>
  );
}

export function StepRow({ num, children }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
      <span style={{
        flexShrink: 0, width: 20, height: 20, borderRadius: '50%', background: 'var(--navy-800)', color: '#fff',
        fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
      }}>
        {num}
      </span>
      <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)', lineHeight: 1.5 }}>
        {children}
      </div>
    </div>
  );
}

export function Breadcrumb({ items }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6,
      fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 18,
    }}>
      {items.map((item, i) => (
        <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ color: i === items.length - 1 ? 'var(--green-600)' : 'var(--text-muted)' }}>{item}</span>
          {i < items.length - 1 && <span style={{ color: 'var(--border-strong)' }}>&rsaquo;</span>}
        </span>
      ))}
    </div>
  );
}
