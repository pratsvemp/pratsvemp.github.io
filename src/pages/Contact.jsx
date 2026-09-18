const Contact = () => (
  <div className="page-content">
    <div className="page-wrap">

      <h1>Contact</h1>

      <ul className="contact-list" style={{ marginTop: '1.5rem' }}>
        <li>
          <span className="contact-label">Email</span>
          prats [dot] vempati [at] gmail [dot] com
        </li>
        <li>
          <span className="contact-label">GitHub</span>
          <a href="https://github.com/pratsvemp" target="_blank" rel="noopener noreferrer">
            github.com/pratsvemp
          </a>
        </li>
        <li>
          <span className="contact-label">LinkedIn</span>
          <a href="https://linkedin.com/in/pratyush-vempati" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/pratyush-vempati
          </a>
        </li>
        {/* <li>
          <span className="contact-label">CV</span>
          <a href="[cv-link]">Download PDF</a>
        </li> */}
      </ul>

    </div>
  </div>
);

export default Contact;
