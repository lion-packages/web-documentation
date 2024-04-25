import { Alert } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";

export default function v3_CMD() {
  return {
    "getting-started": {
      name: "Getting started",
      type: "sub_modules",
      list: {
        "about-as": {
          name: "About us",
          code: (
            <>
              <div className="mb-3">
                <h3>About us</h3>

                <hr />
              </div>

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <p className="fs-6">
                library created with the function of executing commands from
                PHP.
              </p>
            </>
          ),
        },
        install: {
          name: "Install",
          code: (
            <>
              <div className="mb-3">
                <h3>Install</h3>

                <hr />
              </div>

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <CodeBlock
                language={"bash"}
                content={"composer require symfony/console lion/command"}
              />
            </>
          ),
        },
      },
    },
    command: {
      name: "Command::class",
      type: "sub_modules",
      list: {
        "error-output": {
          name: "errorOutput",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Command::
                  <span className="text-warning h3">errorOutput()</span>
                </h3>

                <hr />
              </div>

              <p>Add a color to text for errors.</p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Console\\Commands;

use Lion\\Command\\Command;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Output\\OutputInterface;

/**
 * description
 *
 * @package App\\Http\\Console\\Commands
 */
class CustomCommand extends Command
{
    /**
     * Executes the current command
     *
     * This method is not abstract because you can use this class
     * as a concrete class. In this case, instead of defining the
     * execute() method, you set the code to execute by passing
     * a Closure to the setCode() method
     *
     * @param InputInterface $input [InputInterface is the interface implemented by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface implemented by all Output classes]
     *
     * @return int 0 if everything went fine, or an exit code
     *
     * @throws LogicException When this abstract method is not implemented
     *
     * @see setCode()
     */
    public function execute(InputInterface $input, OutputInterface $output): int
    {
      $output->writeln($this->errorOutput('message...'));

      return Command::SUCCESS;
    }
}
                  `}
              />
            </>
          ),
        },
        "success-output": {
          name: "successOutput",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Command::
                  <span className="text-warning h3">successOutput()</span>
                </h3>

                <hr />
              </div>

              <p>
                Add a color to the text for when a process finishes
                successfully.
              </p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Console\\Commands;

use Lion\\Command\\Command;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Output\\OutputInterface;

/**
 * description
 *
 * @package App\\Http\\Console\\Commands
 */
class CustomCommand extends Command
{
    /**
     * Executes the current command
     *
     * This method is not abstract because you can use this class
     * as a concrete class. In this case, instead of defining the
     * execute() method, you set the code to execute by passing
     * a Closure to the setCode() method
     *
     * @param InputInterface $input [InputInterface is the interface implemented by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface implemented by all Output classes]
     *
     * @return int 0 if everything went fine, or an exit code
     *
     * @throws LogicException When this abstract method is not implemented
     *
     * @see setCode()
     */
    public function execute(InputInterface $input, OutputInterface $output): int
    {
      $output->writeln($this->successOutput('message...'));

      return Command::SUCCESS;
    }
}
                  `}
              />
            </>
          ),
        },
        "warning-output": {
          name: "warningOutput",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Command::
                  <span className="text-warning h3">warningOutput()</span>
                </h3>

                <hr />
              </div>

              <p>Add a color to text to display a warning.</p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Console\\Commands;

use Lion\\Command\\Command;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Output\\OutputInterface;

/**
 * description
 *
 * @package App\\Http\\Console\\Commands
 */
class CustomCommand extends Command
{
    /**
     * Executes the current command
     *
     * This method is not abstract because you can use this class
     * as a concrete class. In this case, instead of defining the
     * execute() method, you set the code to execute by passing
     * a Closure to the setCode() method
     *
     * @param InputInterface $input [InputInterface is the interface implemented by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface implemented by all Output classes]
     *
     * @return int 0 if everything went fine, or an exit code
     *
     * @throws LogicException When this abstract method is not implemented
     *
     * @see setCode()
     */
    public function execute(InputInterface $input, OutputInterface $output): int
    {
      $output->writeln($this->warningOutput('message...'));

      return Command::SUCCESS;
    }
}
                  `}
              />
            </>
          ),
        },
        "info-output": {
          name: "infoOutput",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Command::
                  <span className="text-warning h3">infoOutput()</span>
                </h3>

                <hr />
              </div>

              <p>Add a color to text to display information.</p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Console\\Commands;

use Lion\\Command\\Command;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Output\\OutputInterface;

/**
 * description
 *
 * @package App\\Http\\Console\\Commands
 */
class CustomCommand extends Command
{
    /**
     * Executes the current command
     *
     * This method is not abstract because you can use this class
     * as a concrete class. In this case, instead of defining the
     * execute() method, you set the code to execute by passing
     * a Closure to the setCode() method
     *
     * @param InputInterface $input [InputInterface is the interface implemented by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface implemented by all Output classes]
     *
     * @return int 0 if everything went fine, or an exit code
     *
     * @throws LogicException When this abstract method is not implemented
     *
     * @see setCode()
     */
    public function execute(InputInterface $input, OutputInterface $output): int
    {
      $output->writeln($this->infoOutput('message...'));

      return Command::SUCCESS;
    }
}
                  `}
              />
            </>
          ),
        },
        "purple-output": {
          name: "purpleOutput",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Command::
                  <span className="text-warning h3">purpleOutput()</span>
                </h3>

                <hr />
              </div>

              <p>Add a purple color to the text.</p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Console\\Commands;

use Lion\\Command\\Command;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Output\\OutputInterface;

/**
 * description
 *
 * @package App\\Http\\Console\\Commands
 */
class CustomCommand extends Command
{
    /**
     * Executes the current command
     *
     * This method is not abstract because you can use this class
     * as a concrete class. In this case, instead of defining the
     * execute() method, you set the code to execute by passing
     * a Closure to the setCode() method
     *
     * @param InputInterface $input [InputInterface is the interface implemented by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface implemented by all Output classes]
     *
     * @return int 0 if everything went fine, or an exit code
     *
     * @throws LogicException When this abstract method is not implemented
     *
     * @see setCode()
     */
    public function execute(InputInterface $input, OutputInterface $output): int
    {
      $output->writeln($this->purpleOutput('message...'));

      return Command::SUCCESS;
    }
}
                  `}
              />
            </>
          ),
        },
      },
    },
    kernel: {
      name: "Kernel::class",
      type: "sub_modules",
      list: {
        "get-application": {
          name: "getApplication",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Kernel::
                  <span className="text-warning h3">getApplication()</span>
                </h3>

                <hr />
              </div>

              <p>Returns the current Application object.</p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use Lion\\Command\\Kernel;

$kernel = new Kernel();

$application = $kernel->getApplication();
                `}
              />
            </>
          ),
        },
        "set-application": {
          name: "setApplication",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Kernel::
                  <span className="text-warning h3">setApplication()</span>
                </h3>

                <hr />
              </div>

              <p>Change the current Application object.</p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use Lion\\Command\\Kernel;
use Symfony\\Component\\Console\\Application

$kernel = new Kernel();

$kernel->setApplication(new Application());
                `}
              />
            </>
          ),
        },
        commands: {
          name: "Commands",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Kernel::
                  <span className="text-warning h3">commands()</span>
                </h3>

                <hr />
              </div>

              <p>Add assigned commands from an array.</p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use Lion\\Command\\Kernel;

$kernel = new Kernel();

$kernel->commands([
  App\\Http\\Console\\Commands\\ExampleCommand::class
]);
                `}
              />
            </>
          ),
        },
        "commands-on-objects": {
          name: "commandsOnObjects",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Kernel::
                  <span className="text-warning h3">commandsOnObjects()</span>
                </h3>

                <hr />
              </div>

              <p>Add assigned commands from an array.</p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use App\\Http\\Console\\Commands\\ExampleCommand;
use Lion\\Command\\Kernel;

$kernel = new Kernel();

$kernel->commandsOnObjects([
  new ExampleCommand()
]);
                `}
              />
            </>
          ),
        },
        run: {
          name: "run",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Kernel::
                  <span className="text-warning h3">run()</span>
                </h3>

                <hr />
              </div>

              <p>Run the current application.</p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use App\\Http\\Console\\Commands\\ExampleCommand;
use Lion\\Command\\Kernel;

$kernel = new Kernel();

$kernel->commandsOnObjects([
  new ExampleCommand()
]);

$kernel->run();
                `}
              />
            </>
          ),
        },
        execute: {
          name: "execute",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Kernel::
                  <span className="text-warning h3">execute()</span>
                </h3>

                <hr />
              </div>

              <p>Returns the current Application object.</p>

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use Lion\\Command\\Kernel;

$kernel = new Kernel();

$output = $kernel->execute('php lion info');

var_dump($output);
                `}
              />
            </>
          ),
        },
      },
    },
  };
}
