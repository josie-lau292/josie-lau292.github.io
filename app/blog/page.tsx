import { notes, pageInvitations } from '@/data/site';
import { NextStep } from '@/components/NextStep';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { CategoryTabs } from '@/components/CategoryTabs';
import { PageFrame } from '@/components/PageFrame';
import { getPosts, noteCategories, type NoteCategory, type Post } from '@/lib/posts';

export const metadata = pageMetadata({
  path: '/blog/',
  title: 'Notes',
  description: 'Short notes by Josie Lau exploring research, statistics, psychological interventions, and questions from teaching, with space for everyday reflections on anxiety.',
});

function PostList({ posts }: { posts: Post[] }) {
  return (
    <ol className="post-list notes-list">
      {posts.map((post, index) => (
        <li key={post.slug}>
          <p className="item-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</p>
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

export default function Notes() {
  const posts = getPosts();
  const categories = (Object.keys(noteCategories) as NoteCategory[]).map((category) => ({
    ...noteCategories[category],
    key: category,
    posts: posts.filter((post) => post.category === category),
  }));

  return (
    <PageFrame
      title="Notes"
      description={notes.introduction}
      highlight={notes.highlight}
    >
      <CategoryTabs
        label="Notes categories"
        categories={categories.map((category) => ({
          id: category.anchor,
          label: category.title,
          anchors: [`${category.anchor}-title`],
          content: (
            <section className="content-section topic-archive" id={category.anchor} aria-labelledby={`${category.anchor}-title`} key={category.key}>
              <div className="section-heading-row">
                <h2 id={`${category.anchor}-title`}>{category.title}</h2>
              </div>
              {category.posts.length ? <PostList posts={category.posts} /> : (
                <div className="editorial-copy">
                  <p>{category.description} I’m considering a few pieces for this space.</p>
                </div>
              )}
            </section>
          ),
        }))}
      />
      <NextStep invitation={pageInvitations.notes} />
    </PageFrame>
  );
}
