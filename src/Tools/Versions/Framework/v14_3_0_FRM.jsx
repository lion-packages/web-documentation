import { Alert, Badge, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CodeBlock from "../../../pages/components/CodeBlock";
import GithubButton from "../../../pages/components/GithubButton";
import ListCommands from "../../../pages/components/ListCommands";

import { DiPhp } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

export default function v14_3_0_FRM(mdText) {
  return {
    changelog: {
      name: "Changelog",
      code: <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdText}</ReactMarkdown>,
    },
    commands: {
      name: "Commands",
      code: (
        <>
          <div className="mb-3">
            <h2 className="pb-2">AVAILABLE COMMANDS</h2>
            <hr />

            <ListCommands />
          </div>

          <div className="mb-3">
            <h2 className="pb-2">OPTIONAL PARAMETERS</h2>

            <Row>
              <Col xs={12} sm={12}>
                <CodeBlock
                  language={"powershell"}
                  content={"php lion serve --port 8001"}
                />
              </Col>

              <Col xs={12} sm={12}>
                <CodeBlock
                  language={"powershell"}
                  content={"php lion socket:serve socket_name --port 8081"}
                />
              </Col>

              <Col xs={12} sm={12}>
                <CodeBlock
                  language={"powershell"}
                  content={"php lion key:rsa --path folder-secret-key/"}
                />
              </Col>

              <Col xs={12} sm={12}>
                <CodeBlock
                  language={"powershell"}
                  content={
                    "php lion db:capsule --path forder_path/ --connection first_connection"
                  }
                />
              </Col>

              <Col xs={12} sm={12}>
                <CodeBlock
                  language={"powershell"}
                  content={"php lion db:all-capsules"}
                />
              </Col>

              <Col xs={12} sm={12}>
                <CodeBlock
                  language={"powershell"}
                  content={"php lion db:seed name_seed seed_name"}
                />
              </Col>

              <Col xs={12} sm={12}>
                <CodeBlock
                  language={"powershell"}
                  content={
                    "php lion db:seed name_seed seed\\namespace --run true"
                  }
                />
              </Col>

              <Col xs={12} sm={12}>
                <CodeBlock
                  language={"powershell"}
                  content={"php lion db:factory --path forder_path/"}
                />
              </Col>
            </Row>
          </div>

          <div className="mb-3">
            <h2 className="pb-2">ADD COMMANDS</h2>

            <p>
              You need to add the commands in the{" "}
              <Badge bg="secondary">app/Console/Kernel.php</Badge> array
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Console;\n\n" +
                "use Symfony\\Component\\Console\\Application;\n\n" +
                "class Kernel {\n\n" +
                "\tprivate array $commands = [\n" +
                "\t\tApp\\Console\\MyCustomCommand::class,\n" +
                "\t\tApp\\Console\\Framework\\ServerCommand::class,\n" +
                "\t\tApp\\Console\\Framework\\RunTestCommand::class,\n" +
                "..."
              }
            />
          </div>

          <div className="mb-3">
            <h2 className="pb-2">ADD SOCKETS COMMANDS</h2>

            <p>
              to execute a sockets from the console, it must be added in the
              sockets array in the Kernel.
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Console;\n\n" +
                "use Symfony\\Component\\Console\\Application;\n\n" +
                "class Kernel {\n\n" +
                "\tprivate array $commands = [\n\t\t// ...\n\t];\n\n" +
                "\tprivate array $socket_commands = [\n\t" +
                "\t// 'ExampleSocket' => App\\Http\\Sockets\\ExampleSocket::class\n" +
                "\t]\n" +
                "..."
              }
            />
          </div>
        </>
      ),
    },
    docker: {
      name: "Docker",
      code: (
        <>
          <div className="mb-3">
            <h2>DOCKER</h2>

            <p>
              Add the <strong>Dockerfile</strong> and{" "}
              <strong>docker-compose.yml</strong> to the root of the project, to
              create the container you must execute the command{" "}
              <strong>docker-compose up</strong>.
            </p>

            <CodeBlock
              language={"dockerfile"}
              content={
                "# Dockerfile \n" +
                "FROM php:8.2-apache \n" +
                "ARG DEBIAN_FRONTEND=noninteractive \n\n" +
                "RUN apt-get update  \n" +
                "&& apt-get install -y sendmail libpng-dev  \n" +
                "&& apt-get install -y libzip-dev  \n" +
                "&& apt-get install -y zlib1g-dev  \n" +
                "&& apt-get install -y libonig-dev  \n" +
                "&& rm -rf /var/lib/apt/lists/*  \n" +
                "&& docker-php-ext-install zip \n\n" +
                "RUN docker-php-ext-install mbstring \n" +
                "RUN docker-php-ext-install zip \n" +
                "RUN docker-php-ext-install gd \n" +
                "RUN docker-php-ext-install pdo_mysql \n" +
                "RUN docker-php-ext-install mysqli \n\n" +
                "COPY . . \n\n" +
                "RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \n" +
                "RUN a2enmod rewrite \n\n" +
                "CMD composer install \n" +
                "CMD php lion serve --host 0.0.0.0 --port 8000 \n" +
                "EXPOSE 8000 "
              }
            />

            <CodeBlock
              language={"yaml"}
              content={
                "# docker-compose.yml \n" +
                'version: "3.8"\n' +
                "services:\n" +
                "\tapp:\n" +
                "\t\tbuild:\n" +
                "\t\t\tcontext: .\n" +
                "\t\t\tdockerfile: Dockerfile\n" +
                "\t\tenv_file:\n" +
                "\t\t\t- .env\n" +
                "\t\tports:\n" +
                '\t\t\t- "8000:8000"\n' +
                "\t\tvolumes:\n" +
                "\t\t\t- ./:/var/www/html\n" +
                "\t\tdepends_on:\n" +
                "\t\t\t- db\n" +
                "\t\tnetworks:\n" +
                "\t\t\t- lion\n" +
                "\tdb:\n" +
                "\t\timage: mysql\n" +
                "\t\tcommand: --default-authentication-plugin=mysql_native_password\n" +
                "\t\tenvironment:\n" +
                "\t\t\tMYSQL_DATABASE: ${DB_NAME}\n" +
                "\t\t\tMYSQL_PASSWORD: ${DB_PASSWORD}\n" +
                "\t\t\tMYSQL_ROOT_PASSWORD: ${DB_PASSWORD}\n" +
                "\t\tports:\n" +
                '\t\t\t- "3306:3306"\n' +
                "\t\tvolumes:\n" +
                "\t\t\t- db_data:/var/lib/mysql\n" +
                "\t\tnetworks:\n" +
                "\t\t\t- lion\n" +
                "\tphpmyadmin:\n" +
                "\t\timage: phpmyadmin/phpmyadmin\n" +
                "\t\tlinks:\n" +
                "\t\t\t- db:db\n" +
                "\t\tports:\n" +
                '\t\t\t- "8080:80"\n' +
                "\t\tenvironment:\n" +
                "\t\t\tMYSQL_USER: ${DB_USER}\n" +
                "\t\t\tMYSQL_PASSWORD: ${DB_PASSWORD}\n" +
                "\t\t\tMYSQL_ROOT_PASSWORD: ${DB_PASSWORD}\n" +
                "\t\tnetworks:\n" +
                "\t\t\t- lion\n" +
                "volumes:\n" +
                "\tdb_data:\n" +
                "networks:\n" +
                "\tlion:"
              }
            />

            <p>
              The host of the connection to the databases must be established
              with the value <strong>DB_HOST=db</strong>
            </p>

            <CodeBlock
              language={"powershell"}
              content={
                "##################################################### \n" +
                "### DATABASE CONNECTIONS ------------------------ ### \n" +
                "##################################################### \n" +
                'DB_TYPE="mysql" \n' +
                "DB_HOST=db \n" +
                "DB_PORT=3306 \n" +
                'DB_NAME="lion_database" \n' +
                'DB_USER="root" \n' +
                'DB_PASSWORD="lion-framework"'
              }
            />

            <p>run the container</p>

            <CodeBlock language={"powershell"} content={"docker-compose up"} />
          </div>
        </>
      ),
    },
    database: {
      name: "Database",
      code: (
        <>
          <div className="mb-3">
            <h2 className="pb-2">DATABASE CONNECTION</h2>

            <hr />

            <p>
              To make a direct connection to the database, go to{" "}
              <Badge bg="secondary">config/database.php</Badge>, for more
              information read{" "}
              <Link
                to={"/libraries/lion/sql/index"}
                className="text-decoration-none"
              >
                Lion-SQL
              </Link>
              .
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "return [\n" +
                "\t'default' => 'first_connection',\n" +
                "\t'connections' => [\n" +
                "\t\t'first_connection' => [\n" +
                "\t\t\t'type' => 'mysql',\n" +
                "\t\t\t'host' => '127.0.0.1',\n" +
                "\t\t\t'port' => 3306,\n" +
                "\t\t\t'dbname' => 'example_1',\n" +
                "\t\t\t'user' => 'root',\n" +
                "\t\t\t'password' => ''\n" +
                "\t\t],\n" +
                "\t]\n" +
                "];"
              }
            />
          </div>
        </>
      ),
    },
    headers: {
      name: "Headers",
      code: (
        <>
          <div className="mb-3">
            <h2 className="pb-2">ADD HEADERS</h2>
            <hr />

            <p>
              Headers should be added per function in{" "}
              <Badge bg="secondary">routes/header.php</Badge> more information
              in{" "}
              <Link
                to={"/libraries/lion/request/index"}
                className="text-decoration-none"
              >
                Lion-Request
              </Link>
              .
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "LionRequest\\Request::header(\n" +
                "\t'Content-Type',\n" +
                "\t'application/json; charset=UTF-8'\n" +
                ");"
              }
            />
          </div>
        </>
      ),
    },
    request: {
      name: "Request",
      code: (
        <>
          <div className="mb-3">
            <h2>REQUEST</h2>
            <hr />

            <p>
              The <Badge bg={"secondary"}>capture</Badge> function of the{" "}
              <Badge bg={"secondary"}>Request</Badge> class is used in order to
              obtain the data sent in an HTTP request, the system internally
              initializes a <Badge bg={"secondary"}>request</Badge> constant to
              obtain the data. more information in{" "}
              <Link
                to={"/libraries/lion/request/index"}
                className="text-decoration-none"
              >
                Lion-Request
              </Link>
              .
            </p>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "define('request', LionRequest\\Request::getInstance()->capture()); // (object)"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5>EXAMPLE</h5>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "echo(\n" +
                "\trequest->users_name . ' ' . request->{'users_last-name'}\n" +
                ");"
              }
            />

            <p>equivalent to</p>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "echo(\n" +
                `\t$_POST['users_name'] . ' ' . $_POST['users_last-name']\n` +
                ");"
              }
            />
          </div>
        </>
      ),
    },
    response: {
      name: "Response",
      code: (
        <>
          <div className="mb-3">
            <h2>RESPONSE</h2>
            <hr />

            <p>
              The Response class implements different response functions on HTTP
              requests, the system internally initializes a{" "}
              <Badge bg={"secondary"}>response</Badge> constant to access the
              functions. more information in{" "}
              <Link
                to={"/libraries/lion/request/index"}
                className="text-decoration-none"
              >
                Lion-Request
              </Link>
              .
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
              content={
                "<?php\n\n" +
                "return response->success('message...');\n" +
                "// or \n" +
                "return success('message...');"
              }
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
          </div>

          <hr />

          <div className="mb-3">
            <h5>EXAMPLE #2</h5>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "return response->error('message...');\n" +
                "// or \n" +
                "return error('message...');"
              }
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
          </div>
        </>
      ),
    },
    rules: {
      name: "Rules",
      code: (
        <>
          <>
            <div className="mb-3">
              <h2>RULES</h2>

              <hr />

              <p>
                You can create rules from command line{" "}
                <Badge bg={"secondary"}>php lion new:rule rule_name</Badge>,
                rule usage is based on rules provided by{" "}
                <a
                  href="https://github.com/vlucas/valitron"
                  target={"_blank"}
                  className="text-decoration-none"
                >
                  vlucas/valitron
                </a>
                , you can set language response from environment variables with
                lang language preference to <Badge bg={"secondary"}>.env</Badge>{" "}
                more information in{" "}
                <Link
                  to={"/libraries/lion/security/index"}
                  className="text-decoration-none"
                >
                  Lion-Security
                </Link>
                .
              </p>
            </div>

            <div className="mb-3">
              <h5>EXAMPLE #1</h5>

              <CodeBlock
                language={"powershell"}
                content={"php lion new:rule EmailRule"}
              />

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" +
                  "namespace App\\Rules;\n\n" +
                  "use App\\Traits\\Framework\\ShowErrors;\n\n" +
                  "class EmailRule {\n\n" +
                  "\tuse ShowErrors;\n\n" +
                  '\tpublic static string $field = "users_email";\n' +
                  '\tpublic static string $desc = "this field applies a property of type email";\n\n' +
                  "\tpublic function passes(): void {\n" +
                  "\t\tself::validate(function(\\Valitron\\Validator $validator) {\n" +
                  "\t\t\t$validator\n\t\t\t\t->rule('required', self::$field)\n\t\t\t\t->message('custom message...');\n" +
                  "\t\t});\n" +
                  "\t}\n\n" +
                  "}"
                }
              />
            </div>
          </>

          <div className="mb-3">
            <h2>USE RULES</h2>

            <hr />

            <p>
              Add your rules to different routes in{" "}
              <Badge bg={"secondary"}>routes/rules.php</Badge>
            </p>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "return [\n" +
                "\t'/api/auth/signin' => [\n" +
                "\t\tApp\\Rules\\EmailRule::class\n" +
                "\t]\n" +
                "];"
              }
            />

            <p>You can reuse a rule in different routes.</p>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "return [\n" +
                "\t'/api/auth/signin' => [\n" +
                "\t\tApp\\Rules\\EmailRule::class\n" +
                "\t]\n" +
                "\t'/api/create-users' => [\n" +
                "\t\tApp\\Rules\\EmailRule::class\n" +
                "\t]\n" +
                "];"
              }
            />
          </div>
        </>
      ),
    },
    carbon: {
      name: "Carbon",
      code: (
        <>
          <div className="mb-3">
            <h2>CARBON</h2>

            <hr />

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
                "return success('my time! ' . Carbon::now()->format('Y-m-d H:i:s'));"
              }
            />
          </div>
        </>
      ),
    },
    routes: {
      name: "Routes",
      code: (
        <>
          <div>
            <div className="mb-3">
              <h2>ROUTES</h2>
              <hr />

              <p>
                <Link
                  to={"/libraries/lion/route/index"}
                  className="text-decoration-none"
                >
                  Lion-Route
                </Link>{" "}
                has been implemented for route handling, from the web you can
                add all the necessary routes for the operation of your web
                application <Badge bg={"secondary"}>routes/web.php</Badge>
              </p>
            </div>

            <div className="mb-3">
              <h4 className="pb-2">Example #1</h4>

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" +
                  "use App\\Http\\Controllers\\HomeController;\n\n" +
                  "Route::get('/', [HomeController::class, 'index']);\n" +
                  "// or\n" +
                  "Route::get('/', fn() => (new HomeController())->index());"
                }
              />
            </div>

            <div className="mb-3">
              <h4 className="pb-2">Example #2</h4>

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" + "Route::get('/', fn() => success('test'));"
                }
              />
            </div>
          </div>

          <hr />

          <div className="mb-3">
            <h2 className="pb-2">ROUTE LIST</h2>

            <p>
              To view the available routes, start the local server first, run
              the <Badge bg="secondary">php lion serve</Badge> command, and then
              view the routes.
            </p>

            <CodeBlock
              language={"powershell"}
              content={"php lion route:list"}
            />

            <Alert variant={"warning"}>
              Note: The routes are loaded with the server route{" "}
              <Badge bg="warning">SERVER_URL</Badge> set in{" "}
              <Badge bg="warning">.env</Badge>, modify this route to avoid
              errors in the execution of the process, in the file{" "}
              <Badge bg="warning">public/index.php</Badge> there is a public
              route which allows get the available routes from the terminal,
              comment this line once your web app is deployed.
            </Alert>
          </div>

          <div>
            <h2 className="pb-2">ROUTE POSTMAN</h2>
            <hr />

            <p>
              To export the available paths, first start the local server, then
              view the exported paths in{" "}
              <Badge bg="warning">storage/postman/</Badge>
            </p>

            <CodeBlock
              language={"powershell"}
              content={"php lion route:postman"}
            />

            <Alert variant={"warning"}>
              Note: The routes are loaded with the server route{" "}
              <Badge bg="warning">SERVER_URL</Badge> set in{" "}
              <Badge bg="warning">.env</Badge>, modify this route to avoid
              errors in the execution of the process, in the file{" "}
              <Badge bg="warning">public/index.php</Badge> there is a public
              route which allows get the available routes from the terminal,
              comment this line once your web app is deployed.
            </Alert>

            <p>
              If you want the POST, PUT and DELETE routes to be exported with
              dynamically required parameters these must have been declared as
              rules first, for each rule that is added it is recognized as a
              required parameter to send through an http request and it is
              exported in the postman collections.
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "// routes/rules.php\n\n" +
                "return [\n" +
                "\t\\App\\Rules\\MyRuleExample::class\n" +
                "];"
              }
            />
          </div>
        </>
      ),
    },
    controllers: {
      name: "Controllers",
      code: (
        <>
          <div className="mb-3">
            <h2>CONTROLLERS</h2>
            <hr />

            <CodeBlock
              language={"powershell"}
              content={"php lion new:controller HomeController"}
            />

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Http\\Controllers;\n\n" +
                "class HomeController {\n\n" +
                "\tpublic function __contruct() {\n\n" +
                "\t}\n\n" +
                "}"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <Alert variant={"warning"}>
              Note:You can create the model class immediately with the{" "}
              <Badge bg={"warning"}>--model</Badge> option.
            </Alert>

            <CodeBlock
              language={"powershell"}
              content={
                "php lion new:controller HomeController --model HomeModel"
              }
            />

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Http\\Controllers;\n\n" +
                "use App\\Models\\HomeModel;\n\n" +
                "class HomeController {\n\n" +
                "\tprivate HomeModel $homeModel;\n\n" +
                "\tpublic function __contruct() {\n" +
                "\t\t$this->homeModel = new HomeModel();\n" +
                "\t}\n\n" +
                "}"
              }
            />
          </div>
        </>
      ),
    },
    middleware: {
      name: "Middleware",
      code: (
        <>
          <div className="mb-3">
            <h2>CREATE MIDDLEWARE</h2>
            <hr />

            <CodeBlock
              language={"powershell"}
              content={"php lion new:middleware middleware_name"}
            />
          </div>

          <div className="mb-3">
            <h2>ADD FUNCTIONS</h2>
            <hr />

            <p>We can add the necessary functions in each middleware.</p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Http\\Middleware\\JWT;\n\n" +
                "class AuthorizationMiddleware {\n\n" +
                "\tpublic function __contruct() {\n\n" +
                "\t}\n\n" +
                "\tpublic function exist(): void {\n" +
                "\t\t$headers = apache_request_headers();\n\n" +
                "\t\tif (!isset($headers['Authorization'])) {\n" +
                "\t\t\tfinish(response->error('The JWT does not exist'));\n" +
                "\t\t}\n" +
                "\t}\n\n" +
                "\tpublic function authorize(): void {\n" +
                "\t\t$headers = apache_request_headers();\n\n" +
                "\t\tif (preg_match('/Bearers(S+)/', $headers['Authorization'], $matches)) {\n" +
                "\t\t\t$jwt = JWT::decode($matches[1]);\n\n" +
                "\t\t\tif ($jwt->status === 'error') {\n" +
                "\t\t\t\tfinish(response->error($jwt->message));\n" +
                "\t\t\t}\n" +
                "\t\t} else {\n" +
                "\t\t\tfinish(response->error('Invalid JWT'));\n" +
                "\t\t}\n" +
                "\t}\n\n" +
                "\tpublic function notAuthorize(): void {\n" +
                "\t\t$headers = apache_request_headers();\n\n" +
                "\t\tif (isset($headers['Authorization'])) {\n" +
                "\t\t\tfinish(response->error('User in session, You must close the session'));\n" +
                "\t\t}\n" +
                "\t}\n\n" +
                "}"
              }
            />
          </div>

          <div className="mb-3">
            <h2>ADD MIDDLEWARE</h2>
            <hr />

            <p>
              To import middleware to the routes we must first import the
              namespace of the middleware and inside this add an array to create
              custom middleware.{" "}
              <Badge bg={"secondary"}>routes/middleware.php</Badge>
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "LionRoute\\Route::addMiddleware([\n" +
                "\tApp\\Http\\Middleware\\JWT\\AuthorizationMiddleware::class => [\n" +
                "\t\t['name' => 'jwt-exist', 'method' => 'exist']\n" +
                "\t\t['name' => 'jwt-authorize', 'method' => 'authorize']\n" +
                "\t\t['name' => 'jwt-not-authorize', 'method' => 'notAuthorize']\n" +
                "\t]\n" +
                "]);"
              }
            />
          </div>

          <div className="mb-3">
            <h2>USE MIDDLEWARE</h2>
            <hr />

            <p>
              <Badge bg={"secondary"}>routes/web.php</Badge>
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "Route::middleware(['jwt-exist', 'jwt-authorize'], function() {\n" +
                "\tRoute::get('/', [HomeController::class, 'index']);\n\n" +
                "\t// or\n\n" +
                "\tRoute::get('/', function() {\n" +
                "\t\treturn (new HomeController())->index();\n" +
                "\t});\n" +
                "});"
              }
            />
          </div>
        </>
      ),
    },
    models: {
      name: "Models",
      code: (
        <>
          <h2>MODELS</h2>
          <hr />

          <div className="mb-3">
            <CodeBlock
              language={"powershell"}
              content={"php lion new:model HomeModel"}
            />

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Http\\Models;\n\n" +
                "use LionSql\\Drivers\\MySQL\\MySQL as DB;\n" +
                "use LionSql\\Drivers\\MySQL\\Schema;\n\n" +
                "class HomeModel {\n\n" +
                "\tpublic function __contruct() {\n\n\t}\n\n" +
                "}"
              }
            />
          </div>

          <div className="mb-3">
            <h5 className="pb-2 text-warning">SoftDeletes</h5>

            <p>
              to include the softdelete function you must include the
              SoftDeletes trait
            </p>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Http\\Models;\n\n" +
                "use LionSql\\Drivers\\MySQL\\MySQL as DB;\n" +
                "use LionSql\\Drivers\\MySQL\\Schema;\n" +
                "use App\\Traits\\Framework\\Database\\SoftDeletes;\n\n" +
                "class HomeModel {\n\n" +
                "\tuse SoftDeletes;\n\n" +
                "\tpublic function __contruct() {\n\n\t}\n\n" +
                "}"
              }
            />
          </div>
        </>
      ),
    },
    capsules: {
      name: "Capsules",
      code: (
        <>
          <>
            <div className="mb-3">
              <h2>CAPSULES</h2>
              <hr />

              <p>
                The capsules can be created in 2 ways, individually or in
                groups, previously the database connection credentials must be
                written from <Badge bg={"secondary"}>.env</Badge>, the capsules
                are mapped from the tables obtained from the database, along
                with their properties are written.
              </p>
            </div>

            <div className="mb-3">
              <h5>EXAMPLE #1</h5>

              <CodeBlock
                language={"powershell"}
                content={"php lion db:capsule table_name"}
              />

              <Alert variant={"warning"}>
                <strong>Note:</strong> Capsule classes by default are stored in
                the <Badge bg="warning">database/Class/</Badge> directory, you
                can change the path with the <Badge bg="warning">--path</Badge>{" "}
                option.
              </Alert>

              <Alert variant={"warning"}>
                <strong>Note:</strong> If you need to map entities from another
                database, specify the connection through the{" "}
                <Badge bg="warning">--connection</Badge> option.
              </Alert>

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" +
                  "namespace App\\Class;\r\n\n" +
                  "class TableName implements \\JsonSerializable {\n\n" +
                  "\tprivate ?int $id = null;\n" +
                  "\tprivate ?string $name = null;\n\n" +
                  "\tpublic function __contruct() {}\n\n" +
                  "\tpublic function jsonSerialize(): mixed {\n\t\treturn get_object_vars($this);\n\t}\n\n" +
                  "\tpublic function getId(): ?int {\n" +
                  "\t\treturn $this->id;\n" +
                  "\t}\n\n" +
                  "\tpublic function setId(?int $id): TableName {\n" +
                  "\t\t$this->id = $id;\n" +
                  "\t\treturn $this;\n" +
                  "\t}\n\n" +
                  "\tpublic function getName(): ?string {\n" +
                  "\t\treturn $this->name;\n" +
                  "\t}\n\n" +
                  "\tpublic function setName(?string $name): TableName {\n" +
                  "\t\t$this->name = $name;\n" +
                  "\t\treturn $this;\n" +
                  "\t}\n\n" +
                  "}"
                }
              />
            </div>

            <div className="mb-3">
              <h5>EXAMPLE #2</h5>

              <CodeBlock
                language={"powershell"}
                content={"php lion db:all-capsules"}
              />

              <Alert variant={"warning"}>
                Note: Capsule classes by default are stored in the{" "}
                <Badge bg="warning">database/Class/</Badge> directory,{" "}
                <Badge bg="warning">db:all-capsules</Badge> reads all the tables
                in the database, generating for each table its respective class
                along with its properties and functions.
              </Alert>

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" +
                  "namespace App\\Class;\r\n\n" +
                  "class TableName {/* ... */} \n\n" +
                  "class TableName2 {/* ... */} \n\n" +
                  "class TableName3 {/* ... */} \n\n"
                }
              />
            </div>
          </>

          <div className="mb-3">
            <h2>CREATE CUSTOM CAPSULES</h2>
            <hr />

            <p>
              create custom capsule classes with unique properties for different
              uses.
            </p>

            <CodeBlock
              language={"powershell"}
              content={"php lion new:capsule ClassName"}
            />
          </div>
        </>
      ),
    },
    factory: {
      name: "Factory",
      code: (
        <>
          <h2>FACTORY</h2>
          <hr />

          <CodeBlock
            language={"powershell"}
            content={"php lion db:factory UsersFactory"}
          />

          <CodeBlock
            langueage={"php"}
            content={
              "<?php\n\n" +
              "namespace Database\\Factories;\n\n" +
              "use App\\Traits\\Framework\\Faker;\n\n" +
              "class UsersFactory {\n\n" +
              "\tuse Faker;\n\n" +
              "\t/**\n" +
              "\t * ------------------------------------------------------------------------------\n" +
              "\t * Define the model's default state\n" +
              "\t * ------------------------------------------------------------------------------\n" +
              "\t **/\n" +
              "\tpublic static function definition(): array {\n" +
              "\t\treturn [Faker::get()->name()];\n" +
              "\t}\n\n" +
              "}"
            }
          />
        </>
      ),
    },
    seed: {
      name: "Seed",
      code: (
        <>
          <div className="mb-3">
            <h2 className="pb-2">CREATE SEED</h2>
            <hr />

            <CodeBlock
              language={"powershell"}
              content={"php lion db:seed UsersSeed"}
            />

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace Database\\Seeders;\n\n" +
                "use LionSql\\Drivers\\MySQL\\MySQL as DB;\n" +
                "use LionSql\\Drivers\\MySQL\\Schema;\n" +
                "use Database\\Factories\\UsersFactory;\n\n" +
                "class UsersSeed {\n\n" +
                "\t/**\n" +
                "\t * ------------------------------------------------------------------------------\n" +
                "\t * Seed the application's database\n" +
                "\t * ------------------------------------------------------------------------------\n" +
                "\t **/\n" +
                "\tpublic static function run(): object {\n" +
                "\t\treturn DB::call('stored_procedure_name', UsersFactory::definition())->execute();\n" +
                "\t}\n\n" +
                "}"
              }
            />
          </div>

          <div className="mb-3">
            <h2 className="pb-2">USE SEED</h2>
            <hr />

            <CodeBlock
              language={"powershell"}
              content={
                "php lion db:seed Database\\Seeders\\UsersSeed --run true"
              }
            />
          </div>
        </>
      ),
    },
    sockets: {
      name: "WebSockets",
      code: (
        <>
          <div className="mb-3">
            <h2 className="pb-2">CREATE SOCKET</h2>
            <hr />

            <p>
              websockets interact with the{" "}
              <a
                href="http://socketo.me/docs/"
                target="_blank"
                className="text-decoration-none"
              >
                Ratchet
              </a>{" "}
              library.
            </p>

            <CodeBlock
              language={"powershell"}
              content={"php lion new:socket NotificationsSocket"}
            />

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace Database\\Seeders;\n\n" +
                "use Ratchet\\ConnectionInterface;\n" +
                "use Ratchet\\MessageComponentInterface;\n" +
                "use \\SplObjectStorage;\n\n" +
                "class NotificationsSocket implements MessageComponentInterface {\n\n" +
                "\tprotected SplObjectStorage $clients;\n\n" +
                "\tpublic function __construct() {\n" +
                "\t\t$this->clients = new SplObjectStorage();\n" +
                "\t}\n\n" +
                "\tpublic function onOpen(ConnectionInterface $conn) {\n" +
                "\t\t$this->clients->attach($conn);\n" +
                "\t}\n\n" +
                "\tpublic function onMessage(ConnectionInterface $from, $msg) {\n" +
                "\t\tforeach ($this->clients as $client) {\n" +
                "\t\t\tif ($from !== $client) {\n" +
                "\t\t\t\t$client->send($msg);\n" +
                "\t\t\t}\n\t\t}\n" +
                "\t}\n\n" +
                "\tpublic function onClose(ConnectionInterface $conn) {\n" +
                "\t\t$this->clients->detach($conn);\n" +
                "\t}\n\n" +
                "\tpublic function onError(ConnectionInterface $conn, \\Exception $e) {\n" +
                "\t\t$conn->close();\n" +
                "\t}\n\n" +
                "}"
              }
            />
          </div>

          <div className="mb-3">
            <h2 className="pb-2">ADD SOCKETS</h2>
            <hr />

            <p>
              to execute a sockets from the console, it must be added in the
              sockets array in the Kernel.
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Console;\n\n" +
                "use Symfony\\Component\\Console\\Application;\n\n" +
                "class Kernel {\n\n" +
                "\tprivate array $commands = [\n\t\t// ...\n\t];\n\n" +
                "\tprivate array $socket_commands = [\n\t" +
                "\t// 'ExampleSocket' => App\\Http\\Sockets\\ExampleSocket::class\n" +
                "\t]\n" +
                "..."
              }
            />
          </div>

          <div className="mb-3">
            <h2 className="pb-2">USE SOCKETS</h2>
            <hr />

            <p>
              to execute a socket you must do it from the console, you can
              configure a different port with the{" "}
              <Badge bg="secondary">--port</Badge> option.
            </p>

            <Row>
              <Col xs={12} sm={12} md={6}>
                <CodeBlock
                  language={"php"}
                  content={"php lion socket:serve SocketClass"}
                />
              </Col>

              <Col xs={12} sm={12} md={6}>
                <CodeBlock
                  language={"php"}
                  content={"php lion socket:serve SocketClass --port 8081"}
                />
              </Col>
            </Row>
          </div>
        </>
      ),
    },
    helpers: {
      name: "Helpers",
      code: (
        <>
          <h2>HELPERS</h2>
          <hr />

          <Row>
            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">fetch</h5>

                <p>
                  The fetch helper allows you to make http requests, internally
                  with guzzle http.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "fetch('GET', 'my-url.com');"}
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">fetchXML</h5>

                <p>
                  The get helper allows you to make http requests to get xml in
                  String format, internally with http guzzle.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "fetchXML('GET', 'my-url.com');"}
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">storage_path</h5>

                <p>
                  The storage_path helper allows access to directories and files
                  in the storage directory.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionFiles\\Store;\n\n" +
                    "Store::view(storage_path('files/'));"
                  }
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">finish</h5>

                <p>The finish helper ends the execution of all processes.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "finish(success('my response'));"}
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">success</h5>

                <p>Function to display a success response.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "return success('message');"}
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">error</h5>

                <p>Function to display a error response.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "return error('message');"}
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">warning</h5>

                <p>Function to display a warning response.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "return warning('message');"}
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">info</h5>

                <p>Function to display a info response.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "return info('message');"}
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">vd</h5>

                <p>The helper vd executes the function var_dump.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "vd(success('finished'));"}
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">json</h5>

                <p>The json helper converts any value to json.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "json(['name' => 'Sleon']);"}
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">logger</h5>

                <p>
                  The logger helper generates a log file stored in{" "}
                  <strong>storage/logs/</strong> and implements Monolog
                  internally.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" +
                    "logger('lorem ipsum dolor sit amet...'); // default info\n" +
                    "logger('lorem ipsum dolor sit amet...', 'error');\n" +
                    "logger('lorem ipsum dolor sit amet...', 'warning', ['name' => 'Sleon']);"
                  }
                />
              </div>
            </Col>
          </Row>
        </>
      ),
    },
    example: {
      name: "Example",
      code: (
        <div>
          <h2>DEVELOPMENT EXAMPLES</h2>
          <hr />

          <div className="mb-3">
            <h5>#1 CHAT</h5>

            <p>
              Development of a practical example of the use of Lion-Framework
              and ReactJS to carry out a real-time chat.
            </p>

            <GithubButton
              url={"https://github.com/Sleon4/chat-php"}
              variantButton={"outline-light"}
              className="me-4"
            >
              <DiPhp className="ms-2" size={"2em"} />
            </GithubButton>

            <GithubButton
              url={"https://github.com/Sleon4/chat-react"}
              variantButton={"outline-light"}
            >
              <FaReact className="ms-2" size={"2em"} />
              <SiVite className="ms-2" size={"2em"} />
            </GithubButton>
          </div>
        </div>
      ),
    },
  };
}
