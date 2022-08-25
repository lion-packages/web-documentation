import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

function Rules() {
  return (
    <>
      <div className="mb-3">
        <h4>Rules</h4>

        <p>
          You can create rules from command line php lion new:rule rule_name ,
          rule usage is based on rules provided by vlucas/valitron, you can set
          language response from environment variables with lang language
          preference to <Badge bg={"secondary"}>.env</Badge>.
        </p>
      </div>

      <div className="mb-3">
        <h4>Example #1</h4>

        <CodeBlock
          language={"powershell"}
          content={"php lion new:rule EmailRule"}
        />

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "namespace App\\Rules;\n\n" +
            "use LionSecurity\\SECURITY;\n" +
            "use App\\Traits\\DisplayErrors;\n\n" +
            "class EmailRule {\n\n" +
            "\tuse DisplayErrors;\n\n" +
            "\tpublic function __contruct() {\n\n" +
            "\t}\n\n" +
            "\tpublic function passes(): EmailRule {\n" +
            "\t\t$this->validation = SECURITY::validate(\n" +
            "\t\t\t(array) request, [\n" +
            "\t\t\t\t'required' => [\n" +
            "\t\t\t\t\t['users_email']\n" +
            "\t\t\t\t],\n" +
            "\t\t\t\t'email' => [\n" +
            "\t\t\t\t\t['users_email']\n" +
            "\t\t\t\t]\n" +
            "\t\t\t]\n" +
            "\t\t)->data;\n\n" +
            "\t\treturn $this;\n" +
            "\t}\n\n" +
            "}"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h4>Use Rules</h4>

        <p>
          Add your rules to different routes in{" "}
          <Badge bg={"secondary"}>routes/rules.php</Badge>.
        </p>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "return [\n" +
            "\t'/api/auth/signin' => [\n" +
            "\t\tAppRulesEmailRule::class\n" +
            "\t]\n" +
            "];"
          }
        />
      </div>
    </>
  );
}

export default Rules;
