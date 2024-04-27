import { Alert } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";
import { Fragment } from "react";
import Title from "../../../../pages/components/Title";
import Description from "../../../../pages/components/Description";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Example from "../../../../pages/components/Example";

export default function v5_LM() {
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
                  "Library created to facilitate sending email based on different services."
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

              <CodeBlock
                language={"bash"}
                content={"composer require lion/mailer"}
              />
            </Fragment>
          ),
        },
      },
    },
    "mail-service": {
      name: "MailService::class",
      type: "sub_modules",
      list: {
        run: {
          name: "run",
          code: (
            <Fragment>
              <LibraryTitle className={"MailService"} methodName={"run"} />

              <Description
                description={
                  "The run function initializes the authentication credentials with and allows you to select different services."
                }
              />

              <Description
                description={
                  "The mailer class must be initialized through the run function and its respective parameters, debug 0 indicates that no type of information should appear on the screen when sending emails, you can add multiple email accounts and add multiple email accounts for each email account services."
                }
              />

              <Fragment>
                <p>The services currently available are:</p>

                <ul>
                  <li>phpmailer</li>
                  <li>symfony</li>
                </ul>
              </Fragment>

              <CodeBlock
                language={"php"}
                content={`<?php

/**
 * ------------------------------------------------------------------------------
 * Start mail service
 * ------------------------------------------------------------------------------
 * describe connections to establish connecting to multiple databases
 * ------------------------------------------------------------------------------
 */

return [
    'default' => 'account-name',
    'accounts' => [
        'account-name' => [
            'services' => 'symfony',
            'debug' => 0,
            'host' => 'stm.mail.com',
            'encryption' => 'tls',
            'port' => 465,
            'name' => 'account-name',
            'account' => 'sleon@dev.com',
            'password' => '...',
        ],
    ],
];
`}
              />
            </Fragment>
          ),
        },
      },
    },
    "mail-phpmailer": {
      name: "PHPMailer\\Mail::class",
      type: "sub_modules",
      list: {
        address: {
          name: "address",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"address"} />

              <Description
                description={
                  "The address function allows you to select the recipient mail."
                }
              />

              <Fragment>
                <p>Available parameters:</p>

                <ul>
                  <li>
                    address_email <strong>REQUIRED</strong>
                  </li>

                  <li>
                    address_name <strong>OPTIONAL</strong>
                  </li>
                </ul>
              </Fragment>

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::address('sleon@outlook.com');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::address('sleon@outlook.com', 'Sleon');\n"
                }
              />
            </Fragment>
          ),
        },
        account: {
          name: "account",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"account"} />

              <Description
                description={
                  "The account function allows you to select another account for sending email."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::account('support');\n"
                }
              />
            </Fragment>
          ),
        },
        attachment: {
          name: "attachment",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"attachment"} />

              <Description
                description={
                  "The attachment function allows you to dynamically attach files."
                }
              />

              <Fragment>
                <p>Available parameters:</p>

                <ul>
                  <li>
                    path <strong>REQUIRED</strong>
                  </li>

                  <li>
                    file_name <strong>OPTIONAL</strong>
                  </li>
                </ul>
              </Fragment>

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::attachment('report.pdf');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::attachment('report.pdf', 'report-2023.pdf');\n"
                }
              />
            </Fragment>
          ),
        },
        "alt-body": {
          name: "altBody",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"altBody"} />

              <Description
                description={
                  "The altBody function allows you to add a body to the email in plain text."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::altBody('My alt body');\n"
                }
              />
            </Fragment>
          ),
        },
        cc: {
          name: "cc",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"cc"} />

              <Description
                description={
                  "The cc function allows you to add accounts to receive a copy of the mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::cc(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");\n"
                }
              />
            </Fragment>
          ),
        },
        bcc: {
          name: "bcc",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"bcc"} />

              <Description
                description={
                  "The bcc function allows you to add accounts to receive a copy of the mail without other users being able to see the users who received the copy."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::bcc(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");\n"
                }
              />
            </Fragment>
          ),
        },
        body: {
          name: "body",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"body"} />

              <Description
                description={
                  "The body function allows you to add a body to the email, you can attach HTML code."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::body('<h1>My body</h1>');"
                }
              />
            </Fragment>
          ),
        },
        "embedded-image": {
          name: "embeddedImage",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"embeddedImage"} />

              <Description
                description={
                  "The embeddedImage function allows you to embed images dynamically."
                }
              />

              <Fragment>
                <p>Available parameters:</p>

                <ul>
                  <li>
                    path <strong>REQUIRED</strong>
                  </li>

                  <li>
                    cid <strong>REQUIRED</strong>
                  </li>

                  <li>
                    address_name <strong>OPTIONAL</strong>
                  </li>
                </ul>
              </Fragment>

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::embeddedImage('path/img.png', 'my-img');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::embeddedImage('path/img.png', 'my-img', 'img-example');\n"
                }
              />
            </Fragment>
          ),
        },
        header: {
          name: "header",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"header"} />

              <Description
                description={
                  "The header function allows you to add a header to the mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::header('Content-Type', 'text/html');\n"
                }
              />
            </Fragment>
          ),
        },
        "high-priority": {
          name: "highPriority",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"highPriority"} />

              <Description
                description={
                  "The highPriority function allows you to select the priority of high priority mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::highPriority();\n"
                }
              />
            </Fragment>
          ),
        },
        "low-priority": {
          name: "lowPriority",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"lowPriority"} />

              <Description
                description={
                  "The lowPriority function allows you to select the priority of low priority mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::lowPriority();\n"
                }
              />
            </Fragment>
          ),
        },
        multiple: {
          name: "multiple",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"multiple"} />

              <Description
                description={
                  "The multiple feature allows you to add multiple recipient accounts."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::multiple(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");\n"
                }
              />
            </Fragment>
          ),
        },
        "regular-priority": {
          name: "regularPriority",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"regularPriority"} />

              <Description
                description={
                  "The regularPriority function allows you to select the priority of regular priority mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::regularPriority();\n"
                }
              />
            </Fragment>
          ),
        },
        "reply-to": {
          name: "replyTo",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"replyTo"} />

              <Description
                description={
                  "The replyTo function allows you to select an account to reply to, if the function is not called the default account is used"
                }
              />

              <Fragment>
                <p>Available parameters:</p>

                <ul>
                  <li>
                    reply_email <strong>REQUIRED</strong>
                  </li>

                  <li>
                    reply_name <strong>OPTIONAL</strong>
                  </li>
                </ul>
              </Fragment>

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::replyTo('sleon@outlook.com');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::replyTo('sleon@outlook.com', 'Sleon');\n"
                }
              />
            </Fragment>
          ),
        },
        send: {
          name: "send",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"send"} />

              <Description description={"The send function sends the email"} />

              <Description
                description={
                  "The email that sends email by default is the one selected in the default property, use the account function to use another account."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::address('sleon@outlook.com')\n" +
                  "\t->subject('Active')\n" +
                  "\t->body('<h1>My body</h1>')\n" +
                  "\t->altBody('my alt body')\n" +
                  "\t->send();\n"
                }
              />
            </Fragment>
          ),
        },
        subject: {
          name: "subject",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"subject"} />

              <Description
                description={
                  "The subject function allows you to add the subject to the mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::subject('Ative account');\n"
                }
              />
            </Fragment>
          ),
        },
      },
    },
    "mail-symfony": {
      name: "SymfonyMailer\\Mail::class",
      type: "sub_modules",
      list: {
        address: {
          name: "address",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"address"} />

              <Description
                description={
                  "The address function allows you to select the recipient mail."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::address('sleon@outlook.com');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::address('sleon@outlook.com', 'Sleon');\n"
                }
              />
            </Fragment>
          ),
        },
        account: {
          name: "account",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"account"} />

              <Description
                description={
                  "The account function allows you to select another account for sending email."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\PHPMailer\\Mail;\n\n" +
                  "Mail::account('support');\n"
                }
              />
            </Fragment>
          ),
        },
        "alt-body": {
          name: "altBody",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"altBody"} />

              <Description
                description={
                  "The altBody function allows you to add a body to the email in plain text."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::altBody('My alt body');\n"
                }
              />
            </Fragment>
          ),
        },
        attachment: {
          name: "attachment",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"attachment"} />

              <Description
                description={
                  "The attachment function allows you to dynamically attach files."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::attachment('report.pdf');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::attachment('report.pdf', 'report-2023.pdf');\n"
                }
              />
            </Fragment>
          ),
        },
        body: {
          name: "body",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"body"} />

              <Description
                description={
                  "The body function allows you to add a body to the email, you can attach HTML code."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::body('<h1>My body</h1>');\n"
                }
              />
            </Fragment>
          ),
        },
        bcc: {
          name: "bcc",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"bcc"} />

              <Description
                description={
                  "The bcc function allows you to add accounts to receive a copy of the mail without other users being able to see the users who received the copy."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::bcc(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");\n"
                }
              />
            </Fragment>
          ),
        },
        cc: {
          name: "cc",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"cc"} />

              <Description
                description={
                  "The cc function allows you to add accounts to receive a copy of the mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::cc(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");\n"
                }
              />
            </Fragment>
          ),
        },
        "embedded-image": {
          name: "embeddedImage",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"embeddedImage"} />

              <Description
                description={
                  "The embeddedImage function allows you to embed images dynamically."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::embeddedImage('path/img.png', 'my-img', 'image/png');\n"
                }
              />
            </Fragment>
          ),
        },
        header: {
          name: "header",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"header"} />

              <Description
                description={
                  "The header function allows you to add a header to the mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::header('Content-Type', 'text/html');\n"
                }
              />
            </Fragment>
          ),
        },
        "high-priority": {
          name: "highPriority",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"highPriority"} />

              <Description
                description={
                  "The highPriority function allows you to select the priority of high priority mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::highPriority();\n"
                }
              />
            </Fragment>
          ),
        },
        "highest-priority": {
          name: "highestPriority",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"highestPriority"} />

              <Description
                description={
                  "The highestPriority function allows you to select the priority of highest priority mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::highestPriority();\n"
                }
              />
            </Fragment>
          ),
        },
        "low-priority": {
          name: "lowPriority",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"lowPriority"} />

              <Description
                description={
                  "The lowPriority function allows you to select the priority of low priority mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::lowPriority();\n"
                }
              />
            </Fragment>
          ),
        },
        "lowest-priority": {
          name: "lowestPriority",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"lowestPriority"} />

              <Description
                description={
                  "The lowestPriority function allows you to select the priority of lowest priority mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::lowestPriority();\n"
                }
              />
            </Fragment>
          ),
        },
        multiple: {
          name: "multiple",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"multiple"} />

              <Description
                description={
                  "The multiple feature allows you to add multiple recipient accounts."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::multiple(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");\n"
                }
              />
            </Fragment>
          ),
        },
        "multiple-reply-to": {
          name: "multipleReplyTo",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"multipleReplyTo"} />

              <Description
                description={
                  "The multipleReplyTo function allows you to select an account to reply to, if the function is not called the default account is used."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::multipleReplyTo(\n" +
                  "\t'sleon@outlook.com',\n" +
                  "\t['sleon-support@outlook.com', 'Sleon SUPP']\n" +
                  ");\n"
                }
              />
            </Fragment>
          ),
        },
        "normal-priority": {
          name: "normalPriority",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"normalPriority"} />

              <Description
                description={
                  "The normalPriority function allows you to select the priority of normal priority mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::normalPriority();\n"
                }
              />
            </Fragment>
          ),
        },
        "reply-to": {
          name: "replyTo",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"replyTo"} />

              <Description
                description={
                  "The replyTo function allows you to select an account to reply to, if the function is not called the default account is used."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::replyTo('sleon@outlook.com');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::replyTo('sleon@outlook.com', 'Sleon');\n"
                }
              />
            </Fragment>
          ),
        },
        send: {
          name: "send",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"send"} />

              <Description
                description={
                  "The email that sends email by default is the one selected in the default property, use the account function to use another account."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::address('sleon@outlook.com')\n" +
                  "\t->subject('Active')\n" +
                  "\t->body('<h1>My body</h1>')\n" +
                  "\t->altBody('my alt body')\n" +
                  "\t->send();\n"
                }
              />
            </Fragment>
          ),
        },
        subject: {
          name: "subject",
          code: (
            <Fragment>
              <LibraryTitle className={"Mail"} methodName={"subject"} />

              <Description
                description={
                  "The subject function allows you to add the subject to the mail."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionMailer\\Services\\Symfony\\Mail;\n\n" +
                  "Mail::subject('Ative account');\n"
                }
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
