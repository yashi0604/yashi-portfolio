import "./styles/Skills.css";
function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Programming</h3>

          <div className="skill-tags">
            <span> Python</span>
            <span> Java</span>
            <span> C++</span>
            <span> JavaScript</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Web Development</h3>

          <div className="skill-tags">
  <span> HTML</span>
  <span> CSS</span>
  <span> React.js</span>
  <span> Node.js</span>
  <span> Bootstrap</span>
</div>
        </div>

        <div className="skill-card">
          <h3>AI & Machine Learning</h3>

          <div className="skill-tags">
  <span> Prompt Engineering</span>
  <span> Generative AI</span>
  <span> LLMs</span>
  <span> TensorFlow</span>
</div>
        </div>

        <div className="skill-card">
          <h3>Automation</h3>

          <div className="skill-tags">
  <span> n8n</span>
  <span> Gemini API</span>
  <span> Groq API</span>
  <span> Workflow Automation</span>
</div>
        </div>

        <div className="skill-card">
          <h3>Databases</h3>

          <div className="skill-tags">
  <span> MySQL</span>
  <span> SQL</span>
</div>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>

          <div className="skill-tags">
  <span> Git</span>
  <span> GitHub</span>
  <span> VS Code</span>
  <span> Postman</span>
</div>
        </div>

      </div>

    </section>
  );
}

export default Skills;