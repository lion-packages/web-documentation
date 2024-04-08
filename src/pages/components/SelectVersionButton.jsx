import { Form } from "react-bootstrap";
import { useModules } from "../../hooks/Context/ModulesContext";
import { useState } from "react";

const SelectVersionButton = () => {
  const {
    version,
    type_version,
    framework_versions,
    setActualVersion,
    setSelectVersion,
  } = useModules();
  const [listSelect, setListSelect] = useState(version);

  return (
    <Form.Select
      value={listSelect}
      onChange={(e) => {
        setListSelect(e.target.value);

        setSelectVersion(e.target.value);

        setActualVersion(type_version);
      }}
    >
      {("framework" === type_version ? framework_versions : []).map(
        (version, index) => (
          <option key={index} value={version}>
            {version}
          </option>
        )
      )}
    </Form.Select>
  );
};

export default SelectVersionButton;
