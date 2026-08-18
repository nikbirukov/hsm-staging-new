# UI kit — HS Manager inspection app (iOS / Android / Windows)

Three phone frames: an interactive one (Home → Templates → run an inspection → sign off), plus the template library and the inspection run shown standing alone.

**Files**
- `index.html` — mounts `MobileKit`.
- `PhoneFrame.jsx` — `PhoneFrame`, `AppBar`, `TabBar`.
- `AppScreens.jsx` — `HomeScreen`, `TemplatesScreen`, `InspectionScreen`, `SignOffScreen`, `MobileKit`.

**Rules carried over from the product** answer controls are 44px minimum for gloved hands; the status bar shows an offline indicator because the app is designed to work in cold stores and dead zones; a failed answer always expects photo evidence and raises an action.

**Source** No app code or screenshots were supplied. Screens follow the flow described in the App Store / Google Play listings and the marketing site (60–70+ checklists, offline completion, photo evidence, PDF report, action tracking). Layout is inferred, not copied — verify against the real app before treating it as ground truth.
