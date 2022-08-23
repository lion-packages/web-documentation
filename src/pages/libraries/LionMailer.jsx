import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ListTabs from "../components/ListTabs";

function LionMailer() {
  const [items, setItems] = useState([
    {
      event: "getting-started",
      name: "Getting started",
    },
    {
      event: "instructions",
      name: "Instructions",
    },
    {
      event: "multiple-account",
      name: "Send emails to multiple accounts",
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
            <h2 className="pb-2">Lion-Mailer</h2>

            <p>
              Library created for easy email sending based on{" "}
              <a
                href="https://github.com/PHPMailer/PHPMailer"
                target={"_blank"}
              >
                PHPMailer
              </a>
              .
            </p>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">INSTALL</h4>

            <CodeBlock
              language="powershell"
              content={"composer require lion-framework/lion-mailer"}
            />
          </div>

          <div className="mb-3">
            <h4 className="pb-2">USAGE</h4>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                'require_once("vendor/autoload.php");\n\n' +
                "use LionMailer\\Mailer;\n" +
                "use LionMailer\\DataMailer\\Attach;\n\n" +
                "Mailer::init([\n" +
                "\t'info' => [\n" +
                "\t\t'debug' => 0,\n" +
                "\t\t'host' => 'smtp.example',\n" +
                "\t\t'port' => 0,\n" +
                "\t\t'email' => 'example@example.com',\n" +
                "\t\t'user_name' => 'example - user',\n" +
                "\t\t'password' => '--example--',\n" +
                "\t\t'encryption' => false // true for ssl, false for tls\n" +
                "\t]\n]);\n\n" +
                "$request = Mailer::send(\n" +
                "\tAttach::newAttach(\n" +
                "\t\t['example@gmail.com', 'User - Dev'], // addAdress\n" +
                "\t\t['example2@gmail.com', 'User - Reply to'],  // addReplyTo\n" +
                "\t\tnull, // addCC\n" +
                "\t\tnull, // addBCC\n" +
                "\t\tnull, // addAttachment\n" +
                "\t),\n" +
                "\tMailer::newInfo(\n" +
                "\t\t'example', // subject\n" +
                "\t\t'example', // body\n" +
                "\t\t'example', // alt body\n" +
                "\t)\n);"
              }
            />
          </div>

          <div className="mb-3">
            <h4 className="pb-2">or</h4>

            <CodeBlock
              language="php"
              content={
                "$request = Mailer::send(\n" +
                "\tAttach::newAttach(\n" +
                "\t\t['example@gmail.com', 'User - Dev'], // addAdress\n" +
                "\t\t['example2@gmail.com', 'User - Reply to'],  // addReplyTo\n" +
                "\t\tnull, // addCC\n" +
                "\t\tnull, // addBCC\n" +
                "\t\t[$file], // addAttachment - optional: [$file, 'namefile.ext']\n" +
                "\t),\n" +
                "\tMailer::newInfo(\n" +
                "\t\t'example', // subject\n" +
                "\t\t'example', // body\n" +
                "\t\t'example' // alt body\n" +
                "\t)\n);\n\n" +
                "var_dump($request);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "instructions",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">INSTRUCTIONS</h4>

            <p>
              The mailer class must be initialized using the init function and
              its respective parameters, debug 0 indicates that no type of
              information should appear on the screen when sending emails,
              deleting this property will cause information about the sending
              process to appear by default.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                'require_once("vendor/autoload.php");\n\n' +
                "use LionMailer\\Mailer;\n" +
                "use LionMailer\\DataMailer\\Attach;\n\n" +
                "Mailer::init([\n" +
                "\t'info' => [\n" +
                "\t\t'debug' => 0,\n" +
                "\t\t'host' => 'smtp.example',\n" +
                "\t\t'port' => 0,\n" +
                "\t\t'email' => 'example@example.com',\n" +
                "\t\t'user_name' => 'example - user',\n" +
                "\t\t'password' => '--example--',\n" +
                "\t\t'encryption' => false // true for ssl, false for tls\n" +
                "\t]\n]);"
              }
            />
          </div>

          <div className="mb-3">
            <p>
              The info property relates all kinds of user credentials for
              sending correct email.
            </p>

            <CodeBlock
              language="php"
              content={
                "'info' => [\n" +
                "\t'debug' => 0,\n" +
                "\t'host' => 'smtp.example',\n" +
                "\t'port' => 0,\n" +
                "\t'email' => 'example@example.com',\n" +
                "\t'user_name' => 'example - user',\n" +
                "\t'password' => '--example--',\n" +
                "\t'encryption' => false // true for ssl, false for tls\n]"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "multiple-account",
      content: (
        <>
          <div>
            <h4 className="pb-2">SEND EMAILS TO MULTIPLE ACCOUNTS</h4>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                'require_once("vendor/autoload.php");\n\n' +
                "use LionMailer\\Mailer;\n" +
                "use LionMailer\\DataMailer\\Attach;\n\n" +
                "$request = Mailer::sendGroup(\n" +
                "\tAttach::newGroupAttach([\n" +
                "\t\t['person1@example.com', 'person1'], // addAdress\n" +
                "\t\t['person1@example.com', 'person2'], // addAdress\n" +
                "\t]),\n" +
                "\tMailer::newGroupInfo(\n" +
                "\t\t['example@example.com', 'example - user'], // addReplyTo\n" +
                "\t\tnull, // addCC\n" +
                "\t\tnull, // addBCC\n" +
                "\t\tnull, // addAttachment\n" +
                "\t\t'example', // subject\n" +
                "\t\t'example', // body\n" +
                "\t\t'example' // alt body\n" +
                "\t)\n);\n\n" +
                "var_dump($request);"
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
            <h4 className="pb-2">CREDITS</h4>

            <a href="https://github.com/PHPMailer/PHPMailer" target={"_blank"}>
              PHPMailer
            </a>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">LICENSE</h4>

            <p>
              Copyright © 2022{" "}
              <a
                href="https://github.com/Sleon4/Lion-Mailer/blob/main/LICENSE"
                target={"_blank"}
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

export default LionMailer;
