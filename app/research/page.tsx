import Link from 'next/link';
import { PageFrame } from '@/components/PageFrame';
import { publications, researchProjects, site, timeline } from '@/data/site';

export const metadata = {
  title: 'Research',
  description:
    'Publications and research by Josie Lau on youth mental health, anxiety prevention, and culturally responsive program evaluation.',
};

export default function Research() {
  return (
    <PageFrame
      eyebrow="Research"
      title="Evidence that travels carefully."
      description="My research asks how prevention programs can better support young people’s mental health across different schools, communities, and cultural settings."
      facts={[
        { label: 'Publications', value: `${publications.length} peer-reviewed articles` },
        { label: 'Focus', value: 'Anxiety prevention, resilience, and cultural adaptation' },
        {
          label: 'Full profile',
          value: (
            <a href={site.scholar} target="_blank" rel="noreferrer">
              Google Scholar <span className="sr-only">(opens in a new tab)</span>
            </a>
          ),
        },
      ]}
    >
      <section className="content-section" aria-labelledby="publications-heading">
        <div className="section-heading-row">
          <h2 id="publications-heading">Publications</h2>
          <span>{String(publications.length).padStart(2, '0')}</span>
        </div>

        <ol className="publication-list">
          {publications.map((publication, index) => (
            <li key={publication.doi} id={`publication-${index + 1}`}>
              <article>
                <div className="publication-heading">
                  <p className="item-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div>
                    <p className="publication-meta">
                      {publication.year} · {publication.venue}
                    </p>
                    <h3>{publication.title}</h3>
                  </div>
                </div>

                <p className="publication-authors">
                  {publication.authors.join(', ')}
                </p>
                <p className="publication-summary">{publication.summary}</p>

                <div className="publication-actions">
                  <a href={publication.doi} target="_blank" rel="noreferrer">
                    Publisher / DOI <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                  {publication.repository ? (
                    <a href={publication.repository} target="_blank" rel="noreferrer">
                      ECU record <span aria-hidden="true">↗</span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : null}
                  <Link
                    className="publication-note-link"
                    href={`/blog/${publication.noteSlug}/`}
                  >
                    Want to know more? <span>Read the research note →</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="content-section" aria-labelledby="current-direction">
        <div className="section-heading-row">
          <h2 id="current-direction">Current direction</h2>
        </div>
        <div className="project-list">
          {researchProjects.map((project) => (
            <article key={project.title}>
              <p className="metadata">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="research-experience">
        <div className="section-heading-row">
          <h2 id="research-experience">Related experience</h2>
        </div>
        <div className="experience-list">
          {timeline.filter((item) => item.type !== 'study').map((item) => (
            <article key={item.title}>
              <p className="metadata">{item.period}</p>
              <div><h3>{item.title}</h3><p>{item.place}</p></div>
            </article>
          ))}
        </div>
      </section>

      {site.cvReady ? (
        <a className="primary-action" href={site.cv} download>
          Download CV <span aria-hidden="true">↓</span>
        </a>
      ) : (
        <p className="availability-note">Curriculum vitae coming soon.</p>
      )}
    </PageFrame>
  );
}
