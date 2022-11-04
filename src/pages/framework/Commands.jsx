import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import ListCommands from "../components/ListCommands";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Commands() {
  return (
    <>
      <div className="mb-3">
        <ListCommands />
      </div>

      <hr />

      <div className="mb-3">
        <h4 className="pb-2">Optional Parameters</h4>

        <CodeBlock
          language={"php"}
          content={
            "php lion serve --port 8001\n" +
            'php lion key:rsa --path storage/other-secret-key/\n' +
            "php lion db:capsule --path forder_path/\n" +
            "php lion db:all-capsules --path forder_path/\n" +
            "php lion db:seed name_seed --run true|false --iterate 1+\n" +
            "php lion db:factory --path forder_path/\n"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h4 className="pb-2">Route list</h4>

        <p>
          To view the available routes, start the local server first, run the{" "}
          <Badge bg="secondary">php lion serve</Badge> command, and then view
          the routes.
        </p>

        <CodeBlock language={"powershell"} content={"php lion route:list"} />

        <Alert variant={"warning"}>
          Note: The routes are loaded with the server route{" "}
          <Badge bg="warning">SERVER_URL</Badge> set in{" "}
          <Badge bg="warning">.env</Badge>, modify this route to avoid errors in
          the execution of the process, in the file{" "}
          <Badge bg="warning">public/index.php</Badge> there is a public route
          which allows get the available routes from the terminal, comment this
          line once your web app is deployed.
        </Alert>
      </div>

      <hr />

      <div className="mb-3">
        <h4 className="pb-2">Add Commands</h4>

        <p>
          The commands must be added in an array from{" "}
          <Badge bg="secondary">routes/console.php</Badge>
        </p>

        <CodeBlock
          language={"php"}
          content={
            "return [\n" +
            "\tMyNamespace\\MyClass::class,\n" +
            "];"
          }
        />
      </div>

      <LinkContainer to="/framework/getting-started">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>

      <LinkContainer to="/framework/headers">
        <Button variant="light" className="float-end mb-5">
          Next <FiArrowRight />
        </Button>
      </LinkContainer>
    </>
  );
}

export default Commands;
