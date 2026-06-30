import { skillGroups } from '../data/skills.js';
import { Reveal } from './Reveal.jsx';

export function SkillsTerminal() {
  return (
    <section className="section-shell skills-section" id="skills" aria-labelledby="skills-title">
      <Reveal className="section-heading">
        <p className="terminal-kicker">$ ls skills/</p>
        <h2 id="skills-title">Stack shaped by deployable AI work.</h2>
      </Reveal>
      <Reveal className="skills-terminal">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.category}>
            <span>{group.category}</span>
            <p>{group.items.join(' | ')}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
