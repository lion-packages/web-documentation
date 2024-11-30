import { Alert } from "react-bootstrap";
import Title from "../../../../pages/components/Title";
import CodeBlock from "../../../../pages/components/CodeBlock";
import Description from "../../../../pages/components/Description";
import { Fragment } from "react";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import ExampleTitle from "../../../../pages/components/ExampleTitle";
import SupportVersion from "../../../../pages/components/SupportVersion";

export default function v3_LDI() {
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
                  "About Container for dependency injection with DI-PHP."
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

              <SupportVersion
                title={"Lion-Dependency-Injection"}
                version={"8.3"}
              />

              <CodeBlock
                language={"bash"}
                content={"composer require lion/dependency-injection"}
              />
            </Fragment>
          ),
        },
      },
    },
    container: {
      name: "Container",
      type: "sub_modules",
      list: {
        resolve: {
          name: "resolve",
          code: (
            <Fragment>
              <LibraryTitle className={"Container"} methodName={"resolve"} />

              <Description
                description={
                  "Resolves a class or dependency from the container."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use App\\Http\\Controllers\\UsersController;
use Lion\\Dependency\\Injection\\Container;

/** @var UsersController $usersController */
$usersController = (new Container())->resolve(UsersController::class);
              `}
              />
            </Fragment>
          ),
        },
        "call-method": {
          name: "callMethod",
          code: (
            <Fragment>
              <LibraryTitle className={"Container"} methodName={"callMethod"} />

              <Description
                description={
                  "Calls a method on an object with automatic dependency injection."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use App\\Http\\Controllers\\UsersController;
use Lion\\Dependency\\Injection\\Container;

$container = new Container();

/** @var UsersController $usersController */
$usersController = $container->resolve(UsersController::class);

$response = $container->callMethod($usersController, 'createUsers');

var_dump($response);
              `}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use App\\Http\\Controllers\\UsersController;
use Lion\\Dependency\\Injection\\Container;

$container = new Container();

/** @var UsersController $usersController */
$usersController = $container->resolve(UsersController::class);

$response = $container->callMethod($usersController, 'createUsers', [
    'users_name' => 'root',
]);

var_dump($response);
              `}
                />
              </Fragment>
            </Fragment>
          ),
        },
        "call-callback": {
          name: "callCallback",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Container"}
                methodName={"callCallback"}
              />

              <Description
                description={
                  "Executes a callback with automatic dependency injection."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use App\\Http\\Controllers\\UsersController;
use Lion\\Dependency\\Injection\\Container;

$response = (new Container())
    ->callCallback(function (UsersController $usersController) {
        return $usersController->createUsers();
    });

var_dump($response);
              `}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use App\\Http\\Controllers\\UsersController;
use Lion\\Dependency\\Injection\\Container;

$response = (new Container())
    ->callCallback(function (UsersController $usersController, string $users_name) {
        return $usersController->createUsers($users_name);
    }, ['users_name' => 'root']);

var_dump($response);
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
