import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

function Carbon() {
  return (
    <>
      <div className="mb-3">
        <h4>Carbon</h4>

        <p>
          A simple PHP API extension for DateTime,{" "}
          <a href="https://carbon.nesbot.com/" target={"_blank"}>
            Carbon
          </a>{" "}
          is installed by default.
        </p>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "use Carbon\\Carbon;\n\n" +
            "return response->success('my time! ' . Carbon::now());"
          }
        />
      </div>
    </>
  );
}

export default Carbon;
