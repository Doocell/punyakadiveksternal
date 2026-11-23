import { SPECIES_CONTENT } from '../data/content';
import { ResponsiveImage } from './ResponsiveImage';

export function SpeciesSection() {
  return (
    <section id={SPECIES_CONTENT.id}>
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{SPECIES_CONTENT.kicker}</span>
          <h2>{SPECIES_CONTENT.title}</h2>
          <p>{SPECIES_CONTENT.lead}</p>
        </div>

        <div className="species">
          {SPECIES_CONTENT.items.map((item) => (
            <article className="card" key={item.name}>
              <div className="media-box">
                <ResponsiveImage
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />
              </div>
              <div className="card-body">
                <small>{item.meta}</small>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
