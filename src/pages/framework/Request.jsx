import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

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
          langueage={'php'}
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
          langueage={'php'}
          content={
            "<?php\n\n" +
            "echo(\n" +
            "\trequest->users_name . ' ' . request->users_last_name\n" +
            ");"
          }
        />

        <p>equivalent to</p>

        <CodeBlock
          langueage={'php'}
          content={
            "<?php\n\n" +
            "echo(\n" +
            `\t$_POST['users_name'] . ' ' . $_POST['users_last_name']\n` +
            ");"
          }
        />
      </div>
    </>
  );
}

export default Request;
