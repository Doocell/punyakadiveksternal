import { GALLERY_CONTENT } from '../data/content';
import { ResponsiveImage } from './ResponsiveImage';

export function GallerySection() {
  return (
    <section className="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{GALLERY_CONTENT.kicker}</span>
          <h2>{GALLERY_CONTENT.title}</h2>
          <p>{GALLERY_CONTENT.lead}</p>
        </div>

        <div className="gallery-grid">
          {GALLERY_CONTENT.images.map((image) => (
            <figure className="gallery-item" key={image.alt}>
              <div className="media-box">
                <ResponsiveImage
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
