import { pageMetadata, profileGraph } from '@/lib/seo';
import Link from 'next/link';
import { ContactRail } from '@/components/ContactRail';
import { PersonalImage } from '@/components/PersonalImage';
import { HomeSectionRail, type HomeMilestone } from '@/components/HomeSectionRail';
import { ScrollReveal } from '@/components/ScrollReveal';
import { home, photos, research, site, timeline } from '@/data/site';
import { formatPostDate, getPosts } from '@/lib/posts';

export const metadata = pageMetadata({
  path: '/',
  title: `${site.name} — Psychology researcher and educator`,
  description: site.description,
});

const milestones: HomeMilestone[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'research', label: 'Evaluation' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'experience', label: 'Experience' },
  { id: 'writing', label: 'Notes' },
];

export default function Home() {
  const latest = getPosts().slice(0, 2);
  const graph = profileGraph();

  return (
    <div className="home-frame">
      {graph && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />}
      <div className="home-left-rail">
        <HomeSectionRail milestones={milestones} />
      </div>

      <div className="home-reading-column">
        <header id="profile" className="home-hero">
          <div className="mobile-portrait"><PersonalImage photo={photos.portrait} eager /></div>
          <h1>Hi, I’m Josie.</h1>
          <div className="home-bio">
            <p>{home.introduction}</p>
            <p className="home-role">{site.role} · {site.institution}</p>
          </div>
          <div className="home-intro-links">
            <Link className="primary-action" href="/research/">Explore my work <span aria-hidden="true">→</span></Link>
          </div>
        </header>

        <div className="mobile-profile-rail">
          <ContactRail compact />
        </div>

        <div className="home-sections">
          <div id="research" className="anchor-section">
            <ScrollReveal>
              <header className="section-header">
                <h2>{research.title}</h2>
              </header>
              <p className="home-section-copy">{home.research}</p>
              <Link className="arrow-link" href="/research/">
                Evaluation experience and research <span aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          </div>

          <div id="teaching" className="anchor-section">
            <ScrollReveal>
              <header className="section-header">
                <h2>Teaching</h2>
              </header>
              <p className="home-section-copy">{home.teaching}</p>
              <Link className="arrow-link" href="/teaching/">
                How I teach <span aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          </div>

          <div id="experience" className="anchor-section">
            <ScrollReveal>
              <header className="section-header">
                <h2>Experience and education</h2>
              </header>
              <ol className="timeline">
                {timeline.map((item) => (
                  <li key={`${item.period}-${item.title}`}>
                    <p className="timeline-period">{item.period}</p>
                    <span className="timeline-marker" aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.place}</p>
                    </div>
                  </li>
                ))}
              </ol>
              {site.cvReady ? (
                <a className="arrow-link" href={site.cv} download>
                  Download CV <span aria-hidden="true">↓</span>
                </a>
              ) : (
                <p className="availability-note">Curriculum vitae coming soon.</p>
              )}
            </ScrollReveal>
          </div>

          <div id="writing" className="anchor-section">
            <ScrollReveal>
              <header className="section-header">
                <h2>Recent notes</h2>
              </header>
              <ol className="post-list post-list--compact">
                {latest.map((post) => (
                  <li key={post.slug}>
                    <div className="post-meta">
                      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                      <span>{post.readTime}</span>
                    </div>
                    <div>
                      <h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3>
                      <p>{post.excerpt}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link className="arrow-link" href="/blog/">
                Browse all notes <span aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="home-right-rail">
        <ContactRail />
      </div>
    </div>
  );
}
