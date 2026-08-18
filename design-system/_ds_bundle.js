/* @ds-bundle: {"format":4,"namespace":"HSManagerDesignSystem_7bf991","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ChecklistRow","sourcePath":"components/data/ChecklistRow.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d34994cb648b","components/core/Button.jsx":"a76319ad7cda","components/core/Card.jsx":"14ab6b7a5e5b","components/core/Icon.jsx":"f6c9f0a4dda0","components/core/IconButton.jsx":"19def5a4b570","components/core/Logo.jsx":"3aa59bb8a1e8","components/core/Tag.jsx":"923cf12c3a24","components/data/ChecklistRow.jsx":"344819f431fd","components/data/DataTable.jsx":"2d9e835340bd","components/data/StatCard.jsx":"1f464a2f6b70","components/feedback/Alert.jsx":"be0a54da4fc2","components/feedback/EmptyState.jsx":"8ba06f9b0e6b","components/feedback/Modal.jsx":"2e91349d8e0c","components/feedback/ProgressBar.jsx":"d5b7c4231257","components/feedback/StatusPill.jsx":"4d16169dca03","components/forms/Checkbox.jsx":"ed70c1fd0281","components/forms/Input.jsx":"0f3af3669c73","components/forms/RadioGroup.jsx":"134a3350c886","components/forms/SearchField.jsx":"c21804e57398","components/forms/Select.jsx":"3705c3405ccd","components/forms/Switch.jsx":"6d3d3765bed8","components/forms/Textarea.jsx":"aeb17aebe6bc","components/navigation/SidebarNav.jsx":"13a0ea736bd3","components/navigation/Tabs.jsx":"2e114ffa32bd","components/navigation/TopBar.jsx":"56ed2d0498f4","ui_kits/dashboard/ActionsScreen.jsx":"b56525beaf7d","ui_kits/dashboard/AppShell.jsx":"028474b19df9","ui_kits/dashboard/DashboardScreen.jsx":"ac73e217bea7","ui_kits/dashboard/InspectionsScreen.jsx":"0b8724dbe08d","ui_kits/dashboard/ReportScreen.jsx":"878936dbb11a","ui_kits/dashboard/data.jsx":"a5a751219651","ui_kits/website/HomeSections.jsx":"267811a11970","ui_kits/website/PricingSection.jsx":"611960804eb6","ui_kits/website/SiteChrome.jsx":"1646947270d4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HSManagerDesignSystem_7bf991 = window.HSManagerDesignSystem_7bf991 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  padding = 24,
  interactive = false,
  tone = 'default',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    },
    sunken: {
      background: 'var(--grey-50)',
      border: '1px solid var(--border-subtle)'
    },
    brand: {
      background: 'var(--surface-brand-soft)',
      border: '1px solid var(--green-200)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.82)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Material Symbols Rounded glyph. Icon set substitution â€” see readme ICONOGRAPHY. */
