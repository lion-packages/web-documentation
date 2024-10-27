import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Content from "../../Tools/Content";
import CodeBlock from "./CodeBlock";

function ListCommandsNew() {
  const { item_version } = useParams();

  const linkFormat = (uri) => {
    if (typeof uri === "string") {
      return uri.trim().replace(/ /gm, "-").replace(/:/gm, "-").trim();
    }

    const size = uri.length - 1;

    return uri[size].trim().replace(/ /gm, "-").replace(/:/gm, "-").trim();
  };

  const scroolPage = () => {
    const url = window.location.href;
    const hashIndex = url.indexOf("#");

    if (hashIndex !== -1) {
      const elementId = url.substring(hashIndex + 1);
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const CommandTitle = ({ title }) => {
    if (typeof title === "string") {
      return <span className="h5">{title}</span>;
    }

    return <span className="h5">{title[0]}</span>;
  };

  const GetCommands = ({ commands }) => {
    if (typeof commands === "string") {
      return <CodeBlock language={"bash"} content={commands} />;
    }

    return commands.map((command, index) => (
      <CodeBlock key={index} language={"bash"} content={command} />
    ));
  };

  useEffect(() => {
    scroolPage();
  }, []);

  return Content().framework.versions[item_version].commands.map((item, index) => (
    <div className="mb-3" key={index}>
      <h5 className="text-info">{item.group}</h5>

      <hr className="border-info" />

      <Row>
        {item.childs.map((child, childIndex) => (
          <Col xs={12} sm={11} md={6} className="mb-3" key={childIndex}>
            <div
              className="p-3 rounded-2"
              style={{ backgroundColor: "#232323" }}
            >
              <div>
                <a
                  href={"#" + linkFormat(child.name)}
                  id={linkFormat(child.name)}
                  className="text-warning text-decoration-none"
                >
                  <i className="bi bi-terminal-fill me-3 h4"></i>

                  <CommandTitle title={child.name} />
                </a>

                <hr className="border-secondary" />
              </div>

              <p>{child.desc}</p>

              <GetCommands commands={child.name} />

              {child.args.length > 0 && (
                <Fragment>
                  <label className="mb-3">
                    <label className="text-info">Arguments</label> /{" "}
                    <label className="text-warning">Options</label>
                  </label>

                  {child.args.map((arg, argIndex) => (
                    <Row key={argIndex}>
                      <Col xs={12} sm={12} md={5} lg={4} className="mb-3">
                        <div className="p-1 text-center">
                          <label>
                            <span
                              className={arg.arg ? "text-info" : "text-warning"}
                            >
                              {arg.name}
                            </span>{" "}
                            <span className={"text-danger"}>
                              [{!arg.optional ? "REQUIRED" : "OPTIONAL"}]
                            </span>
                          </label>
                        </div>
                      </Col>

                      <Col xs={12} sm={12} md={7} lg={8} className="mb-3">
                        <div className="p-1 text-center">
                          <label>{arg.desc}</label>
                        </div>
                      </Col>
                    </Row>
                  ))}
                </Fragment>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  ));
}

export default ListCommandsNew;
