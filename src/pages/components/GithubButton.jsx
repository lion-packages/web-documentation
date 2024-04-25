import { Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

function GithubButton({ url, variantButton, className = "", children }) {
  return (
    <Button
      variant={variantButton}
      href={url}
      target="_blank"
      className={className}
    >
      <BsGithub size={"1.5em"} />

      {children}
    </Button>
  );
}

export default GithubButton;
