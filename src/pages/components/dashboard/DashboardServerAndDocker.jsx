import { Fragment } from "react";
import { Col, Placeholder, Row } from "react-bootstrap";
import { FaDocker } from "react-icons/fa";

export default function DashboardServerAndDocker() {
  return (
    <Fragment>
      <div className="text-center mb-5 text-white text-shadow">
        <h2>Multiple Tools</h2>

        <p>
          Lion-Framework allows you to carry out an entire development with
          simple tools
        </p>
      </div>

      <Row className="g-3">
        <Col xs={12} sm={12} md={5} lg={4} xl={4} className="text-white">
          <div className="rounded bg-transparent-blur border-lion-light p-4">
            <div className="mb-3">
              <Placeholder animation="wave">
                <Placeholder xs={10} className="text-lion-orange" size="lg" />

                <Placeholder xs={8} className="text-lion-orange" size="lg" />
              </Placeholder>
            </div>

            <label className="text-shadow">
              {"Lion-Framework ready in "}
              <span className="text-lion-orange">{"0.040 ms"}</span>
            </label>

            <hr />

            <Fragment>
              <h5 className="text-shadow">{"Instant Server Start"}</h5>

              <p className="text-secondary text-shadow">
                Start your server in a matter of milliseconds through the
                terminal by running a single command.
              </p>
            </Fragment>
          </div>
        </Col>

        <Col xs={12} sm={12} md={7} lg={8} xl={8} className="text-white">
          <div className="p-4 h-100 bg-transparent-blur rounded border-lion-light">
            <div className="mb-3">
              <FaDocker size={"4em"} title="Docker" className="me-3" />

              <Placeholder animation="wave">
                <Placeholder xs={7} className="text-lion-orange" size="lg" />

                <Placeholder xs={6} className="text-lion-orange" size="lg" />
              </Placeholder>
            </div>

            <hr />

            <Fragment>
              <h5 className="text-shadow">{"Docker"}</h5>

              <p className="text-secondary text-shadow">
                Create Docker containers using Lion-Framework, where you can
                work with MySQL, PostgreSQL and other databases.
              </p>
            </Fragment>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
