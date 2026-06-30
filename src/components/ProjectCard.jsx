import { ExternalLink, Github } from 'lucide-react';
import { ArchitectureDiagram } from './ArchitectureDiagram.jsx';
import { Reveal } from './Reveal.jsx';

function LinkIcon({ type }) {
  return type === 'github' ? <Github size={17} aria-hidden="true" /> : <ExternalLink size={17} aria-hidden="true" />;
}

export function ProjectCard({ project, index }) {
  return (
    <Reveal className="project-card" delay={index * 0.08}>
      <div className="project-card-header">
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>

      <div className="project-body">
        <div className="project-narrative">
          <p>{project.problem}</p>
          <p>{project.impact}</p>
          <ul>
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </div>

        <div className="project-visual">
          <ArchitectureDiagram type={project.diagram} />
        </div>
      </div>

      <div className="metric-grid">
        {project.metrics.map((metric) => (
          <div className="metric" key={`${project.id}-${metric.label}`}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>

      <div className="project-footer">
        <div className="stack-list" aria-label={`${project.title} tech stack`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              className={!link.href ? 'is-disabled' : ''}
              href={link.href || '#contact'}
              aria-disabled={!link.href}
            >
              <LinkIcon type={link.type} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
