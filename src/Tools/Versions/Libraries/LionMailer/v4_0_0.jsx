import { Badge, Col, Row } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";

export function v4_0_0_CHANGELOG() {
  return {};
}

export default function v4_0_0() {
  return {
    mailer: {
      title: "LionMailer\\Mailer",
      description: "-----",
      url: "/libraries/lion/mailer/item_version/mailer/init",
      methods: {
        init: {
          title: "Mailer::init",
          description: "-----",
          link: "init",
          code: (
            <>
              <h5 className="text-warning">INSTRUCTIONS</h5>
              <p>
                The mailer class must be initialized using the init function and
                its respective parameters, debug 0 indicates that no type of
                information should appear on the screen when sending emails,
                deleting this property will cause information about the sending
                process to appear by default.
              </p>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Mailer;\n\n" +
                  "Mailer::init([\n" +
                  "\t'debug' => 0,\n" +
                  "\t'host' => 'smtp.example',\n" +
                  "\t'username' => 'dev@root.com',\n" +
                  "\t'password' => '--password--',\n" +
                  "\t'encryption' => 'tls', // ssl|tls\n" +
                  "\t'port' => 587\n" +
                  "]);"
                }
              />
            </>
          ),
        },
        from: {
          title: "Mailer::from",
          description: "-----",
          link: "from",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionMailer\\Mailer;\n\n" +
                "Mailer::from('emailfrom@root.com');"
              }
            />
          ),
        },
        address: {
          title: "Mailer::adrress",
          description: "-----",
          link: "address",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionMailer\\Mailer;\n\n" +
                "Mailer::from('emailfrom@root.com')\n" +
                "\t->address('emailaddress@root.com');"
              }
            />
          ),
        },
        "reply-to": {
          title: "Mailer::replyTo",
          description: "-----",
          link: "reply-to",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionMailer\\Mailer;\n\n" +
                "Mailer::from('emailfrom@root.com')\n" +
                "\t->address('emailaddress@root.com')\n" +
                "\t->replyTo('emailreplyto@root.com');"
              }
            />
          ),
        },
        subject: {
          title: "Mailer::subject",
          description: "-----",
          link: "subject",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionMailer\\Mailer;\n\n" +
                "Mailer::from('emailfrom@root.com')\n" +
                "\t->address('emailaddress@root.com')\n" +
                "\t->replyTo('emailreplyto@root.com')\n" +
                "\t->subject('subject test');"
              }
            />
          ),
        },
        body: {
          title: "Mailer::body",
          description: "-----",
          link: "body",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionMailer\\Mailer;\n\n" +
                "Mailer::from('emailfrom@root.com')\n" +
                "\t->address('emailaddress@root.com')\n" +
                "\t->replyTo('emailreplyto@root.com')\n" +
                "\t->subject('subject test')\n" +
                "\t->body('body test');"
              }
            />
          ),
        },
        "alt-Body": {
          title: "Mailer::altBody",
          description: "-----",
          link: "alt-Body",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionMailer\\Mailer;\n\n" +
                "Mailer::from('emailfrom@root.com')\n" +
                "\t->address('emailaddress@root.com')\n" +
                "\t->replyTo('emailreplyto@root.com')\n" +
                "\t->subject('subject test')\n" +
                "\t->body('body test')\n" +
                "\t->altBody('altbody test');"
              }
            />
          ),
        },
        send: {
          title: "Mailer::send",
          description: "-----",
          link: "send",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionMailer\\Mailer;\n\n" +
                "Mailer::from('emailfrom@root.com')\n" +
                "\t->address('emailaddress@root.com')\n" +
                "\t->replyTo('emailreplyto@root.com')\n" +
                "\t->subject('subject test')\n" +
                "\t->body('body test')\n" +
                "\t->altBody('altbody test')\n" +
                "\t->send();"
              }
            />
          ),
        },
      },
    },
  };
}
