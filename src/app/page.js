import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Certifications from "./sections/Certifications";

export default function Home() {
  return (
    <main className="relative">
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* CERTIFICATIONS */}
      <section id="certif">
        <Certifications />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
