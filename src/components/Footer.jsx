import { BRAND } from '../data/content';
import { LeafBrandIcon } from './Icons';

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <div className="brand">
            <span className="brand-mark">
              <LeafBrandIcon />
            </span>
            <span>
              {BRAND.title}
              <small>{BRAND.subtitle}</small>
            </span>
          </div>
          <p>{BRAND.footerSummary}</p>
        </div>
        <p className="foot-right">
          {BRAND.footerMotto}
          <br />
          {BRAND.copyright}
        </p>
      </div>
    </footer>
  );
}
