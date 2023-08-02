export default function v15_0_1_CMMD() {
  return [
      {
          group: "AVAILABLE COMMANDS",
          childs: [
              {
                  name: "php lion info",
                  desc: "Command to display basic project information and libraries",
                  args: [],
              },
              {
                  name: "php lion serve",
                  desc: "Created command to start server locally",
                  args: [
                      {
                          name: "--port",
                          arg: false,
                          optional: true,
                          desc: "Do you want to set your own port?",
                      },
                      {
                          name: "-p",
                          arg: false,
                          optional: true,
                          desc: "Do you want to set your own port?",
                      },
                      {
                          name: "--host",
                          arg: false,
                          optional: true,
                          desc: "Do you want to set your own host?",
                      },
                      {
                          name: "-s",
                          arg: false,
                          optional: true,
                          desc: "Do you want to set your own host?",
                      },
                  ],
              },
              {
                  name: "php lion test",
                  desc: "Command to create run unit tests",
                  args: [],
              },
          ],
      },
      {
          group: "AES",
          childs: [
              {
                  name: "php lion aes:new",
                  desc: "Command to create KEY and IV keys for AES",
                  args: [],
              },
          ],
      },
      {
          group: "DB",
          childs: [
              {
                  name: "php lion db:all-capsules",
                  desc: "Command required for the creation of all new Capsules available from the database",
                  args: [],
              },
              {
                  name: "php lion db:all-crud",
                  desc: "Command to generate all the controllers and models of the entities with their respective CRUD functions",
                  args: [],
              },
              {
                  name: "php lion db:all-rules",
                  desc: "Command to generate all rules for all entities",
                  args: [],
              },
              {
                  name: "php lion db:capsule",
                  desc: "Command required for the creation of new Capsules",
                  args: [
                      {
                          name: "entity",
                          arg: true,
                          optional: false,
                          desc: "Entity name",
                      },
                      {
                          name: "--connection",
                          arg: false,
                          optional: true,
                          desc: "Do you want to use a specific connection?",
                      },
                      {
                          name: "-c",
                          arg: false,
                          optional: true,
                          desc: "Do you want to use a specific connection?",
                      },
                  ],
              },
              {
                  name: "php lion db:columns",
                  desc: "Command to read the columns of an entity",
                  args: [
                      {
                          name: "entity",
                          arg: true,
                          optional: false,
                          desc: "Entity name",
                      },
                      {
                          name: "--connection",
                          arg: false,
                          optional: true,
                          desc: "Do you want to use a specific connection?",
                      },
                      {
                          name: "-c",
                          arg: false,
                          optional: true,
                          desc: "Do you want to use a specific connection?",
                      },
                  ],
              },
              {
                  name: "php lion db:crud",
                  desc: "Command required for the creation of new Capsules",
                  args: [
                      {
                          name: "entity",
                          arg: true,
                          optional: false,
                          desc: "Entity name",
                      },
                      {
                          name: "--connection",
                          arg: false,
                          optional: true,
                          desc: "Do you want to use a specific connection?",
                      },
                      {
                          name: "-c",
                          arg: false,
                          optional: true,
                          desc: "Do you want to use a specific connection?",
                      },
                  ],
              },
              {
                  name: "php lion db:export",
                  desc: "Command to export copies of databases established in the config",
                  args: [
                      {
                          name: "connection",
                          arg: true,
                          optional: false,
                          desc: "Do you want to use a specific connection?",
                      },
                  ],
              },
              {
                  name: "php lion db:factory",
                  desc: "Command required for the creation of new factories",
                  args: [
                      {
                          name: "factory",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Factory name{" "}
                                  <label className="text-warning">
                                      {"[default: 'ExampleFactory']"}
                                  </label>
                              </>
                          ),
                      },
                  ],
              },
              {
                  name: "php lion db:rules",
                  desc: "Command required for the creation of new factories",
                  args: [
                      {
                          name: "entity",
                          arg: true,
                          optional: false,
                          desc: "Entity name",
                      },
                      {
                          name: "--connection",
                          arg: false,
                          optional: true,
                          desc: "Do you want to use a specific connection?",
                      },
                      {
                          name: "-c",
                          arg: false,
                          optional: true,
                          desc: "Do you want to use a specific connection?",
                      },
                  ],
              },
              {
                  name: "php lion db:seed",
                  desc: "Command required for creating new seeds",
                  args: [
                      {
                          name: "seed",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Name or namespace of the Seed{" "}
                                  <label className="text-warning">
                                      {'[default: "ExampleSeed"]'}
                                  </label>
                              </>
                          ),
                      },
                      {
                          name: "--run",
                          arg: false,
                          optional: true,
                          desc: "Do you want to run the seeder?",
                      },
                      {
                          name: "-r",
                          arg: false,
                          optional: true,
                          desc: "Do you want to run the seeder?",
                      },
                  ],
              },
              {
                  name: "php lion db:select",
                  desc: "Command required to display available database connections",
                  args: [
                      {
                          name: "entity",
                          arg: true,
                          optional: false,
                          desc: "Entity name",
                      },
                      {
                          name: "--columns",
                          arg: false,
                          optional: true,
                          desc: (
                              <>
                                  What columns should you read?{" "}
                                  <label className="text-warning">
                                      {"(multiple values allowed)"}
                                  </label>
                              </>
                          ),
                      },
                      {
                          name: "-l",
                          arg: false,
                          optional: true,
                          desc: (
                              <>
                                  What columns should you read?{" "}
                                  <label className="text-warning">
                                      {"(multiple values allowed)"}
                                  </label>
                              </>
                          ),
                      },
                      {
                          name: "--rows",
                          arg: false,
                          optional: true,
                          desc: "Do you want to specify the number of rows?",
                      },
                      {
                          name: "-r",
                          arg: false,
                          optional: true,
                          desc: "Do you want to specify the number of rows?",
                      },
                      {
                          name: "--connection",
                          arg: false,
                          optional: true,
                          desc: "Do you want to use a specific connection?",
                      },
                      {
                          name: "-c",
                          arg: false,
                          optional: true,
                          desc: "Do you want to use a specific connection?",
                      },
                  ],
              },
              {
                  name: "php lion db:show",
                  desc: "Command required to display available database connections",
                  args: [],
              },
          ],
      },
      {
          group: "EMAIL",
          childs: [
              {
                  name: "php lion email:show",
                  desc: "Command required to display available email accounts",
                  args: [],
              },
          ],
      },
      {
          group: "MIGRATE",
          childs: [
              {
                  name: "php lion migrate:fresh",
                  desc: "Drop all tables and re-run all migrations",
                  args: [],
              },
              {
                  name: "php lion migrate:generate",
                  desc: "Command required to generate migrations of an existing database",
                  args: [
                      {
                          name: "--limit",
                          arg: false,
                          optional: true,
                          desc: (
                              <>
                                  Do you want to set a query limit?{" "}
                                  <label className="text-warning">{"[default: 1200]"}</label>
                              </>
                          ),
                      },
                      {
                          name: "-l",
                          arg: false,
                          optional: true,
                          desc: (
                              <>
                                  Do you want to set a query limit?{" "}
                                  <label className="text-warning">{"[default: 1200]"}</label>
                              </>
                          ),
                      },
                  ],
              },
              {
                  name: "php lion migrate:new",
                  desc: "Command to generate a new migration",
                  args: [
                      {
                          name: "migration",
                          arg: true,
                          optional: false,
                          desc: "Migration name",
                      },
                      {
                          name: "connection",
                          arg: true,
                          optional: false,
                          desc: "Connection name",
                      },
                      {
                          name: "--type",
                          arg: false,
                          optional: true,
                          desc: (
                              <>
                                  Type of migration{" "}
                                  <label className="text-warning">{'[default: "table"]'}</label>
                              </>
                          ),
                      },
                      {
                          name: "-t",
                          arg: false,
                          optional: true,
                          desc: (
                              <>
                                  Type of migration{" "}
                                  <label className="text-warning">{'[default: "table"]'}</label>
                              </>
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
                  name: "php lion new:capsule",
                  desc: "Command required for creating new custom capsules",
                  args: [
                      {
                          name: "capsule",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Capsule name{" "}
                                  <label className="text-warning">
                                      {'[default: "Example"]'}
                                  </label>
                              </>
                          ),
                      },
                  ],
              },
              {
                  name: "php lion new:command",
                  desc: "Command required for the creation of new Commands",
                  args: [
                      {
                          name: "new-command",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Command name{" "}
                                  <label className="text-warning">
                                      {'[default: "ExampleCommand"]'}
                                  </label>
                              </>
                          ),
                      },
                  ],
              },
              {
                  name: "php lion new:controller",
                  desc: "Command required for the creation of new Controllers",
                  args: [
                      {
                          name: "controller",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Controller name{" "}
                                  <label className="text-warning">
                                      {'[default: "ExampleController"]'}
                                  </label>
                              </>
                          ),
                      },
                      {
                          name: "--model",
                          arg: false,
                          optional: true,
                          desc: "Do you want to create the model?",
                      },
                      {
                          name: "-m",
                          arg: false,
                          optional: true,
                          desc: "Do you want to create the model?",
                      },
                  ],
              },
              {
                  name: "php lion new:enum",
                  desc: "Command required for creating new enum",
                  args: [
                      {
                          name: "enum",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Enum name{" "}
                                  <label className="text-warning">
                                      {'[default: "ExampleEnum"]'}
                                  </label>
                              </>
                          ),
                      },
                  ],
              },
              {
                  name: "php lion new:interface",
                  desc: "Command required for interface creation",
                  args: [
                      {
                          name: "interface",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Interface name{" "}
                                  <label className="text-warning">
                                      {'[default: "ExampleInterface"]'}
                                  </label>
                              </>
                          ),
                      },
                  ],
              },
              {
                  name: "php lion new:middleware",
                  desc: "Command required for the creation of new Middleware",
                  args: [
                      {
                          name: "middleware",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Middleware name{" "}
                                  <label className="text-warning">
                                      {'[default: "ExampleMiddleware"]'}
                                  </label>
                              </>
                          ),
                      },
                  ],
              },
              {
                  name: "php lion new:model",
                  desc: "Command required for the creation of new Models",
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
                  name: "php lion new:rule",
                  desc: "Command required for rule creation",
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
                  name: "php lion new:test",
                  desc: "Command to create run unit tests",
                  args: [
                      {
                          name: "test",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Test name{" "}
                                  <label className="text-warning">
                                      {'[default: "ExampleTest"]'}
                                  </label>
                              </>
                          ),
                      },
                  ],
              },
              {
                  name: "php lion new:trait",
                  desc: "Command required for trait creation",
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
                  name: "php lion npm:build",
                  desc: "Command to generate final dist of a certain vite type resource",
                  args: [
                      {
                          name: "resource",
                          arg: true,
                          optional: false,
                          desc: "Resource name"
                      }
                  ]
              },
              {
                  name: "php lion npm:install",
                  desc: "Command to install dependencies with npm for a certain resource",
                  args: [
                      {
                          name: "resource",
                          arg: true,
                          optional: false,
                          desc: "Resource name"
                      },
                      {
                          name: "packages",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Package name{" "}
                                  <label className="text-warning">
                                      {'[default: ""]'}
                                  </label>
                              </>
                          )
                      },
                  ]
              },
              {
                  name: "php lion npm:uninstall",
                  desc: "Command to uninstall dependencies with npm for a certain resource",
                  args: [
                      {
                          name: "resource",
                          arg: true,
                          optional: false,
                          desc: "Resource name"
                      },
                      {
                          name: "packages",
                          arg: true,
                          optional: false,
                          desc: "Package name"
                      },
                  ]
              },
              {
                  name: "php lion npm:update",
                  desc: "Command to install dependencies with npm for a certain resource",
                  args: [
                      {
                          name: "resource",
                          arg: true,
                          optional: false,
                          desc: "Resource name"
                      },
                  ]
              }
          ]
      },
      {
          group: "RESOURCE",
          childs: [
              {
                  name: "php lion resource:logs",
                  desc: "Command to generate the logs of all resources",
                  args: []
              },
              {
                  name: "php lion resource:new",
                  desc: "Command required to generate a resource",
                  args: [
                      {
                          name: "resource",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Resource name{" "}
                                  <label className="text-warning">
                                      {'[default: "example"]'}
                                  </label>
                              </>
                          ),
                      },
                  ],
              },
              {
                  name: "php lion resource:serve",
                  desc: "Command required to run resources",
                  args: [
                      {
                          name: "resource",
                          arg: true,
                          optional: true,
                          desc: "Resource name",
                      },
                      {
                          name: "--port",
                          arg: false,
                          optional: true,
                          desc: "Do you want to set your own port?",
                      },
                      {
                          name: "-p",
                          arg: false,
                          optional: true,
                          desc: "Do you want to set your own port?",
                      },
                      {
                          name: "--host",
                          arg: false,
                          optional: true,
                          desc: "Do you want to set your own host?",
                      },
                      {
                          name: "-s",
                          arg: false,
                          optional: true,
                          desc: "Do you want to set your own host?",
                      },
                  ],
              },
          ],
      },
      {
          group: "ROUTE",
          childs: [
              {
                  name: "php lion route:list",
                  desc: "Command to view a list of available web routes",
                  args: [],
              },
              {
                  name: "php lion route:postman",
                  desc: "Command to export a collection of requests to postman",
                  args: [],
              },
          ],
      },
      {
          group: "RSA",
          childs: [
              {
                  name: "php lion rsa:new",
                  desc: "Command to create public and private keys with RSA",
                  args: [
                      {
                          name: "--path",
                          arg: false,
                          optional: true,
                          desc: "Save to a specific path?",
                      },
                      {
                          name: "-p",
                          arg: false,
                          optional: true,
                          desc: "Save to a specific path?",
                      },
                  ],
              },
          ],
      },
      {
          group: "SH",
          childs: [
              {
                  name: "php lion sh:new",
                  desc: "Command to create files with extension sh",
                  args: [
                      {
                          name: "sh",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  SH name{" "}
                                  <label className="text-warning">
                                      {'[default: "Example"]'}
                                  </label>
                              </>
                          ),
                      },
                  ],
              },
          ],
      },
      {
          group: "SOCKET",
          childs: [
              {
                  name: "php lion socket:logs",
                  desc: "Command to generate the logs of all resources",
                  args: []
              },
              {
                  name: "php lion socket:new",
                  desc: "Command required for creating new WebSockets",
                  args: [
                      {
                          name: "socket",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  SH name{" "}
                                  <label className="text-warning">
                                      {'[default: "ExampleSocket"]'}
                                  </label>
                              </>
                          ),
                      },
                  ],
              },
              {
                  name: "php lion socket:serve",
                  desc: "Command required to run WebSockets",
                  args: [
                      {
                          name: "socket",
                          arg: true,
                          optional: false,
                          desc: "Socket name",
                      },
                  ],
              },
          ],
      },
      {
          group: "TOKEN",
          childs: [
              {
                  name: "php lion token:jwt",
                  desc: "Created command to generate JWT token",
                  args: [
                      {
                          name: "session",
                          arg: true,
                          optional: true,
                          desc: (
                              <>
                                  Session must be true or false{" "}
                                  <label className="text-warning">{'[default: "true"]'}</label>
                              </>
                          ),
                      },
                      {
                          name: "--path",
                          arg: false,
                          optional: true,
                          desc: "Save to a specific path?",
                      },
                      {
                          name: "-p",
                          arg: false,
                          optional: true,
                          desc: "Save to a specific path?",
                      },
                  ],
              },
          ],
      },
  ];
}
