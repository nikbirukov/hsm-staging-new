const { TopBar, Card, DataTable, StatusPill, Button, Tabs, Badge, Modal, Select, Input, Textarea, EmptyState } = window.HSManagerDesignSystem_7bf991;

function ActionsScreen({ user }) {
  const [tab, setTab] = React.useState('Open');
  const [assign, setAssign] = React.useState(null);
  const all = window.ACTIONS;
  const rows = tab === 'All' ? all : tab === 'Open' ? all.filter((a) => a.status !== 'resolved') : all.filter((a) => a.status === 'resolved');

  return (
    <>
      <TopBar title="Actions" subtitle="Defects raised from failed inspection questions" user={user}
        actions={<Button variant="outline" iconStart="ios_share">Share report</Button>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: 28, display: 'grid', gap: 16, alignContent: 'start' }}>
        <Tabs tabs={['Open', 'Resolved', 'All']} active={tab} onChange={setTab} style={{ justifySelf: 'start' }} />
        <Card padding={0}>
          {rows.length ? (
            <DataTable rows={rows} columns={[
              { key: 'defect', header: 'Defect', render: (r) => <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{r.defect}</span> },
              { key: 'site', header: 'Site' },
              { key: 'owner', header: 'Owner' },
              { key: 'priority', header: 'Priority', render: (r) => <Badge size="sm" tone={r.priority === 'High' ? 'fail' : r.priority === 'Medium' ? 'warn' : 'neutral'}>{r.priority}</Badge> },
              { key: 'due', header: 'Due', render: (r) => <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>{r.due}</span> },
              { key: 'status', header: 'Status', align: 'right', render: (r) => <StatusPill status={r.status} size="sm" /> },
              { key: 'x', header: '', align: 'right', width: 120, render: (r) => <Button size="sm" variant="outline" onClick={() => setAssign(r)}>Reassign</Button> },
            ]} />
          ) : <EmptyState icon="task_alt" title="Nothing here" description="No actions match this filter." />}
        </Card>
      </div>
      {assign && (
        <Modal title="Reassign action" onClose={() => setAssign(null)}
          footer={<><Button variant="ghost" onClick={() => setAssign(null)}>Cancel</Button><Button onClick={() => setAssign(null)}>Save action</Button></>}>
          <div style={{ display: 'grid', gap: 14 }}>
            <div style={{ padding: 14, background: 'var(--grey-50)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-body-sm)', color: 'var(--text-strong)' }}>{assign.defect}</div>
            <Select label="Owner" options={['M. Ellis', 'D. Whyte', 'P. Nair', 'L. Bright']} defaultValue={assign.owner} />
            <Input label="Due date" defaultValue={assign.due} iconStart="event" />
            <Textarea label="Note to owner" rows={3} placeholder="Add context for the person taking this on…" />
          </div>
        </Modal>
      )}
    </>
  );
}

Object.assign(window, { ActionsScreen });
