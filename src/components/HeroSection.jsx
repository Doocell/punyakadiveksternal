import { HERO_CONTENT, STATS } from '../data/content';

export function HeroSection() {
  return (
    <>
      <section className="hero" id="beranda">
        <img
          className="hero-media"
          src={HERO_CONTENT.image.src}
          alt={HERO_CONTENT.image.alt}
          width={HERO_CONTENT.image.width}
          height={HERO_CONTENT.image.height}
          fetchPriority="high"
          decoding="sync"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <div className="wrap hero-content">
          <span className="eyebrow">{HERO_CONTENT.eyebrow}</span>
          <h1>
            {HERO_CONTENT.titleLead}
            <br />
            <span className="hero-accent">{HERO_CONTENT.titleAccent}</span>
          </h1>
          <p>{HERO_CONTENT.description}</p>
          <a className="btn" href={HERO_CONTENT.ctaHref}>
            {HERO_CONTENT.ctaLabel} <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <div className="wrap stats" aria-label="Ringkasan keanekaragaman hayati Indonesia">
        {STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
