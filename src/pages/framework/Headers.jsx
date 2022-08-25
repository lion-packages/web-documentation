import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

function Headers() {
  return (
    <>
      <div className="mb-3">
        <h4 className="pb-2">Add headers</h4>

        <p>
        Headers should be added per function in {" "}
          <Badge bg="secondary">routes/header.php</Badge>.
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
    </>
  );
}

export default Headers;
