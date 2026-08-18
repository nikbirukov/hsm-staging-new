import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Icon } from './Icon.jsx';
import { PhoneFrame } from './DeviceFrames.jsx';
import { useFitScale } from './useFitScale.js';

const EASE = 'cubic-bezier(.2,.8,.2,1)';
const BASE_WIDTH = 232; // +32% over the original 176px reference size
const PHONE_ASPECT = 2.05; // must match PhoneFrame's height ratio
const DRAG_UNIT_PX = 172; // px of drag that equals one card-position shift
const COMMIT_DISTANCE = 0.35; // fraction of a card-width to commit by distance alone
const COMMIT_VELOCITY = 0.6; // units/sec to commit by velocity alone, even on a short drag

export function ScreenshotCarousel({ screens, autoPlay = true, interval = 4200 }) {
  const [index, setIndex] = useState(Math.floor(screens.length / 2));
  const [paused, setPaused] = useState(false);
  const [dragUnits, setDragUnits] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  // Sized from the space the stage actually has, capped at the drawing's
  // natural width. A stepped scale shrank the centre card to ~130px on a phone,
  // which put the drawn screen text below 6px.
  const [stageRef, responsiveScale] = useFitScale(BASE_WIDTH + 48, { max: 1 });
  const reduceMotion = useReducedMotion();
  const dragRef = useRef({ startX: 0, history: [] });
  const dragUnitsRef = useRef(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % screens.length), [screens.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + screens.length) % screens.length), [screens.length]);

  useEffect(() => {
    if (!autoPlay || paused || isDragging || reduceMotion) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, paused, isDragging, reduceMotion, interval, next]);

  const onPointerDown = (e) => {
    dragRef.current = { startX: e.clientX, history: [{ x: e.clientX, t: performance.now() }] };
    setIsDragging(true);
    setPaused(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragRef.current.history.length) return;
    const dx = e.clientX - dragRef.current.startX;
    dragUnitsRef.current = -dx / DRAG_UNIT_PX;
    setDragUnits(dragUnitsRef.current);
    const hist = dragRef.current.history;
    hist.push({ x: e.clientX, t: performance.now() });
    if (hist.length > 6) hist.shift();
  };

  const endDrag = () => {
    const hist = dragRef.current.history;
    dragRef.current = { startX: 0, history: [] };
    setIsDragging(false);
    setPaused(false);

    let velocityUnitsPerSec = 0;
    if (hist.length >= 2) {
      const first = hist[0];
      const last = hist[hist.length - 1];
      const dt = (last.t - first.t) / 1000;
      if (dt > 0) velocityUnitsPerSec = -((last.x - first.x) / DRAG_UNIT_PX) / dt;
    }

    const byVelocity = Math.abs(velocityUnitsPerSec) > COMMIT_VELOCITY ? Math.sign(velocityUnitsPerSec) : 0;
    const byDistance = Math.abs(dragUnitsRef.current) > COMMIT_DISTANCE ? Math.sign(dragUnitsRef.current) : 0;
    const commit = byVelocity || byDistance;
    if (commit > 0) next();
    else if (commit < 0) prev();

    dragUnitsRef.current = 0;
    setDragUnits(0);
  };

  return (
    <div
      ref={stageRef}
      style={{ position: 'relative', width: '100%', maxWidth: 1080, margin: '0 auto' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => !isDragging && setPaused(false)}
    >
      <div
        style={{
          // Derived from the card itself, not a vw clamp — the card is scaled
          // from a measured stage width, which vw units cannot track, and a
          // short stage clips the tallest (centre) card top and bottom.
          position: 'relative',
          height: Math.round(BASE_WIDTH * PHONE_ASPECT * responsiveScale) + 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: 1400,
          touchAction: 'pan-y', cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {screens.map((screen, i) => {
          const total = screens.length;
          let pos = (i - index + total) % total;
          if (pos > Math.floor(total / 2)) pos -= total;
          const livePos = pos - dragUnits;
          const absPos = Math.abs(livePos);

          const cardScale = Math.max(0.6, 1 - Math.min(absPos, 2) * 0.16) * responsiveScale;
          const opacity = Math.max(0, 1 - absPos * 0.62);
          const visible = opacity > 0.02;

          return (
            <div
              key={screen.id}
              style={{
                position: 'absolute',
                transition: isDragging ? 'none' : `transform 500ms ${EASE}, opacity 500ms ${EASE}, filter 500ms ${EASE}`,
                transform: `translateX(${livePos * 62}%) scale(${cardScale})${reduceMotion ? '' : ` rotateY(${livePos * -12}deg)`}`,
                zIndex: Math.round(10 - absPos * 4),
                opacity,
                visibility: visible ? 'visible' : 'hidden',
                cursor: absPos < 0.1 ? 'default' : 'pointer',
                filter: absPos < 0.4
                  ? 'drop-shadow(0 20px 30px rgba(13,31,45,.22))'
                  : `blur(${Math.min(absPos, 1) * 3}px) drop-shadow(0 10px 18px rgba(13,31,45,.14))`,
                pointerEvents: isDragging ? 'none' : 'auto',
              }}
              onClick={() => absPos > 0.1 && setIndex(i)}
            >
              <PhoneFrame width={BASE_WIDTH}>
                {screen.render()}
              </PhoneFrame>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Previous screen"
        onClick={prev}
        className="carousel-nav-btn"
        style={{ position: 'absolute', left: 'clamp(0px, 2vw, 24px)', top: '50%', transform: 'translateY(-50%)' }}
      >
        <Icon name="chevron_left" size={20} />
      </button>
      <button
        type="button"
        aria-label="Next screen"
        onClick={next}
        className="carousel-nav-btn"
        style={{ position: 'absolute', right: 'clamp(0px, 2vw, 24px)', top: '50%', transform: 'translateY(-50%)' }}
      >
        <Icon name="chevron_right" size={20} />
      </button>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 12 }}>
        {screens.map((screen, i) => (
          <button
            key={screen.id}
            type="button"
            aria-label={`Go to ${screen.label}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            style={{
              width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}
          >
            <span style={{
              width: i === index ? 20 : 6, height: 6, borderRadius: 'var(--radius-pill)',
              background: i === index ? 'var(--green-500)' : 'var(--border-default)',
              transition: `width 250ms ${EASE}, background-color 250ms ${EASE}`,
            }} />
          </button>
        ))}
      </div>

      {screens[index] && (
        <div style={{ textAlign: 'center', marginTop: 12, fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>
          {screens[index].label}
        </div>
      )}
    </div>
  );
}
