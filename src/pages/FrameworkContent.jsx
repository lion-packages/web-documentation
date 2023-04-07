import { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import Content from "../Tools/Content";
import CodeBlock from "./components/CodeBlock";
import GithubButton from "./components/GithubButton";

function FrameworkContent() {
  const [versions, setVersions] = useState(Object.keys(Content().framework));
  const [selectedVersion, setSelectedVersion] = useState("");

  useEffect(() => {
    setSelectedVersion(versions[0]);
  }, []);

  return (
    <Container className="my-4 text-white">
      <>
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <div className="p-2">
              <h3>INSTALL</h3>
            </div>

            <div className="p-2">
              <InputGroup className="mb-3">
                <GithubButton
                  variantButton={"outline-light"}
                  url={"https://github.com/Sleon4/Lion-Framework"}
                />

                <Form.Select
                  onChange={(e) => setSelectedVersion(e.target.value)}
                >
                  {versions.map((version, index) => (
                    <option key={index}>{version}</option>
                  ))}
                </Form.Select>

                <LinkContainer
                  to={`/framework/index/${selectedVersion}/commands`}
                >
                  <Button variant="outline-warning">
                    <FiArrowRight size={"1.4em"} />
                  </Button>
                </LinkContainer>
              </InputGroup>
            </div>
          </div>

          <p>Lion-Framework supports PHP versions 8.1+</p>

          <CodeBlock
            language={"powershell"}
            content={"composer create-project lion/framework"}
          />
        </div>

        <hr />

        <div>
          <p>
            Lion-Framework can also serve as an API backend for a JavaScript
            single page application or a mobile application. For example, you
            can use Lion-Framework as an API backend for your ReactJS app or
            Kotlin app.
          </p>

          <p>
            You can use Lion-Framework to provide authentication and data
            storage/retrieval for your application, while taking advantage of
            Lion-Framework services such as emails, databases and more.
          </p>

          <p>
            To install <strong>Lion-Framework</strong> and libraries you must
            have{" "}
            <a href="https://getcomposer.org" target={"_blank"}>
              composer
            </a>{" "}
            installed, <strong>Lion-Framework</strong> integrates most of the
            available <strong>Lion</strong> libraries.
          </p>
        </div>
      </>
    </Container>
  );
}

export default FrameworkContent;
