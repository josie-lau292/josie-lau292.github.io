import Image from 'next/image';
import type { PersonalPhoto } from '@/data/site';
import { basePath } from '@/lib/seo';

export function PersonalImage({ photo, eager = false }: { photo: PersonalPhoto; eager?: boolean }) {
  return (
    <Image
      className="personal-image"
      src={`${basePath}${photo.src}`}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={eager ? 'eager' : 'lazy'}
    />
  );
}
