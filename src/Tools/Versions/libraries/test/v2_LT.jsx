import { Fragment } from "react";
import Title from "../../../../pages/components/Title";
import { Alert } from "react-bootstrap";
import Description from "../../../../pages/components/Description";
import CodeBlock from "../../../../pages/components/CodeBlock";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Example from "../../../../pages/components/Example";
import SupportVersion from "../../../../pages/components/SupportVersion";

export default function v2_LT() {
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

              <SupportVersion title={"Lion-Test"} version={"8.3"} />

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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    #[Testing]    
    public function example(): void
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    #[Testing]
    public function example(): void
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    #[Testing]
    public function example(): void
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    #[Testing]
    public function example(): void
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->createDirectory('my_path/');
    }

    protected function tearDown(): void
    {
        $this->rmdirRecursively('my_path/');
    }

    #[Testing]
    public function example(): void
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->createDirectory('my_path/');
    }

    protected function tearDown(): void
    {
        $this->rmdirRecursively('my_path/');
    }

    #[Testing]
    public function example(): void
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
        "expect-lion-exception": {
          name: "expectLionException",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Test"}
                methodName={"expectLionException"}
              />

              <Description
                description={
                  "Run a process to validate if an exception is thrown. Install lion/exceptions."
                }
              />

              <CodeBlock
                language={"bash"}
                content={`composer require lion/exceptions`}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use Lion\\Exceptions\\Exception;
use Lion\\Exceptions\\Interfaces\\ExceptionInterface;
use Lion\\Exceptions\\Traits\\ExceptionTrait;
use Lion\\Test\\Test;
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    private Exception $exception;
    
    protected function setUp(): void
    {
        $this->exception = new class extends Exception implements ExceptionInterface {
            use ExceptionTrait;
        };
    }

    /**
     * @throws Exception
     */
    #[Testing]
    public function example(): void
    {
        $this
            ->exception(Exception::class)
            ->exceptionMessage('ERR')
            ->exceptionStatus('error')
            ->exceptionCode(401)
            ->expectLionException(function (): void {
                throw new $this->exception('ERR', 'error', 401);
            });
    }

    /**
     * @throws Exception
     */
    #[Testing]
    public function example2(): void
    {
        $this
            ->exception(Exception::class)
            ->exceptionMessage('ERR')
            ->exceptionStatus('error')
            ->exceptionCode(401)
            ->expectLionException();
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    #[Testing]
    public function example(): void
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    #[Testing]
    public function example(): void
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    #[Testing]
    public function example(): void
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    #[Testing]
    public function example(): void
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    #[Testing]
    public function example(): void
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    #[Testing]
    public function example(): void
    {
        $return = $this-getprivateMethod('exampleMethod', ['param1', 'param2']);

        $id = $this->getPrivateProperty('id');
    }
}
              `}
              />
            </Fragment>
          ),
        },
        "rmdir-recursively": {
          name: "rmdirRecursively",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Test"}
                methodName={"rmdirRecursively"}
              />

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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    protected function tearDown(): void
    {
        $this->rmdirRecursively('my_path/');
    }

    #[Testing]
    public function example(): void
    {
        mkdir('my_path/', 0777, true);
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
use PHPUnit\\Framework\\Attributes\\Test as Testing;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
        $this->initReflection(new ExampleController());
    }

    #[Testing]
    public function example(): void
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
