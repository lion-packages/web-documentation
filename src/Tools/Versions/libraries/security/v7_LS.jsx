import { Alert } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";
import { Fragment } from "react";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Description from "../../../../pages/components/Description";
import Title from "../../../../pages/components/Title";
import ExampleTitle from "../../../../pages/components/ExampleTitle";

export default function v7_LS() {
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
        encode: {
          name: "encode",
          code: (
            <Fragment>
              <LibraryTitle className="AES" methodName="encode" />

              <Description
                description={
                  "It allows you to encrypt the information using their respective keys."
                }
              />

              <Description
                description={
                  <Fragment>
                    First create an <strong>".env"</strong> file in the root of
                    your project to create environment variables, the functions
                    of the AES class interact with 3 environment variables which
                    environment variable (AES_METHOD) is static and must be
                    declared before.
                  </Fragment>
                }
              />

              <CodeBlock language="bash" content={'AES_METHOD="aes-256-cbc"'} />

              <Description
                description={
                  "AES interacts with environment variable ($_ENV) to encrypt data with AES, you must send an array and parse it, declare your environment variables and send the names by parameters."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

$data = [
    "email" => "myemail2022@example.com"
    "password" => "mypass1234"
];
`}
              />

              <Description
                description={
                  "The created array must be sent to the encryption function to encrypt the data; in addition, specify the .env properties that the function will use for encryption."
                }
              />

              <Alert variant={"info"}>
                <strong>Note:</strong> that the <strong>AES_KEY</strong> and{" "}
                <strong>AES_IV</strong> properties are extracted directly from
                the <strong>.env</strong> file.
              </Alert>

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\AES;

$aesEnc = AES::encode($_ENV['AES_KEY'], $_ENV['AES_IV'], $data);

var_dump($aesEnc);
`}
              />
            </Fragment>
          ),
        },
        decode: {
          name: "decode",
          code: (
            <Fragment>
              <LibraryTitle className="AES" methodName="decode" />

              <Description
                description={"Allows deciphering information using its keys."}
              />

              <Description
                description={
                  "The created array must be sent to the decryption function to decrypt the data; in addition, specify the .env properties that the function will use for encryption."
                }
              />

              <Alert variant={"info"}>
                <strong>Note:</strong> that the <strong>AES_KEY</strong> and{" "}
                <strong>AES_IV</strong> properties are extracted directly from
                the <strong>.env</strong> file.
              </Alert>

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\AES;

$aesDec = AES::decode($_ENV['AES_KEY'], $_ENV['AES_IV'], (array) $aesEnc);

var_dump($aesDec);
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
        encode: {
          name: "encode",
          code: (
            <Fragment>
              <LibraryTitle className="JWT" methodName="encode" />

              <Description
                description={
                  "The encode function generates a JWT with the information obtained."
                }
              />

              <p className="fs-6">
                First create an <strong>.env</strong> file in the root of your
                project to create environment variables, the function works with
                2 parameters, The first parameter is an array with the data to
                be added to the JWT, The second parameter is optional and it is
                the lifetime of the JWT.
              </p>

              <CodeBlock
                language={"bash"}
                content={
                  'JWT_DEFAULT_MD="" # Algorithm for encryption\n' +
                  'JWT_EXP="" # Expiry time'
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\JWT;

$jwtEnc = JWT::encode(['idUsers' => 1, 'idRoles' => 3]);

var_dump($jwtEnc);
`}
              />

              <Alert variant="warning">
                <strong>Note:</strong> that the default time that the JWT has is
                24 hours.
              </Alert>

              <p className="fs-6">
                You can change the time by sending an integer as the second
                parameter With this, it is established that the JWT will have a
                duration of 300 seconds, which is equivalent to 5 minutes.
              </p>

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\JWT;

$jwtEnc = JWT::encode(['idUsers' => 1, 'idRoles' => 3], 300);

var_dump($jwtEnc);
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
                description={
                  "The decode function returns the token to its original fetched data state."
                }
              />

              <Description
                description={
                  "To decrypt the JWT, the generated JWT string must be sent."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\JWT;

$jwtDec = JWT::decode($jwtEnc);

var_dump($jwtDec);
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
                  "The get function gets the token obtained through an http request."
                }
              />
              <Description
                description={
                  "In order to retrieve the JWT, It must be sent through a header. When sending your HTTP request, Ihe JWT is not attached to the data, So we must obtain the JWT from the headers sent."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\JWT;

$jwtDec = JWT::decode(JWT::get());

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
        "create-keys": {
          name: "createKeys",
          code: (
            <Fragment>
              <LibraryTitle className="RSA" methodName="createKeys" />

              <Description
                description={
                  "The createKeys function allows you to generate public and private keys."
                }
              />

              <Description
                description={
                  "First create an .env file in the root of your project to create environment variables, the RSA class functions interact with 4 environment variables."
                }
              />

              <CodeBlock
                language={"bash"}
                content={`RSA_PATH="" # openssl.cnf file location
RSA_URL_PATH="" # Location of the folder where the keys should be generated
RSA_PRIVATE_KEY_BITS="" # Amount of BITS to generate the keys (2048)
RSA_DEFAULT_MD="" # Type of algorithm with which the keys must be generated (sha256)`}
              />

              <Fragment>
                <ExampleTitle number={1} />

                <p className="fs-6">
                  In this first option we can create the keys automatically in
                  an internally established route{" "}
                  <strong>storage/secret-key/</strong>, which when looking at
                  your directories will have new folders and files in the
                  respective <strong>storage/secret-key/</strong> path.
                </p>

                <CodeBlock
                  language="php"
                  content={`<?php

use LionSecurity\\RSA;

RSA::createKeys();

return [
	'status' => 'success',
	'message' => 'Keys created successfully'
];
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <p className="fs-6">
                  In this second option we can specify which folders we are
                  going to create, which will be where the public and private
                  keys will be stored.
                </p>

                <CodeBlock
                  language="php"
                  content={`<?php

use LionSecurity\\RSA;

RSA::createKeys('resources/my_secret_folder/');

return [
	'status' => 'success',
	'message' => 'Keys created successfully'
];
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        encode: {
          name: "encode",
          code: (
            <Fragment>
              <LibraryTitle className="RSA" methodName="encode" />

              <Description
                description={
                  "The encode function allows you to encrypt the information using RSA encryption."
                }
              />

              <Description
                description={
                  "To encrypt data with rsa, you must specify an array."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

$data = [
	'email' => 'myemail2022@example.com', 
	'password' => 'mypass1234',
];
`}
              />

              <Description
                description={
                  "The created array must be sent to the function to encrypt the data."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\RSA;

$data = [
	'email' => 'myemail2022@example.com', 
	'password' => 'mypass1234',
];

$rsaEnc = RSA::encode($data);

var_dump($rsaEnc);
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
                description={
                  "The decode function allows decrypting the information through RSA decryption."
                }
              />

              <Description
                description={
                  "The created array must be sent to the decryption function to get the data."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\RSA;

$rsaDec = RSA::decode((array) $rsaEnc);

var_dump($rsaDec);
`}
              />
            </Fragment>
          ),
        },
        "get-path": {
          name: "getPath",
          code: (
            <Fragment>
              <LibraryTitle className="RSA" methodName="getPath" />

              <Description
                description={
                  "The getPath function allows you to get the current path of where the RSA keys are stored."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\RSA;

var_dump(RSA::getPath());
`}
              />
            </Fragment>
          ),
        },
        "set-path": {
          name: "setPath",
          code: (
            <Fragment>
              <LibraryTitle className="RSA" methodName="setPath" />

              <Description
                description={
                  "The setPath function allows to modify the current path of where the RSA keys are stored."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

use LionSecurity\\RSA;

RSA::setPath('my_path');
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

use LionSecurity\\Validation;

$password = Validation::sha256('root1234');

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

use LionSecurity\\Validation;

$password = Validation::passwordHash('root1234');

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

use LionSecurity\\Validation;
use Valitron\\Validator;

$response = Validation::validate($_POST, function(Validator $validator) {
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
