/**
 * Shrinks a device uniformly, frame and drawn screen together.
 *
 * Passing a smaller `width` to a frame only shrinks the chrome — the screen
 * content inside is laid out in fixed pixels, so it keeps its full size and
 * gets clipped. Rendering at the natural width and scaling with a transform
 * preserves the design's internal proportions exactly.
 */
export function ScaledDevice({ width, height, scale = 1, children, style }) {
  if (scale === 1) return <div style={style}>{children}</div>;
  return (
    <div style={{ width: Math.round(width * scale), height: Math.round(height * scale), ...style }}>
      <div style={{ width, height, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        {children}
      </div>
    </div>
  );
}

function ScreenGloss({ radius }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0, borderRadius: radius, pointerEvents: 'none', zIndex: 6,
        background: 'linear-gradient(115deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 82%, rgba(255,255,255,.05) 100%)',
      }}
    />
  );
}

export function PhoneFrame({ width = 220, children, style }) {
  const height = Math.round(width * 2.05);
  const bezel = Math.round(width * 0.032);
  const outerRadius = Math.round(width * 0.17);
  const screenRadius = Math.round(width * 0.135);
  const notchWidth = Math.round(width * 0.34);
  const notchHeight = Math.round(width * 0.065);
  const btnW = Math.max(1, Math.round(width * 0.008));

  return (
    <div style={{
      width, height, background: 'linear-gradient(155deg, #333338, #0e0e10)',
      borderRadius: outerRadius, padding: bezel, boxSizing: 'border-box', position: 'relative',
      boxShadow: [
        'inset 0 0 0 1px rgba(255,255,255,.06)',
        'inset 1px 1px 1.5px rgba(255,255,255,.14)',
        'inset 0 -1px 2px rgba(0,0,0,.5)',
      ].join(', '),
      ...style,
    }}>
      {/* side buttons */}
      <div aria-hidden="true" style={{ position: 'absolute', left: -btnW, top: '16%', width: btnW, height: '5%', background: '#1a1a1c', borderRadius: '2px 0 0 2px' }} />
      <div aria-hidden="true" style={{ position: 'absolute', left: -btnW, top: '24%', width: btnW, height: '9%', background: '#1a1a1c', borderRadius: '2px 0 0 2px' }} />
      <div aria-hidden="true" style={{ position: 'absolute', right: -btnW, top: '20%', width: btnW, height: '11%', background: '#1a1a1c', borderRadius: '0 2px 2px 0' }} />

      <div style={{
        width: '100%', height: '100%', background: '#fff',
        borderRadius: screenRadius, overflow: 'hidden', position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: notchWidth, height: notchHeight, background: '#0e0e10',
          borderBottomLeftRadius: notchHeight, borderBottomRightRadius: notchHeight, zIndex: 5,
        }} />
        {children}
        <ScreenGloss radius={screenRadius} />
      </div>
    </div>
  );
}

export function PhoneStatusBar({ time = '11:43' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 18px 4px', fontSize: 11, fontWeight: 600, color: '#111',
    }}>
      <span>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="#111"><rect x="0" y="6" width="2.5" height="4" rx=".5" /><rect x="4" y="4" width="2.5" height="6" rx=".5" /><rect x="8" y="2" width="2.5" height="8" rx=".5" /><rect x="11.5" y="0" width="2.5" height="10" rx=".5" opacity=".3" /></svg>
        <svg width="13" height="10" viewBox="0 0 13 10" fill="none" stroke="#111" strokeWidth="1.3"><path d="M1 3.5a8 8 0 0 1 11 0M3.2 6a5 5 0 0 1 6.6 0" strokeLinecap="round" /><circle cx="6.5" cy="8.3" r="1" fill="#111" stroke="none" /></svg>
        <div style={{ width: 20, height: 10, border: '1px solid #111', borderRadius: 2.5, position: 'relative', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', right: -3, top: 3, width: 2, height: 4, background: '#111', borderRadius: '0 1px 1px 0' }} />
          <div style={{ margin: '0 1.5px', width: 13, height: 6, background: '#111', borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );
}

export function LaptopFrame({ width = 420, children }) {
  const screenH = Math.round(width * 0.6);
  const bezel = Math.round(width * 0.018);
  const screenRadius = 4;

  return (
    <div style={{ width }}>
      <div style={{
        background: 'linear-gradient(155deg, #45454a, #17171a)', borderRadius: 14,
        padding: bezel, boxSizing: 'border-box', position: 'relative',
        boxShadow: [
          'inset 0 0 0 1px rgba(255,255,255,.05)',
          'inset 1px 1px 1.5px rgba(255,255,255,.12)',
          'inset 0 -1px 2px rgba(0,0,0,.45)',
        ].join(', '),
      }}>
        <div style={{
          position: 'absolute', top: bezel * 0.4, left: '50%', transform: 'translateX(-50%)',
          width: 5, height: 5, borderRadius: '50%', background: '#000',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.08)',
        }} />
        <div style={{ width: '100%', height: screenH, background: '#fff', borderRadius: screenRadius, overflow: 'hidden', position: 'relative' }}>
          {children}
          <ScreenGloss radius={screenRadius} />
        </div>
      </div>
      <div style={{
        height: Math.round(width * 0.02), background: 'linear-gradient(180deg, #56565b, #26262a)',
        borderRadius: '0 0 9px 9px', margin: '0 -3%', position: 'relative',
        boxShadow: '0 1px 0 rgba(255,255,255,.08) inset, 0 3px 6px rgba(0,0,0,.2)',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '16%', height: '55%', background: '#17171a', borderRadius: '0 0 6px 6px',
        }} />
      </div>
    </div>
  );
}
