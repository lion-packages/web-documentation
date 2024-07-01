import { Fragment } from "react";
import Title from "../../../../pages/components/Title";
import { Alert } from "react-bootstrap";
import Description from "../../../../pages/components/Description";
import CodeBlock from "../../../../pages/components/CodeBlock";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Example from "../../../../pages/components/Example";
import SupportVersion from "../../../../pages/components/SupportVersion";

export default function v1_LT() {
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
                  "Library to implement testing with helpers that allow easy testing with PHPUnit."
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

              <SupportVersion title={"Lion-Test"} version={"8.2"} />

              <CodeBlock
                language={"bash"}
                content={"composer require --dev phpunit/phpunit lion/test"}
              />
            </Fragment>
          ),
        },
      },
    },
    test: {
      name: "Test::class",
      type: "sub_modules",
      list: {
        "assert-instances": {
          name: "assertInstances",
          code: (
            <Fragment>
              <LibraryTitle className={"Test"} methodName={"assertInstances"} />

              <Description
                description={
                  "Method to perform an assertion of an object to test if it is an instance of that class."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use App\\Http\\Controllers\\ExampleController;
use Lion\\Test\\Test;

class ExampleTest extends Test
{
    public function testExample(): void
    {
        $this->assertInstances(new ExampleController(), [
            ExampleController::class
        ]);
    }
}              
`}
              />
            </Fragment>
          ),
        },
        "assert-json-content": {
          name: "assertJsonContent",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Test"}
                methodName={"assertJsonContent"}
              />

              <Description
                description={
                  "Assertion to test if a JSON object is identical to the defined array."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use Lion\\Test\\Test;

class ExampleTest extends Test
{
    public function testExample(): void
    {
        $responseApi = ...;

        $this->assertJsonContent($responseApi, [
            'key' => 'value',
            'key2' => 'value2', 
        ]);
    }
}
`}
              />
            </Fragment>
          ),
        },
        "assert-property-value": {
          name: "assertPropertyValue",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Test"}
                methodName={"assertPropertyValue"}
              />

              <Description
                description={
                  "Makes an assertion about the value of a specific property of a class."
                }
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
        $this->initReflection(new ExampleController());
    }

    public function testExample(): void
    {
        $this->assertPropertyValue('id', 1);
    }
}
`}
              />
            </Fragment>
          ),
        },
        "assert-with-ob": {
          name: "assertWithOb",
          code: (
            <Fragment>
              <LibraryTitle className={"Test"} methodName={"assertWithOb"} />

              <Description
                description={
                  "Perform assertions implementing the use of outputs in the buffer with ob_start."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use Lion\\Test\\Test;

class ExampleTest extends Test
{
    public function testExample(): void
    {
        $output = $this->assertWithOb("OK", function() {
            echo ("OK");
        });
    }
}
`}
              />
            </Fragment>
          ),
        },
        "create-directory": {
          name: "createDirectory",
          code: (
            <Fragment>
              <LibraryTitle className={"Test"} methodName={"createDirectory"} />

              <Description
                description={"Create folders from a defined path."}
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
        $this->createDirectory('my_path/');
    }

    protected function tearDown(): void
    {
        $this->rmdirEcursively('my_path/');
    }

    public function testExample(): void
    {
        ...
    }
}
`}
              />
            </Fragment>
          ),
        },
        "create-image": {
          name: "createImage",
          code: (
            <Fragment>
              <LibraryTitle className={"Test"} methodName={"createImage"} />

              <Description
                description={
                  "Allows generating a blank image with specified dimensions and saving it to a specific path with a given file name."
                }
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
        $this->createDirectory('my_path/');
    }

    protected function tearDown(): void
    {
        $this->rmdirEcursively('my_path/');
    }

    public function testExample(): void
    {
        $this->createImage(100, 100, 'my_path/', 'my_image.png');

        ...
    }
}
`}
              />
            </Fragment>
          ),
        },
        "get-private-method": {
          name: "getPrivateMethod",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Test"}
                methodName={"getPrivateMethod"}
              />

              <Description
                description={
                  "Gets the private or protected methods of a reflected class."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use App\\Http\\Controllers\\ExampleController;
use Lion\\Test\\Test;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    public function testExample(): void
    {
        $returnValue = $this->getPrivateMethod('exampleMethod');

        ...
    }
}
              `}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use App\\Http\\Controllers\\ExampleController;
use Lion\\Test\\Test;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    public function testExample(): void
    {
        $returnValue = $this->getPrivateMethod('exampleMethod', ['param1', 'param2']);

        ...
    }
}
              `}
              />
            </Fragment>
          ),
        },
        "get-private-property": {
          name: "getPrivateProperty",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Test"}
                methodName={"getPrivateProperty"}
              />

              <Description
                description={
                  "Gets the value of a private or protected property of a reflected class."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use App\\Http\\Controllers\\ExampleController;
use Lion\\Test\\Test;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    public function testExample(): void
    {
        $id = $this->getPrivateProperty('id');

        ...
    }
}
              `}
              />
            </Fragment>
          ),
        },
        "get-response": {
          name: "getResponse",
          code: (
            <Fragment>
              <LibraryTitle className={"Test"} methodName={"getResponse"} />

              <Description
                description={
                  "Gets a response string from the separation of a defined word."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use Lion\\Test\\Test;

class ExampleTest extends Test
{
    public function testExample(): void
    {
        $responseApi = 'An error occurred while making the request: Client error: GET http://example.com resulted in a 401 Unauthorized response: { "message": "Unauthorized" }';

        $jsonResponse = $this->getResponse($responseApi, 'response:');

        $this->assertJsonContent($jsonResponse, [
            'message' => 'Unauthorized'
        ]);
    }
}
`}
              />
            </Fragment>
          ),
        },
        "get-exception-from-api": {
          name: "getExceptionFromApi",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Test"}
                methodName={"getExceptionFromApi"}
              />

              <Description
                description={"Gets the exception object when consuming an API."}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use Lion\\Test\\Test;

class ExampleTest extends Test
{
    public function testExample(): void
    {
        $exception = $this->getExceptionFromApi(function () {
            // fetch api...
        });

        $this->assertSame('...', $exception->getMessage());
    }
}
`}
              />
            </Fragment>
          ),
        },
        "init-reflection": {
          name: "initReflection",
          code: (
            <Fragment>
              <LibraryTitle className={"Test"} methodName={"initReflection"} />

              <Description
                description={
                  "Initializes the object to perform a reflection on a class."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use App\\Http\\Controllers\\ExampleController;
use Lion\\Test\\Test;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    public function testExample(): void
    {
        ...
    }
}
              `}
              />
            </Fragment>
          ),
        },
        "rmdir-ecursively": {
          name: "rmdirEcursively",
          code: (
            <Fragment>
              <LibraryTitle className={"Test"} methodName={"rmdirEcursively"} />

              <Description
                description={
                  "Delete a directory and all its contents recursively."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use Lion\\Test\\Test;

class ExampleTest extends Test
{
    protected function tearDown(): void
    {
        $this->rmdirEcursively('my_path/');
    }

    public function testExample(): void
    {
        ...
    }
}
`}
              />
            </Fragment>
          ),
        },
        "set-private-property": {
          name: "setPrivateProperty",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Test"}
                methodName={"setPrivateProperty"}
              />

              <Description
                description={
                  "Sets the value of a private or protected property of a reflected class."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use App\\Http\\Controllers\\ExampleController;
use Lion\\Test\\Test;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    public function testExample(): void
    {
        $this->setPrivateProperty('id', 1);

        ...
    }
}
`}
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
