import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ListTabs from "../components/ListTabs";
import Badge from "react-bootstrap/Badge";

function LionFiles() {
  const [items, setItems] = useState([
    {
      event: "getting-started",
      name: "Getting started",
    },
    {
      event: "get-extension",
      name: "Get Extension",
    },
    {
      event: "get-name",
      name: "Get Name",
    },
    {
      event: "get-base-name",
      name: "Get Base Name",
    },
    {
      event: "folder",
      name: "Folder",
    },
    {
      event: "validate",
      name: "Validate",
    },
    {
      event: "upload",
      name: "Upload",
    },
    {
      event: "rename",
      name: "Rename",
    },
    {
      event: "exist",
      name: "Exist",
    },
    {
      event: "remove",
      name: "Remove",
    },
    {
      event: "view",
      name: "View",
    },
    {
      event: "size",
      name: "Size",
    },
    {
      event: "image-size",
      name: "Image Size",
    },
    {
      event: "credits-license",
      name: "Credits and license",
    },
  ]);

  const [panes, setPanes] = useState([
    {
      event: "getting-started",
      content: (
        <>
          <div className="mb-4">
            <h2 className="pb-2">Lion-Files</h2>

            <p>
              Library created with the function of working internal system files.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">INSTALL</h4>

            <CodeBlock
              language="powershell"
              content={"composer require lion-framework/lion-files"}
            />
          </div>
        </>
      ),
    },
    {
      event: "get-extension",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">GET EXTENSION</h4>

            <p>
              The <Badge bg="secondary">getExtension</Badge> function is available to get the
              extension of a specific file.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n\tManage::getExtension('path/myfile...')\n);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "get-name",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">GET NAME</h4>

            <p>
              The <Badge bg="secondary">getName</Badge> function is available to get the name
              of a specific file.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n\tManage::getName('path/myfile...')\n);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "get-base-name",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">GET BASE NAME</h4>

            <p>
              The <Badge bg="secondary">getBasename</Badge> function is available to get the
              name and extension of a specific file.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n\tManage::getBasename('path/myfile...')\n);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "folder",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">FOLDER</h4>

            <p>
              The <Badge bg="secondary">folder</Badge> function checks if the directory path
              exists, if it doesn't, it creates the directory.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n\tManage::folder('path...')\n);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "validate",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">VALIDATE</h4>

            <p>
              The <Badge bg="secondary">validate</Badge> function checks if a
              file complies with the established validations (extensions). In
              this example it is established in the validation that it only
              allows the entry of png, jpg files.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n" +
                "\tManage::validate([\n" +
                "\t\t'storage/code_letters_screen_137590_3840x2400.jpg',\n" +
                "\t\t'storage/code_programming_text_140050_3840x2400.jpg'\n" +
                "\t], ['png', 'jpg'])\n" +
                ");"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "upload",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">UPLOAD</h4>

            <p>
              The <Badge bg="secondary">upload</Badge> function allows you to
              upload files to a path.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n" +
                "\tManage::upload(\n" +
                "\t\t$_FILES['user_files']['tmp_name'],\n" +
                "\t\t$_FILES['user_files']['name'],\n" +
                "\t\t'storage/img/'\n" +
                "\t)\n" +
                ");"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "rename",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">RENAME</h4>

            <p>
              upload files to a path
              The <Badge bg="secondary">rename</Badge> function renames files with random
              characters, it allows to add a callsign to each file when it is renamed, the
              <Badge bg="secondary">rename</Badge> function uses
              <Badge bg="secondary">md5(hash('sha256', uniqid()))</Badge> to randomly rename files.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +

                "use LionFiles\\Manage;\n\n" +

                "var_dump(\n" +
                "\tManage::rename($_FILES['user_files']['name'])\n" +
                '); // example output => string(40) "141539cf52f48ecdc5008a19d62ede3b.jpg\n\n' +

                '// or \n\n' +

                "var_dump(\n" +
                "\tManage::rename($_FILES['user_files']['name'], 'IMG')\n" +
                '); // example output => string(40) "IMG-141539cf52f48ecdc5008a19d62ede3b.jpg"\n\n'
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "exist",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">EXIST</h4>

            <p>
              The <Badge bg="secondary">exist</Badge> function allows you to check if a folder or
              file exists.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n" +
                "\tManage::exist('path...')\n" +
                ');'
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "remove",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">REMOVE</h4>

            <p>
              The <Badge bg="secondary">remove</Badge> function allows you to delete files.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n" +
                "\tManage::remove('path...')\n" +
                ');'
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "view",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">VIEW</h4>

            <p>
              The <Badge bg="secondary">view</Badge> function gets a list of the files found
              within a path.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n" +
                "\tManage::view('path...')\n" +
                ');'
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "size",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">SIZE</h4>

            <p>
              The <Badge bg="secondary">size</Badge> function checks if a file meets the required
              size in KB.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n" +
                "\tManage::size('path...', 500)\n" +
                ');'
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "image-size",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">IMAGE SIZE</h4>

            <p>
              The <Badge bg="secondary">imageSize</Badge> function allows you to check if an image
              meets the requested dimensions.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "require_once('vendor/autoload.php');\n\n" +
                "use LionFiles\\Manage;\n\n" +
                "var_dump(\n" +
                "\tManage::imageSize('folder', 'file', '1920x1080')\n" +
                ');'
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "credits-license",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">LICENSE</h4>
            <p>
              Copyright © 2022{" "}
              <a
                href="https://github.com/Sleon4/Lion-Files/blob/main/LICENSE"
                target="_blank"
              >
                MIT License
              </a>
            </p>
          </div>
        </>
      ),
    },
  ]);

  return <ListTabs default="getting-started" items={items} panes={panes} />;
}

export default LionFiles;
