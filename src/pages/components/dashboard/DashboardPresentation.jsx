import { Link } from "react-router-dom";
import Content from "../../../Tools/Content";
import { FaGithub } from "react-icons/fa";

const key = Object.keys(Content().framework).shift();

export default function DashboardPresentation() {
  return (
    <div className="px-2 py-5 text-center my-5">
      <div className="col-12 col-sm-12 col-md-8 col-lg-7 mx-auto">
        <h1 className="d-block mx-auto mb-4 display-2 text-white text-shadow">
          {"Lion-Framework"}
        </h1>

        <p className="lead mb-5 fs-4 text-white text-shadow">
          Lion-Framework can also serve as an API backend for a JavaScript
          single page application or a mobile application.
        </p>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
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
      </div>
    </div>
  );
}
