const { TopBar, StatCard, Card, DataTable, StatusPill, Button, Badge, ProgressBar, Icon, Alert } = window.HSManagerDesignSystem_7bf991;

function DashboardScreen({ user, onOpen, onGoto }) {
  const rows = window.INSPECTIONS.slice(0, 5);
  const bars = [['Mon', 18], ['Tue', 24], ['Wed', 21], ['Thu', 29], ['Fri', 26], ['Sat', 11], ['Sun', 6]];
  const max = 30;
  return (
    <>
      <TopBar title="Dashboard" subtitle="All sites · week commencing 4 May 2026" search user={user}
        actions={<Button iconStart="add">New inspection</Button>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: 28, display: 'grid', gap: 20, alignContent: 'start' }}>
        <Alert tone="warning" title="4 actions are overdue across 2 sites"
          action={<Button size="sm" variant="outline" onClick={() => onGoto('act')}>Review actions</Button>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          <StatCard label="Compliance score" value="94" unit="%" delta="+6 vs last month" icon="verified" />
          <StatCard label="Inspections this week" value="135" delta="+18 vs last week" icon="assignment_turned_in" />
          <StatCard label="Open actions" value="12" delta="4 overdue" deltaTone="down" icon="flag" />
          <StatCard label="Avg. completion" value="7:12" unit="min" delta="−1:40 vs last month" icon="timer" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 16 }}>
          <Card padding={24}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-h4)' }}>Inspections completed</h3>
                <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>Last 7 days, all sites</span>
              </div>
              <Badge tone="pass" icon="trending_up">+14%</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 150 }}>
              {bars.map(([d, v]) => (
                <div key={d} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ height: `${(v / max) * 120}px`, background: 'var(--green-500)', borderRadius: '8px 8px 4px 4px' }} />
                  <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', marginTop: 8 }}>{d}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card padding={24}>
            <h3 style={{ fontSize: 'var(--text-h4)', marginBottom: 18 }}>Compliance by site</h3>
            <div style={{ display: 'grid', gap: 16 }}>
              {[['Daventry DC', 91, 'brand'], ['Rugby Hub', 98, 'brand'], ['Manchester 2', 76, 'warn'], ['Avonmouth 3PL', 88, 'brand']].map(([s, v, t]) => (
                <ProgressBar key={s} label={s} value={v} showValue tone={t} />
              ))}
            </div>
          </Card>
        </div>
        <Card padding={0}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px 14px' }}>
            <h3 style={{ fontSize: 'var(--text-h4)' }}>Recent inspections</h3>
            <Button size="sm" variant="ghost" iconEnd="arrow_forward">View all</Button>
          </div>
          <DataTable rows={rows} onRowClick={onOpen} columns={[
            { key: 'ref', header: 'Report', render: (r) => <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{r.ref}</span> },
            { key: 'site', header: 'Site' },
            { key: 'inspector', header: 'Inspector' },
            { key: 'date', header: 'Completed', render: (r) => <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>{r.date}</span> },
            { key: 'status', header: 'Result', align: 'right', render: (r) => <StatusPill status={r.status} size="sm" /> },
          ]} />
        </Card>
      </div>
    </>
  );
}

Object.assign(window, { DashboardScreen });
