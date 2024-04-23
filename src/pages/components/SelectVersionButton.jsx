import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Content from "../../Tools/Content";
import { useNavigate } from "react-router-dom";

const SelectVersionButton = () => {
  const navigate = useNavigate();
  const [versions, setVersions] = useState(Object.keys(Content().framework));
  const [selectedVersion, setSelectedVersion] = useState("");

  useEffect(() => {
    setSelectedVersion(versions[0]);
  }, []);

  return (
    <InputGroup className="mb-3">
      <Form.Select
        value={selectedVersion}
        onChange={(e) => {
          setSelectedVersion(e.target.value);

          navigate(`/framework/index/${e.target.value}/install`);
        }}
      >
        {versions.map((version, index) => (
          <option key={index} value={version}>
            {version + (index === 0 ? " lts" : "")}
          </option>
        ))}
      </Form.Select>
    </InputGroup>
  );
};

export default SelectVersionButton;
