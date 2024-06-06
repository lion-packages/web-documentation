import { Alert, Badge, Col, ListGroup, Row } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";
import Description from "../../../../pages/components/Description";
import { Fragment } from "react";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Title from "../../../../pages/components/Title";
import Example from "../../../../pages/components/Example";
import { Link } from "react-router-dom";

export default function v11_LRT() {
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
                  "Tshis library has quick router usage with regular expressions."
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

              <Description
                description={
                  <Fragment>
                    Lion-Framework supports PHP versions{" "}
                    <label className="text-warning">(8.3)</label>
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"composer require lion/route"}
              />

              <Alert variant="info">
                <strong>Note: </strong>If you need to manipulate rules on your
                controller methods, install the following dependencies.
              </Alert>

              <CodeBlock
                language={"bash"}
                content={
                  "composer require lion/route lion/exceptions lion/request lion/security"
                }
              />
            </Fragment>
          ),
        },
        resources: {
          name: "Resources",
          code: (
            <Fragment>
              <Title title={".htaccess"} />

              <CodeBlock
                language={"apache"}
                content={`<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>`}
              />
            </Fragment>
          ),
        },
      },
    },
    route: {
      name: "Route::class",
      type: "sub_modules",
      list: {
        "add-middleware": {
          name: "addMiddleware",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"addMiddleware"} />

              <Description
                description={
                  "The addMiddleware function allows you to add methods of middleware classes to the filter pool."
                }
              />

              <Fragment>
                <Title title={"Create Classes"} />

                <CodeBlock
                  language="php"
                  content={`<?php

namespace App\\Http\\Middleware;

use Exception;

class Auth
{
    /**
     * Handle an incoming request.
     *
     * @return void
     *
     * @throws Exception
     */
    public function auth(): void
    {
        if (!isset($_SESSION['user_session'])) {
            throw new Exception('Unauthorized');
        }
    }
}`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Add Middleware"} />

                <CodeBlock
                  language="php"
                  content={`<?php

use Lion\\Bundle\\Middleware\\RouteMiddleware;
use Lion\\Route\\Route;

Route::addMiddleware([
    new Middleware('auth-filter', Auth::class, 'auth'),
]);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        any: {
          name: "any",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"any"} />

              <Description
                description={
                  "The any function allows you to create an http route for any type of http request."
                }
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::any('users', function() {
    return (new UsersController())
        ->method();
});

Route::dispatch();
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::any('users', [UsersController::class, 'method']);

Route::dispatch();
`}
              />
            </Fragment>
          ),
        },
        init: {
          name: "init",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"init"} />

              <Description
                description={
                  "The init function initializes the http routing service."
                }
              />

              <Fragment>
                <p>Start your development server:</p>

                <Row>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <h5>Lion-Framework</h5>

                    <CodeBlock
                      language="powershell"
                      content={"php lion serve"}
                    />
                  </Col>

                  <Col xs={12} sm={12} md={12} lg={6}>
                    <h5>Local machine</h5>

                    <CodeBlock
                      language="powershell"
                      content={"php -S 127.0.0.1:8000"}
                    />
                  </Col>
                </Row>
              </Fragment>

              <Fragment>
                <p>
                  It is recommended to start the development server yourself,
                  since software such as{" "}
                  <strong>
                    XAMPP, WampServer, BitNami WAMP Stack, Apache Lounge... etc
                  </strong>
                  , provide directories in which to load your PHP projects, This
                  results in running on the browser routes as{" "}
                  <strong>'localhost/MyProject/example'</strong>. This generates
                  a conflict since the route obtained comes by default as{" "}
                  <strong>'MyProject/example'</strong>, something completely
                  wrong. You can solve it by indicating from which parameter the
                  URL can be obtained from the <strong>Route::init()</strong>{" "}
                  method.
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
                    "use Lion\\Route\\Route;\n\n" +
                    "Route::init(1);\n"
                  }
                />
              </Fragment>
            </Fragment>
          ),
        },
        delete: {
          name: "delete",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"delete"} />

              <Description
                description={
                  "The delete function allows you to create an http route or make an http delete request."
                }
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::delete('users/{idusers}', function($idusers) {
    return (new UsersController())
        ->method($idusers);
});

