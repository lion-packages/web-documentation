import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Headers() {
  return (
    <>
      <div className="mb-3">
        <h4 className="pb-2">Add headers</h4>

        <p>
        Headers should be added per function in {" "}
          <Badge bg="secondary">routes/header.php</Badge>
        </p>

        <CodeBlock
          language={'php'}
          content={
            '<?php\n\n' +
            "LionRequest\\Request::header('Content-Type', 'application/json; charset=UTF-8');\n" +
            "LionRequest\\Request::header('Access-Control-Allow-Origin', env->SERVER_ACCESS_CONTROL_ALLOW_ORIGIN);\n" +
            "LionRequest\\Request::header('Access-Control-Max-Age', env->SERVER_ACCESS_CONTROL_MAX_AGE);\n" +
            "LionRequest\\Request::header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');\n" +
            "LionRequest\\Request::header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');\n"
          }
        />
      </div>

      <LinkContainer to="/framework/commands">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>

      <LinkContainer to="/framework/request">
        <Button variant="light" className="float-end mb-5">
          Next <FiArrowRight />
        </Button>
      </LinkContainer>
    </>
  );
}

export default Headers;
