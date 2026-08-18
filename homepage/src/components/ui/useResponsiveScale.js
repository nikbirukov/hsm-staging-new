import { useEffect, useState } from 'react';

export function useResponsiveScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const narrowMq = window.matchMedia('(max-width: 480px)');
    const midMq = window.matchMedia('(max-width: 640px)');
    const update = () => setScale(narrowMq.matches ? 0.56 : midMq.matches ? 0.72 : 1);
    update();
    narrowMq.addEventListener('change', update);
    midMq.addEventListener('change', update);
    return () => {
      narrowMq.removeEventListener('change', update);
      midMq.removeEventListener('change', update);
    };
  }, []);
  return scale;
}
