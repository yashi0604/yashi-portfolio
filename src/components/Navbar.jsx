import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      if (current) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Yashi Gupta</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#about"
            className={active === "about" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className={active === "experience" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;