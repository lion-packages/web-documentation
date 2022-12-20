import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Content from "../../../Tools/Content";
import CardLink from "../../components/CardLink";
import CodeBlock from "../../components/CodeBlock";
import GithubButton from "../../components/GithubButton";

function LionRoute() {
  const [info, setInfo] = useState(Content.libraries.lion.route.class);
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
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <div className="p-2">
              <h3>INSTALL</h3>
            </div>

            <div className="p-2">
              <InputGroup className="mb-3">
                <GithubButton
                  variantButton={"outline-light"}
                  url={"https://github.com/Sleon4/Lion-Route"}
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
            content={"composer require lion/route"}
          />
        </div>

        <hr />

        <Row>
          <Col xs={12} sm={12} md={12} lg={5} xl={7} className="overflow-auto">
            <Row>
              {Object.entries(methods).map(([key, classname]) => (
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={12}
                  xl={6}
                  key={key}
                  className="mb-3"
                >
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
          </Col>

          <Col xs={12} sm={12} md={12} lg={7} xl={5}>
            <div className="mb-3">
              <h4 className="pb-2 text-warning">HTACCESS</h4>

              <CodeBlock
                language="apache"
                content={
                  "<IfModule mod_rewrite.c>\n" +
                  "\t<IfModule mod_negotiation.c>\n" +
                  "\t\tOptions -MultiViews -Indexes\n" +
                  "\t</IfModule>\n\n" +
                  "\tRewriteEngine On\n\n" +
                  "\t# Handle Authorization Header\n" +
                  "\tRewriteCond %{HTTP:Authorization} .\n" +
                  "\tRewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]\n\n" +
                  "\t# Redirect Trailing Slashes If Not A Folder...\n" +
                  "\tRewriteCond %{REQUEST_FILENAME} !-d\n" +
                  "\tRewriteCond %{REQUEST_URI} (.+)/$\n" +
                  "\tRewriteRule ^ %1 [L,R=301]\n\n" +
                  "\t# Send Requests To Front Controller...\n" +
                  "\tRewriteCond %{REQUEST_FILENAME} !-d\n" +
                  "\tRewriteCond %{REQUEST_FILENAME} !-f\n" +
                  "\tRewriteRule ^ index.php [L]\n" +
                  "</IfModule>"
                }
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default LionRoute;
