import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <>
      <div className="mb-3">
        <h4 className="pb-2">ADD HEADERS</h4>

        <p>
          Headers should be added per function in{" "}
          <Badge bg="secondary">routes/header.php</Badge> more information in{" "}
          <Link to={"/libraries/request"}>Lion-Request</Link>
        </p>

        <CodeBlock
          language={"php"}
          content={
            "<?php\n\n" +
            "LionRequest\\Request::header('Content-Type', 'application/json; charset=UTF-8');\n" +
            "LionRequest\\Request::header('Access-Control-Allow-Origin', '*');\n" +
            "LionRequest\\Request::header('Access-Control-Max-Age', 3600);\n" +
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
