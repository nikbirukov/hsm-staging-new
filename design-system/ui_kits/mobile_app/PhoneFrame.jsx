const { Icon } = window.HSManagerDesignSystem_7bf991;

function PhoneFrame({ children, label, dark = false }) {
  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
      <div style={{
        width: 320, height: 660, borderRadius: 44, padding: 10, background: 'var(--navy-900)',
        boxShadow: 'var(--shadow-lg)', flex: '0 0 auto',
      }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 35, overflow: 'hidden', background: dark ? 'var(--navy-800)' : 'var(--surface-page)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px 4px', fontSize: 12, fontWeight: 700, color: dark ? '#fff' : 'var(--text-strong)' }}>
            <span>09:41</span>
            <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              <Icon name="signal_cellular_alt" size={14} /><Icon name="wifi_off" size={14} /><Icon name="battery_full" size={14} />
            </span>
          </div>
          {children}
        </div>
      </div>
      {label && <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>}
    </div>
  );
}

function AppBar({ title, subtitle, back, onBack, action }) {
  const { IconButton } = window.HSManagerDesignSystem_7bf991;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px 12px', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
      {back ? <IconButton icon="arrow_back" label="Back" size="sm" onClick={onBack} /> : <IconButton icon="menu" label="Menu" size="sm" />}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 'var(--text-h4)', fontWeight: 700, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{subtitle}</div>}
      </div>
      {action}
    </div>
  );
}

function TabBar({ active = 'home', onSelect }) {
  const { Icon } = window.HSManagerDesignSystem_7bf991;
  const items = [['home', 'Home', 'home'], ['tpl', 'Templates', 'library_books'], ['sync', 'Sync', 'cloud_sync'], ['me', 'Account', 'person']];
  return (
    <div style={{ display: 'flex', background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)', paddingBottom: 8 }}>
      {items.map(([id, label, icon]) => (
        <button key={id} onClick={() => onSelect && onSelect(id)} style={{
          flex: 1, minHeight: 'var(--tap-min)', border: 0, background: 'none', cursor: 'pointer',
          display: 'grid', justifyItems: 'center', gap: 2, padding: '8px 0',
          color: active === id ? 'var(--green-600)' : 'var(--text-muted)',
        }}>
          <Icon name={icon} size={22} fill={active === id ? 1 : 0} />
          <span style={{ fontSize: 10.5, fontWeight: 700 }}>{label}</span>
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { PhoneFrame, AppBar, TabBar });
