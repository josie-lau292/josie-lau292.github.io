'use client';

import { useEffect, useRef, useSyncExternalStore, type KeyboardEvent, type ReactNode } from 'react';

type Category = {
  id: string;
  label: string;
  anchors?: string[];
  content: ReactNode;
};

const categoryChange = 'josie-category-change';

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange);
  window.addEventListener('popstate', onChange);
  window.addEventListener(categoryChange, onChange);
  return () => {
    window.removeEventListener('hashchange', onChange);
    window.removeEventListener('popstate', onChange);
    window.removeEventListener(categoryChange, onChange);
  };
}

function getHash() {
  try {
    return decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return '';
  }
}

const getServerHash = () => '';

export function CategoryTabs({ label, categories }: { label: string; categories: Category[] }) {
  const hash = useSyncExternalStore(subscribe, getHash, getServerHash);
  const selected = Math.max(0, categories.findIndex((category) =>
    category.id === hash || category.anchors?.includes(hash),
  ));
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const root = useRef<HTMLDivElement>(null);
  const selectedByClick = useRef(false);

  useEffect(() => {
    if (selectedByClick.current) {
      selectedByClick.current = false;
      return;
    }
    if (!hash) return;
    const target = document.getElementById(hash);
    if (target && root.current?.contains(target)) {
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }, [hash]);

  function select(index: number) {
    const nextHash = categories[index].id;
    if (hash === nextHash) return;
    selectedByClick.current = true;
    window.history.pushState(window.history.state, '', `#${nextHash}`);
    window.dispatchEvent(new Event(categoryChange));
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case 'ArrowRight': next = (index + 1) % categories.length; break;
      case 'ArrowLeft': next = (index - 1 + categories.length) % categories.length; break;
      case 'Home': next = 0; break;
      case 'End': next = categories.length - 1; break;
      default: return;
    }
    event.preventDefault();
    buttons.current[next]?.focus();
    select(next);
  }

  return (
    <div className="category-browser" ref={root}>
      <div className="category-menu" role="tablist" aria-label={label} aria-orientation="horizontal">
        {categories.map((category, index) => (
          <button
            className="category-tab"
            key={category.id}
            ref={(element) => { buttons.current[index] = element; }}
            type="button"
            role="tab"
            id={`${category.id}-tab`}
            aria-controls={`${category.id}-panel`}
            aria-selected={selected === index}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {category.label}
            <span aria-hidden="true">{selected === index ? '↓' : '→'}</span>
          </button>
        ))}
      </div>
      {categories.map((category, index) => (
        <div
          className="category-panel"
          key={category.id}
          id={`${category.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${category.id}-tab`}
          tabIndex={0}
          hidden={selected !== index}
        >
          {category.content}
        </div>
      ))}
      <noscript>
        <style>{'.category-menu { display: none; } .category-panel[hidden] { display: block; }'}</style>
      </noscript>
    </div>
  );
}
