import "./styles/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>Featured Projects</h2>

      <div className="projects-grid">

        {/* ================= Project 1 ================= */}

        <div className="project-card">

          <a
            href="https://drive.google.com/file/d/101reGsOhI4T6PsE03YP4nrJisLu8oOiZ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="project-image"
          >
            <img src="/projects/recruitflow.png" alt="RecruitFlow AI" />

            <div className="play-overlay">
              ▶ Watch Demo
            </div>
          </a>

          <h3>RecruitFlow AI</h3>

          <h4>AI Hiring Automation System</h4>

          <ul className="project-description">
            <li>
              AI-powered recruitment platform with automated resume uploads and
              job applications.
            </li>

            <li>
              Integrated Gemini AI for resume screening and candidate
              shortlisting.
            </li>

            <li>
              Automated hiring workflow using n8n, Google Sheets and Gmail.
            </li>

            <li>
              Responsive frontend with end-to-end recruitment automation.
            </li>
          </ul>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>n8n</span>
            <span>Gemini AI</span>
          </div>

          <a
            href="https://github.com/yashi0604/recruitflow-ai"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            💻 GitHub
          </a>

        </div>

        {/* ================= Project 2 ================= */}

        <div className="project-card">

          <a
            href="https://drive.google.com/file/d/1hN7P_asMQ51mL5ITi7-g8oQv8MzfmkIL/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="project-image"
          >
            <img src="/projects/resume-ranker.png" alt="Resume Ranker" />

            <div className="play-overlay">
              ▶ Watch Demo
            </div>
          </a>

          <h3>Smart AI Resume Ranker</h3>

          <h4>AI Resume Screening System</h4>

          <ul className="project-description">

            <li>
              Automated resume screening using AI and job descriptions.
            </li>

            <li>
              Parsed PDF and DOCX resumes to extract candidate information.
            </li>

            <li>
              Ranked applicants using weighted scoring and keyword matching.
            </li>

            <li>
              Built an interactive Streamlit dashboard for recruiters.
            </li>

          </ul>

          <div className="tech-stack">

            <span>Python</span>
            <span>Streamlit</span>
            <span>Pandas</span>
            <span>pdfplumber</span>
            <span>python-docx</span>

          </div>

          <a
            href="https://github.com/yashi0604/AI-Resume-Ranking-and-Parsing-System"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            💻 GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Projects;