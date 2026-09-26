import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');
export const noteCategories = {
  research: {
    title: 'Research & psychology',
    label: 'Research note',
    anchor: 'research-notes',
    description: 'Notes on research papers, psychological interventions, and the questions behind them.',
  },
  statistics: {
    title: 'Statistics & research methods',
    label: 'Statistics note',
    anchor: 'statistics',
    description: 'Ways into statistical ideas and research methods, with examples to think through at your own pace.',
  },
  anxiety: {
    title: 'Anxiety in everyday life',
    label: 'Everyday anxiety note',
    anchor: 'everyday-anxiety',
    description: 'Short reflections on experiences that can feel strangely familiar, and what psychology can help us understand about them.',
  },
} as const;

export type NoteCategory = keyof typeof noteCategories;

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: NoteCategory;
  publicationId?: string;
  content: string;
};

export function getPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map<Post>((file) => {
      const slug = file.replace(/\.md$/, '');
      const parsed = matter(
        fs.readFileSync(path.join(postsDirectory, file), 'utf8'),
      );

      return {
        slug,
        content: parsed.content,
        title: String(parsed.data.title),
        excerpt: String(parsed.data.excerpt),
        date: String(parsed.data.date),
        readTime: String(parsed.data.readTime),
        category: parsed.data.category === 'anxiety' ? 'anxiety' : parsed.data.category === 'research' ? 'research' : 'statistics',
        publicationId: parsed.data.publicationId
          ? String(parsed.data.publicationId)
          : undefined,
      };
    })
    .sort((a, b) =>
      b.date.localeCompare(a.date) || a.title.localeCompare(b.title),
    );
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
