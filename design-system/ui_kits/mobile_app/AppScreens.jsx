const { Button, Card, Icon, Badge, StatusPill, ProgressBar, ChecklistRow, SearchField, Alert, Tag, Input, Textarea, Logo, EmptyState } = window.HSManagerDesignSystem_7bf991;
const { PhoneFrame, AppBar, TabBar } = window;

const TEMPLATES = [
  ['SEMA Racking Inspection', 'Compliance & Safety', 22, 'shelves'],
  ['Forklift Pre-Start Check', 'Operational & MHE', 14, 'forklift'],
  ['Daily H&S Walk-Through', 'Audit Readiness', 18, 'fact_check'],
  ['Weekly Fire Safety', 'Compliance & Safety', 16, 'local_fire_department'],
  ['COSHH Store Audit', 'Compliance & Safety', 12, 'science'],
  ['Loading Bay & Dock Levellers', 'Workplace & Premises', 11, 'dock'],
];

const QUESTIONS = [
  'Are all racking uprights free from visible damage?',
  'Are load notices displayed and legible for every run?',
  'Are beam connector locks in place on all beams?',
  'Is there evidence of impact damage to frames at floor level?',
  'Are aisles clear of obstruction and debris?',
];

function HomeScreen() {
  return (
    <>
      <AppBar title="Daventry DC" subtitle="Sam Okoye · H&S Manager" action={<Logo variant="mark" height={26} basePath="../../assets" />} />
      <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'grid', gap: 12, alignContent: 'start' }}>
        <Alert tone="warning" title="Offline — 3 inspections queued">They will upload as soon as you are back in signal.</Alert>
        <Card padding={18}>
          <div className="hsm-eyebrow">Today</div>
          <div style={{ display: 'flex', gap: 18, marginTop: 12 }}>
            {[['4', 'Due'], ['2', 'Started'], ['11', 'Done']].map(([v, l]) => (
              <div key={l}>
                <div className="hsm-display" style={{ fontSize: 30 }}>{v}</div>
                <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{l}</div>
              </div>
            ))}
          </div>
        </Card>
        <div style={{ fontSize: 'var(--text-body-sm)', fontWeight: 700, color: 'var(--text-strong)', marginTop: 4 }}>Scheduled today</div>
        {[['Racking Inspection — Aisle C', 'Due 15:00', 'open'], ['Forklift Pre-Start — FLT-08', 'Completed 06:14', 'pass'], ['Weekly Fire Safety Walk', 'Due 17:30', 'open']].map(([t, s, st]) => (
          <Card key={t} padding={16} interactive>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--green-50)', display: 'grid', placeItems: 'center' }}>
                <Icon name="assignment" size={20} color="var(--green-600)" />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 'var(--text-body-sm)', fontWeight: 700, color: 'var(--text-strong)' }}>{t}</div>
                <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{s}</div>
              </div>
              <StatusPill status={st} size="sm" />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

function TemplatesScreen({ onStart }) {
  const [q, setQ] = React.useState('');
  const list = TEMPLATES.filter((t) => t[0].toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <AppBar title="Templates" subtitle="70+ HSE-aligned checklists" />
      <div style={{ padding: '12px 16px 0' }}><SearchField placeholder="Search checklists" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      <div style={{ display: 'flex', gap: 6, padding: '12px 16px 4px', overflowX: 'auto' }}>
        {['All', 'MHE', 'Racking', 'Fire', 'COSHH'].map((t, i) => <Tag key={t} selected={i === 0}>{t}</Tag>)}
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'grid', gap: 10, alignContent: 'start' }}>
        {list.length ? list.map(([t, cat, n, icon]) => (
          <Card key={t} padding={14} interactive onClick={onStart}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--navy-800)', display: 'grid', placeItems: 'center' }}>
                <Icon name={icon} size={20} color="#fff" />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 'var(--text-body-sm)', fontWeight: 700, color: 'var(--text-strong)' }}>{t}</div>
                <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{cat} · {n} questions</div>
              </div>
              <Icon name="chevron_right" size={20} color="var(--text-muted)" />
            </div>
          </Card>
        )) : <EmptyState icon="search_off" title="No checklists found" description="Try a different search term, or build your own template in the web app." />}
      </div>
    </>
  );
}

