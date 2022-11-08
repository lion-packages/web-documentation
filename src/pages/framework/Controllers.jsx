import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Controllers() {
  return (
    <>
      <div className="mb-3">
        <h4>CONTROLLERS</h4>

        <p>
          You can create controllers from the command line{" "}
          <Badge bg={"secondary"}>
            php lion new:controller controller_name
          </Badge>
        </p>
      </div>

      <div className="mb-3">
        <h5>EXAMPLE #1</h5>

        <CodeBlock
          language={'powershell'}
          content={'php lion new:controller HomeController'}
        />

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "namespace App\\Http\\Controllers;\n\n" +
            "class HomeController {\n\n" +
            "\tpublic function __contruct() {\n\n" +
            "\t}\n\n" +
            "}"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>EXAMPLE #2</h5>

        <CodeBlock
          language={'powershell'}
          content={'php lion new:controller HomeController'}
        />

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "namespace App\\Http\\Controllers;\n\n" +
            "class HomeController {\n\n" +
            "\tpublic function __contruct() {\n\n" +
            "\t}\n\n" +
            "\tpublic function index() {\n" +
            "\t\treturn response->success('welcome to index');\n" +
            "\t}\n\n" +
            "}\n\n" +
            "// routes/web.php\n\n" +
            "use App\\Http\\Controllers\\HomeController;\n\n" +
            "Route::get('/', [HomeController::class, 'index']);"
          }
        />
      </div>

      <LinkContainer to="/framework/routes">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>

      <LinkContainer to="/framework/middleware">
        <Button variant="light" className="float-end mb-5">
          Next <FiArrowRight />
        </Button>
      </LinkContainer>
    </>
  );
}

export default Controllers;
