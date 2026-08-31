'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';
import { ThemeToggle } from './ThemeToggle';

const links = [
  ['Research', '/research/'],
  ['Teaching', '/teaching/'],
  ['Writing', '/blog/'],
  ['About', '/about/'],
] as const;

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  const isActive = (href: string) =>
    pathname === href.slice(0, -1) || pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          className="wordmark"
          href="/"
          aria-current={pathname === '/' ? 'page' : undefined}
          onClick={() => setIsOpen(false)}
        >
          {site.shortName}
          <span>Psychology · Research · Teaching</span>
        </Link>

        <div className="header-actions">
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <span className="header-rule" aria-hidden="true" />
          <ThemeToggle />
          <button
            ref={menuButton}
            className="menu-button"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span aria-hidden="true">{isOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!isOpen}
      >
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={isActive(href) ? 'page' : undefined}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
