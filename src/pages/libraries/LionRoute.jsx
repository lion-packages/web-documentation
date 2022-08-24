import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ListTabs from "../components/ListTabs";
import Badge from "react-bootstrap/Badge";

function LionRoute() {
  const [items, setItems] = useState([
    {
      event: "getting-started",
      name: "Getting started",
    },
    {
      event: "defining-routes",
      name: "Defining Routes",
    },
    {
      event: "example-methods",
      name: "Example Methods",
    },
    {
      event: "middleware",
      name: "Middleware"
    },
    {
      event: 'prefix-group',
      name: 'Prefix Group'
    },
    {
      event: 'redirect',
      name: 'Redirect'
    },
    {
      event: "credits-license",
      name: "Credits and license",
    },
  ]);

  const [panes, setPanes] = useState([
    {
      event: "getting-started",
      content: (
        <>
          <div className="mb-4">
            <h2 className="pb-2">Lion-Route</h2>

            <p>
              This library has a quick use of the router with regular
              expressions based on{" "}
              <a href="https://github.com/mrjgreen/phroute" target={"_blank"}>
                phroute
              </a>
              .
            </p>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">INSTALL</h4>

            <CodeBlock
              language="powershell"
              content={"composer require lion-framework/lion-route"}
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">HTACCESS</h4>

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

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">USAGE</h4>

            <p>Start your development server.</p>

            <CodeBlock
              language="powershell"
              content={"php -S 127.0.0.1:8000"}
            />

            <p>
              It is recommended to start the development server yourself, since
              software such as{" "}
              <Badge bg="secondary">
                XAMPP, WampServer, BitNami WAMP Stack, Apache Lounge... etc
              </Badge>
              , provide directories in which to load your PHP projects, This
              results in running on the browser routes as
              <Badge bg="secondary">'localhost/MyProject/example'</Badge>. This
              generates a conflict since the route obtained comes by default as{" "}
              <Badge bg="secondary">'MyProject/example'</Badge>, something
              completely wrong. You can solve it by indicating from which
              parameter the URL can be obtained from the{" "}
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
                "Route::init(1);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "defining-routes",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">DEFINING ROUTES</h4>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                'require_once("vendor/autoload.php");\n\n' +
                "use LionRoute\\Route;\n\n" +
                "Route::init();\n" +
                "Route::any('/', fn() => ['status' => 'success', 'message' => 'Hello world']);\n" +
                "Route::dispatch();"
              }
            />
          </div>

          <hr />

          <div className="mb-4">
            <h4 className="pb-2">DEFINITION OF ROUTE TYPES</h4>

            <CodeBlock
              language="php"
              content={
                "Route::get($route, $handler);\n" +
                "Route::post($route, $handler);\n" +
                "Route::put($route, $handler);\n" +
                "Route::delete($route, $handler);\n" +
                "Route::head($route, $handler);\n" +
                "Route::options($route, $handler);\n" +
                "Route::patch($route, $handler);\n\n" +
                "Route::any($route, $handler);\n" +
                "Route::match($route, $handler);\n"
              }
            />

            <p>
              This method accepts the HTTP method the route must match, the
              route pattern and a callable handler, which can be a closure,
              function name or{" "}
              <Badge bg="secondary">['ClassName', 'method']</Badge>.{" "}
              <a
                href="https://github.com/mrjgreen/phroute#defining-routes"
                target={"_blank"}
              >
                more information in...
              </a>
            </p>
          </div>

          <hr />

          <div className="mb-4">
            <h4 className="pb-2">REGEX SHORTCUTS</h4>

            <CodeBlock
              language=""
              content={
                ":i => :/d+\t# numbers only\n" +
                ":a => :[a-zA-Z0-9]+\t# alphanumeric\n" +
                ":c => :[a-zA-Z0-9+_-.]+\t# alnumnumeric and + _ - . characters\n" +
                ":h => :[a-fA-F0-9]+\t# hex\n\n" +
                "use in routes:\n" +
                "'/user/{name:i}'\n" +
                "'/user/{name:a}'\n"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "example-methods",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">EXAMPLE METHODS</h4>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">GET</h4>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use App\\Http\\Controllers\\Home\\Example;\n\n" +
                "Route::get('example-url', function() {\n" +
                "\t$get = new Example();\n" +
                "\treturn $get->getMethod();\n" +
                "});"
              }
            />

            <p>OR</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "Route::get('example-url', [Example::class, 'getMethod']);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">POST</h4>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use App\\Http\\Controllers\\Home\\Example;\n\n" +
                "Route::post('example-url', function() {\n" +
                "\t$post = new Example();\n" +
                "\treturn $post->postMethod();\n" +
                "});"
              }
            />

            <p>OR</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "Route::post('example-url', [Example::class, 'postMethod']);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">PUT</h4>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use App\\Http\\Controllers\\Home\\Example;\n\n" +
                "Route::put('example-url', function() {\n" +
                "\t$put = new Example();\n" +
                "\treturn $put->putMethod();\n" +
                "});"
              }
            />

            <p>OR</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "Route::put('example-url', [Example::class, 'putMethod']);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">DELETE</h4>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use App\\Http\\Controllers\\Home\\Example;\n\n" +
                "Route::delete('example-url', function() {\n" +
                "\t$delete = new Example();\n" +
                "\treturn $delete->deleteMethod();\n" +
                "});"
              }
            />

            <p>OR</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "Route::delete('example-url', [Example::class, 'deleteMethod']);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">ANY</h4>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use App\\Http\\Controllers\\Home\\Example;\n\n" +
                "Route::any('example-url', function() {\n" +
                "\t$any = new Example();\n" +
                "\treturn $any->anyMethod();\n" +
                "});"
              }
            />

            <p>OR</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "Route::any('example-url', [Example::class, 'anyMethod']);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: 'middleware',
      content: (
        <>
          <div className="mb-4">
            <h2 className="pb-2">Middleware</h2>

            <p>
              It is identical to filters, we change the name of filter to middleware.
              <Badge bg="secondary">{"['name' => 'auth', 'method' => 'auth']"}</Badge> is the basic
              syntax for adding middleware to our RouteCollector object. Each middleware must be
              encapsulated in an array, where each middleware carries its information within
              another array. The first parameter is the name of the middleware. The second
              parameter is the name of the function it belongs to.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionRoute\\Route;\n" +
                "use App\\Http\\Middleware\\Auth;\n\n" +
                "Route::init();\n\n" +
                "Route::newMiddleware([\n" +
                "\tAuth::class => [\n" +
                "\t\t['name' => 'auth', 'method' => 'auth'],\n" +
                "\t\t['name' => 'no-auth', 'method' => 'noAuth']\n" +
                "\t]\n]);\n\n" +
                "Route::dispatch();"
              }
            />

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

            <p>
              When calling <Badge bg="secondary">Route::middleware()</Badge> keep in mind that
              the first parameter is an array loaded with data.
            </p>

            <p>
              The first index is the middleware at position <Badge bg="secondary">before</Badge>.
            </p>

            <p>
              The second index is optional and points to <Badge bg="secondary">after</Badge>.
            </p>

            <p>
              The third index is optional and indicates a <Badge bg="secondary">prefix</Badge> to
              work the middleware in a more dynamic way.
            </p>

            <p>
              Take into account that if more than 3 parameters are added, these are left
              over and do not generate internal errors in their operation.
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
                "Route::post('login', [Example::class, 'postMethod'], ['no-auth']);"
              }
            />
          </div>
        </>
      )
    },
    {
      event: 'prefix-group',
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">PREFIX GROUP</h4>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "Route::prefix('authenticate', function() {\n" +
                "\tRoute::post('login', fn() => ['status' => 'success', 'message' => 'Hello world']);\n" +
                "});\n\n" +
                "Route::prefix('reports', function() {\n" +
                "\tRoute::middleware(['auth'], function() {\n" +
                "\t\tRoute::post('excel', [Example::class, 'excelMethod']);\n" +
                "\t\tRoute::post('word', [Example::class, 'wordMethod']);\n" +
                "\t\tRoute::post('power-point', [Example::class, 'powerPointMethod']);\n" +
                "\t});\n\n" +
                "\tRoute::post('pdf', [Example::class, 'pdfMethod']);\n" +
                "});"
              }
            />
          </div>
        </>
      )
    },
    {
      event: 'redirect',
      content: (
        <>
          <div className="mb-4">
            <h2 className="pb-2">REDIRECT</h2>

            <p>
              the <Badge bg="secondary">redirect</Badge> function allows you to redirect to a
              specific url.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "Route::redirect('http://127.0.0.1:8001/example');"
              }
            />
          </div>
        </>
      )
    },
    {
      event: "credits-license",
      content: (
        <>
        <div className="mb-4">
            <h3 className="pb-2">CREDITS</h3>
            <p>
              <a
                href="https://github.com/mrjgreen/phroute"
                target="_blank"
              >
                PHRoute
              </a>
            </p>
          </div>

          <div className="mb-3">
            <h3 className="pb-2">LICENSE</h3>
            <p>
              Copyright © 2022{" "}
              <a
                href="https://github.com/Sleon4/Lion-Route/blob/main/LICENSE"
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

export default LionRoute;
