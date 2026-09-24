import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/posts';
import { publicUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/research/', '/teaching/', '/blog/', '/about/',
    ...getPosts().map((post) => `/blog/${post.slug}/`)];
  return paths.flatMap((path) => {
    const url = publicUrl(path);
    return url ? [{ url }] : [];
  });
}
