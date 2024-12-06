import { Col } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import GetStartedButtons from "./GetStartedButtons";

export default function DashboardPresentation() {
  return (
    <div className="px-2 py-5 text-center my-5">
      <Col xs={12} sm={12} md={8} lg={7} className="mx-auto py-5">
        <h1 className="d-block mx-auto mb-4 display-2 text-white text-shadow">
          {"Lion-Framework"}
        </h1>

        <p className="lead mb-5 fs-4 text-white text-shadow">
          Lion-Framework can also serve as an API backend for a JavaScript
          single page application or a mobile application.
        </p>

        <GetStartedButtons />

        <motion.a
          whileHover={{ scale: 1.2, translateY: 10 }}
          whileTap={{ scale: 0.8 }}
          href="#initial-section"
          className="btn btn-link"
        >
          <IoIosArrowDown
            size={"3em"}
            title="Scroll down"
            className="text-white"
          />
        </motion.a>
      </Col>
    </div>
  );
}
