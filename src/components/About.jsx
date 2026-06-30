import { profile } from '../data/profile.js';
import { Reveal } from './Reveal.jsx';

export function About() {
  return (
    <section className="section-shell about-section" id="about" aria-labelledby="about-title">
      <Reveal className="section-heading">
        <p className="terminal-kicker">$ cat about.md</p>
        <h2 id="about-title">Research-minded builder, product-minded engineer.</h2>
      </Reveal>

      <div className="about-layout">
        <Reveal className="about-copy">
          <p>
            I am an IT undergraduate at {profile.university}, focused on AI/ML engineering with a strong pull toward
            NLP, local LLM deployment, and applied AI research.
          </p>
          <p>
            I like problems that do not have off-the-shelf solutions: building a RAG system for Sinhala, a language most
            AI tooling ignores, or fusing text and images to detect disasters in real time from noisy social media data.
          </p>
          <p>
            I am full-stack capable, so I do not just train models. I ship them with FastAPI or Flask backends, React
            frontends, vector databases, and deployment pipelines that turn a notebook experiment into something people
            can actually use.
          </p>
          <p>
            Outside of AI, I am into graphic design, hiking, singing, university sports, and volunteering in media and
            event work.
          </p>
          <dl className="current-grid">
            <div>
              <dt>EDUCATION</dt>
              <dd>IT Undergraduate, Rajarata University of Sri Lanka</dd>
            </div>
            <div>
              <dt>FOCUS</dt>
              <dd>{profile.focus.join(' | ')}</dd>
            </div>
            <div>
              <dt>INTERESTS</dt>
              <dd>{profile.interests.join(' | ')}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="portrait-panel" delay={0.12}>
          <div className="portrait-frame">
            <img src={profile.portrait} alt="Stylized portrait of Sahan Yasiruth" loading="lazy" />
          </div>
          <div className="image-caption">
            <span>visual signature</span>
            blue/orange systems palette
          </div>
        </Reveal>
      </div>
    </section>
  );
}
