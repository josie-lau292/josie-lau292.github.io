'use client';

import { useEffect, useState } from 'react';

export type HomeMilestone = {
  id: string;
  label: string;
};

export function HomeSectionRail({ milestones }: { milestones: HomeMilestone[] }) {
  const [activeId, setActiveId] = useState(milestones[0]?.id ?? '');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const elements = milestones
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));
    let frame = 0;

    const update = () => {
      const readingLine = window.scrollY + window.innerHeight * 0.42;
      const tops = elements.map((element) => element.offsetTop);
      const first = tops[0] ?? 0;
      const last = tops[tops.length - 1] ?? first;
      const range = Math.max(last - first, 1);
      let current = elements[0]?.id ?? '';

      elements.forEach((element, index) => {
        if (readingLine >= (tops[index] ?? 0)) current = element.id;
      });

      setActiveId(current);
      setProgress(Math.min(Math.max((readingLine - first) / range, 0), 1));
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
  }, [milestones]);

  return (
    <nav className="section-rail" aria-label="Homepage reading map">
      <p>On this page</p>
      <div className="rail-track" aria-hidden="true">
        <span style={{ transform: `scaleY(${progress})` }} />
      </div>
      <ol>
        {milestones.map((milestone) => (
          <li key={milestone.id}>
            <a
              href={`#${milestone.id}`}
              aria-current={activeId === milestone.id ? 'location' : undefined}
            >
              <span aria-hidden="true" />
              {milestone.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
