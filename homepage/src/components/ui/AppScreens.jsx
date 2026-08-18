import { Icon } from './Icon.jsx';
import { PhoneStatusBar } from './DeviceFrames.jsx';

function HeaderBar({ left, title, right }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '2px 16px 10px', borderBottom: '1px solid var(--border-subtle)', flexShrink: 0,
    }}>
      {left}
      <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-strong)', flex: 1, textAlign: left ? 'center' : 'left', marginLeft: left ? 0 : 0 }}>{title}</span>
      {right}
    </div>
  );
}

const CATEGORIES = [
  { icon: 'warning', label: 'Risk Assessment', count: 9 },
  { icon: 'local_shipping', label: 'Vehicle', count: 8 },
  { icon: 'warehouse', label: 'Racking', count: 4 },
  { icon: 'local_fire_department', label: 'Fire Safety', count: 6 },
  { icon: 'medical_services', label: 'First Aid', count: 3 },
  { icon: 'report', label: 'Accident and Incident', count: 3 },
];

export function TemplatesListScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PhoneStatusBar time="14:08" />
      <HeaderBar
        left={<Icon name="menu" size={16} color="var(--text-strong)" />}
        title="HS Manager"
        right={<Icon name="info" size={16} color="var(--text-strong)" />}
      />
      <div style={{ display: 'flex', gap: 7, padding: '12px 16px' }}>
        <span style={{ flex: 1, textAlign: 'center', padding: '8px 0', borderRadius: 9, background: 'var(--action-primary)', color: '#fff', fontSize: 11, fontWeight: 700 }}>Templates</span>
        <span style={{ flex: 1, textAlign: 'center', padding: '8px 0', borderRadius: 9, background: 'var(--grey-100)', color: 'var(--text-muted)', fontSize: 11, fontWeight: 700 }}>Reports</span>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', padding: '2px 16px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {CATEGORIES.map((c) => (
          <div key={c.label} style={{
            display: 'flex', alignItems: 'center', gap: 11, padding: '10px 11px',
            background: 'var(--grey-50)', borderRadius: 11,
          }}>
            <span style={{
              width: 29, height: 29, borderRadius: 8, background: 'var(--green-500)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon name={c.icon} size={15} color="#fff" fill={1} />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-strong)' }}>{c.label} ({c.count})</div>
              <div style={{ fontSize: 8.5, color: 'var(--text-muted)' }}>{c.count} templates</div>
            </div>
            <Icon name="expand_more" size={15} color="var(--text-muted)" />
          </div>
        ))}
      </div>
    </div>
  );
}

function QuestionCard({ num, text, checked, highlightPhotos, hideDictation, children }) {
  return (
    <div style={{ background: 'var(--grey-50)', borderRadius: 12, padding: 12, marginBottom: 10 }}>
      <div style={{ display: 'flex', gap: 7, marginBottom: 10, alignItems: 'flex-start' }}>
        <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--text-muted)', flexShrink: 0 }}>{num}</span>
        <span style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.35, flex: 1 }}>{text}</span>
        <Icon name="check_circle" size={15} color="var(--green-600)" fill={1} />
      </div>
      <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
        {['Yes', 'No', 'N/A'].map((opt) => (
          <div key={opt} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{
              width: 13, height: 13, borderRadius: '50%',
              border: `1.5px solid ${opt === checked ? 'var(--green-500)' : 'var(--border-default)'}`,
              background: opt === checked ? 'var(--green-500)' : 'transparent',
            }} />
            <span style={{ fontSize: 8.5, color: 'var(--text-muted)' }}>{opt}</span>
          </div>
        ))}
      </div>
      {!hideDictation && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7, padding: '8px 10px', marginBottom: 10,
          borderRadius: 7, border: '1px solid var(--border-subtle)', background: '#fff',
        }}>
          <Icon name="mic" size={14} color="var(--green-600)" />
          <span style={{ fontSize: 8.5, color: 'var(--text-muted)' }}>Tap to dictate comments&hellip;</span>
        </div>
      )}
      {children}
      <div style={{ display: 'flex', gap: 7 }}>
        <span style={{ flex: 1, textAlign: 'center', padding: '6px 0', borderRadius: 7, background: 'var(--action-primary)', color: '#fff', fontSize: 8.5, fontWeight: 700 }}>+ Actions</span>
        <span style={{
          flex: 1, textAlign: 'center', padding: '6px 0', borderRadius: 7,
          border: `1px solid ${highlightPhotos ? 'var(--green-500)' : 'var(--border-default)'}`,
          background: highlightPhotos ? 'var(--surface-brand-soft)' : 'transparent',
          color: 'var(--green-600)', fontSize: 8.5, fontWeight: 700, position: 'relative',
        }}>
          Photos {highlightPhotos ? '(1)' : ''}
        </span>
      </div>
    </div>
  );
}

