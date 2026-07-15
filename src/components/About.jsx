import "./styles/About.css";
function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-text">
          <p>
            I'm <strong>Yashi Gupta</strong>, a Computer Science Engineer
            specializing in Artificial Intelligence & Machine Learning.
          </p>

          <p>
            I recently completed my internship as a
            <strong> Prompt Engineer Intern </strong>
            at TensorGo Software Pvt. Ltd., where I worked on
            Gemini, Groq, Prompt Engineering, n8n and AI Automation.
          </p>

          <p>
            My goal is to build AI-powered products that solve
            real-world problems while continuously learning
            modern technologies.
          </p>
        </div>

        <div className="about-info">
          <div className="info-box">
            <span>🎓</span>
            <div>
              <h3>Education</h3>
              <p>B.Tech CSE (AI & ML)</p>
            </div>
          </div>

          <div className="info-box">
            <span>💼</span>
            <div>
              <h3>Experience</h3>
              <p>Prompt Engineer Intern</p>
            </div>
          </div>

          <div className="info-box">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>Bangalore, India</p>
            </div>
          </div>

          <div className="info-box">
            <span>🤖</span>
            <div>
              <h3>Focus</h3>
              <p>Generative AI & Automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;