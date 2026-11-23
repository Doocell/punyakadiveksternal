import { BENEFITS_CONTENT } from '../data/content';

export function BenefitsSection() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{BENEFITS_CONTENT.kicker}</span>
          <h2>{BENEFITS_CONTENT.title}</h2>
          <p>{BENEFITS_CONTENT.lead}</p>
        </div>

        <div className="benefits-grid">
          {BENEFITS_CONTENT.items.map((item) => (
            <article className="benefit-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
