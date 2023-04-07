import { AiFillGithub } from "react-icons/ai";
import { RiMailSendFill } from "react-icons/ri";

function FooterNavigation() {
  return (
    <footer
      className="footer mt-auto py-3 bg-dark-logo border-top border-secondary"
      style={{ "--bs-border-opacity": ".5" }}
    >
      <p
        className="text-center text-body-secondary text-white"
        style={{ fontSize: 13.5 }}
      >
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

      <p
        className="text-center text-body-secondary text-white"
        style={{ fontSize: 14.5 }}
      >
        Copyright © 2022-2023 Sergio León
      </p>
    </footer>
  );
}

export default FooterNavigation;
