import "./styles/Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaBriefcase ,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>

      <p className="contact-subtitle">
        I'm currently open to Software Engineering, AI Engineering and GenAI
        opportunities. Feel free to connect with me!
      </p>

      <div className="contact-grid">

        <a
          href="mailto:guptayashi6102004@gmail.com"
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>guptayashi6102004@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/yashi0604/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>View Profile</p>
        </a>

        <a
          href="https://github.com/yashi0604"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>View Projects</p>
        </a>

        <div className="contact-card">
  <FaBriefcase className="contact-icon" />

  <h3>Open to Work</h3>

  <div className="open-roles">
    <span>Software Engineer</span>
    <span>AI Engineer</span>
    <span>GenAI Developer</span>
  </div>
</div>

      </div>

      
    </section>
  );
}

export default Contact;