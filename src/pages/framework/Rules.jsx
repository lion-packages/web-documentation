import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function Rules() {
  return (
    <>
      <div className="mb-3">
        <h4>RULES</h4>

        <p>
          You can create rules from command line{" "}
          <Badge bg={"secondary"}>php lion new:rule rule_name</Badge>, rule
          usage is based on rules provided by{" "}
          <a href="https://github.com/vlucas/valitron" target={"_blank"}>
            vlucas/valitron
          </a>
          , you can set language response from environment variables with lang
          language preference to <Badge bg={"secondary"}>.env</Badge>
        </p>

        <p>
          more information in <Link to={"/libraries/security"}>SECURITY</Link>.
        </p>
      </div>

      <div className="mb-3">
        <h5>EXAMPLE #1</h5>

        <CodeBlock
          language={"powershell"}
          content={"php lion new:rule EmailRule"}
        />

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "namespace App\\Rules;\n\n" +
            "use App\\Traits\\Framework\\ShowErrors;\n\n" +
            "class EmailRule {\n\n" +
            "\tuse ShowErrors;\n\n" +
            "\tpublic function passes(): void {\n" +
            "\t\tself::validate(function(\Valitron\Validator $validator) {\n" +
            "\t\t\t$validator->rule('required', 'users_email')->message('custom message...');\n" +
            "\t\t});\n" +
            "\t}\n\n" +
            "}"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>USE RULES</h5>

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
            "\t\tApp\\Rules\\EmailRule::class\n" +
            "\t]\n" +
            "];"
          }
        />

        <p>You can reuse a rule in different routes.</p>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "return [\n" +
            "\t'/api/auth/signin' => [\n" +
            "\t\tApp\\Rules\\EmailRule::class\n" +
            "\t]\n" +
            "\t'/api/create-users' => [\n" +
            "\t\tApp\\Rules\\EmailRule::class\n" +
            "\t]\n" +
            "];"
          }
        />
      </div>

      <LinkContainer to="/framework/capsules">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>
    </>
  );
}

export default Rules;
