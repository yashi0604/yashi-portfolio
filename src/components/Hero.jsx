import "./styles/Hero.css";
const profile = "/profile.jpeg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">
            <span className="badge-dot"></span>
            Open to Software Engineering Opportunities
        </div>

        <h1>
            Building AI <br />
            <span>Solutions That Matter</span>
        </h1>

        <h2 className="hero-subtitle">
            Hi, I'm <strong>Yashi Gupta</strong> - AI Engineer & Full Stack Developer.
        </h2>

        <p className="hero-description">
          I build AI-powered applications, automate workflows using
          LLMs, and create scalable web applications that solve
          real-world business problems.
        </p>

        <div className="hero-buttons">
          <a
  href="/YashiGupta_Resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="primary-btn"
>
   Download Resume
</a>

          
        </div>

      </div>

      <div className="hero-right">

        <div className="image-glow"></div>

        <img
          src={profile}
          alt="Yashi Gupta"
          className="profile-image"
        />

      </div>

    </section>
  );
}

export default Hero;