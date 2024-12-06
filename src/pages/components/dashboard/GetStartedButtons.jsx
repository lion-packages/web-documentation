import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Content from "../../../Tools/Content";
import { motion } from "framer-motion";

const key = Object.keys(Content().framework.versions).shift();

export default function GetStartedButtons() {
  const MotionLink = motion(Link);

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center py-5">
      <MotionLink
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        to={`/docs/framework/${key}/getting-started/about-as`}
        className="btn btn-orange-custom btn-lg px-4 gap-3"
      >
        Get started
      </MotionLink>

      <motion.a
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        href="https://github.com/lion-packages/framework"
        className="btn btn-white-custom btn-lg px-4"
        target="_blank"
      >
        <FaGithub className="me-2" size={"1.3em"} />
        Github
      </motion.a>
    </div>
  );
}
