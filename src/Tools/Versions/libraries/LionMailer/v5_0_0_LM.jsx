import { Badge } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";

export default function v5_0_0_LM() {
  return {
    "mail-service": {
      title: "LionMailer\\MailService",
      description:
        "The `ServiceMailer` class allows you to initialize mail services with the required accounts",
      url: "/libraries/lion/mailer/item_version/mail-service/run",
      methods: {
        run: {
          title: "MailService::run",
          description:
            "The `run` function initializes the authentication credentials with and allows you to select different services",
          link: "run",
          code: (
            <>
              <h5 className="text-warning">INSTRUCTIONS</h5>

              <p>
                The mailer class must be initialized through the run function
                and its respective parameters, debug 0 indicates that no type of
                information should appear on the screen when sending emails, you
                can add multiple email accounts and add multiple email accounts
                for each email account services.
              </p>

              <p>
                The services currently available are:
                <ul>
                  <li>phpmailer</li>
                  <li>symfony</li>
                </ul>
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\MailService;\n\n" +
                  "$res = MailService::run([\n" +
                  "\t'default' => 'main',\n" +
                  "\t'accounts' => [\n" +
                  "\t\t'main' => [\n" +
                  "\t\t\t'services' => ['symfony'],\n" +
                  "\t\t\t'debug' => 0,\n" +
                  "\t\t\t'host' => 'smtp.office365.com',\n" +
                  "\t\t\t'encryption' => 'tls',\n" +
                  "\t\t\t'port' => 587,\n" +
                  "\t\t\t'name' => 'Sleon',\n" +
                  "\t\t\t'account' => 'sleon@outlook.com',\n" +
                  "\t\t\t'password' => 'my_password'\n" +
                  "\t\t],\n" +
                  "\t\t'support' => [\n" +
                  "\t\t\t'services' => ['symfony', 'phpmailer'],\n" +
                  "\t\t\t'debug' => 0,\n" +
                  "\t\t\t'host' => 'smtp.office365.com',\n" +
                  "\t\t\t'encryption' => 'tls',\n" +
                  "\t\t\t'port' => 587,\n" +
                  "\t\t\t'name' => 'Sleon - Support',\n" +
                  "\t\t\t'account' => 'sleon-support@outlook.com',\n" +
                  "\t\t\t'password' => 'my_password'\n" +
                  "\t\t]\n" +
                  "\t],\n" +
                  "]);\n\n" +
                  "var_dump($res);"
                }
              />
            </>
          ),
        },
      },
    },
    "mail-phpmailer": {
      title: "LionMailer\\Services\\PHPMailer\\Mail",
      description: "The `Mail` class allows you to send email using PHPMailer",
      url: "/libraries/lion/mailer/item_version/mail-phpmailer/address",
      methods: {
        address: {
          title: "Mail::address",
          description:
            "The `address` function allows you to select the recipient mail",
          link: "address",
          code: (
            <>
              <div className="mb-3">
                <p>Available parameters:</p>

                <ul>
                  <li>
                    address_email <Badge bg="secondary">REQUIRED</Badge>
                  </li>

                  <li>
                    address_name <Badge bg="secondary">OPTIONAL</Badge>
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                    "Mail::address('sleon@outlook.com');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                    "Mail::address('sleon@outlook.com', 'Sleon');"
                  }
                />
              </div>
            </>
          ),
        },
        account: {
          title: "Mail::account",
          description:
            "The `account` function allows you to select another account for sending email",
          link: "account",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::account('support');"
                }
              />
            </>
          ),
        },
        "high-priority": {
          title: "Mail::highPriority",
          description:
            "The `highPriority` function allows you to select the priority of high priority mail",
          link: "high-priority",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::highPriority();"
                }
              />
            </>
          ),
        },
        "regular-priority": {
          title: "Mail::regularPriority",
          description:
            "The `regularPriority` function allows you to select the priority of regular priority mail",
          link: "regular-priority",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::regularPriority();"
                }
              />
            </>
          ),
        },
        "low-priority": {
          title: "Mail::lowPriority",
          description:
            "The `lowPriority` function allows you to select the priority of low priority mail",
          link: "low-priority",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::lowPriority();"
                }
              />
            </>
          ),
        },
        multiple: {
          title: "Mail::multiple",
          description:
            "The `multiple` feature allows you to add multiple recipient accounts",
          link: "multiple",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::multiple(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");"
                }
              />
            </>
          ),
        },
        "embedded-image": {
          title: "Mail::embeddedImage",
          description:
            "The `embedded Image` function allows you to embed images dynamically",
          link: "embedded-image",
          code: (
            <>
              <div className="mb-3">
                <p>Available parameters:</p>

                <ul>
                  <li>
                    path <Badge bg="secondary">REQUIRED</Badge>
                  </li>

                  <li>
                    cid <Badge bg="secondary">REQUIRED</Badge>
                  </li>

                  <li>
                    address_name <Badge bg="secondary">OPTIONAL</Badge>
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                    "Mail::embeddedImage('path/img.png', 'my-img');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                    "Mail::embeddedImage('path/img.png', 'my-img', 'img-example');"
                  }
                />
              </div>
            </>
          ),
        },
        "reply-to": {
          title: "Mail::replyTo",
          description:
            "The `replyTo` function allows you to select an account to reply to, if the function is not called the default account is used",
          link: "reply-to",
          code: (
            <>
              <div className="mb-3">
                <p>Available parameters:</p>

                <ul>
                  <li>
                    reply_email <Badge bg="secondary">REQUIRED</Badge>
                  </li>

                  <li>
                    reply_name <Badge bg="secondary">OPTIONAL</Badge>
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                    "Mail::replyTo('sleon@outlook.com');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                    "Mail::replyTo('sleon@outlook.com', 'Sleon');"
                  }
                />
              </div>
            </>
          ),
        },
        cc: {
          title: "Mail::cc",
          description:
            "The `cc` function allows you to add accounts to receive a copy of the mail",
          link: "cc",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::cc(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");"
                }
              />
            </>
          ),
        },
        bcc: {
          title: "Mail::bcc",
          description:
            "The `bcc` function allows you to add accounts to receive a copy of the mail without other users being able to see the users who received the copy",
          link: "bcc",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::bcc(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");"
                }
              />
            </>
          ),
        },
        attachment: {
          title: "Mail::attachment",
          description:
            "The `attachment` function allows you to dynamically attach files",
          link: "attachment",
          code: (
            <>
              <div className="mb-3">
                <p>Available parameters:</p>

                <ul>
                  <li>
                    path <Badge bg="secondary">REQUIRED</Badge>
                  </li>

                  <li>
                    file_name <Badge bg="secondary">OPTIONAL</Badge>
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                    "Mail::attachment('report.pdf');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                    "Mail::attachment('report.pdf', 'report-2023.pdf');"
                  }
                />
              </div>
            </>
          ),
        },
        subject: {
          title: "Mail::subject",
          description:
            "The `subject` function allows you to add the subject to the mail",
          link: "subject",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::subject('Ative account');"
                }
              />
            </>
          ),
        },
        body: {
          title: "Mail::body",
          description:
            "The `body` function allows you to add a body to the email, you can attach HTML code",
          link: "body",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::body('<h1>My body</h1>');"
                }
              />
            </>
          ),
        },
        "alt-body": {
          title: "Mail::altBody",
          description:
            "The `altBody` function allows you to add a body to the email in plain text",
          link: "alt-body",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::altBody('My alt body');"
                }
              />
            </>
          ),
        },
        header: {
          title: "Mail::header",
          description:
            "The `header` function allows you to add a header to the mail",
          link: "header",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::header('Content-Type', 'text/html');"
                }
              />
            </>
          ),
        },
        send: {
          title: "Mail::send",
          description: "The `send` function sends the email",
          link: "send",
          code: (
            <>
              <p>
                The email that sends email by{" "}
                <Badge bg="secondary">default</Badge> is the one selected in the
                default property, use the <Badge bg="secondary">account</Badge>{" "}
                function to use another account.
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::address('sleon@outlook.com')\n" +
                  "\t->subject('Active')\n" +
                  "\t->body('<h1>My body</h1>')\n" +
                  "\t->altBody('my alt body')\n" +
                  "\t->send();"
                }
              />
            </>
          ),
        },
      },
    },
    "mail-symfony": {
      title: "LionMailer\\Services\\Symfony\\Mail",
      description: "The `Mail` class allows you to send email using Symfony",
      url: "/libraries/lion/mailer/item_version/mail-symfony/address",
      methods: {
        address: {
          title: "Mail::address",
          description:
            "The `address` function allows you to select the recipient mail",
          link: "address",
          code: (
            <>
              <div className="mb-3">
                <p>Available parameters:</p>

                <ul>
                  <li>
                    address_email <Badge bg="secondary">REQUIRED</Badge>
                  </li>

                  <li>
                    address_name <Badge bg="secondary">OPTIONAL</Badge>
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                    "Mail::address('sleon@outlook.com');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                    "Mail::address('sleon@outlook.com', 'Sleon');"
                  }
                />
              </div>
            </>
          ),
        },
        "highest-priority": {
          title: "Mail::highestPriority",
          description:
            "The `highestPriority` function allows you to select the priority of highest priority mail",
          link: "highest-priority",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::highestPriority();"
                }
              />
            </>
          ),
        },
        "high-priority": {
          title: "Mail::highPriority",
          description:
            "The `highPriority` function allows you to select the priority of high priority mail",
          link: "high-priority",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::highPriority();"
                }
              />
            </>
          ),
        },
        "normal-priority": {
          title: "Mail::normalPriority",
          description:
            "The `normalPriority` function allows you to select the priority of normal priority mail",
          link: "normal-priority",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::normalPriority();"
                }
              />
            </>
          ),
        },
        "low-priority": {
          title: "Mail::lowPriority",
          description:
            "The `lowPriority` function allows you to select the priority of low priority mail",
          link: "low-priority",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::lowPriority();"
                }
              />
            </>
          ),
        },
        "lowest-priority": {
          title: "Mail::lowestPriority",
          description:
            "The `lowestPriority` function allows you to select the priority of lowest priority mail",
          link: "lowest-priority",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::lowestPriority();"
                }
              />
            </>
          ),
        },
        multiple: {
          title: "Mail::multiple",
          description:
            "The `multiple` feature allows you to add multiple recipient accounts",
          link: "multiple",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                "Mail::multiple(\n" +
                "\t'sleon@outlook.com',\n" +
                "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                ");"
              }
            />
          ),
        },
        "embedded-image": {
          title: "Mail::embeddedImage",
          description:
            "The `embedded Image` function allows you to embed images dynamically",
          link: "embedded-image",
          code: (
            <>
              <div className="mb-3">
                <p>Available parameters:</p>

                <ul>
                  <li>
                    path <Badge bg="secondary">REQUIRED</Badge>
                  </li>

                  <li>
                    cid <Badge bg="secondary">REQUIRED</Badge>
                  </li>

                  <li>
                    mime <Badge bg="secondary">REQUIRED</Badge>
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                    "Mail::embeddedImage('path/img.png', 'my-img', 'image/png');"
                  }
                />
              </div>
            </>
          ),
        },
        "reply-to": {
          title: "Mail::replyTo",
          description:
            "The `replyTo` function allows you to select an account to reply to, if the function is not called the default account is used",
          link: "reply-to",
          code: (
            <>
              <div className="mb-3">
                <p>Available parameters:</p>

                <ul>
                  <li>
                    reply_email <Badge bg="secondary">REQUIRED</Badge>
                  </li>

                  <li>
                    reply_name <Badge bg="secondary">OPTIONAL</Badge>
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                    "Mail::replyTo('sleon@outlook.com');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                    "Mail::replyTo('sleon@outlook.com', 'Sleon');"
                  }
                />
              </div>
            </>
          ),
        },
        "multiple-reply-to": {
          title: "Mail::multipleReplyTo",
          description:
            "The `multipleReplyTo` function allows you to select an account to reply to, if the function is not called the default account is used",
          link: "multiple-reply-to",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                "Mail::multipleReplyTo(\n" +
                "\t'sleon@outlook.com',\n" +
                "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                ");"
              }
            />
          ),
        },
        cc: {
          title: "Mail::cc",
          description:
            "The `cc` function allows you to add accounts to receive a copy of the mail",
          link: "cc",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::cc(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");"
                }
              />
            </>
          ),
        },
        bcc: {
          title: "Mail::bcc",
          description:
            "The `bcc` function allows you to add accounts to receive a copy of the mail without other users being able to see the users who received the copy",
          link: "bcc",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::bcc(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");"
                }
              />
            </>
          ),
        },
        attachment: {
          title: "Mail::attachment",
          description:
            "The `attachment` function allows you to dynamically attach files",
          link: "attachment",
          code: (
            <>
              <div className="mb-3">
                <p>Available parameters:</p>

                <ul>
                  <li>
                    path <Badge bg="secondary">REQUIRED</Badge>
                  </li>

                  <li>
                    file_name <Badge bg="secondary">OPTIONAL</Badge>
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                    "Mail::attachment('report.pdf');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                    "Mail::attachment('report.pdf', 'report-2023.pdf');"
                  }
                />
              </div>
            </>
          ),
        },
        subject: {
          title: "Mail::subject",
          description:
            "The `subject` function allows you to add the subject to the mail",
          link: "subject",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::subject('Ative account');"
                }
              />
            </>
          ),
        },
        body: {
          title: "Mail::body",
          description:
            "The `body` function allows you to add a body to the email, you can attach HTML code",
          link: "body",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::body('<h1>My body</h1>');"
                }
              />
            </>
          ),
        },
        "alt-body": {
          title: "Mail::altBody",
          description:
            "The `altBody` function allows you to add a body to the email in plain text",
          link: "alt-body",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::altBody('My alt body');"
                }
              />
            </>
          ),
        },
        header: {
          title: "Mail::header",
          description:
            "The `header` function allows you to add a header to the mail",
          link: "header",
          code: (
            <>
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::header('Content-Type', 'text/html');"
                }
              />
            </>
          ),
        },
        send: {
          title: "Mail::send",
          description: "The `send` function sends the email",
          link: "send",
          code: (
            <>
              <p>
                The email that sends email by{" "}
                <Badge bg="secondary">default</Badge> is the one selected in the
                default property, use the <Badge bg="secondary">account</Badge>{" "}
                function to use another account.
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::address('sleon@outlook.com')\n" +
                  "\t->subject('Active')\n" +
                  "\t->body('<h1>My body</h1>')\n" +
                  "\t->altBody('my alt body')\n" +
                  "\t->send();"
                }
              />
            </>
          ),
        },
      },
    },
  };
}
