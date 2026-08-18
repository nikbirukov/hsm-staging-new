const { SidebarNav, Logo, Icon, Badge } = window.HSManagerDesignSystem_7bf991;

const NAV = [
  { id: 'dash', label: 'Dashboard', icon: 'space_dashboard' },
  { id: 'insp', label: 'Inspections', icon: 'assignment_turned_in' },
  { id: 'act', label: 'Actions', icon: 'flag', count: 4 },
  { id: 'tpl', label: 'Templates', icon: 'library_books' },
  { id: 'sites', label: 'Sites & teams', icon: 'warehouse' },
  { id: 'set', label: 'Settings', icon: 'settings' },
];

const USER = { name: 'Sam Okoye', role: 'H&S Manager', initials: 'SO' };

function AppShell() {
  const [tab, setTab] = React.useState('dash');
  const [report, setReport] = React.useState(null);

  const open = (row) => setReport(row);
  const close = () => setReport(null);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--navy-800)' }}>
        <div style={{ padding: '22px 20px 6px' }}><Logo height={34} tone="white" basePath="../../assets" /></div>
        <SidebarNav
          items={NAV} active={tab} onSelect={(id) => { setTab(id); setReport(null); }}
          style={{ flex: 1 }}
          footer={(
            <div style={{ padding: '14px', borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--green-500)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 12.5, fontWeight: 700 }}>{USER.initials}</span>
              <div style={{ lineHeight: 1.25 }}>
                <div style={{ color: '#fff', fontSize: 'var(--text-body-sm)', fontWeight: 600 }}>{USER.name}</div>
                <div style={{ color: 'rgba(255,255,255,.5)', fontSize: 'var(--text-caption)' }}>{USER.role}</div>
              </div>
            </div>
          )}
        />
      </div>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {report
          ? <window.ReportScreen row={report} onBack={close} user={USER} />
          : tab === 'dash' ? <window.DashboardScreen user={USER} onOpen={open} onGoto={setTab} />
          : tab === 'insp' ? <window.InspectionsScreen user={USER} onOpen={open} />
          : tab === 'act' ? <window.ActionsScreen user={USER} />
          : <window.PlaceholderScreen tab={tab} user={USER} />}
      </main>
    </div>
  );
}

function PlaceholderScreen({ tab, user }) {
  const { TopBar, EmptyState, Button } = window.HSManagerDesignSystem_7bf991;
  const titles = { tpl: 'Templates', sites: 'Sites & teams', set: 'Settings' };
  return (
    <>
      <TopBar title={titles[tab]} subtitle="4 sites · 38 users" user={user} />
      <div style={{ flex: 1, display: 'grid', placeItems: 'center' }}>
        <EmptyState icon="construction" title={`${titles[tab]} is not part of this kit`}
          description="This screen was not supplied in the source material, so it is intentionally left blank rather than invented."
          action={<Button variant="outline">Back to dashboard</Button>} />
      </div>
    </>
  );
}

Object.assign(window, { AppShell, PlaceholderScreen, NAV, USER });
