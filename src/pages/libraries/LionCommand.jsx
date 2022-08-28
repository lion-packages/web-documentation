import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ListCommands from "../components/ListCommands";
import ListTabs from "../components/ListTabs";

function LionCommand() {
  const [items, setItems] = useState([
    {
      event: "getting-started",
      name: "Getting started",
    },
    {
      event: "list-command",
      name: "List command",
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
            <h2 className="pb-2">Lion-Command</h2>

            <p>
              Library created with the function of executing commands from PHP.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">INSTALL</h4>

            <CodeBlock
              language="powershell"
              content={"composer require lion-framework/lion-command"}
            />
          </div>
        </>
      ),
    },
    {
      event: "list-command",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">AVAILABLE COMMANDS</h4>

            <ListCommands />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">OPTIONAL</h4>

            <CodeBlock
              language="powershell"
              content={"php lion serve --port 4041"}
            />

            <p>
              To create custom commands the following must be executed, For more information on
              creating custom commands read on <a href="https://github.com/symfony/console" target={"_blank"}>Symfony-Console</a>.
            </p>

            <CodeBlock
              language="powershell"
              content={"php lion new:command name_command"}
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
            <h4 className="pb-2">CREDITS</h4>

            <a href="https://github.com/symfony/console" target="_blank">
              Symfony-Console
            </a>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">LICENSE</h4>
            <p>
              Copyright © 2022{" "}
              <a
                href="https://github.com/Sleon4/Lion-Command/blob/main/LICENSE"
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

export default LionCommand;
