import { RESOURCES_CONTENT } from '../data/content';

export function ResourcesSection() {
  return (
    <section id={RESOURCES_CONTENT.id} className="levels">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{RESOURCES_CONTENT.kicker}</span>
          <h2>{RESOURCES_CONTENT.title}</h2>
          <p>{RESOURCES_CONTENT.lead}</p>
        </div>

        <div className="cards">
          {RESOURCES_CONTENT.items.map((item) => (
            <article className="card" key={item.title}>
              <div className="card-body">
                <span className="number">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="card-cta">
                  <a
                    className="btn"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.ctaLabel} <span aria-hidden="true">↗</span>
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="source-note">{RESOURCES_CONTENT.note}</p>
      </div>
    </section>
  );
}
