import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PageFrame } from '@/components/PageFrame';
import { formatPostDate, getPost, getPosts } from '@/lib/posts';

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <PageFrame
      article
      eyebrow={post.category === 'research' ? 'Research note' : 'Statistics note'}
      title={post.title}
      description={post.excerpt}
      facts={[
        { label: 'Published', value: <time dateTime={post.date}>{formatPostDate(post.date)}</time> },
        { label: 'Reading time', value: post.readTime },
      ]}
    >
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
      <nav className="article-return" aria-label="Article navigation">
        <Link className="arrow-link" href="/blog/">
          <span aria-hidden="true">←</span> All writing
        </Link>
      </nav>
    </PageFrame>
  );
}
