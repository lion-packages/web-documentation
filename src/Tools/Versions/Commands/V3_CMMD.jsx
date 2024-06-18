import { Fragment } from "react";

export default function v3_CMMD() {
  return [
    {
      group: "AVAILABLE COMMANDS",
      childs: [
        {
          name: "php lion hash",
          desc: "Generate a secure HASH for the server.",
          args: [],
        },
        {
          name: "php lion info",
          desc: "Command to display basic project information and libraries.",
          args: [],
        },
        {
          name: "php lion serve",
          desc: "Created command to start server locally.",
          args: [
            {
              name: "-p, --port",
              arg: false,
              optional: true,
              desc: "Do you want to set your own port?",
            },
            {
              name: "-s, --host",
              arg: false,
              optional: true,
              desc: "Do you want to set your own host?",
            },
          ],
        },
        {
          name: "php lion test",
          desc: "Command to create run unit tests.",
          args: [
            {
              name: "-c, --class",
              arg: false,
              optional: true,
              desc: "The class to test",
            },
            {
              name: "-m, --method",
              arg: false,
              optional: true,
              desc: "The method to test",
            },
            {
              name: "-s, --suite",
              arg: false,
              optional: true,
              desc: "The test suite to run",
            },
            {
              name: "-r, --report",
              arg: false,
              optional: true,
              desc: (
                <Fragment>
                  The test suite with coverage report{" "}
                  <label className="text-warning">[default: "none"]</label>
                </Fragment>
              ),
            },
          ],
        },
      ],
    },
    {
      group: "AES",
      childs: [
        {
          name: "php lion aes:encode",
          desc: "Encrypt data with AES.",
          args: [],
        },
      ],
    },
    {
      group: "DB",
      childs: [
        {
          name: "php lion db:crud",
          desc: "Command to generate controller and model of an entity with their respective CRUD functions.",
          args: [],
        },
        {
          name: "php lion db:mysql:capsule",
          desc: "Command required for the creation of new Capsules.",
          args: [
            {
              name: "entity",
              arg: true,
              optional: false,
              desc: "Entity name",
            },
          ],
        },
        {
          name: "php lion db:rules",
          desc: "Command to generate the rules of an entity.",
          args: [
            {
              name: "entity",
              arg: true,
              optional: false,
              desc: "Entity name",
            },
          ],
        },
        {
          name: "php lion db:seed",
          desc: "Run the available seeds.",
          args: [
            {
              name: "-r, --run",
              arg: false,
              optional: true,
              desc: (
                <Fragment>
                  Number of executions{" "}
                  <label className="text-warning">[default: 1]</label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion db:show",
          desc: "Command required to display available database connections.",
          args: [],
        },
      ],
    },
    {
      group: "MIGRATE",
      childs: [
        {
          name: "php lion migrate:empty",
          desc: "Empties all tables built with the migrations.",
          args: [],
        },
        {
          name: "php lion migrate:fresh",
          desc: "Drop all tables and re-run all migrations.",
          args: [
            {
              name: "-s, --seed",
              arg: false,
              optional: true,
              desc: (
                <Fragment>
                  Do you want to run the seeds?{" "}
                  <label className="text-warning">[default: "none"]</label>
                </Fragment>
              ),
            },
          ],
        },
      ],
    },
    {
      group: "NEW",
      childs: [
        {
          name: "php lion new:aes",
          desc: "Command required to create 'KEY' and 'IV' keys for AES encryptions.",
          args: [],
        },
        {
          name: "php lion new:capsule",
          desc: "Command required for creating new custom capsules.",
          args: [
            {
              name: "capsule",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Capsule name{" "}
                  <label className="text-warning">[default: "Example"]</label>
                </Fragment>
              ),
            },
            {
              name: "-p, --properties",
              arg: false,
              optional: true,
              desc: (
                <Fragment>
                  Defined properties for the capsule{" "}
                  <label className="text-warning">
                    (multiple values allowed)
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:class",
          desc: "Command needed to create classes.",
          args: [
            {
              name: "class",
              arg: true,
              optional: true,
              desc: "Class name",
            },
          ],
        },
        {
          name: "php lion new:command",
          desc: "Command required for the creation of new Commands.",
          args: [
            {
              name: "new-command",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Command name{" "}
                  <label className="text-warning">
                    [default: "ExampleCommand"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:controller",
          desc: "Command required for the creation of new Controllers.",
          args: [
            {
              name: "controller",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Controller name{" "}
                  <label className="text-warning">
                    [default: "ExampleController"]
                  </label>
                </Fragment>
              ),
            },
            {
              name: "-m, --model",
              arg: false,
              optional: true,
              desc: "Do you want to create the model?",
            },
          ],
        },
        {
          name: "php lion new:cron",
          desc: "Command required to create a new scheduled task.",
          args: [
            {
              name: "cron",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Scheduled task name{" "}
                  <label className="text-warning">
                    [default: "ExampleCron"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:enum",
          desc: "Command required for creating new Enums.",
          args: [
            {
              name: "enum",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Enum name{" "}
                  <label className="text-warning">
                    [default: "ExampleEnum"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:exception",
          desc: "Command required to create an exception.",
          args: [
            {
              name: "exception",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Exception name{" "}
                  <label className="text-warning">
                    [default: "ExampleException"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:factory",
          desc: "Command required for the creation of new factories.",
          args: [
            {
              name: "factory",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Factory name{" "}
                  <label className="text-warning">
                    [default: "ExampleFactory"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:html",
          desc: "Command needed to create new HTML templates.",
          args: [
            {
              name: "html",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  HTML name{" "}
                  <label className="text-warning">
                    [default: "ExampleHTML"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:interface",
          desc: "Command required for interface creation.",
          args: [
            {
              name: "interface",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Interface name{" "}
                  <label className="text-warning">
                    [default: "ExampleInterface"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:middleware",
          desc: "Command required for the creation of new Middleware.",
          args: [
            {
              name: "middleware",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Middleware name{" "}
                  <label className="text-warning">
                    [default: "ExampleMiddleware"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:migration",
          desc: "Command required to generate a new migration.",
          args: [
            {
              name: "migration",
              arg: true,
              optional: false,
              desc: "Migration name",
            },
          ],
        },
        {
          name: "php lion new:model",
          desc: "Command required for the creation of new Models.",
          args: [
            {
              name: "model",
              arg: true,
              optional: true,
              desc: (
                <>
                  Model name{" "}
                  <label className="text-warning">
                    {'[default: "ExampleModel"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "php lion new:rsa",
          desc: "Command required to create public and private keys for RSA encryptions.",
          args: [
            {
              name: "-p, --path",
              arg: false,
              optional: true,
              desc: "Save to a specific path?",
            },
          ],
        },
        {
          name: "php lion new:rule",
          desc: "Command required for rule creation.",
          args: [
            {
              name: "rule",
              arg: true,
              optional: true,
              desc: (
                <>
                  Rule name{" "}
                  <label className="text-warning">
                    {'[default: "ExampleRule"]'}
                  </label>
                </>
              ),
            },
          ],
        },
        {
          name: "php lion new:seed",
          desc: "Command required for creating new seeds.",
          args: [
            {
              name: "seed",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Seed name{" "}
                  <label className="text-warning">
                    {'[default: "ExampleSeed"]'}
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:service",
          desc: "Command required for creating new Services.",
          args: [
            {
              name: "service",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Service name{" "}
                  <label className="text-warning">
                    [default: "ExampleService"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:sh",
          desc: "Command required to create files with sh extension.",
          args: [
            {
              name: "sh",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  SH name{" "}
                  <label className="text-warning">[default: "Example"]</label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:socket",
          desc: "Command required for creating new WebSockets.",
          args: [
            {
              name: "socket",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Socket name{" "}
                  <label className="text-warning">
                    [default: "ExampleSocket"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:test",
          desc: "Command to create run unit tests.",
          args: [
            {
              name: "test",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Test name{" "}
                  <label className="text-warning">
                    [default: "ExampleTest"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: "php lion new:trait",
          desc: "Command required for trait creation.",
          args: [
            {
              name: "trait",
              arg: true,
              optional: true,
              desc: (
                <>
                  Trait name{" "}
                  <label className="text-warning">
                    {'[default: "ExampleTrait"]'}
                  </label>
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      group: "NPM",
      childs: [
        {
          name: ["php npm build", "php lion npm:build"],
          desc: "Command to generate dist for a vite project.",
          args: [],
        },
        {
          name: ["php npm dev", "php lion npm:dev"],
          desc: "Starts the Vite development server.",
          args: [],
        },
        {
          name: ["php npm init", "php lion npm:init"],
          desc: "Command to create Javascript projects with Vite.JS.",
          args: [
            {
              name: "project",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Project name{" "}
                  <label className="text-warning">
                    [default: "vite-project"]
                  </label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: ["php npm install", "php lion npm:install"],
          desc: "Command to install dependencies with npm for a certain vite project.",
          args: [
            {
              name: "packages",
              arg: true,
              optional: true,
              desc: (
                <Fragment>
                  Package name{" "}
                  <label className="text-warning">[default: ""]</label>
                </Fragment>
              ),
            },
          ],
        },
        {
          name: ["php npm test", "php lion npm:test"],
          desc: "Run the tests configured in a vite project.",
          args: [],
        },
        {
          name: ["php npm uninstall", "php lion npm:uninstall"],
          desc: "Command to uninstall dependencies with npm from a vite project.",
          args: [
            {
              name: "packages",
              arg: true,
              optional: false,
              desc: "Package name",
            },
          ],
        },
        {
          name: ["php npm update", "php lion npm:update"],
          desc: "Command to install dependencies with npm for a vite project.",
          args: [],
        },
      ],
    },
    {
      group: "ROUTE",
      childs: [
        {
          name: "php lion route:list",
          desc: "Command to view a list of available web routes.",
          args: [],
        },
        {
          name: "php lion route:postman",
          desc: "Command to export a collection of requests to postman.",
          args: [],
        },
      ],
    },
    {
      group: "SCHEDULE",
      childs: [
        {
          name: "php lion schedule:list",
          desc: "Displays a list of available scheduled tasks.",
          args: [],
        },
        {
          name: "php lion schedule:run",
          desc: "Query and execute queued tasks in the background.",
          args: [],
        },
        {
          name: "php lion schedule:up",
          desc: "Stores all scheduled tasks.",
          args: [],
        },
      ],
    },
    {
      group: "SOCKET",
      childs: [
        {
          name: "php lion socket:serve",
          desc: "Command required to run WebSockets.",
          args: [
            {
              name: "-s, --socket",
              arg: false,
              optional: false,
              desc: "Socket class namespace",
            },
          ],
        },
      ],
    },
  ];
}
