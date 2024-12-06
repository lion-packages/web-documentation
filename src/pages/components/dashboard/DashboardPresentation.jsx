import { Link } from "react-router-dom";
import Content from "../../../Tools/Content";
import { FaGithub } from "react-icons/fa";
import { Col } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const key = Object.keys(Content().framework.versions).shift();

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

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link
            to={`/docs/framework/${key}/getting-started/about-as`}
            className="btn btn-orange-custom btn-lg px-4 gap-3"
          >
            Get started
          </Link>

          <a
            href="https://github.com/lion-packages/framework"
            className="btn btn-white-custom btn-lg px-4"
            target="_blank"
          >
            <FaGithub className="me-2" size={"1.3em"} />
            Github
          </a>
        </div>

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
