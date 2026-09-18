import { Link } from 'react-router-dom';

const About = () => (
  <div className="page-content">
    <div className="page-wrap">
      <div className="about-layout">

        {/* ── Left: Bio text ── */}
        <div>
          <h1>Pratyush Vempati</h1>

          <p>
            I am a third-year undergraduate student at the{' '}
            <a href="https://www.iiit.ac.in/" target="_blank" rel="noopener noreferrer">
              International Institute of Information Technology, Hyderabad
            </a>
            . I am fortunate to be advised for my Honours by{' '}
            <a href="https://suryajith.github.io/" target="_blank" rel="noopener noreferrer">
              Prof. Suryajith Chillara
            </a>
            . I am currently part of the{' '}
            <a href="https://cstar.iiit.ac.in/" target="_blank" rel="noopener noreferrer">
              Center for Security, Theory, Algorithms and Research (CSTAR)
            </a>
            .
          </p>

          <p>
            I am broadly interested in algebraic complexity. I am currently working on lower bounds against various algebraic computational models. I am also interested in boolean circuit complexity. See my{' '}
            <Link to="/research">research page</Link> for more information. I am also fascinated by various graph theoretical and combinatorial problems - specifically, graph reconstruction and infinite graph theory.
          </p>

          <hr className="divider" />

          {/* <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <a href="https://github.com/pratsvemp" target="_blank" rel="noopener noreferrer">GitHub</a>
            {' · '}
            <a href="[cv-link]">CV</a>
          </p> */}
        </div>

        {/* ── Right: Photo ── */}
        <div className="about-photo">
          <img src="/profile.jpg" alt="Pratyush Vempati" />
          <figcaption style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>
            Obligatory outdoorsy picture. Picture taken by <a href="https://sites.google.com/view/amik-raj-behera/home" target="_blank" rel="noopener noreferrer">Amik Raj Behera</a> (who does wonderful research, do check him out!), in Lisbon, Portugal, while (ironically) attending CCC 2026.
          </figcaption>
        </div>

      </div>
    </div>
  </div>
);

export default About;
