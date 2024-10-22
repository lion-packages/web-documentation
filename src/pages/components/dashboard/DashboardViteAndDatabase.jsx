import { Fragment } from "react";
import { Col, Placeholder, Row } from "react-bootstrap";
import { FaDatabase, FaDocker } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import CodeBlock from "../CodeBlock";

export default function DashboardViteAndDatabase() {
  return (
    <div className="mb-4">
      <div className="text-center mb-5 text-white text-shadow">
        <h2>Structure compatible with everything</h2>
      </div>

      <Row className="g-3">
        <Col xs={12} sm={12} md={5} lg={4} xl={4} className="text-white">
          <div className="rounded bg-transparent-blur border-lion-light p-4">
            <div className="mb-3">
              <Placeholder animation="wave">
                <Placeholder xs={10} className="text-lion-orange" size="lg" />
              </Placeholder>
            </div>

            <SiVite size={"4em"} title="Vite" className="float-start me-3" />

            <hr />

            <Fragment>
              <h5 className="text-shadow">{"Vite"}</h5>

              <p className="text-secondary text-shadow">
                The Build Tool for the Web. Vite is a blazing fast frontend
                build tool powering the next generation of web applications.
              </p>

              <CodeBlock language="bash" content="php npm init" />
            </Fragment>
          </div>
        </Col>

        <Col xs={12} sm={12} md={7} lg={8} xl={8} className="text-white">
          <div className="p-4 h-100 bg-transparent-blur rounded border-lion-light">
            <div className="mb-3">
              <FaDatabase
                size={"4em"}
                title="Database"
                className="float-end ms-2"
              />

              <Placeholder animation="wave">
                <Placeholder xs={10} className="text-lion-orange" size="lg" />
              </Placeholder>
            </div>

            <hr />

            <Fragment>
              <h5 className="text-shadow">{"Databases"}</h5>

              <p className="text-secondary text-shadow">
                Compatible with any database engine, if you use Docker compose
                you can implement any database service to your project.
              </p>
            </Fragment>
          </div>
        </Col>
      </Row>
    </div>
  );
}
