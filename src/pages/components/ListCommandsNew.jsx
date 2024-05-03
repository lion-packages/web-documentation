import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, ListGroup, Row, Table } from "react-bootstrap";
import Content from "../../Tools/Content";
import CodeBlock from "./CodeBlock";

function ListCommandsNew() {
  const navigate = useNavigate();
  const { item_version } = useParams();

  const linkFormat = (uri) => {
    return uri.trim().replace(/ /gm, "-").replace(/:/gm, "-").trim();
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

  useEffect(() => {
    scroolPage();
  }, []);

  return Content().framework[item_version].commands.map((item, index) => (
    <div className="mb-3" key={index}>
      <h5 className="text-info">{item.group}</h5>

      <hr className="border-info" />

      <Row>
        {item.childs.map((child, childIndex) => (
          <Col
            xs={12}
            sm={11}
            md={10}
            lg={8}
            xl={8}
            xxl={9}
            className="mb-3 mx-auto"
            key={childIndex}
          >
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
                  <span className="h5">{child.name}</span>
                </a>

                <hr className="border-secondary" />
              </div>

              <p>{child.desc}</p>

              <CodeBlock language={"bash"} content={"php lion " + child.name} />

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
