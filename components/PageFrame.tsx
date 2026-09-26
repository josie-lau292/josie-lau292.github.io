import type { ReactNode } from 'react';

type Fact = {
  label: string;
  value: ReactNode;
};

type PageFrameProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  highlight?: string;
  facts?: Fact[];
  children: ReactNode;
  article?: boolean;
};

export function PageFrame({
  eyebrow,
  title,
  subtitle,
  description,
  highlight,
  facts = [],
  children,
  article = false,
}: PageFrameProps) {
  const Main = article ? 'article' : 'div';

  return (
    <Main className={`page-frame${facts.length ? '' : ' page-frame--simple'}`}>
      <div className="page-main">
        <header className={`page-heading${description ? ' page-heading--described' : ''}`}>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
          {description ? <p className="page-description">{description}</p> : null}
          {highlight ? <p className="editorial-highlight">{highlight}</p> : null}
        </header>
        {children}
      </div>

      {facts.length ? (
        <aside className="facts-rail" aria-label={`${title} details`}>
          <dl>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      ) : null}
    </Main>
  );
}
