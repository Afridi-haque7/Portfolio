import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import BallCanvas from "./canvas/BallCanvas";



const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
