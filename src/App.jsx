import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsCanvas from "./components/canvas/Stars";
import Skills from "./components/Skills";


function App() {

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Education />
      <Skills />
      <Projects />
      <div className="relative z-0">
          <Contact />
          <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
}

export default App
