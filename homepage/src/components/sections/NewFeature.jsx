import { useState } from 'react';
import { motion, AnimatePresence, Reorder, useDragControls, useReducedMotion } from 'framer-motion';
import { Icon } from '../ui/Icon.jsx';
import { Button } from '../ui/Button.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { AnimatedTabs } from '../ui/AnimatedTabs.jsx';
import { DeviceChrome, StepRow, Breadcrumb } from '../ui/DeviceChrome.jsx';

const CAPABILITIES = [
  {
    icon: 'add_task',
    title: 'Drag-and-drop form builder',
    body: 'Add custom sections, questions, photo fields and corrective actions in minutes &mdash; no template starts from a blank page.',
  },
  {
    icon: 'edit_square',
    title: 'Edit any of the 70+ templates',
    body: 'Rename and adapt pre-loaded templates freely. No coding, no waiting on IT support.',
  },
  {
    icon: 'palette',
    title: 'Colour-coded answers',
    body: 'Assign Pass, Concern or Fail to any answer option &mdash; colours print straight onto your PDF reports.',
  },
];

const STATS = [
  { value: '70+', label: 'Ready-made templates' },
  { value: 'Unlimited', label: 'Custom forms' },
  { value: '0', label: 'IT setup required' },
];

const INITIAL_QUESTIONS = [
  { id: 'q1', label: 'Fire exits clear & unobstructed', icon: 'toggle_on', type: 'Yes / No' },
  { id: 'q2', label: 'Racking load signage legible', icon: 'toggle_on', type: 'Yes / No' },
  { id: 'q3', label: 'Upload photo evidence', icon: 'photo_camera', type: 'Photo' },
  { id: 'q4', label: 'Corrective action notes', icon: 'edit_note', type: 'Text' },
];

const SWATCHES = ['var(--pass-500)', 'var(--warn-500)', 'var(--fail-500)'];

const ANSWER_ROWS = [
  { label: 'Yes', selected: 0 },
  { label: 'No', selected: 2 },
  { label: 'N/A', selected: 1 },
];

const PRESETS = ['Yes / No', 'Yes / No / N·A', 'Pass / Fail', 'Good / Fair / Poor'];

const REPORT_ROWS = [
  { ref: '1.1', question: 'Fire extinguishers serviced and accessible', answer: 'Yes', tone: 'pass' },
  { ref: '1.2', question: 'Fire exits clear of obstructions', answer: 'Yes', tone: 'pass' },
  { ref: '1.3', question: 'Emergency lighting operational', answer: 'No', tone: 'fail', comment: 'First-floor corridor unit not illuminating — electrician booked.' },
];

function QuestionRow({ item }) {
  const controls = useDragControls();
  const reduceMotion = useReducedMotion();

  return (
    <Reorder.Item
      value={item}
      dragListener={false}
      dragControls={controls}
      whileDrag={reduceMotion ? {} : { scale: 1.02, boxShadow: 'var(--shadow-lg)', zIndex: 2 }}
      transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
      className="question-row"
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 10px 10px 6px', borderRadius: 'var(--radius-sm)',
        background: 'var(--grey-50)', listStyle: 'none', position: 'relative',
      }}
    >
      <span
        onPointerDown={(e) => controls.start(e)}
        aria-hidden="true"
        className="drag-handle"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 26, height: 26, borderRadius: 'var(--radius-sm)', flexShrink: 0,
          color: 'var(--text-muted)', touchAction: 'none',
        }}
      >
        <Icon name="drag_indicator" size={18} />
      </span>
      <span style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 28, height: 28, borderRadius: 'var(--radius-sm)', flexShrink: 0,
        background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
      }}>
        <Icon name={item.icon} size={15} color="var(--navy-600)" />
      </span>
      <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)', flex: 1, minWidth: 0 }}>
        {item.label}
      </span>
      <span style={{
        fontSize: 'var(--text-micro)', color: 'var(--text-muted)', fontWeight: 'var(--weight-semibold)',
        whiteSpace: 'nowrap', flexShrink: 0,
      }}>
        {item.type}
      </span>
    </Reorder.Item>
  );
}

function ColourPickerRow({ row }) {
  const [selected, setSelected] = useState(row.selected);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0' }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: SWATCHES[selected], flexShrink: 0 }} />
      <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)', width: 34, flexShrink: 0 }}>{row.label}</span>
      <div style={{ display: 'flex', gap: 6, marginLeft: 'auto' }}>
        {SWATCHES.map((c, i) => (
          <button
            key={c}
            type="button"
            aria-label={`Set ${row.label} colour`}
            onClick={() => setSelected(i)}
            style={{
              width: 20, height: 20, borderRadius: '50%', background: c, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: selected === i ? '0 0 0 2px #fff, 0 0 0 3.5px ' + c : 'none',
              transition: 'box-shadow 160ms ease-out, transform 120ms ease-out',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.9)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {selected === i && <Icon name="check" size={11} color="#fff" />}
          </button>
        ))}
      </div>
    </div>
  );
}

function NewFeatureBadge() {
  const reduceMotion = useReducedMotion();
  return (
    <span
      className={reduceMotion ? '' : 'new-feature-shimmer'}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 12px 5px 10px', borderRadius: 'var(--radius-pill)',
        background: 'var(--navy-800)', color: '#fff',
        fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <Icon name="auto_awesome" size={13} color="var(--green-400)" fill={1} />
      New Feature
    </span>
  );
}

