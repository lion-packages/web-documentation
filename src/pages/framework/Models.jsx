import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

function Models() {
  return (
    <>
      <div className="mb-3">
        <h4>Models</h4>

        <p>
          You can create models from the command line{" "}
          <Badge bg={"secondary"}>
            php lion new:model model_name
          </Badge>.
        </p>
      </div>

      <div className="mb-3">
        <h4>Example #1</h4>

        <CodeBlock
          language={'powershell'}
          content={'php lion new:model HomeModel'}
        />

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "namespace App\\Http\\Models;\n\n" +
            "use LionSql\\Drivers\\MySQLDriver as Builder;\n\n" +
            "class HomeModel {\n\n" +
            "\tpublic function __contruct() {\n\n" +
            "\t}\n\n" +
            "}"
          }
        />
      </div>
    </>
  );
}

export default Models;