function Icon({
  name,
  size = 20,
  weight = 400,
  fill = 0,
  color = 'currentColor',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "material-symbols-rounded",
    "aria-hidden": "true",
    style: {
      fontSize: size,
      width: size,
      height: size,
      color,
      fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      ...style
    }
  }, rest), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['var(--grey-100)', 'var(--navy-600)'],
  pass: ['var(--pass-50)', 'var(--green-700)'],
  fail: ['var(--fail-50)', 'var(--fail-600)'],
  warn: ['var(--warn-50)', 'var(--warn-600)'],
  info: ['var(--info-50)', 'var(--info-600)'],
  brand: ['var(--green-500)', '#fff']
};
function Badge({
  tone = 'neutral',
  icon,
  size = 'md',
  children,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: bg,
      color: fg,
      padding: sm ? '2px 8px' : '4px 11px',
      borderRadius: 'var(--radius-pill)',
      fontSize: sm ? 'var(--text-micro)' : 'var(--text-caption)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '.01em',
      lineHeight: 1.5,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 13 : 15,
    fill: 1
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 14px',
    font: 'var(--text-body-sm)',
    icon: 16,
    gap: 6
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 20px',
    font: 'var(--text-body)',
    icon: 18,
    gap: 8
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 28px',
    font: 'var(--text-body-lg)',
    icon: 20,
    gap: 10
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-xs)'
  },
  secondary: {
    background: 'var(--action-secondary)',
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-xs)'
  },
  outline: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-default)',
    boxShadow: 'var(--shadow-xs)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  danger: {
    background: 'var(--fail-500)',
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-xs)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-hover)',
    boxShadow: 'var(--shadow-brand)'
  },
  secondary: {
    background: 'var(--action-secondary-hover)',
    boxShadow: 'var(--shadow-md)'
  },
  outline: {
    background: 'var(--grey-50)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'var(--grey-100)'
  },
  danger: {
    background: 'var(--fail-600)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  block = false,
  iconStart,
  iconEnd,
  disabled = false,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontSize: s.font,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '-.005em',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-control)',
      transition: 'var(--transition-control)',
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? 'translateY(1px)' : hover && !disabled ? 'translateY(-1px)' : 'none',
      ...v,
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }, rest), iconStart && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconStart,
    size: s.icon
  }), children, iconEnd && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  label,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const base = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)'
    },
    solid: {
      background: 'var(--action-primary)',
      color: '#fff',
      border: '1px solid transparent'
    }
  }[variant];
  const hov = {
    ghost: {
      background: 'var(--grey-100)',
      color: 'var(--text-strong)'
    },
    outline: {
      background: 'var(--grey-50)'
    },
    solid: {
      background: 'var(--action-primary-hover)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-control)',
      ...base,
      ...(hover && !disabled ? hov : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 18 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  colour: 'lockup',
  white: 'lockup-white'
};

/** Brand lockup or mark. Never redraw the logo â€” always render these files. */
function Logo({
  variant = 'lockup',
  tone = 'colour',
  height = 36,
  basePath = 'assets',
  style,
  ...rest
}) {
  const file = variant === 'mark' ? 'logo-mark.png' : tone === 'white' ? 'logo-lockup-white.png' : 'logo-lockup.png';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${basePath}/${file}`,
    alt: "hsmanager",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  selected = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      background: selected ? 'var(--navy-800)' : 'var(--surface-card)',
      color: selected ? '#fff' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--navy-800)' : 'var(--border-default)'}`,
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      color: 'inherit',
      opacity: .6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/ChecklistRow.jsx
try { (() => {
const OPTIONS = [{
  id: 'pass',
  label: 'Pass',
  colour: 'var(--pass-500)'
}, {
  id: 'fail',
  label: 'Fail',
  colour: 'var(--fail-500)'
}, {
  id: 'na',
  label: 'N/A',
  colour: 'var(--na-500)'
}];
function ChecklistRow({
  index,
  question,
  value,
  onChange,
  photos = 0,
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      paddingTop: 3,
      minWidth: 22
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)'
    }
  }, question)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      paddingLeft: 34,
      flexWrap: 'wrap'
    }
  }, OPTIONS.map(o => {
    const on = value === o.id;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      onClick: () => onChange && onChange(o.id),
      style: {
        minHeight: 'var(--tap-min)',
        padding: '0 18px',
        cursor: 'pointer',
        borderRadius: 'var(--radius-control)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--weight-bold)',
        background: on ? o.colour : 'var(--surface-card)',
        color: on ? '#fff' : 'var(--text-muted)',
        border: `1px solid ${on ? o.colour : 'var(--border-default)'}`,
        transition: 'var(--transition-control)'
      }
    }, o.label);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      marginLeft: 4,
      color: photos ? 'var(--text-strong)' : 'var(--text-muted)',
      fontSize: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "photo_camera",
    size: 18
  }), photos || 'Add photo')), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      marginLeft: 34,
      padding: '10px 12px',
      background: 'var(--grey-50)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)'
    }
  }, note));
}
Object.assign(__ds_scope, { ChecklistRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ChecklistRow.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  dense = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: dense ? '10px 14px' : '12px 16px',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-bold)',
      borderBottom: '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap',
      width: c.width
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id || i,
    onClick: () => onRowClick && onRowClick(r),
    style: {
      cursor: onRowClick ? 'pointer' : undefined,
      transition: 'background-color var(--dur-fast) var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--grey-50)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: dense ? '10px 14px' : '14px 16px',
      textAlign: c.align || 'left',
      borderBottom: '1px solid var(--border-subtle)',
      color: 'var(--text-body)',
      verticalAlign: 'middle'
    }
  }, c.render ? c.render(r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  unit,
  delta,
  deltaTone = 'up',
  icon,
  tone = 'default',
  style
}) {
  const dcol = deltaTone === 'up' ? 'var(--green-600)' : deltaTone === 'down' ? 'var(--fail-500)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: 20,
    tone: tone,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--green-50)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--green-600)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-sm)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginTop: 8,
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: dcol
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: deltaTone === 'down' ? 'trending_down' : 'trending_up',
    size: 16
  }), delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: ['var(--info-50)', 'var(--info-500)', 'info'],
  success: ['var(--pass-50)', 'var(--pass-500)', 'check_circle'],
  warning: ['var(--warn-50)', 'var(--warn-500)', 'warning'],
  danger: ['var(--fail-50)', 'var(--fail-500)', 'report']
};
function Alert({
  tone = 'info',
  title,
  children,
  action,
  style,
  ...rest
}) {
  const [bg, accent, icon] = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 12,
      padding: 16,
      background: bg,
      borderRadius: 'var(--radius-md)',
      border: '1px solid rgba(13,31,45,.06)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    fill: 1,
    color: accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)',
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)'
    }
  }, children)), action);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--green-50)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    color: "var(--green-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 380,
      margin: '6px auto 0',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      background: 'rgba(7,19,28,.55)',
      backdropFilter: 'blur(4px)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-sheet)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h3)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px 24px',
      fontSize: 'var(--text-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 24px',
      background: 'var(--grey-50)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'brand',
  label,
  height = 8,
  showValue = false,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const colour = {
    brand: 'var(--green-500)',
    warn: 'var(--warn-500)',
    fail: 'var(--fail-500)',
    navy: 'var(--navy-800)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-strong)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--grey-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: colour,
      transition: 'width var(--dur-slow) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAP = {
  pass: {
    label: 'Pass',
    icon: 'check_circle',
    bg: 'var(--pass-50)',
    fg: 'var(--green-700)',
    solid: 'var(--pass-500)'
  },
  fail: {
    label: 'Fail',
    icon: 'cancel',
    bg: 'var(--fail-50)',
    fg: 'var(--fail-600)',
    solid: 'var(--fail-500)'
  },
  na: {
    label: 'N/A',
    icon: 'remove_circle',
    bg: 'var(--na-50)',
    fg: 'var(--na-500)',
    solid: 'var(--na-500)'
  },
  open: {
    label: 'Open',
    icon: 'error',
    bg: 'var(--warn-50)',
    fg: 'var(--warn-600)',
    solid: 'var(--warn-500)'
  },
  overdue: {
    label: 'Overdue',
    icon: 'schedule',
    bg: 'var(--fail-50)',
    fg: 'var(--fail-600)',
    solid: 'var(--fail-500)'
  },
  resolved: {
    label: 'Resolved',
    icon: 'task_alt',
    bg: 'var(--pass-50)',
    fg: 'var(--green-700)',
    solid: 'var(--pass-500)'
  },
  synced: {
    label: 'Synced',
    icon: 'cloud_done',
    bg: 'var(--info-50)',
    fg: 'var(--info-600)',
    solid: 'var(--info-500)'
  },
  pending: {
    label: 'Pending sync',
    icon: 'cloud_sync',
    bg: 'var(--grey-100)',
    fg: 'var(--navy-600)',
    solid: 'var(--navy-400)'
  }
};
function StatusPill({
  status = 'pass',
  label,
  solid = false,
  size = 'md',
  style,
  ...rest
}) {
  const s = MAP[status] || MAP.pass;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: sm ? '3px 9px' : '5px 12px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? s.solid : s.bg,
      color: solid ? '#fff' : s.fg,
      fontSize: sm ? 'var(--text-micro)' : 'var(--text-caption)',
      fontWeight: 'var(--weight-bold)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: sm ? 14 : 16,
    fill: 1
  }), label || s.label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: '0 0 22px',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 7,
      transition: 'var(--transition-control)',
      background: checked ? 'var(--action-primary)' : 'var(--surface-card)',
      border: `1px solid ${checked ? 'var(--action-primary)' : 'var(--border-default)'}`,
      boxShadow: 'var(--shadow-xs)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "#fff",
    weight: 600
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  iconStart,
  suffix,
  size = 'md',
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const h = size === 'lg' ? 'var(--control-h-lg)' : size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h-md)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 14px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${error ? 'var(--fail-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      transition: 'var(--transition-control)'
    }
  }, iconStart && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconStart,
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--fail-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  label,
  options = [],
  value,
  onChange,
  name,
  direction = 'vertical',
  style
}) {
  const gname = name || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8,
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      gap: direction === 'horizontal' ? 20 : 10
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = value === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: gname,
      checked: on,
      onChange: () => onChange && onChange(v),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        border: `1px solid ${on ? 'var(--action-primary)' : 'var(--border-default)'}`,
        background: 'var(--surface-card)',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: on ? 'var(--action-primary)' : 'transparent'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body)',
        color: 'var(--text-strong)'
      }
    }, l));
  })));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  placeholder = 'Searchâ€¦',
  value,
  onChange,
  width = '100%',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      width,
      height: 'var(--control-h-md)',
      padding: '0 14px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      transition: 'var(--transition-control)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 'var(--control-h-md)',
      padding: '0 12px 0 14px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      appearance: 'none',
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "expand_more",
    size: 20,
    color: "var(--text-muted)"
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 27,
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      display: 'flex',
      background: checked ? 'var(--action-primary)' : 'var(--grey-300)',
      transition: 'background-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 21,
      height: 21,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? 'translateX(19px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  rows = 4,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '12px 14px',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-control)',
      outline: 'none',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      transition: 'var(--transition-control)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function SidebarNav({
  items = [],
  active,
  onSelect,
  footer,
  width = 244,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width,
      flex: `0 0 ${width}px`,
      background: 'var(--navy-800)',
      color: 'rgba(255,255,255,.7)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px',
      gap: 4,
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect && onSelect(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        height: 44,
        padding: '0 14px',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        borderRadius: 'var(--radius-control)',
        background: on ? 'var(--green-500)' : 'transparent',
        color: on ? '#fff' : 'rgba(255,255,255,.72)',
        fontSize: 'var(--text-body)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20,
      fill: on ? 1 : 0
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-micro)',
        fontWeight: 'var(--weight-bold)',
        padding: '2px 7px',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.1)'
      }
    }, it.count));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, footer));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: 4,
      background: 'var(--grey-100)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, tabs.map(t => {
    const id = typeof t === 'string' ? t : t.id;
    const label = typeof t === 'string' ? t : t.label;
    const on = id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onChange && onChange(id),
      style: {
        border: 0,
        cursor: 'pointer',
        padding: '8px 18px',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--surface-card)' : 'transparent',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--weight-semibold)',
        transition: 'var(--transition-control)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  title,
  subtitle,
  search = false,
  actions,
  user,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      height: 72,
      padding: '0 28px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, subtitle)), search && /*#__PURE__*/React.createElement(__ds_scope.SearchField, {
    width: 260,
    placeholder: "Search inspections\u2026"
  }), actions, user && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      paddingLeft: 16,
      borderLeft: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--navy-800)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-bold)'
    }
  }, user.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, user.role)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "expand_more",
    size: 18,
    color: "var(--text-muted)"
  })));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/ActionsScreen.jsx
