import { photos, site } from '@/data/site';
import { PersonalImage } from './PersonalImage';

export function ContactRail({ compact = false }: { compact?: boolean }) {
  return (
    <aside className="profile-rail" aria-label="Profile details">
      {!compact && <PersonalImage photo={photos.portrait} eager />}
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
