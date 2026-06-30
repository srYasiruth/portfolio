import { Github } from 'lucide-react';
import { profile } from '../data/profile.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>(c) 2026 Sahan Yasiruth - Built with React</p>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Sahan Yasiruth on GitHub">
        <Github size={18} aria-hidden="true" />
      </a>
      <span aria-hidden="true">$ _</span>
    </footer>
  );
}
