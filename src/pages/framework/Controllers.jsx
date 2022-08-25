import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

function Controllers() {
  return (
    <>
      <div className="mb-3">
        <h4>Controllers</h4>

        <p>
          You can create controllers from the command line{" "}
          <Badge bg={"secondary"}>
            php lion new:controller controller_name
          </Badge>.
        </p>
      </div>

      <div className="mb-3">
        <h4>Example #1</h4>

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
        <h4>Example #2</h4>

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
    </>
  );
}

export default Controllers;
