import { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import CodeBlock from "./components/CodeBlock";
import CardClass from "./components/CardClass";
import SelectVersionWithGithub from "./components/SelectVersionWithGithub";

import Content from "../Tools/Content";
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Library({ library, url_github, command, changelog, title }) {
  const [info, setInfo] = useState(Content().libraries.lion[library].class);
  const [versionList, setVersionList] = useState(Object.keys(info));
  const [versions, setVersions] = useState(versionList);
  const [option, setOption] = useState(versionList[0]);
  const [methods, setmethods] = useState(info[option]);
  const [mdText, setMdText] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/" + title + "/main/CHANGELOG.md")
      .then((content) => content.text())
      .then((md) => setMdText(md));
  }, []);

  return (
    <Container fluid>
      <div className="my-3 text-white">
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <div className="p-2">
              <LinkContainer to={"/libraries/content"}>
                <Button variant="dark-gradient" className="mb-3">
                  <FiArrowLeft size={22} />
                </Button>
              </LinkContainer>

              <h3>INSTALL</h3>
            </div>

            <SelectVersionWithGithub
              setOption={setOption}
              setmethods={setmethods}
              versions={versions}
              info={info}
              url_github={url_github}
              addButtons={
                changelog === true && (
                  <Button
                    type="button"
                    variant="outline-light"
                    onClick={() => setShowModal(true)}
                  >
                    <i className="bi bi-file-text-fill"></i>
                  </Button>
                )
              }
            />
          </div>

          <CodeBlock language={"bash"} content={command} />
        </div>

        <hr />

        <CardClass methods={methods} option={option} />

        <Modal show={showModal} size="lg" scrollable onHide={() => setShowModal(false)}>
          <Modal.Header closeButton className="bg-dark-logo">
            <Modal.Title className="text-light">Changelog</Modal.Title>
          </Modal.Header>

          <Modal.Body className="bg-dark-logo text-light">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdText}</ReactMarkdown>
          </Modal.Body>

          <Modal.Footer className="bg-dark-logo">
            <Button variant="dark" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
}

export default Library;
