import { useCallback, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Icon } from './Icon.jsx';

const EASE = 'cubic-bezier(.2,.8,.2,1)';
const COMMIT_PX = 90;

export function TestimonialStack({ testimonials, visibleBehind = 2 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragRef = useRef({ startX: 0, pointerId: null });
  const dragOffsetRef = useRef(0);
  const total = testimonials.length;
  const reduceMotion = useReducedMotion();

  const navigate = useCallback((next) => setActiveIndex((next + total) % total), [total]);

  const onPointerDown = (e, index) => {
    if (index !== activeIndex) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, pointerId: e.pointerId };
    setIsDragging(true);
  };

  const onPointerMove = (e) => {
    if (!isDragging || e.pointerId !== dragRef.current.pointerId) return;
    dragOffsetRef.current = e.clientX - dragRef.current.startX;
    setDragOffset(dragOffsetRef.current);
  };

  const endDrag = () => {
    const offset = dragOffsetRef.current;
    setIsDragging(false);
    setDragOffset(0);
    dragOffsetRef.current = 0;
    if (Math.abs(offset) > COMMIT_PX) navigate(activeIndex + (offset < 0 ? 1 : -1));
  };

  if (!testimonials?.length) return null;

  return (
    <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
      <div className="testimonial-stack-viewport" style={{ position: 'relative', touchAction: 'pan-y' }}>
        {testimonials.map((t, index) => {
          const order = (index - activeIndex + total) % total;
          const isActive = order === 0;

          let style;
          if (isActive) {
            const rotate = reduceMotion ? 0 : dragOffset / 34;
            style = {
              transform: `translateX(${dragOffset}px) rotate(${rotate}deg)`,
              opacity: 1, zIndex: total,
              transition: isDragging ? 'none' : `transform 420ms ${EASE}`,
              cursor: isDragging ? 'grabbing' : 'grab',
            };
          } else if (order <= visibleBehind) {
            const scale = 1 - 0.045 * order;
            const y = reduceMotion ? 0 : -16 * order;
            style = {
              transform: `scale(${scale}) translateY(${y}px)`,
              opacity: 1 - 0.24 * order, zIndex: total - order,
              transition: `transform 420ms ${EASE}, opacity 420ms ${EASE}`,
              cursor: 'default', pointerEvents: 'none',
            };
          } else {
            style = { transform: 'scale(0.85)', opacity: 0, zIndex: 0, transition: `transform 420ms ${EASE}, opacity 420ms ${EASE}`, pointerEvents: 'none' };
          }

          return (
            <div
              key={t.id}
              className="testimonial-stack-card"
              style={{ position: 'absolute', inset: 0, borderRadius: 'var(--radius-2xl)', ...style }}
              onPointerDown={(e) => onPointerDown(e, index)}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              <div style={{ padding: 'clamp(28px, 4vw, 40px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
                    <div style={{
                      flexShrink: 0, width: 48, height: 48, borderRadius: 'var(--radius-md)',
                      background: t.avatarGradient, color: '#fff', fontFamily: 'var(--font-display)',
                      fontWeight: 700, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {t.initials}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 'var(--text-body-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }}>{t.name}</div>
                      <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }} dangerouslySetInnerHTML={{ __html: t.role }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 2, flexShrink: 0, paddingTop: 2 }} aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" size={14} color="var(--green-500)" fill={i < t.rating ? 1 : 0} />
                    ))}
                  </div>
                </div>

                <Icon name="format_quote" size={26} color="var(--green-300)" fill={1} style={{ marginBottom: 10, flexShrink: 0 }} />
                <blockquote style={{
                  margin: '0 0 24px', fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-relaxed)',
                  color: 'var(--text-body)', flex: 1, minHeight: 0,
                  display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
                  <Icon name="verified" size={16} color="var(--green-600)" fill={1} />
                  <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-muted)' }}>
                    Verified customer
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 20 }}>
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            aria-label={`Show testimonial from ${t.name}`}
            aria-current={i === activeIndex}
            onClick={() => navigate(i)}
            style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <span style={{
              width: i === activeIndex ? 20 : 6, height: 6, borderRadius: 'var(--radius-pill)',
              background: i === activeIndex ? 'var(--green-500)' : 'var(--border-default)',
              transition: `width 250ms ${EASE}, background-color 250ms ${EASE}`,
            }} />
          </button>
        ))}
      </div>
    </div>
  );
}
