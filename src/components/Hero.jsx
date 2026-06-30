import { ArrowDownRight, Github, TerminalSquare, FileText } from 'lucide-react';
import { profile } from '../data/profile.js';

export function Hero() {
  return (
    <section className="hero section-shell" id="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <p className="terminal-kicker">
          <TerminalSquare size={18} aria-hidden="true" />
          &gt; whoami
        </p>
        <h1 id="hero-title">
          <span className="typewriter">{profile.displayName}</span>
        </h1>
        <p className="hero-subtitle">
          {profile.role} - {profile.headline}
        </p>
        <p className="hero-copy">
          I build practical, deployable AI - from retrieval-augmented document QA in Sinhala and English, to real-time
          multimodal disaster detection from noisy social media data.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#projects">
            View Projects
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a className="button button-ghost" href={profile.resume || '#contact'}>
            <FileText size={18} aria-hidden="true" />
            Resume
          </a>
        </div>
        <p className="availability">
          <span aria-hidden="true" />
          Available for AI/ML opportunities
        </p>
      </div>
    </section>
  );
}
