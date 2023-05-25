export default function v14_7_0_CMMD() {
  return [
    {
      group: "AVAILABLE COMMANDS",
      childs: [
        {
          name: "info",
          desc: "Command to display basic project information and libraries",
          args: [],
        },
        {
          name: "serve",
          desc: "Created command to start server locally",
          args: [
            {
              name: "--port",
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
          ],
        },
        {
          name: "test",
          desc: "Command to create run unit tests",
          args: [],
        },
      ],
    },
    {
      group: "DB",
      childs: [
        {
          name: "db:all-capsules",
          desc: "Command required for the creation of all new Capsules available from the database",
          args: [],
        },
        {
          name: "db:capsule",
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
          name: "db:factory",
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
          name: "db:seed",
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
          name: "db:show",
          desc: "Command required to display available database connections",
          args: [],
        },
      ],
    },
    {
      group: "KEY",
      childs: [
        {
          name: "key:aes",
          desc: "Command to create KEY and IV keys for AES",
          args: [],
        },
        {
          name: "key:rsa",
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
          name: "new:capsule",
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
          name: "new:command",
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
          name: "new:controller",
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
          name: "new:enum",
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
          name: "new:middleware",
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
          name: "new:model",
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
          name: "new:rule",
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
          name: "new:test",
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
          name: "new:trait",
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
          name: "route:list",
          desc: "Command to view a list of available web routes",
          args: [],
        },
        {
          name: "route:postman",
          desc: "Command to export a collection of requests to postman",
          args: [],
        },
      ],
    },
    {
      group: "SH",
      childs: [
        {
          name: "sh:new",
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
          name: "socket:new",
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
          name: "socket:serve",
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
          name: "token:jwt",
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
