import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

function Routes() {
  return (
    <>
      <div className="mb-3">
        <h4>Routes</h4>

        <p>
          <Link to={"/libraries/route"}>Lion-Route</Link> has been implemented
          for route handling. More information at{" "}
          <Link to={"/libraries/route"}>Lion-Route</Link>, from the web you can
          add all the necessary routes for the operation of your web application{" "}
          <Badge bg={"secondary"}>routes/web.php</Badge>.
        </p>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "use App\\Http\\Controllers\\HomeController;\n\n" +
            "Route::get('/', [HomeController::class, 'index']);\n\n" +
            "// or\n\n" +
            "Route::get('/', function() {\n" +
            "\t(new HomeController())->index();\n" +
            "});"
          }
        />
      </div>
    </>
  );
}

export default Routes;
