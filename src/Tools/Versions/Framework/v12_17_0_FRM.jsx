import { Alert, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import CodeBlock from "../../../pages/components/CodeBlock";
import ListCommands from "../../../pages/components/ListCommands";

export default function v12_17_0_FRM() {
  return {
    commands: {
      name: "Commands",
      code: (
        <>
          <div className="mb-3">
            <h2 className="pb-2">AVAILABLE COMMANDS</h2>
            <hr />

            <ListCommands />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">ADD COMMANDS</h4>

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

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">OPTIONAL PARAMETERS</h4>

            <CodeBlock
              language={"php"}
              content={
                "php lion serve --port 8001\n" +
                "php lion key:rsa --path storage/other-secret-key/\n" +
                "php lion db:capsule --path forder_path/\n" +
                "php lion db:all-capsules --path forder_path/\n" +
                "php lion db:seed name_seed --run true|false --iterate 1+\n" +
                "php lion db:factory --path forder_path/\n"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">ROUTE LIST</h4>

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
              in <Link to={"/libraries/request"}>Lion-Request</Link>
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "LionRequest\\Request::header('Content-Type', 'application/json; charset=UTF-8');\n" +
                "LionRequest\\Request::header('Access-Control-Allow-Origin', '*');\n" +
                "LionRequest\\Request::header('Access-Control-Max-Age', 3600);\n" +
                "LionRequest\\Request::header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');\n" +
                "LionRequest\\Request::header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');\n"
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
              <Link to={"/libraries/request"}>Lion-Request</Link>
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
          <div className="mb-3">
            <h2>RULES</h2>
            <hr />

            <p>
              You can create rules from command line{" "}
              <Badge bg={"secondary"}>php lion new:rule rule_name</Badge>, rule
              usage is based on rules provided by{" "}
              <a href="https://github.com/vlucas/valitron" target={"_blank"}>
                vlucas/valitron
              </a>
              , you can set language response from environment variables with
              lang language preference to <Badge bg={"secondary"}>.env</Badge>.
            </p>

            <p>
              more information in{" "}
              <Link to={"/libraries/security"}>SECURITY</Link>.
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
                "\tpublic function passes(): void {\n" +
                "\t\tself::validate(function(\\Valitron\\Validator $validator) {\n" +
                "\t\t\t$validator\n\t\t\t\t->rule('required', 'users_email')\n\t\t\t\t->message('custom message...');\n" +
                "\t\t});\n" +
                "\t}\n\n" +
                "}"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5>USE RULES</h5>

            <p>
              Add your rules to different routes in{" "}
              <Badge bg={"secondary"}>routes/rules.php</Badge>.
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
                "return response->success('my time! ' . Carbon::now()->format('Y-m-d H:i:s'));"
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
          <div className="mb-3">
            <h2>ROUTES</h2>
            <hr />

            <p>
              <Link to={"/libraries/route"}>Lion-Route</Link> has been
              implemented for route handling. More information at{" "}
              <Link to={"/libraries/route"}>Lion-Route</Link>, from the web you
              can add all the necessary routes for the operation of your web
              application <Badge bg={"secondary"}>routes/web.php</Badge>.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">Example #1</h4>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "use App\\Http\\Controllers\\HomeController;\n\n" +
                "Route::get('/', [HomeController::class, 'index']);\n\n" +
                "// or\n\n" +
                "Route::get('/', function() {\n" +
                "\treturn (new HomeController())->index();\n" +
                "});"
              }
            />
          </div>

          <div className="mb-3">
            <h4 className="pb-2">Example #2</h4>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "Route::get('/', function() {\n" +
                "\treturn response->success('test');\n" +
                "});"
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
        </>
      ),
    },
    middleware: {
      name: "Middleware",
      code: (
        <>
          <h2>MIDDLEWARE</h2>
          <hr />

          <div className="mb-3">
            <h4>ADD FUNCTIONS</h4>

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

          <hr />

          <div className="mb-3">
            <h4>ADD MIDDLEWARE</h4>

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
                "LionRouteRoute::addMiddleware([\n" +
                "\tApp\\Http\\Middleware\\JWT\\AuthorizationMiddleware::class => [\n" +
                "\t\t['name' => 'jwt-exist', 'method' => 'exist']\n" +
                "\t\t['name' => 'jwt-authorize', 'method' => 'authorize']\n" +
                "\t\t['name' => 'jwt-not-authorize', 'method' => 'notAuthorize']\n" +
                "\t]\n" +
                "]);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4>USE MIDDLEWARE</h4>

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

          <CodeBlock
            language={"powershell"}
            content={"php lion new:model HomeModel"}
          />

          <CodeBlock
            langueage={"php"}
            content={
              "<?php\n\n" +
              "namespace App\\Http\\Models;\n\n" +
              "use LionSql\\Drivers\\MySQL as DB;\n\n" +
              "class HomeModel {\n\n" +
              "\tpublic function __contruct() {\n\n" +
              "\t}\n\n" +
              "}"
            }
          />
        </>
      ),
    },
    capsules: {
      name: "Capsules",
      code: (
        <>
          <div className="mb-3">
            <h4>CAPSULES</h4>
            <hr />

            <p>
              The capsules can be created in 2 ways, individually or in groups,
              previously the database connection credentials must be written
              from <Badge bg={"secondary"}>.env</Badge>, the capsules are mapped
              from the tables obtained from the database, along with their
              properties are written.
            </p>
          </div>

          <div className="mb-3">
            <h5>EXAMPLE #1</h5>

            <CodeBlock
              language={"powershell"}
              content={"php lion db:capsule table_name"}
            />

            <Alert variant={"warning"}>
              Note: Capsule classes by default are stored in the{" "}
              <Badge bg="warning">database/Class/</Badge> directory, you can
              change the path with the <Badge bg="warning">--path</Badge>{" "}
              option.
            </Alert>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Class;\r\n\n" +
                "class TableName implements JsonSerializable {\n\n" +
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

          <hr />

          <div className="mb-3">
            <h5>EXAMPLE #2</h5>

            <CodeBlock
              language={"powershell"}
              content={"php lion db:all-capsules"}
            />

            <Alert variant={"warning"}>
              Note: Capsule classes by default are stored in the{" "}
              <Badge bg="warning">database/Class/</Badge> directory, you can
              change the path with the <Badge bg="warning">--path</Badge>{" "}
              option, <Badge bg="warning">db:all-capsules</Badge> reads all the
              tables in the database, generating for each table its respective
              class along with its properties and functions.
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

          <hr />

          <div className="mb-3">
            <h5>CREATE CUSTOM CAPSULES</h5>

            <p>create custom capsule classes</p>

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
              "use Faker\\Factory;\n\n" +
              "class UsersFactory {\n\n" +
              "\t/**\n" +
              "\t * ------------------------------------------------------------------------------\n" +
              "\t * Define the model's default state\n" +
              "\t * ------------------------------------------------------------------------------\n" +
              "\t **/\n" +
              "\tpublic static function definition(): array {\n" +
              "\t\t$faker = Factory::create();\n\n" +
              "\t\treturn [\n\t\t\t$faker->name(),\n" +
              "\t\t\t$faker->lastName()\n" +
              "\t\t];\n" +
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
          <h2>SEED</h2>
          <hr />

          <div className="mb-3">
            <h5 className="pb-2">CREATE SEED</h5>

            <CodeBlock
              language={"powershell"}
              content={"php lion db:seed UsersSeed"}
            />

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace Database\\Seeders;\n\n" +
                "use LionSQL\\Drivers\\MySQL as DB;\n" +
                "use Database\\Factories\\UsersFactory;\n\n" +
                "class UsersSeed {\n\n" +
                "\t/**\n" +
                "\t * ------------------------------------------------------------------------------\n" +
                "\t * Seed the application's database\n" +
                "\t * ------------------------------------------------------------------------------\n" +
                "\t **/\n" +
                "\tpublic static function run(): object {\n" +
                "\t\treturn DB::call('stored_procedure_name', UsersFactory::definition());\n" +
                "\t}\n\n" +
                "}"
              }
            />
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

          <div className="mb-3">
            <h5 className="pb-2 text-warning">storage_path</h5>

            <p>
              The storage_path helper allows access to directories and files in
              the storage directory.
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

          <div className="mb-3">
            <h5 className="pb-2 text-warning">finish</h5>

            <p>The finish helper ends the execution of all processes.</p>

            <CodeBlock
              langueage={"php"}
              content={"<?php\n\n" + "finish(response->success('finished'));"}
            />
          </div>

          <div className="mb-3">
            <h5 className="pb-2 text-warning">vd</h5>

            <p>The helper vd executes the function var_dump.</p>

            <CodeBlock
              langueage={"php"}
              content={"<?php\n\n" + "vd(response->success('finished'));"}
            />
          </div>

          <div className="mb-3">
            <h5 className="pb-2 text-warning">logger</h5>

            <p>
              The logger helper generates a log file stored in{" "}
              <strong>storage/logs/</strong> and implements Monolog internally.
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

          <div className="mb-3">
            <h5 className="pb-2 text-warning">fetch</h5>

            <p>
              The fetch helper allows you to make http requests, internally with
              guzzle http.
            </p>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "fetch('GET', 'https://jsonplaceholder.typicode.com/posts');"
              }
            />
          </div>
        </>
      ),
    },
  };
}
