import { motion, useReducedMotion } from 'framer-motion';
import { Icon } from './Icon.jsx';
import { PhoneFrame, PhoneStatusBar, LaptopFrame } from './DeviceFrames.jsx';
import { useResponsiveScale } from './useResponsiveScale.js';

const EASE = [0.2, 0.8, 0.2, 1];

function DonutChart({ segments, size = 64, strokeWidth = 11 }) {
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  const primary = segments[0];
  let offset = 0;
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {segments.map((seg) => {
            const dash = (seg.value / 100) * c;
            const el = (
              <circle
                key={seg.label} cx={size / 2} cy={size / 2} r={r} fill="none"
                stroke={seg.color} strokeWidth={strokeWidth} strokeLinecap="butt"
                strokeDasharray={`${dash} ${c - dash}`} strokeDashoffset={-offset}
              />
            );
            offset += dash;
            return el;
          })}
        </g>
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', lineHeight: 1,
      }}>
        <span style={{ fontSize: size * 0.22, fontWeight: 800, color: 'var(--text-strong)' }}>{primary.value}%</span>
      </div>
    </div>
  );
}

function Sparkline() {
  const points = '0,26 10,22 20,24 30,14 40,18 50,6 60,10 70,2 80,8 90,4 100,7';
  return (
    <svg viewBox="0 0 100 30" width="100%" height="100%" preserveAspectRatio="none">
      <polyline points={points} fill="none" stroke="var(--green-500)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CORRECTIVE_ACTIONS = [
  { label: 'Racking', value: 9, color: 'var(--fail-500)' },
  { label: 'Fire', value: 6, color: 'var(--warn-500)' },
  { label: 'PPE', value: 4, color: 'var(--green-500)' },
  { label: 'Housekeep.', value: 3, color: 'var(--navy-500)' },
];

function BarChart() {
  const max = Math.max(...CORRECTIVE_ACTIONS.map((a) => a.value));
  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 8, minHeight: 0 }}>
      {CORRECTIVE_ACTIONS.map((a) => (
        <div key={a.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
          <span style={{ fontSize: 7.5, fontWeight: 700, color: 'var(--text-strong)' }}>{a.value}</span>
          <div style={{ width: '100%', maxWidth: 16, height: `${(a.value / max) * 100}%`, minHeight: 6, borderRadius: 3, background: a.color }} />
          <span style={{ fontSize: 6, color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap' }}>{a.label}</span>
        </div>
      ))}
    </div>
  );
}

function PhotoStrip() {
  const tones = ['var(--navy-300)', 'var(--navy-400)', 'var(--green-300)', 'var(--navy-200)'];
  return (
    <div style={{ flex: 1, display: 'flex', gap: 6, minHeight: 0 }}>
      {tones.map((tone, i) => (
        <div key={i} style={{ flex: 1, borderRadius: 5, background: tone, position: 'relative', overflow: 'hidden' }}>
          {i === 0 && (
            <span style={{
              position: 'absolute', bottom: 2, left: 2, width: 10, height: 10, borderRadius: '50%',
              background: 'rgba(255,255,255,.85)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon name="my_location" size={7} color="var(--navy-700)" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function DashboardScreen() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', height: '100%', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '11px 18px', borderBottom: '1px solid var(--border-subtle)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 15, height: 15, borderRadius: 4, background: 'var(--green-500)' }} />
          <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-strong)' }}>HS Manager</span>
        </div>
        <div style={{ display: 'flex', gap: 18 }}>
          {['Dashboard', 'Templates', 'Reports', 'Analytics'].map((t, i) => (
            <span key={t} style={{
              fontSize: 8.5, fontWeight: 700, letterSpacing: '.03em',
              color: i === 0 ? 'var(--green-600)' : 'var(--text-muted)',
              borderBottom: i === 0 ? '2px solid var(--green-500)' : '2px solid transparent', paddingBottom: 4,
            }}>
              {t.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, padding: 14, display: 'grid', gridTemplateColumns: '1.15fr 1fr', gridTemplateRows: '1fr 1fr', gap: 11, minHeight: 0 }}>
        <div style={{ background: 'var(--grey-50)', borderRadius: 9, padding: 11, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--text-strong)', marginBottom: 8 }}>Weekly Compliance</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
            <DonutChart segments={[
              { label: 'Acceptable', value: 78, color: 'var(--pass-500)' },
              { label: 'Concern', value: 14, color: 'var(--warn-500)' },
              { label: 'Non-conform', value: 8, color: 'var(--fail-500)' },
            ]} size={72} strokeWidth={12} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[['Acceptable · 78%', 'var(--pass-500)'], ['Concern · 14%', 'var(--warn-500)'], ['Non-conform · 8%', 'var(--fail-500)']].map(([label, color]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
                  <span style={{ fontSize: 8, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--grey-50)', borderRadius: 9, padding: 11, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--text-strong)', marginBottom: 8 }}>Actions by Category</div>
          <BarChart />
        </div>

        <div style={{ background: 'var(--grey-50)', borderRadius: 9, padding: 11, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--text-strong)' }}>Compliance trend</span>
            <span style={{ fontSize: 8, fontWeight: 700, color: 'var(--green-600)' }}>&uarr; 6%</span>
          </div>
          <div style={{ flex: 1, minHeight: 0 }}>
            <Sparkline />
          </div>
          <div style={{ fontSize: 7, color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <span>Day 1</span><span>Day 30</span>
          </div>
        </div>

        <div style={{ background: 'var(--grey-50)', borderRadius: 9, padding: 11, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--text-strong)', marginBottom: 8 }}>Recent Photos</div>
          <PhotoStrip />
        </div>
      </div>
    </div>
  );
}

const CHECK_QUESTIONS = [
  { num: '1.2', text: 'Fire exits clear from obstruction and debris', status: 'pass' },
  { num: '1.3', text: 'Racking uprights free of impact damage', status: 'concern' },
];

function ChecklistScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <PhoneStatusBar />
      <div style={{ padding: '4px 16px 10px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Icon name="menu" size={16} color="var(--text-strong)" />
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-strong)' }}>Weekly H&amp;S Check</span>
          <Icon name="help" size={16} color="var(--text-strong)" />
        </div>
        <div style={{ textAlign: 'center', marginTop: 6 }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '.04em' }}>WAREHOUSE 1</div>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-strong)' }}>Access &amp; Exits</div>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 11 }}>
        {CHECK_QUESTIONS.map((q, i) => (
          <div key={q.num} style={{ background: 'var(--grey-50)', borderRadius: 11, padding: 11 }}>
            <div style={{ display: 'flex', gap: 7, marginBottom: 9 }}>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--text-muted)', flexShrink: 0 }}>{q.num}</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.35 }}>{q.text}</span>
            </div>
            <div style={{ display: 'flex', gap: 11, marginBottom: 9 }}>
              {['pass', 'concern', 'fail'].map((s) => {
                const active = s === q.status;
                const color = s === 'pass' ? 'var(--pass-500)' : s === 'concern' ? 'var(--warn-500)' : 'var(--fail-500)';
                const label = s === 'pass' ? 'Acceptable' : s === 'concern' ? 'Concern' : 'Non Conf.';
                return (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{
                      width: 12, height: 12, borderRadius: '50%',
                      border: `1.5px solid ${active ? color : 'var(--border-default)'}`,
                      background: active ? color : 'transparent',
                    }} />
                    <span style={{ fontSize: 8, color: 'var(--text-muted)' }}>{label}</span>
                  </div>
                );
              })}
            </div>
            {i === 0 && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '7px 9px', marginBottom: 9,
                borderRadius: 7, border: '1px solid var(--border-subtle)', background: '#fff',
              }}>
                <Icon name="mic" size={13} color="var(--green-600)" />
                <span style={{ fontSize: 8, color: 'var(--text-muted)' }}>Tap to dictate comments&hellip;</span>
              </div>
            )}
            <div style={{ display: 'flex', gap: 7 }}>
              <span style={{
                flex: 1, textAlign: 'center', padding: '6px 0', borderRadius: 7,
                background: 'var(--action-primary)', color: '#fff', fontSize: 8, fontWeight: 700,
              }}>
                + Actions
              </span>
              <span style={{
                flex: 1, textAlign: 'center', padding: '6px 0', borderRadius: 7,
                border: '1px solid var(--green-500)', color: 'var(--green-600)', fontSize: 8, fontWeight: 700,
              }}>
                Photos
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-around', padding: '8px 4px',
        borderTop: '1px solid var(--border-subtle)', flexShrink: 0,
      }}>
        {[['menu', 'Menu'], ['add_circle', 'Add'], ['playlist_add_check', 'Actions'], ['upload', 'Upload']].map(([icon, label]) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Icon name={icon} size={13} color="var(--text-muted)" />
            <span style={{ fontSize: 6.5, color: 'var(--text-muted)', fontWeight: 600 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeviceAnnotation({ icon, label, style, delay = 0, scale = 1, transformOrigin = 'center' }) {
  const reduceMotion = useReducedMotion();
  const { transform: baseTransform, ...restStyle } = style;
  const combinedTransform = [baseTransform, scale !== 1 ? `scale(${scale})` : null].filter(Boolean).join(' ');
  return (
    <div style={{ position: 'absolute', zIndex: 6, ...restStyle, transform: combinedTransform || undefined, transformOrigin }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: EASE }}
        style={{
          display: 'flex', alignItems: 'center', gap: 7,
          background: '#fff', borderRadius: 'var(--radius-lg)', padding: '8px 13px 8px 9px',
          boxShadow: '0 4px 20px rgba(13,31,45,.14), inset 0 1px 1px rgba(255,255,255,.7)',
          whiteSpace: 'nowrap',
        }}
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', alignItems: 'center', gap: 7 }}
        >
          <span style={{
            width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
            background: 'var(--surface-brand-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name={icon} size={12} color="var(--green-600)" />
          </span>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-strong)' }}>{label}</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function HeroDevices() {
  const reduceMotion = useReducedMotion();
  const scale = useResponsiveScale();

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '52px 0 46px' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', left: '50%', bottom: 4, transform: 'translateX(-50%)',
        width: '68%', height: 28, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(13,31,45,.16), rgba(13,31,45,0) 72%)',
        filter: 'blur(2px)', zIndex: 0,
      }} />

      <motion.div
        initial={{ opacity: 0, x: -24, rotate: -3 }}
        whileInView={{ opacity: 1, x: 0, rotate: -3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{
          position: 'relative', marginTop: 70 * scale, marginRight: -58 * scale,
          filter: 'drop-shadow(0 24px 34px rgba(13,31,45,.16))',
        }}
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <LaptopFrame width={425 * scale}>
            <DashboardScreen />
          </LaptopFrame>
        </motion.div>

        <DeviceAnnotation
          icon="query_stats"
          label="Live compliance scoring"
          delay={0.5}
          scale={scale}
          transformOrigin="top center"
          style={{ left: '50%', transform: 'translateX(-50%)', top: 'calc(100% + 14px)' }}
        />

        <DeviceAnnotation
          icon="photo_camera"
          label="GPS + time-stamped photos"
          delay={0.44}
          scale={scale}
          transformOrigin="bottom left"
          style={{ left: '4%', bottom: 'calc(100% + 14px)' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24, y: 20, rotate: 4 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
        style={{ position: 'relative', zIndex: 2, filter: 'drop-shadow(0 20px 28px rgba(13,31,45,.2))' }}
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          <PhoneFrame width={228 * scale}>
            <ChecklistScreen />
          </PhoneFrame>
        </motion.div>

        <DeviceAnnotation
          icon="mic"
          label="Voice-to-text dictation"
          delay={0.62}
          scale={scale}
          transformOrigin="bottom center"
          style={{ left: '50%', transform: 'translateX(-50%)', bottom: 'calc(100% + 14px)' }}
        />
      </motion.div>
    </div>
  );
}
