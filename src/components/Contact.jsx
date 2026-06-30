import { ArrowUpRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { profile } from '../data/profile.js';
import { Reveal } from './Reveal.jsx';

const rows = [
  { label: 'EMAIL', value: profile.email || 'Add email address', href: profile.email ? `mailto:${profile.email}` : '', icon: Mail },
  { label: 'GITHUB', value: 'github.com/srYasiruth', href: profile.github, icon: Github },
  { label: 'LINKEDIN', value: profile.linkedin || 'Add LinkedIn URL', href: profile.linkedin, icon: Linkedin },
  { label: 'RESUME', value: profile.resume || 'Add resume PDF', href: profile.resume, icon: FileText },
];

export function Contact() {
  return (
    <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
      <Reveal className="section-heading">
        <p className="terminal-kicker">$ contact --me</p>
        <h2 id="contact-title">Open to AI/ML engineering roles and research collaborations.</h2>
      </Reveal>
      <Reveal className="contact-panel">
        <p>
          I am interested in practical AI systems, multilingual NLP, local LLM deployment, multimodal learning, and
          problems where engineering discipline matters as much as the model.
        </p>
        <div className="contact-rows">
          {rows.map(({ label, value, href, icon: Icon }) => (
            <a key={label} className={`contact-row ${!href ? 'is-disabled' : ''}`} href={href || '#contact'} aria-disabled={!href}>
              <span className="contact-label">
                <Icon size={18} aria-hidden="true" />
                {label}
              </span>
              <span className="contact-value">{value}</span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
