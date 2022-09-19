import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Request() {
  return (
    <>
      <div className="mb-3">
        <h4>Request</h4>

        <p>
          The <Badge bg={"secondary"}>capture</Badge> function of the{" "}
          <Badge bg={"secondary"}>Request</Badge> class is used in order to
          obtain the data sent in an HTTP request, the system internally
          initializes a <Badge bg={"secondary"}>request</Badge> constant to
          obtain the data.
        </p>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "define('request', LionRequest\\Request::getInstance()->capture()); // (object)"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>Example</h5>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "echo(\n" +
            "\trequest->users_name . ' ' . request->{'users_last-name'}\n" +
            ");"
          }
        />

        <p>equivalent to</p>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "echo(\n" +
            `\t$_POST['users_name'] . ' ' . $_POST['users_last-name']\n` +
            ");"
          }
        />
      </div>

      <LinkContainer to="/framework/headers">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>

      <LinkContainer to="/framework/response">
        <Button variant="light" className="float-end mb-5">
          Next <FiArrowRight />
        </Button>
      </LinkContainer>
    </>
  );
}

export default Request;
