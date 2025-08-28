import { useRef, useState, useEffect } from "react";
import "./App.css";
import { FaArrowDown, FaArrowUp, FaReact, FaNodeJs, FaFire, FaDatabase, FaPython } from "react-icons/fa";
import { SiDotnet, SiSharp, SiPostgresql, SiJavascript } from "react-icons/si";

function App() {
  const sectionsRef = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = sectionsRef.length;

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < totalSections) {
      sectionsRef[index].current?.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);
    }
  };

  useEffect(() => {
    let isThrottled = false; 

    const handleWheel = (e: WheelEvent) => {
      if (isThrottled) return;
      isThrottled = true;

      if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      }

      setTimeout(() => {
        isThrottled = false;
      }, 1000);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero" ref={sectionsRef[0]}>
        <h1 className="name">Jerome Admana</h1>
        <p className="title">Fullstack Developer</p>
      </section>

      {/* Projects Section */}
      <section className="black-section" ref={sectionsRef[1]}>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-row">
          {/* Google */}
          <div className="project-box">
            <iframe src="https://www.google.com" title="Google Preview"></iframe>
            <div className="project-header">Google</div>
            <div className="project-tech">
              <div className="tech"><FaNodeJs size={20} /><p>Node.js</p></div>
              <div className="tech"><FaReact size={20} /><p>React</p></div>
              <div className="tech"><SiPostgresql size={20} /><p>Postgres</p></div>
            </div>
          </div>

          {/* Yahoo */}
          <div className="project-box">
            <iframe src="https://www.yahoo.com" title="Yahoo Preview"></iframe>
            <div className="project-header">Yahoo</div>
            <div className="project-tech">
              <div className="tech"><SiDotnet size={20} /><p>.NET</p></div>
              <div className="tech"><FaReact size={20} /><p>React</p></div>
              <div className="tech"><SiPostgresql size={20} /><p>Postgres</p></div>
            </div>
          </div>

          {/* Office */}
          <div className="project-box">
            <iframe src="https://www.office.com" title="Office Preview"></iframe>
            <div className="project-header">Office</div>
            <div className="project-tech">
              <div className="tech"><SiDotnet size={20} /><p>.NET</p></div>
              <div className="tech"><FaReact size={20} /><p>React</p></div>
              <div className="tech"><SiPostgresql size={20} /><p>Postgres</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack" ref={sectionsRef[2]}>
        <h2>Tech Stack</h2>
        <div className="grid">
          <div className="tech"><SiDotnet size={50} /><p>.NET Core</p></div>
          <div className="tech"><SiSharp size={50} /><p>C#</p></div>
          <div className="tech"><FaNodeJs size={50} /><p>Node.js</p></div>
          <div className="tech"><FaReact size={50} /><p>React</p></div>
          <div className="tech"><SiPostgresql size={50} /><p>Postgres</p></div>
          <div className="tech"><FaDatabase size={50} /><p>MSSQL</p></div>
          <div className="tech"><FaFire size={50} /><p>Firebase</p></div>
          <div className="tech"><FaPython size={50} /><p>Python</p></div>
          <div className="tech"><SiJavascript size={50} /><p>JavaScript</p></div>
        </div>
      </section>

      {/* Navigation */}
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