Route::dispatch();
`}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::delete('users/{idusers}', [UsersController::class, 'method']);

Route::dispatch();
`}
              />
            </Fragment>
          ),
        },
        get: {
          name: "get",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"get"} />

              <Description
                description={
                  "The get function allows you to create an http route or make an http get request."
                }
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::get('users', function() {
    return (new UsersController())
        ->method();
});

Route::dispatch();
`}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::get('users', [UsersController::class, 'method']);

Route::dispatch();
`}
              />

              <Example
                number={3}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::get('users/{idusers}', [UsersController::class, 'method']);

Route::dispatch();
`}
              />
            </Fragment>
          ),
        },
        "get-filters": {
          name: "getFilters",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"getFilters"} />

              <Description
                description={
                  "The getFilters function returns an array with all available filters."
                }
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use Lion\\Route\\Route;\n\n" +
                  "Route::get('routes-filters', fn() => Route::getFilters());\n"
                }
              />
            </Fragment>
          ),
        },
        "get-full-routes": {
          name: "getFullRoutes",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"getFullRoutes"} />

              <Description
                description={
                  "The getFullRoutes function returns an array with all available routes (routes with parameters) and filters."
                }
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use Lion\\Route\\Route;\n\n" +
                  "Route::get('routes-list', fn() => Route::getFullRoutes());\n"
                }
              />
            </Fragment>
          ),
        },
        "get-routes": {
          name: "getRoutes",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"getRoutes"} />

              <Description
                description={
                  "The getRoutes function returns an array with all available routes."
                }
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use Lion\\Route\\Route;\n\n" +
                  "Route::get('routes-list', fn() => Route::getRoutes());\n"
                }
              />
            </Fragment>
          ),
        },
        match: {
          name: "match",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"match"} />

              <Description
                description={
                  "The match function allows you to create an http route for any type of http request."
                }
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::match(['get', 'post'], 'users', function() {
    return (new UsersController())
        ->createUsers();
});

Route::dispatch();
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::match(['get', 'post'], 'users', [UsersController::class, 'createUsers']);

Route::dispatch();
`}
              />
            </Fragment>
          ),
        },
        middleware: {
          name: "middleware",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"middleware"} />

              <Description
                description={
                  "The middleware function allows creating and grouping routes using filters."
                }
              />

              <Fragment>
                <h5 className="text-warning">Use Middleware</h5>

                <p>
                  It is identical to filters, we change the name of filter to
                  middleware.
                  {"['name' => 'auth', 'method' => 'auth']"} is the basic syntax
                  for adding middleware to our RouteCollector object. Each
                  middleware must be encapsulated in an array, where each
                  middleware carries its information within another array. The
                  first parameter is the name of the middleware. The second
                  parameter is the name of the function it belongs to.
                </p>
              </Fragment>

              <hr />

              <Example
                number={1}
                language="php"
                content={`<?php

use App\\Http\\Controllers\\Home\\Example;
use Lion\\Route\\Route;

Route::middleware(['no-auth', 'prefix' => 'api'], function() {
    Route::post('login', fn() => ['status' => 'success', 'message' => 'Hello world']);
});
`}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use App\\Http\\Controllers\\Home\\Example;
use Lion\\Route\\Route;

Route::middleware(['no-auth'], function() {
    Route::post('login', fn() => ['status' => 'success', 'message' => 'Hello world']);
});

// or

Route::middleware(['no-auth'], function() {
    Route::post('login', [Example::class, 'postMethod']);
});

// or

Route::post('login', fn() => ['status' => 'success', 'message' => 'Hello world'], ['no-auth']);

// or

