import { NextStep } from '@/components/NextStep';
import { pageMetadata } from '@/lib/seo';
import { CategoryTabs } from '@/components/CategoryTabs';
import { PageFrame } from '@/components/PageFrame';
import { PersonalImage } from '@/components/PersonalImage';
import { pageInvitations, photos, teaching, teachingExperience } from '@/data/site';

export const metadata = pageMetadata({
  path: '/teaching/',
  title: 'Teaching',
  description: 'How Josie Lau teaches psychology research methods, statistics, and evidence evaluation, with everyday examples, student reasoning, and a little help from Simba.',
});

function CatchDistribution({ trials }: { trials: number }) {
  const probabilities = [2 ** -trials];
  for (let k = 1; k <= trials; k++) {
    probabilities.push(probabilities[k - 1] * (trials - k + 1) / k);
  }
  const step = 240 / (trials + 1);

  return (
    <svg className="distribution-chart" viewBox="0 0 300 210" role="img" aria-labelledby={`catch-title-${trials} catch-description-${trials}`}>
      <title id={`catch-title-${trials}`}>{`Successful catches out of ${trials} flies`}</title>
      <desc id={`catch-description-${trials}`}>
        Theoretical binomial probabilities with independent attempts and a 0.5 chance of success.
        {trials === 3 ? ' Zero or three catches each have a 12.5% probability; one or two each have a 37.5% probability.' : ' A symmetric, approximately bell-shaped distribution centred on ten catches, with about a 17.6% probability of exactly ten.'}
        Both charts use the same probability scale, from zero to 40 percent.
      </desc>
      {[0, 0.2, 0.4].map((p) => (
        <g key={p}>
          <line x1="40" y1={155 - p * 300} x2="280" y2={155 - p * 300} className="chart-rule" />
          <text x="33" y={159 - p * 300} textAnchor="end">{p * 100}%</text>
        </g>
      ))}
      {probabilities.map((p, k) => (
        <rect key={k} x={40 + k * step + step * 0.15} y={155 - p * 300} width={step * 0.7} height={p * 300} className="chart-bar" />
      ))}
      {(trials === 3 ? [0, 1, 2, 3] : [0, 5, 10, 15, 20]).map((k) => (
        <text key={k} x={40 + (k + 0.5) * step} y="175" textAnchor="middle">{k}</text>
      ))}
      <text x="160" y="200" textAnchor="middle">Successful catches</text>
      <text x="40" y="17">Probability</text>
    </svg>
  );
}

export default function Teaching() {
  return (
    <PageFrame
      title="Teaching"
      description={teaching.introduction}
      highlight={teaching.highlight}
    >
      <CategoryTabs
        label="Teaching categories"
        categories={[
          {
            id: 'what-i-teach',
            label: 'What I teach',
            content: (
              <section className="content-section" aria-labelledby="what-i-teach">
                <div className="section-heading-row"><h2 id="what-i-teach">What I teach</h2></div>
                <div className="editorial-copy">
                  <p>{teaching.overview}</p>
                  <ul>{teaching.areas.map((area) => <li key={area}>{area}</li>)}</ul>
                </div>
              </section>
            ),
          },
          {
            id: 'how-i-teach',
            label: 'How I teach',
            anchors: ['teaching-examples'],
            content: (
              <>
                <section className="content-section" aria-labelledby="how-i-teach">
                  <div className="section-heading-row"><h2 id="how-i-teach">How I teach</h2></div>
                  <div className="editorial-list">
                    {teaching.approach.map((item) => (
                      <article key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                      </article>
                    ))}
                  </div>
                  <details className="reading-details">
                    <summary>More about how I teach</summary>
                    <div className="editorial-list">
                      {teaching.approach.map((item) => (
                        <div key={item.title}>
                          <h3>{item.title}</h3>
                          {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                      ))}
                    </div>
                  </details>
                </section>

        <section className="content-section" aria-labelledby="teaching-examples">
          <div className="section-heading-row"><h2 id="teaching-examples">Teaching examples</h2></div>
          <article className="teaching-example">
            <div className="simba-introduction">
              <figure>
                <div className="simba-photo"><PersonalImage photo={photos.simba} /></div>
                <figcaption>{photos.simba.caption}</figcaption>
              </figure>
              <div>
                <h3>Making statistics less intimidating</h3>
                <div className="editorial-copy">
                  <p>{teaching.simba.introduction}</p>
                </div>
              </div>
            </div>
            <details className="reading-details">
              <summary>Explore Simba’s statistics examples</summary>
              <div className="editorial-copy">
                <h4>How much does Simba sleep?</h4>
                <blockquote className="teaching-question"><p>{teaching.simba.sleepQuestion}</p></blockquote>
                <p>{teaching.simba.sleepExplanation}</p>
                <h4>Catching flies and the Central Limit Theorem</h4>
                <p>{teaching.simba.fliesIntroduction}</p>
              </div>
              <figure className="catch-comparison">
                <div className="example-comparison">
                  {teaching.simba.fliesQuestions.map((example) => (
                    <div key={example.trials}>
                      <h5>{example.trials} flies per batch</h5>
                      <p>{example.question}</p>
                      <CatchDistribution trials={example.trials} />
                    </div>
                  ))}
                </div>
                <figcaption>Theoretical probabilities, rather than results from a simulation. Both charts use the same probability scale.</figcaption>
              </figure>
              <div className="editorial-copy">
                <p>{teaching.simba.fliesExplanation}</p>
                <p>{teaching.simba.repetitionNote}</p>
                <p className="example-reference">Further reading: <a href="https://openstax.org/books/statistics/pages/7-3-using-the-central-limit-theorem" target="_blank" rel="noreferrer">OpenStax on the Central Limit Theorem<span className="sr-only"> (opens in a new tab)</span></a>.</p>
              </div>
            </details>
          </article>

          <details className="reading-details">
            <summary>Explore a second example: research in the real world</summary>
            <article className="teaching-example">
              <h3>Research limitations in the real world</h3>
              <div className="editorial-copy">
                <blockquote className="teaching-question"><p>{teaching.realWorld.question}</p></blockquote>
                <p>{teaching.realWorld.introduction}</p>
              </div>
              <div className="example-comparison setting-comparison">
                {teaching.realWorld.settings.map((setting) => (
                  <div key={setting.title}>
                    <h4>{setting.title}</h4>
                    <ul>{setting.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </div>
                ))}
              </div>
              <div className="editorial-copy">
                <ul className="discussion-prompts">{teaching.realWorld.prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul>
                <p>{teaching.realWorld.explanation}</p>
              </div>
            </article>
          </details>
        </section>
              </>
            ),
          },
          {
            id: 'teaching-experience',
            label: 'Teaching experience',
            content: (
              <section className="content-section" aria-labelledby="teaching-experience">
                <div className="section-heading-row"><h2 id="teaching-experience">Teaching experience</h2></div>
                <div className="teaching-list">
                  {teachingExperience.map((item) => (
                    <article key={item.title}>
                      {item.period && <p className="metadata">{item.period}</p>}
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </div>
              </section>
            ),
          },
        ]}
      />
      <NextStep invitation={pageInvitations.teaching} />
    </PageFrame>
  );
}
