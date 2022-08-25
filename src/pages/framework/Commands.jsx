import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

function Commands() {
  return (
    <>
      <div className="mb-3">
        <h4 className="pb-2">Commands</h4>

        <p>
          More information about the use of internal commands{" "}
          <Link to={"/libraries/command"}>Lion-Command</Link>.
        </p>

        <CodeBlock
          language={"powershell"}
          content={
            "php lion serve\n" +
            "php lion new:controller name_controller\n" +
            "php lion new:model name_model\n" +
            "php lion new:middleware name_middleware\n" +
            "php lion new:command name_command\n" +
            "php lion new:capsule name_capsule\n" +
            "php lion new:test name_test\n" +
            "php lion new:rule name_rule\n" +
            "php lion key:rsa\n" +
            "php lion test\n" +
            "php lion token:jwt\n" +
            "php lion route:list\n"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h4 className="pb-2">Optional Parameters</h4>

        <CodeBlock
          language={"powershell"}
          content={
            "php lion serve --port 8001\n" +
            'php lion key:rsa --path "storage/other-secret-key/"\n'
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
          Note: The routes are loaded with the server route <Badge bg="warning">SERVER_URL</Badge> set in{" "}
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
          <Badge bg="secondary">routes/console.php</Badge>.
        </p>

        <CodeBlock
          language={"php"}
          content={
            "return [\n" +
            "\tApp\\Console\\RSACommand::class,\n" +
            "\tApp\\Console\\GenerateJWTCommand::class,\n" +
            "\tApp\\Console\\RouteListCommand::class\n" +
            "];"
          }
        />
      </div>
    </>
  );
}

export default Commands;