function PhotoEvidenceThumb() {
  return (
    <div style={{ position: 'relative', marginBottom: 10, borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
      <svg viewBox="0 0 300 150" width="100%" height="72" style={{ display: 'block' }} preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="150" fill="var(--navy-100)" />
        <rect x="0" y="96" width="300" height="54" fill="var(--navy-200)" />
        <rect x="18" y="30" width="60" height="66" fill="var(--navy-300)" />
        <rect x="88" y="46" width="46" height="50" fill="var(--navy-300)" />
        <rect x="144" y="18" width="60" height="78" fill="var(--navy-400)" />
        <rect x="214" y="40" width="70" height="56" fill="var(--navy-300)" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={18 + i * 48} y={100} width="34" height="34" rx="3" fill="var(--navy-500)" opacity="0.5" />
        ))}
      </svg>
      <span style={{
        position: 'absolute', left: 8, bottom: 8, display: 'flex', alignItems: 'center', gap: 4,
        padding: '4px 8px', borderRadius: 999, background: 'rgba(13,31,45,.72)', backdropFilter: 'blur(4px)',
      }}>
        <Icon name="my_location" size={10} color="#fff" />
        <span style={{ fontSize: 7, fontWeight: 700, color: '#fff' }}>Bay 3 &middot; 14:13</span>
      </span>
      <span style={{
        position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderRadius: '50%',
        background: 'var(--green-500)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 0 3px rgba(255,255,255,.7)',
      }}>
        <Icon name="check" size={12} color="#fff" />
      </span>
    </div>
  );
}

function BottomNav() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '8px 4px', borderTop: '1px solid var(--border-subtle)', flexShrink: 0 }}>
      {[['menu', 'Menu'], ['add_circle', 'Add Question'], ['playlist_add_check', 'Corrective Actions'], ['upload', 'Upload']].map(([icon, label]) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, maxWidth: 44 }}>
          <Icon name={icon} size={13} color="var(--text-muted)" />
          <span style={{ fontSize: 6, color: 'var(--text-muted)', fontWeight: 600, textAlign: 'center', lineHeight: 1.1 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function ChecklistBreadcrumb() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 14px', background: 'var(--grey-50)' }}>
      <Icon name="chevron_left" size={14} color="var(--text-muted)" />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 7, color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '.04em' }}>WAREHOUSE 1</div>
        <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-strong)' }}>Warehouse Audit Checklist</div>
        <div style={{ fontSize: 7, color: 'var(--text-muted)' }}>External Area</div>
      </div>
      <Icon name="chevron_right" size={14} color="var(--text-muted)" />
    </div>
  );
}

export function AnswerQuestionsScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PhoneStatusBar time="14:13" />
      <HeaderBar left={<Icon name="menu" size={16} color="var(--text-strong)" />} title="Warehouse Audit Checklist" right={<Icon name="help" size={16} color="var(--text-strong)" />} />
      <ChecklistBreadcrumb />
      <div style={{ flex: 1, overflow: 'hidden', padding: '12px 14px' }}>
        <QuestionCard num="1.4" text="Are staff cars parked away from warehouse exits?" checked="Yes" />
        <QuestionCard num="1.5" text="Is there disabled access into the building?" checked="No" />
      </div>
      <BottomNav />
    </div>
  );
}

