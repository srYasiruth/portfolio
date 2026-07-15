import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import { Reveal } from './Reveal.jsx';

const publication = {
  number: '[1]',
  title: 'Real-Time Multimodal Disaster Detection Using Social Media',
  authors: [
    'L.D.C.S.R. Yasiruth',
    'G.H.A.N. Theekshana',
    'K.M.V.K. Kulathunge',
    'S.N. Mapitigama',
  ],
  venue: 'IMPETUS 2026',
  venueFull: 'International Conference on Computing, Engineering, and Technology',
  institution: 'Faculty of Applied Sciences, Uva Wellassa University of Sri Lanka',
  doi: '10.5281/zenodo.20702357',
  doiUrl: 'https://doi.org/10.5281/zenodo.20702357',
  pdfUrl: '/paper-disaster-detection-impetus2026.pdf',
  projectAnchor: '#projects',
};

export function Publications() {
  return (
    <section className="section-shell publications-section" id="publications" aria-labelledby="publications-title">
      <Reveal className="section-heading">
        <p className="terminal-kicker">$ cat publications.bib</p>
        <h2 id="publications-title">Published research for real-world disaster response.</h2>
      </Reveal>

      <Reveal className="pub-card" delay={0.08}>
        <div className="pub-top-row">
          <span className="pub-number">{publication.number}</span>
          <span className="pub-venue-badge">{publication.venue}</span>
        </div>

        <h3 className="pub-title">{publication.title}</h3>

        <p className="pub-authors">
          {publication.authors.map((author, index) => (
            <span key={author}>
              {author === 'L.D.C.S.R. Yasiruth' ? (
                <strong className="pub-author-self">{author}</strong>
              ) : (
                <span>{author}</span>
              )}
              {index < publication.authors.length - 1 && <span className="pub-author-sep">, </span>}
            </span>
          ))}
        </p>

        <p className="pub-venue-full">
          {publication.venueFull}
          <br />
          <span className="pub-institution">{publication.institution}</span>
        </p>

        <p className="pub-doi">
          <span className="pub-doi-label">DOI</span>
          <a href={publication.doiUrl} target="_blank" rel="noopener noreferrer" className="pub-doi-link">
            {publication.doi}
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </p>

        <div className="pub-divider" />

        <div className="pub-actions">
          <a
            href={publication.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary pub-action-link"
          >
            <FileText size={16} aria-hidden="true" />
            Read Paper
          </a>
          <a
            href={publication.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-ghost pub-action-link"
          >
            <ExternalLink size={16} aria-hidden="true" />
            DOI Record
          </a>
          <a href={publication.projectAnchor} className="button button-ghost pub-action-link">
            <BookOpen size={16} aria-hidden="true" />
            View Project
          </a>
        </div>
      </Reveal>
    </section>
  );
}
