import { CONSERVATION_CONTENT } from '../data/content';
import { CheckIcon } from './Icons';
import { ResponsiveImage } from './ResponsiveImage';

export function ConservationSection() {
  return (
    <section id={CONSERVATION_CONTENT.id}>
      <div className="wrap threats">
        <div className="threat-photo">
          <div className="media-box">
            <ResponsiveImage
              src={CONSERVATION_CONTENT.photo.src}
              alt={CONSERVATION_CONTENT.photo.alt}
              width={CONSERVATION_CONTENT.photo.width}
              height={CONSERVATION_CONTENT.photo.height}
            />
          </div>
        </div>

        <div>
          <span className="kicker">{CONSERVATION_CONTENT.kicker}</span>
          <div className="section-head">
            <h2>{CONSERVATION_CONTENT.title}</h2>
            <p>{CONSERVATION_CONTENT.lead}</p>
          </div>

          <div className="checklist">
            {CONSERVATION_CONTENT.items.map((item) => (
              <div className="check" key={item.title}>
                <span className="check-icon">
                  <CheckIcon />
                </span>
                <div>
                  <b>{item.title}</b>
                  <br />
                  <small>{item.description}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
