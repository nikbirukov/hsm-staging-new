const { TopBar, Card, StatusPill, Button, Icon, ProgressBar, Badge, Logo } = window.HSManagerDesignSystem_7bf991;

function ReportScreen({ row, onBack, user }) {
  const qs = window.REPORT_QUESTIONS;
  const fails = qs.filter((q) => q.a === 'fail').length;
  return (
    <>
      <TopBar title={row.ref} subtitle={`${row.template} · ${row.site} · ${row.date}`} user={user}
        actions={<><Button variant="ghost" iconStart="arrow_back" onClick={onBack}>Back</Button><Button variant="outline" iconStart="picture_as_pdf">Download PDF</Button><Button iconStart="send">Share</Button></>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }}>
          <Card padding={0}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <Logo variant="mark" height={30} basePath="../../assets" />
                <div>
                  <div style={{ fontSize: 'var(--text-h4)', fontWeight: 700, color: 'var(--text-strong)' }}>Inspection record</div>
                  <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>RACK-DAV-C · 07/05/2026 14:32 · 52.256, -1.163</div>
                </div>
              </div>
              <StatusPill status={row.status} />
            </div>
            {qs.map((q, i) => (
              <div key={i} style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', color: 'var(--text-muted)', paddingTop: 3, minWidth: 22 }}>{String(i + 1).padStart(2, '0')}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 'var(--text-body)', color: 'var(--text-strong)', fontWeight: 500 }}>{q.q}</div>
                  {q.note && <div style={{ marginTop: 8, padding: '10px 12px', background: 'var(--grey-50)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-body-sm)' }}>{q.note}</div>}
                  {q.photos && (
                    <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                      {Array.from({ length: q.photos }).map((_, p) => (
                        <div key={p} style={{ width: 92, height: 68, borderRadius: 'var(--radius-sm)', background: 'var(--grey-100)', border: '1px dashed var(--border-default)', display: 'grid', placeItems: 'center', color: 'var(--text-muted)' }}>
                          <Icon name="photo_camera" size={18} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <StatusPill status={q.a} size="sm" />
              </div>
            ))}
          </Card>
          <div style={{ display: 'grid', gap: 16 }}>
            <Card padding={24}>
              <div className="hsm-eyebrow">Score</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '10px 0 14px' }}>
                <span className="hsm-display" style={{ fontSize: 44 }}>{row.score}</span><span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>%</span>
              </div>
              <ProgressBar value={row.score} tone={row.score < 90 ? 'warn' : 'brand'} />
              <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                <Badge tone="pass">{qs.filter(q => q.a === 'pass').length} pass</Badge>
                <Badge tone="fail">{fails} fail</Badge>
                <Badge tone="neutral">{qs.filter(q => q.a === 'na').length} N/A</Badge>
              </div>
            </Card>
            <Card padding={24}>
              <div className="hsm-eyebrow">Sign-off</div>
              <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
                {[['Inspector', row.inspector], ['Countersigned', 'M. Ellis, Site Manager'], ['Device', 'iPad · offline, synced 14:41']].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 'var(--text-body-sm)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{k}</span><span style={{ color: 'var(--text-strong)', fontWeight: 600, textAlign: 'right' }}>{v}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card padding={24} tone="brand">
              <div style={{ display: 'flex', gap: 12 }}>
                <Icon name="flag" size={22} color="var(--green-700)" fill={1} />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-strong)' }}>{fails} actions raised</div>
                  <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)', marginTop: 4 }}>Every failed question opens a tracked action with an owner and a due date.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { ReportScreen });
