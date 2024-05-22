import { Fragment } from "react";
import { Alert } from "react-bootstrap";

export default function Notes() {
  return (
    <Fragment>
      <Alert variant={"info"}>
        <strong>Note: </strong>Currently the framework is supported for
        development in Linux environments.
      </Alert>

      <Alert variant={"info"}>
        <strong>Note: </strong>It is recommended to use Docker to run this
        project.
      </Alert>
    </Fragment>
  );
}