export function NewFeature() {
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);

  return (
    <section style={{ padding: 'clamp(56px, 8vw, 104px) 0' }}>
      <div style={{
        maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)',
        display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'clamp(32px, 5vw, 64px)',
        alignItems: 'center',
      }} className="feature-grid">

        <Reveal y={26}>
          <div style={{ marginBottom: 18 }}>
            <NewFeatureBadge />
          </div>

          <h2 style={{
            fontSize: 'var(--text-display-sm)', letterSpacing: 'var(--tracking-display)',
            lineHeight: 'var(--leading-tight)', marginBottom: 16, maxWidth: '18ch',
          }}>
            Build bespoke checklists straight from your dashboard
          </h2>

          <p style={{
            fontSize: 'var(--text-body-lg)', color: 'var(--text-body)',
            lineHeight: 'var(--leading-relaxed)', marginBottom: 32, maxWidth: '46ch',
          }}>
            Deploy custom templates to your team instantly using the intuitive HS Manager Form Builder.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  width: 36, height: 36, borderRadius: 'var(--radius-md)', background: 'var(--surface-brand-soft)',
                }}>
                  <Icon name={cap.icon} size={18} color="var(--green-600)" fill={1} />
                </span>
                <div>
                  <div style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)', marginBottom: 2 }}>
                    {cap.title}
                  </div>
                  <div
                    style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}
                    dangerouslySetInnerHTML={{ __html: cap.body }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 'clamp(20px, 3vw, 36px)', marginBottom: 32, flexWrap: 'wrap' }}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--weight-extrabold)', color: 'var(--text-strong)', lineHeight: 1.1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div>
            <Button variant="primary" size="lg" pill iconEnd="arrow_forward">Start Your Free 30-Day Trial</Button>
            <span style={{
              display: 'flex', alignItems: 'center', gap: 8, marginTop: 14,
              fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)',
            }}>
              <Icon name="schedule" size={16} color="var(--green-600)" fill={1} style={{ flexShrink: 0 }} />
              Most customers are operational within two hours
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1} y={26}>
          <div style={{ maxWidth: 440, margin: '0 auto' }}>
            <FormBuilderDemo questions={questions} setQuestions={setQuestions} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FormBuilderDemo({ questions, setQuestions }) {
  const [tab, setTab] = useState('Build Your Form');

  return (
    <DeviceChrome urlPath={tab === 'Build Your Form' ? 'app.thehsmanager.co.uk / form-builder' : 'app.thehsmanager.co.uk / form-builder / edit-columns'}>
      <div style={{ marginBottom: 16 }}>
        <AnimatedTabs tabs={['Build Your Form', 'Colour-Code Answers']} defaultTab={tab} onChange={setTab} layoutId="form-builder-tab-pill" size="sm" />
      </div>

      <AnimatePresence mode="wait">
        {tab === 'Build Your Form' ? (
          <motion.div key="build" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
            <Breadcrumb items={['My Templates', 'Create new', 'Form Builder']} />

            <StepRow num={1}>Add your questions &mdash; type each one, and <strong>drag a row to reorder</strong></StepRow>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '6px 2px', marginBottom: 8,
            }}>
              <span style={{ fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }}>Fire Safety Checks</span>
              <span style={{ fontSize: 'var(--text-micro)', color: 'var(--text-muted)' }}>{questions.length} questions</span>
            </div>

            <Reorder.Group
              axis="y"
              values={questions}
              onReorder={setQuestions}
              style={{ display: 'flex', flexDirection: 'column', gap: 6, margin: 0, padding: 0, marginBottom: 14 }}
            >
              {questions.map((q) => (
                <QuestionRow key={q.id} item={q} />
              ))}
            </Reorder.Group>

            <StepRow num={2}><strong>Save</strong> as you go, then hit <strong>Publish</strong> when it&rsquo;s ready</StepRow>

            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 'var(--radius-control)',
                border: '1px solid var(--border-default)', background: '#fff', color: 'var(--text-strong)',
                fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', cursor: 'pointer',
              }}>
                <Icon name="description" size={13} />
                Save Draft
              </button>
              <button style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 'var(--radius-control)',
                border: 'none', background: 'var(--action-primary)', color: '#fff',
                fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', cursor: 'pointer',
              }}>
                <Icon name="publish" size={13} />
                Publish
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="colour" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
            <Breadcrumb items={['My Templates', 'Form Builder', 'Edit Columns']} />

            <StepRow num={1}>Pick a colour for each answer &mdash; <strong>green pass, amber concern, red fail</strong></StepRow>

            <div style={{
              border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)',
              padding: '4px 12px', marginBottom: 14,
            }}>
              {ANSWER_ROWS.map((row, i) => (
                <div key={row.label} style={{ borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none' }}>
                  <ColourPickerRow row={row} />
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
              {PRESETS.map((p) => (
                <span key={p} style={{
                  padding: '4px 10px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)',
                  fontSize: 10, fontWeight: 600, color: 'var(--text-muted)',
                }}>
                  {p}
                </span>
              ))}
            </div>

            <StepRow num={2}><strong>Publish</strong> &mdash; answers print colour-coded on the report</StepRow>

            <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
              <div style={{ padding: '8px 12px', background: 'var(--grey-50)', fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }}>
                Fire Safety Checks
              </div>
              {REPORT_ROWS.map((row) => (
                <div key={row.ref} style={{ padding: '9px 12px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 10, color: 'var(--text-muted)', flexShrink: 0 }}>{row.ref}</span>
                    <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)', flex: 1 }}>{row.question}</span>
                    <span style={{
                      fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 'var(--radius-pill)',
                      background: row.tone === 'pass' ? 'var(--pass-50)' : 'var(--fail-50)',
                      color: row.tone === 'pass' ? 'var(--green-700)' : 'var(--fail-600)',
                    }}>
                      {row.answer}
                    </span>
                  </div>
                  {row.comment && (
                    <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 4, paddingLeft: 22 }}>{row.comment}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </DeviceChrome>
  );
}
