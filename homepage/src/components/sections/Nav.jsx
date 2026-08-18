import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo.jsx';
import { Icon } from '../ui/Icon.jsx';

const EASE = [0.2, 0.8, 0.2, 1];

const LINKS = [
  { label: 'Solutions', hasMenu: true },
  { label: 'Checklists', href: '/checklists/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Free Trial', href: '/free-trial/' },
  { label: 'Book a Demo', href: '/book-platform-demo/' },
];

const SOLUTIONS_MENU = {
  'By role': ['QHSE & EHS Directors', 'Warehouse & Logistics Managers', 'Compliance Managers'],
  'By industry': ['Transport & Logistics', 'Warehousing & 3PL', 'Manufacturing', 'Construction & Engineering'],
};

function NavLink({ label, href }) {
  const active = typeof window !== 'undefined' && href && window.location.pathname === href;
  return (
    <a
      href={href || '#'}
      style={{
        fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)',
        color: active ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-standard)',
        whiteSpace: 'nowrap',
      }}
      onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-strong)')}
      onMouseOut={(e) => (e.currentTarget.style.color = active ? 'var(--text-strong)' : 'var(--text-muted)')}
    >
      {label}
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    const onClickOutside = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [menuOpen]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      style={{
        position: 'fixed', top: 16, left: 0, right: 0, zIndex: 100,
        padding: '0 16px', display: 'flex', justifyContent: 'center',
      }}
    >
      <nav
        aria-label="Primary"
        className="nav-glass-pill"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
          width: '100%', maxWidth: 920, height: 60,
          padding: '0 8px 0 22px',
          background: 'rgba(255,255,255,.78)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(13,31,45,.08)',
          borderRadius: 'var(--radius-pill)',
          boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          transition: 'box-shadow var(--dur-base) var(--ease-standard)',
        }}
      >
        <a href="/" aria-label="The HS Manager home" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Logo height={28} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 26 }} className="nav-desktop">
          {LINKS.map((link) => (
            link.hasMenu ? (
              <div
                key={link.label}
                ref={menuRef}
                style={{ position: 'relative' }}
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((v) => !v)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 3, cursor: 'pointer',
                    fontFamily: 'inherit', fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)',
                    color: menuOpen ? 'var(--text-strong)' : 'var(--text-muted)',
                    transition: 'color var(--dur-fast) var(--ease-standard)',
                  }}
                >
                  {link.label}
                  <Icon name="expand_more" size={15} style={{ transform: menuOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast) var(--ease-standard)' }} />
                </button>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    className="nav-glass-dropdown"
                    style={{
                      position: 'absolute', top: 'calc(100% + 14px)', left: '50%', transform: 'translateX(-50%)',
                      transformOrigin: 'top center',
                      background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(13,31,45,.08)',
                      padding: 16, width: 480, display: 'flex', gap: 32,
                    }}
                  >
                    {Object.entries(SOLUTIONS_MENU).map(([group, items]) => (
                      <div key={group} style={{ flex: 1 }}>
                        <div className="hsm-eyebrow" style={{ marginBottom: 10 }}>{group}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {items.map((item) => (
                            <a key={item} href="#" style={{
                              padding: '8px 10px', borderRadius: 'var(--radius-sm)',
                              fontSize: 'var(--text-body-sm)', color: 'var(--text-body)',
                              transition: 'var(--transition-control)',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.background = 'var(--grey-50)')}
                            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
                            >{item}</a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ) : (
              <NavLink key={link.label} label={link.label} href={link.href} />
            )
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="nav-desktop">
          <NavLink label="Login" />
          <a
            href="/free-trial/"
            className="nav-cta"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              height: 42, padding: '0 18px', borderRadius: 'var(--radius-pill)',
              background: 'linear-gradient(135deg, var(--green-500), var(--green-600))',
              color: '#fff', fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)',
              whiteSpace: 'nowrap', boxShadow: '0 6px 16px -6px rgba(18,183,29,.55)',
              transition: 'transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
            }}
          >
            Start Free Trial
            <Icon name="arrow_forward" size={15} />
          </a>
        </div>

        <button
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="nav-mobile-toggle"
          style={{
            display: 'none', width: 42, height: 42, alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', borderRadius: 'var(--radius-pill)', flexShrink: 0,
          }}
        >
          <Icon name={mobileOpen ? 'close' : 'menu'} size={22} />
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="nav-mobile-panel nav-glass-panel"
          style={{
            position: 'absolute', top: 72, left: 16, right: 16,
            background: 'rgba(255,255,255,.95)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(13,31,45,.08)', borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)', padding: 20,
            display: 'none', flexDirection: 'column', gap: 4,
          }}
        >
          {LINKS.map((l) => (
            <a key={l.label} href={l.href || '#'} style={{ padding: '12px 8px', fontSize: 'var(--text-body)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)' }}>{l.label}</a>
          ))}
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <a href="#" style={{
              flex: 1, textAlign: 'center', padding: '13px 0', borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-default)', fontSize: 'var(--text-body)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)',
            }}>Login</a>
            <a href="/free-trial/" style={{
              flex: 1, textAlign: 'center', padding: '13px 0', borderRadius: 'var(--radius-pill)',
              background: 'linear-gradient(135deg, var(--green-500), var(--green-600))', color: '#fff',
              fontSize: 'var(--text-body)', fontWeight: 'var(--weight-semibold)',
            }}>Start Free Trial</a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
