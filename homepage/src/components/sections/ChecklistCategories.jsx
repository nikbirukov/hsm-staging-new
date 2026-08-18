import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Icon } from '../ui/Icon.jsx';
import { RevealGroup, revealItem } from '../ui/Reveal.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

const CATEGORIES = [
  {
    icon: 'warning', name: 'Risk Assessment', count: 9,
    description: 'Core H&amp;S audits covering daily checks, contractor control, and warehouse-wide risk.',
    featured: { name: 'Daily H&amp;S Check', meta: '33 questions &middot; Yes / No / N-A' },
    items: ['H&amp;S Audit', 'Weekly H&amp;S Check', 'Control of Contractors &ndash; Monitoring Checklist', 'Covid Checklist', 'Risk Management &ndash; DSE / Ergonomic Self-Assessment', 'Control of Contractors &ndash; Contractor Checklist (Pre-work)', 'Warehouse Audit Checklist', 'Retail Warehouse Safety Checklist'],
  },
  {
    icon: 'local_shipping', name: 'Vehicle', count: 8,
    description: 'Daily walk-around checks and pre-use inspections for HGVs, FLTs and MHE.',
    featured: { name: 'Drivers Vehicle Defect Check', meta: '24 questions &middot; Defect Found / No Defect' },
    items: ['Operator Pre-usage Equipment Checklist &ndash; FLTs', 'Operator Pre-usage Processing / Picking Trucks', 'Transport Audit Checklist', 'Vehicle Defect Sheet', 'Gantry Crane Checklist', 'Cherry Picker Checklist', 'Forklift Pre-Start Checklist'],
  },
  {
    icon: 'warehouse', name: 'Racking', count: 4,
    description: 'SEMA-aligned racking inspections with red / amber / green risk ranking.',
    featured: { name: 'Racking Inspection', meta: '6 questions &middot; Comments / Actions / Photos' },
    items: ['Work Equipment &ndash; Racking Inspection Record', 'Racking Inspection Damage Report', 'Racking Identification, Design and Conformity'],
  },
  {
    icon: 'local_fire_department', name: 'Fire Safety', count: 6,
    description: 'Verify fire safety equipment is effective and maintained on a regular schedule.',
    featured: { name: 'Fire Equipment Safety Checklist', meta: '14 questions &middot; Yes / No / N-A' },
    items: ['Fire Safety Inspection', 'Monthly Fire Inspection', 'Quarterly Fire Inspection', 'Fire Door Inspection', 'Weekly Fire Inspection'],
  },
  {
    icon: 'medical_services', name: 'First Aid', count: 3,
    description: 'Keep first aid provision complete, in-date and properly stocked.',
    featured: { name: 'First Aid Materials &ndash; Monthly Inspection', meta: '15 questions &middot; Required / Actual Quantity' },
    items: ['First Aid Provision', 'First Aid Report'],
  },
  {
    icon: 'report', name: 'Accident and Incident', count: 3,
    description: 'RIDDOR-ready reporting for accidents and near-misses across the site.',
    featured: { name: 'Accident and Incident Senior Management Report', meta: '20 questions &middot; Comments / Actions / Photos' },
    items: ['Accident Statement', 'Incident Report'],
  },
  {
    icon: 'science', name: 'Equipment &amp; COSHH', count: 9,
    description: 'Pre-use equipment checks and safe handling of hazardous substances.',
    featured: { name: 'Work Equipment &ndash; MHE Pre-Use Check Sheet', meta: '24 questions &middot; Serviceable / Fault / N-A' },
    items: ['Safe Use &amp; Handling of Chemicals', 'MHE Observation Check', 'Electrical Equipment Inspection', 'Ladders and Step Ladders', 'Lifting Operations', 'Management of Asbestos Hazards', 'Safe Operation of Lifting Equipment Checklist', 'Safe Storage, Handling and Use of Flammable Liquids'],
  },
  {
    icon: 'domain', name: 'Workplace &amp; Premises', count: 13,
    description: 'Site-wide organisation, hygiene, welfare and yard inspections.',
    featured: { name: '5S Audit', meta: '31 questions &middot; Acceptable / Concern / Non-Conformance' },
    items: ['6S Audit', 'Cold Storage / Warehouse Inspection', 'Daily Yard Check', 'H&amp;S Sheet &ndash; Loading Bays, Marshalling Areas', 'Safety Signs Checklist', 'Working Environment &ndash; Mezzanine Floors', 'Warehouse Access &amp; Key Control Checklist', 'Warehouse Hygiene &amp; Housekeeping Checklist', 'Weekly Yard Check', 'Welfare &ndash; Daily Workplace Inspections', 'Welfare &ndash; Monthly Workplace Lighting Inspections', 'Loading Bay &amp; Dock Leveller Checklist'],
  },
  {
    icon: 'groups', name: 'Management', count: 5,
    description: 'Validate senior leadership commitment to health &amp; safety.',
    featured: { name: 'Senior Management Checklist', meta: '26 questions &middot; Yes / No / N-A' },
    items: ['Storage Temperature Monitoring Log', 'Daily Handover', 'Daily Management Inspection', 'Weekly Management Inspection'],
  },
  {
    icon: 'eco', name: 'Environmental', count: 2,
    description: 'Noise and environmental risk assessments for site-wide compliance.',
    featured: { name: 'Environmental Management Quarterly Inspection', meta: '9 questions &middot; Comments / Actions / Photos' },
    items: ['Initial Noise Level Record'],
  },
];

