'use client';

import { usePathname } from 'next/navigation';
import { site } from '@/data/site';

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <footer className={`site-footer${isHome ? ' site-footer--home' : ''}`}>
      {isHome ? (
        <div className="footer-invitation">
          <p className="eyebrow">Contact</p>
          <h2>For research questions, teaching, or collaboration.</h2>
          <a className="arrow-link" href={`mailto:${site.email}`}>
            Email Josie <span aria-hidden="true">→</span>
          </a>
        </div>
      ) : null}
      <div className="footer-utility">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <nav aria-label="Footer navigation">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.scholar} target="_blank" rel="noreferrer">
            Google Scholar <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span className="sr-only">(opens in a new tab)</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
