import { AiFillGithub } from "react-icons/ai";
import { RiMailSendFill } from "react-icons/ri";

function FooterNavigation() {
  return (
    <footer className="py-3">
      <ul
        className="nav justify-content-center border-bottom border-secondary pb-3 mb-3"
        style={{ "--bs-border-opacity": ".5" }}
      >
        <li className="nav-item">
          <a
            className="nav-link px-2 text-body-secondary"
            href="mailto:sergioleon4004@hotmail.com"
            target={"_blank"}
          >
            <RiMailSendFill size={"1.8em"} color={"#FFFFFF"} />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link px-2 text-body-secondary"
            href="https://github.com/Sleon4"
            target={"_blank"}
          >
            <AiFillGithub size={"1.8em"} color={"#FFFFFF"} />
          </a>
        </li>
      </ul>

      <p className="text-center text-body-secondary text-white">
        Released under the{" "}
        <a
          href="https://opensource.org/license/mit/"
          className="text-secondary text-decoration-none"
          target="_blank"
        >
          MIT License
        </a>
        .
      </p>

      <p className="text-center text-body-secondary text-white">
        Copyright © 2022-2023 Sergio León
      </p>
    </footer>
  );
}

export default FooterNavigation;
