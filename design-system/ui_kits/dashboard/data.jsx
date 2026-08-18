const SITES = ['Daventry DC', 'Rugby Hub', 'Manchester 2', 'Avonmouth 3PL'];

const INSPECTIONS = [
  { id: 'r1', ref: 'Racking Inspection — Aisle C', template: 'SEMA Racking', site: 'Daventry DC', inspector: 'Sam Okoye', date: '07/05/2026 14:32', status: 'fail', score: 82 },
  { id: 'r2', ref: 'Forklift Pre-Start — FLT-08', template: 'MHE Pre-Use', site: 'Rugby Hub', inspector: 'Dan Whyte', date: '07/05/2026 06:14', status: 'pass', score: 100 },
  { id: 'r3', ref: 'Weekly Fire Safety Walk', template: 'Fire Safety', site: 'Manchester 2', inspector: 'Priya Nair', date: '06/05/2026 11:02', status: 'open', score: 91 },
  { id: 'r4', ref: 'Daily H&S Check — Goods In', template: 'Daily Walk-Through', site: 'Daventry DC', inspector: 'Sam Okoye', date: '06/05/2026 07:45', status: 'pass', score: 97 },
  { id: 'r5', ref: 'COSHH Store Audit', template: 'COSHH', site: 'Avonmouth 3PL', inspector: 'Leon Bright', date: '05/05/2026 15:20', status: 'pending', score: 88 },
  { id: 'r6', ref: 'Loading Bay & Dock Levellers', template: 'Workplace & Premises', site: 'Rugby Hub', inspector: 'Dan Whyte', date: '05/05/2026 09:30', status: 'pass', score: 100 },
];

const ACTIONS = [
  { id: 'a1', defect: 'Beam damage at rack C-14, load removed', site: 'Daventry DC', owner: 'M. Ellis', due: '09/05/2026', priority: 'High', status: 'overdue' },
  { id: 'a2', defect: 'Fire exit 3 obstructed by pallets', site: 'Manchester 2', owner: 'P. Nair', due: '11/05/2026', priority: 'High', status: 'open' },
  { id: 'a3', defect: 'FLT-08 seatbelt buckle worn', site: 'Rugby Hub', owner: 'D. Whyte', due: '14/05/2026', priority: 'Medium', status: 'open' },
  { id: 'a4', defect: 'Spill kit restock — chemical store', site: 'Avonmouth 3PL', owner: 'L. Bright', due: '02/05/2026', priority: 'Low', status: 'resolved' },
  { id: 'a5', defect: 'Aisle floor marking faded, bay 12–18', site: 'Daventry DC', owner: 'M. Ellis', due: '18/05/2026', priority: 'Medium', status: 'open' },
];

const REPORT_QUESTIONS = [
  { q: 'Are all racking uprights free from visible damage?', a: 'pass' },
  { q: 'Are load notices displayed and legible for every run?', a: 'pass' },
  { q: 'Are beam connector locks in place on all beams?', a: 'fail', note: 'Two missing locks at C-14. Bay off-loaded and cordoned pending repair.', photos: 2 },
  { q: 'Is there evidence of impact damage to frames at floor level?', a: 'fail', note: 'Front upright C-14 deflection beyond SEMA tolerance — red risk.', photos: 3 },
  { q: 'Are aisles clear of obstruction and debris?', a: 'pass' },
  { q: 'Are pallets in good condition and correctly seated?', a: 'pass' },
  { q: 'Is racking protection fitted at aisle ends?', a: 'na' },
];

Object.assign(window, { SITES, INSPECTIONS, ACTIONS, REPORT_QUESTIONS });
