import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Button from "react-bootstrap/Button";

function Middleware() {
  return (
    <>
      <div className="mb-3">
        <h4>MIDDLEWARE</h4>

        <p>
          You can create middleware from the command line{" "}
          <Badge bg={"secondary"}>
            php lion new:middleware middleware_name
          </Badge>
          , these are generated in the route{" "}
          <Badge bg={"secondary"}>app/Http/Middleware/</Badge>. more information
          about middleware at <Link to={"/libraries/route"}>Lion-Route</Link>.
        </p>

        <CodeBlock
          language={"powershell"}
          content={"php lion new:middleware JWT/AuthorizationMiddleware"}
        />

        <CodeBlock
          language={"php"}
          content={
            "<?php\n\n" +
            "namespace App\\Http\\Middleware\\JWT;\n\n" +
            "class AuthorizationMiddleware {\n\n" +
            "\tpublic function __contruct() {\n\n" +
            "\t}\n\n" +
            "}"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h4>ADD FUNCTIONS</h4>

        <p>We can add the necessary functions in each middleware.</p>

        <CodeBlock
          language={"php"}
          content={
            "<?php\n\n" +
            "namespace App\\Http\\Middleware\\JWT;\n\n" +
            "class AuthorizationMiddleware {\n\n" +
            "\tpublic function __contruct() {\n\n" +
            "\t}\n\n" +
            "\tpublic function exist(): void {\n" +
            "\t\t$headers = apache_request_headers();\n\n" +
            "\t\tif (!isset($headers['Authorization'])) {\n" +
            "\t\t\tfinish(response->error('The JWT does not exist'));\n" +
            "\t\t}\n" +
            "\t}\n\n" +
            "\tpublic function authorize(): void {\n" +
            "\t\t$headers = apache_request_headers();\n\n" +
            "\t\tif (preg_match('/Bearers(S+)/', $headers['Authorization'], $matches)) {\n" +
            "\t\t\t$jwt = JWT::decode($matches[1]);\n\n" +
            "\t\t\tif ($jwt->status === 'error') {\n" +
            "\t\t\t\tfinish(response->error($jwt->message));\n" +
            "\t\t\t}\n" +
            "\t\t} else {\n" +
            "\t\t\tfinish(response->error('Invalid JWT'));\n" +
            "\t\t}\n" +
            "\t}\n\n" +
            "\tpublic function notAuthorize(): void {\n" +
            "\t\t$headers = apache_request_headers();\n\n" +
            "\t\tif (isset($headers['Authorization'])) {\n" +
            "\t\t\tfinish(response->error('User in session, You must close the session'));\n" +
            "\t\t}\n" +
            "\t}\n\n" +
            "}"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h4>ADD MIDDLEWARE</h4>

        <p>
          To import middleware to the routes we must first import the namespace
          of the middleware and inside this add an array to create custom
          middleware. <Badge bg={"secondary"}>routes/middleware.php</Badge>
        </p>

        <CodeBlock
          language={"php"}
          content={
            "<?php\n\n" +
            "LionRouteRoute::addMiddleware([\n" +
            "\tApp\\Http\\Middleware\\JWT\\AuthorizationMiddleware::class => [\n" +
            "\t\t['name' => 'jwt-exist', 'method' => 'exist']\n" +
            "\t\t['name' => 'jwt-authorize', 'method' => 'authorize']\n" +
            "\t\t['name' => 'jwt-not-authorize', 'method' => 'notAuthorize']\n" +
            "\t]\n" +
            "]);"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h4>USE MIDDLEWARE</h4>

        <p>
          <Badge bg={"secondary"}>routes/web.php</Badge>
        </p>

        <CodeBlock
          language={"php"}
          content={
            "<?php\n\n" +
            "Route::middleware(['jwt-exist', 'jwt-authorize'], function() {\n" +
            "\tRoute::get('/', [HomeController::class, 'index']);\n\n" +
            "\t// or\n\n" +
            "\tRoute::get('/', function() {\n" +
            "\t\treturn (new HomeController())->index();\n" +
            "\t});\n" +
            "});"
          }
        />
      </div>

      <LinkContainer to="/framework/controllers">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>

      <LinkContainer to="/framework/models">
        <Button variant="light" className="float-end mb-5">
          Next <FiArrowRight />
        </Button>
      </LinkContainer>
    </>
  );
}

export default Middleware;
