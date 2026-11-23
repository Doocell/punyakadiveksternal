import { FACTORS_CONTENT } from '../data/content';

export function FactorsSection() {
  return (
    <section id={FACTORS_CONTENT.id} className="levels">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{FACTORS_CONTENT.kicker}</span>
          <h2>{FACTORS_CONTENT.title}</h2>
          <p>{FACTORS_CONTENT.lead}</p>
        </div>

        <div className="cards">
          {FACTORS_CONTENT.items.map((item) => (
            <article className="card" key={item.number}>
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
