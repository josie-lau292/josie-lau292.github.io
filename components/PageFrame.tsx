import type { ReactNode } from 'react';

type Fact = {
  label: string;
  value: ReactNode;
};

type PageFrameProps = {
  eyebrow: string;
  title: string;
  description?: string;
  facts?: Fact[];
  children: ReactNode;
  article?: boolean;
};

export function PageFrame({
  eyebrow,
  title,
  description,
  facts = [],
  children,
  article = false,
}: PageFrameProps) {
  const Main = article ? 'article' : 'div';

  return (
    <Main className="page-frame">
      <div className="page-main">
        <header className={`page-heading${description ? ' page-heading--described' : ''}`}>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {description ? <p className="page-description">{description}</p> : null}
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
