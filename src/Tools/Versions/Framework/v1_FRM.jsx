import { Alert, Badge, ListGroup, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListCommandsNew from "../../../pages/components/ListCommandsNew";
import CodeBlock from "../../../pages/components/CodeBlock";
import script_sh from "./../../../assets/img/docker/script-sh.png";
import permissions_sh from "./../../../assets/img/docker/permissions-sh.png";
import etc_data from "./../../../assets/img/docker/etc-data.png";
import crontab_edit from "./../../../assets/img/docker/crontab-edit.png";

export default function v1_FRM() {
  return {
    "getting-started": {
      name: "Getting started",
      type: "sub_modules",
      list: {
        "about-as": {
          name: "About us",
          code: (
            <>
              <div className="mb-3">
                <h3>About us</h3>

                <hr />
              </div>

              <>
                <Alert variant={"info"}>
                  <strong>Note: </strong>Currently the framework is supported
                  for development in Linux environments.
                </Alert>

                <p className="fs-6">
                  Lion-Framework can also serve as an API backend for a
                  JavaScript single page application or a mobile application.
                  For example, you can use Lion-Framework as an API backend for
                  your ReactJS app or Kotlin app.
                </p>

                <p className="fs-6">
                  You can use Lion-Framework to provide authentication and data
                  storage/retrieval for your application, while taking advantage
                  of Lion-Framework services such as emails, databases and more.
                </p>

                <p className="fs-6">
                  To install <strong>Lion-Framework</strong> and libraries you
                  must have{" "}
                  <a href="https://getcomposer.org" target={"_blank"}>
                    composer
                  </a>{" "}
                  installed, <strong>Lion-Framework</strong> integrates most of
                  the available <strong>Lion</strong> libraries.
                </p>
              </>
            </>
          ),
        },
        install: {
          name: "Install",
          code: (
            <>
              <div className="mb-3">
                <h3>Install</h3>

                <hr />
              </div>

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the framework is supported for
                development in Linux environments.
              </Alert>

              <p className="fs-6">Lion-Framework supports PHP versions 8.1+</p>

              <CodeBlock
                language={"bash"}
                content={"composer create-project lion/framework"}
              />

              <CodeBlock
                language={"bash"}
                content={
                  "git clone https://github.com/lion-packages/framework.git"
                }
              />
            </>
          ),
        },
        use: {
          name: "Use Framework",
          code: (
            <>
              <div className="mb-3">
                <h3>Use Framework</h3>

                <hr />
              </div>

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the framework is supported for
                development in Linux environments.
              </Alert>

              <p className="fs-6">
                Start by starting your web application's local server.
              </p>

              <CodeBlock language={"bash"} content={"php lion serve"} />
            </>
          ),
        },
      },
    },
    commands: {
      name: "Commands",
      type: "sub_modules",
      list: {
        list: {
          name: "Command List",
          code: (
            <>
              <div className="mb-3">
                <h3>Command List</h3>

                <hr />
              </div>

              <ListCommandsNew />
            </>
          ),
        },
        create: {
          name: "Create Commands",
          code: (
            <>
              <div className="mb-3">
                <h3>Create Commands</h3>

                <hr />
              </div>

              <p className="fs-6">Create your commands from the terminal.</p>

              <CodeBlock language={"bash"} content={"php lion new:command"} />

              <CodeBlock
                language={"bash"}
                content={"php lion new:command ExampleCommand"}
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:command Example/ExampleCommand"}
              />
            </>
          ),
        },
        add: {
          name: "Add Commands",
          code: (
            <>
              <div className="mb-3">
                <h3>Add Commands</h3>

                <hr />
              </div>

              <p className="fs-6">
                You need to add the commands in the{" "}
                <Badge bg="secondary">config/commands.php</Badge> array,
                Commands are stored in{" "}
                <Badge bg="secondary">{"app/Console/Commands/"}</Badge>.
              </p>

              <CodeBlock
                language={"php"}
                content={`<?php

return [
    'app' => [
        App\\Console\\Commands\\MyCommandCommand::class
    ]
];
`}
              />
            </>
          ),
        },
      },
    },
    database: {
      name: "Database",
      type: "sub_modules",
      list: {
        config: {
          name: "Database Config",
          code: (
            <>
              <div className="mb-3">
                <h3>Database Config</h3>

                <hr />
              </div>

              <p className="fs-6">
                To make a direct connection to the database, go to{" "}
                <Badge bg="secondary">config/database.php</Badge>, for more
                information read{" "}
                <Link
                  to={"/libraries/lion/sql/index"}
                  className="text-decoration-none"
                >
                  Lion-SQL
                </Link>
                . The connections established in the config must be added
                directly in the .env, it is recommended to use the database name
                as the key name for the configured array (L14).
              </p>

              <CodeBlock
                language={"php"}
                content={`<?php

/**
 * ------------------------------------------------------------------------------
 * Start database service
 * ------------------------------------------------------------------------------
 * describe connections to establish connecting to multiple databases
 * ------------------------------------------------------------------------------
 */

return [
    'default' => env->DB_NAME,
    'connections' => [
        env->DB_NAME => [
            'type' => env->DB_TYPE,
            'host' => env->DB_HOST,
            'port' => env->DB_PORT,
            'dbname' => env->DB_NAME,
            'user' => env->DB_USER,
            'password' => env->DB_PASSWORD,
        ],
      ],
];
`}
              />
            </>
          ),
        },
        show: {
          name: "Show Connections",
          code: (
            <>
              <div className="mb-3">
                <h3>Show Database Connections</h3>

                <hr />
              </div>

              <p className="fs-6">View all available database connections.</p>

              <CodeBlock language={"bash"} content={"php lion db:show"} />
            </>
          ),
        },
        export: {
          name: "Export Database",
          code: (
            <>
              <div className="mb-3">
                <h2>Export Database</h2>

                <hr />
              </div>

              <p className="fs-6">Export your database using the terminal.</p>

              <CodeBlock
                language={"bash"}
                content={"php lion db:export database_name"}
              />
            </>
          ),
        },
        "create-all-crud": {
          name: "Create all Crud",
          code: (
            <>
              <div className="mb-3">
                <h3>All Crud</h3>

                <hr />
              </div>

              <div className="mb-3">
                <p className="fs-6">
                  Generate all the CRUDs of your entities with a single command,
                  the command checks the entire list of available connections,
                  this maps all the entities from each database, gets the
                  properties of each entity and generates a basic crud.
                </p>

                <CodeBlock language={"bash"} content={"php lion db:all-crud"} />

                <p className="fs-6">characteristics:</p>

                <ul>
                  <li>
                    <strong>CAPSULE CLASS</strong>: generates the capsule class
                    of the entity.
                  </li>

                  <li>
                    <strong>CONTROLLER CLASS</strong>: generates the controller
                    class of the entity.
                  </li>

                  <li>
                    <strong>MODEL CLASS</strong>: generates the model class of
                    the entity.
                  </li>

                  <li>
                    <strong>VIEWS</strong>: generates the views in the basic
                    database to read entities.
                  </li>

                  <li>
                    <strong>PROCEDURES</strong>: Generates the stored procedures
                    in the core database to read entities.
                  </li>
                </ul>
              </div>
            </>
          ),
        },
        create: {
          name: "Create Crud",
          code: (
            <>
              <div className="mb-3">
                <h3>Single Crud</h3>

                <hr />
              </div>

              <p className="fs-6">Generate the crud of a specific entity.</p>

              <CodeBlock language={"bash"} content={"php lion db:crud users"} />

              <CodeBlock
                language={"bash"}
                content={"php lion db:crud users --connection second_database"}
              />

              <CodeBlock
                language={"bash"}
                content={"php lion db:crud users -c second_database"}
              />
            </>
          ),
        },
      },
    },
    routes: {
      name: "Routing",
      type: "sub_modules",
      list: {
        routes: {
          name: "Routes",
          code: (
            <>
              <div className="mb-3">
                <h3>Routes</h3>

                <hr />
              </div>

              <p className="fs-6">
                <Link
                  to={"/libraries/lion/route/index"}
                  className="text-decoration-none"
                >
                  Lion-Route
                </Link>{" "}
                has been implemented for route handling, from the web you can
                add all the necessary routes for the operation of your web
                application <Badge bg={"secondary"}>routes/web.php</Badge>.
              </p>

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" + "Route::get('/', fn() => success(200, 'test'));"
                }
              />
            </>
          ),
        },
        list: {
          name: "Route List",
          code: (
            <>
              <div className="mb-3">
                <h3>Route List</h3>

                <hr />
              </div>

              <p className="fs-6">
                To view the available routes, start the local server first, run
                the <Badge bg="secondary">php lion serve</Badge> command, and
                then view the routes.
              </p>

              <Alert variant={"info"}>
                <strong>Note:</strong> The routes are loaded with the server
                route <Badge bg="secondary">SERVER_URL</Badge> set in{" "}
                <Badge bg="secondary">.env</Badge>, modify this route to avoid
                errors in the execution of the process, in the file{" "}
                <Badge bg="secondary">public/index.php</Badge> there is a public
                route which allows get the available routes from the terminal,
                comment this line once your web app is deployed.
              </Alert>

              <CodeBlock language={"bash"} content={"php lion route:list"} />
            </>
          ),
        },
      },
    },
    controllers: {
      name: "Controllers",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Controllers",
          code: (
            <>
              <div className="mb-3">
                <h3>Controllers</h3>

                <hr />
              </div>

              <p className="fs-6">
                Controllers are stored in{" "}
                <Badge bg="secondary">{"app/http/Controllers/"}</Badge>.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion new:controller HomeController"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

namespace App\\Http\\Controllers;

class HomeController {
    public function __contruct() {
    }
}
`}
              />

              <hr />

              <div className="mb-3">
                <Alert variant={"info"}>
                  <strong>Note:</strong> You can create the model class
                  immediately with the <Badge bg={"secondary"}>--model</Badge>{" "}
                  option, Models are stored in{" "}
                  <Badge bg={"secondary"}>app/Models</Badge>.
                </Alert>

                <CodeBlock
                  language={"bash"}
                  content={
                    "php lion new:controller HomeController --model HomeModel"
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

namespace App\\Http\\Controllers;

class HomeController {
    private HomeModel $homeModel;

    public function __contruct() {
        $this->homeModel = new HomeModel();
    }
}
`}
                />
              </div>
            </>
          ),
        },
        use: {
          name: "Use Controllers",
          code: (
            <>
              <div className="mb-3">
                <h3>Use Controllers</h3>

                <hr />
              </div>

              <p className="fs-6">
                When you create the controllers and define the methods you can
                add them to your web routes to consume your APIs.
              </p>

              <CodeBlock
                language={"php"}
                content={`<?php

use App\\Http\\Controllers\\HomeController;

Route::get('home', [HomeController::class, 'method_name']);
`}
              />
            </>
          ),
        },
      },
    },
    models: {
      name: "Models",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Models",
          code: (
            <>
              <div className="mb-3">
                <h3>MODELS</h3>

                <hr />
              </div>

              <p className="fs-6">
                Models are stored in{" "}
                <Badge bg="secondary">{"app/Models"}</Badge>.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion new:model HomeModel"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

namespace App\\Http\\Models;

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;
use LionDatabase\\Drivers\\MySQL\\Schema;

class HomeModel {
  public function indexDB(): array|object {
    return DB::table('table_name')->select()->getAll();
  }
}
`}
              />
            </>
          ),
        },
        use: {
          name: "Use Models",
          code: (
            <>
              <div className="mb-3">
                <h3>Use Models</h3>

                <hr />
              </div>

              <p className="fs-6">
                Create the required models and run them on your controllers
              </p>

              <CodeBlock
                language={"php"}
                content={`<?php

namespace App\\Http\\Controllers;

use App\\Models\\HomeModel;

class HomeController {
    private HomeModel $homeModel;

    public function __contruct() {
        $this->homeModel = new HomeModel();
    }

    public function index(): object|array {
      return $this->homeModel->indexDB();
    }
}
`}
              />
            </>
          ),
        },
      },
    },
    capsules: {
      name: "Capsules",
      type: "sub_modules",
      list: {
        "entity-capsules": {
          name: "Entity Capsules",
          code: (
            <>
              <div className="mb-3">
                <h3>Entity Capsules</h3>

                <hr />
              </div>

              <p className="fs-6">
                You can generate a capsule class with the properties of an
                entity.
              </p>

              <Alert variant={"info"}>
                <strong>Note:</strong> Capsule classes by default are stored in
                the <Badge bg="secondary">database/Class/</Badge> directory, you
                can change the path with the{" "}
                <Badge bg="secondary">--path</Badge> option.
              </Alert>

              <Alert variant={"info"}>
                <strong>Note:</strong> If you need to map entities from another
                database, specify the connection through the{" "}
                <Badge bg="secondary">--connection</Badge> option.
              </Alert>

              <CodeBlock
                language={"bash"}
                content={"php lion db:capsule entity_name"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php
namespace App\\Class;\r

class TableName implements \\JsonSerializable {
    private ?int $id = null;

    public function __contruct() {
    }

    public function jsonSerialize(): mixed {
        return get_object_vars($this);
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function setId(?int $id): TableName {
        $this->id = $id;

        return $this;
    }
}
`}
              />
            </>
          ),
        },
        "all-entity-capsules": {
          name: "All Entity Capsules",
          code: (
            <>
              <div className="mb-3">
                <h3>All Capsules</h3>

                <hr />
              </div>

              <p className="fs-6">
                You can generate all capsule classes with the entities
                properties.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion db:all-capsules"}
              />

              <Alert variant={"info"}>
                <strong>Note:</strong> Capsule classes by default are stored in
                the <Badge bg="secondary">database/Class/</Badge> directory,{" "}
                <Badge bg="secondary">db:all-capsules</Badge> reads all the
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
            </>
          ),
        },
        custom: {
          name: "Custom Capsules",
          code: (
            <>
              <div className="mb-3">
                <h3>Custom Capsules</h3>

                <hr />
              </div>

              <p className="fs-6">
                Create custom capsule classes with unique properties for
                different uses.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion new:capsule ClassName"}
              />

              <Alert variant="info">
                <strong>Note: </strong>You can add --properties/-p option to add
                the class properties.
              </Alert>

              <CodeBlock
                language={"bash"}
                content={
                  "php lion new:capsule ClassName -p idusers:int -p users_name:string -p users_lastname"
                }
              />
            </>
          ),
        },
      },
    },
    migration: {
      name: "Migrations",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Migration",
          code: (
            <>
              <div className="my-3">
                <h3>Create Migration</h3>

                <hr />
              </div>

              <p className="fs-6">
                Migrations are used to create the structure of your database,
                you can define the tables with their properties, relate them,
                read{" "}
                <Link
                  to={"/libraries/lion/database/index"}
                  className="text-decoration-none"
                >
                  Lion-Database
                </Link>
                , You can select a migration type by running the command.
              </p>

              <ul className="mb-3" style={{ listStyle: "none" }}>
                <li>- table</li>
                <li>- view</li>
                <li>- procedure</li>
              </ul>

              <p className="fs-6">
                The current configuration defaults to <strong>table</strong> as
                migration.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion migrate:new example_migrate my_connection"}
              />

              <CodeBlock
                language={"bash"}
                content={
                  "php lion migrate:new example_migrate my_connection --type procedure"
                }
              />
            </>
          ),
        },
        generate: {
          name: "Generate Migration",
          code: (
            <>
              <div className="mb-3">
                <h3>Generate Migration</h3>

                <hr />
              </div>

              <p className="fs-6">
                Generate all the migrations you have from an existing database
                with one command, the generated migrations are unique to tables
                that are in the database.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion migrate:generate"}
              />
            </>
          ),
        },
        run: {
          name: "Run Migration",
          code: (
            <>
              <div className="mb-3">
                <h2>Run Migration</h2>

                <hr />
              </div>

              <p className="fs-6">
                Run all the migrations you have with a single command, these
                processes are executed and added on the specified databases.
              </p>

              <CodeBlock language={"bash"} content={"php lion migrate:fresh"} />
            </>
          ),
        },
      },
    },
    vite: {
      name: "Vite.JS",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Project",
          code: (
            <>
              <div className="mb-3">
                <h3>Create projects with Vite.JS</h3>

                <hr />
              </div>

              <p className="fs-6">
                Projects with vite allow you to create simple web pages using
                npm, when initialized it should call the project name assigned
                to the folder, projects with vite are stored in{" "}
                <Badge bg="secondary">{"vite/"}</Badge>.
              </p>

              <div className="mb-3">
                <Alert variant="info">
                  <strong>Note: </strong>the default project type is react , for
                  more information about the properties for generating projects
                  with vite select the Command section in the list.
                </Alert>

                <Alert variant="info">
                  <strong>Note: </strong>each time a project is created with
                  vite, the base information for the vite configuration is
                  added, where a config object will be added to hold the changes
                  in real time, see <strong>vite.config.js</strong> for the
                  configuration.
                </Alert>

                <CodeBlock
                  language={"bash"}
                  content={"php lion npm:init example-dev --template vue"}
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion npm:init example-dev --template react-ts"}
                />
              </div>
            </>
          ),
        },
        use: {
          name: "Use Project",
          code: (
            <>
              <div className="mb-3">
                <h3>Use</h3>

                <hr />
              </div>

              <p className="fs-6">
                When generating a project with vite, a log is automatically
                generated in storage/logs/vite/ this to see the output of the
                local server, the configuration of the resource is added in
                config/vite.php. The configuration to work faster with Docker is
                added in the configuration files supervisord.conf and
                docker-compose.yml where in the supervisor the configurations
                required to automatically start the resource are added, in the
                docker-compose the port of the resource is created.
              </p>

              <p className="fs-6">
                Run the initialization commands to run the local servers from
                your projects; if you are running the project with Docker, you
                can skip the initialization commands.
              </p>

              <div className="mb-3">
                <Alert variant="info">
                  <strong>Note: </strong>If you are using Docker, add the
                  dependency install (php lion npm:install project) of the
                  project so that it is installed whenever the Docker container
                  is built.
                </Alert>

                <CodeBlock
                  language={"bash"}
                  content={
                    "cd resources/resource_name/ && npm install && npm run dev"
                  }
                />
              </div>
            </>
          ),
        },
        install: {
          name: "Install Dependencies",
          code: (
            <>
              <div className="mb-3">
                <h3>Install Dependencies</h3>

                <hr />
              </div>

              <p className="fs-6">
                Install the required dependencies for your frontend web
                application with NPM by running the command:
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion npm:install project_name axios"}
              />

              <CodeBlock
                language={"bash"}
                content={'php lion npm:install project_name "axios crypto-js"'}
              />
            </>
          ),
        },
        update: {
          name: "Update Dependencies",
          code: (
            <>
              <div className="mb-3">
                <h3>Update Dependencies</h3>

                <hr />
              </div>

              <p className="fs-6">
                To update the installed dependencies you must run the command.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion npm:update project_name"}
              />
            </>
          ),
        },
        uninstall: {
          name: "Uninstall Dependencies",
          code: (
            <>
              <div className="mb-3">
                <h3>Uninstall Dependencies</h3>

                <hr />
              </div>

              <p className="fs-6">
                To uninstall the installed dependencies you must run the
                command.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion npm:uninstall project_name axios"}
              />

              <CodeBlock
                language={"bash"}
                content={
                  'php lion npm:uninstall project_name "axios crypto-js"'
                }
              />
            </>
          ),
        },
        dist: {
          name: "Generate Dist",
          code: (
            <>
              <div className="mb-3">
                <h3>Generate Dist</h3>

                <hr />
              </div>

              <p className="fs-6">
                To generate the dist of the vite project you must execute the
                command.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion npm:build project_name"}
              />
            </>
          ),
        },
      },
    },
    email: {
      name: "Mail",
      type: "sub_modules",
      list: {
        config: {
          name: "Mail Config",
          code: (
            <>
              <div className="my-3">
                <h2>Mail Config</h2>
                <hr />

                <p className="fs-6">
                  To send mail with different accounts it is necessary to add
                  the accounts and add the service that these accounts use
                  (SymfonyMailer/PHPMailer), go to{" "}
                  <Badge bg="secondary">config/email.php</Badge>, email accounts
                  must be added to the .env, for more information, read{" "}
                  <Link
                    to={"/libraries/lion/mailer/index"}
                    className="text-decoration-none"
                  >
                    Lion-Mailer
                  </Link>
                  .
                </p>

                <CodeBlock
                  language={"php"}
                  content={`<?php

/**
 * ------------------------------------------------------------------------------
 * Start mail service
 * ------------------------------------------------------------------------------
 * describe connections to establish connecting to multiple databases
 * ------------------------------------------------------------------------------
 */

return [
    'default' => env->MAIL_NAME,
    'accounts' => [
        env->MAIL_NAME => [
            'services' => explode('-', env->MAIL_SERVICES),
            'debug' => (int) env->MAIL_DEBUG,
            'host' => env->MAIL_HOST,
            'encryption' => env->MAIL_ENCRYPTION,
            'port' => (int) env->MAIL_PORT,
            'name' => env->MAIL_NAME,
            'account' => env->MAIL_ACCOUNT,
            'password' => env->MAIL_PASSWORD,
        ],
    ],
];
                    `}
                />
              </div>
            </>
          ),
        },
        show: {
          name: "Show Accounts",
          code: (
            <>
              <div className="mb-3">
                <h2>Show Accounts</h2>

                <hr />
              </div>

              <p className="fs-6">View the accounts available in the system.</p>

              <CodeBlock language={"bash"} content={"php lion email:show"} />
            </>
          ),
        },
      },
    },
    request: {
      name: "Request",
      type: "sub_modules",
      list: {
        use: {
          name: "Use Request",
          code: (
            <>
              <div className="mb-3">
                <h3>Request</h3>

                <hr />
              </div>

              <p className="fs-6">
                The <Badge bg={"secondary"}>capture</Badge> function of the{" "}
                <Badge bg={"secondary"}>Request</Badge> class is used in order
                to obtain the data sent in an HTTP request, the system
                internally initializes a <Badge bg={"secondary"}>request</Badge>{" "}
                constant to obtain the data. more information in{" "}
                <Link
                  to={"/libraries/lion/request/index"}
                  className="text-decoration-none"
                >
                  Lion-Request
                </Link>
                .
              </p>

              <div className="mb-3">
                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" +
                    "echo(request->users_name . ' ' . request->{'users_last-name'});"
                  }
                />

                <p className="fs-6">equivalent to</p>

                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" +
                    "echo($_POST['users_name'] . ' ' . $_POST['users_last-name']);"
                  }
                />
              </div>
            </>
          ),
        },
      },
    },
    response: {
      name: "Response",
      type: "sub_modules",
      list: {
        use: {
          name: "Use Response",
          code: (
            <>
              <div className="mb-3">
                <h3>RESPONSE</h3>

                <hr />
              </div>

              <p className="fs-6">
                The Response class implements different response functions on
                HTTP requests, the system internally initializes a{" "}
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

              <div className="mb-3">
                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "return response->code(200)->success('message...');\n" +
                    "// or \n" +
                    "return success(200, 'message...');"
                  }
                />

                <CodeBlock
                  language={"json"}
                  content={
                    "{\n" +
                    '\t"code": 200,\n' +
                    '\t"status": "success",\n' +
                    '\t"message": "message...",\n' +
                    '\t"data": []\n' +
                    "}"
                  }
                />
              </div>
            </>
          ),
        },
      },
    },
    rules: {
      name: "Rules",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Rule",
          code: (
            <>
              <div className="mb-3">
                <h3>Create Rules</h3>

                <hr />
              </div>

              <p className="fs-6">
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
                , rules are stored in{" "}
                <Badge bg="secondary">{"app/Rules/"}</Badge>.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion new:rule EmailRule"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

namespace App\\Rules;

use App\\Traits\\Framework\\ShowErrors;

class EmailRule {
    use ShowErrors;

    public static string $field = 'users_email';
    public static string $desc = 'this field applies a property of type email';
    public static string $value = '';
    public static string $disabled = false;

    public function passes(): void {
        self::validate(function(\\Valitron\\Validator $validator) {
            $validator->rule('required', self::$field)->message('custom message...');
        });
    }
}
`}
              />

              <ListGroup className="mb-3">
                <ListGroup.Item variant="dark">
                  <strong>- field: </strong>property name, this property is
                  displayed in exported postman collections.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <strong>- desc: </strong> property description, this property
                  is displayed in exported postman collections.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <strong>- value: </strong> property value, this property is
                  displayed in exported postman collections.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <strong>- disabled: </strong> disable property, this property
                  is displayed on exported postman collections.
                </ListGroup.Item>
              </ListGroup>

              <p className="fs-6">
                You can generate all the database rules for each entity, for all
                its properties.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion db:all-rules my_table"}
              />

              <CodeBlock
                language={"bash"}
                content={"php lion db:rules my_table"}
              />

              <CodeBlock
                language={"bash"}
                content={
                  "php lion db:rules my_table --connection second_connection"
                }
              />
            </>
          ),
        },
        use: {
          name: "Use Rule",
          code: (
            <>
              <div className="mb-3">
                <h3>USE RULES</h3>

                <hr />
              </div>

              <p className="fs-6">
                Add your rules to different routes in{" "}
                <Badge bg={"secondary"}>routes/rules.php</Badge>
              </p>

              <CodeBlock
                langueage={"php"}
                content={`<?php

return [
    'POST' => [
        '/api/auth/signin' => [
            App\\Rules\\EmailRule::class
        ],
    ]
];
`}
              />

              <p className="fs-6">You can reuse a rule in different routes.</p>

              <CodeBlock
                langueage={"php"}
                content={`<?php

return [
    'POST' => [
        '/api/auth/signin' => [
            App\\Rules\\EmailRule::class
        ],
        '/api/users/update/{idusers}' => [
            App\\Rules\\EmailRule::class
        ]
    ]
];
`}
              />
            </>
          ),
        },
      },
    },
    traits: {
      name: "Traits",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Traits",
          code: (
            <>
              <div className="mb-3">
                <h3>Traits</h3>

                <hr />
              </div>

              <p className="fs-6">
                Traits are stored in{" "}
                <Badge bg="secondary">{"app/Traits/"}</Badge>.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion new:trait trait_name"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

namespace App\\Traits;

trait TraitName {
}
`}
              />
            </>
          ),
        },
      },
    },
    enums: {
      name: "Enums",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Enums",
          code: (
            <>
              <div className="mb-3">
                <h3>Enums</h3>

                <hr />
              </div>

              <p className="fs-6">
                Enums are stored in <Badge bg="secondary">{"app/Enums/"}</Badge>
                .
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion new:enum enum_name"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

namespace App\\Enums;

enum StatusEnum: string {
    case SUCCESS = 'success';

    case ERROR = 'error';

    case WARNING = 'warning';

    case INFO = 'info';

    case DATABASE_ERROR = 'database-error';

    case SESSION_ERROR = 'session-error';

    case ROUTE_ERROR = 'route-error';
}
`}
              />
            </>
          ),
        },
      },
    },
    middleware: {
      name: "Middleware",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Middleware",
          code: (
            <>
              <div className="mb-3">
                <h3>Create Middleware</h3>

                <hr />
              </div>

              <p className="fs-6">
                Middleware is stored in{" "}
                <Badge bg="secondary">app/Http/Middleware</Badge>.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion new:middleware middleware_name"}
              />
            </>
          ),
        },
        "add-functions": {
          name: "Add functions",
          code: (
            <>
              <div className="mb-3">
                <h3>Add Functions</h3>

                <hr />
              </div>

              <p className="fs-6">
                We can add the necessary functions in each middleware.
              </p>

              <CodeBlock
                language={"php"}
                content={`<?php

namespace App\\Http\\Middleware\\JWT;

class AuthorizationMiddleware {
    public function __contruct() {
    }

    public function exist(): void {
        $headers = apache_request_headers();

        if (!isset($headers['Authorization'])) {
            finish(error(500, 'The JWT does not exist'));
        }
    }

    public function authorize(): void {
        $headers = apache_request_headers();

        if (preg_match('/Bearers(S+)/', $headers['Authorization'], $matches)) {
            $jwt = JWT::decode($matches[1]);

            if ($jwt->status === 'error') {
                finish(error(500, $jwt->message));
            }
        } else {
            finish(error(500, 'Invalid JWT'));
        }
    }

    public function notAuthorize(): void {
        $headers = apache_request_headers();

        if (isset($headers['Authorization'])) {
            finish(error(500, 'User in session, You must close the session'));
        }
    }
}`}
              />
            </>
          ),
        },
        "add-middleware": {
          name: "Add Middleware",
          code: (
            <>
              <div className="mb-3">
                <h3>Add Middleware</h3>

                <hr />
              </div>

              <p className="fs-6">
                To import middleware to the routes we must first import the
                namespace of the middleware and inside this add an array to
                create custom middleware.{" "}
                <Badge bg={"secondary"}>config/middleware.php</Badge>
              </p>

              <CodeBlock
                language={"php"}
                content={`<?php

return [
    'app' => [
        App\\Http\\Middleware\\JWT\\AuthorizationMiddleware::class => [
            ['name' => 'jwt-exist', 'method' => 'exist'],
            ['name' => 'jwt-authorize', 'method' => 'authorize'],
            ['name' => 'jwt-not-authorize', 'method' => 'notAuthorize'],
        ],
    ],
];
`}
              />
            </>
          ),
        },
        use: {
          name: "Use Middleware",
          code: (
            <>
              <div className="my-3">
                <h3>Use Middleware</h3>

                <hr />
              </div>

              <p className="fs-6">
                You can use your middleware on routes and create more secure web
                applications.
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
            </>
          ),
        },
      },
    },
    factory: {
      name: "Factory",
      type: "sub_modules",
      list: {
        factory: {
          name: "Create Factory",
          code: (
            <>
              <div className="mb-3">
                <h3>Create Factory</h3>

                <hr />
              </div>

              <p className="fs-6">
                Factories are stored in{" "}
                <Badge bg="secondary">{"database/Factories/"}</Badge>.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion db:factory UsersFactory"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

namespace Database\\Factories;

use App\\Traits\\Framework\\Faker;

class UsersFactory {
    use Faker;

    /**
     * ------------------------------------------------------------------------------
     * Define the model's default state
     * ------------------------------------------------------------------------------
     */
    public static function definition(): array {
        return [
          Faker::get()->name()
        ];
    }
}
`}
              />
            </>
          ),
        },
      },
    },
    seed: {
      name: "Seed",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Seed",
          code: (
            <>
              <div className="mb-3">
                <h3>Create Seed</h3>

                <hr />
              </div>

              <p className="fs-6">
                Seed are stored in{" "}
                <Badge bg="secondary">{"database/Seeders/"}</Badge>.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion db:seed UsersSeed"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

namespace Database\\Seeders;

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;
use LionDatabase\\Drivers\\MySQL\\Schema;
use Database\\Factories\\UsersFactory;

class UsersSeed {
    /**
     * ------------------------------------------------------------------------------
     * Seed the application's database
     * ------------------------------------------------------------------------------
     */
    public static function run(): object {
        return DB::call('stored_procedure_name', UsersFactory::definition())
          ->execute();
    }
}
`}
              />
            </>
          ),
        },
        use: {
          name: "Use Seed",
          code: (
            <>
              <div className="mb-3">
                <h3>Use Seed</h3>

                <hr />
              </div>

              <p className="fs-6">
                Run your seeds to add test data to your local database
              </p>

              <CodeBlock
                language={"bash"}
                content={
                  "php lion db:seed Database\\Seeders\\UsersSeed --run true"
                }
              />
            </>
          ),
        },
      },
    },
    sockets: {
      name: "Sockets",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Socket",
          code: (
            <>
              <div className="my-3">
                <h3>Create Socket</h3>

                <hr />
              </div>

              <p className="fs-6">
                websockets interact with the{" "}
                <a
                  href="http://socketo.me/docs/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Ratchet
                </a>{" "}
                library, Sockets are stored in{" "}
                <Badge bg="secondary">{"app/Http/Sockets/"}</Badge>.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion socket:new NotificationsSocket"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

namespace App\\Http\\Sockets;

use Ratchet\\ConnectionInterface;
use Ratchet\\MessageComponentInterface;
use SplObjectStorage;

class NotificationsSocket implements MessageComponentInterface {
  // ...
}
`}
              />
            </>
          ),
        },
        add: {
          name: "Add Socket",
          code: (
            <>
              <div className="mb-3">
                <h3>Add Sockets</h3>

                <hr />
              </div>

              <div className="mb-3">
                <p className="fs-6">
                  You need to add the commands in the{" "}
                  <Badge bg="secondary">config/socket-commands.php</Badge>{" "}
                  array.
                </p>

                <CodeBlock
                  language={"php"}
                  content={`<?php

return [
    'ExampleSocket' => App\\Http\\Sockets\\ExampleSocket::class
];
`}
                />
              </div>
            </>
          ),
        },
        use: {
          name: "Use Sockets",
          code: (
            <>
              <div className="mb-3">
                <h3>Use Sockets</h3>

                <hr />
              </div>

              <p className="fs-6">
                to execute a socket you must do it from the console, you can
                configure a different port with the{" "}
                <Badge bg="secondary">--port</Badge> option.
              </p>

              <CodeBlock
                language={"php"}
                content={"php lion socket:serve SocketClass"}
              />

              <CodeBlock
                language={"php"}
                content={"php lion socket:serve SocketClass --port 8081"}
              />
            </>
          ),
        },
      },
    },
    test: {
      name: "Test",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Test",
          code: (
            <>
              <div className="mb-3">
                <h3>Create Test</h3>

                <hr />
              </div>

              <p className="fs-6">
                Add to your web application with <strong>Lion-Framework</strong>{" "}
                test to perform the necessary quality checks of your system, the
                tests are implemented with the help of{" "}
                <a
                  href="https://phpunit.de/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  PHPUnit
                </a>
                .
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion new:test TestName"}
              />
            </>
          ),
        },
        run: {
          name: "Run Test",
          code: (
            <>
              <div className="mb-3">
                <h3>Run Test</h3>

                <hr />
              </div>

              <p className="fs-6">Run all tests via command line.</p>

              <CodeBlock language={"bash"} content={"php lion test"} />
            </>
          ),
        },
      },
    },
    rsa: {
      name: "RSA",
      type: "sub_modules",
      list: {
        create: {
          name: "Create",
          code: (
            <>
              <div className="mb-3">
                <h3>Create RSA Keys</h3>

                <hr />
              </div>

              <p className="fs-6">
                Create public and private keys, perform encryption and
                decryption with them{" "}
                <Link
                  to={"/libraries/lion/security/index"}
                  className="text-decoration-none"
                >
                  Lion-Security RSA lease
                </Link>
                , you can generate the keys from the terminal once the
                parameters are set from the environment variables.
              </p>

              <Alert variant="info">
                <strong>Note: </strong> all generated keys are stored inside{" "}
                <Badge bg="secondary">{"storage/"}</Badge>.
              </Alert>

              <CodeBlock language={"bash"} content={"php lion rsa:new"} />

              <p className="fs-6">
                You can select a different folder than the selected one from the
                environment variables with the{" "}
                <Badge bg="secondary">{"--path"}</Badge> option.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion rsa:new --path keys-user-1/"}
              />
            </>
          ),
        },
      },
    },
    aes: {
      name: "AES",
      type: "sub_modules",
      list: {
        create: {
          name: "Create",
          code: (
            <>
              <div>
                <h3>Create AES Keys</h3>

                <hr />
              </div>

              <p className="fs-6">
                Generate (KEY - IV) to encrypt and decrypt with AES,{" "}
                <Link
                  to={"/libraries/lion/security/index"}
                  className="text-decoration-none"
                >
                  lease Lion-Security AES
                </Link>
                , you can generate the keys from the terminal once the
                parameters are set from the environment variables.
              </p>

              <CodeBlock language={"bash"} content={"php lion aes:new"} />
            </>
          ),
        },
      },
    },
    postman: {
      name: "Postman",
      type: "sub_modules",
      list: {
        collections: {
          name: "Postman Collections",
          code: (
            <>
              <div className="mb-3">
                <h3>Postman Collections</h3>

                <hr />
              </div>

              <p className="fs-6">
                To export the available routes you must run the local server and
                execute the export, after this you can observe the collections
                in <Badge bg="secondary">storage/postman/</Badge>.
              </p>

              <CodeBlock language={"bash"} content={"php lion route:postman"} />

              <Alert variant={"info"}>
                <strong>Note:</strong> The routes are loaded with the server
                route <Badge bg="secondary">SERVER_URL</Badge> set in{" "}
                <Badge bg="secondary">.env</Badge>, modify this route to avoid
                errors in the execution of the process, in the file{" "}
                <Badge bg="secondary">public/index.php</Badge> there is a public
                route which allows get the available routes from the terminal,
                comment this line once your web app is deployed.
              </Alert>

              <Alert variant={"info"}>
                <p>
                  <strong>Note:</strong> The routes generated in the collection
                  interact with the rules established for each url, modify the
                  properties of each rule. The defined properties modify and
                  parameterize the exported requests, where:
                </p>
                <ul>
                  <li>$field {"=>"} name of the field</li>

                  <li>$desc {"=>"} description of the field</li>

                  <li>$value {"=>"} default value of the field</li>

                  <li>
                    $disabled {"=>"} modifies whether the field is active or
                    inactive in the collection
                  </li>
                </ul>
              </Alert>

              <p className="fs-6">
                If you want the POST, PUT and DELETE routes to be exported with
                dynamically required parameters these must have been declared as
                rules first, for each rule that is added it is recognized as a
                required parameter to send through an http request and it is
                exported in the postman collections.
              </p>

              <CodeBlock
                langueage={"php"}
                content={`<?php

return [
    'POST' => [
        '/api/auth/signin' => [
            App\\Rules\\EmailRule::class
        ],
        '/api/users/update/{idusers}' => [
            App\\Rules\\EmailRule::class
        ]
    ]
];
`}
              />
            </>
          ),
        },
      },
    },
    cors: {
      name: "Cors",
      type: "sub_modules",
      list: {
        config: {
          name: "Cors Config",
          code: (
            <>
              <div className="mb-3">
                <h3>Cors</h3>

                <hr />
              </div>

              <p className="fs-6">
                Enable and add the necessary headers for your web application,
                go to <Badge bg="secondary">config/cors.php</Badge> and set your
                headers.
              </p>

              <CodeBlock
                language={"php"}
                content={`<?php

/**
 * ------------------------------------------------------------------------------
 * Cross-Origin Resource Sharing (CORS) Configuration
 * ------------------------------------------------------------------------------
 * Here you can configure your settings for cross-origin resource
 * sharing or 'CORS'. This determines which cross-origin operations
 * can be executed in web browsers.
 * ------------------------------------------------------------------------------
 */

return [
    'Access-Control-Allow-Origin' => '*',
    'Content-Type' => 'application/json; charset=UTF-8',
    'Access-Control-Max-Age' => 0,
    'Allow' => 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers' => 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
];
`}
              />
            </>
          ),
        },
      },
    },
    cron: {
      name: "Cron",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Cron",
          code: (
            <>
              <div className="mb-3">
                <h3>Create Cron</h3>

                <hr />
              </div>

              <p className="fs-6">
                CRON tasks can be run in <strong>Docker</strong> containers,{" "}
                <strong>Lion-Framework</strong> provides the necessary docker
                files to create a container with their respective images, to
                start creating CRON tasks generate the necessary commands to run
                them through <strong>sh</strong> files, note that this is
                performed under a <strong>Linux</strong> development environment
                with the <strong>Debian</strong> distribution specified in the{" "}
                <strong>Dockerfile</strong>.
              </p>
            </>
          ),
        },
        command: {
          name: "Create Command",
          code: (
            <>
              <div className="mb-3">
                <h3 className="mb-3">Create the command for the CRON task</h3>

                <hr />
              </div>

              <p className="fs-6">
                With the generated command you can carry out the necessary
                instructions for the execution of the CRON task.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion new:command ExampleCommand"}
              />

              <p className="fs-6">
                The command should be added to the command list found in{" "}
                <Badge bg="secondary">{"config/commands.php"}</Badge>.
              </p>

              <CodeBlock
                language={"php"}
                content={`<?php

return [
  'app' => [
    App\\Console\\Commands\\MyCommandCommand::class
  ]
];
`}
              />
            </>
          ),
        },
        "sh-file": {
          name: "Sh File",
          code: (
            <>
              <div className="mb-3">
                <h3>Create file to run</h3>

                <hr />
              </div>

              <div className="mb-3">
                <p className="fs-6">
                  You must generate the sh file to run the CRON tasks with your
                  instructions, this file is stored in{" "}
                  <Badge bg="secondary">storage/cron/</Badge>.
                </p>

                <CodeBlock
                  language={"bash"}
                  content={"php lion sh:new sh_name"}
                />

                <Image src={script_sh} className="img-fluid" />
              </div>

              <div className="mb-3">
                <p className="fs-6">
                  To give read and write permissions to a shell script file
                  (file with .sh extension), you can use the chmod command. For
                  example, to give read and write permissions to the script.sh
                  file, you can run the following command:
                </p>

                <CodeBlock language={"bash"} content={"chmod +rw script.sh"} />

                <Image src={permissions_sh} className="img-fluid" />
              </div>
            </>
          ),
        },
        configure: {
          name: "Configure Cron",
          code: (
            <>
              <div className="mb-3">
                <h3>Configure Cron</h3>

                <hr />
              </div>

              <div className="mb-3">
                <p className="fs-6">
                  To configure the <strong>crontab</strong> file you must go to
                  the <strong>etc/</strong> path, where you can run the{" "}
                  <strong>ls</strong> command to display the{" "}
                  <strong>crontab</strong> file, to configure the{" "}
                  <strong>crontab</strong> run the following command:
                </p>

                <img src={etc_data} className="img-fluid mb-3" />

                <CodeBlock language={"bash"} content={"sudo crontab -e"} />
              </div>

              <div className="mb-3">
                <p className="fs-6">
                  This opens the <strong>crontab</strong> file from the terminal
                  or the editor that you have configured, add the instruction in
                  the last line to perform the CRON task with its respective
                  configuration.
                </p>

                <img src={crontab_edit} className="img-fluid mb-3" />
              </div>

              <div className="mb-3">
                <p className="fs-6">
                  Save the changes with the command <strong>Ctrl + X</strong>,
                  on Linux and macOS, the Windows equivalent of{" "}
                  <strong>Ctrl + X</strong> is <strong>Command + X</strong> or{" "}
                  <strong>Ctrl + X</strong>.
                </p>

                <p className="fs-6">
                  Press <strong>Y</strong> to accept the changes and then press
                  the
                  <strong>Intro</strong> key to exit.
                </p>
              </div>
            </>
          ),
        },
        restart: {
          name: "Restart Cron",
          code: (
            <>
              <div className="mb-3">
                <h3>Restart the container</h3>

                <hr />
              </div>

              <p className="fs-6">
                After configuring the CRON task, you must restart the container
                to see the changes, otherwise the configured CRON tasks run, go
                back to step #5 to access the container bash again, run the
                following command:
              </p>

              <CodeBlock
                language={"bash"}
                content={"sudo service cron restart"}
              />
            </>
          ),
        },
      },
    },
    helpers: {
      name: "Helpers",
      type: "sub_modules",
      list: {
        "constants-helpers": {
          name: "Constants",
          code: (
            <>
              <div className="mb-3">
                <h3>Constants</h3>

                <hr />
              </div>

              <Table size="sm" variant="dark" responsive hover>
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>client</td>
                    <td>
                      the client constant is an object of the GuzzleHttp\Client
                      class, it allows you to make HTTP requests
                    </td>
                  </tr>

                  <tr>
                    <td>request</td>
                    <td>
                      the request constant is an object of the Lion
                      Request\Request class, it allows you to get the data
                      captured through an HTTP request
                    </td>
                  </tr>

                  <tr>
                    <td>response</td>
                    <td>
                      the response constant is an object of the Lion
                      Request\Response class, it allows you to generate
                      responses of different types that the class provides
                    </td>
                  </tr>

                  <tr>
                    <td>json</td>
                    <td>
                      the json constant is an object of the LionRequest\Json
                      class, it allows you to encode and decode JSON data
                    </td>
                  </tr>

                  <tr>
                    <td>env</td>
                    <td>
                      the env constant is an object that contains the properties
                      of the environment variable file
                    </td>
                  </tr>

                  <tr>
                    <td>str</td>
                    <td>
                      the constant str is an object of class LionHelpers\Str, it
                      allows you to access this helper and transform strings
                    </td>
                  </tr>

                  <tr>
                    <td>arr</td>
                    <td>
                      the constant arr is an object of class LionHelpers\Arr, it
                      allows you to access this helper and transform arrays
                    </td>
                  </tr>

                  <tr>
                    <td>kernel</td>
                    <td>
                      the kernel constant is an object of class
                      App\Console\Kernel, it allows you to execute commands
                    </td>
                  </tr>
                </tbody>
              </Table>
            </>
          ),
        },
        "functions-helpers": {
          name: "Functions",
          code: (
            <>
              <div className="mb-3">
                <h3>Functions</h3>

                <hr />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">{"session"}</h5>

                <p className="fs-6">
                  You can create sessions, read them and destroy them with the
                  session helper.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" +
                    "session()->new('name', 'lion')->new('age', '23');"
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" +
                    "session()->get(); // get all sessions\n" +
                    "// or\n" +
                    "session()->get('name');"
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" +
                    "session()->destroy(); // destroy all sessions\n" +
                    "// or\n" +
                    "session()->destroy('name');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">{"jwt"}</h5>

                <p className="fs-6">
                  Function to check if a jwt is valid, returns an object
                  (object) without the JWT exists and is valid
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "$jwt = jwt();"}
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">{"isError"}</h5>

                <p className="fs-6">
                  Function to check if a response object comes with errors.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" + "isError(success(200))); // return false"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">{"isSuccess"}</h5>

                <p className="fs-6">
                  Function to check if a response object is successful.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" + "isSuccess(error(500))); // return false"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">fetch</h5>

                <p className="fs-6">
                  The fetch helper allows you to make http requests, internally
                  with guzzle http.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "fetch('GET', 'my-url.com');"}
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">fetchXML</h5>

                <p className="fs-6">
                  The get helper allows you to make http requests to get xml in
                  String format, internally with http guzzle.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "fetchXML('GET', 'my-url.com');"}
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">storage_path</h5>

                <p className="fs-6">
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

              <div className="mb-3">
                <h5 className="pb-2 text-warning">finish</h5>

                <p className="fs-6">
                  The finish helper ends the execution of all processes.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "finish(success(200, 'my response'));"}
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">success</h5>

                <p className="fs-6">Function to display a success response.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "return success(200, 'message');"}
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">error</h5>

                <p className="fs-6">Function to display a error response.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "return error(500, 'message');"}
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">warning</h5>

                <p className="fs-6">Function to display a warning response.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "return warning(500, 'message');"}
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">info</h5>

                <p className="fs-6">Function to display a info response.</p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "return info(200, 'message');"}
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">vd</h5>

                <p className="fs-6">
                  The helper vd executes the function var_dump.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "vd(success(200, 'finished'));"}
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">json</h5>

                <p className="fs-6">
                  The json helper converts any value to json.
                </p>

                <CodeBlock
                  langueage={"php"}
                  content={"<?php\n\n" + "json(['name' => 'Sleon']);"}
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">logger</h5>

                <p className="fs-6">
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
            </>
          ),
        },
      },
    },
    docker: {
      name: "Docker",
      type: "sub_modules",
      list: {
        dockerfile: {
          name: "Dockerfile",
          code: (
            <>
              <div className="mb-3">
                <h3>Dockerfile</h3>

                <hr />
              </div>

              <p className="fs-6">
                Add the <strong>Dockerfile</strong> and{" "}
                <strong>docker-compose.yml</strong> to the root of the project,
                to create the container you must execute the command{" "}
                <strong>docker-compose up</strong>.
              </p>

              <CodeBlock
                language={"dockerfile"}
                content={
                  "# Dockerfile \n" +
                  "FROM php:8.2-apache \n" +
                  "ARG DEBIAN_FRONTEND=noninteractive \n\n" +
                  "RUN apt-get update \\ \n" +
                  "\t&& apt-get install -y nodejs \\ \n" +
                  "\t&& apt-get install -y npm \\ \n" +
                  "\t&& apt-get install -y default-mysql-client \\ \n" +
                  "\t&& apt-get install -y curl \\ \n" +
                  "\t&& apt-get install -y zsh \\ \n" +
                  "\t&& apt-get install -y wget \\ \n" +
                  "\t&& apt-get install -y git \\ \n" +
                  "\t&& apt-get install -y unzip \\ \n" +
                  "\t&& apt-get install -y sudo \\ \n" +
                  "\t&& apt-get install -y nano \\ \n" +
                  "\t&& apt-get install -y cron \\ \n" +
                  "\t&& apt-get install -y sendmail \\ \n" +
                  "\t&& apt-get install -y libpng-dev \\ \n" +
                  "\t&& apt-get install -y libzip-dev \\ \n" +
                  "\t&& apt-get install -y zlib1g-dev \\ \n" +
                  "\t&& apt-get install -y libonig-dev \\ \n" +
                  "\t&& apt-get install -y supervisor \\ \n" +
                  "\t&& apt-get install -y libevent-dev \\ \n" +
                  "\t&& apt-get install -y libssl-dev \\ \n" +
                  "\t&& pecl install ev \\ \n" +
                  "\t&& rm -rf /var/lib/apt/lists/* \\ \n" +
                  "\t&& docker-php-ext-install mbstring \\ \n" +
                  "\t&& docker-php-ext-install zip \\ \n" +
                  "\t&& docker-php-ext-install gd \\ \n" +
                  "\t&& docker-php-ext-install pdo_mysql \\ \n" +
                  "\t&& docker-php-ext-install mysqli \\ \n" +
                  "\t&& docker-php-ext-enable gd \\ \n" +
                  "\t&& docker-php-ext-enable zip \\ \n" +
                  "\t&& a2enmod rewrite \\ \n" +
                  "\t&& curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \\ \n" +
                  '\t&& sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" \n\n' +
                  "COPY . . \n" +
                  "COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf\n\n" +
                  "CMD chsh -s $(which zsh) \\ \n" +
                  "\t&& zsh \\ \n" +
                  "\t&& touch storage/logs/server/web-server.log \\ \n" +
                  "\t&& touch storage/logs/supervisord/supervisord.log \\ \n" +
                  "\t&& composer install \\ \n" +
                  "\t&& php lion npm:install lion-dev  \n" +
                  "\t&& php lion socket:logs \\ \n" +
                  "\t&& php lion resource:logs \\ \n" +
                  "\t&& /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf"
                }
              />
            </>
          ),
        },
        "docker-compose": {
          name: "docker-compose.yml",
          code: (
            <>
              <CodeBlock
                language={"yaml"}
                content={
                  "# docker-compose.yml \n" +
                  'version: "3.8"\n' +
                  "services:\n" +
                  "\tapp:\n" +
                  "\t\tcontainer_name: lion-framework-app\n" +
                  "\t\tbuild:\n" +
                  "\t\t\tcontext: .\n" +
                  "\t\t\tdockerfile: Dockerfile\n" +
                  "\t\tenv_file:\n" +
                  "\t\t\t- .env\n" +
                  "\t\tports:\n" +
                  '\t\t\t- "8000:8000"\n' +
                  '\t\t\t- "5173:5173"\n' +
                  "\t\tvolumes:\n" +
                  "\t\t\t- ./:/var/www/html\n" +
                  "\t\tdepends_on:\n" +
                  "\t\t\t- db\n" +
                  "\t\tnetworks:\n" +
                  "\t\t\t- lion\n" +
                  "\tdb:\n" +
                  "\t\timage: mysql\n" +
                  "\t\tcontainer_name: lion-framework-mysql\n" +
                  "\t\tcommand: --default-authentication-plugin=mysql_native_password\n" +
                  "\t\trestart: unless-stopped\n" +
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
                  "\t\tcontainer_name: lion-framework-phpmyadmin\n" +
                  "\t\trestart: unless-stopped\n" +
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
                  "\tlion:\n" +
                  "\t\tdriver: bridge"
                }
              />
            </>
          ),
        },
        run: {
          name: "Run Docker",
          code: (
            <>
              <div className="mb-3">
                <h3>Run Docker</h3>

                <hr />
              </div>

              <div className="mb-3">
                <p className="fs-6">
                  Run the Docker container in the background.
                </p>

                <CodeBlock language={"bash"} content={"docker-compose up"} />
              </div>

              <div className="mb-3">
                <p className="fs-6">
                  Rebuild the Docker container in the background.
                </p>

                <CodeBlock
                  language={"bash"}
                  content={"docker-compose up --build"}
                />
              </div>
            </>
          ),
        },
      },
    },
  };
}
