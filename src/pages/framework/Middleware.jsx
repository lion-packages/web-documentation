import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

function Middleware() {
  return (
    <>
      <div className="mb-3">
        <h4>Middleware</h4>

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
        <h4>Add Functions</h4>

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
            "\t\t\tresponse->finish(json->encode(response->error('The JWT does not exist')));\n" +
            "\t\t}\n" +
            "\t}\n\n" +
            "\tpublic function authorize(): void {\n" +
            "\t\t$headers = apache_request_headers();\n\n" +
            "\t\tif (preg_match('/Bearers(S+)/', $headers['Authorization'], $matches)) {\n" +
            "\t\t\t$jwt = JWT::decode($matches[1]);\n\n" +
            "\t\t\tif ($jwt->status === 'error') {\n" +
            "\t\t\t\tresponse->finish(json->encode(response->error($jwt->message)));\n" +
            "\t\t\t}\n" +
            "\t\t} else {\n" +
            "\t\t\tresponse->finish(json->encode(response->error('Invalid JWT')));\n" +
            "\t\t}\n" +
            "\t}\n\n" +
            "\tpublic function notAuthorize(): void {\n" +
            "\t\t$headers = apache_request_headers();\n\n" +
            "\t\tif (isset($headers['Authorization'])) {\n" +
            "\t\t\tresponse->finish(json->encode(response->error('User in session, You must close the session')));\n" +
            "\t\t}\n" +
            "\t}\n\n" +
            "}"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h4>Add Middleware</h4>

        <p>
          To import middleware to the routes we must first import the namespace
          of the middleware and inside this add an array to create custom
          middleware. <Badge bg={"secondary"}>routes/middleware.php</Badge>.
        </p>

        <CodeBlock
          language={"php"}
          content={
            "<?php\n\n" +
            "LionRouteRoute::newMiddleware([\n" +
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
        <h4>Use Middleware</h4>

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
    </>
  );
}

export default Middleware;