function InspectionScreen({ onSubmit }) {
  const [answers, setAnswers] = React.useState({ 0: 'pass', 1: 'pass', 2: 'fail' });
  const done = Object.keys(answers).length;
  return (
    <>
      <AppBar title="SEMA Racking" subtitle="Aisle C · Daventry DC" back />
      <div style={{ padding: '12px 16px', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
        <ProgressBar label={`${done} of ${QUESTIONS.length} answered`} value={done} max={QUESTIONS.length} showValue />
      </div>
      <div style={{ flex: 1, overflowY: 'auto', background: 'var(--surface-card)' }}>
        {QUESTIONS.map((q, i) => (
          <ChecklistRow key={i} index={i + 1} question={q} value={answers[i] || null}
            photos={answers[i] === 'fail' ? 2 : 0}
            note={answers[i] === 'fail' ? 'Two missing beam locks at C-14. Bay off-loaded and cordoned.' : null}
            onChange={(v) => setAnswers({ ...answers, [i]: v })} />
        ))}
      </div>
      <div style={{ padding: 14, background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: 10 }}>
        <Button variant="outline" iconStart="save">Save draft</Button>
        <Button block iconEnd="arrow_forward" onClick={onSubmit}>Complete</Button>
      </div>
    </>
  );
}

function SignOffScreen({ onDone }) {
  return (
    <>
      <AppBar title="Sign off" subtitle="SEMA Racking · Aisle C" back />
      <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'grid', gap: 12, alignContent: 'start' }}>
        <Card padding={18}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div className="hsm-eyebrow">Result</div>
              <div className="hsm-display" style={{ fontSize: 36, marginTop: 6 }}>82%</div>
            </div>
            <StatusPill status="fail" />
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <Badge tone="pass">3 pass</Badge><Badge tone="fail">2 fail</Badge><Badge tone="neutral">0 N/A</Badge>
          </div>
        </Card>
        <Card padding={18} tone="brand">
          <div style={{ display: 'flex', gap: 10 }}>
            <Icon name="flag" size={20} fill={1} color="var(--green-700)" />
            <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)' }}>
              <strong style={{ color: 'var(--text-strong)' }}>2 actions will be raised.</strong> Each failed question becomes a tracked action with an owner and due date.
            </div>
          </div>
        </Card>
        <Input label="Inspector" defaultValue="Sam Okoye" iconStart="person" />
        <Textarea label="Summary note" rows={3} placeholder="Anything the site manager should know…" />
        <Card padding={16}>
          <div className="hsm-eyebrow">Signature</div>
          <div style={{ height: 84, marginTop: 10, borderRadius: 'var(--radius-sm)', border: '1px dashed var(--border-default)', display: 'grid', placeItems: 'center', color: 'var(--text-muted)', fontSize: 'var(--text-body-sm)' }}>
            Sign here
          </div>
        </Card>
      </div>
      <div style={{ padding: 14, background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)' }}>
        <Button block size="lg" iconStart="cloud_upload" onClick={onDone}>Submit &amp; queue for sync</Button>
      </div>
    </>
  );
}

function MobileKit() {
  const [tab, setTab] = React.useState('home');
  const [flow, setFlow] = React.useState('home');
  return (
    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
        <PhoneFrame label="Interactive — tap through">
          {flow === 'home' && <HomeScreen />}
          {flow === 'templates' && <TemplatesScreen onStart={() => setFlow('inspect')} />}
          {flow === 'inspect' && <InspectionScreen onSubmit={() => setFlow('signoff')} />}
          {flow === 'signoff' && <SignOffScreen onDone={() => { setFlow('home'); setTab('home'); }} />}
          {flow !== 'inspect' && flow !== 'signoff' && (
            <TabBar active={tab} onSelect={(id) => { setTab(id); setFlow(id === 'tpl' ? 'templates' : 'home'); }} />
          )}
        </PhoneFrame>
        <PhoneFrame label="Template library"><TemplatesScreen onStart={() => {}} /><TabBar active="tpl" /></PhoneFrame>
        <PhoneFrame label="Running an inspection"><InspectionScreen onSubmit={() => {}} /></PhoneFrame>
      </div>
    </div>
  );
}

Object.assign(window, { MobileKit, HomeScreen, TemplatesScreen, InspectionScreen, SignOffScreen });
