import { Alert } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";
import { Fragment } from "react";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Description from "../../../../pages/components/Description";
import Title from "../../../../pages/components/Title";
import ExampleTitle from "../../../../pages/components/ExampleTitle";

export default function v8_LS() {
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
                  "Library created with the function of implementing AES and RSA Security functions for PHP, it also includes functions to create JWT."
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
                content={"composer require lion/security"}
              />
            </Fragment>
          ),
        },
      },
    },
    aes: {
      name: "AES::class",
      type: "sub_modules",
      list: {
        config: {
          name: "config",
          code: (
            <Fragment>
              <LibraryTitle className="AES" methodName="config" />

              <Description
                description={"Define settings for AES encryption."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\AES;

(new AES())
    ->config([
        'key' => 'aes key...',
        'iv' => 'aes iv...',
        'aes_method' => 'aes-256-cbc',
    ]);
`}
              />
            </Fragment>
          ),
        },
        decode: {
          name: "decode",
          code: (
            <Fragment>
              <LibraryTitle className="AES" methodName="encode" />

              <Description
                description={"Decodes the data with the defined settings."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\AES;

$aesDec = (new AES())
    ->config([
        'key' => 'aes key...',
        'iv' => 'aes iv...',
        'aes_method' => 'aes-256-cbc',
    ])
    ->decode($aesEnc)
    ->get();

var_dump($aesDec);
`}
              />
            </Fragment>
          ),
        },
        encode: {
          name: "encode",
          code: (
            <Fragment>
              <LibraryTitle className="AES" methodName="encode" />

              <Description
                description={"Encrypt data with defined settings."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\AES;

$aesEnc = (new AES())
    ->config([
        'key' => 'aes key...',
        'iv' => 'aes iv...',
        'aes_method' => 'aes-256-cbc',
    ])
    ->encode('email', 'root@dev.com')
    ->encode('password', 'mypass1234')
    ->get();

var_dump($aesEnc);
`}
              />
            </Fragment>
          ),
        },
        "to-object": {
          name: "toObject",
          code: (
            <Fragment>
              <LibraryTitle className="AES" methodName="toObject" />

              <Description
                description={"Converts the list with data to an object"}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\AES;

$aesEnc = (new AES())
    ->config([
        'key' => 'aes key...',
        'iv' => 'aes iv...',
        'aes_method' => 'aes-256-cbc',
    ])
    ->encode('email', 'root@dev.com')
    ->encode('password', 'mypass1234')
    ->toObject()
    ->get();

var_dump($aesEnc);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    jwt: {
      name: "JWT::class",
      type: "sub_modules",
      list: {
        config: {
          name: "config",
          code: (
            <Fragment>
              <LibraryTitle className="JWT" methodName="config" />

              <Description description={"Settings to generate JWT token."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\JWT;

(new JWT())
    ->config([
        'jwtServerUrl' => 'http://localhost:8000',
        'jwtServerUrlAud' => 'http://localhost:5173',
        'jwtExp' => 3600,
        'jwtDefaultMD' => 'RS256',
    ]);
`}
              />
            </Fragment>
          ),
        },
        decode: {
          name: "decode",
          code: (
            <Fragment>
              <LibraryTitle className="JWT" methodName="decode" />

              <Description
                description={"Decodes the data with the defined settings."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\JWT;

$data = (new JWT())
    ->config([
        'jwtServerUrl' => 'http://localhost:8000',
        'jwtServerUrlAud' => 'http://localhost:5173',
        'jwtExp' => 3600,
        'jwtDefaultMD' => 'RS256',
        'publicKey' => '...'
    ])
    ->decode($token)
    ->get();

var_dump($data);
`}
              />
            </Fragment>
          ),
        },
        encode: {
          name: "encode",
          code: (
            <Fragment>
              <LibraryTitle className="JWT" methodName="encode" />

              <Description
                description={"Encrypt data with defined settings."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\JWT;

$token = (new JWT())
    ->config([
        'jwtServerUrl' => 'http://localhost:8000',
        'jwtServerUrlAud' => 'http://localhost:5173',
        'jwtExp' => 3600,
        'jwtDefaultMD' => 'RS256',
        'privateKey' => '...'
    ])
    ->encode([
        'session' => true,
    ])
    ->get();

var_dump($token);
`}
              />
            </Fragment>
          ),
        },
        get: {
          name: "get",
          code: (
            <Fragment>
              <LibraryTitle className="JWT" methodName="get" />

              <Description
                description={
                  "Returns the current array/object with the encrypted/decrypted data."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\JWT;

$data = (new JWT())
    ->config([
        'jwtServerUrl' => 'http://localhost:8000',
        'jwtServerUrlAud' => 'http://localhost:5173',
        'jwtExp' => 3600,
        'jwtDefaultMD' => 'RS256',
        'privateKey' => // ...
    ])
    ->decode($token)
    ->get();

var_dump($data);
`}
              />
            </Fragment>
          ),
        },
        "get-jwt": {
          name: "getJWT",
          code: (
            <Fragment>
              <LibraryTitle className="JWT" methodName="getJWT" />

              <Description
                description={"Gets the Authorization header token."}
              />

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\JWT;

$jwt = new JWT();

$jwtDec = $jwt
    ->config([
        'jwtServerUrl' => 'http://localhost:8000',
        'jwtServerUrlAud' => 'http://localhost:5173',
        'jwtExp' => 3600,
        'jwtDefaultMD' => 'RS256',
        'publicKey' => '...'
    ])
    ->decode($jwt->getJWT())
    ->get();

var_dump($jwtDec);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    rsa: {
      name: "RSA::class",
      type: "sub_modules",
      list: {
        config: {
          name: "config",
          code: (
            <Fragment>
              <LibraryTitle className="RSA" methodName="config" />

              <Description description={"Define settings for RSA encryption"} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\RSA;


(new RSA())
    ->config([
        'rsaPath' => 'openssl.cnf',
        'rsaUrlPath' => 'keys',
        'rsaPrivateKeyBits' => 2048,
        'rsaDefaultMD' => 'sha256',
    ]);
`}
              />
            </Fragment>
          ),
        },
        create: {
          name: "create",
          code: (
            <Fragment>
              <LibraryTitle className="RSA" methodName="create" />

              <Description
                description={"Create public and private key in a route."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\RSA;


(new RSA())
    ->config([
        'rsaPath' => 'openssl.cnf',
        'rsaUrlPath' => 'keys',
        'rsaPrivateKeyBits' => 2048,
        'rsaDefaultMD' => 'sha256',
    ])
    ->create();

`}
              />
            </Fragment>
          ),
        },
        decode: {
          name: "decode",
          code: (
            <Fragment>
              <LibraryTitle className="RSA" methodName="decode" />

              <Description
                description={"Decodes the data with the defined settings."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\RSA;

$rsaDec = (new RSA())
    ->config([
        'rsaPath' => 'openssl.cnf',
        'rsaUrlPath' => 'keys',
        'rsaPrivateKeyBits' => 2048,
        'rsaDefaultMD' => 'sha256',
    ])
    ->create()
    ->decode($rsaEnc)
    ->get();

var_dump($rsaDec);
`}
              />
            </Fragment>
          ),
        },
        encode: {
          name: "encode",
          code: (
            <Fragment>
              <LibraryTitle className="RSA" methodName="encode" />

              <Description
                description={"Encrypt data with defined settings."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\RSA;

$rsaEnc = (new RSA())
    ->config([
        'rsaPath' => 'openssl.cnf',
        'rsaUrlPath' => 'keys',
        'rsaPrivateKeyBits' => 2048,
        'rsaDefaultMD' => 'sha256',
    ])
    ->create()
    ->encode('key', 'value')
    ->get();

var_dump($rsaEnc);
`}
              />
            </Fragment>
          ),
        },
        get: {
          name: "get",
          code: (
            <Fragment>
              <LibraryTitle className="RSA" methodName="get" />

              <Description
                description={
                  "Returns the current array/object with the encrypted/decrypted data."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\RSA;

$rsaEnc = (new RSA())
    ->config([
        'rsaPath' => 'openssl.cnf',
        'rsaUrlPath' => 'keys',
        'rsaPrivateKeyBits' => 2048,
        'rsaDefaultMD' => 'sha256',
    ])
    ->create()
    ->encode('key', 'value')
    ->get();
`}
              />
            </Fragment>
          ),
        },
        "to-object": {
          name: "toObject",
          code: (
            <Fragment>
              <LibraryTitle className="RSA" methodName="toObject" />

              <Description
                description={"Converts the list with data to an object."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\RSA;

$rsaEnc = (new RSA())
    ->config([
        'rsaPath' => 'openssl.cnf',
        'rsaUrlPath' => 'keys',
        'rsaPrivateKeyBits' => 2048,
        'rsaDefaultMD' => 'sha256',
    ])
    ->create()
    ->encode('key', 'value')
    ->toObject()
    ->get();
`}
              />
            </Fragment>
          ),
        },
      },
    },
    validation: {
      name: "Validation::class",
      type: "sub_modules",
      list: {
        sha256: {
          name: "sha256",
          code: (
            <Fragment>
              <LibraryTitle className="Validation" methodName="sha256" />

              <Description
                description={
                  "Generates a hash value of the selected hash algorithm (256)."
                }
              />

              <Description
                description={
                  <Fragment>
                    This function receives as a parameter an object of type
                    stdClass, which we must fill an array with all the data that
                    we want to encrypt with sha256 and parse it into an object.
                    More information at{" "}
                    <a
                      href="https://www.php.net/manual/es/function.hash"
                      target={"_blank"}
                    >
                      php.net
                    </a>
                    .
                  </Fragment>
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\Validation;

$password = (new Validation())->sha256('root1234');

var_dump($password);
`}
              />
            </Fragment>
          ),
        },
        "password-hash": {
          name: "passwordHash",
          code: (
            <Fragment>
              <LibraryTitle className="Validation" methodName="passwordHash" />

              <Description
                description={
                  "Creates a new password hash using a strong one-way hash algorithm."
                }
              />

              <Description
                description={
                  <Fragment>
                    This function works with 2 parameters, The first parameter
                    is a string which is going to be encrypted, The second
                    parameter is optional and it is an array with the
                    configuration attributes. More information at{" "}
                    <a
                      href="https://www.php.net/manual/es/function.password-hash.php"
                      target={"_blank"}
                    >
                      php.net
                    </a>
                  </Fragment>
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\Validation;

$password = (new Validation())->passwordHash('root1234');

var_dump($password);
`}
              />
            </Fragment>
          ),
        },
        validate: {
          name: "validate",
          code: (
            <Fragment>
              <LibraryTitle className="Validation" methodName="validate" />

              <Description
                description={
                  "The validate function validates incoming data from an http request using vlucas/valitron functions."
                }
              />

              <Description
                description={
                  <Fragment>
                    This function interacts with{" "}
                    <a
                      href="https://github.com/vlucas/valitron"
                      target={"_blank"}
                    >
                      Valitron
                    </a>
                    , The first parameter is an array with all the properties
                    which we are going to verify if they meet the established
                    requirements, The second parameter is an array the which
                    contains all the rules which specify all the parameters to
                    check More information at{" "}
                    <a
                      href="https://github.com/vlucas/valitron#built-in-validation-rules"
                      target={"_blank"}
                    >
                      VALITRON
                    </a>
                  </Fragment>
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

use LionSecurity\\Validation;
use Valitron\\Validator;

$response = (new Validation())->validate($_POST, function(Validator $validator): void {
    $validator
        ->rule('required', 'users_email')
        ->message('custom message...');
});
`}
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
