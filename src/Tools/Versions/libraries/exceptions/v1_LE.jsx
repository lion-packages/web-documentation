import { Fragment } from "react";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Description from "../../../../pages/components/Description";
import CodeBlock from "../../../../pages/components/CodeBlock";
import { Alert } from "react-bootstrap";
import SupportVersion from "../../../../pages/components/SupportVersion";
import Title from "../../../../pages/components/Title";

export default function v1_LE() {
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
                description={"Handling exceptions and serializations."}
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

              <SupportVersion title="Lion-Authentication" version="8.3" />

              <CodeBlock
                language={"bash"}
                content={"composer require lion/exceptions"}
              />
            </Fragment>
          ),
        },
      },
    },
    exception: {
      name: "Exception::class",
      type: "sub_modules",
      list: {
        "get-status": {
          name: "getStatus",
          code: (
            <Fragment>
              <LibraryTitle className="Exception" methodName="getStatus" />

              <Description description={"Get response status."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use Lion\\Exceptions\\Exception;

$exception = new class extends Exception {
    public function __construct(
        string $message = '',
        string $status = 'error',
        int $code = 500,
        mixed $data = null,
        ?Throwable $previus = null
    ) {
        parent::__construct($message, $code, $previous);
    }
};

var_dump($exception->getStatus()); // 'error'
                  `}
              />
            </Fragment>
          ),
        },
        "set-status": {
          name: "setStatus",
          code: (
            <Fragment>
              <LibraryTitle className="Exception" methodName="setStatus" />

              <Description description={"Get response status."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use Lion\\Exceptions\\Exception;

$exception = new class extends Exception {
    public function __construct(
        string $message = '',
        string $status = 'error',
        int $code = 500,
        mixed $data = null,
        ?Throwable $previus = null
    ) {
        $this->setStatus($status);

        parent::__construct($message, $code, $previous);
    }
};

var_dump($exception->getStatus()); // 'error'
                  `}
              />
            </Fragment>
          ),
        },
        "get-data": {
          name: "getData",
          code: (
            <Fragment>
              <LibraryTitle className="Exception" methodName="getData" />

              <Description description={"Get the response data."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use Lion\\Exceptions\\Exception;

$exception = new class extends Exception {
    public function __construct(
        string $message = '',
        string $status = 'error',
        int $code = 500,
        mixed $data = null,
        ?Throwable $previus = null
    ) {
        parent::__construct($message, $code, $previous);
    }
};

var_dump($exception->getData()); // null
                  `}
              />
            </Fragment>
          ),
        },
        "set-data": {
          name: "setData",
          code: (
            <Fragment>
              <LibraryTitle className="Exception" methodName="setData" />

              <Description description={"Change response data."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use Lion\\Exceptions\\Exception;

$exception = new class extends Exception {
    public function __construct(
        string $message = '',
        string $status = 'error',
        int $code = 500,
        mixed $data = null,
        ?Throwable $previus = null
    ) {
        $this->setData($data);

        parent::__construct($message, $code, $previous);
    }
};

var_dump($exception->getData()); // null
                  `}
              />
            </Fragment>
          ),
        },
      },
    },
    "exception-trait": {
      name: "ExceptionTrait::class",
      type: "sub_modules",
      list: {
        "exception-trait": {
          name: "ExceptionTrait",
          code: (
            <Fragment>
              <Title title="ExceptionTrait" />

              <Description
                description={
                  "Implements the abstract methods necessary to execute an exception."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use App\\Exceptions\\MyException;
use Lion\\Exceptions\\Exception;
use Lion\\Exceptions\\Traits\\ExceptionTrait;

$myException = new class extends Exception {
    use ExceptionTrait;
};

throw new $myException('ERR', 'error', 500);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    serialize: {
      name: "Serialize::class",
      type: "sub_modules",
      list: {
        "exception-handler": {
          name: "exceptionHandler",
          code: (
            <Fragment>
              <LibraryTitle
                className="Serialize"
                methodName="exceptionHandler"
              />

              <Description
                description={
                  "Manages exceptions and serializes them to JSON format."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use Lion\\Exceptions\\Serialize;

$serialize = new Serialize();

$serialize->exceptionHandler()
                  `}
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
