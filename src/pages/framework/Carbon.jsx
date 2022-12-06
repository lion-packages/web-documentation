import CodeBlock from "../components/CodeBlock";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Carbon() {
  return (
    <>
      <div className="mb-3">
        <h4>CARBON</h4>

        <p>
          A simple PHP API extension for DateTime,{" "}
          <a href="https://carbon.nesbot.com/" target={"_blank"}>
            Carbon
          </a>{" "}
          is installed by default.
        </p>
      </div>

      <div className="mb-3">
        <h4 className="pb-2">Example #1</h4>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "use Carbon\\Carbon;\n\n" +
            "return response->success('my time! ' . Carbon::now());"
          }
        />
      </div>

      <div className="mb-3">
        <h4 className="pb-2">Example #2</h4>

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "use Carbon\\Carbon;\n\n" +
            "return response->success('my time! ' . Carbon::now()->format('Y-m-d H:i:s'));"
          }
        />
      </div>

      <LinkContainer to="/framework/response">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>

      <LinkContainer to="/framework/routes">
        <Button variant="light" className="float-end mb-5">
          Next <FiArrowRight />
        </Button>
      </LinkContainer>
    </>
  );
}

export default Carbon;
