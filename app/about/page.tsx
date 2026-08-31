import { PageFrame } from '@/components/PageFrame';
import { personalNotes, site } from '@/data/site';

export const metadata = {
  title: 'About',
  description: 'About psychology researcher and educator Josie Lau.',
};

export default function About() {
  return (
    <PageFrame
      eyebrow="About"
      title="A researcher, teacher, and collector of small good things."
      facts={[
        { label: 'Based in', value: site.location },
        { label: 'Work', value: 'Research and teaching' },
      ]}
    >
      <div className="about-copy">
        <p className="lead-paragraph">
          Outside work, I’m usually planning a trip, looking for the best thing to eat nearby, or taking photographs of the details that make a place feel memorable.
        </p>
        
        <p>
          I’m drawn to travel for its pauses as much as its movement: unfamiliar streets, shared meals, and the chance to see ordinary things with fresh attention. At home, I share life with my cat, who is very clear about when it is time to step away from a screen.
        </p>
        <p>
          This site is a quiet place to share research, teaching materials, and a little of the life around them.
        </p>
      </div>

      <section className="content-section" aria-labelledby="outside-work">
        <div className="section-heading-row">
          <h2 id="outside-work">Outside work</h2>
        </div>
        <dl className="personal-notes">
          {personalNotes.map((note) => (
            <div key={note.label}>
              <dt>{note.label}</dt>
              <dd>{note.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <a className="primary-action" href={`mailto:${site.email}`}>
        Get in touch <span aria-hidden="true">→</span>
      </a>
    </PageFrame>
  );
}
