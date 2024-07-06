import { Alert } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";
import SupportVersion from "../../../../pages/components/SupportVersion";
import { Fragment } from "react";
import Title from "../../../../pages/components/Title";
import Description from "../../../../pages/components/Description";
import LibraryTitle from "../../../../pages/components/LibraryTitle";

export default function v4_LA() {
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
                description={"Library to authenticate users in 2 steps."}
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

              <SupportVersion title="Lion-Authentication" version="8.3" />

              <CodeBlock
                language={"bash"}
                content={"composer require lion/authentication"}
              />
            </Fragment>
          ),
        },
      },
    },
    auth2fa: {
      name: "Auth2FA::class",
      type: "sub_modules",
      list: {
        init: {
          name: "init",
          code: (
            <Fragment>
              <LibraryTitle className="Auth2FA" methodName="init" />

              <Description
                description={
                  "The init method allows initializing the Auth2FA class."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Authentication\\Auth2FA;

Auth2FA::init();
                  `}
              />
            </Fragment>
          ),
        },
        qr: {
          name: "qr",
          code: (
            <Fragment>
              <LibraryTitle className="Auth2FA" methodName="qr" />

              <Description
                description={
                  "The method that returns an object with the qr property where its value is a base_64 of the generated qr code and the secret_key property where it takes the secret value to verify the code."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Authentication\\Auth2FA;

Auth2FA::init()
    ->qr('company_name', 'company_email');
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Authentication\\Auth2FA;

Auth2FA::init()
    ->qr('company_name', 'company_email', 200); // default size of 400
`}
              />
            </Fragment>
          ),
        },
        verify: {
          name: "verify",
          code: (
            <Fragment>
              <LibraryTitle className="Auth2FA" methodName="verify" />

              <Description
                description={
                  "The verify method verifies that the code obtained is valid."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

use Lion\\Authentication\\Auth2FA;

Auth2FA::init()
    ->verify('secret_key', 'secret_code');
`}
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
