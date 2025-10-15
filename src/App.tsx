import { useRef, useState, useEffect } from "react";
import "./App.css";
import { 
  FaArrowDown, FaArrowUp, FaReact, FaNodeJs, FaFire, FaDatabase, FaPython, FaGithub, FaLinkedin 
} from "react-icons/fa";
import { SiDotnet, SiSharp, SiPostgresql, SiJavascript, SiPhp, SiNodedotjs } from "react-icons/si";
import aiNotesImg from "./assets/Ai-Notes.png";
import aiImageImg from "./assets/Ai-Image.png";
import taskTrackerImg from "./assets/Task-Tracker.png";

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

          {/* ✅ Project 1 - AI Notes */}
          <div className="project-box">
            <a href="https://ai-notes-drab-gamma.vercel.app" target="_blank" rel="noopener noreferrer">
              <img 
                src={aiNotesImg}
                alt="AI Notes Preview" 
                className="project-preview" 
              />
              <h3>AI Notes</h3>
            </a>
            <div className="tech-icons">
              <SiNodedotjs size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
            <a 
              href="https://github.com/jeromeadmana/ai-notes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
            >
              <FaGithub size={25} /> AI Notes GitHub Repo
            </a>
          </div>

          {/* ✅ Project 2 - React + Tailwind + Node + Postgres */}
          <div className="project-box">
            <a href="https://aiimagegallery.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src={aiImageImg}
                alt="AI Image Gallery Preview" 
                className="project-preview" 
              />
              <h3>AI Image Gallery</h3>
            </a>
            <div className="tech-icons">
              <FaReact size={30} />
              <SiJavascript size={30} /> 
              <SiPostgresql size={30} />
              <FaNodeJs size={30} />
            </div>
            <a 
              href="https://github.com/jeromeadmana/ai-image-gallery" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
            >
              <FaGithub size={25} /> AI Image GitHub Repo
            </a>
          </div>

          {/* ✅ Project 3 - Next + Tailwind + Postgres */}
          <div className="project-box">
            <a href="https://task-demo-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src={taskTrackerImg}
                alt="Task Demo Preview" 
                className="project-preview" 
              />
              <h3>Task Tracker Demo</h3>
            </a>
            <div className="tech-icons">
              <FaReact size={30} />
              <SiJavascript size={30} /> 
              <SiPostgresql size={30} />
            </div>
            <a 
              href="https://github.com/jeromeadmana/task-demo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
            >
              <FaGithub size={25} /> AI Image GitHub Repo
            </a>
          </div>

          <div className="project-box">
            <a href="https://github.com/jeromeadmana" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                alt="GitHub Logo" 
                className="project-preview" 
              />
              <h3>My GitHub Repositories</h3>
            </a>
            <div className="tech-icons">
              <FaGithub size={40} />
            </div>
          </div>
          


          {/* ❌ Commented-out projects (retain for future use) */}
          {/*
          <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer" className="project-box">
            <iframe src="https://www.wikipedia.org" title="Wikipedia" className="project-preview" />
            <h3>Wikipedia</h3>
            <div className="tech-icons">
              <SiDotnet size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
          </a>

          <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" className="project-box">
            <iframe src="https://developer.mozilla.org" title="Mozilla Developer" className="project-preview" />
            <h3>Mozilla Developer</h3>
            <div className="tech-icons">
              <FaNodeJs size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
          </a>

          <a href="https://codesandbox.io" target="_blank" rel="noopener noreferrer" className="project-box">
            <iframe src="https://codesandbox.io" title="Code Sandbox" className="project-preview" />
            <h3>Code Sandbox</h3>
            <div className="tech-icons">
              <SiDotnet size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
          </a>

          <a href="https://vercel.com/templates" target="_blank" rel="noopener noreferrer" className="project-box">
            <iframe src="https://vercel.com/templates" title="Vercel" className="project-preview" />
            <h3>Vercel</h3>
            <div className="tech-icons">
              <SiDotnet size={30} />
              <FaReact size={30} />
              <SiPostgresql size={30} />
            </div>
          </a>
          */}
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