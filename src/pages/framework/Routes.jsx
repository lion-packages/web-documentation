import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Routes() {
  return (
    <>
      <div className="mb-3">
        <h4>ROUTES</h4>

        <p>
          <Link to={"/libraries/route"}>Lion-Route</Link> has been implemented
          for route handling. More information at{" "}
          <Link to={"/libraries/route"}>Lion-Route</Link>, from the web you can
          add all the necessary routes for the operation of your web application{" "}
          <Badge bg={"secondary"}>routes/web.php</Badge>
        </p>
      </div>

      <div className="mb-3">
        <h4 className="pb-2">Example #1</h4>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "use App\\Http\\Controllers\\HomeController;\n\n" +
            "Route::get('/', [HomeController::class, 'index']);\n\n" +
            "// or\n\n" +
            "Route::get('/', function() {\n" +
            "\treturn (new HomeController())->index();\n" +
            "});"
          }
        />
      </div>

      <div className="mb-3">
        <h4 className="pb-2">Example #2</h4>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "Route::get('/', function() {\n" +
            "\treturn response->success('test');\n" +
            "});"
          }
        />
      </div>

      <LinkContainer to="/framework/carbon">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>

      <LinkContainer to="/framework/controllers">
        <Button variant="light" className="float-end mb-5">
          Next <FiArrowRight />
        </Button>
      </LinkContainer>
    </>
  );
}

export default Routes;
