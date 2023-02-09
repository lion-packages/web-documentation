import CodeBlock from "../../../../pages/components/CodeBlock";

export default function v4_2_0_LM() {
  return {
    mailer: {
      title: "LionMailer\\Mailer",
      description: "The `Mailer` class allows you to send emails",
      url: "/libraries/lion/mailer/item_version/mailer/init",
      methods: {
        init: {
          title: "Mailer::init",
          description:
            "The `init` function initializes the authentication credentials",
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
          description:
            "The `from` function selects where the email was sent from",
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
          description:
            "The `address` function selects where the email is sent to",
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
        multiple: {
          title: "Mailer::multiple",
          description:
            "The `multiple` function selects multiple email accounts where the email is sent to",
          link: "multiple",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionMailer\\Mailer;\n\n" +
                "Mailer::from('emailfrom@root.com')\n" +
                "\t->multiple(\n\t\t'email_one@root.com'\n\t\t'email_two@root.com'\n\t);"
              }
            />
          ),
        },
        "reply-to": {
          title: "Mailer::replyTo",
          description:
            "The `replyTo` function selects where the email is sent to",
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
          description:
            "The `subject` function describes the subject of the email",
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
          description: "The `body` function describes the body of the email",
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
          description:
            "La funcion `altBody` describe el cuerpo del email sin formato para clientes de correo que no son HTML",
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
          description: "The `send` function executes the sending of mails",
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
