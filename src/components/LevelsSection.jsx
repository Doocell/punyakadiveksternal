import { LEVELS_CONTENT } from '../data/content';
import { ResponsiveImage } from './ResponsiveImage';

export function LevelsSection() {
  return (
    <section className="levels">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{LEVELS_CONTENT.kicker}</span>
          <h2>{LEVELS_CONTENT.title}</h2>
          <p>{LEVELS_CONTENT.lead}</p>
        </div>

        <div className="cards">
          {LEVELS_CONTENT.items.map((item) => (
            <article className="card" key={item.number}>
              <div className="media-box">
                <ResponsiveImage
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />
              </div>
              <div className="card-body">
                <span className="number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
