import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

/**
 * Scales a fixed-width drawing down to fit whatever space it actually has.
 *
 * The device mockups are laid out in fixed pixels, so any breakpoint-stepped
 * scale leaves viewport widths where they still overflow. Measuring the real
 * container removes the guesswork.
 *
 * Measurement is synchronous in a layout effect and repeated on resize, so the
 * first painted frame is already correct — a ResizeObserver would only report
 * after a frame has been composited.
 *
 * `naturalWidth` may be a function of the page width, for drawings whose
 * allowance changes with the layout — e.g. a cluster that may bleed past its
 * column in the two-column hero but must fit outright once that hero stacks.
 */
export function useFitScale(naturalWidth, { max = 1 } = {}) {
  const [node, setNode] = useState(null);
  const [fit, setFit] = useState(max);

  const ref = useCallback((el) => setNode(el), []);

  useLayoutEffect(() => {
    if (!node) return undefined;
    const measure = () => {
      const w = node.getBoundingClientRect().width;
      const natural = typeof naturalWidth === 'function'
        ? naturalWidth(document.documentElement.clientWidth)
        : naturalWidth;
      if (w > 0 && natural > 0) setFit(Math.min(max, w / natural));
    };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measure);
    };
  }, [node, naturalWidth, max]);

  return [ref, fit];
}

/** Subscribes to a media query and re-renders on change. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(query).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);
  return matches;
}
