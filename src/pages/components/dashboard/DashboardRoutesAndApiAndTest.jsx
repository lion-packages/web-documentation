import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { RiTestTubeFill } from "react-icons/ri";
import CodeBlock from "../CodeBlock";
import { MdHttp } from "react-icons/md";

export default function DashboardRoutesAndApiAndTest() {
  return (
    <div className="mb-5">
      <Row className="g-3">
        <Col xs={12} sm={12} md={5} lg={4} xl={3} className="text-white">
          <div className="rounded bg-transparent-blur border-lion-light p-4 h-100">
            <MdHttp size={"4em"} title="HTTP" className="float-start me-2" />

            <hr />

            <Fragment>
              <h5 className="text-shadow">{"Routes"}</h5>

              <p className="text-secondary text-shadow">
                Create all the routes you want for your web application, protect
                your routes through Middleware, export collections to POSTMAN or
                call your API from (ReactJS - VueJS - Kotlin).
              </p>
            </Fragment>
          </div>
        </Col>

        <Col xs={12} sm={12} md={5} lg={4} xl={3} className="text-white">
          <div className="rounded bg-transparent-blur border-lion-light p-4 h-100">
            <hr />

            <Fragment>
              <h5 className="text-shadow">{"Api"}</h5>

              <p className="text-secondary text-shadow">
                Build complete and robust applications in PHP using
                Lion-Framework and ReactJS. Or, let Lion-Framework work as a
                robust back-end API for your ViteJS app, mobile app, or other
                interface.
              </p>
            </Fragment>
          </div>
        </Col>

        <Col xs={12} sm={12} md={7} lg={4} xl={6} className="text-white">
          <div className="p-4 h-100 bg-transparent-blur rounded border-lion-light">
            <RiTestTubeFill size={"4em"} title="Test" className="float-end" />

            <hr />

            <Fragment>
              <h5 className="text-shadow">{"Testing"}</h5>

              <p className="text-secondary text-shadow">
                Testing Lion-Framework integrates unit tests internally with
                PHPUnit, feel free to create the necessary tests to check the
                proper functioning of your web app.
              </p>

              <CodeBlock language="bash" content={"php lion test --report"} />
            </Fragment>
          </div>
        </Col>
      </Row>
    </div>
  );
}
