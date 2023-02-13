import { Alert, Badge } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";

export default function v4_9_0_LF() {
  return {
    store: {
      title: "LionFiles\\Store",
      description: "The manage class allows you to manage files of any type",
      url: "/libraries/lion/files/item_version/store/get-extension",
      methods: {
        "get-extension": {
          title: "Store::getExtension",
          description:
            "The getExtension function is available to get the extension of a specific file.",
          link: "get-extension",
          code: (
            <div className="mb-3">
              <p>
                The <Badge bg="secondary">getExtension</Badge> function is
                available to get the extension of a specific file.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n\tStore::getExtension('path/myfile...')\n);"
                }
              />
            </div>
          ),
        },
        "get-name": {
          title: "Store::getName",
          description:
            "The getName function is available to get the name of a specific file.",
          link: "get-name",
          code: (
            <div className="mb-3">
              <p>
                The <Badge bg="secondary">getName</Badge> function is available
                to get the name of a specific file.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n\tStore::getName('path/myfile...')\n);"
                }
              />
            </div>
          ),
        },
        "get-base-name": {
          title: "Store::getBasename",
          description:
            "The getBasename function is available to get the name and extension of a specific file.",
          link: "get-base-name",
          code: (
            <div className="mb-3">
              <p>
                The <Badge bg="secondary">getBasename</Badge> function is
                available to get the name and extension of a specific file.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n\tStore::getBasename('path/myfile...')\n);"
                }
              />
            </div>
          ),
        },
        folder: {
          title: "Store::folder",
          description:
            "The getBasename function is available to get the name and extension of a specific file.",
          link: "folder",
          code: (
            <div className="mb-3">
              <p>
                The <Badge bg="secondary">folder</Badge> function checks if the
                directory path exists, if it doesn't, it creates the directory.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n\tStore::folder('path...')\n);"
                }
              />
            </div>
          ),
        },
        upload: {
          title: "Store::upload",
          description:
            "The upload function allows you to upload files to a path.",
          link: "upload",
          code: (
            <div className="mb-3">
              <p>
                The <Badge bg="secondary">upload</Badge> function allows you to
                upload files to a path.
              </p>
              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n" +
                  "\tStore::upload(\n" +
                  "\t\t$_FILES['user_files']['tmp_name'],\n" +
                  "\t\t$_FILES['user_files']['name'],\n" +
                  "\t\t'storage/img/'\n" +
                  "\t)\n" +
                  ");"
                }
              />
            </div>
          ),
        },
        exist: {
          title: "Store::exist",
          description:
            "The exist function allows you to check if a folder or file exists.",
          link: "exist",
          code: (
            <div className="mb-3">
              <p>
                The <Badge bg="secondary">exist</Badge> function allows you to
                check if a folder or file exists.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n" +
                  "\tStore::exist('path...')\n" +
                  ");"
                }
              />
            </div>
          ),
        },
        remove: {
          title: "Store::remove",
          description:
            "The exist function allows you to check if a folder or file exists.",
          link: "remove",
          code: (
            <div className="mb-3">
              <p>
                The <Badge bg="secondary">remove</Badge> function allows you to
                delete files.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n" +
                  "\tStore::remove('path...')\n" +
                  ");"
                }
              />
            </div>
          ),
        },
        view: {
          title: "Store::view",
          description:
            "The view function gets a list of the files found within a path.",
          link: "view",
          code: (
            <div className="mb-3">
              <p>
                The <Badge bg="secondary">view</Badge> function gets a list of
                the files found within a path.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "require_once('vendor/autoload.php');\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n" +
                  "\tStore::view('path...')\n" +
                  ");"
                }
              />
            </div>
          ),
        },
        size: {
          title: "Store::size",
          description:
            "The size function checks if a file meets the required size in KB.",
          link: "size",
          code: (
            <div className="mb-3">
              <p>
                The <Badge bg="secondary">size</Badge> function checks if a file
                meets the required size in KB.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "require_once('vendor/autoload.php');\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n" +
                  "\tStore::size('path...', 500)\n" +
                  ");"
                }
              />
            </div>
          ),
        },
        "image-size": {
          title: "Store::imageSize",
          description:
            "The size function checks if a file meets the required size in KB.",
          link: "image-size",
          code: (
            <div className="mb-3">
              <p>
                The <Badge bg="secondary">imageSize</Badge> function allows you
                to check if an image meets the requested dimensions.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n" +
                  "\tStore::imageSize('folder', 'file', '1920x1080')\n" +
                  ");"
                }
              />
            </div>
          ),
        },
        validate: {
          title: "Store::validate",
          description:
            "The validate function checks if a file complies with the established validations (extensions). In this example it is established in the validation that it only allows the entry of png, jpg files.",
          link: "validate",
          code: (
            <div className="mb-3">
              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n" +
                  "\tStore::validate([\n" +
                  "\t\t'storage/code_letters_screen_137590_3840x2400.jpg',\n" +
                  "\t\t'storage/code_programming_text_140050_3840x2400.jpg'\n" +
                  "\t], ['png', 'jpg'])\n" +
                  ");"
                }
              />
            </div>
          ),
        },
        rename: {
          title: "Store::rename",
          description:
            "upload files to a path The rename function renames files with random characters, it allows to add a callsign to each file when it is renamed, therename function usesmd5(hash('sha256', uniqid())) to randomly rename files.",
          link: "rename",
          code: (
            <div className="mb-3">
              <p>
                upload files to a path The <Badge bg="secondary">rename</Badge>{" "}
                function renames files with random characters, it allows to add
                a callsign to each file when it is renamed, the
                <Badge bg="secondary">rename</Badge> function uses
                <Badge bg="secondary">md5(hash('sha256', uniqid()))</Badge> to
                randomly rename files.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Store;\n\n" +
                  "var_dump(\n" +
                  "\tStore::rename($_FILES['user_files']['name'])\n" +
                  '); // example output => string(40) "141539cf52f48ecdc5008a19d62ede3b.jpg\n\n' +
                  "// or \n\n" +
                  "var_dump(\n" +
                  "\tStore::rename($_FILES['user_files']['name'], 'IMG')\n" +
                  '); // example output => string(40) "IMG-141539cf52f48ecdc5008a19d62ede3b.jpg"\n\n'
                }
              />
            </div>
          ),
        },
      },
    },
    zip: {
      title: "LionFiles\\Zip",
      description: "The zip class allows you to compress and decompress files",
      url: "/libraries/lion/files/item_version/zip/create",
      methods: {
        create: {
          title: "Zip::create",
          description: "The create function generates a new zip file.",
          link: "create",
          code: (
            <div className="mb-3">
              <p>
                The function receives as a parameter the path and name of the
                zip file that is generated.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Zip;\n\n" +
                  "Zip::create('storage/compress.zip');"
                }
              />
            </div>
          ),
        },
        save: {
          title: "Zip::save",
          description:
            "The save function ends the process and stores the zip file.",
          link: "save",
          code: (
            <CodeBlock
              language="php"
              content={"<?php\n\n" + "use LionFiles\\Zip;\n\n" + "Zip::save();"}
            />
          ),
        },
        add: {
          title: "Zip::add",
          description: "The add function adds the files stored in the zip.",
          link: "add",
          code: (
            <>
              <p>
                The add function receives as a parameter an array with the files
                stored to compress
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Zip;\n\n" +
                  "Zip::add([\n\t'path/file.png', \n\t'path2/file.png', \n\t'file.jpg'\n]);"
                }
              />
            </>
          ),
        },
        "add-upload": {
          title: "Zip::addUpload",
          description: "The add function adds the files stored in the zip.",
          link: "add-upload",
          code: (
            <>
              <p>
                The add Upload function receives as parameters the path where
                the received files are temporarily stored and then deleted
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionFiles\\Zip;\n\n" +
                  "Zip::addUpload(" +
                  "'storage/',\n" +
                  "\t$_FILES['files']['tmp_name'],\n" +
                  "\t$_FILES['files']['name']\n" +
                  ");"
                }
              />
            </>
          ),
        },
      },
    },
  };
}
