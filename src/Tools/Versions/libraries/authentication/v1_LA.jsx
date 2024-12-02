import { Alert } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";
import SupportVersion from "../../../../pages/components/SupportVersion";
import { Fragment } from "react";
import Title from "../../../../pages/components/Title";

export default function v1_LA() {
  return {
    "getting-started": {
      name: "Getting started",
      type: "sub_modules",
      list: {
        "about-as": {
          name: "About us",
          code: (
            <>
              <div className="mb-3">
                <h3>About us</h3>

                <hr />
              </div>

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <p className="fs-6">Library to authenticate users in 2 steps.</p>
            </>
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

              <SupportVersion title="Lion-Authentication" version="8.1" />

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
            <>
              <div className="mb-3">
                <h3>
                  Auth2FA::<span className="text-lion-orange h3">init()</span>
                </h3>

                <hr />
              </div>

              <p>The init method allows initializing the Auth2FA class.</p>

              <CodeBlock
                language="php"
                content={`<?php

use LionAuthentication\\Auth2FA;

Auth2FA::init();
                  `}
              />
            </>
          ),
        },
        qr: {
          name: "qr",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Auth2FA::<span className="text-lion-orange h3">qr()</span>
                </h3>

                <hr />
              </div>

              <p>
                The method that returns an object with the qr property where its
                value is a base_64 of the generated qr code and the secret_key
                property where it takes the secret value to verify the code.
              </p>

              <CodeBlock
                language="php"
                content={`<?php

use LionAuthentication\\Auth2FA;

Auth2FA::init()
    ->qr('company_name', 'company_email');
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

use LionAuthentication\\Auth2FA;

Auth2FA::init()
    ->qr('company_name', 'company_email', 200); // default size of 400
`}
              />
            </>
          ),
        },
        verify: {
          name: "verify",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  Auth2FA::<span className="text-lion-orange h3">verify()</span>
                </h3>

                <hr />
              </div>

              <p>The verify method verifies that the code obtained is valid.</p>

              <CodeBlock
                language="php"
                content={`<?php

use LionAuthentication\\Auth2FA;

Auth2FA::init()
    ->verify('secret_key', 'secret_code');
`}
              />
            </>
          ),
        },
      },
    },
  };
}
