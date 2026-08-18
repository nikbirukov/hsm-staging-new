import base64, os, subprocess, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
HSM = os.path.dirname(ROOT)

def b64(path, mime):
    with open(path, "rb") as f:
        data = base64.b64encode(f.read()).decode("ascii")
    return f"data:{mime};base64,{data}"

logo_color = b64(os.path.join(HSM, "assets", "logo-lockup.png"), "image/png")
logo_white = b64(os.path.join(HSM, "assets", "logo-lockup-white.png"), "image/png")
logo_mark  = b64(os.path.join(HSM, "assets", "logo-mark.png"), "image/png")
font_bold  = b64(os.path.join(HSM, "assets", "fonts", "ITCAvantGardeGothicLT-Bold.otf"), "font/otf")

GREEN = ["#EAFBEB","#CFF5D2","#9EEBA6","#5CDC69","#2CC93B","#12B71D","#0E9918","#0B7A13","#085B0E","#063F0A"]
GREEN_LABELS = ["50","100","200","300","400","500","600","700","800","900"]
NAVY = ["#F1F5F7","#DFE7EC","#BFCFDA","#8AA3B5","#5B7B92","#365B72","#22455A","#16303F","#0D1F2D","#07131C"]
NAVY_LABELS = ["50","100","200","300","400","500","600","700","800","900"]
GREY = ["#FFFFFF","#FBFCFD","#F5F7F9","#EDF0F3","#E1E6EB","#CBD3DA","#9CA8B3","#6E7C89","#4E5C69","#33414D"]
GREY_LABELS = ["white","25","50","100","200","300","400","500","600","700"]

def swatch_strip(colors, labels, text_dark_until=4):
    cells = []
    for i, (c, l) in enumerate(zip(colors, labels)):
        fg = "#0D1F2D" if i <= text_dark_until else "#FFFFFF"
        cells.append(f'<div class="sw" style="background:{c};color:{fg}"><span>{l}</span><span class="hex">{c}</span></div>')
    return "".join(cells)

STATUS = [
    ("Pass", "#12B71D", "#EAFBEB", "Racking, forklift, fire checks that meet standard"),
    ("Fail", "#E02B20", "#FDECEA", "A defect was found and evidence attached"),
    ("Open action", "#F5A524", "#FEF5E6", "Raised from a failed question, awaiting resolution"),
    ("Info / synced", "#2F6FED", "#EAF1FE", "System state — sync, notices, references"),
    ("N/A", "#6E7C89", "#F1F4F6", "Question does not apply to this site or asset"),
]

def status_blocks():
    out = []
    for name, solid, tint, desc in STATUS:
        out.append(f'''
        <div class="status-card">
          <div class="status-top" style="background:{solid}"></div>
          <div class="status-tint" style="background:{tint}"></div>
          <div class="status-name">{name}</div>
          <div class="status-desc">{desc}</div>
          <div class="status-hex">{solid}</div>
        </div>''')
    return "".join(out)

SPACING = [4,8,12,16,24,32,48,64,80,96]
def spacing_bars():
    out = []
    maxv = 96
    for v in SPACING:
        w = 4 + (v / maxv) * 220
        out.append(f'<div class="space-row"><span class="space-label">{v}px</span><div class="space-bar" style="width:{w:.0f}px"></div></div>')
    return "".join(out)

RADII = [("xs","6px"),("sm","10px"),("md","14px"),("control","12px"),("lg / card","20px"),("xl","28px"),("2xl","36px"),("pill","999px")]
def radius_cells():
    out = []
    for name, val in RADII:
        r = "40px" if val == "999px" else val
        out.append(f'<div class="radius-cell"><div class="radius-box" style="border-radius:{r}"></div><div class="radius-name">{name}</div><div class="radius-val">{val}</div></div>')
    return "".join(out)

SHADOWS = [
    ("xs", "0 1px 2px rgba(13,31,45,.06)"),
    ("sm", "0 1px 3px rgba(13,31,45,.07), 0 1px 2px rgba(13,31,45,.04)"),
    ("md", "0 6px 16px -4px rgba(13,31,45,.10), 0 2px 5px -2px rgba(13,31,45,.06)"),
    ("lg", "0 18px 40px -12px rgba(13,31,45,.16), 0 4px 10px -4px rgba(13,31,45,.06)"),
    ("xl", "0 32px 70px -20px rgba(13,31,45,.24)"),
    ("brand", "0 10px 24px -8px rgba(18,183,29,.42)"),
]
def shadow_cells():
    out = []
    for name, val in SHADOWS:
        out.append(f'<div class="shadow-cell"><div class="shadow-box" style="box-shadow:{val}"></div><div class="shadow-name">{name}</div></div>')
    return "".join(out)

