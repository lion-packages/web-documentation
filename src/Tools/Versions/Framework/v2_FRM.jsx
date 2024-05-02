import { Alert, Badge, ListGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListCommandsNew from "../../../pages/components/ListCommandsNew";
import CodeBlock from "../../../pages/components/CodeBlock";
import Title from "../../../pages/components/Title";
import { Fragment } from "react";
import Description from "../../../pages/components/Description";
import ExampleTitle from "../../../pages/components/ExampleTitle";
import EquivalentTo from "../../../pages/components/EquivalentTo";

export default function v2_FRM() {
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

              <Fragment>
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
              </Fragment>
            </Fragment>
          ),
        },
        install: {
          name: "Install",
          code: (
            <Fragment>
              <Title title={"Install"} />

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the framework is supported for
                development in Linux environments.
              </Alert>

              <Description
                description={
                  <Fragment>
                    Lion-Framework supports PHP versions{" "}
                    <label className="text-warning">(8.2/8.3)</label>
                  </Fragment>
                }
              />

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
            </Fragment>
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
            <Fragment>
              <Title title={"Command List"} />

              <ListCommandsNew />
            </Fragment>
          ),
        },
        create: {
          name: "Create Commands",
          code: (
            <Fragment>
              <Title title={"Create Commands"} />

              <Description
                description={"Create your commands from the terminal."}
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:command ExampleCommand"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Console\\Commands;

use Lion\\Command\\Command;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Output\\OutputInterface;

/**
 * ExampleCommand description
 *
 * @package App\\Console\\Commands
 */
class ExampleCommand extends Command
{
    /**
     * Configures the current command
     *
     * @return void
     */
    protected function configure(): void
    {
        $this
            ->setName('example')
            ->setDescription('');
    }

    /**
     * Initializes the command after the input has been bound and before the
     * input is validated
     *
     * This is mainly useful when a lot of commands extends one main command
     * where some things need to be initialized based on the input arguments and
     * options
     *
     * @param InputInterface $input [InputInterface is the interface implemented
     * by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface
     * implemented by all Output classes]
     *
     * @see InputInterface::bind()
     * @see InputInterface::validate()
     *
     * @return void
     */
    protected function initialize(InputInterface $input, OutputInterface $output): void
    {
    }

    /**
     * Interacts with the user
     *
     * This method is executed before the InputDefinition is validated
     *
     * This means that this is the only place where the command can
     * interactively ask for values of missing required arguments
     *
     * @param InputInterface $input [InputInterface is the interface implemented
     * by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface
     * implemented by all Output classes]
     *
     * @return void
     */
    protected function interact(InputInterface $input, OutputInterface $output): void
    {
    }

    /**
     * Executes the current command.
     *
     * This method is not abstract because you can use this class
     * as a concrete class. In this case, instead of defining the
     * execute() method, you set the code to execute by passing
     * a Closure to the setCode() method.
     *
     * @param InputInterface $input [InputInterface is the interface implemented
     * by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface
     * implemented by all Output classes]
     *
     * @return int 0 if everything went fine, or an exit code
     *
     * @throws LogicException When this abstract method is not implemented
     *
     * @see setCode()
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('ExampleCommand');

        return Command::SUCCESS;
    }
}
`}
              />
            </Fragment>
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
            <Fragment>
              <Title title={"Database Config"} />

              <Description
                description={
                  <Fragment>
                    To make a direct connection to the database, go to{" "}
                    <Badge bg="secondary">config/database.php</Badge>, for more
                    information read{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Database
                    </Link>
                    .
                  </Fragment>
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Database\\Driver;

/**
 * -----------------------------------------------------------------------------
 * Start database service
 * -----------------------------------------------------------------------------
 * describe connections to establish connecting to multiple databases
 * -----------------------------------------------------------------------------
 **/

Driver::run([
    'default' => 'lion_database',
    'connections' => [
        'lion_database' => [
            'type' => env('DB_TYPE', 'mysql'),
            'host' => env('DB_HOST', 'mysql'),
            'port' => env('DB_PORT', 3306),
            'dbname' => env('DB_NAME', 'lion_database'),
            'user' => env('DB_USER', 'root'),
            'password' => env('DB_PASSWORD', 'lion')
        ]
    ]
]);
`}
              />
            </Fragment>
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
        "create-crud": {
          name: "Create Crud",
          code: (
            <Fragment>
              <Title title={"Create Crud"} />

              <Description
                description={"Generate the crud of a specific entity."}
              />

              <CodeBlock
                language={"bash"}
                content={"php lion db:crud entity_name"}
              />
            </Fragment>
          ),
        },
      },
    },
    routing: {
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
                  to={"/docs/library/content"}
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
            <Fragment>
              <Title title={"Create Controllers"} />

              <Fragment>
                <Description
                  description={
                    <Fragment>
                      Controllers are stored in{" "}
                      <Badge bg="secondary">{"app/http/Controllers/"}</Badge>.
                    </Fragment>
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:controller HomeController"}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

declare(strict_types=1);

namespace App\\Http\\Controllers;

/**
 * Description
 *
 * @package App\\Http\\Controllers
 */
class HomeController
{
    /**
     * Description
     *
     * @return object
     */
    public function example(): object
    {
        return success();
    }
}
`}
                />
              </Fragment>

              <hr />

              <Fragment>
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

declare(strict_types=1);

namespace App\\Http\\Controllers;

use App\\Models\\HomeModel;

/**
 * Description
 *
 * @package App\\Http\\Controllers
 */
class HomeController
{
    /**
     * Description
     *
     * @param HomeModel $model [Description]
     *
     * @return array|object
     */
    public function example(HomeModel $model): array|object
    {
        return $homeModel->exampleDB();
    }
}
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        use: {
          name: "Use Controllers",
          code: (
            <Fragment>
              <Title title={"Use Controllers"} />

              <Description
                description={
                  "When you create the controllers and define the methods you can add them to your web routes to consume your APIs."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use App\\Http\\Controllers\\HomeController;

Route::get('home', [HomeController::class, 'method_name']);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    services: {
      name: "Services",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Services",
          code: (
            <Fragment>
              <Title title={"Create Services"} />

              <Description description={"Create services from the terminal."} />

              <CodeBlock
                language={"bash"}
                content={"php lion new:service ExampleService"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Services;

/**
 * Service 'ExampleService'
 *
 * @package App\\Http\\Services
 */
class ExampleService
{
}
`}
              />
            </Fragment>
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
            <Fragment>
              <Title title={"Create Models"} />

              <Description
                description={
                  <Fragment>
                    Models are stored in{" "}
                    <Badge bg="secondary">{"app/Models"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:model HomeModel"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Models;

use Lion\\Database\\Drivers\\MySQL as DB;

/**
 * Description
 *
 * @package App\\Models
 */
class HomeModel
{
    /**
     * Description
     *
     * @return array|object
     */
    public function exampleDB(): array|object
    {
        return DB::table('table_name')->select()->getAll();
    }
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Models",
          code: (
            <Fragment>
              <Title title={"Use Models"} />

              <Description
                description={
                  "Create the required models and run them on your controllers."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Controllers;

use App\\Models\\HomeModel;

/**
 * Description
 *
 * @package App\\Http\\Controllers
 */
class HomeController
{
    /**
     * Description
     *
     * @param HomeModel $model [Description]
     *
     * @return array|object
     */
    public function example(HomeModel $model): array|object
    {
        return $homeModel->exampleDB();
    }
}
`}
              />
            </Fragment>
          ),
        },
      },
    },
    interfaces: {
      name: "Interfaces",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Interfaces",
          code: (
            <Fragment>
              <Title title={"Create Interfaces"} />

              <Description
                description={
                  "Automatically generates interfaces for PHP classes, making it easier to implement abstractions and promoting better code structure."
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:interface ExampleInterface"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Interfaces;

/**
 * Description of the 'ExampleInterface' interface
 *
 * @package App\\Interfaces
 */
interface ExampleInterface
{
    /**
     * Description
     *
     * @return object
     */
    public function abstractMethod(): object
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Interfaces",
          code: (
            <Fragment>
              <Title title={"Use Interfaces"} />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Services;

use App\\Interfaces\\ExampleInterface;

/**
 * Description
 *
 * @package App\\Http\\Services
 */
class ExampleService implements ExampleInterface
{
    /**
     * {@inheritdoc}
     */
    public function abstractMethod(): object
    {
        return success();
    }
}
`}
              />
            </Fragment>
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
            <Fragment>
              <Title title={"Entity Capsules"} />

              <Description
                description={
                  "You can generate a capsule class with the properties of an entity."
                }
              />

              <Alert variant={"info"}>
                <strong>Note:</strong> Capsule classes by default are stored in
                the <Badge bg="secondary">database/Class/</Badge> directory.
              </Alert>

              <CodeBlock
                language={"bash"}
                content={"php lion db:mysql:capsule entity_name"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

declare(strict_types=1);

namespace Database\\Class;

use Lion\\Bundle\\Interface\\CapsuleInterface;

/**
 * Description
 *
 * @property int|null $id [Property for id]
 *
 * @package Database\\Class
 */
class EntityName implements CapsuleInterface 
{
    /**
     * [Property for id]
     *
     * @var int|null $id
     */
    private ?int $id = null;

    /**
     * {@inheritdoc}
     * */
    public function jsonSerialize(): array
    {
        return get_object_vars($this);
    }

    /**
     * {@inheritdoc}
     * */
    public function capsule(): EntityName
    {
        $this
            ->setId(request->id ?? null);

        return $this;
    }

    /**
     * Getter method for 'id'
     *
     * @return int|null $id
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Setter method for 'id'
     *
     * @param int|null $id
     *
     * @return EntityName
     */
    public function setId(?int $id = null): EntityName
    {
        $this->id = $id;

        return $this;
    }
}
`}
              />
            </Fragment>
          ),
        },
        custom: {
          name: "Custom Capsules",
          code: (
            <Fragment>
              <Title title={"Custom Capsules"} />

              <Description
                description={
                  "Create custom capsule classes with unique properties for different uses."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:capsule EntityName"}
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

namespace Database\\Class;

use Lion\\Bundle\\Interface\\CapsuleInterface;

/**
 * Description
 *
 * @package Database\\Class
 */
class EntityName implements CapsuleInterface 
{
    /**
     * {@inheritdoc}
     * */
    public function jsonSerialize(): array
    {
        return get_object_vars($this);
    }

    /**
     * {@inheritdoc}
     * */
    public function capsule(): EntityName
    {
        return $this;
    }
}
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <Alert variant="info">
                  <strong>Note: </strong>You can add{" "}
                  <strong>[-p, --properties]</strong> option to add the class
                  properties.
                </Alert>

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:capsule EntityName -p id:int"}
                />

                <CodeBlock
                  language={"bash"}
                  content={
                    "php lion new:capsule EntityName --properties id:int"
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

namespace Database\\Class;

use Lion\\Bundle\\Interface\\CapsuleInterface;

/**
 * Description
 *
 * @property int|null $id [Property for id]
 *
 * @package Database\\Class
 */
class EntityName implements CapsuleInterface 
{
    /**
     * [Property for id]
     *
     * @var int|null $id
     */
    private ?int $id = null;

    /**
     * {@inheritdoc}
     * */
    public function jsonSerialize(): array
    {
        return get_object_vars($this);
    }

    /**
     * {@inheritdoc}
     * */
    public function capsule(): EntityName
    {
        $this
            ->setId(request->id ?? null);

        return $this;
    }

    /**
     * Getter method for 'id'
     *
     * @return int|null $id
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Setter method for 'id'
     *
     * @param int|null $id
     *
     * @return EntityName
     */
    public function setId(?int $id = null): EntityName
    {
        $this->id = $id;

        return $this;
    }
}
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
    exceptions: {
      name: "Exceptions",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Exceptions",
          code: (
            <Fragment>
              <Title title="Create Exceptions" />

              <Description
                description={
                  "Automatically generates custom exception classes in PHP, streamlining error handling and making it easier to create more readable and maintainable code."
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:exception ExampleException"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Exceptions;

use Exception;
use JsonSerializable;

/**
 * Description of 'ExampleException'
 *
 * @package App\\Exceptions
 */
class ExampleException extends Exception implements JsonSerializable
{
    /**
     * {@inheritdoc}
     */
    public function jsonSerialize(): mixed
    {
        return error($this->getMessage(), $this->getCode(), [
            'file' => $this->getFile(),
            'line' => $this->getLine(),
        ]);
    }
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Exceptions",
          code: (
            <Fragment>
              <Title title="Use Exceptions" />

              <CodeBlock
                language={"php"}
                content={`<?php 

use App\\Exceptions\\ExampleException;

throw new ExampleException('Something went wrong!');
`}
              />
            </Fragment>
          ),
        },
      },
    },
    "html-templates": {
      name: "HTML Templates",
      type: "sub_modules",
      list: {
        create: {
          name: "HTML Templates",
          code: (
            <Fragment>
              <Title title="HTML Templates" />

              <Description
                description={"Create your own HTML templates to send emails."}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Html;

use Lion\\Bundle\\Helpers\\Commands\\Html;
use Lion\\Bundle\\Interface\\HtmlInterface;

/**
 * Define an HTML template
 *
 * @package App\\Html
 */
class ExampleHtml extends Html implements HtmlInterface
{
    /**
     * {@inheritdoc}
     */
    public function template(): ExampleHtml
    {
        $this->add(
            <<<HTML
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>HTML Template</title>
            </head>
            <body>
                <h1>HTML Template (--REPLACE--)</h1>
            </body>
            </html>
            HTML
        );

        return $this;
    }
}
`}
              />
            </Fragment>
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
            <Fragment>
              <Title title={"Create Migration"} />

              <Description
                description={
                  <Fragment>
                    Migrations are used to create the structure of your
                    database, you can define the tables with their properties,
                    relate them, read{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Database
                    </Link>
                    , You can select a migration type by running the command.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:migration example-migration"}
              />

              <ul className="mb-3" style={{ listStyle: "none" }}>
                <li>- Table</li>
                <li>- View</li>
                <li>- Store-Procedure</li>
              </ul>

              <Description
                description={
                  <Fragment>
                    The current configuration defaults to <strong>Table</strong>{" "}
                    as migration.
                  </Fragment>
                }
              />
            </Fragment>
          ),
        },
        empty: {
          name: "Empty Migrations",
          code: (
            <Fragment>
              <Title title={"Empty Migrations"} />

              <Description
                description={"Empties all tables built with the migrations."}
              />

              <CodeBlock language={"bash"} content={"php lion migrate:empty"} />
            </Fragment>
          ),
        },
        run: {
          name: "Run Migration",
          code: (
            <Fragment>
              <Title title={"Run Migration"} />

              <Fragment>
                <Description
                  description={
                    "Run all the migrations you have with a single command, these processes are executed and added on the specified databases."
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion migrate:fresh"}
                />
              </Fragment>

              <Fragment>
                <Description
                  description={"You can run the seeds with migrations."}
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion migrate:fresh --seed"}
                />
              </Fragment>
            </Fragment>
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
            <Fragment>
              <Title title={"Create Project"} />

              <Description
                description={
                  <Fragment>
                    Projects with vite allow you to create simple web pages
                    using npm, when initialized it should call the project name
                    assigned to the folder, projects with vite are stored in{" "}
                    <Badge bg="secondary">{"vite/"}</Badge>.
                  </Fragment>
                }
              />

              <Alert variant="info">
                <strong>Note: </strong>the default project type is{" "}
                <strong>[React]</strong>, for more information about the
                properties for generating projects with vite select the Command
                section in the list.
              </Alert>

              <Alert variant="info">
                <strong>Note: </strong>each time a project is created with vite,
                the base information for the vite configuration is added, where
                a config object will be added to hold the changes in real time,
                see <strong>[vite.config.js]</strong> for the configuration.
              </Alert>

              <CodeBlock
                language={"bash"}
                content={"php npm init project-name"}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Project",
          code: (
            <Fragment>
              <Title title={"Use Project"} />

              <Description
                description={
                  "Go to your project location to start the local server."
                }
              />

              <CodeBlock
                language={"bash"}
                content={"cd vite/project-name/ && npm run dev"}
              />
            </Fragment>
          ),
        },
        install: {
          name: "Install Dependencies",
          code: (
            <Fragment>
              <Title title={"Install Dependencies"} />

              <Description
                description={
                  "Install the required dependencies for your frontend web application with NPM by running the command."
                }
              />

              <CodeBlock language={"bash"} content={"php npm install axios"} />

              <CodeBlock
                language={"bash"}
                content={'php npm install "axios dayjs"'}
              />
            </Fragment>
          ),
        },
        update: {
          name: "Update Dependencies",
          code: (
            <Fragment>
              <Title title={"Update Dependencies"} />

              <Description
                description={
                  "To update the installed dependencies you must run the command."
                }
              />

              <CodeBlock language={"bash"} content={"php npm update"} />
            </Fragment>
          ),
        },
        uninstall: {
          name: "Uninstall Dependencies",
          code: (
            <Fragment>
              <Title title={"Uninstall Dependencies"} />

              <Description
                description={
                  "To uninstall the installed dependencies you must run the command."
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion npm:uninstall axios"}
              />

              <CodeBlock
                language={"bash"}
                content={'php npm uninstall "axios crypto-js"'}
              />
            </Fragment>
          ),
        },
        dist: {
          name: "Generate Dist",
          code: (
            <Fragment>
              <Title title={"Generate Dist"} />

              <Description
                description={
                  "To generate the dist of the vite project you must execute the command."
                }
              />

              <CodeBlock language={"bash"} content={"php npm build"} />
            </Fragment>
          ),
        },
      },
    },
    mailer: {
      name: "Mailer",
      type: "sub_modules",
      list: {
        config: {
          name: "Mailer Config",
          code: (
            <Fragment>
              <Title title="Mailer Config" />

              <Description
                description={
                  <Fragment>
                    To send mail with different accounts it is necessary to add
                    the accounts and add the service that these accounts use
                    (SymfonyMailer/PHPMailer), go to{" "}
                    <Badge bg="secondary">config/email.php</Badge>, read{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Mailer
                    </Link>
                    .
                  </Fragment>
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Mailer\\Mailer;

/**
 * -----------------------------------------------------------------------------
 * Start mail service
 * -----------------------------------------------------------------------------
 * describe connections to establish connecting to multiple databases
 * -----------------------------------------------------------------------------
 **/

Mailer::initialize([
    env('MAIL_NAME', 'lion-app') => [
        'name' => env('MAIL_NAME', 'lion-app'),
        'type' => env('MAIL_TYPE', 'symfony'),
        'host' => env('MAIL_HOST', 'mailhog'),
        'username' => env('MAIL_USER_NAME', 'lion-app'),
        'password' => env('MAIL_PASSWORD', 'lion'),
        'port' => (int) env('MAIL_PORT', 1025),
        'encryption' => env('MAIL_ENCRYPTION', 'tls'),
        'debug' => env('MAIL_DEBUG', false)
    ]
], env('MAIL_NAME', 'lion-app'));

`}
              />
            </Fragment>
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
                  to={"/docs/library/content"}
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
            <Fragment>
              <Title title={"Response"} />

              <Description
                description={
                  <Fragment>
                    The Response class implements different response functions
                    on HTTP requests, the system internally initializes a{" "}
                    <Badge bg={"secondary"}>response</Badge> constant to access
                    the functions. more information in{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Request
                    </Link>
                    .
                  </Fragment>
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

return success('message');
`}
                />

                <EquivalentTo />

                <CodeBlock
                  language={"json"}
                  content={`{
  "code": 200,
  "status": "success",
  "message": "message"
}`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

return error('message');
`}
                />

                <EquivalentTo />

                <CodeBlock
                  language={"json"}
                  content={`{
  "code": 500,
  "status": "error",
  "message": "message"
}`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={3} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

use Lion\\Request\\Request;

return error('message', Request::HTTP_UNAUTHORIZED);
`}
                />

                <EquivalentTo />

                <CodeBlock
                  language={"json"}
                  content={`{
  "code": 401,
  "status": "error",
  "message": "message"
}`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={4} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

use Lion\\Request\\Request;

return response('session-error', 'message', Request::HTTP_UNAUTHORIZED);
`}
                />

                <EquivalentTo />

                <CodeBlock
                  language={"json"}
                  content={`{
  "code": 401,
  "status": "session-error",
  "message": "message"
}`}
                />
              </Fragment>
            </Fragment>
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
            <Fragment>
              <Title title={"Create Rule"} />

              <Description
                description={
                  <Fragment>
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
                    , you can set language response from environment variables
                    with lang language preference to{" "}
                    <Badge bg={"secondary"}>.env</Badge> more information in{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Security
                    </Link>
                    , rules are stored in{" "}
                    <Badge bg="secondary">{"app/Rules/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:rule ExampleRule"}
              />

              <Description
                description={
                  "You can generate all the database rules for each entity, for all its properties."
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion db:rules entity_name"}
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

              <CodeBlock
                langueage={"php"}
                content={`<?php
                
declare(strict_types=1);

namespace App\\Rules;

use Lion\\Bundle\\Helpers\\Rules;
use Lion\\Bundle\\Interface\\RulesInterface;
use Valitron\\Validator;

class ExampleRule extends Rules implements RulesInterface
{
    /**
     * [field for 'example']
     *
     * @var string $field
     */
    public string $field = 'example';

    /**
     * [description for 'example']
     *
     * @var string $desc
     */
    public string $desc = '';

    /**
     * [value for 'example']
     *
     * @var string $value;
     */
    public string $value = '';

    /**
     * [Defines whether the column is optional for postman collections]
     *
     * @var bool $disabled;
     */
    public bool $disabled = false;

    /**
     * {@inheritdoc}
     */
    public function passes(): void
    {
        $this->validate(function(Validator $validator) {
            $validator
                ->rule('required', $this->field)
                ->message('the "example" property is required');
        });
    }
}

`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Rule",
          code: (
            <Fragment>
              <Title title={"Use Rule"} />

              <Description
                description={
                  <Fragment>
                    {" "}
                    Add your rules to different routes in{" "}
                    <Badge bg={"secondary"}>routes/rules.php</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

declare(strict_types=1);

use App\\Rules\\EmailRule;

/**
 * -----------------------------------------------------------------------------
 * Rules
 * -----------------------------------------------------------------------------
 * This is where you can register your rules for validating forms
 * -----------------------------------------------------------------------------
 */

return [

    /**
     * [Routes for the HTTP POST protocol]
     */
    
    'POST' => [
        '/api/auth/signin' => [
            EmailRule::class
        ],
    ]

];
`}
              />

              <p className="fs-6">You can reuse a rule in different routes.</p>

              <CodeBlock
                langueage={"php"}
                content={`<?php

declare(strict_types=1);

use App\\Rules\\EmailRule;

/**
 * -----------------------------------------------------------------------------
 * Rules
 * -----------------------------------------------------------------------------
 * This is where you can register your rules for validating forms
 * -----------------------------------------------------------------------------
 */

return [

    /**
     * [Routes for the HTTP POST protocol]
     */
    
    'POST' => [
        '/api/auth/signin' => [
            EmailRule::class
        ],
        '/api/auth/register' => [
            EmailRule::class
        ],
    ]
    
];
`}
              />
            </Fragment>
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
            <Fragment>
              <Title title={"Create Traits"} />

              <Description
                description={
                  <Fragment>
                    Traits are stored in{" "}
                    <Badge bg="secondary">{"app/Traits/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:trait ExampleTrait"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Traits;

trait ExampleTrait
{
}
`}
              />
            </Fragment>
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
            <Fragment>
              <Title title={"Create Enums"} />

              <Description
                description={
                  <Fragment>
                    Enums are stored in{" "}
                    <Badge bg="secondary">{"app/Enums/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:enum StatusEnum"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Enums;

enum StatusEnum: string
{
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
            </Fragment>
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
            <Fragment>
              <Title title={"Create Middleware"} />

              <Description
                description={
                  <Fragment>
                    Middleware is stored in{" "}
                    <Badge bg="secondary">app/Http/Middleware</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:middleware JWTMiddleware"}
              />
            </Fragment>
          ),
        },
        "add-functions": {
          name: "Add functions",
          code: (
            <Fragment>
              <Title title={"Add functions"} />

              <Description
                description={
                  "We can add the necessary functions in each middleware."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Middleware;

use Lion\\Files\\Store;
use Lion\\Request\\Request;
use Lion\\Request\\Response;
use Lion\\Security\\JWT;
use Lion\\Security\\RSA;

/**
 * Responsible for filtering and validating the JWT sent through an HTTP request
 *
 * @property Store $store [Store class object]
 * @property RSA $rsa [RSA class object]
 * @property JWT $jwt [JWT class object]
 *
 * @package App\\Http\\Middleware
 */
class JWTMiddleware
{
    /**
     * [Object of class Store]
     *
     * @var Store $store
     */
    private Store $store;

    /**
     * [Object of class RSA]
     *
     * @var RSA $rsa
     */
    private RSA $rsa;

    /**
     * [Object of class JWT]
     *
     * @var JWT $jwt
     */
    private JWT $jwt;

    /**
     * @required
     * */
    public function setStore(Store $store): void
    {
        $this->store = $store;
    }

    /**
     * @required
     * */
    public function setRSA(RSA $rsa): void
    {
        $this->rsa = $rsa;
    }

    /**
     * @required
     * */
    public function setJWT(JWT $jwt): void
    {
        $this->jwt = $jwt;
    }

    /**
     * Initialize RSA keys
     *
     * @param string $path [RSA key paths]
     *
     * @return void
     */
    private function initRSA(string $path): void
    {
        $this->rsa
            ->setUrlPath(storage_path($path))
            ->init();
    }

    /**
     * Validate the session defined in the JWT
     *
     * @param object $jwt [JWT object]
     *
     * @return void
     */
    private function validateSession(object $jwt): void
    {
        if (isError($jwt)) {
            finish(response(Response::SESSION_ERROR, $jwt->message, Request::HTTP_UNAUTHORIZED));
        }

        if (!isset($jwt->data->session)) {
            finish(response(Response::SESSION_ERROR, 'undefined session', Request::HTTP_FORBIDDEN));
        }
    }

    /**
     * Validate if a JWT exists in the headers
     *
     * @return void
     */
    public function existence(): void
    {
        if (!isset($_SERVER['HTTP_AUTHORIZATION'])) {
            finish(response(Response::SESSION_ERROR, 'the JWT does not exist', Request::HTTP_UNAUTHORIZED));
        }
    }

    /**
     * Validate a JWT in headers even though the signature is not validated
     *
     * @return void
     */
    public function authorizeWithoutSignature(): void
    {
        $this->existence();

        $splitToken = explode('.', $this->jwt->getJWT());

        if (arr->of($splitToken)->length() != 3) {
            finish(response(Response::SESSION_ERROR, 'invalid JWT [AWS-1]', Request::HTTP_UNAUTHORIZED));
        }

        $data = (object) ((object) json_decode(base64_decode($splitToken[1]), true))->data;

        if (!isset($data->users_code)) {
            finish(response(Response::SESSION_ERROR, 'invalid JWT [AWS-2]', Request::HTTP_FORBIDDEN));
        }

        $path = env('RSA_URL_PATH') . "{$data->users_code}/";

        if (isError($this->store->exist(storage_path($path)))) {
            finish(response(Response::SESSION_ERROR, 'invalid JWT [AWS-3]', Request::HTTP_FORBIDDEN));
        }

        $this->initRSA($path);

        $token = $this->jwt
            ->config(['publicKey' => $this->rsa->getPublicKey()])
            ->decode($this->jwt->getJWT())
            ->get();

        $this->validateSession($token);

        if (!$token->data->session || !isset($token->data->session)) {
            finish(
                response(Response::SESSION_ERROR, 'user not logged in, you must log in', Request::HTTP_UNAUTHORIZED)
            );
        }
    }

    /**
     * Validate a JWT to check if it is still valid and the session is true
     *
     * @return void
     */
    public function authorize(): void
    {
        $this->initRSA(env('RSA_URL_PATH'));

        $this->existence();

        $token = $this->jwt
            ->config(['publicKey' => $this->rsa->getPublicKey()])
            ->decode($this->jwt->getJWT())
            ->get();

        $this->validateSession($token);

        if (!$token->data->session || !isset($token->data->session)) {
            finish(
                response(Response::SESSION_ERROR, 'user not logged in, you must log in', Request::HTTP_UNAUTHORIZED)
            );
        }
    }

    /**
     * Validate a JWT to check if it is still valid and the session is false
     *
     * @return void
     */
    public function notAuthorize(): void
    {
        $this->initRSA(env('RSA_URL_PATH'));

        $this->existence();

        $token = $this->jwt
            ->config(['publicKey' => $this->rsa->getPublicKey()])
            ->decode($this->jwt->getJWT())
            ->get();

        $this->validateSession($token);

        if ($token->data->session) {
            finish(
                response(
                    Response::SESSION_ERROR,
                    'user in session, you must close the session',
                    Request::HTTP_UNAUTHORIZED
                )
            );
        }
    }
}
`}
              />
            </Fragment>
          ),
        },
        "add-middleware": {
          name: "Add Middleware",
          code: (
            <Fragment>
              <Title title={"Add Middleware"} />

              <Description
                description={
                  <Fragment>
                    To import middleware to the routes we must first import the
                    namespace of the middleware and inside this add an array to
                    create custom middleware.{" "}
                    <Badge bg={"secondary"}>config/middleware.php</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use App\\Http\\Middleware\\JWTMiddleware;
use Lion\\Bundle\\Helpers\\Http\\Routes;
use Lion\\Route\\Middleware;

/**
 * -----------------------------------------------------------------------------
 * Web middleware
 * -----------------------------------------------------------------------------
 * This is where you can register web middleware for your application
 * -----------------------------------------------------------------------------
 **/

Routes::setMiddleware([

    /**
     * [Filters to validate different states with JWT]
     */

    new Middleware('jwt-existence', JWTMiddleware::class, 'existence'),

    new Middleware('jwt-authorize', JWTMiddleware::class, 'authorize'),

    new Middleware('jwt-not-authorize', JWTMiddleware::class, 'notAuthorize'),

    new Middleware('jwt-without-signature', JWTMiddleware::class, 'authorizeWithoutSignature'),

]);
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Middleware",
          code: (
            <Fragment>
              <Title title={"Use Middleware"} />

              <Description
                description={
                  "You can use your middleware on routes and create more secure web applications."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use App\\Http\\Controllers\\HomeController;

Route::middleware(['jwt-exist', 'jwt-authorize'], function() {
	Route::get('/', [HomeController::class, 'index']);
});
`}
              />
            </Fragment>
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
            <Fragment>
              <Title title={"Create Factory"} />

              <Description
                description={
                  <Fragment>
                    Factories are stored in{" "}
                    <Badge bg="secondary">{"database/Factory/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:factory ExampleFactory"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

declare(strict_types=1);

namespace Database\\Factory;

use Lion\\Bundle\\Interface\\FactoryInterface;

/**
 * Description
 *
 * @package Database\\Factory
 */
class ExampleFactory implements FactoryInterface
{
    /**
     * {@inheritdoc}
     **/
    public static function columns(): array
    {
        return [
            'name'
        ];
    }

    /**
     * {@inheritdoc}
     **/
    public static function definition(): array
    {
        return [
            [
                fake()->name()
            ],
            [
                fake()->name()
            ]
        ];
    }
}
`}
              />
            </Fragment>
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
            <Fragment>
              <Title title={"Create Seed"} />

              <Description
                description={
                  <Fragment>
                    Seed are stored in{" "}
                    <Badge bg="secondary">{"database/Seed/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:seed ExampleSeed"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

declare(strict_types=1);

namespace Database\\Seed;

use Database\\Factory\\ExampleFactory;
use Lion\\Bundle\\Interface\\SeedInterface;
use Lion\\Database\\Drivers\\MySQL as DB;

/**
* Description
*
* @package Database\\Seed
*/
class ExampleSeed implements SeedInterface
{
  /**
   * [Index number for seed execution priority]
   *
   * @const INDEX
   */
  const INDEX = null;

  /**
   * {@inheritdoc}
   **/
  public function run(): object
  {
      return DB::table('example')
          ->bulk(ExampleFactory::columns(), ExampleFactory::definition())
          ->execute();
  }
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Seed",
          code: (
            <Fragment>
              <Title title={"Use Seed"} />

              <Description
                description={
                  "Run your seeds to add test data to your local database."
                }
              />

              <CodeBlock language={"bash"} content={"php lion db:seed"} />
            </Fragment>
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
            <Fragment>
              <Title title={"Create Socket"} />

              <Description
                description={
                  <Fragment>
                    Websockets interact with the{" "}
                    <a
                      href="http://socketo.me/docs/"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      Ratchet
                    </a>{" "}
                    library, Sockets are stored in{" "}
                    <Badge bg="secondary">{"app/Http/Sockets/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:socket ExampleSocket"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Sockets;

use Exception;
use Ratchet\\ConnectionInterface;
use Ratchet\\MessageComponentInterface;
use SplObjectStorage;

/**
 * Description of Socket 'ExampleSocket'
 *
 * @property SplObjectStorage $clients [List of clients connected to the Socket]
 *
 * @package App\\Http\\Sockets
 */
class ExampleSocket implements MessageComponentInterface
{
    /**
     * [Defines the Socket Port]
     *
     * @const PORT
     */
    const PORT = 9000;

    /**
     * [Defines the Socket Host]
     *
     * @const HOST
     */
    const HOST = '0.0.0.0';

    /**
     * [List of clients connected to the Socket]
     *
     * @var SplObjectStorage $clients
     */
    protected SplObjectStorage $clients;

    /**
     * Class Constructor
     */
    public function __construct()
    {
        $this->clients = new SplObjectStorage();
    }

    /**
     * {@inheritdoc}
     */
    public function onOpen(ConnectionInterface $conn): void
    {
        echo("New connection! ({$conn->resourceId})");

        $this->clients->attach($conn);
    }

    /**
     * {@inheritdoc}
     */
    public function onMessage(ConnectionInterface $from, $msg): void
    {
        foreach ($this->clients as $client) {
            if ($from !== $client) {
                $client->send($msg);
            }
        }
    }

    /**
     * {@inheritdoc}
     */
    public function onClose(ConnectionInterface $conn): void
    {
        $this->clients->detach($conn);
    }

    /**
     * {@inheritdoc}
     */
    public function onError(ConnectionInterface $conn, Exception $e): void
    {
        $conn->close();
    }
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Sockets",
          code: (
            <Fragment>
              <Title title={"Use Sockets"} />

              <Description
                description={
                  "To execute a socket you must do it from the console."
                }
              />

              <CodeBlock language={"bash"} content={"php lion socket:serve"} />
            </Fragment>
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
            <Fragment>
              <Title title={"Create Test"} />

              <Description
                description={
                  <Fragment>
                    Add to your web application with{" "}
                    <strong>Lion-Framework</strong> test to perform the
                    necessary quality checks of your system, the tests are
                    implemented with the help of{" "}
                    <a
                      href="https://phpunit.de/"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      PHPUnit
                    </a>
                    .
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:test TestName"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use Lion\\Test\\Test;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
    }

    protected function tearDown(): void
    {
    }
}
`}
              />
            </Fragment>
          ),
        },
        run: {
          name: "Run Test",
          code: (
            <Fragment>
              <Title title={"Run Test"} />

              <Description description={"Run all tests via command line."} />

              <CodeBlock language={"bash"} content={"php lion test"} />
            </Fragment>
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
            <Fragment>
              <Title title={"Create"} />

              <Description
                description={
                  <Fragment>
                    Create public and private keys, perform encryption and
                    decryption with them{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Security RSA lease
                    </Link>
                    , you can generate the keys from the terminal once the
                    parameters are set from the environment variables.
                  </Fragment>
                }
              />

              <Alert variant="info">
                <strong>Note: </strong> all generated keys are stored inside{" "}
                <Badge bg="secondary">{"storage/"}</Badge>.
              </Alert>

              <CodeBlock language={"bash"} content={"php lion new:rsa"} />

              <Description
                description={
                  <Fragment>
                    You can select a different folder than the selected one from
                    the environment variables with the{" "}
                    <Badge bg="secondary">{"--path"}</Badge> option.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:rsa --path keys-user-1/"}
              />
            </Fragment>
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
            <Fragment>
              <Title title={"Create"} />

              <Description
                description={
                  <Fragment>
                    Generate (KEY - IV) to encrypt and decrypt with AES,{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      lease Lion-Security AES
                    </Link>
                    , you can generate the keys from the terminal once the
                    parameters are set from the environment variables.
                  </Fragment>
                }
              />

              <CodeBlock language={"bash"} content={"php lion new:aes"} />
            </Fragment>
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

declare(strict_types=1);

use App\Rules\EmailRule;

/**
 * -----------------------------------------------------------------------------
 * Rules
 * -----------------------------------------------------------------------------
 * This is where you can register your rules for validating forms
 * -----------------------------------------------------------------------------
 */

return [

    /**
     * [Routes for the HTTP POST protocol]
     */
    
    'POST' => [
        '/api/auth/signin' => [
            EmailRule::class
        ],
        '/api/auth/register' => [
            EmailRule::class
        ],
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
            <Fragment>
              <Title title={"Cors Config"} />

              <Description
                description={
                  <Fragment>
                    Enable and add the necessary headers for your web
                    application, go to{" "}
                    <Badge bg="secondary">config/cors.php</Badge> and set your
                    headers.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Request\\Request;
use Lion\\Route\\Route;

/**
 * -----------------------------------------------------------------------------
 * Cross-Origin Resource Sharing (CORS) Configuration
 * -----------------------------------------------------------------------------
 * Here you can configure your settings for cross-origin resource
 * sharing or "CORS". This determines which cross-origin operations
 * can be executed in web browsers.
 * -----------------------------------------------------------------------------
 */

Request::header('Access-Control-Allow-Origin', '*');

Request::header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

Request::header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

if (Route::OPTIONS === $_SERVER['REQUEST_METHOD']) {
    http_response_code(Request::HTTP_OK);

    exit;
}

Request::header('Content-Type', 'application/json; charset=UTF-8');

Request::header('Access-Control-Max-Age', '0');

Request::header('Allow', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
`}
              />
            </Fragment>
          ),
        },
      },
    },
    schedule: {
      name: "Schedule",
      type: "sub_modules",
      list: {
        "create-cron": {
          name: "Create Cron",
          code: (
            <Fragment>
              <Fragment>
                <Title title={"Create Cron"} />

                <Alert variant={"info"}>
                  <strong>Note: </strong>Currently the framework is supported
                  for development in Linux environments.
                </Alert>

                <Alert variant={"info"}>
                  <strong>Note: </strong>You must have the <strong>cron</strong>{" "}
                  library installed.
                </Alert>

                <Alert variant={"info"}>
                  <strong>Note: </strong>When you create a scheduled task, a log
                  file is generated in the{" "}
                  <Badge bg="secondary">storage/logs/cron/</Badge> path.
                </Alert>

                <Description
                  description={"Create a scheduled task from terminal."}
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:cron ExampleCron"}
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

namespace App\\Console\\Cron;

use App\\Console\\Commands\\ExampleCommand;
use Lion\\Bundle\\Helpers\\Commands\\Schedule\\Schedule;
use Lion\\Bundle\\Interface\\ScheduleInterface;

/**
 * schedule ExampleCron
 *
 * @package App\\Console\\Cron
 */
class ExampleCron implements ScheduleInterface
{
    /**
     * {@inheritdoc}
     */
    public function schedule(Schedule $schedule): void
    {
        $schedule
            ->cron('* * * * *')
            ->command(ExampleCommand::class)
            ->log('example');
    }
}
`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Schedule List"} />

                <Description
                  description={"View a list of available scheduled tasks"}
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion schedule:list"}
                />

                <CodeBlock
                  language={"log"}
                  content={`+-----------  SCHEDULED TASKS  -+---------+
| CRON      | COMMAND | OPTIONS | LOG     |
+-----------+---------+---------+---------+
| * * * * * | example | N/A     | example |
+-----------+---------+---------+---------+
+------  Showing a scheduled task  -------+`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Mount scheduled task"} />

                <Alert variant={"info"}>
                  <strong>Note: </strong>Currently the framework is supported
                  for development in Linux environments.
                </Alert>

                <Description
                  description={
                    "Add the schedule task to the crontab configuration from the environment variables file."
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={`################################################################################
################ CRONTAB -------------------------------------- ################
################################################################################
CRONTAB_PATH="/etc/" # the "/etc/" value for docker
CRONTAB_PHP_PATH="/usr/local/bin/php" # the '/usr/local/bin/php' value for docker
CRONTAB_PROJECT_PATH="/var/www/html/" # the "/var/www/html/" value for docker`}
                />

                <CodeBlock language={"bash"} content={"php lion schedule:up"} />
              </Fragment>
            </Fragment>
          ),
        },
        "queued-tasks": {
          name: "Queued tasks",
          code: (
            <Fragment>
              <Fragment>
                <Title title={"Schedule Schema"} />

                <Description
                  description={
                    "Create the necessary tables in the database to process the queued tasks."
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion schedule:schema"}
                />
              </Fragment>

              <Fragment>
                <Title title={"Add queued tasks"} />

                <Description
                  description={
                    <Fragment>
                      Add tasks based on your queued tasks in{" "}
                      <Badge bg="secondary">config/queue.php</Badge>.
                    </Fragment>
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

use App\\Html\\Email\\VerifyAccountHtml;
use Lion\\Bundle\\Enums\\LogTypeEnum;
use Lion\\Bundle\\Enums\\TaskStatusEnum;
use Lion\\Bundle\\Helpers\\Commands\\Schedule\\TaskQueue;
use Lion\\Mailer\\Mailer;
use Lion\\Mailer\\Priority;

/**
 * -----------------------------------------------------------------------------
 * Queued Tasks
 * -----------------------------------------------------------------------------
 * This is where you can register the processes required for your queued tasks
 * -----------------------------------------------------------------------------
 **/

TaskQueue::add(
    'send:email:account-verify',
    (
        /**
         * Send emails for account validation
         *
         * @param object $queue [Queued task object]
         *
         * @return void
         *
         * @throws Exception [Catch an exception if the process fails]
         */
        function (object $queue): void {
            $data = (object) json_decode($queue->task_queue_data, true);

            try {
                /** @var VerifyAccountHtml $htmlTemplate */
                $htmlTemplate = new $data->template;

                Mailer::account(env('MAIL_NAME'))
                    ->subject('Registration Confirmation - Please Verify Your Email')
                    ->from(env('MAIL_USER_NAME'), 'Lion-Packages')
                    ->addAddress($data->account)
                    ->body($htmlTemplate->template()->replace('{{CODE_REPLACE}}', $data->code)->get())
                    ->priority(Priority::HIGH)
                    ->send();
            } catch (Exception $e) {
                TaskQueue::edit($queue, TaskStatusEnum::FAILED);

                logger($e->getMessage(), LogTypeEnum::ERROR->value, [
                    'idtask_queue' => $queue->idtask_queue,
                    'task_queue_type' => $queue->task_queue_type,
                    'task_queue_data' => $queue->task_queue_data
                ], false);
            }
        }
    )
);
`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Register tasks in queue"} />

                <Description
                  description={
                    <Fragment>
                      Register your tasks with the <strong>TaskQueue</strong>{" "}
                      helper.
                    </Fragment>
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

TaskQueue::push('send:email:account-verify', json([
    'template' => VerifyAccountHtml::class,
    'account' => fake()->email(),
    'code' => '123456',
]));
`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Run queued tasks"} />

                <Description
                  description={
                    "Query and execute queued tasks in the background."
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion schedule:run"}
                />
              </Fragment>
            </Fragment>
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
            <Fragment>
              <Title title={"Constants"} />

              <Table
                size="sm"
                variant="dark"
                responsive
                hover
                className="align-middle"
              >
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
                      class, it allows you to make HTTP requests.
                    </td>
                  </tr>

                  <tr>
                    <td>request</td>
                    <td>
                      the request constant is an object of the Lion
                      Request\Request class, it allows you to get the data
                      captured through an HTTP request.
                    </td>
                  </tr>

                  <tr>
                    <td>response</td>
                    <td>
                      the response constant is an object of the Lion
                      Request\Response class, it allows you to generate
                      responses of different types that the class provides.
                    </td>
                  </tr>

                  <tr>
                    <td>str</td>
                    <td>
                      the constant str is an object of class LionHelpers\Str, it
                      allows you to access this helper and transform strings.
                    </td>
                  </tr>

                  <tr>
                    <td>arr</td>
                    <td>
                      the constant arr is an object of class LionHelpers\Arr, it
                      allows you to access this helper and transform arrays.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Fragment>
          ),
        },
        "functions-helpers": {
          name: "Functions",
          code: (
            <Fragment>
              <Title title={"Functions"} />

              <Fragment>
                <h5 className="text-warning">{"now"}</h5>

                <Description
                  description={
                    "Get a Carbon instance for the current date and time."
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

$date = now()->format('Y-m-d H:i:s');

vd($date);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">fetch</h5>

                <Description
                  description={
                    "Function to make HTTP requests with GuzzleHttp."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

use Lion\\Route\\Route;

$response = fetch(Route::GET, 'my-url.com');

vd($response->getBody()->getContents());
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">storage_path</h5>

                <Description
                  description={
                    "Function to get the path of the storage directory."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php
                    
$path = storage_path('path/to/file.txt');

vd($path);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">finish</h5>

                <Description
                  description={
                    "Function to display a response and end the execution of processes."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$response = success();

finish($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">response</h5>

                <Description
                  description={
                    "Allows you to generate a custom response object"
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

$response = response('custom', 'message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">success</h5>

                <Description
                  description={
                    "Allows you to generate an object of type success."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$response = success('message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">error</h5>

                <Description
                  description={
                    "Allows you to generate an object of type error."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php
                  
$response = error('message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">warning</h5>

                <Description
                  description={
                    "Allows you to generate an object of type warning."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php
                  
$response = warning('message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">info</h5>

                <Description
                  description={"Allows you to generate an object of type info."}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php
                  
$response = info('message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">vd</h5>

                <Description description={"Function to perform a var_dump."} />
                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$response = success('message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">logger</h5>

                <Description
                  description={"Function to add a line to the log file."}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

use Lion\\Bundle\\Enums\\LogTypeEnum;

logger('lorem ipsum dolor sit amet...'); // default LogTypeEnum::INFO

logger('lorem ipsum dolor sit amet...', LogTypeEnum::ERROR);

logger('lorem ipsum dolor sit amet...', LogTypeEnum::WARNING, ['name' => 'Sleon']);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">json</h5>

                <Description
                  description={"Function to convert data to json."}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$json = json(['name' => 'Sleon']);

vd($json);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">{"isError"}</h5>

                <Description
                  description={
                    "Function to check if a response object comes with errors."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$response = error('message');

if (isError($response)) {
    throw new Exception($response->message);
}
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">{"isSuccess"}</h5>

                <Description
                  description={
                    "Function to check if a response object is successful."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$response = success('message');

if (!isSuccess($response)) {
    throw new Exception($response->message);
}
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">jwt</h5>

                <Description
                  description={"Gets the HTTP_AUTHORIZATION header token."}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$jwt = jwt();

vd($jwt);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">fake</h5>

                <Description
                  description={
                    "Function that generates a Generator object to obtain fake data."
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

$name = fake()->name();

vd($name);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-warning">env</h5>

                <Description
                  description={
                    "Gets the value defined for an environment variable."
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

$dbname = env('DB_NAME');

vd($dbname);

$dbname = env('DB_NAME', 'test_database');

vd($dbname);
`}
                />
              </Fragment>
            </Fragment>
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
            <Fragment>
              <Title title={"Dockerfile"} />

              <CodeBlock
                language={"dockerfile"}
                content={`FROM php:8.3-apache

RUN useradd -m lion && echo 'lion:lion' | chpasswd && usermod -aG sudo lion && usermod -s /bin/bash lion

RUN apt-get update -y \\
    && apt-get install -y sudo nano git npm default-mysql-client curl wget unzip cron sendmail libpng-dev libzip-dev \\
    && apt-get install -y zlib1g-dev libonig-dev supervisor libevent-dev libssl-dev \\
    && rm -rf /var/lib/apt/lists/*

# Electron-Vite dependencies
RUN apt-get update -y \\
    && apt-get install -y libnss3 mesa-utils libgl1-mesa-glx mesa-utils-extra libx11-xcb1 libxcb-dri3-0 libxtst6 \\
    && apt-get install -y libasound2 libgtk-3-0 libcups2 libatk-bridge2.0 libatk1.0 libcanberra-gtk-module \\
    && apt-get install -y libcanberra-gtk3-module dbus libdbus-1-3 dbus-user-session \\
    && apt-get clean \\
    && rm -rf /var/lib/apt/lists/*

RUN pecl install ev redis \\
    && docker-php-ext-install mbstring gd pdo_mysql mysqli zip \\
    && docker-php-ext-enable gd zip

RUN a2enmod rewrite \\
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD touch storage/server.log storage/socket.log storage/supervisord.log storage/logs/vite/lion.log \\
    && /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
`}
              />
            </Fragment>
          ),
        },
        "docker-compose": {
          name: "docker-compose.yml",
          code: (
            <Fragment>
              <Title title={"docker-compose.yml"} />

              <CodeBlock
                language={"yaml"}
                content={`services:
    app:
        container_name: framework-app
        build:
            context: .
            dockerfile: Dockerfile
        environment:
            - DISPLAY=\${DISPLAY}
            - DBUS_SESSION_BUS_ADDRESS=unix:path=/var/run/dbus/system_bus_socket
        devices:
            - /dev/dri:/dev/dri
        ports:
            - "8000:8000"
            - "9000:9000"
            - "5173:5173"
        volumes:
            - ./:/var/www/html
            - /var/run/dbus:/var/run/dbus
            - /tmp/.X11-unix:/tmp/.X11-unix
            - /dev/dri:/dev/dri
        depends_on:
            - mysql
            - phpmyadmin
            - redis
        cap_add:
            - SYS_ADMIN
        networks:
            - lion
    redis:
        image: redis
        container_name: framework-redis
        restart: always
        ports:
            - "6379:6379"
        volumes:
            - redis_data:/var/lib/redis
        environment:
            REDIS_HOST: redis
            REDIS_PASSWORD: lion
            REDIS_DATABASES: 1
        networks:
            - lion
    mailhog:
        image: mailhog/mailhog
        container_name: framework-mailhog
        restart: unless-stopped
        ports:
            - "8025:8025"
            - "1025:1025"
        networks:
            - lion
    mysql:
        image: mysql
        container_name: framework-mysql
        command: --default-authentication-plugin=mysql_native_password
        ports:
            - "3306:3306"
        environment:
            MYSQL_DATABASE: lion_database
            MYSQL_PASSWORD: lion
            MYSQL_ROOT_PASSWORD: lion
        volumes:
            - mysql_data:/var/lib/mysql
        networks:
            - lion
    phpmyadmin:
        image: phpmyadmin/phpmyadmin
        container_name: framework-phpmyadmin
        links:
            - mysql:mysql
        ports:
            - 8080:80
        environment:
            PMA_HOST: mysql
            MYSQL_USER: root
            MYSQL_PASSWORD: lion
            MYSQL_ROOT_PASSWORD: lion
        networks:
            - lion
volumes:
    mysql_data:
    redis_data:
        driver: local
networks:
    lion:
        driver: bridge
`}
              />
            </Fragment>
          ),
        },
        run: {
          name: "Run Docker",
          code: (
            <Fragment>
              <Title title={"Run Docker"} />

              <Fragment>
                <Description
                  description={"Run the Docker container in the background."}
                />

                <CodeBlock language={"bash"} content={"docker-compose up -d"} />
              </Fragment>

              <Fragment>
                <Description
                  description={
                    "Rebuild the Docker container in the background."
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"docker-compose up -d --build"}
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
  };
}