Route::post('login', [Example::class, 'postMethod'], ['no-auth']);
`}
              />
            </Fragment>
          ),
        },
        patch: {
          name: "patch",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"patch"} />

              <Description
                description={
                  "The patch function allows you to create an http route or make an http patch request."
                }
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::patch('users', function() {
    return 'ok';
});

Route::dispatch();
              `}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::patch('users/{idusers}', [UsersController::class, 'patchUsers']);

Route::dispatch();
              `}
              />
            </Fragment>
          ),
        },
        post: {
          name: "post",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"post"} />

              <Description
                description={
                  "The post function allows you to create an http route or make an http post request."
                }
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::post('users', function() {
    return (new UsersController())
        ->method();
});

Route::dispatch();
`}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::post('users', [UsersController::class, 'method']);

Route::dispatch();
`}
              />

              <Example
                number={3}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::post('users/{idusers}', [UsersController::class, 'method']);

Route::dispatch();
`}
              />
            </Fragment>
          ),
        },
        put: {
          name: "put",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"put"} />

              <Description
                description={
                  "The put function allows you to create an http route or make an http put request."
                }
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::put('users', function() {
    return (new UsersController())
        ->method();
});

Route::dispatch();
`}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::put('users', [UsersController::class, 'method']);

Route::dispatch();
`}
              />

              <Example
                number={3}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::put('users/{idusers}', [UsersController::class, 'method']);

Route::dispatch();
`}
              />
            </Fragment>
          ),
        },
        prefix: {
          name: "prefix",
          code: (
            <Fragment>
              <LibraryTitle className={"Route"} methodName={"prefix"} />

              <Description
                description={"The prefix function allows grouping routes."}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::prefix('api', function() {
    Route::get('users', [UsersController::class, 'method']);
});

Route::dispatch();
`}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use Lion\\Route\\Route;
use App\\Http\\Controllers\\UsersController;

Route::init();

Route::prefix('api', function() {
    Route::get('users', [UsersController::class, 'method']);

    Route::prefix('reports', function() {
        Route::post('pdf', [UsersController::class, 'pdfExport']);
        Route::post('word', [UsersController::class, 'wordExport']);
    });
});

Route::dispatch();
              `}
              />
            </Fragment>
          ),
        },
        rules: {
          name: "rules",
          code: (
            <Fragment>
              <Title title={"Rules"} />

              <Description
                description={
                  <Fragment>
                    The rules function allows you to add validation rules to
                    your controllers, rule usage is based on rules provided by{" "}
                    <a
                      href="https://github.com/vlucas/valitron"
                      target={"_blank"}
                      className="text-decoration-none"
                    >
                      vlucas/valitron
                    </a>
                    , more information in{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Security
                    </Link>
                    .
                  </Fragment>
                }
              />

              <Fragment>
                <Title title={"Create your own rules"} />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php
  
declare(strict_types=1);

namespace App\\Rules;

use Lion\\Route\\Helpers\\Rules;
use Lion\\Route\\Interface\\RulesInterface;
use Valitron\\Validator;

/**
 * Class ExampleRule
 *
 * @package App\\Rules
 */
class ExampleRule extends Rules implements RulesInterface
{
    /**
     * {@inheritdoc}
     */
    public function passes(): void
    {
        $this->validate(function (Validator $validator): void {
            $validator
                ->rule('required', 'example')
                ->message('the "example" property is required');
        });
    }
}
`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Use your own rules"} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

namespace App\\Http\\Controllers;

use Lion\\Request\\Http;
use Lion\\Request\\Status;
use Lion\\Route\\Attributes\\Rules;
use stdClass;

/**
 * Description
 *
 * @package App\\Http\\Controllers
 */
class ExampleController
{
    /**
     * Description
     *
     * @return object
     */
    #[Rules(ExampleRule::class)]
    public function example(): stdClass
    {
        return (object) [
          'code' => Http::OK,
          'status' => Status::SUCCESS,
          'message' => '...',
        ];
    }
}`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Create your web route"} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

use App\\Http\\Controllers\\ExampleController;
use Lion\\Route\\Route;

Route::post('example', [ExampleController::class, 'example']);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
  };
}
