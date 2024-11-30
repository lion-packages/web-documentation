import { Alert } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";
import { Fragment } from "react";
import Title from "../../../../pages/components/Title";
import Description from "../../../../pages/components/Description";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import ExampleTitle from "../../../../pages/components/ExampleTitle";
import SupportVersion from "../../../../pages/components/SupportVersion";

export default function v7_LF() {
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
                  "Library created with the function of working internal system files."
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

              <SupportVersion title={"Lion-Files"} version={"8.3"} />

              <CodeBlock
                language={"bash"}
                content={"composer require lion/files"}
              />
            </Fragment>
          ),
        },
      },
    },
    store: {
      name: "Store::class",
      type: "sub_modules",
      list: {
        exist: {
          name: "exist",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="exist" />

              <Description
                description={
                  "The exist function allows you to check if a folder or file exists."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$response = (new Store())
    ->exist('path/');

var_dump($response);
                  `}
              />
            </Fragment>
          ),
        },
        folder: {
          name: "folder",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="folder" />

              <Description
                description={
                  "Checks if a folder does not exist and creates it."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$response = (new Store())
    ->folder('path/');

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        get: {
          name: "get",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="get" />

              <Description
                description={
                  "The get function gets files from a specified path."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$file = (new Store())
    ->get('path/myfile.txt');

var_dump($file);
`}
              />
            </Fragment>
          ),
        },
        "get-base-name": {
          name: "getBasename",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="getBasename" />

              <Description
                description={
                  "The getBasename function is available to get the name and extension of a specific file."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$file = (new Store())
    ->getBasename('path/myfile.txt');

var_dump($file);
`}
              />
            </Fragment>
          ),
        },
        "get-extension": {
          name: "getExtension",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="getExtension" />

              <Description
                description={
                  "The getExtension function is available to get the extension of a specific file."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$ext = (new Store())
    ->getExtension('path/myfile.txt');

var_dump($ext);
`}
              />
            </Fragment>
          ),
        },
        "get-files": {
          name: "getFiles",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="getFiles" />

              <Description description={"Get files from a defined path."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use Lion\\Files\\Store;

$files = (new Store())->getFiles('path/');

var_dump($files);
`}
              />
            </Fragment>
          ),
        },
        "get-name": {
          name: "getName",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="getName" />

              <Description
                description={
                  "The getName function is available to get the name of a specific file."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$name = (new Store())
    ->getName('path/myfile.txt');

var_dump($name);
`}
              />
            </Fragment>
          ),
        },
        "get-namespace-from-file": {
          name: "getNamespaceFromFile",
          code: (
            <Fragment>
              <LibraryTitle
                className="Store"
                methodName="getNamespaceFromFile"
              />

              <Description
                description={
                  "The getNamespaceFromFile function is available to get the namespace of a specific file."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('./vendor/autoload.php');

use Lion\\Files\\Store; 

$namespace = (new Store())->getNamespaceFromFile('app/Http/Controllers/HomeController.php');

var_dump($namespace); // App\\Http\\Controllers\\HomeController
`}
              />
            </Fragment>
          ),
        },
        "image-size": {
          name: "imageSize",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="imageSize" />

              <Description
                description={"Validates if the resolution of a file is valid."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$response = (new Store())
    ->imageSize('folder', 'file', '1920x1080');

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        remove: {
          name: "remove",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="remove" />

              <Description description={"Remove files from a defined path."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$response = (new Store())
    ->remove('path/myfile.txt');

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        rename: {
          name: "rename",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="rename" />

              <Description
                description={
                  <Fragment>
                    Upload files to a path The rename function renames files
                    with random characters, it allows to add a callsign to each
                    file when it is renamed, therename function uses
                    <strong> md5(hash('sha256', uniqid())) </strong>to randomly
                    rename files.
                  </Fragment>
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="php"
                  content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$rename = (new Store())
    ->rename($_FILES['user_files']['name']);

var_dump($rename);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="php"
                  content={`<?php

use Lion\\Files\\Store;

$rename = (new Store())
    ->rename($_FILES['user_files']['name'], 'IMG');

var_dump($rename);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        size: {
          name: "size",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="size" />

              <Description
                description={
                  "The size function checks if a file meets the required size in KB."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$response = (new Store())
    ->size('path...', 500);

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        upload: {
          name: "upload",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="upload" />

              <Description
                description={
                  "The upload function allows you to upload files to a path."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$response = (new Store())
    ->upload(
        $_FILES['user_files']['tmp_name'], 
        $_FILES['user_files']['name'], 
        'storage/img/'
    );

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        validate: {
          name: "validate",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="validate" />

              <Description
                description={
                  "The validate function checks if a file complies with the established validations (extensions). In this example it is established in the validation that it only allows the entry of png, jpg files."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$files = [
    'storage/code_letters_screen_137590_3840x2400.jpg',
    'storage/code_programming_text_140050_3840x2400.jpg'
];

$response = (new Store())
    ->validate($files, ['png', 'jpg']);

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        view: {
          name: "view",
          code: (
            <Fragment>
              <LibraryTitle className="Store" methodName="view" />

              <Description
                description={
                  "The view function gets a list of the files found within a path."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Store;

$files = (new Store())
    ->view('path/');

var_dump($files);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    zip: {
      name: "Zip::class",
      type: "sub_modules",
      list: {
        add: {
          name: "add",
          code: (
            <Fragment>
              <LibraryTitle className="Zip" methodName="add" />

              <Description
                description={
                  "The add function adds the files stored in the zip."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Zip;

(new Zip())
    ->add([
        'path/file.png', 
        'path2/file.png', 
        'file.jpg'
    ]);
`}
              />
            </Fragment>
          ),
        },
        "add-upload": {
          name: "addUpload",
          code: (
            <Fragment>
              <LibraryTitle className="Zip" methodName="addUpload" />

              <Description
                description={
                  "The add function adds the files stored in the zip."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Zip;

(new Zip())
    ->addUpload('storage/',
        $_FILES['files']['tmp_name'],
        $_FILES['files']['name']
    );
`}
              />
            </Fragment>
          ),
        },
        create: {
          name: "create",
          code: (
            <Fragment>
              <LibraryTitle className="Zip" methodName="create" />

              <Description
                description={"The create function generates a new zip file."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Zip;

(new Zip())
    ->create('storage/compress.zip');
`}
              />
            </Fragment>
          ),
        },
        decompress: {
          name: "decompress",
          code: (
            <Fragment>
              <LibraryTitle className="Zip" methodName="decompress" />

              <Description
                description={
                  "The `decompress` function decompresses a file with the extension .zip."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Zip;

(new Zip())
    ->decompress("./example.zip", "./storage/");
`}
              />
            </Fragment>
          ),
        },
        save: {
          name: "save",
          code: (
            <Fragment>
              <LibraryTitle className="Zip" methodName="save" />

              <Description
                description={
                  "The save function ends the process and stores the zip file."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Files\\Zip;

(new Zip())
    ->save();
`}
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
