import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero/>
      </div>

      <div className="relative z-0">
        <About/>
      </div>
    </div>
  );
}

export default App
