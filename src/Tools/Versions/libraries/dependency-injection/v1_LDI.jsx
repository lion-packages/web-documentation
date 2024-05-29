import { Alert } from "react-bootstrap";
import Title from "../../../../pages/components/Title";
import CodeBlock from "../../../../pages/components/CodeBlock";
import Description from "../../../../pages/components/Description";
import { Fragment } from "react";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import ExampleTitle from "../../../../pages/components/ExampleTitle";

export default function v1_LDI() {
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
        "get-files": {
          name: "getFiles",
          code: (
            <Fragment>
              <LibraryTitle className={"Container"} methodName={"getFiles"} />

              <Description description={"Get files from a defined path."} />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use Lion\\Dependency\\Injection\\Container;

$files = (new Container())->getFiles('./app/Http/Controllers/');

var_dump($files);
`}
              />
            </Fragment>
          ),
        },
        "get-namespace": {
          name: "getNamespace",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Container"}
                methodName={"getNamespace"}
              />

              <Description
                description={
                  "Gets the namespace of a class through a defined path."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use Lion\\Dependency\\Injection\\Container;

$namespace = (new Container())
    ->getNamespace(
        './app/Http/Controllers/UsersController.php', 
        'App\\Http\\Controllers', 
        'Controllers/'
    );

var_dump($namespace);
              `}
              />
            </Fragment>
          ),
        },
        "inject-dependencies-method": {
          name: "injectDependenciesMethod",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Container"}
                methodName={"injectDependenciesMethod"}
              />

              <Description
                description={"Inject dependencies into a method of a class."}
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
    ->injectDependenciesMethod(new UsersController(), 'createUsers');

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
    ->injectDependenciesMethod(
        new UsersController(), 
        'createUsers', 
        ['idroles' => 1]
    );

var_dump($response);
              `}
                />
              </Fragment>
            </Fragment>
          ),
        },
        "inject-dependencies-callback": {
          name: "injectDependenciesCallback",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Container"}
                methodName={"injectDependenciesCallback"}
              />

              <Description
                description={"Inject dependencies into a method of a class."}
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
    ->injectDependenciesCallback(function(UsersController $usersController): object {
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
    ->injectDependenciesCallback(function(UsersController $usersController, string $name): object {
        return $usersController->createUsers($name);
    }, ['name' => 'Sergio']);

var_dump($response);
              `}
                />
              </Fragment>
            </Fragment>
          ),
        },
        "inject-dependencies": {
          name: "injectDependencies",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Container"}
                methodName={"injectDependencies"}
              />

              <Description
                description={
                  "Inject dependencies to methods of a class that have the annotation 'required'."
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
    ->injectDependencies(new UsersController());

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
    ->injectDependencies(new UsersController(), ['idroles' => 1]);

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
