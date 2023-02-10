import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import Content from "../../../Tools/Content";
import CardLink from "../../components/CardLink";
import CodeBlock from "../../components/CodeBlock";
import GithubButton from "../../components/GithubButton";

function LionSpreadsheet() {
  const [info, setInfo] = useState(Content.libraries.lion.spreadsheet.class);
  const [versionList, setVersionList] = useState(Object.keys(info));
  const [versions, setVersions] = useState(versionList);
  const [option, setOption] = useState(versionList[0]);
  const [methods, setmethods] = useState(info[option]);

  const handleChange = (e) => {
    setOption(e.target.value);
    setmethods(info[e.target.value]);
  };

  return (
    <Container fluid>
      <div className="my-3 text-white">
        <div className="d-flex justify-content-between">
          <div className="p-2">
            <LinkContainer to={"/libraries/content"}>
              <Button variant="outline-light" className="rounded-pill mb-3">
                <FiArrowLeft size={22} />
              </Button>
            </LinkContainer>

            <h3>INSTALL</h3>
          </div>

          <div className="p-2">
            <InputGroup className="mb-3">
              <GithubButton
                variantButton={"outline-light"}
                url={"https://github.com/Sleon4/Lion-Spreadsheet"}
              />

              <Form.Select onChange={handleChange}>
                {versions.map((version, index) => (
                  <option key={index}>{version}</option>
                ))}
              </Form.Select>
            </InputGroup>
          </div>
        </div>

        <CodeBlock
          language={"powershell"}
          content={"composer require lion/spreadsheet"}
        />
      </div>

      <hr className="text-white" />

      <Row>
        {Object.entries(methods).map(([key, classname]) => (
          <Col xs={12} sm={12} md={6} lg={4} xl={3} key={key} className="mb-3">
            <CardLink
              uri={classname.url.replace(/item_version/gm, option)}
              title={classname.title}
              description={classname.description}
              textColor={{
                title: "text-warning",
                description: "text-white",
              }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LionSpreadsheet;
