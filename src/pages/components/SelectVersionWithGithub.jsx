import { Form, InputGroup } from "react-bootstrap";
import GithubButton from "./GithubButton";

function SelectVersionWithGithub({
  url_github,
  setOption,
  setmethods,
  versions,
  info,
}) {
  return (
    <div className="p-2">
      <InputGroup className="mb-3">
        <GithubButton variantButton={"outline-light"} url={url_github} />

        <Form.Select
          onChange={(e) => {
            setOption(e.target.value);
            setmethods(info[e.target.value]);
          }}
        >
          {versions.map((version, index) => (
            <option key={index} value={version}>
              {version}
              {index === 0 ? " latest" : ""}
            </option>
          ))}
        </Form.Select>
      </InputGroup>
    </div>
  );
}

export default SelectVersionWithGithub;