MOTION = [
    ("--dur-instant", "90ms", "micro state changes"),
    ("--dur-fast", "150ms", "hover, focus, colour"),
    ("--dur-base", "220ms", "card lift, toggles"),
    ("--dur-slow", "380ms", "progress, sheets"),
    ("--dur-page", "600ms", "page-level transitions"),
]
def motion_rows():
    out = []
    for tok, val, use in MOTION:
        out.append(f'<tr><td class="mono">{tok}</td><td class="mono">{val}</td><td>{use}</td></tr>')
    return "".join(out)

HTML = f"""<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>The HS Manager — Brand Guidelines</title>
<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap");

@font-face {{
  font-family: "ITC Avant Garde Gothic";
  src: url("{font_bold}") format("opentype");
  font-weight: 700;
  font-style: normal;
}}

:root {{
  --hsm-green:#12B71D; --hsm-navy:#0D1F2D;
  --green-50:#EAFBEB; --green-600:#0E9918; --green-700:#0B7A13;
  --navy-800:#0D1F2D; --navy-400:#5B7B92; --navy-200:#BFCFDA; --navy-100:#DFE7EC; --navy-50:#F1F5F7;
  --grey-50:#F5F7F9; --grey-200:#E1E6EB; --grey-300:#CBD3DA;
  --font-display:"ITC Avant Garde Gothic","Plus Jakarta Sans",system-ui,sans-serif;
  --font-sans:"Plus Jakarta Sans",system-ui,-apple-system,"Segoe UI",sans-serif;
  --font-mono:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
}}

* {{ box-sizing: border-box; }}
html, body {{ margin: 0; padding: 0; }}
body {{ font-family: var(--font-sans); color: var(--navy-800); }}

@page {{ size: A4; margin: 0; }}

.page {{
  width: 210mm; height: 297mm;
  position: relative;
  page-break-after: always;
  overflow: hidden;
  padding: 18mm 20mm;
}}
.page:last-child {{ page-break-after: auto; }}

.eyebrow {{
  font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
  color: var(--navy-400);
}}
.eyebrow.on-dark {{ color: rgba(255,255,255,.55); }}

h1.section-title {{
  font-family: var(--font-sans); font-weight: 800; font-size: 26px; letter-spacing: -.01em;
  color: var(--navy-800); margin: 6px 0 2px;
}}
.section-sub {{ font-size: 13px; color: #6E7C89; margin-bottom: 14mm; }}

.page-footer {{
  position: absolute; bottom: 12mm; left: 20mm; right: 20mm;
  display: flex; justify-content: space-between; align-items: center;
  font-size: 9.5px; color: #9CA8B3; letter-spacing: .04em;
  border-top: 1px solid var(--grey-200); padding-top: 6px;
}}
.page-footer .mark {{ height: 14px; opacity: .55; }}

/* ---------- COVER ---------- */
.cover {{
  background: var(--hsm-navy);
  color: #fff;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center;
  padding: 0;
}}
.cover-stripe {{ position: absolute; top: 0; left: 0; right: 0; height: 10px; display: flex; }}
.cover-stripe div {{ flex: 1; }}
.cover-logo {{ height: 64px; margin-bottom: 34px; }}
.cover-eyebrow {{ font-size: 12px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase; color: var(--hsm-green); }}
.cover-title {{
  font-family: var(--font-display); font-weight: 700; font-size: 58px; line-height: 1.05;
  letter-spacing: -.02em; margin: 18px 0 10px; max-width: 150mm;
}}
.cover-sub {{ font-size: 15px; color: rgba(255,255,255,.62); max-width: 120mm; line-height: 1.5; }}
.cover-date {{ position: absolute; bottom: 16mm; font-size: 11px; color: rgba(255,255,255,.4); letter-spacing: .06em; }}

/* ---------- CONTENTS ---------- */
.toc-list {{ display: grid; gap: 0; margin-top: 4mm; }}
.toc-row {{
  display: flex; align-items: baseline; gap: 14px; padding: 13px 0;
  border-bottom: 1px solid var(--grey-200);
}}
.toc-num {{ font-family: var(--font-display); font-size: 20px; color: var(--hsm-green); width: 34px; flex: 0 0 auto; }}
.toc-name {{ font-size: 15px; font-weight: 700; color: var(--navy-800); flex: 1; }}
.toc-desc {{ font-size: 11.5px; color: #6E7C89; }}

/* ---------- LOGO ---------- */
.logo-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 8mm; margin-bottom: 8mm; }}
.logo-card {{ border-radius: 16px; height: 55mm; display: grid; place-items: center; }}
.logo-card.light {{ background: #fff; border: 1px solid var(--grey-200); }}
.logo-card.dark {{ background: var(--hsm-navy); }}
.logo-card img {{ height: 30mm; }}
.logo-card.mark {{ background: var(--grey-50); border: 1px solid var(--grey-200); grid-column: span 2; height: 40mm; }}
.logo-card.mark img {{ height: 22mm; }}

.rule-box {{ background: var(--grey-50); border-radius: 14px; padding: 6mm 7mm; margin-top: 6mm; }}
.rule-box h3 {{ font-size: 13px; margin: 0 0 6px; color: var(--navy-800); }}
.rule-list {{ margin: 0; padding-left: 16px; font-size: 12px; line-height: 1.7; color: #33414D; }}

.clearspace-demo {{
  border: 1.5px dashed var(--hsm-green); border-radius: 14px; padding: 14mm 18mm;
  display: inline-flex; margin-top: 6mm;
}}
.clearspace-demo img {{ height: 20mm; }}

/* ---------- COLOR ---------- */
.color-group {{ margin-bottom: 7mm; }}
.color-group h3 {{ font-size: 12.5px; font-weight: 700; margin: 0 0 5px; color: var(--navy-800); }}
.swatch-strip {{ display: flex; border-radius: 10px; overflow: hidden; height: 24mm; }}
.sw {{ flex: 1; display: flex; flex-direction: column; justify-content: flex-end; padding: 6px 8px; font-size: 10px; font-weight: 700; }}
.sw .hex {{ font-family: var(--font-mono); font-weight: 500; font-size: 8.5px; opacity: .85; margin-top: 2px; }}

.core-pair {{ display: flex; gap: 8mm; }}
.core-swatch {{ flex: 1; height: 30mm; border-radius: 14px; padding: 12px 14px; display: flex; flex-direction: column; justify-content: space-between; }}
.core-swatch .name {{ color: #fff; font-weight: 700; font-size: 13px; }}
.core-swatch .hex {{ font-family: var(--font-mono); color: rgba(255,255,255,.85); font-size: 11px; }}

.status-row {{ display: grid; grid-template-columns: repeat(5, 1fr); gap: 5mm; margin-top: 4mm; }}
.status-card {{ border: 1px solid var(--grey-200); border-radius: 12px; overflow: hidden; padding-bottom: 8px; }}
.status-top {{ height: 8px; }}
.status-tint {{ height: 14mm; }}
.status-name {{ font-size: 11.5px; font-weight: 700; padding: 8px 8px 2px; }}
.status-desc {{ font-size: 9.5px; color: #6E7C89; padding: 0 8px; line-height: 1.4; min-height: 24px; }}
.status-hex {{ font-family: var(--font-mono); font-size: 9px; color: #9CA8B3; padding: 4px 8px 0; }}

/* ---------- TYPE ---------- */
.type-display-sample {{ font-family: var(--font-display); font-weight: 700; font-size: 46px; letter-spacing: -.03em; line-height: 1.08; color: var(--navy-800); margin: 4mm 0 3mm; }}
.type-caption {{ font-family: var(--font-mono); font-size: 10.5px; color: #6E7C89; }}

.heading-row {{ display: flex; align-items: baseline; gap: 16px; padding: 9px 0; border-bottom: 1px solid var(--grey-200); }}
.heading-row .tag {{ font-family: var(--font-mono); font-size: 10px; color: #6E7C89; width: 78px; flex: 0 0 auto; }}
.heading-row .sample {{ font-weight: 700; letter-spacing: -.018em; color: var(--navy-800); }}

.body-block {{ margin-top: 7mm; display: grid; gap: 9px; }}
.body-block p {{ margin: 0; }}

.mono-block {{ margin-top: 8mm; background: var(--navy-800); color: #fff; border-radius: 12px; padding: 8mm; font-family: var(--font-mono); font-size: 13px; line-height: 1.8; }}
.mono-block .dim {{ color: rgba(255,255,255,.45); }}

/* ---------- SPACING ---------- */
.space-row {{ display: flex; align-items: center; gap: 10px; padding: 5px 0; }}
.space-label {{ font-family: var(--font-mono); font-size: 10.5px; color: #6E7C89; width: 40px; }}
.space-bar {{ height: 12px; background: var(--hsm-green); border-radius: 3px; }}

.radius-row {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 6mm; margin-top: 5mm; }}
.radius-cell {{ text-align: center; }}
.radius-box {{ height: 20mm; background: var(--grey-50); border: 1px solid var(--grey-300); margin-bottom: 5px; }}
.radius-name {{ font-size: 11px; font-weight: 700; }}
.radius-val {{ font-family: var(--font-mono); font-size: 9.5px; color: #6E7C89; }}

/* ---------- ELEVATION / MOTION ---------- */
.shadow-row {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 8mm 6mm; margin-top: 5mm; background: var(--grey-50); border-radius: 14px; padding: 8mm; }}
.shadow-cell {{ text-align: center; }}
.shadow-box {{ height: 18mm; background: #fff; border-radius: 12px; margin-bottom: 8px; }}
.shadow-name {{ font-size: 11px; font-weight: 700; color: var(--navy-800); }}

table.motion-table {{ width: 100%; border-collapse: collapse; margin-top: 5mm; font-size: 11.5px; }}
table.motion-table th {{ text-align: left; font-size: 10px; letter-spacing: .06em; text-transform: uppercase; color: #6E7C89; padding: 6px 8px; border-bottom: 1px solid var(--grey-300); }}
table.motion-table td {{ padding: 8px; border-bottom: 1px solid var(--grey-200); }}
table.motion-table td.mono {{ font-family: var(--font-mono); color: var(--navy-800); }}

/* ---------- COMPONENTS ---------- */
.comp-row {{ display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 6mm; }}
.demo-btn {{ display: inline-flex; align-items: center; height: 38px; padding: 0 18px; border-radius: 12px; font-size: 13.5px; font-weight: 600; }}
.demo-btn.primary {{ background: var(--hsm-green); color: #fff; }}
.demo-btn.secondary {{ background: var(--hsm-navy); color: #fff; }}
.demo-btn.outline {{ background: #fff; color: var(--navy-800); border: 1px solid var(--grey-300); }}
.demo-badge {{ display: inline-flex; align-items: center; padding: 4px 11px; border-radius: 999px; font-size: 11px; font-weight: 700; }}
.demo-badge.pass {{ background: #EAFBEB; color: #0B7A13; }}
.demo-badge.fail {{ background: #FDECEA; color: #BE1D14; }}
.demo-badge.brand {{ background: var(--hsm-green); color: #fff; }}
.demo-pill {{ display: inline-flex; align-items: center; padding: 5px 12px; border-radius: 999px; font-size: 11px; font-weight: 700; }}
.demo-card {{ background: #fff; border: 1px solid var(--grey-200); border-radius: 20px; box-shadow: 0 1px 3px rgba(13,31,45,.07); padding: 14px 16px; width: 55mm; }}
.demo-card .lbl {{ font-size: 10px; letter-spacing: .07em; text-transform: uppercase; color: #6E7C89; font-weight: 700; }}
.demo-card .val {{ font-family: var(--font-display); font-size: 26px; margin-top: 6px; }}

/* ---------- CLOSING ---------- */
.closing {{ background: var(--hsm-navy); color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }}
.closing img {{ height: 40px; margin-bottom: 22px; }}
.closing h2 {{ font-family: var(--font-display); font-weight: 700; font-size: 30px; margin: 0 0 10px; }}
.closing p {{ font-size: 13px; color: rgba(255,255,255,.6); max-width: 110mm; line-height: 1.6; }}
</style>
</head>
<body>

<!-- COVER -->
<div class="page cover">
  <div class="cover-stripe">
    <div style="background:#5CDC69"></div><div style="background:#F5A524"></div>
    <div style="background:#12B71D"></div><div style="background:#E02B20"></div>
  </div>
  <img class="cover-logo" src="{logo_white}" alt="hsmanager">
  <span class="cover-eyebrow">Brand Guidelines</span>
  <div class="cover-title">The HS Manager</div>
  <p class="cover-sub">Digital inspections, incident reporting and audit-ready evidence for UK warehousing, logistics and manufacturing.</p>
  <span class="cover-date">Version 1.0 &middot; August 2026</span>
</div>

<!-- CONTENTS -->
<div class="page">
  <span class="eyebrow">Contents</span>
  <h1 class="section-title">What's inside</h1>
  <p class="section-sub">A quick reference to the hsmanager visual identity — logo, colour, type and the core system tokens.</p>
  <div class="toc-list">
    <div class="toc-row"><span class="toc-num">01</span><span class="toc-name">Logo</span><span class="toc-desc">Lockup, mark, clear space and minimum size</span></div>
    <div class="toc-row"><span class="toc-num">02</span><span class="toc-name">Colour</span><span class="toc-desc">Brand core, green &amp; navy scales, neutrals, status</span></div>
    <div class="toc-row"><span class="toc-num">03</span><span class="toc-name">Typography</span><span class="toc-desc">Display face, heading ladder, body, mono</span></div>
    <div class="toc-row"><span class="toc-num">04</span><span class="toc-name">Spacing &amp; radius</span><span class="toc-desc">4px scale, corner radii, control heights</span></div>
    <div class="toc-row"><span class="toc-num">05</span><span class="toc-name">Elevation &amp; motion</span><span class="toc-desc">Shadow scale, durations and easing</span></div>
    <div class="toc-row"><span class="toc-num">06</span><span class="toc-name">Components</span><span class="toc-desc">Buttons, badges, status pills, cards in practice</span></div>
  </div>
  <div class="page-footer"><span>The HS Manager &middot; Brand Guidelines</span><span>02</span></div>
</div>

<!-- LOGO -->
<div class="page">
  <span class="eyebrow">01 &mdash; Logo</span>
  <h1 class="section-title">Lockup &amp; mark</h1>
  <p class="section-sub">Supplied artwork &mdash; never redrawn, recoloured or stretched.</p>

  <div class="logo-grid">
    <div class="logo-card light"><img src="{logo_color}" alt="colour lockup"></div>
    <div class="logo-card dark"><img src="{logo_white}" alt="white lockup"></div>
    <div class="logo-card mark"><img src="{logo_mark}" alt="mark"></div>
  </div>

  <div class="rule-box">
    <h3>Clear space &amp; minimum size</h3>
    <ul class="rule-list">
      <li>Clear space around the lockup = half the height of the mark.</li>
      <li>Minimum lockup width: 96px on screen, 25mm in print.</li>
      <li>Mark alone, minimum 24px &mdash; app icons, favicons, avatars.</li>
      <li>Use the white lockup on navy or photographic backgrounds; never place the colour lockup on anything darker than grey-100.</li>
    </ul>
  </div>
  <div class="page-footer"><span>The HS Manager &middot; Brand Guidelines</span><span>03</span></div>
</div>

<!-- COLOUR -->
<div class="page">
  <span class="eyebrow">02 &mdash; Colour</span>
  <h1 class="section-title">Palette</h1>
  <p class="section-sub">The two brand primitives, sampled from the logo artwork, extended into functional scales.</p>

  <div class="core-pair">
    <div class="core-swatch" style="background:#12B71D"><span class="name">HS Green</span><span class="hex">--hsm-green &middot; #12B71D</span></div>
    <div class="core-swatch" style="background:#0D1F2D"><span class="name">HS Navy</span><span class="hex">--hsm-navy &middot; #0D1F2D</span></div>
  </div>

  <div class="color-group" style="margin-top:8mm">
    <h3>Green scale &mdash; actions, pass states, brand accents</h3>
    <div class="swatch-strip">{swatch_strip(GREEN, GREEN_LABELS, text_dark_until=3)}</div>
  </div>

  <div class="color-group">
    <h3>Navy / ink scale &mdash; text, sidebars, dark sections</h3>
    <div class="swatch-strip">{swatch_strip(NAVY, NAVY_LABELS, text_dark_until=2)}</div>
  </div>

  <div class="color-group">
    <h3>Neutrals &mdash; surfaces, borders, dividers</h3>
    <div class="swatch-strip">{swatch_strip(GREY, GREY_LABELS, text_dark_until=5)}</div>
  </div>
  <div class="page-footer"><span>The HS Manager &middot; Brand Guidelines</span><span>04</span></div>
</div>

<!-- STATUS COLOUR -->
<div class="page">
  <span class="eyebrow">02 &mdash; Colour</span>
  <h1 class="section-title">Inspection status vocabulary</h1>
  <p class="section-sub">Pass, fail, open action, info and N/A &mdash; this mapping is fixed and never reassigned to other meanings.</p>
  <div class="status-row">{status_blocks()}</div>

  <div class="rule-box" style="margin-top:12mm">
    <h3>Usage rule</h3>
    <ul class="rule-list">
      <li>Green always means pass or compliant &mdash; never used for anything else in the product.</li>
      <li>Red always means fail &mdash; reserved for defects and destructive actions.</li>
      <li>Amber marks an open, unresolved action; it is not a warning about the interface itself.</li>
      <li>Grey N/A is neutral &mdash; the question doesn't apply, it hasn't been skipped.</li>
    </ul>
  </div>
  <div class="page-footer"><span>The HS Manager &middot; Brand Guidelines</span><span>05</span></div>
</div>

<!-- TYPE 1 -->
<div class="page">
  <span class="eyebrow">03 &mdash; Typography</span>
  <h1 class="section-title">Display face</h1>
  <p class="section-sub">ITC Avant Garde Gothic, Bold only. Headlines and big numbers &mdash; never body copy.</p>
  <div class="type-display-sample">Inspect.<br>Report.<br>Resolve.</div>
  <div class="type-caption">--font-display &middot; weight 700 &middot; tracking -.03em &middot; line-height 1.06</div>

  <div style="margin-top:12mm">
    <h3 style="font-size:12.5px;font-weight:700;margin:0 0 4px">Heading ladder &mdash; Plus Jakarta Sans, 700, -1.8% tracking</h3>
    <div class="heading-row"><span class="tag">H1 / 30px</span><span class="sample" style="font-size:30px">Unified oversight across every site</span></div>
    <div class="heading-row"><span class="tag">H2 / 24px</span><span class="sample" style="font-size:24px">Unified oversight across every site</span></div>
    <div class="heading-row"><span class="tag">H3 / 20px</span><span class="sample" style="font-size:20px">Unified oversight across every site</span></div>
    <div class="heading-row"><span class="tag">H4 / 17px</span><span class="sample" style="font-size:17px">Unified oversight across every site</span></div>
  </div>
  <div class="page-footer"><span>The HS Manager &middot; Brand Guidelines</span><span>06</span></div>
</div>

<!-- TYPE 2 -->
<div class="page">
  <span class="eyebrow">03 &mdash; Typography</span>
  <h1 class="section-title">Body, caption &amp; mono</h1>
  <p class="section-sub">Plus Jakarta Sans for everything read; JetBrains Mono for anything measured.</p>

  <div class="body-block">
    <p style="font-size:17px">Body large &mdash; 17px. Marketing paragraphs and lead-ins.</p>
    <p style="font-size:15px">Body &mdash; 15px, line-height 1.5. The default for app UI and long-form copy.</p>
    <p style="font-size:13.5px;color:#6E7C89">Body small &mdash; 13.5px. Table cells, hints and secondary detail.</p>
    <p style="font-size:12px;color:#6E7C89">Caption &mdash; 12px. Timestamps, badge text and metadata.</p>
    <p style="font-size:11px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#5B7B92">Eyebrow &mdash; 11px, uppercase, .09em tracking</p>
  </div>

  <div class="mono-block">
    RACK-DAV-C14 &middot; FLT-08 &middot; 07/05/2026 14:32<br>
    0123456789 <span class="dim">&mdash; tabular figures in tables and meters</span>
  </div>
  <p class="type-caption" style="margin-top:6px">--font-mono &middot; never used for sentences</p>
  <div class="page-footer"><span>The HS Manager &middot; Brand Guidelines</span><span>07</span></div>
</div>

<!-- SPACING -->
<div class="page">
  <span class="eyebrow">04 &mdash; Spacing &amp; radius</span>
  <h1 class="section-title">Scale &amp; corners</h1>
  <p class="section-sub">A 4px base grid. Card padding 24, section gaps 32&ndash;48, page gutters 24 (40 on wide layouts).</p>

  <div style="margin-top:2mm">{spacing_bars()}</div>

  <h3 style="font-size:12.5px;font-weight:700;margin:10mm 0 0">Corner radii</h3>
  <div class="radius-row">{radius_cells()}</div>

  <h3 style="font-size:12.5px;font-weight:700;margin:10mm 0 0">Control heights</h3>
  <div class="comp-row" style="margin-top:4mm">
    <div class="demo-btn primary" style="height:34px">Small &middot; 34px</div>
    <div class="demo-btn primary" style="height:42px">Medium &middot; 42px</div>
    <div class="demo-btn primary" style="height:52px">Large &middot; 52px</div>
  </div>
  <div class="page-footer"><span>The HS Manager &middot; Brand Guidelines</span><span>08</span></div>
</div>

<!-- ELEVATION / MOTION -->
<div class="page">
  <span class="eyebrow">05 &mdash; Elevation &amp; motion</span>
  <h1 class="section-title">Shadows &amp; timing</h1>
  <p class="section-sub">Soft, low-contrast navy shadows. Short, flat easing &mdash; no bounce, no overshoot.</p>

  <div class="shadow-row">{shadow_cells()}</div>

  <h3 style="font-size:12.5px;font-weight:700;margin:10mm 0 0">Motion durations</h3>
  <table class="motion-table">
    <tr><th>Token</th><th>Value</th><th>Used for</th></tr>
    {motion_rows()}
  </table>
  <div class="page-footer"><span>The HS Manager &middot; Brand Guidelines</span><span>09</span></div>
</div>

<!-- COMPONENTS -->
<div class="page">
  <span class="eyebrow">06 &mdash; Components</span>
  <h1 class="section-title">The system in practice</h1>
  <p class="section-sub">Green primary actions, navy secondary, the fixed status vocabulary, and a 20px-radius card.</p>

  <h3 style="font-size:12px;font-weight:700;color:#6E7C89;text-transform:uppercase;letter-spacing:.07em;margin:6mm 0 3mm">Buttons</h3>
  <div class="comp-row">
    <div class="demo-btn primary">Start free trial</div>
    <div class="demo-btn secondary">Book a demo</div>
    <div class="demo-btn outline">Export PDF</div>
  </div>

  <h3 style="font-size:12px;font-weight:700;color:#6E7C89;text-transform:uppercase;letter-spacing:.07em;margin:6mm 0 3mm">Badges &amp; status</h3>
  <div class="comp-row">
    <div class="demo-badge brand">Pro</div>
    <div class="demo-badge pass">Compliant</div>
    <div class="demo-badge fail">2 defects</div>
    <div class="demo-pill" style="background:#EAFBEB;color:#0B7A13">Pass</div>
    <div class="demo-pill" style="background:#FDECEA;color:#BE1D14">Fail</div>
    <div class="demo-pill" style="background:#FEF5E6;color:#D2860C">Open</div>
    <div class="demo-pill" style="background:#F1F4F6;color:#6E7C89">N/A</div>
  </div>

  <h3 style="font-size:12px;font-weight:700;color:#6E7C89;text-transform:uppercase;letter-spacing:.07em;margin:6mm 0 3mm">Metric card</h3>
  <div class="demo-card">
    <div class="lbl">Compliance score</div>
    <div class="val">94%</div>
  </div>
  <div class="page-footer"><span>The HS Manager &middot; Brand Guidelines</span><span>10</span></div>
</div>

<!-- CLOSING -->
<div class="page closing">
  <img src="{logo_white}" alt="hsmanager">
  <h2>Keep it consistent.</h2>
  <p>Every screen, document and touchpoint should read as one product. When in doubt, default to the tokens in this book rather than a one-off value.</p>
</div>

</body>
</html>
"""

out_html = os.path.join(ROOT, "brand-book.html")
with open(out_html, "w", encoding="utf-8") as f:
    f.write(HTML)
print(f"Wrote {out_html} ({len(HTML)} chars)")

out_pdf = os.path.join(ROOT, "HS-Manager-Brand-Guidelines.pdf")
edge = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
cmd = [
    edge,
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={out_pdf}",
    "--print-to-pdf-no-header",
    "--no-sandbox",
    "file:///" + out_html.replace("\\", "/"),
]
print("Running:", " ".join(cmd))
result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
print("returncode:", result.returncode)
if result.stdout: print("stdout:", result.stdout[-2000:])
if result.stderr: print("stderr:", result.stderr[-2000:])
print("PDF exists:", os.path.exists(out_pdf), os.path.getsize(out_pdf) if os.path.exists(out_pdf) else 0)
