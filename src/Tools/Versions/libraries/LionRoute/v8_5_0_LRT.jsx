import { Badge, Col, Row } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";

export default function v8_5_0_LRT() {
  return {
    request: {
      title: "LionRoute\\Request",
      description:
        "Guzzle has been integrated to execute http requests through route, you can make get and post requests with their respective options.",
      url: "/libraries/lion/route/item_version/request/init",
      methods: {
        init: {
          title: "Request::init",
          link: "init",
          description:
            "The `init` function initializes the request service through a parameter.",
          code: (
            <div className="mb-3">
              <h2 className="pb-2 text-warning">Guzzle</h2>

              <p>
                The library has an integrated guzzle, this to make http requests
                through routes.
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionRoute\\Request;\n\n" +
                  "Request::init(new GuzzleHttp\\Client());"
                }
              />
            </div>
          ),
        },
      },
    },
    route: {
      title: "LionRoute\\Route",
      description:
        "The route class allows you to organize dynamic routes to receive http requests.",
      url: "/libraries/lion/route/item_version/route/init",
      methods: {
        init: {
          title: "Route::init",
          link: "init",
          description:
            "The `init` function initializes the http routing service.",
          code: (
            <>
              <div className="mb-3">
                <h2 className="pb-2 text-warning">USAGE</h2>

                <p>Start your development server.</p>

                <Row>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="mb-3">
                      <h5 className="pb-2">Lion-Framework</h5>
                      <CodeBlock
                        language="powershell"
                        content={"php lion serve"}
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="mb-3">
                      <h5 className="pb-2">local machine</h5>

                      <CodeBlock
                        language="powershell"
                        content={"php -S 127.0.0.1:8000"}
                      />
                    </div>
                  </Col>
                </Row>

                <hr />

                <p>
                  It is recommended to start the development server yourself,
                  since software such as{" "}
                  <Badge bg="secondary">
                    XAMPP, WampServer, BitNami WAMP Stack, Apache Lounge... etc
                  </Badge>
                  , provide directories in which to load your PHP projects, This
                  results in running on the browser routes as
                  <Badge bg="secondary">'localhost/MyProject/example'</Badge>.
                  This generates a conflict since the route obtained comes by
                  default as <Badge bg="secondary">'MyProject/example'</Badge>,
                  something completely wrong. You can solve it by indicating
                  from which parameter the URL can be obtained from the{" "}
                  <Badge bg="secondary">Route::init()</Badge> method.
                </p>

                <p>
                  Indicate with an integer from which position the URL will be
                  obtained, By default it is initialized to 1.
                </p>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "/*\n" +
                    "\tmyweb.com/auth/signin/example\n" +
                    "\t1 -> auth/signin/example\n" +
                    "\t2 -> signin/example\n" +
                    "\t3 -> example\n" +
                    "\t4+ ...\n" +
                    "*/\n\n" +
                    "Request::init(new GuzzleHttp\\Client());\n" +
                    "Route::init(1);"
                  }
                />
              </div>

              <div className="mb-3">
                <h2 className="pb-2 text-warning">AVAILABLE METHODS</h2>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "Route::get(...);\n" +
                    "Route::post(...);\n" +
                    "Route::put(...);\n" +
                    "Route::delete(...);\n" +
                    "Route::options(...);\n" +
                    "Route::patch(...);\n" +
                    "Route::any(...);"
                  }
                />
              </div>

              <div className="mb-3">
                <h2 className="pb-2 text-warning">HTACCESS</h2>

                <CodeBlock
                  language="apache"
                  content={
                    "<IfModule mod_rewrite.c>\n" +
                    "\t<IfModule mod_negotiation.c>\n" +
                    "\t\tOptions -MultiViews -Indexes\n" +
                    "\t</IfModule>\n\n" +
                    "\tRewriteEngine On\n\n" +
                    "\t# Handle Authorization Header\n" +
                    "\tRewriteCond %{HTTP:Authorization} .\n" +
                    "\tRewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]\n\n" +
                    "\t# Redirect Trailing Slashes If Not A Folder...\n" +
                    "\tRewriteCond %{REQUEST_FILENAME} !-d\n" +
                    "\tRewriteCond %{REQUEST_URI} (.+)/$\n" +
                    "\tRewriteRule ^ %1 [L,R=301]\n\n" +
                    "\t# Send Requests To Front Controller...\n" +
                    "\tRewriteCond %{REQUEST_FILENAME} !-d\n" +
                    "\tRewriteCond %{REQUEST_FILENAME} !-f\n" +
                    "\tRewriteRule ^ index.php [L]\n" +
                    "</IfModule>"
                  }
                />
              </div>
            </>
          ),
        },
        redirect: {
          title: "Route::redirect",
          link: "redirect",
          description:
            "The `redirect` function generates a redirection to the obtained url.",
          code: (
            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionRoute\\Route;\n\n" +
                "Route::redirect('miweb.com');"
              }
            />
          ),
        },
        "add-log": {
          title: "Route::addLog",
          link: "add-log",
          description:
            "The `addLog` function allows you to check if the logger function initialized from the Lion-Framework exists",
          code: (
            <CodeBlock
              language="php"
              content={
                "<?php\n\n" + "use LionRoute\\Route;\n\n" + "Route::addLog();"
              }
            />
          ),
        },
        get: {
          title: "Route::get",
          link: "get",
          description:
            "The `get` function allows you to create an http route or make an http get request.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http get request to route `users`\n" +
                    "Route::get('users', function() {\n" +
                    "\treturn (new UsersController())->readUsers();\n" +
                    "});\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http get request to route `users`\n" +
                    "Route::get('users/{idusers}', [UsersController::class, 'readUsers']);\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http get request to route `users`\n" +
                    "Route::get('users', [UsersController::class, 'readUsers']);\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #4</h5>

                <p>
                  Request implements GuzzleHttp, more information on{" "}
                  <a
                    href="https://docs.guzzlephp.org/en/stable/"
                    target={"_blank"}
                  >
                    Guzzlehttp
                  </a>
                </p>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use GuzzleHttp\\Client;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n" +
                    "Request::init(new Client());\n\n" +
                    "// send http get request to `users` route\n" +
                    "Route::get('users', 'https://jsonplaceholder.typicode.com/users');\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>
            </>
          ),
        },
        post: {
          title: "Route::post",
          link: "post",
          description:
            "The `post` function allows you to create an http route or make an http post request.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http post request to route `users`\n" +
                    "Route::post('users', function() {\n" +
                    "\treturn (new UsersController())->createUsers();\n" +
                    "});\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http post request to route `users`\n" +
                    "Route::post('users', [UsersController::class, 'createUsers']);\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <p>
                  Request implements GuzzleHttp, more information on{" "}
                  <a
                    href="https://docs.guzzlephp.org/en/stable/"
                    target={"_blank"}
                  >
                    Guzzlehttp
                  </a>
                </p>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use GuzzleHttp\\Client;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n" +
                    "Request::init(new Client());\n\n" +
                    "// receive http post request to route `users`\n" +
                    "Route::post('post', 'https://jsonplaceholder.typicode.com/posts', [\n" +
                    "\t'form_params' => [\n\t\t'id' => 1\t\n\t]\n" +
                    "]);\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>
            </>
          ),
        },
        put: {
          title: "Route::put",
          link: "put",
          description:
            "The `put` function allows you to create an http route or make an http put request.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http put request to route `users`\n" +
                    "Route::put('users', function() {\n" +
                    "\treturn (new UsersController())->updateUsers();\n" +
                    "});\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http put request to route `users`\n" +
                    "Route::put('users', [UsersController::class, 'updateUsers']);\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <p>
                  Request implements GuzzleHttp, more information on{" "}
                  <a
                    href="https://docs.guzzlephp.org/en/stable/"
                    target={"_blank"}
                  >
                    Guzzlehttp
                  </a>
                </p>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use GuzzleHttp\\Client;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n" +
                    "Request::init(new Client());\n\n" +
                    "// receive http put request to route `users`\n" +
                    "Route::put('users', 'https://jsonplaceholder.typicode.com/posts', [\n" +
                    "\t'json' => [\n\t\t'id' => 1\t\n\t]\n" +
                    "]);\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>
            </>
          ),
        },
        delete: {
          title: "Route::delete",
          link: "delete",
          description:
            "The `delete` function allows you to create an http route or make an http delete request.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http delete request to route `users`\n" +
                    "Route::delete('users/{idusers}', function($idusers) {\n" +
                    "\treturn (new UsersController())->deleteUsers($idusers);\n" +
                    "});\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http delete request to route `users`\n" +
                    "Route::delete('users/{idusers}', [UsersController::class, 'deleteUsers']);\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>
            </>
          ),
        },
        patch: {
          title: "Route::patch",
          link: "patch",
          description:
            "The `patch` function allows you to create an http route or make an http patch request.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "Route::patch('users', function() {\n" +
                    "\treturn 'ok';\n" +
                    "});\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n" +
                    "Route::patch('users/{idusers}', [UsersController::class, 'patchUsers']);\n" +
                    "Route::dispatch();"
                  }
                />
              </div>
            </>
          ),
        },
        any: {
          title: "Route::any",
          link: "any",
          description:
            "The `any` function allows you to create an http route for any type of http request.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http any request to route `users`\n" +
                    "Route::any('users', function() {\n" +
                    "\treturn (new UsersController())->createUsers();\n" +
                    "\t// return (new UsersController())->readUsers();\n" +
                    "\t// return (new UsersController())->updateUsers();\n" +
                    "\t// return (new UsersController())->deleteUsers();\n" +
                    "});\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http any request to route `users`\n" +
                    "Route::any('users', [UsersController::class, 'createUsers']);\n" +
                    "// Route::any('users', [UsersController::class, 'readUsers']);\n" +
                    "// Route::any('users', [UsersController::class, 'updateUsers']);\n" +
                    "// Route::any('users', [UsersController::class, 'deleteUsers']);\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>
            </>
          ),
        },
        prefix: {
          title: "Route::prefix",
          link: "prefix",
          description: "The `prefix` function allows grouping routes.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http any request to route `users`\n" +
                    "Route::prefix('api', function() {\n" +
                    "\tRoute::get('users', [UsersController::class, 'readUsers']);\n" +
                    "});\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n" +
                    "use App\\Http\\Controllers\\UsersController;\n\n" +
                    "Route::init();\n\n" +
                    "// receive http any request to route `users`\n" +
                    "Route::prefix('api', function() {\n" +
                    "\tRoute::get('users', [UsersController::class, 'readUsers']);\n\n" +
                    "\tRoute::prefix('reports', function() {\n" +
                    "\t\tRoute::post('pdf', [UsersController::class, 'pdfExport']);\n" +
                    "\t\tRoute::post('word', [UsersController::class, 'wordExport']);\n" +
                    "\t});\n" +
                    "});\n\n" +
                    "Route::dispatch();"
                  }
                />
              </div>
            </>
          ),
        },
        "add-middleware": {
          title: "Route::addMiddleware",
          link: "add-middleware",
          description:
            "The `addMiddleware` function allows you to add methods of middleware classes to the filter pool.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">CREATE CLASSES</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "namespace App\\Http\\Middleware;\n\n" +
                    "class Auth {\n\n" +
                    "\tpublic function __construct() {\n\n\t}\n\n" +
                    "\tpublic function auth(): void {\n" +
                    "\t\tif (!isset($_SESSION['user_session'])) {\n" +
                    "\t\t\techo(\n" +
                    "\t\t\t\tjson_encode(['status' => 'error', 'message' => 'user session does not exist'])\n" +
                    "\t\t\t)\n\n" +
                    "\t\t\texit(); // exit to end the execution of the process up to that point." +
                    "\n\t\t}\n\t}\n\n" +
                    "\tpublic function noAuth(): void {\n" +
                    "\t\tif (isset($_SESSION['user_session'])) {\n" +
                    "\t\t\techo(\n" +
                    "\t\t\t\tjson_encode(['status' => 'error', 'message' => 'user session exists'])\n" +
                    "\t\t\t)\n\n" +
                    "\t\t\texit(); // exit to end the execution of the process up to that point." +
                    "\n\t\t}\n\t}\n\n}"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">ADD MIDDLEWARE</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionRoute\\Route;\n\n" +
                    "Route::addMiddleware([\n" +
                    "\tApp\\Http\\Middleware\\Auth::class => [\n" +
                    "\t\t['name' => 'auth', 'method' => 'auth'],\n" +
                    "\t\t['name' => 'no-auth', 'method' => 'noAuth']\n" +
                    "\t]\n]);"
                  }
                />
              </div>
            </>
          ),
        },
        middleware: {
          title: "Route::middleware",
          link: "middleware",
          description:
            "The `middleware` function allows creating and grouping routes using filters.",
          code: (
            <div className="mb-3">
              <h5 className="pb-2 text-warning">USE MIDDLEWARE</h5>

              <p>
                It is identical to filters, we change the name of filter to
                middleware.
                <Badge bg="secondary">
                  {"['name' => 'auth', 'method' => 'auth']"}
                </Badge>{" "}
                is the basic syntax for adding middleware to our RouteCollector
                object. Each middleware must be encapsulated in an array, where
                each middleware carries its information within another array.
                The first parameter is the name of the middleware. The second
                parameter is the name of the function it belongs to.
              </p>

              <hr />

              <p>
                When calling <Badge bg="secondary">Route::middleware()</Badge>{" "}
                keep in mind that the first parameter is an array loaded with
                data.
              </p>

              <p>
                - The first index is the middleware at position{" "}
                <Badge bg="secondary">before</Badge>.
              </p>

              <p>
                - The second index is optional and points to{" "}
                <Badge bg="secondary">after</Badge>.
              </p>

              <p>
                - The third index is optional and indicates a{" "}
                <Badge bg="secondary">prefix</Badge> to work the middleware in a
                more dynamic way.
              </p>

              <p>
                Take into account that if more than 3 parameters are added,
                these are left over and do not generate internal errors in their
                operation.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use App\\Http\\Controllers\\Home\\Example;\n\n" +
                  "Route::middleware(['no-auth'], function() {\n" +
                  "\tRoute::post('login', fn() => ['status' => 'success', 'message' => 'Hello world']);\n" +
                  "});\n\n" +
                  "// or\n\n" +
                  "Route::middleware(['no-auth'], function() {\n" +
                  "\tRoute::post('login', [Example::class, 'postMethod']);\n" +
                  "});\n\n" +
                  "// or\n\n" +
                  "Route::post('login', fn() => ['status' => 'success', 'message' => 'Hello world'], ['no-auth']);\n\n" +
                  "// or\n\n" +
                  "Route::post('login', [Example::class, 'postMethod'], ['no-auth']);\n\n" +
                  "// or\n\n" +
                  "Route::get('posts', 'https://jsonplaceholder.typicode.com/posts', ['middleware' => ['no-auth']]);"
                }
              />
            </div>
          ),
        },
        "get-routes": {
          title: "Route::getRoutes",
          link: "get-routes",
          description:
            "The `getRoutes` function returns an array with all available routes.",
          code: (
            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionRoute\\Route;\n\n" +
                "Route::get('routes-list', fn() => Route::getRoutes());"
              }
            />
          ),
        },
        "get-full-routes": {
          title: "Route::getFullRoutes",
          link: "get-full-routes",
          description:
            "The `getFullRoutes` function returns an array with all available routes (routes with parameters) and filters.",
          code: (
            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionRoute\\Route;\n\n" +
                "Route::get('routes-list', fn() => Route::getFullRoutes());"
              }
            />
          ),
        },
        "get-filters": {
          title: "Route::getFilters",
          link: "get-filters",
          description:
            "The `getFilters` function returns an array with all available filters.",
          code: (
            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionRoute\\Route;\n\n" +
                "Route::get('routes-filters', fn() => Route::getFilters());"
              }
            />
          ),
        },
      },
    },
  };
}
