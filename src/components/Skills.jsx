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

      <div className="mt-20 flex flex-wrap gap-10">
        {technologies.map((technology) => (
            <div key={technology.name} className="w-28 h-28">
                <BallCanvas icon={technology.icon} />
            </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "work");
