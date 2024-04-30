import { Fragment } from "react";
import CodeBlock from "../../../../pages/components/CodeBlock";
import Title from "../../../../pages/components/Title";
import { Alert } from "react-bootstrap";
import Description from "../../../../pages/components/Description";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Example from "../../../../pages/components/Example";

export default function v5_LR() {
  return {
    "getting-started": {
      name: "Getting started",
      type: "sub_modules",
      list: {
        "about-as": {
          name: "About us",
          code: (
            <Fragment>
              <Title title={"About us"} />

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <Description
                description={
                  "Library created to request input data and response requests."
                }
              />
            </Fragment>
          ),
        },
        install: {
          name: "Install",
          code: (
            <Fragment>
              <Title title={"Install"} />

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <CodeBlock
                language={"bash"}
                content={"composer require lion/request"}
              />
            </Fragment>
          ),
        },
      },
    },
    json: {
      name: "JSON::class",
      type: "sub_modules",
      list: {
        encode: {
          name: "encode",
          code: (
            <Fragment>
              <LibraryTitle className={"JSON"} methodName={"encode"} />

              <Description
                description={"Returns the JSON representation of a value."}
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\JSON;\n\n" +
                  "$instance = JSON::getInstance();\n\n" +
                  "$instance->encode(['name' => 'Sergio Leon']);\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\JSON;\n\n" +
                  "JSON::encode(['name' => 'Sergio Leon']);\n"
                }
              />
            </Fragment>
          ),
        },
        decode: {
          name: "decode",
          code: (
            <Fragment>
              <LibraryTitle className={"JSON"} methodName={"decode"} />

              <Description description={"Decodes a JSON string."} />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\JSON;\n\n" +
                  "$instance = JSON::getInstance();\n\n" +
                  "$instance->decode($json);\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\JSON;\n\n" +
                  "JSON::decode($json);\n"
                }
              />
            </Fragment>
          ),
        },
        "get-instance": {
          name: "getInstance",
          code: (
            <Fragment>
              <LibraryTitle className={"JSON"} methodName={"getInstance"} />

              <Description
                description={
                  "The getInstance function allows you to create a single instance of the json class."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\JSON;\n\n" +
                  "$instance = JSON::getInstance();\n"
                }
              />
            </Fragment>
          ),
        },
      },
    },
    request: {
      name: "Request::class",
      type: "sub_modules",
      list: {
        capture: {
          name: "capture",
          code: (
            <Fragment>
              <LibraryTitle className={"Request"} methodName={"capture"} />

              <Description
                description={
                  "The capture function gets the data sent through an http request."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Request;\n\n" +
                  "$data = Request::getInstance()->capure();"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Request;\n\n" +
                  "$data = Request::capure();"
                }
              />
            </Fragment>
          ),
        },
        "get-instance": {
          name: "getInstance",
          code: (
            <Fragment>
              <LibraryTitle className={"Request"} methodName={"getInstance"} />

              <Description
                description={
                  "The getInstance function allows you to create a single instance of the request class."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Request;\n\n" +
                  "$instance = Request::getInstance();"
                }
              />
            </Fragment>
          ),
        },
        header: {
          name: "header",
          code: (
            <Fragment>
              <LibraryTitle className={"Request"} methodName={"header"} />

              <Description
                description={
                  "The header function allows you to create headers."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Request;\n\n" +
                  "Request::header('Access-Control-Allow-Origin', '*');\n" +
                  "Request::header('Content-Type', 'application/json; charset=UTF-8');"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Request;\n\n" +
                  "$instance = Request::getInstance();\n" +
                  "$instance->header('Access-Control-Allow-Origin', '*');\n" +
                  "$instance->header('Content-Type', 'application/json; charset=UTF-8');"
                }
              />
            </Fragment>
          ),
        },
      },
    },
    response: {
      name: "Response::class",
      type: "sub_modules",
      list: {
        code: {
          name: "code",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"code"} />

              <Description
                description={
                  "The code function allows you to modify the http response code."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "Response::code(503)->success('OK');"
                }
              />
            </Fragment>
          ),
        },
        error: {
          name: "error",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"error"} />

              <Description
                description={
                  "The error function returns a response of type error, along with its message and additional optional data."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "Response::error('hello world');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n\n" +
                  "$instance->error('hello world');\n"
                }
              />

              <Example
                number={3}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n\n" +
                  "$instance->error('hello world', ['name' => 'Sergio Leon']);\n"
                }
              />
            </Fragment>
          ),
        },
        finish: {
          name: "finish",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"finish"} />

              <Description
                description={
                  "The finish function ends the execution of all processes up to the point of execution of the same function, displaying a json of the content obtained on the screen."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "Response::finish(['name' => 'Sergio Leon']);\n"
                }
              />
            </Fragment>
          ),
        },
        "get-instance": {
          name: "getInstance",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"getInstance"} />

              <Description
                description={
                  "The getInstance function allows you to create a single instance of the response class."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n"
                }
              />
            </Fragment>
          ),
        },
        info: {
          name: "info",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"info"} />

              <Description
                description={
                  "The info function returns a response of type info, along with its message and additional optional data."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "Response::info('hello world');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n\n" +
                  "$instance->info('hello world');\n"
                }
              />

              <Example
                number={3}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n\n" +
                  "$instance->info('hello world', ['name' => 'Sergio Leon']);\n"
                }
              />
            </Fragment>
          ),
        },
        response: {
          name: "response",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"response"} />

              <Description
                description={
                  "The response function returns an object of any response type, along with its message and additional optional data."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "Response::response('my_response', 'hello world');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n\n" +
                  "$instance->response('my_response', 'hello world');\n"
                }
              />

              <Example
                number={3}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n\n" +
                  "$instance->response(\n\t'my_response',\n\t'hello world',\n\t['name' => 'Sergio Leon']\n);\n"
                }
              />
            </Fragment>
          ),
        },
        success: {
          name: "success",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"success"} />

              <Description
                description={
                  "The success function returns a response of type success, along with its message and additional optional data."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "Response::success('hello world');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n\n" +
                  "$instance->success('hello world');\n"
                }
              />

              <Example
                number={3}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n\n" +
                  "$instance->success('hello world', ['name' => 'Sergio Leon']);\n"
                }
              />
            </Fragment>
          ),
        },
        warning: {
          name: "warning",
          code: (
            <Fragment>
              <LibraryTitle className={"Response"} methodName={"warning"} />

              <Description
                description={
                  "The warning function returns a response of type warning, along with its message and additional optional data."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "Response::warning('hello world');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n\n" +
                  "$instance->warning('hello world');\n"
                }
              />

              <Example
                number={3}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();\n\n" +
                  "$instance->warning('hello world', ['name' => 'Sergio Leon']);\n"
                }
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
