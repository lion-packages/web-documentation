import { Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

function GithubButton({ url, variantButton }) {
  return (
    <Button variant={variantButton} href={url} target="_blank">
      <BsGithub size={"1.5em"} />
    </Button>
  );
}

export default GithubButton;
