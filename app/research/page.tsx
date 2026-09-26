import { NextStep } from '@/components/NextStep';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { CategoryTabs } from '@/components/CategoryTabs';
import { PageFrame } from '@/components/PageFrame';
import { evaluationExperience, pageInvitations, publications, research, site } from '@/data/site';

export const metadata = pageMetadata({
  path: '/research/',
  title: research.title,
  description: research.description,
});

export default function Research() {
  return (
    <PageFrame
      title={research.title}
      subtitle="What are we actually measuring?"
      description={research.introduction}
    >
      <CategoryTabs
        label="Research and evaluation categories"
        categories={[
          {
            id: 'evaluation-experience',
            label: 'Evaluation experience',
            content: (
              <section className="content-section" aria-labelledby="evaluation-experience">
                <div className="section-heading-row"><h2 id="evaluation-experience">{evaluationExperience.title}</h2></div>
                <div className="editorial-copy"><p>{evaluationExperience.summary}</p></div>
                <details className="reading-details">
                  <summary>My role and contributions</summary>
                  <div className="editorial-list">
                    {evaluationExperience.contributions.map((contribution) => (
                      <div key={contribution.title}>
                        <h3>{contribution.title}</h3>
                        <p>{contribution.description}</p>
                      </div>
                    ))}
                  </div>
                </details>
              </section>
            ),
          },
          {
            id: 'research-questions',
            label: 'Research',
            anchors: ['current-direction'],
            content: (
              <>
              <section className="content-section" aria-labelledby="research-questions">
                <div className="section-heading-row"><h2 id="research-questions">Questions I keep coming back to</h2></div>
                <div className="editorial-list">
                  {research.questions.map((question) => (
                    <article key={question.title}>
                      <h3>{question.title}</h3>
                      <p>{question.summary}</p>
                    </article>
                  ))}
                </div>
              </section>
              <section className="content-section" aria-labelledby="current-direction">
                <div className="section-heading-row"><h2 id="current-direction">Current research</h2></div>
                <div className="editorial-copy">
                  {research.currentSummary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <details className="reading-details">
                  <summary>The thinking behind my PhD</summary>
                  <div className="editorial-copy">
                    {research.current.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    <blockquote className="teaching-question"><p>{research.question}</p></blockquote>
                    <p>{research.closing}</p>
                  </div>
                </details>
              </section>
              </>
            ),
          },
          {
            id: 'publications-heading',
            label: 'Publications',
            anchors: publications.map((_, index) => `publication-${index + 1}`),
            content: (
              <>
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
                              <h3>{publication.title}</h3>
                              <p className="publication-meta">
                                {publication.year} · {publication.venue}
                              </p>
                            </div>
                          </div>

                          <p className="publication-authors">
                            {publication.authors.join(', ')}
                          </p>
                          <p className="publication-summary">{publication.summary}</p>

                          <div className="publication-actions">
                            <a href={publication.doi} target="_blank" rel="noreferrer" aria-label={`Read paper: ${publication.title} (opens in a new tab)`}>
                              Read paper <span aria-hidden="true">↗</span>
                              <span className="sr-only">(opens in a new tab)</span>
                            </a>
                            {publication.repository ? (
                              <a href={publication.repository} target="_blank" rel="noreferrer" aria-label={`ECU record: ${publication.title} (opens in a new tab)`}>
                                ECU record <span aria-hidden="true">↗</span>
                                <span className="sr-only">(opens in a new tab)</span>
                              </a>
                            ) : null}
                            <Link
                              className="publication-note-link"
                              href={`/blog/${publication.noteSlug}/`}
                              aria-label={`Read the plain-language note: ${publication.title}`}
                            >
                              Read the plain-language note <span aria-hidden="true">→</span>
                            </Link>
                          </div>
                        </article>
                      </li>
                    ))}
                  </ol>
                </section>
                {site.cvReady ? (
                    <a className="primary-action" href={site.cv} download>
                      Download CV <span aria-hidden="true">↓</span>
                    </a>
                  ) : (
                    <p className="availability-note">Curriculum vitae coming soon.</p>
                  )}
              </>
            ),
          },
        ]}
      />
      <NextStep invitation={pageInvitations.research} />
    </PageFrame>
  );
}
