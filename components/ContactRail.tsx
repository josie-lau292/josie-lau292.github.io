import { profileFacts, site } from '@/data/site';

export function ContactRail() {
  return (
    <aside className="profile-rail" aria-label="Profile details">
      <dl>
        {profileFacts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className="elsewhere">
        <p>Elsewhere</p>
        <a href={`mailto:${site.email}`}>Email</a>
        <a href={site.scholar} target="_blank" rel="noreferrer">
          Google Scholar <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </aside>
  );
}
