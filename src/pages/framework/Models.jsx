import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Models() {
  return (
    <>
      <div className="mb-3">
        <h4>Models</h4>

        <p>
          You can create models from the command line{" "}
          <Badge bg={"secondary"}>
            php lion new:model model_name
          </Badge>
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

      <LinkContainer to="/framework/middleware">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>

      <LinkContainer to="/framework/rules">
        <Button variant="light" className="float-end mb-5">
          Next <FiArrowRight />
        </Button>
      </LinkContainer>
    </>
  );
}

export default Models;
