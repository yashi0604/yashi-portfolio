import "./styles/Experience.css";
import { FaBriefcase } from "react-icons/fa";
const companyLogo = "/company_logo.png";
const certificate = "/TensorGo_Internship_Certificate.pdf";
function Experience() {
  return (
<section id="experience" className="experience">

    <h2 className="section-title">Experience</h2>

    <div className="timeline">

        <div className="timeline-dot"></div>

        <div className="experience-card">

            <span className="experience-date">
                Sept 2025 – Dec 2025
            </span>

<div className="experience-header">

    <img src={companyLogo} className="company-logo" />

    <div className="company-info">
        <h3>Prompt Engineer Intern</h3>
        <h4>TensorGo Software Pvt. Ltd.</h4>
    </div>

</div>

            <ul className="experience-points">
                <li>Developed Prompt Engineering workflows for enterprise AI solutions.</li>
                <li>Built AI automation using n8n and LLM integrations.</li>
                <li>Integrated Gemini API and Groq API into production workflows.</li>
                <li>Optimized business processes through AI-powered automation.</li>
            </ul>

            <div className="experience-tags">
                <span>Prompt Engineering</span>
                <span>Gemini</span>
                <span>Groq</span>
                <span>n8n</span>
                <span>AI Automation</span>
            </div>

<div className="experience-links">
  <a
    href={certificate}
    target="_blank"
    rel="noreferrer"
    className="certificate-btn"
  >
    🏆 Internship Certificate
  </a>

  <a
    href="https://tensorgo.com"
    target="_blank"
    rel="noreferrer"
    className="company-btn"
  >
    ↗ Company Website
  </a>
</div>

        </div>

    </div>

</section>
  );
}

export default Experience;