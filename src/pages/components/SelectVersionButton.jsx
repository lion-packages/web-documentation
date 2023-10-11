import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Button, Form, InputGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Content from "../../Tools/Content";

const SelectVersionButton = () => {
  const [versions, setVersions] = useState(Object.keys(Content().framework));
  const [selectedVersion, setSelectedVersion] = useState("");

  useEffect(() => {
    setSelectedVersion(versions[0]);
  }, []);

  return (
    <InputGroup className="">
      <Form.Select
        onChange={(e) => setSelectedVersion(e.target.value)}
      >
        {versions.map((version, index) => (
          <option key={index} value={version}>
            {version}
            {index === 0 ? " latest" : ""}
          </option>
        ))}
      </Form.Select>

      <LinkContainer
        to={`/framework/index/${selectedVersion}/install`}
      >
        <Button variant="outline-light">
          <FiArrowRight size={"1.4em"} />
        </Button>
      </LinkContainer>
    </InputGroup>
  )
}

export default SelectVersionButton
