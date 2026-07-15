import { About } from './components/About.jsx';
import { CommandPalette } from './components/CommandPalette.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { Hero } from './components/Hero.jsx';
import { Nav } from './components/Nav.jsx';
import { ProjectsSection } from './components/ProjectsSection.jsx';
import { Publications } from './components/Publications.jsx';
import { SkillsTerminal } from './components/SkillsTerminal.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <CommandPalette />
      <main>
        <Hero />
        <About />
        <ProjectsSection />
        <Publications />
        <SkillsTerminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
