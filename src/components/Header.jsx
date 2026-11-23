import { useEffect, useRef, useState } from 'react';
import { BRAND, NAV_LINKS } from '../data/content';
import { LeafBrandIcon, MenuIcon } from './Icons';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#beranda');
  const menuBtnRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = NAV_LINKS.map((item) =>
      document.getElementById(item.href.slice(1))
    ).filter(Boolean);

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef}>
      <div className="wrap nav">
        <a className="brand" href="#beranda" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">
            <LeafBrandIcon />
          </span>
          <span>
            {BRAND.title}
            <small>{BRAND.subtitle}</small>
          </span>
        </a>

        <nav
          className={`navlinks${menuOpen ? ' open' : ''}`}
          id="navlinks"
          aria-label="Navigasi utama"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? 'location' : undefined}
              onClick={() => {
                setActiveHref(link.href);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          ref={menuBtnRef}
          type="button"
          className="menu-btn"
          id="menuBtn"
          aria-expanded={menuOpen}
          aria-controls="navlinks"
          aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <MenuIcon isOpen={menuOpen} />
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
}
