import CodeBlock from "../components/CodeBlock";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Response() {
  return (
    <>
      <div className="mb-3">
        <h4>RESPONSE</h4>

        <p>
          The Response class implements different response functions on HTTP
          requests, the system internally initializes a{" "}
          <Badge bg={"secondary"}>response</Badge> constant to access the
          functions. more information in{" "}
          <Link to={"/libraries/request"}>Lion-Request</Link>
        </p>

        <CodeBlock
          language={"php"}
          content={
            "<?php\n\n" +
            "define('response', LionRequest\\Response::getInstance()); // (Response)"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>EXAMPLE #1</h5>

        <CodeBlock
          language={"php"}
          content={"<?php\n\n" + "return response->success('message...');"}
        />

        <CodeBlock
          language={"json"}
          content={
            "{\n" +
            '\t"status": "success",\n' +
            '\t"message": "message...",\n' +
            '\t"data": []\n' +
            "}"
          }
        />

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "return (object) ['status' => 'success', 'message' => 'message...'];"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>EXAMPLE #2</h5>

        <CodeBlock
          language={"php"}
          content={"<?php\n\n" + "return response->error('message...');"}
        />

        <CodeBlock
          language={"json"}
          content={
            "{\n" +
            '\t"status": "error",\n' +
            '\t"message": "message...",\n' +
            '\t"data": []\n' +
            "}"
          }
        />

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "return (object) ['status' => 'error', 'message' => 'message...'];"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h5>EXAMPLE #3</h5>

        <CodeBlock
          language={"php"}
          content={
            "<?php\n\n" +
            "return response->response('my_custom_response', 'message...');"
          }
        />

        <CodeBlock
          language={"json"}
          content={
            "{\n" +
            '\t"status": "my_custom_response",\n' +
            '\t"message": "message...",\n' +
            '\t"data": []\n' +
            "}"
          }
        />

        <CodeBlock
          langueage={"php"}
          content={
            "<?php\n\n" +
            "return (object) ['status' => 'my_custom_response', 'message' => 'message...'];"
          }
        />
      </div>

      <LinkContainer to="/framework/request">
        <Button variant="light" className="mb-5">
          <FiArrowLeft /> Previous
        </Button>
      </LinkContainer>

      <LinkContainer to="/framework/carbon">
        <Button variant="light" className="float-end mb-5">
          Next <FiArrowRight />
        </Button>
      </LinkContainer>
    </>
  );
}

export default Response;
