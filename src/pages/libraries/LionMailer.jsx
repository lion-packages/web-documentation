import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ListTabs from "../components/ListTabs";
import { BsGithub } from "react-icons/bs";
import { Button } from "react-bootstrap";

function LionMailer() {
  return (
    <div className="py-4 text-white">
      <Button
        variant="dark"
        href="https://github.com/Sleon4/Lion-Mailer"
        target="_blank"
      >
        <BsGithub size={"2em"} className="me-2" />
        Lion-Mailer
      </Button>

      <hr />

      <div className="mb-4">
        <h2 className="pb-2">Lion-Mailer</h2>

        <p>
          Library created for easy email sending based on{" "}
          <a href="https://github.com/PHPMailer/PHPMailer" target={"_blank"}>
            PHPMailer
          </a>
        </p>
      </div>

      <div className="mb-3">
        <h4 className="pb-2">INSTALL</h4>

        <CodeBlock
          language="powershell"
          content={"composer require lion/mailer"}
        />
      </div>

      <hr />

      <div className="mb-3">
        <h4 className="pb-2">USAGE</h4>

        <CodeBlock
          language="php"
          content={
            "<?php\n\n" +
            'require_once("vendor/autoload.php");\n\n' +
            "use LionMailer\\Mailer;\n\n" +
            "Mailer::init([\n" +
            "\t'debug' => 0,\n" +
            "\t'host' => 'smtp.example',\n" +
            "\t'username' => 'dev@root.com',\n" +
            "\t'password' => '--password--',\n" +
            "\t'encryption' => 'tls', // ssl|tls\n" +
            "\t'port' => 587,\n" +
            "]);\n\n" +
            "$responseMailer = Mailer::from('emailfrom@root.com')\n" +
            "\t->address('emailaddress@root.com')\n" +
            "\t->replyTo('emailreplyto@root.com')\n" +
            "\t->subject('subject test')\n" +
            "\t->body('body test')\n" +
            "\t->altBody('altbody test')\n" +
            "\t->send();"
          }
        />
      </div>

      <hr />

      <div className="mb-3">
        <h4 className="pb-2">INSTRUCTIONS</h4>

        <p>
          The mailer class must be initialized using the init function and its
          respective parameters, debug 0 indicates that no type of information
          should appear on the screen when sending emails, deleting this
          property will cause information about the sending process to appear by
          default.
        </p>

        <CodeBlock
          language="php"
          content={
            "<?php\n\n" +
            'require_once("vendor/autoload.php");\n\n' +
            "use LionMailer\\Mailer;\n\n" +

            "Mailer::init([\n" +
            "\t'debug' => 0,\n" +
            "\t'host' => 'smtp.example',\n" +
            "\t'username' => 'dev@root.com',\n" +
            "\t'password' => '--password--',\n" +
            "\t'encryption' => 'tls', // ssl|tls\n" +
            "\t'port' => 587,\n" +
            "]);\n\n"
          }
        />
      </div>

      <hr />

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
    </div>
  );
}

export default LionMailer;
