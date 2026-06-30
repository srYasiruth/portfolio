import { projects } from '../data/projects.js';
import { ProjectCard } from './ProjectCard.jsx';
import { Reveal } from './Reveal.jsx';

export function ProjectsSection() {
  return (
    <section className="section-shell projects-section" id="projects" aria-labelledby="projects-title">
      <Reveal className="section-heading">
        <p className="terminal-kicker">$ ls projects/</p>
        <h2 id="projects-title">Featured AI systems with measurable architecture.</h2>
      </Reveal>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
