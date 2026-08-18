import { motion } from 'framer-motion';
import { FileWarning, MailQuestion, GitCompareArrows, ArrowDown } from 'lucide-react';
import { Reveal } from '../ui/Reveal.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

/* The page's "before" beat. Brand green is deliberately absent here — it
   arrives with the solution in the next section. Artifacts are drawn, showing
   the actual failure mode rather than an icon standing in for it. */

function PaperVisual() {
  return (
    <div className="prob-art prob-art--paper" aria-hidden="true">
      <div className="prob-sheet">
        <div className="prob-sheet-head">
          <span className="prob-sheet-title" />
          <span className="prob-stamp">INCOMPLETE</span>
        </div>
        {/* Illegible handwriting */}
        <svg viewBox="0 0 220 14" className="prob-scrawl" preserveAspectRatio="none">
          <path d="M2 10 q6-8 11 0 t11 0 t9-3 t13 3 t10-2 t14 2 t9-4 t12 4" />
        </svg>
        <svg viewBox="0 0 220 14" className="prob-scrawl" preserveAspectRatio="none">
          <path d="M2 9 q8-7 14 1 t12-2 t10 2 t15-4 t11 3" />
        </svg>
        <div className="prob-sheet-row">
          <span className="prob-missing">Photo missing</span>
          <span className="prob-unsigned">Unsigned</span>
        </div>
      </div>
    </div>
  );
}

function DelayVisual() {
  const thread = [
    { label: 'Reported', age: '12 days ago' },
    { label: 'Forwarded', age: '9 days ago' },
    { label: 'Re: Re: Fwd:', age: '5 days ago' },
  ];
  return (
    <div className="prob-art" aria-hidden="true">
      <div className="prob-thread">
        {thread.map((m, i) => (
          <div key={i} className="prob-msg" style={{ marginLeft: i * 14 }}>
            <span className="prob-msg-label">{m.label}</span>
            <span className="prob-msg-age">{m.age}</span>
          </div>
        ))}
        <span className="prob-pending">Still awaiting sign-off</span>
      </div>
    </div>
  );
}

function DivergeVisual() {
  const sites = [
    { name: 'Site A', bars: [1, 1, 1, 0, 0, 0, 0] },
    { name: 'Site B', bars: [1, 1, 1, 1, 1, 1, 1] },
  ];
  return (
    <div className="prob-art" aria-hidden="true">
      <div className="prob-diverge">
        {sites.map((s) => (
          <div key={s.name} className="prob-site">
            <span className="prob-site-name">{s.name}</span>
            <div className="prob-bars">
              {s.bars.map((b, i) => (
                <span key={i} className={`prob-bar${b ? '' : ' is-empty'}`} />
              ))}
            </div>
            <span className="prob-site-count">{s.bars.filter(Boolean).length} checks logged</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const PROBLEMS = [
  {
    Icon: FileWarning,
    title: 'Fragmented data & professional liability',
    body: 'Manual reporting is flawed. Inaccurate notes and missing evidence create significant liability, wasting hours on reconciliation and risking non-compliance during HSE inspections.',
    Visual: PaperVisual,
    span: 'wide',
  },
  {
    Icon: MailQuestion,
    title: 'The cost of operational delays',
    body: 'Safety decisions are often stalled by protracted email chains. When hazard data remains trapped in inboxes rather than a dashboard, oversight is compromised, leading to remedial delays and unnecessary downtime.',
    Visual: DelayVisual,
  },
  {
    Icon: GitCompareArrows,
    title: 'Inconsistent safety standards',
    body: 'Inspection quality often varies between shifts or sites. This inconsistency undermines your safety culture, making it difficult to identify recurring risks across your warehouse and distribution network.',
    Visual: DivergeVisual,
    span: 'full',
  },
];

export function Problem() {
  return (
    <section className="prob">
      <div className="prob-inner">
        <Reveal>
          <div className="prob-head">
            <h2 className="prob-h2">The hidden cost of manual administration</h2>
            <p className="prob-lede">
              Paper-based systems and disconnected spreadsheets compromise your response to risks.
            </p>
          </div>
        </Reveal>

        <div className="prob-grid">
          {PROBLEMS.map((p, i) => (
            <motion.article
              key={p.title}
              className={`prob-card${p.span ? ` prob-card--${p.span}` : ''}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
            >
              <div className="prob-card-body">
                <span className="prob-icon">
                  <p.Icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="prob-title">{p.title}</h3>
                <p className="prob-text">{p.body}</p>
              </div>
              <p.Visual />
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="prob-bridge">
            <ArrowDown size={16} strokeWidth={1.75} />
            The HS Manager centralises safety data, ensuring every hazard is tracked,
            resolved, and audit-ready.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
