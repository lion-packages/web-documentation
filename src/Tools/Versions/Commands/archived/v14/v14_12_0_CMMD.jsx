export default function v14_12_0_CMMD() {
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
      group: "DB",
      childs: [
        {
          name: "php lion db:all-capsules",
          desc: "Command required for the creation of all new Capsules available from the database",
          args: [],
        },
        {
          name: "php lion db:all-crud",
          desc: "command to generate all the controllers and models of the entities with their respective CRUD functions",
          args: [],
        },
        {
          name: "php lion db:capsule",
          desc: "Command required for the creation of new Capsules",
          args: [
            {
              name: "capsule",
              arg: true,
              optional: false,
              desc: "Capsule name",
            },
            {
              name: "--path",
              arg: false,
              optional: true,
              desc: "Do you want to configure your own route?",
            },
            {
              name: "--connection",
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
          name: "php lion db:factory",
          desc: "Command required for the creation of new factories",
          args: [
            {
              name: "factory",
              arg: true,
              optional: false,
              desc: "factory name",
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
              optional: false,
              desc: "Name or namespace of the Seed",
            },
            {
              name: "--run",
              arg: false,
              optional: true,
              desc: "Do you want to run the seeder?",
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
      group: "KEY",
      childs: [
        {
          name: "php lion key:aes",
          desc: "Command to create KEY and IV keys for AES",
          args: [],
        },
        {
          name: "php lion key:rsa",
          desc: "Command to create public and private keys with RSA",
          args: [
            {
              name: "--path",
              arg: false,
              optional: true,
              desc: "Save to a specific path?",
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
              optional: false,
              desc: "Capsule name",
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
              optional: false,
              desc: "Command name",
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
              optional: false,
              desc: "Controller name",
            },
            {
              name: "--model",
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
              optional: false,
              desc: "Enum name",
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
              optional: false,
              desc: "Middleware name",
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
              optional: false,
              desc: "Model name",
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
              optional: false,
              desc: "Rule name",
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
              optional: false,
              desc: "Test name",
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
              optional: false,
              desc: "Trait name",
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
      group: "SH",
      childs: [
        {
          name: "php lion sh:new",
          desc: "Command to create files with extension sh",
          args: [
            {
              name: "sh",
              arg: true,
              optional: false,
              desc: "SH name",
            },
          ],
        },
      ],
    },
    {
      group: "SOCKET",
      childs: [
        {
          name: "php lion socket:new",
          desc: "Command required for creating new WebSockets",
          args: [
            {
              name: "web-socket",
              arg: true,
              optional: false,
              desc: "Socket name",
            },
          ],
        },
        {
          name: "php lion socket:serve",
          desc: "Command required to run WebSockets",
          args: [
            {
              name: "web-socket",
              arg: true,
              optional: false,
              desc: "Socket name",
            },
            {
              name: "--port",
              arg: false,
              optional: true,
              desc: "Do you want to set your own port?",
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
              optional: false,
              desc: "Session must be true or false",
            },
          ],
        },
      ],
    },
  ];
}
