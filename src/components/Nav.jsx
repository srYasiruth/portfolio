import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { profile } from '../data/profile.js';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#hero" aria-label="Go to top" onClick={close}>
        SY<span aria-hidden="true">_</span>
      </a>

      <nav className="desktop-links" aria-label="Primary navigation">
        {profile.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href={profile.resume || '#contact'} aria-label="Resume">
          <Download size={16} aria-hidden="true" />
          Resume
        </a>
      </nav>

      <button className="icon-button mobile-menu-button" type="button" aria-label="Open menu" onClick={() => setOpen(true)}>
        <Menu size={22} aria-hidden="true" />
      </button>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <button className="icon-button mobile-close" type="button" aria-label="Close menu" onClick={close}>
          <X size={24} aria-hidden="true" />
        </button>
        <nav aria-label="Mobile navigation">
          {profile.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={profile.resume || '#contact'} onClick={close}>
            <Download size={18} aria-hidden="true" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
