const { TopBar, Card, DataTable, StatusPill, Button, Tabs, SearchField, Tag, IconButton } = window.HSManagerDesignSystem_7bf991;

function InspectionsScreen({ user, onOpen }) {
  const [tab, setTab] = React.useState('All');
  const [q, setQ] = React.useState('');
  const [site, setSite] = React.useState(null);
  let rows = window.INSPECTIONS;
  if (tab === 'Failed') rows = rows.filter((r) => r.status === 'fail');
  if (tab === 'Pending sync') rows = rows.filter((r) => r.status === 'pending');
  if (site) rows = rows.filter((r) => r.site === site);
  if (q) rows = rows.filter((r) => (r.ref + r.template + r.inspector).toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <TopBar title="Inspections" subtitle={`${rows.length} of ${window.INSPECTIONS.length} reports`} user={user}
        actions={<><Button variant="outline" iconStart="download">Export CSV</Button><Button iconStart="add">New inspection</Button></>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: 28, display: 'grid', gap: 16, alignContent: 'start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <Tabs tabs={['All', 'Failed', 'Pending sync']} active={tab} onChange={setTab} />
          <SearchField width={280} placeholder="Search reports, templates, inspectors" value={q} onChange={(e) => setQ(e.target.value)} />
          <div style={{ display: 'flex', gap: 8, marginLeft: 'auto' }}>
            {window.SITES.map((s) => (
              <Tag key={s} selected={site === s} onClick={() => setSite(site === s ? null : s)} style={{ cursor: 'pointer' }}>{s}</Tag>
            ))}
          </div>
        </div>
        <Card padding={0}>
          <DataTable rows={rows} onRowClick={onOpen} columns={[
            { key: 'ref', header: 'Report', render: (r) => (
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{r.ref}</div>
                <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{r.template}</div>
              </div>) },
            { key: 'site', header: 'Site' },
            { key: 'inspector', header: 'Inspector' },
            { key: 'date', header: 'Completed', render: (r) => <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>{r.date}</span> },
            { key: 'score', header: 'Score', align: 'right', render: (r) => <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: r.score < 90 ? 'var(--fail-500)' : 'var(--text-strong)' }}>{r.score}%</span> },
            { key: 'status', header: 'Result', align: 'right', render: (r) => <StatusPill status={r.status} size="sm" /> },
            { key: 'x', header: '', width: 56, align: 'right', render: () => <IconButton icon="picture_as_pdf" label="Download PDF" size="sm" /> },
          ]} />
        </Card>
      </div>
    </>
  );
}

Object.assign(window, { InspectionsScreen });
