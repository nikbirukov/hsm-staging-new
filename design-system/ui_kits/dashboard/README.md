# UI kit — HS Manager web dashboard (myaccount.thehsmanager.co.uk)

Navy sidebar shell with four working screens. Clicking a row in Dashboard or Inspections opens the report view; Actions opens a reassign dialog.

**Files**
- `index.html` — mounts `AppShell`.
- `data.jsx` — sample inspections, actions and report answers.
- `AppShell.jsx` — sidebar + routing; `PlaceholderScreen` for surfaces not supplied in the source.
- `DashboardScreen.jsx`, `InspectionsScreen.jsx`, `ActionsScreen.jsx`, `ReportScreen.jsx`.

**Source** No product code or Figma file was supplied. Screens are composed from the design system's own primitives and the feature set described on thehsmanager.co.uk (dashboards, action tracking to resolution, PDF/CSV export, GPS-stamped photo evidence, offline sync). Templates, Sites & teams and Settings are deliberately left as an empty state rather than invented.
