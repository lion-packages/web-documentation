import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Content from "../../Tools/Content";
import { useNavigate, useParams } from "react-router-dom";

export default function SelectVersion() {
  const { item_version, library = null, tab, code } = useParams();
  const navigate = useNavigate();

  const [versions, setVersions] = useState(Object.keys(Content().framework));
  const [selectedVersion, setSelectedVersion] = useState(item_version);

  useEffect(() => {
    setSelectedVersion(item_version);
  }, [item_version]);

  return (
    <InputGroup className="mb-3">
      <Form.Select
        value={selectedVersion}
        onChange={(e) => {
          setSelectedVersion(e.target.value);

          if (null === library) {
            navigate(`/docs/framework/${e.target.value}/${tab}/${code}`);
          } else {
            navigate(
              `/docs/library/${library}/${e.target.value}/${tab}/${code}`
            );
          }
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
}
