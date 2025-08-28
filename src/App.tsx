import { useRef, useState, useEffect } from "react";
import "./App.css";
import { 
  FaArrowDown, FaArrowUp, FaReact, FaNodeJs, FaFire, FaDatabase, FaPython, FaGithub, FaLinkedin 
} from "react-icons/fa";
import { SiDotnet, SiSharp, SiPostgresql, SiJavascript, SiPhp } from "react-icons/si";

function App() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [currentSection, setCurrentSection] = useState(0);

  const totalSections = 3;

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < totalSections) {
      sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);
    }
  };

  const isThrottled = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isThrottled.current) return;
      isThrottled.current = true;

      if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      }

      setTimeout(() => {
        isThrottled.current = false;
      }, 1000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") scrollToSection(currentSection + 1);
      if (e.key === "ArrowUp") scrollToSection(currentSection - 1);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection]);

  return (
    <div className="App">
      <section ref={(el) => { sectionsRef.current[0] = el; }} className="hero">
        <h1 className="name">Jerome Admana</h1>
        <p className="title">Fullstack Developer</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jeromeadmana/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/jeromeadmana" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
        </div>
      </section>

      <section ref={(el) => { sectionsRef.current[1] = el; }} className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="project-box">
            <iframe src="https://www.example.com" title="Google" className="project-preview" />
            <h3>Example</h3>
            <div className="tech-icons">
              <FaNodeJs size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
          </a>

          <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer" className="project-box">
            <iframe src="https://www.wikipedia.org" title="Yahoo" className="project-preview" />
            <h3>Wikipedia</h3>
            <div className="tech-icons">
              <SiDotnet size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
          </a>

          <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer" className="project-box">
            <iframe src="https://www.w3schools.com" title="Office" className="project-preview" />
            <h3>W3 Schools</h3>
            <div className="tech-icons">
              <SiDotnet size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
          </a>

          <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" className="project-box">
            <iframe src="https://developer.mozilla.org" title="Google Copy" className="project-preview" />
            <h3>Mozilla Developer</h3>
            <div className="tech-icons">
              <FaNodeJs size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
          </a>

          <a href="https://codesandbox.io" target="_blank" rel="noopener noreferrer" className="project-box">
            <iframe src="https://codesandbox.io" title="Yahoo Copy" className="project-preview" />
            <h3>Code Sanbox</h3>
            <div className="tech-icons">
              <SiDotnet size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
          </a>

          <a href="https://vercel.com/templates" target="_blank" rel="noopener noreferrer" className="project-box">
            <iframe src="https://vercel.com/templates" title="Office Copy" className="project-preview" />
            <h3>Vercel</h3>
            <div className="tech-icons">
              <SiDotnet size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
          </a>
        </div>
      </section>

      <section ref={(el) => { sectionsRef.current[2] = el; }} className="tech-stack">
        <h2 className="section-title">Tech Stack</h2>
        <div className="grid">
          {/* Frontend */}
          <div className="tech"><SiJavascript size={50} /><p>JavaScript</p></div>
          <div className="tech"><FaReact size={50} /><p>React</p></div>

          {/* Backend */}
          <div className="tech"><SiDotnet size={50} /><p>.NET Core</p></div>
          <div className="tech"><SiSharp size={50} /><p>C#</p></div>
          <div className="tech"><FaNodeJs size={50} /><p>Node.js</p></div>
          <div className="tech"><FaPython size={50} /><p>Python</p></div>
          <div className="tech"><SiPhp size={50} /><p>PHP</p></div>

          {/* Database */}
          <div className="tech"><SiPostgresql size={50} /><p>Postgres</p></div>
          <div className="tech"><FaDatabase size={50} /><p>MSSQL</p></div>

          {/* Cloud / Other */}
          <div className="tech"><FaFire size={50} /><p>Firebase</p></div>
        </div>
      </section>

      {currentSection > 0 && (
        <button className="nav-btn up" onClick={() => scrollToSection(currentSection - 1)}>
          <FaArrowUp size={30} />
        </button>
      )}
      {currentSection < totalSections - 1 && (
        <button className="nav-btn down" onClick={() => scrollToSection(currentSection + 1)}>
          <FaArrowDown size={30} />
        </button>
      )}
    </div>
  );
}

export default App;