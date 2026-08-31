import Link from 'next/link';
import { PageFrame } from '@/components/PageFrame';
import { formatPostDate, getPosts, type Post } from '@/lib/posts';

export const metadata = {
  title: 'Writing',
  description:
    'Approachable notes on statistics, research methods, and the stories behind published papers.',
};

function PostList({ posts, latest = false }: { posts: Post[]; latest?: boolean }) {
  return (
    <ol className="post-list">
      {posts.map((post, index) => (
        <li key={post.slug}>
          <div className="post-meta">
            {latest && index === 0 ? <strong>Latest</strong> : null}
            <span>{post.category === 'research' ? 'Research' : 'Statistics'}</span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span>{post.readTime}</span>
          </div>
          <div>
            <h3>
              <Link href={`/blog/${post.slug}/`}>
                {post.title} <span aria-hidden="true">→</span>
              </Link>
            </h3>
            <p>{post.excerpt}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Blog() {
  const posts = getPosts();
  const statisticsPosts = posts.filter((post) => post.category === 'statistics');
  const researchPosts = posts.filter((post) => post.category === 'research');
  const latestPosts = posts.slice(0, 4);

  return (
    <PageFrame
      eyebrow="Writing"
      title="Ideas, methods, and the work behind the papers."
      description="Approachable notes for psychology students and curious researchers—from statistical foundations to closer looks at published studies."
      facts={[
        { label: 'Notes', value: `${posts.length} published` },
        { label: 'Topics', value: 'Statistics and research' },
      ]}
    >
      <section className="content-section writing-topics" aria-labelledby="browse-topics">
        <div className="section-heading-row">
          <h2 id="browse-topics">Browse by topic</h2>
          <span>02</span>
        </div>

        <nav className="writing-topic-index" aria-label="Writing topics">
          <a href="#statistics">
            <span className="topic-number">01</span>
            <h3>Statistics, gently</h3>
            <p>
              Clear introductions to common analyses, with an emphasis on intuition and careful
              interpretation.
            </p>
            <span className="topic-link">
              Explore {statisticsPosts.length} notes <span aria-hidden="true">↓</span>
            </span>
          </a>
          <a href="#research-notes">
            <span className="topic-number">02</span>
            <h3>Inside the research</h3>
            <p>
              Plain-language guides to the questions, findings, and limitations behind published
              studies.
            </p>
            <span className="topic-link">
              Explore {researchPosts.length} notes <span aria-hidden="true">↓</span>
            </span>
          </a>
        </nav>
      </section>

      <section className="content-section" aria-labelledby="latest-notes">
        <div className="section-heading-row">
          <h2 id="latest-notes">Latest notes</h2>
          <span>{String(latestPosts.length).padStart(2, '0')}</span>
        </div>
        <PostList posts={latestPosts} latest />
      </section>

      <section className="content-section topic-archive" id="statistics" aria-labelledby="statistics-title">
        <div className="section-heading-row">
          <h2 id="statistics-title">Statistics, gently</h2>
          <span>{String(statisticsPosts.length).padStart(2, '0')}</span>
        </div>
        <p className="section-introduction">
          Foundations for reading data and choosing analyses without losing sight of the research
          question.
        </p>
        <PostList posts={statisticsPosts} />
      </section>

      <section
        className="content-section topic-archive"
        id="research-notes"
        aria-labelledby="research-notes-title"
      >
        <div className="section-heading-row">
          <h2 id="research-notes-title">Inside the research</h2>
          <span>{String(researchPosts.length).padStart(2, '0')}</span>
        </div>
        <p className="section-introduction">
          A closer look at what each study asked, what it found, and where the evidence still needs
          to grow.
        </p>
        <PostList posts={researchPosts} />
      </section>
    </PageFrame>
  );
}
