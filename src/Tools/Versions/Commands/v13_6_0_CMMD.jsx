export default function v13_6_0_CMMD() {
  return [
    {
      description: "Created command to start server locally",
      command: "php lion serve",
    },
    {
      description: "Command to create run unit tests",
      command: "php lion new:test test_name",
    },
    {
      description: "Command required for the creation of new Commands",
      command: "php lion new:command command_name",
    },
    {
      description: "Command required for the creation of new Controllers",
      command: "php lion new:controller controller_name",
    },
    {
      description: "Command required for the creation of new Middleware",
      command: "php lion new:middleware middleware_name",
    },
    {
      description: "Command required for the creation of new Models",
      command: "php lion new:model model_name",
    },
    {
      description: "Command required for rule creation",
      command: "php lion new:rule rule_name",
    },
    {
      description: "Command required for trait creation",
      command: "php lion new:trait trait_name",
    },
    {
      description: "Command required for creating new custom capsules",
      command: "php lion new:capsule capsule_name",
    },
    {
      description: "Command required for creating new WebSockets",
      command: "php lion new:socket socket_name",
    },
    {
      description: "Command required for creating new enum",
      command: "php lion new:enum enum_name",
    },
    {
      description: "Created command to generate JWT token",
      command: "php lion token:jwt",
    },
    {
      description: "Command to view a list of available web routes",
      command: "php lion route:list",
    },
    {
      description: "Command to export a collection of requests to postman",
      command: "php lion route:postman",
    },
    {
      description: "Command required to run WebSockets",
      command: "php lion socket:serve ClassName",
    },
    {
      description: "Command to create public and private keys with RSA",
      command: "php lion key:rsa",
    },
    {
      description: " Command required for the creation of new Capsules",
      command: "php lion db:capsule capsule_name",
    },
    {
      description:
        "Command required for the creation of all new Capsules available from the database",
      command: "php lion db:all-capsules",
    },
    {
      description: "Command required for the creation of new factories",
      command: "php lion db:factory factory_name",
    },
    {
      description: "Command required for creating new seeds",
      command: "php lion db:seed seed_name",
    },
  ];
}
