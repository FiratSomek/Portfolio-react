import { Header } from "../src/components/Header";
import { Introduce } from "../src/components/Introduce";
import { About } from "../src/components/About";
import { Skills } from "../src/components/Skills";
import { MyProjects } from "../src/components/MyProjects";
import { Contact } from "../src/components/Contact";
import { Footer } from "./components/Footer";
import { useRef, RefObject } from "react";
import ScrollButton from "./components/ScrollButton";

interface AppProps {
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

function App() {
  const aboutRef: RefObject<HTMLDivElement> = useRef(null);
  const skillsRef: RefObject<HTMLDivElement> = useRef(null);
  const projectsRef: RefObject<HTMLDivElement> = useRef(null);
  const contactRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header
        onAboutClick={() => scrollToSection(aboutRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Introduce />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <MyProjects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
