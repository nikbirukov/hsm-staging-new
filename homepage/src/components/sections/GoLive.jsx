import { motion, useReducedMotion } from 'framer-motion';
import {
  Lock, Smartphone, Tablet, Laptop, FileText, ArrowRight, Check,
} from 'lucide-react';
import { Reveal } from '../ui/Reveal.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

/* Deliberately not three identical cards in a row: the steps sit on a
   connecting track, each offset progressively lower, and each carries a
   different drawn visual so they read as a sequence rather than a grid.
   Icons are Lucide (1.5px stroke) throughout this section. */

const STROKE = 1.5;

function SignupVisual() {
  return (
    <div className="golive-vis">
      <div className="golive-field">
        <span className="golive-field-label">Work email</span>
        <span className="golive-caret" aria-hidden="true" />
      </div>
      <div className="golive-cta-chip">
        Create my free account
        <ArrowRight size={13} strokeWidth={2} />
      </div>
      <p className="golive-vis-note">
        <Lock size={12} strokeWidth={STROKE} />
        No card details
      </p>
    </div>
  );
}

function DevicesVisual() {
  const devices = [
    { Icon: Smartphone, label: 'iOS' },
    { Icon: Tablet, label: 'Android' },
    { Icon: Laptop, label: 'Windows' },
  ];
  return (
    <div className="golive-vis">
      <div className="golive-devices">
        {devices.map(({ Icon, label }) => (
          <div key={label} className="golive-device">
            <Icon size={19} strokeWidth={STROKE} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="golive-vis-note">
        <Check size={12} strokeWidth={2.2} />
        One login, every device
      </p>
    </div>
  );
}

function ReportVisual() {
  const rows = [
    { tone: 'var(--pass-500)', w: '84%' },
    { tone: 'var(--warn-500)', w: '62%' },
    { tone: 'var(--pass-500)', w: '78%' },
  ];
  return (
    <div className="golive-vis">
      <div className="golive-report">
        <span className="golive-report-title" />
        <span className="golive-report-sub" />
        <div className="golive-report-rows">
          {rows.map((r, i) => (
            <span key={i} className="golive-report-row">
              <span className="golive-report-dot" style={{ background: r.tone }} />
              <span className="golive-report-line" style={{ width: r.w }} />
            </span>
          ))}
        </div>
      </div>
      <p className="golive-vis-note">
        <FileText size={12} strokeWidth={STROKE} />
        Audit-ready PDF
      </p>
    </div>
  );
}

const STEPS = [
  {
    n: '01',
    title: 'Create your free account',
    body: 'Gain full platform access in under five minutes with no credit card required or commitment.',
    Visual: SignupVisual,
  },
  {
    n: '02',
    title: 'Equip your team',
    body: 'Install the app on any device (iOS, Android, Windows) to eliminate manual paperwork and ensure real-time reporting.',
    Visual: DevicesVisual,
  },
  {
    n: '03',
    title: 'Generate professional reports',
    body: 'Utilise our 70+ HSE-aligned checklists to produce comprehensive, audit-ready PDF reports from day one.',
    Visual: ReportVisual,
  },
];

export function GoLive() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="golive">
      <div className="golive-inner">
        <Reveal>
          <div className="golive-head">
            <h2 className="golive-h2">Go live in 3 simple steps</h2>
            <p className="golive-lede">
              From signing up to a finished, audit-ready report &mdash; usually inside a morning.
            </p>
          </div>
        </Reveal>

        <ol className="golive-track">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              className="golive-step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
            >
              <span className="golive-marker" aria-hidden="true">
                <motion.span
                  className="golive-dot"
                  animate={reduceMotion ? {} : { scale: [1, 1.35, 1], opacity: [0.9, 0.35, 0.9] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.55 }}
                />
              </span>

              <span className="golive-num">{s.n}</span>
              <h3 className="golive-title">{s.title}</h3>
              <p className="golive-body">{s.body}</p>
              <s.Visual />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