export function CameraAnnotatedScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PhoneStatusBar time="14:13" />
      <HeaderBar left={<Icon name="menu" size={16} color="var(--text-strong)" />} title="Warehouse Audit Checklist" right={<Icon name="help" size={16} color="var(--text-strong)" />} />
      <ChecklistBreadcrumb />
      <div style={{ flex: 1, overflow: 'hidden', padding: '12px 14px' }}>
        <QuestionCard num="1.4" text="Are staff cars parked away from warehouse exits?" checked="Yes" highlightPhotos hideDictation>
          <PhotoEvidenceThumb />
        </QuestionCard>
      </div>
      <BottomNav />
    </div>
  );
}

const NAV_ITEMS = [
  ['fact_check', 'Report Details', 12],
  ['warehouse', 'External Area', 8],
  ['domain', 'Internal Area', 14],
  ['dns', 'Equipment – IT Systems', 6],
  ['precision_manufacturing', 'Equipment – Mechanical handling', 9],
  ['emergency', 'Contingency planning', 4],
  ['local_shipping', 'Inbound operations', 7],
  ['inventory_2', 'Stock control', 11],
];

export function NavigationScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PhoneStatusBar time="14:16" />
      <HeaderBar left={<Icon name="chevron_left" size={18} color="var(--text-strong)" />} title="Navigation" />
      <div style={{ padding: '12px 16px 8px' }}>
        <div style={{
          padding: '9px 13px', borderRadius: 8, background: 'var(--navy-800)',
          color: '#fff', fontSize: 9.5, fontWeight: 700, letterSpacing: '.03em',
        }}>
          WAREHOUSE AUDIT CHECKLIST
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {NAV_ITEMS.map(([icon, item, count]) => (
          <div key={item} style={{
            display: 'flex', alignItems: 'center', gap: 9,
            padding: '10px 13px', borderRadius: 8, border: '1px solid var(--border-subtle)', background: '#fff',
          }}>
            <span style={{
              width: 24, height: 24, borderRadius: 6, background: 'var(--surface-brand-soft)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon name={icon} size={13} color="var(--green-600)" />
            </span>
            <span style={{ fontSize: 10, color: 'var(--text-body)', fontWeight: 500, flex: 1 }}>{item}</span>
            <span style={{ fontSize: 8, color: 'var(--text-muted)', fontWeight: 600 }}>{count}</span>
            <Icon name="chevron_right" size={14} color="var(--text-muted)" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SignatureScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <PhoneStatusBar time="14:16" />
      <div style={{ opacity: 0.35, filter: 'blur(0.5px)' }}>
        <HeaderBar
          left={<Icon name="chevron_left" size={16} color="var(--text-strong)" />}
          title="Upload Report"
          right={<Icon name="check_circle" size={16} color="var(--green-600)" fill={1} />}
        />
        <div style={{ padding: '10px 14px' }}>
          <div style={{ padding: '8px 10px', borderRadius: '7px 7px 0 0', background: 'var(--navy-800)', color: '#fff', fontSize: 9, fontWeight: 700 }}>Report Details</div>
          <div style={{ padding: 10, background: 'var(--grey-50)', borderRadius: '0 0 7px 7px', display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[['Report No', '258'], ['Report Reference', 'Warehouse 1'], ['Report Title', 'Warehouse Audit Checklist'], ['Completed Date', 'Not Completed']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8 }}>
                <span style={{ color: 'var(--text-muted)' }}>{k}:</span>
                <span style={{ color: 'var(--text-strong)', fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 10, right: 10, top: '28%',
        background: '#fff', borderRadius: 14, boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-subtle)',
        padding: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-strong)' }}>Add Signature</span>
          <Icon name="close" size={14} color="var(--text-muted)" />
        </div>
        <div style={{ fontSize: 8, color: 'var(--text-muted)', marginBottom: 3 }}>Inspection completed by</div>
        <div style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid var(--border-default)', fontSize: 9.5, color: 'var(--text-strong)', marginBottom: 10 }}>Mike Smith</div>
        <div style={{ fontSize: 8, color: 'var(--text-muted)', marginBottom: 3 }}>Signature</div>
        <div style={{ height: 56, borderRadius: 6, border: '1px solid var(--border-default)', marginBottom: 10, position: 'relative' }}>
          <svg viewBox="0 0 140 50" width="100%" height="100%">
            <path d="M14 34 C 22 12, 30 12, 34 30 S 46 46, 52 26 S 62 8, 68 28 S 80 44, 88 22 S 100 10, 108 30 S 118 40, 126 24"
              fill="none" stroke="var(--navy-700)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ flex: 1, textAlign: 'center', padding: '7px 0', borderRadius: 7, border: '1px solid var(--border-default)', fontSize: 9, fontWeight: 700, color: 'var(--text-strong)' }}>Cancel</span>
          <span style={{ flex: 1, textAlign: 'center', padding: '7px 0', borderRadius: 7, background: 'var(--action-primary)', color: '#fff', fontSize: 9, fontWeight: 700 }}>Done</span>
        </div>
      </div>
    </div>
  );
}

function Pin({ number, style }) {
  return (
    <span style={{
      position: 'absolute', width: 16, height: 16, borderRadius: '50%',
      background: 'var(--green-500)', color: '#fff', fontSize: 9, fontWeight: 800,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 0 0 3px rgba(18,183,29,.25)', zIndex: 8, ...style,
    }}>
      {number}
    </span>
  );
}

export function AnnotatedFeatureScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <PhoneStatusBar time="14:13" />
      <HeaderBar left={<Icon name="menu" size={16} color="var(--text-strong)" />} title="Weekly H&amp;S Check" right={<Icon name="help" size={16} color="var(--text-strong)" />} />

      <div style={{ flex: 1, overflow: 'hidden', padding: '10px 12px', position: 'relative' }}>
        <div style={{ background: 'var(--grey-50)', borderRadius: 10, padding: 10 }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-muted)' }}>1.3</span>
            <span style={{ fontSize: 9.5, fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.35 }}>Are all walkways and exits clear from obstruction?</span>
          </div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
            {['Yes', 'No', 'N/A'].map((opt) => (
              <div key={opt} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{
                  width: 12, height: 12, borderRadius: '50%',
                  border: `1.5px solid ${opt === 'Yes' ? 'var(--green-500)' : 'var(--border-default)'}`,
                  background: opt === 'Yes' ? 'var(--green-500)' : 'transparent',
                }} />
                <span style={{ fontSize: 8, color: 'var(--text-muted)' }}>{opt}</span>
              </div>
            ))}
          </div>

          <div style={{ position: 'relative', marginBottom: 8 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '7px 9px',
              borderRadius: 6, border: '1px solid var(--border-subtle)', background: '#fff',
            }}>
              <Icon name="mic" size={13} color="var(--green-600)" />
              <span style={{ fontSize: 8, color: 'var(--text-muted)' }}>Tap to dictate comments&hellip;</span>
            </div>
            <Pin number={1} style={{ top: -8, right: -8 }} />
          </div>

          <div style={{ position: 'relative', display: 'flex', gap: 6 }}>
            <span style={{ flex: 1, textAlign: 'center', padding: '5px 0', borderRadius: 6, background: 'var(--action-primary)', color: '#fff', fontSize: 8, fontWeight: 700 }}>+ Actions</span>
            <div style={{ flex: 1, position: 'relative' }}>
              <span style={{
                display: 'block', textAlign: 'center', padding: '5px 0', borderRadius: 6,
                border: '1px solid var(--green-500)', color: 'var(--green-600)', fontSize: 8, fontWeight: 700,
              }}>
                Photos
              </span>
              <Pin number={2} style={{ top: -8, right: -8 }} />
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', marginTop: 10 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '8px 10px',
            borderRadius: 8, background: 'var(--info-50)', color: 'var(--info-600)',
          }}>
            <Icon name="wifi_off" size={13} />
            <span style={{ fontSize: 8, fontWeight: 700 }}>Saved offline &middot; syncs when back online</span>
          </div>
          <Pin number={3} style={{ top: -8, right: -8 }} />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