try { (() => {
const {
  TopBar,
  Card,
  DataTable,
  StatusPill,
  Button,
  Tabs,
  Badge,
  Modal,
  Select,
  Input,
  Textarea,
  EmptyState
} = window.HSManagerDesignSystem_7bf991;
function ActionsScreen({
  user
}) {
  const [tab, setTab] = React.useState('Open');
  const [assign, setAssign] = React.useState(null);
  const all = window.ACTIONS;
  const rows = tab === 'All' ? all : tab === 'Open' ? all.filter(a => a.status !== 'resolved') : all.filter(a => a.status === 'resolved');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Actions",
    subtitle: "Defects raised from failed inspection questions",
    user: user,
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconStart: "ios_share"
    }, "Share report")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 28,
      display: 'grid',
      gap: 16,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Open', 'Resolved', 'All'],
    active: tab,
    onChange: setTab,
    style: {
      justifySelf: 'start'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, rows.length ? /*#__PURE__*/React.createElement(DataTable, {
    rows: rows,
    columns: [{
      key: 'defect',
      header: 'Defect',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: 'var(--text-strong)'
        }
      }, r.defect)
    }, {
      key: 'site',
      header: 'Site'
    }, {
      key: 'owner',
      header: 'Owner'
    }, {
      key: 'priority',
      header: 'Priority',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        size: "sm",
        tone: r.priority === 'High' ? 'fail' : r.priority === 'Medium' ? 'warn' : 'neutral'
      }, r.priority)
    }, {
      key: 'due',
      header: 'Due',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12.5
        }
      }, r.due)
    }, {
      key: 'status',
      header: 'Status',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.status,
        size: "sm"
      })
    }, {
      key: 'x',
      header: '',
      align: 'right',
      width: 120,
      render: r => /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "outline",
        onClick: () => setAssign(r)
      }, "Reassign")
    }]
  }) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "task_alt",
    title: "Nothing here",
    description: "No actions match this filter."
  }))), assign && /*#__PURE__*/React.createElement(Modal, {
    title: "Reassign action",
    onClose: () => setAssign(null),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setAssign(null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setAssign(null)
    }, "Save action"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: 'var(--grey-50)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-strong)'
    }
  }, assign.defect), /*#__PURE__*/React.createElement(Select, {
    label: "Owner",
    options: ['M. Ellis', 'D. Whyte', 'P. Nair', 'L. Bright'],
    defaultValue: assign.owner
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Due date",
    defaultValue: assign.due,
    iconStart: "event"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Note to owner",
    rows: 3,
    placeholder: "Add context for the person taking this on\u2026"
  }))));
}
Object.assign(window, {
  ActionsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/ActionsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AppShell.jsx
try { (() => {
const {
  SidebarNav,
  Logo,
  Icon,
  Badge
} = window.HSManagerDesignSystem_7bf991;
const NAV = [{
  id: 'dash',
  label: 'Dashboard',
  icon: 'space_dashboard'
}, {
  id: 'insp',
  label: 'Inspections',
  icon: 'assignment_turned_in'
}, {
  id: 'act',
  label: 'Actions',
  icon: 'flag',
  count: 4
}, {
  id: 'tpl',
  label: 'Templates',
  icon: 'library_books'
}, {
  id: 'sites',
  label: 'Sites & teams',
  icon: 'warehouse'
}, {
  id: 'set',
  label: 'Settings',
  icon: 'settings'
}];
const USER = {
  name: 'Sam Okoye',
  role: 'H&S Manager',
  initials: 'SO'
};
function AppShell() {
  const [tab, setTab] = React.useState('dash');
  const [report, setReport] = React.useState(null);
  const open = row => setReport(row);
  const close = () => setReport(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--navy-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px 6px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 34,
    tone: "white",
    basePath: "../../assets"
  })), /*#__PURE__*/React.createElement(SidebarNav, {
    items: NAV,
    active: tab,
    onSelect: id => {
      setTab(id);
      setReport(null);
    },
    style: {
      flex: 1
    },
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px',
        borderTop: '1px solid rgba(255,255,255,.1)',
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: 'var(--green-500)',
        color: '#fff',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12.5,
        fontWeight: 700
      }
    }, USER.initials), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.25
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#fff',
        fontSize: 'var(--text-body-sm)',
        fontWeight: 600
      }
    }, USER.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 'var(--text-caption)'
      }
    }, USER.role)))
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, report ? /*#__PURE__*/React.createElement(window.ReportScreen, {
    row: report,
    onBack: close,
    user: USER
  }) : tab === 'dash' ? /*#__PURE__*/React.createElement(window.DashboardScreen, {
    user: USER,
    onOpen: open,
    onGoto: setTab
  }) : tab === 'insp' ? /*#__PURE__*/React.createElement(window.InspectionsScreen, {
    user: USER,
    onOpen: open
  }) : tab === 'act' ? /*#__PURE__*/React.createElement(window.ActionsScreen, {
    user: USER
  }) : /*#__PURE__*/React.createElement(window.PlaceholderScreen, {
    tab: tab,
    user: USER
  })));
}
function PlaceholderScreen({
  tab,
  user
}) {
  const {
    TopBar,
    EmptyState,
    Button
  } = window.HSManagerDesignSystem_7bf991;
  const titles = {
    tpl: 'Templates',
    sites: 'Sites & teams',
    set: 'Settings'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: titles[tab],
    subtitle: "4 sites \xB7 38 users",
    user: user
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "construction",
    title: `${titles[tab]} is not part of this kit`,
    description: "This screen was not supplied in the source material, so it is intentionally left blank rather than invented.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline"
    }, "Back to dashboard")
  })));
}
Object.assign(window, {
  AppShell,
  PlaceholderScreen,
  NAV,
  USER
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashboardScreen.jsx
try { (() => {
const {
  TopBar,
  StatCard,
  Card,
  DataTable,
  StatusPill,
  Button,
  Badge,
  ProgressBar,
  Icon,
  Alert
} = window.HSManagerDesignSystem_7bf991;
function DashboardScreen({
  user,
  onOpen,
  onGoto
}) {
  const rows = window.INSPECTIONS.slice(0, 5);
  const bars = [['Mon', 18], ['Tue', 24], ['Wed', 21], ['Thu', 29], ['Fri', 26], ['Sat', 11], ['Sun', 6]];
  const max = 30;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Dashboard",
    subtitle: "All sites \xB7 week commencing 4 May 2026",
    search: true,
    user: user,
    actions: /*#__PURE__*/React.createElement(Button, {
      iconStart: "add"
    }, "New inspection")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 28,
      display: 'grid',
      gap: 20,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "4 actions are overdue across 2 sites",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      onClick: () => onGoto('act')
    }, "Review actions")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Compliance score",
    value: "94",
    unit: "%",
    delta: "+6 vs last month",
    icon: "verified"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Inspections this week",
    value: "135",
    delta: "+18 vs last week",
    icon: "assignment_turned_in"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Open actions",
    value: "12",
    delta: "4 overdue",
    deltaTone: "down",
    icon: "flag"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg. completion",
    value: "7:12",
    unit: "min",
    delta: "\u22121:40 vs last month",
    icon: "timer"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h4)'
    }
  }, "Inspections completed"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "Last 7 days, all sites")), /*#__PURE__*/React.createElement(Badge, {
    tone: "pass",
    icon: "trending_up"
  }, "+14%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16,
      height: 150
    }
  }, bars.map(([d, v]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${v / max * 120}px`,
      background: 'var(--green-500)',
      borderRadius: '8px 8px 4px 4px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, d))))), /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h4)',
      marginBottom: 18
    }
  }, "Compliance by site"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, [['Daventry DC', 91, 'brand'], ['Rugby Hub', 98, 'brand'], ['Manchester 2', 76, 'warn'], ['Avonmouth 3PL', 88, 'brand']].map(([s, v, t]) => /*#__PURE__*/React.createElement(ProgressBar, {
    key: s,
    label: s,
    value: v,
    showValue: true,
    tone: t
  }))))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px 14px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h4)'
    }
  }, "Recent inspections"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconEnd: "arrow_forward"
  }, "View all")), /*#__PURE__*/React.createElement(DataTable, {
    rows: rows,
    onRowClick: onOpen,
    columns: [{
      key: 'ref',
      header: 'Report',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: 'var(--text-strong)'
        }
      }, r.ref)
    }, {
      key: 'site',
      header: 'Site'
    }, {
      key: 'inspector',
      header: 'Inspector'
    }, {
      key: 'date',
      header: 'Completed',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12.5
        }
      }, r.date)
    }, {
      key: 'status',
      header: 'Result',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.status,
        size: "sm"
      })
    }]
  }))));
}
Object.assign(window, {
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/InspectionsScreen.jsx
try { (() => {
const {
  TopBar,
  Card,
  DataTable,
  StatusPill,
  Button,
  Tabs,
  SearchField,
  Tag,
  IconButton
} = window.HSManagerDesignSystem_7bf991;
function InspectionsScreen({
  user,
  onOpen
}) {
  const [tab, setTab] = React.useState('All');
  const [q, setQ] = React.useState('');
  const [site, setSite] = React.useState(null);
  let rows = window.INSPECTIONS;
  if (tab === 'Failed') rows = rows.filter(r => r.status === 'fail');
  if (tab === 'Pending sync') rows = rows.filter(r => r.status === 'pending');
  if (site) rows = rows.filter(r => r.site === site);
  if (q) rows = rows.filter(r => (r.ref + r.template + r.inspector).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: "Inspections",
    subtitle: `${rows.length} of ${window.INSPECTIONS.length} reports`,
    user: user,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconStart: "download"
    }, "Export CSV"), /*#__PURE__*/React.createElement(Button, {
      iconStart: "add"
    }, "New inspection"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 28,
      display: 'grid',
      gap: 16,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['All', 'Failed', 'Pending sync'],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(SearchField, {
    width: 280,
    placeholder: "Search reports, templates, inspectors",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginLeft: 'auto'
    }
  }, window.SITES.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: site === s,
    onClick: () => setSite(site === s ? null : s),
    style: {
      cursor: 'pointer'
    }
  }, s)))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    rows: rows,
    onRowClick: onOpen,
    columns: [{
      key: 'ref',
      header: 'Report',
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600,
          color: 'var(--text-strong)'
        }
      }, r.ref), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--text-caption)',
          color: 'var(--text-muted)'
        }
      }, r.template))
    }, {
      key: 'site',
      header: 'Site'
    }, {
      key: 'inspector',
      header: 'Inspector'
    }, {
      key: 'date',
      header: 'Completed',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12.5
        }
      }, r.date)
    }, {
      key: 'score',
      header: 'Score',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          color: r.score < 90 ? 'var(--fail-500)' : 'var(--text-strong)'
        }
      }, r.score, "%")
    }, {
      key: 'status',
      header: 'Result',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        status: r.status,
        size: "sm"
      })
    }, {
      key: 'x',
      header: '',
      width: 56,
      align: 'right',
      render: () => /*#__PURE__*/React.createElement(IconButton, {
        icon: "picture_as_pdf",
        label: "Download PDF",
        size: "sm"
      })
    }]
  }))));
}
Object.assign(window, {
  InspectionsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/InspectionsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/ReportScreen.jsx
try { (() => {
const {
  TopBar,
  Card,
  StatusPill,
  Button,
  Icon,
  ProgressBar,
  Badge,
  Logo
} = window.HSManagerDesignSystem_7bf991;
function ReportScreen({
  row,
  onBack,
  user
}) {
  const qs = window.REPORT_QUESTIONS;
  const fails = qs.filter(q => q.a === 'fail').length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, {
    title: row.ref,
    subtitle: `${row.template} Â· ${row.site} Â· ${row.date}`,
    user: user,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconStart: "arrow_back",
      onClick: onBack
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconStart: "picture_as_pdf"
    }, "Download PDF"), /*#__PURE__*/React.createElement(Button, {
      iconStart: "send"
    }, "Share"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 30,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-h4)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Inspection record"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, "RACK-DAV-C \xB7 07/05/2026 14:32 \xB7 52.256, -1.163"))), /*#__PURE__*/React.createElement(StatusPill, {
    status: row.status
  })), qs.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '16px 24px',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      paddingTop: 3,
      minWidth: 22
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, q.q), q.note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: '10px 12px',
      background: 'var(--grey-50)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-body-sm)'
    }
  }, q.note), q.photos && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 10
    }
  }, Array.from({
    length: q.photos
  }).map((_, p) => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      width: 92,
      height: 68,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--grey-100)',
      border: '1px dashed var(--border-default)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "photo_camera",
    size: 18
  }))))), /*#__PURE__*/React.createElement(StatusPill, {
    status: q.a,
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "hsm-eyebrow"
  }, "Score"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      margin: '10px 0 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hsm-display",
    style: {
      fontSize: 44
    }
  }, row.score), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: row.score,
    tone: row.score < 90 ? 'warn' : 'brand'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "pass"
  }, qs.filter(q => q.a === 'pass').length, " pass"), /*#__PURE__*/React.createElement(Badge, {
    tone: "fail"
  }, fails, " fail"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, qs.filter(q => q.a === 'na').length, " N/A"))), /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "hsm-eyebrow"
  }, "Sign-off"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      marginTop: 12
    }
  }, [['Inspector', row.inspector], ['Countersigned', 'M. Ellis, Site Manager'], ['Device', 'iPad Â· offline, synced 14:41']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 600,
      textAlign: 'right'
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    tone: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flag",
    size: 22,
    color: "var(--green-700)",
    fill: 1
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, fails, " actions raised"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)',
      marginTop: 4
    }
  }, "Every failed question opens a tracked action with an owner and a due date."))))))));
}
Object.assign(window, {
  ReportScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/ReportScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/data.jsx
try { (() => {
const SITES = ['Daventry DC', 'Rugby Hub', 'Manchester 2', 'Avonmouth 3PL'];
const INSPECTIONS = [{
  id: 'r1',
  ref: 'Racking Inspection â€” Aisle C',
  template: 'SEMA Racking',
  site: 'Daventry DC',
  inspector: 'Sam Okoye',
  date: '07/05/2026 14:32',
  status: 'fail',
  score: 82
}, {
  id: 'r2',
  ref: 'Forklift Pre-Start â€” FLT-08',
  template: 'MHE Pre-Use',
  site: 'Rugby Hub',
  inspector: 'Dan Whyte',
  date: '07/05/2026 06:14',
  status: 'pass',
  score: 100
}, {
  id: 'r3',
  ref: 'Weekly Fire Safety Walk',
  template: 'Fire Safety',
  site: 'Manchester 2',
  inspector: 'Priya Nair',
  date: '06/05/2026 11:02',
  status: 'open',
  score: 91
}, {
  id: 'r4',
  ref: 'Daily H&S Check â€” Goods In',
  template: 'Daily Walk-Through',
  site: 'Daventry DC',
  inspector: 'Sam Okoye',
  date: '06/05/2026 07:45',
  status: 'pass',
  score: 97
}, {
  id: 'r5',
  ref: 'COSHH Store Audit',
  template: 'COSHH',
  site: 'Avonmouth 3PL',
  inspector: 'Leon Bright',
  date: '05/05/2026 15:20',
  status: 'pending',
  score: 88
}, {
  id: 'r6',
  ref: 'Loading Bay & Dock Levellers',
  template: 'Workplace & Premises',
  site: 'Rugby Hub',
  inspector: 'Dan Whyte',
  date: '05/05/2026 09:30',
  status: 'pass',
  score: 100
}];
const ACTIONS = [{
  id: 'a1',
  defect: 'Beam damage at rack C-14, load removed',
  site: 'Daventry DC',
  owner: 'M. Ellis',
  due: '09/05/2026',
  priority: 'High',
  status: 'overdue'
}, {
  id: 'a2',
  defect: 'Fire exit 3 obstructed by pallets',
  site: 'Manchester 2',
  owner: 'P. Nair',
  due: '11/05/2026',
  priority: 'High',
  status: 'open'
}, {
  id: 'a3',
  defect: 'FLT-08 seatbelt buckle worn',
  site: 'Rugby Hub',
  owner: 'D. Whyte',
  due: '14/05/2026',
  priority: 'Medium',
  status: 'open'
}, {
  id: 'a4',
  defect: 'Spill kit restock â€” chemical store',
  site: 'Avonmouth 3PL',
  owner: 'L. Bright',
  due: '02/05/2026',
  priority: 'Low',
  status: 'resolved'
}, {
  id: 'a5',
  defect: 'Aisle floor marking faded, bay 12â€“18',
  site: 'Daventry DC',
  owner: 'M. Ellis',
  due: '18/05/2026',
  priority: 'Medium',
  status: 'open'
}];
const REPORT_QUESTIONS = [{
  q: 'Are all racking uprights free from visible damage?',
  a: 'pass'
}, {
  q: 'Are load notices displayed and legible for every run?',
  a: 'pass'
}, {
  q: 'Are beam connector locks in place on all beams?',
  a: 'fail',
  note: 'Two missing locks at C-14. Bay off-loaded and cordoned pending repair.',
  photos: 2
}, {
  q: 'Is there evidence of impact damage to frames at floor level?',
  a: 'fail',
  note: 'Front upright C-14 deflection beyond SEMA tolerance â€” red risk.',
  photos: 3
}, {
  q: 'Are aisles clear of obstruction and debris?',
  a: 'pass'
}, {
  q: 'Are pallets in good condition and correctly seated?',
  a: 'pass'
}, {
  q: 'Is racking protection fitted at aisle ends?',
  a: 'na'
}];
Object.assign(window, {
  SITES,
  INSPECTIONS,
  ACTIONS,
  REPORT_QUESTIONS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSections.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  Badge,
  StatusPill,
  Tag,
  StatCard
} = window.HSManagerDesignSystem_7bf991;
function Placeholder({
  label,
  height = 420,
  tone = 'navy',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--radius-card)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      background: tone === 'navy' ? 'var(--navy-800)' : 'var(--grey-100)',
      color: tone === 'navy' ? 'rgba(255,255,255,.5)' : 'var(--text-muted)',
      border: tone === 'navy' ? 'none' : '1px dashed var(--border-default)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      marginTop: 6,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      fontWeight: 700
    }
  }, label)));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--green-50) 0%, #fff 62%)',
      paddingTop: 84,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hsm-eyebrow"
  }, "Warehousing \xB7 Logistics \xB7 Manufacturing \xB7 3PL"), /*#__PURE__*/React.createElement("h1", {
    className: "hsm-display",
    style: {
      fontSize: 'var(--text-display-md)',
      margin: '14px 0 18px'
    }
  }, "Eliminate compliance risks with unified warehouse safety oversight."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, "Replace fragmented manual inspections with a single source of truth. Protect your personnel, your facility, and your professional standing with The HS Manager."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    pill: true,
    iconEnd: "arrow_forward"
  }, "Get started for free"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    pill: true,
    variant: "outline",
    iconStart: "event"
  }, "Book a 20-minute demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 18,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle",
    size: 18,
    fill: 1,
    color: "var(--green-500)"
  }), "Start inspecting instantly \u2014 no card details needed.")), /*#__PURE__*/React.createElement(Placeholder, {
    label: "Hero \u2014 app on phone, tablet and laptop",
    height: 420
  })));
}
function LogoWall() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      opacity: .5
    }
  }, ['adidas', 'smylies', 'GXO', 'zedify', 'Storage Systems', 'Transformers'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--navy-500)',
      letterSpacing: '-.02em'
    }
  }, c))));
}
const PROBLEMS = [['description', 'Fragmented Data & Professional Liability', 'Manual reporting is flawed. Inaccurate notes and missing evidence create significant liability, wasting hours on reconciliation and risking non-compliance during HSE inspections.'], ['hourglass_top', 'The Cost of Operational Delays', 'Safety decisions are often stalled by protracted email chains. When hazard data remains trapped in inboxes rather than a dashboard, oversight is compromised, leading to remedial delays and unnecessary downtime.'], ['shuffle', 'Inconsistent Safety Standards', 'Inspection quality often varies between shifts or sites. This inconsistency undermines your safety culture, making it difficult to identify recurring risks across your warehouse and distribution network.']];
function ProblemSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--grey-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "hsm-display",
    style: {
      fontSize: 'var(--text-display-sm)'
    }
  }, "The hidden cost of manual administration"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-muted)'
    }
  }, "Paper-based systems and disconnected spreadsheets compromise your response to risks. The HS Manager centralises safety data, ensuring every hazard is tracked, resolved, and audit-ready.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, PROBLEMS.map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    padding: 28
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--green-50)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    color: "var(--green-600)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h4)',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, body))))));
}
const FEATURES = [['photo_camera', 'Verified Visual Evidence', 'High-resolution photo capture with mandatory date and GPS-stamping for absolute accountability and audit-readiness.'], ['cloud_off', 'Resilient Offline Functionality', 'Complete rigorous inspections in â€œdead zonesâ€ or cold storage; data auto-syncs the moment a connection is restored.'], ['rocket_launch', 'Frictionless Deployment', 'Minimal configuration ensures rapid site-wide adoption across multiple facilities with zero operational downtime.'], ['monitoring', 'Strategic Compliance Oversight', 'Use live dashboards to identify recurring risks and site failings before they escalate into serious incidents.']];
function FeatureSplit() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '.95fr 1.05fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Racking inspection in the app",
    height: 460,
    tone: "grey"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "hsm-display",
    style: {
      fontSize: 'var(--text-display-sm)',
      marginBottom: 28
    }
  }, "Driving consistency across audits and daily inspections"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, FEATURES.map(([icon, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 42,
      height: 42,
      flex: '0 0 42px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--navy-800)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 21,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-h4)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, b))))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    pill: true,
    iconStart: "play_circle",
    style: {
      marginTop: 30
    }
  }, "Watch 2-minute intro video"))));
}
const CATEGORIES = [['forklift', 'Operational & MHE', 'Forklift and MHE pre-use checks, daily handovers, and lifting operations (LOLER).'], ['local_fire_department', 'Compliance & Safety', 'Weekly fire safety, COSHH assessments, and SEMA-aligned racking inspections.'], ['emergency', 'Incident Management', 'RIDDOR-ready accident logs, near-miss reports, and contractor inductions.'], ['fact_check', 'Audit Readiness', 'Daily site walk-throughs, weekly safety audits, and environmental inspections.']];
function ChecklistSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--navy-800)',
      color: 'rgba(255,255,255,.72)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "hsm-display",
    style: {
      fontSize: 'var(--text-display-sm)',
      color: '#fff'
    }
  }, "Built for UK warehouses, logistics & manufacturing"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'var(--text-body-lg)'
    }
  }, "70+ pre-loaded HSE-aligned checklists, or create bespoke templates via our drag-and-drop form builder."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 24
    }
  }, ['Racking', 'Forklift', 'Fire safety', 'COSHH', 'LOLER', 'Environmental', 'Contractor induction'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(255,255,255,.18)',
      fontSize: 'var(--text-body-sm)'
    }
  }, t))), /*#__PURE__*/React.createElement(Button, {
    pill: true,
    iconEnd: "arrow_forward",
    style: {
      marginTop: 28
    }
  }, "See all 70+ checklists")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, CATEGORIES.map(([icon, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      padding: 18,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,.05)',
      border: '1px solid rgba(255,255,255,.08)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    color: "var(--green-400)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 700,
      fontSize: 'var(--text-body)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      marginTop: 3
    }
  }, b))))))));
}
const QUOTES = [['This platform has streamlined our inspections, recording compliance tasks accurately. We have improved efficiency and transparency throughout our warehouse operations.', 'Sohail Shabbir', 'Adidas â€” Europe'], ['HS Manager transformed our monthly racking inspections. The system has improved efficiency and makes reporting significantly faster.', 'Chris Hills', 'A-Z Rack Inspections'], ['The app keeps our busy warehouse compliant. The structured checklists and digital signoffs ensure consistent, audit-ready inspections.', 'Mike Thomas', 'Smylies Exports']];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, QUOTES.map(([q, n, c]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    padding: 28
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "format_quote",
    size: 28,
    color: "var(--green-500)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--text-strong)',
      margin: '10px 0 20px'
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--navy-800)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 13,
      fontWeight: 700
    }
  }, n.split(' ').map(w => w[0]).join('')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, c))))))));
}
const STEPS = [['Create your free account', 'Gain full platform access in under five minutes with no credit card required or commitment.'], ['Equip your team', 'Install the app on any device (iOS, Android, Windows) to eliminate manual paperwork and ensure real-time reporting.'], ['Generate professional reports', 'Utilise our 70+, HSE-aligned checklists to produce comprehensive, audit-ready PDF reports from day one.']];
function StepsSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--grey-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "hsm-display",
    style: {
      fontSize: 'var(--text-display-sm)',
      textAlign: 'center',
      marginBottom: 44
    }
  }, "Go live in 3 simple steps"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, STEPS.map(([t, b], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: 28
  }, /*#__PURE__*/React.createElement("span", {
    className: "hsm-display",
    style: {
      fontSize: 40,
      color: 'var(--green-500)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h4)',
      margin: '10px 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    pill: true,
    iconEnd: "arrow_forward"
  }, "Start your free 30-day trial"))));
}
const FAQS = [['Is HS Manager compliant with UK HSE regulations?', 'Yes. Our platform is built around the Health and Safety at Work etc. Act 1974, RIDDOR 2013, COSHH 2002, and the Management of Health and Safety at Work Regulations 1999. All incident forms are RIDDOR-ready and can be customised to current UK legislation.'], ['Does the app work offline?', 'Yes. The HS Manager app (iOS, Windows, and Android) is fully functional offline, essential for cold stores and loading bays. Completed inspections and photo evidence are saved securely to the device and automatically synced once connectivity is restored.'], ['How long does deployment take?', 'Most customers are operational within two hours. Our onboarding team will help configure your account, allowing you to deploy immediately using our 70+ HSE-aligned templates without any operational downtime.'], ['What happens to our data if we cancel?', 'You retain absolute ownership of your data. Upon cancellation, you can export the data in PDF and CSV formats. We hold your data for a 60-day period before secure, permanent deletion.']];
function FaqSection() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "hsm-display",
    style: {
      fontSize: 'var(--text-display-sm)',
      marginBottom: 32
    }
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      gap: 16,
      padding: '18px 22px',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'var(--text-body-lg)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, q), /*#__PURE__*/React.createElement(Icon, {
    name: open === i ? 'remove' : 'add',
    size: 22,
    color: "var(--green-600)"
  })), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '0 22px 20px',
      fontSize: 'var(--text-body)',
      color: 'var(--text-muted)'
    }
  }, a))))));
}
Object.assign(window, {
  Placeholder,
  Hero,
  LogoWall,
  ProblemSection,
  FeatureSplit,
  ChecklistSection,
  Testimonials,
  StepsSection,
  FaqSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PricingSection.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  Badge,
  RadioGroup
} = window.HSManagerDesignSystem_7bf991;
const INCLUDED = ['70+ HSE-aligned checklist templates', 'Drag-and-drop custom form builder', 'Unlimited photo evidence with GPS stamps', 'Offline inspections on iOS, Android and Windows', 'Action tracking through to resolution', 'Audit-ready PDF and CSV export', 'UK-hosted data, ISO 27001 accredited'];
function PricingSection({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    style: {
      background: 'var(--grey-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hsm-eyebrow"
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    className: "hsm-display",
    style: {
      fontSize: 'var(--text-display-sm)',
      margin: '12px 0 16px'
    }
  }, "One plan. Every feature. \xA320 per user, per month."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-muted)'
    }
  }, "Billed annually, after a free 30-day trial. No card details needed to start, and access expires automatically if you decide not to proceed."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    pill: true,
    style: {
      marginTop: 26
    },
    onClick: () => onNav && onNav('pricing')
  }, "See full pricing")), /*#__PURE__*/React.createElement(Card, {
    padding: 32
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-h3)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Standard"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "30-day free trial")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      margin: '18px 0 22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hsm-display",
    style: {
      fontSize: 'var(--text-display-md)'
    }
  }, "\xA320"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, "per user / month")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 11
    }
  }, INCLUDED.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle",
    size: 19,
    fill: 1,
    color: "var(--green-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)'
    }
  }, i)))), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    style: {
      marginTop: 26
    }
  }, "Create my free 30-day account"))));
}
function PricingPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--navy-800)',
      padding: '80px 0 64px',
      textAlign: 'center',
      color: 'rgba(255,255,255,.72)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hsm-display",
    style: {
      fontSize: 'var(--text-display-md)',
      color: '#fff'
    }
  }, "Straightforward pricing"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      marginTop: 14
    }
  }, "Every feature, every checklist, every device \u2014 one per-user price."))), /*#__PURE__*/React.createElement(PricingSection, {
    onNav: onNav
  }));
}
Object.assign(window, {
  PricingSection,
  PricingPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PricingSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Button,
  Logo,
  Icon
} = window.HSManagerDesignSystem_7bf991;
const NAV = ['Home', 'Checklists', 'Pricing', 'Free Trial', 'News & Blogs', 'Contact Us'];
function SiteHeader({
  page,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(255,255,255,.86)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      height: 78
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 42,
    basePath: "../../assets"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 12
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(n === 'Pricing' ? 'pricing' : 'home');
    },
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: n === 'Free Trial' ? 700 : 500,
      color: n === 'Free Trial' ? 'var(--green-600)' : 'var(--text-body)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    pill: true,
    iconEnd: "arrow_forward"
  }, "Get started free"))));
}
function SiteFooter() {
  const cols = [['Product', ['Home', 'Checklists', 'Pricing', 'Free Trial']], ['Company', ['About Us', 'News & Blog', 'FAQs', 'Contact Us']], ['Legal', ['Terms and Conditions', 'Privacy Policy']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-800)',
      color: 'rgba(255,255,255,.6)',
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 40,
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 44,
    tone: "white",
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 'var(--text-body-sm)',
      maxWidth: 280
    }
  }, "Digital inspections, incident reporting and audit-ready evidence for UK warehousing, logistics and manufacturing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20
    }
  }, ['ISO 27001', 'UK Cloud Data', 'GDPR Compliant'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 'var(--text-micro)',
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.78)'
    }
  }, t)))), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 700,
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'rgba(255,255,255,.62)',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '22px 32px',
      fontSize: 'var(--text-caption)'
    }
  }, "\xA9 The HS Manager 2026. A product developed by the Inventory Manager Ltd, Company No: 06381122.")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ChecklistRow = __ds_scope.ChecklistRow;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
