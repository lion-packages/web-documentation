import CodeBlock from "../../../../pages/components/CodeBlock";

export default function v5_4_0_LR() {
  return {
    request: {
      title: "LionRequest\\Request",
      description:
        "The Request class allows us to return different data from different types of HTTP requests, The capture method gets the data sent through an HTTP request.",
      url: "/libraries/lion/request/item_version/request/get-instance",
      methods: {
        "get-instance": {
          title: "Request::getInstance",
          description:
            "The `getInstance` function allows you to create a single instance of the `request` class.",
          link: "get-instance",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionRequest\\Request;\n\n" +
                "$instance = Request::getInstance();"
              }
            />
          ),
        },
        header: {
          title: "Request::header",
          description: "The `header` function allows you to create headers.",
          link: "header",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Request;\n\n" +
                    "Request::header('Access-Control-Allow-Origin', '*');\n" +
                    "Request::header('Content-Type', 'application/json; charset=UTF-8');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Request;\n\n" +
                    "$instance = Request::getInstance();\n" +
                    "$instance->header('Access-Control-Allow-Origin', '*');\n" +
                    "$instance->header('Content-Type', 'application/json; charset=UTF-8');"
                  }
                />
              </div>
            </>
          ),
        },
        capture: {
          title: "Request::capture",
          description:
            "the `capture` function gets the data sent through an http request.",
          link: "capture",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Request;\n\n" +
                    "Request::getInstance()->capure();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Request;\n\n" +
                    "Request::capure();"
                  }
                />
              </div>
            </>
          ),
        },
      },
    },
    response: {
      title: "LionRequest\\Response",
      description:
        "The Response class allows us to return different types of response, either for a successful response or for one with an error.",
      url: "/libraries/lion/request/item_version/response/get-instance",
      methods: {
        "get-instance": {
          title: "Response::getInstance",
          description:
            "The `getInstance` function allows you to create a single instance of the `response` class.",
          link: "get-instance",
          code: (
            <>
              <p>
                They can create an object of the Response class and call the
                methods.
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRequest\\Response;\n\n" +
                  "$instance = Response::getInstance();"
                }
              />
            </>
          ),
        },
        code: {
          title: "Response::code",
          description:
            "The `code` function allows you to modify the http response code",
          link: "code",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionRequest\\Response;\n\n" +
                "Response::code(503)->success('OK');"
              }
            />
          ),
        },
        finish: {
          title: "Response::finish",
          description:
            "The `finish` function ends the execution of all processes up to the point of execution of the same function, displaying a json of the content obtained on the screen.",
          link: "finish",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionRequest\\Response;\n\n" +
                "Response::finish(['name' => 'Sergio Leon']);\n" +
                '// {"name":"Sergio Leon"}'
              }
            />
          ),
        },
        response: {
          title: "Response::response",
          description:
            "The `response` function returns an object of any response type, along with its message and additional optional data.",
          link: "response",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "return Response::response('my_response', 'hello world');\n" +
                    "// (object) [\n\t// 'status' => 'my_response',\n\t// 'message' => 'hello world'\n// ]"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "$instance = Response::getInstance();\n" +
                    "return $instance->response('my_response', 'hello world');\n" +
                    "// (object) [\n\t// 'status' => 'my_response',\n\t// 'message' => 'hello world'\n// ]"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "$instance = Response::getInstance();\n" +
                    "return $instance->response(\n\t'my_response',\n\t'hello world',\n\t['name' => 'Sergio Leon']\n);\n" +
                    "// (object) [\n\t// 'status' => 'my_response',\n\t// 'message' => 'hello world',\n\t// 'data' => ['name' => 'Sergio Leon']\n// ]"
                  }
                />
              </div>
            </>
          ),
        },
        success: {
          title: "Response::success",
          description:
            "The `success` function returns a response of type success, along with its message and additional optional data.",
          link: "success",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "return Response::success('hello world');\n" +
                    "// (object) [\n\t// 'status' => 'success',\n\t// 'message' => 'hello world'\n// ]"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "$instance = Response::getInstance();\n" +
                    "return $instance->success('hello world');\n" +
                    "// (object) [\n\t// 'status' => 'success',\n\t// 'message' => 'hello world'\n// ]"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "$instance = Response::getInstance();\n" +
                    "return $instance->success('hello world', ['name' => 'Sergio Leon']);\n" +
                    "// (object) [\n\t// 'status' => 'success',\n\t// 'message' => 'hello world',\n\t// 'data' => ['name' => 'Sergio Leon']\n// ]"
                  }
                />
              </div>
            </>
          ),
        },
        error: {
          title: "Response::error",
          description:
            "The `error` function returns a response of type error, along with its message and additional optional data.",
          link: "error",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "return Response::error('hello world');\n" +
                    "// (object) [\n\t// 'status' => 'error',\n\t// 'message' => 'hello world'\n// ]"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "$instance = Response::getInstance();\n" +
                    "return $instance->error('hello world');\n" +
                    "// (object) [\n\t// 'status' => 'error',\n\t// 'message' => 'hello world'\n// ]"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "$instance = Response::getInstance();\n" +
                    "return $instance->error('hello world', ['name' => 'Sergio Leon']);\n" +
                    "// (object) [\n\t// 'status' => 'error',\n\t// 'message' => 'hello world',\n\t// 'data' => ['name' => 'Sergio Leon']\n// ]"
                  }
                />
              </div>
            </>
          ),
        },
        warning: {
          title: "Response::warning",
          description:
            "The `warning` function returns a response of type warning, along with its message and additional optional data.",
          link: "warning",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "return Response::warning('hello world');\n" +
                    "// (object) [\n\t// 'status' => 'warning',\n\t// 'message' => 'hello world'\n// ]"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "$instance = Response::getInstance();\n" +
                    "return $instance->warning('hello world');\n" +
                    "// (object) [\n\t// 'status' => 'warning',\n\t// 'message' => 'hello world'\n// ]"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "$instance = Response::getInstance();\n" +
                    "return $instance->warning('hello world', ['name' => 'Sergio Leon']);\n" +
                    "// (object) [\n\t// 'status' => 'warning',\n\t// 'message' => 'hello world',\n\t// 'data' => ['name' => 'Sergio Leon']\n// ]"
                  }
                />
              </div>
            </>
          ),
        },
        info: {
          title: "Response::info",
          description:
            "The `info` function returns a response of type info, along with its message and additional optional data.",
          link: "info",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "return Response::info('hello world');\n" +
                    "// (object) [\n\t// 'status' => 'info',\n\t// 'message' => 'hello world'\n// ]"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "$instance = Response::getInstance();\n" +
                    "return $instance->info('hello world');\n" +
                    "// (object) [\n\t// 'status' => 'info',\n\t// 'message' => 'hello world'\n// ]"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\Response;\n\n" +
                    "$instance = Response::getInstance();\n" +
                    "return $instance->info('hello world', ['name' => 'Sergio Leon']);\n" +
                    "// (object) [\n\t// 'status' => 'info',\n\t// 'message' => 'hello world',\n\t// 'data' => ['name' => 'Sergio Leon']\n// ]"
                  }
                />
              </div>
            </>
          ),
        },
      },
    },
    json: {
      title: "LionRequest\\JSON",
      description:
        "The Json class allows us to work with different data and properties either to encode them to a JSON format or decode them to an array format.",
      url: "/libraries/lion/request/item_version/json/get-instance",
      methods: {
        "get-instance": {
          title: "JSON::getInstance",
          description:
            "The `getInstance` function allows you to create a single instance of the `json` class.",
          link: "get-instance",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionRequest\\JSON;\n\n" +
                "$instance = JSON::getInstance();"
              }
            />
          ),
        },
        encode: {
          title: "JSON::encode",
          description: "Returns the JSON representation of a value.",
          link: "encode",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\JSON;\n\n" +
                    "$instance = JSON::getInstance();\n" +
                    "$instance->encode(['name' => 'Sergio Leon']);"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\JSON;\n\n" +
                    "JSON::encode(['name' => 'Sergio Leon']);"
                  }
                />
              </div>
            </>
          ),
        },
        decode: {
          title: "JSON::decode",
          description: "Decodes a JSON string.",
          link: "decode",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\JSON;\n\n" +
                    "$instance = JSON::getInstance();\n" +
                    "$instance->decode($json);"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionRequest\\JSON;\n\n" +
                    "JSON::decode($json);"
                  }
                />
              </div>
            </>
          ),
        },
      },
    },
  };
}
