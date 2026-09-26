import { NextStep } from '@/components/NextStep';
import { pageMetadata } from '@/lib/seo';
import { PageFrame } from '@/components/PageFrame';
import { PersonalImage } from '@/components/PersonalImage';
import { about, pageInvitations, photos } from '@/data/site';

export const metadata = pageMetadata({
  path: '/about/',
  title: 'About',
  description: 'Josie Lau on moving from Hong Kong to Australia, finding her way into teaching and research, and the quieter interests outside her work.',
});

export default function About() {
  return (
    <PageFrame
      title="About me"
    >
      <div className="about-copy">
        {about.story.map((paragraph, index) => (
          <p className={index === 0 ? 'lead-paragraph' : undefined} key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="content-section" aria-labelledby="outside-work">
        <div className="section-heading-row"><h2 id="outside-work">Outside work</h2></div>
        <div className="editorial-copy">
          {about.interests.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="personal-photo-pair">
          {[photos.hongKong, photos.italy].map((photo) => (
            <figure key={photo.src}>
              <PersonalImage photo={photo} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="anxiety-education">
        <div className="section-heading-row"><h2 id="anxiety-education">Psychology beyond university</h2></div>
        <div className="editorial-copy">
          {about.instagram.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <NextStep invitation={pageInvitations.about} />
    </PageFrame>
  );
}
