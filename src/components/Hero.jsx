import { motion } from "framer-motion";
import { styles } from "../styles.js";
import ComputersCanvas from "./canvas/Computers.jsx";
import HeroCamera from "./HeroCamera.jsx";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Afridi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100}`}>
            I am a Full Stack Developer. I build exciting Web Applications
          </p>
        </div>
      </div>

      {/* <HeroCamera> */}
        <ComputersCanvas />
      {/* </HeroCamera> */}


      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[54px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
