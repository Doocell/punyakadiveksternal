import { REGIONS_CONTENT } from '../data/content';

export function RegionsSection() {
  return (
    <section className="regions" id={REGIONS_CONTENT.id}>
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{REGIONS_CONTENT.kicker}</span>
          <h2>{REGIONS_CONTENT.title}</h2>
          <p>{REGIONS_CONTENT.lead}</p>
        </div>

        <div className="region-grid">
          {REGIONS_CONTENT.zones.map((zone) => (
            <article className="region" key={zone.tag}>
              <span className="tag">{zone.tag}</span>
              <h3>{zone.title}</h3>
              <p>{zone.description}</p>
              <b>{zone.example}</b>
            </article>
          ))}
        </div>

        <div className="mapbox">
          <h3>{REGIONS_CONTENT.mapbox.title}</h3>
          <p>{REGIONS_CONTENT.mapbox.intro}</p>
          <div className="mapbox-grid">
            {REGIONS_CONTENT.mapbox.lines.map((line) => (
              <article className="mapbox-card" key={line.title}>
                <h4>{line.title}</h4>
                <p>{line.description}</p>
              </article>
            ))}
          </div>
          <p>{REGIONS_CONTENT.mapbox.footnote}</p>
        </div>
      </div>
    </section>
  );
}