function CategoryCard({ cat, isOpen, onToggle }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      layout
      variants={revealItem}
      style={{
        borderRadius: 'var(--radius-card)', background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)', boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        overflow: 'hidden', transition: 'box-shadow var(--dur-base) var(--ease-standard)',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: 14,
          padding: 22, cursor: 'pointer', textAlign: 'left', background: 'none',
        }}
      >
        <span style={{
          width: 44, height: 44, borderRadius: 'var(--radius-md)', flexShrink: 0,
          background: 'var(--surface-brand-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name={cat.icon} size={22} color="var(--green-600)" fill={1} />
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h3 style={{ fontSize: 'var(--text-h4)', margin: 0 }} dangerouslySetInnerHTML={{ __html: cat.name }} />
            <span style={{
              fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-bold)', color: 'var(--green-700)',
              background: 'var(--green-50)', borderRadius: 'var(--radius-pill)', padding: '2px 8px', flexShrink: 0,
            }}>
              {cat.count}
            </span>
          </div>
          <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', margin: '4px 0 0', lineHeight: 'var(--leading-normal)' }} dangerouslySetInnerHTML={{ __html: cat.description }} />
        </div>
        <Icon
          name="expand_more" size={20} color="var(--text-muted)"
          style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast) var(--ease-standard)' }}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.28, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 22px 22px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', marginBottom: 12,
                borderRadius: 'var(--radius-md)', background: 'var(--surface-brand-soft)', border: '1px solid var(--green-200)',
              }}>
                <Icon name="star" size={16} color="var(--green-600)" fill={1} style={{ flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }} dangerouslySetInnerHTML={{ __html: cat.featured.name }} />
                  <div style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }} dangerouslySetInnerHTML={{ __html: cat.featured.meta }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {cat.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '6px 4px' }}>
                    <Icon name="checklist" size={15} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)' }} dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ChecklistCategories() {
  const [openId, setOpenId] = useState(null);

  return (
    <section style={{ padding: '0 0 clamp(56px, 8vw, 104px)' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <RevealGroup
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 16 }}
          className="checklist-categories-grid"
        >
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.name}
              cat={cat}
              isOpen={openId === cat.name}
              onToggle={() => setOpenId((id) => (id === cat.name ? null : cat.name))}
            />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
