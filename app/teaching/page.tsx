import Link from 'next/link';
import { PageFrame } from '@/components/PageFrame';
import { teachingExperience, teachingTopics } from '@/data/site';

export const metadata = {
  title: 'Teaching',
  description: 'Josie Lau’s teaching experience and approachable statistics resources for psychology students.',
};

export default function Teaching() {
  return (
    <PageFrame
      eyebrow="Teaching"
      title="Statistics, with room to think."
      description="I help psychology students move from ‘which button do I click?’ to asking clear questions, interpreting results, and trusting their own reasoning."
      facts={[
        { label: 'Audience', value: 'Psychology students' },
        { label: 'Approach', value: 'Clear, careful, and practical' },
      ]}
    >
      <section className="content-section" aria-labelledby="teaching-experience">
        <div className="section-heading-row">
          <h2 id="teaching-experience">Teaching experience</h2>
        </div>
        <div className="teaching-list">
          {teachingExperience.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="learning-resources">
        <div className="section-heading-row">
          <h2 id="learning-resources">Learning resources</h2>
          <span>{String(teachingTopics.length).padStart(2, '0')}</span>
        </div>
        <p className="section-introduction">Short, approachable starting points for common methods topics.</p>
        <div className="topic-index">
          {teachingTopics.map((topic, index) => (
            <article key={topic.title}>
              <p className="item-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</p>
              <div><h3>{topic.title}</h3><p>{topic.description}</p></div>
            </article>
          ))}
        </div>
        <Link className="arrow-link" href="/blog/">
          Browse the teaching blog <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
