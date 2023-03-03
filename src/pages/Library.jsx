import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import CodeBlock from "./components/CodeBlock";
import Content from "../Tools/Content";
import CardClass from "./components/CardClass";
import SelectVersionWithGithub from "./components/SelectVersionWithGithub";

function Library({ library, url_github, command }) {
  const [info, setInfo] = useState(Content.libraries.lion[library].class);
  const [versionList, setVersionList] = useState(Object.keys(info));
  const [versions, setVersions] = useState(versionList);
  const [option, setOption] = useState(versionList[0]);
  const [methods, setmethods] = useState(info[option]);

  return (
    <Container fluid>
      <div className="my-3 text-white">
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <div className="p-2">
              <LinkContainer to={"/libraries/content"}>
                <Button variant="outline-light" className="rounded-pill mb-3">
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
            />
          </div>

          <CodeBlock
            language={"powershell"}
            content={command}
          />
        </div>

        <hr />

        <CardClass methods={methods} option={option} />
      </div>
    </Container>
  );
}

export default Library;
