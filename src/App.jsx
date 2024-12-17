import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
function App() {

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero/>
      </div>

      <div className="relative z-0">
        <About/>
        <Education/>
        <Projects/>
      </div>
    </div>
  );
}

export default App
