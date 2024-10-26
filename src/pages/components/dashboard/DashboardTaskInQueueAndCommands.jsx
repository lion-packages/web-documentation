import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CodeBlock from "../CodeBlock";
import { FaTasks, FaTerminal } from "react-icons/fa";

export default function DashboardTaskInQueueAndCommands() {
  return (
    <div className="mb-5">
      <Row className="g-3">
        <Col xs={12} sm={12} md={5} lg={8} xl={8} className="text-white">
          <div className="rounded bg-transparent-blur border-lion-light p-4">
            <FaTerminal
              size={"4em"}
              title="Terminal"
              className="float-end ms-3"
            />

            <hr />

            <Fragment>
              <h5 className="text-shadow">{"Commands"}</h5>

              <p className="text-secondary text-shadow">
                Create your own commands with Lion-Framework, perform tasks
                using custom commands.
              </p>

              <CodeBlock
                language="bash"
                content="php lion new:command MyCustomCommand"
              />
            </Fragment>
          </div>
        </Col>

        <Col xs={12} sm={12} md={7} lg={4} xl={4} className="text-white">
          <div className="p-4 h-100 bg-transparent-blur rounded border-lion-light">
            <FaTasks size={"3.8em"} title="Tasks" className="float-start me-3" />

            <hr />

            <Fragment>
              <h5 className="text-shadow">{"Task in Queue"}</h5>

              <p className="text-secondary text-shadow">
                Add and run tasks in a queue with Redis. This creates a
                background process for all system processes that need to be run
                with PHP.
              </p>
            </Fragment>
          </div>
        </Col>
      </Row>
    </div>
  );
}
