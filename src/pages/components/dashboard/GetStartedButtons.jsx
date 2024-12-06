import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Content from "../../../Tools/Content";

const key = Object.keys(Content().framework.versions).shift();

export default function GetStartedButtons() {
  return (
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
  );
}
