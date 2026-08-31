'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || reducedMotion.matches) return;

    let frame = 0;
    const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

    const update = () => {
      const bounds = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const entering = clamp((viewport * 0.92 - bounds.top) / (viewport * 0.34));
      const leaving = clamp((bounds.bottom - viewport * 0.08) / (viewport * 0.2));
      const progress = Math.min(entering, leaving);
      const eased = progress * progress * (3 - 2 * progress);

      element.style.setProperty('--reveal-opacity', eased.toFixed(3));
      element.style.setProperty('--reveal-blur', `${((1 - eased) * 6).toFixed(2)}px`);
      element.style.setProperty('--reveal-rise', `${((1 - eased) * 20).toFixed(2)}px`);
      element.dataset.revealReady = 'true';
      frame = 0;
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <section ref={ref} className="scroll-reveal">{children}</section>;
}
