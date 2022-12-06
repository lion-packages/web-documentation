import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ListTabs from "../components/ListTabs";
import Badge from "react-bootstrap/Badge";
import { BsGithub } from "react-icons/bs";
import { Button } from "react-bootstrap";

function LionRequest() {
  const [items, setItems] = useState([
    {
      event: "getting-started",
      name: "GETTING STARTED",
    },
    {
      event: "request",
      name: "REQUEST",
    },
    {
      event: "response",
      name: "RESPONSE",
    },
    {
      event: "json",
      name: "JSON",
    },
    {
      event: "header",
      name: "HEADER",
    },
    {
      event: "finish",
      name: "FINISH",
    },
    {
      event: "credits-license",
      name: "CREDITS AND LICENSE",
    },
  ]);

  const [panes, setPanes] = useState([
    {
      event: "getting-started",
      content: (
        <>
          <Button
            variant="dark"
            href="https://github.com/Sleon4/Lion-Request"
            target="_blank"
          >
            <BsGithub size={"2em"} className="me-2" />
            Lion-Request
          </Button>

          <hr />

          <div className="mb-4">
            <h2 className="pb-2">Lion-Request</h2>

            <p>Library created to request input data and response requests.</p>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">INSTALL</h4>

            <CodeBlock
              language="powershell"
              content={"composer require lion/request"}
            />
          </div>
        </>
      ),
    },
    {
      event: "request",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">REQUEST</h4>

            <p>
              The Request class allows us to return different data from
              different types of HTTP requests, The{" "}
              <Badge bg="secondary">capture</Badge> method gets the data sent
              through an HTTP request.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionRequest\\Request;\n" +
                "// HTTP (GET, POST, PUT, DELETE...)\n" +
                "var_dump(Request::capture());"
              }
            />
          </div>

          <div className="mb-3">
            <p>
              They can create an object of the Request class and call the
              methods.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionRequest\\Request;\n\n" +
                "$request = Request::getInstance();\n" +
                "var_dump($request->capture());"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "response",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">RESPONSE</h4>

            <p>
              The Response class allows us to return different types of
              response, either for a successful response or for one with an
              error.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionRequest\\Response;\n\n" +
                "var_dump(Response::response('success', 'my text...'));\n" +
                "var_dump(Response::success('my text...'));\n" +
                "var_dump(Response::error('my text...'));\n" +
                "var_dump(Response::warning('my text...'));\n" +
                "var_dump(Response::info('my text...'));\n"
              }
            />
          </div>

          <div className="mb-3">
            <p>
              They can create an object of the Response class and call the
              methods.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionRequest\\Response;\n\n" +
                "$response = Response::getInstance();\n" +
                "var_dump($response->response('success', 'my text...'));\n" +
                "var_dump($response->success('my text...'));\n" +
                "var_dump($response->error('my text...'));\n" +
                "var_dump($response->warning('my text...'));\n" +
                "var_dump($response->info('my text...'));\n"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "json",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">JSON</h4>

            <p>
              The Json class allows us to work with different data and
              properties either to encode them to a JSON format or decode them
              to an array format.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="pb-3">ENCODE</h4>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionRequest\\Json;\n\n" +
                "$encode = Json::encode(['name' => 'my name', 'last_name' => 'my last name']);\n" +
                "var_dump($encode);"
              }
            />
          </div>

          <div className="mb-3">
            <h4 className="pb-3">DECODE</h4>

            <CodeBlock
              language="php"
              content={
                "$decode = Json::decode($encode);\n" + "var_dump($decode);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "header",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">HEADER</h4>

            <p>The Request class allows us to create headers.</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionRequest\\Request;\n\n" +
                "Request::header('Access-Control-Allow-Origin', '*');\n" +
                "Request::header('Content-Type', 'application/json; charset=UTF-8');"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "finish",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">FINISH</h4>

            <p>
              The finish function internally executes a{" "}
              <Badge bg="secondary">die</Badge> with its respective response, it
              converts the data sent with{" "}
              <Badge bg="secondary">json_encode</Badge>{" "}
              to json.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionRequest\\Response;\n\n" +
                "Response::finish(['status' => 'success']);\n"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "credits-license",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">LICENSE</h4>
            <p>
              Copyright © 2022{" "}
              <a
                href="https://github.com/Sleon4/Lion-Request/blob/main/LICENSE"
                target="_blank"
              >
                MIT License
              </a>
            </p>
          </div>
        </>
      ),
    },
  ]);

  return <ListTabs default="getting-started" items={items} panes={panes} />;
}

export default LionRequest;
