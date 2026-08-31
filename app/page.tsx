import Link from 'next/link';
import { ContactRail } from '@/components/ContactRail';
import { HomeSectionRail, type HomeMilestone } from '@/components/HomeSectionRail';
import { ScrollReveal } from '@/components/ScrollReveal';
import { publications, site, teachingTopics, timeline } from '@/data/site';
import { formatPostDate, getPosts } from '@/lib/posts';

const milestones: HomeMilestone[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'research', label: 'Research' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'experience', label: 'Experience' },
  { id: 'writing', label: 'Writing' },
];

export default function Home() {
  const latest = getPosts().slice(0, 2);

  return (
    <div className="home-frame">
      <div className="home-left-rail">
        <HomeSectionRail milestones={milestones} />
      </div>

      <div className="home-reading-column">
        <header id="profile" className="home-hero">
          {/* <p className="eyebrow">Hello, I’m Josie.</p> */}
          <h1>Good evidence should not just inform what we know, but shape what we do.</h1>
          <div className="home-bio">
            <p>
              Hi, I’m {site.name}, a {site.role} at {site.institution} passionate about using research 
              and data to better understand and support the mental health and wellbeing of children and young people.
              My work sits at the meeting point of youth mental health, program evaluation, and
              individual-participant-data meta-analysis.
            </p>
            <p>
              I also teach quantitative research methods with an emphasis on clear
              questions, careful interpretation, and practical confidence.
            </p>
          </div>
          <Link className="primary-action" href="/research/">
            Explore my research <span aria-hidden="true">→</span>
          </Link>
        </header>

        <div className="mobile-profile-rail">
          <ContactRail />
        </div>

        <div className="home-sections">
          <div id="research" className="anchor-section">
            <ScrollReveal>
              <header className="section-header">
                <p className="eyebrow">Publications</p>
                <h2>Recent research</h2>
              </header>
              <ol className="research-list publication-home-list">
                {publications.map((publication, index) => (
                  <li key={publication.doi}>
                    <p className="item-index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <div>
                      <p className="publication-meta">
                        {publication.year} · {publication.venue}
                      </p>
                      <h3>
                        <Link href={`/research/#publication-${index + 1}`}>
                          {publication.title}
                        </Link>
                      </h3>
                      <p>{publication.homeSummary}</p>
                      <Link
                        className="inline-note-link"
                        href={`/blog/${publication.noteSlug}/`}
                      >
                        Read the research note <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ol>
              <Link className="arrow-link" href="/research/">
                View research <span aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          </div>

          <div id="teaching" className="anchor-section">
            <ScrollReveal>
              <header className="section-header">
                <p className="eyebrow">Teaching</p>
                <h2>Statistics as a way of thinking</h2>
              </header>
              <div className="teaching-overview">
                <p>
                  I teach statistics slowly enough to understand and clearly enough
                  to use—helping students move from procedures to thoughtful questions
                  about their data.
                </p>
                <ol>
                  {teachingTopics.slice(0, 3).map((topic) => (
                    <li key={topic.title}>{topic.title}</li>
                  ))}
                </ol>
              </div>
              <Link className="arrow-link" href="/teaching/">
                Teaching and resources <span aria-hidden="true">→</span>
              </Link>
            </ScrollReveal>
          </div>

          <div id="experience" className="anchor-section">
            <ScrollReveal>
              <header className="section-header">
                <p className="eyebrow">Experience and education</p>
                <h2>Resume</h2>
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
                <p className="eyebrow">Writing</p>
                <h2>Recent writing</h2>
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
