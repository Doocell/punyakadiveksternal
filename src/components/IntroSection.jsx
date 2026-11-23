import { INTRO_CONTENT } from '../data/content';
import { SproutIcon } from './Icons';
import { ResponsiveImage } from './ResponsiveImage';

export function IntroSection() {
  return (
    <section id={INTRO_CONTENT.id}>
      <div className="wrap intro-grid">
        <div className="intro-copy">
          <span className="kicker">{INTRO_CONTENT.kicker}</span>
          <div className="section-head">
            <h2>{INTRO_CONTENT.title}</h2>
            <p>{INTRO_CONTENT.lead}</p>
          </div>
          {INTRO_CONTENT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="pill-list" aria-label="Cakupan biodiversitas">
            {INTRO_CONTENT.pills.map((pill) => (
              <span className="pill" key={pill}>
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="intro-photo">
          <ResponsiveImage
            src={INTRO_CONTENT.photo.src}
            alt={INTRO_CONTENT.photo.alt}
            width={INTRO_CONTENT.photo.width}
            height={INTRO_CONTENT.photo.height}
          />
          <div className="photo-note">
            <SproutIcon />
            <span>{INTRO_CONTENT.photo.note}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
