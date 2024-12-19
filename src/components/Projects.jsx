import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../utils/motion";
import { styles } from "../styles";
import { leftArrow, rightArrow, arrowUp } from "../assets/index.js";

import CanvasLoader from "./Loader.jsx";
import DemoComputer from "./canvas/DemoComputer.jsx";

const projectCount = projects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const currentProject = projects[selectedProjectIndex];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work Experience</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <motion.div
          // variants={slideIn("left", "tween", 0.2, 1)}
          className="flex flex-col gap-5  
        relative sm:p-10 py-10 px-5 shadow-md
         bg-black-400 shadow-violet-600 rounded-2xl"
        >
          {/* <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div> */}

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className="tech-logo w-[30px] h-[30px] hover:scale-125 transition-all duration-300 ease-in-out"
                >
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 
              cursor-pointer text-white-600 shadow-sm
               px-2 py-1 rounded-md 
               bg-opacity-60 hover:scale-110 hover:shadow-violet-400 transition-all duration-200 ease-in-out"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-sm text-zinc-300">Check Live Site</p>
              <img src={arrowUp} alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn border border-slate-600 p-3 rounded-full hover:bg-zinc-700 transition-all duration-200 ease-in-out"
              onClick={() => handleNavigation("previous")}
            >
              <img src={leftArrow} alt="left arrow" className="w-4 h-4" />
            </button>

            <button
              className="arrow-btn border border-slate-500 p-3 rounded-full hover:bg-zinc-700 transition-all duration-200 ease-in-out"
              onClick={() => handleNavigation("next")}
            >
              <img src={rightArrow} alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          // variants={slideIn("right", "tween", 0.2, 1)}
          className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full"
        >
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "work");
