import { useState,  useEffect } from "react";
import { motion } from "framer-motion";

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
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  // console.log(mousePosition);
  const [cursorVariant, setCursorVariant] = useState("default");
  
  useEffect (() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
    }
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 1198,
      y: mousePosition.y -10,
    }
  };

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
      {/* <motion.div
        className="fixed z-20 top-0 right-0 bg-white w-6 h-6 rounded-full"
        // variants={variants}
        animate="default"
      ></motion.div> */}
    </div>
  );
}

export default App
