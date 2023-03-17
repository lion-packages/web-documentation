import { Alert, Badge } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";

export default function v6_11_0_LS() {
  return {
    aes: {
      title: "LionSecurity\\AES",
      description:
        "The AES class allows us to symmetrically encrypt and decrypt information using a block encryption scheme.",
      url: "/libraries/lion/security/item_version/aes/encode",
      methods: {
        encode: {
          title: "AES::encode",
          description:
            "It allows you to encrypt the information using their respective keys",
          link: "encode",
          code: (
            <div className="mb-3">
              <p>
                To encrypt data with aes, an array must be specified, you must
                send an array and parse it.
              </p>

              <CodeBlock
                language="php"
                content={
                  "$data = [\n" +
                  '\t"email" => "myemail2022@example.com"\n' +
                  '\t"password" => "mypass1234"\n];'
                }
              />

              <p>
                The created array must be sent to the encryption function to
                encrypt the data; in addition, specify the .env properties that
                the function will use for encryption.
              </p>
              <Alert variant={"warning"}>
                Note: that the <Badge bg="warning">AES_KEY</Badge> and{" "}
                <Badge bg="warning">AES_IV</Badge> properties are extracted
                directly from the <Badge bg="warning">.env</Badge> file.
              </Alert>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\AES;\n\n" +
                  "$aesEnc = AES::encode($data, 'AES_KEY', 'AES_IV');\n" +
                  "var_dump($aesEnc);"
                }
              />
            </div>
          ),
        },
        decode: {
          title: "AES::decode",
          description: "Allows deciphering information using its keys",
          link: "decode",
          code: (
            <div className="mb-3">
              <p>
                The created array must be sent to the decryption function to
                decrypt the data; in addition, specify the .env properties that
                the function will use for encryption.
              </p>
              <Alert variant={"warning"}>
                Note: that the <Badge bg="warning">AES_KEY</Badge> and{" "}
                <Badge bg="warning">AES_IV</Badge> properties are extracted
                directly from the <Badge bg="warning">.env</Badge> file.
              </Alert>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\AES;\n\n" +
                  "$aesDec = AES::decode($aesEnc, 'AES_KEY', 'AES_IV');\n" +
                  "var_dump($aesDec);"
                }
              />
            </div>
          ),
        },
      },
    },
    rsa: {
      title: "LionSecurity\\RSA",
      description:
        "The RSA class allows us to asymmetrically encrypt and decrypt information by generating public and private keys.",
      url: "/libraries/lion/security/item_version/rsa/create-keys",
      methods: {
        "create-keys": {
          title: "RSA::createKeys",
          description:
            "The `createKeys` function allows you to generate public and private keys",
          link: "create-keys",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1.</h5>

                <p>
                  In this first option we can create the keys automatically in
                  an internally established route{" "}
                  <Badge bg={"secondary"}>'storage/secret-key/'</Badge>, which
                  when looking at your directories will have new folders and
                  files in the respective{" "}
                  <Badge bg={"secondary"}>'storage/secret-key/'</Badge> path.
                </p>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "Manage::folder();\n" +
                    "RSA::createKeys();\n\n" +
                    "return [\n\t'status' => 'success',\n\t'message' => 'Keys created successfully'\n];"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <p>
                  In this second option we can specify which folders we are
                  going to create, which will be where the public and private
                  keys will be stored.
                </p>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "$path = 'resources/my_secret_folder/';\n" +
                    "Manage::folder($path);\n" +
                    "RSA::createKeys($path);\n\n" +
                    "return [\n\t'status' => 'success',\n\t'message' => 'Keys created successfully'\n];"
                  }
                />
              </div>
            </>
          ),
        },
        encode: {
          title: "RSA::encode",
          description:
            "The `encode` function allows you to encrypt the information using RSA encryption",
          link: "encode",
          code: (
            <div className="mb-3">
              <p>To encrypt data with rsa, you must specify an array.</p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "$data = [\n" +
                  "\t'email' => 'myemail2022@example.com', \n" +
                  "\t'password' => 'mypass1234'\n];"
                }
              />

              <p>
                The created array must be sent to the function to encrypt the
                data.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\RSA;\n\n" +
                  "$rsaEnc = RSA::encode($data);\n" +
                  "var_dump($rsaEnc);"
                }
              />
            </div>
          ),
        },
        decode: {
          title: "RSA::decode",
          description:
            "The `decode` function allows decrypting the information through RSA decryption",
          link: "decode",
          code: (
            <div className="mb-3">
              <p>
                The created array must be sent to the decryption function to get
                the data.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\RSA;\n\n" +
                  "$rsaDec = RSA::decode($rsaEnc);\n" +
                  "var_dump($rsaDec);"
                }
              />
            </div>
          ),
        },
      },
    },
    jwt: {
      title: "LionSecurity\\JWT",
      description:
        "The JWT class allows us to encrypt and decrypt information generating JWT",
      url: "/libraries/lion/security/item_version/jwt/encode",
      methods: {
        encode: {
          title: "JWT::encode",
          description:
            "The `encode` function generates a JWT with the information obtained",
          link: "encode",
          code: (
            <div className="mb-3">
              <p>
                The function works with 2 parameters, The first parameter is an
                array with the data to be added to the JWT, The second parameter
                is optional and it is the lifetime of the JWT.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\JWT;\n\n" +
                  "$data = ['idUsers' => 1, 'idRoles' => 3];\n" +
                  "$jwtEnc = JWT::encode($data);\n" +
                  "var_dump($jwtEnc);"
                }
              />

              <Alert variant="warning">
                Note: that the default time that the JWT has is{" "}
                <strong>24 hours</strong>.
              </Alert>

              <p>
                You can change the time by sending an integer as the second
                parameter With this, it is established that the JWT will have a
                duration of 300 seconds, which is equivalent to 5 minutes.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\JWT;\n\n" +
                  "$data = ['idUsers' => 1, 'idRoles' => 3];\n" +
                  "$jwtEnc = JWT::encode($data, 300);\n" +
                  "var_dump($jwtEnc);"
                }
              />
            </div>
          ),
        },
        decode: {
          title: "JWT::decode",
          description:
            "The `decode` function returns the token to its original fetched data state",
          link: "decode",
          code: (
            <div className="mb-3">
              <p>To decrypt the JWT, the generated JWT string must be sent.</p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\JWT;\n\n" +
                  "$jwtDec = JWT::decode($jwtEnc);\n" +
                  "var_dump($jwtDec);"
                }
              />
            </div>
          ),
        },
        get: {
          title: "JWT::get",
          description:
            "The `get` function gets the token obtained through an http request",
          link: "get",
          code: (
            <div className="mb-3">
              <p>
                In order to retrieve the JWT, It must be sent through a header.
                When sending your HTTP request, Ihe JWT is not attached to the
                data, So we must obtain the JWT from the headers sent.
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\JWT;\n\n" +
                  "$jwtDec = JWT::decode(JWT::get());\n" +
                  "var_dump($jwtDec);"
                }
              />
            </div>
          ),
        },
      },
    },
    validation: {
      title: "LionSecurity\\Validation",
      description:
        "The Validation class allows us to validate system information",
      url: "/libraries/lion/security/item_version/validation/sha256",
      methods: {
        sha256: {
          title: "Validation::sha256",
          description:
            "Generates a hash value of the selected hash algorithm (256",
          link: "sha256",
          code: (
            <div className="mb-3">
              <p>
                This function receives as a parameter an object of type
                stdClass, which we must fill an array with all the data that we
                want to encrypt with sha256 and parse it into an object. More
                information at{" "}
                <a
                  href="https://www.php.net/manual/es/function.hash"
                  target={"_blank"}
                >
                  php.net
                </a>
                .
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\Validation;\n\n" +
                  "$password = Validation::sha256('root1234');"
                }
              />
            </div>
          ),
        },
        "password-hash": {
          title: "Validation::passwordHash",
          description:
            "creates a new password hash using a strong one-way hash algorithm",
          link: "password-hash",
          code: (
            <div className="mb-3">
              <p>
                This function works with 2 parameters, The first parameter is a
                string which is going to be encrypted, The second parameter is
                optional and it is an array with the configuration attributes.
                More information at{" "}
                <a
                  href="https://www.php.net/manual/es/function.password-hash.php"
                  target={"_blank"}
                >
                  php.net
                </a>
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\Validation;\n\n" +
                  "$password = Validation::passwordHash('root1234');"
                }
              />
            </div>
          ),
        },
        validate: {
          title: "Validation::validate",
          description:
            "The `validate` function validates incoming data from an http request using vlucas/valitron functions",
          link: "validate",
          code: (
            <div className="mb-3">
              <p>
                This function interacts with{" "}
                <a href="https://github.com/vlucas/valitron" target={"_blank"}>
                  Valitron
                </a>
                , The first parameter is an array with all the properties which
                we are going to verify if they meet the established
                requirements, The second parameter is an array the which
                contains all the rules which specify all the parameters to check
                More information at{" "}
                <a
                  href="https://github.com/vlucas/valitron#built-in-validation-rules"
                  target={"_blank"}
                >
                  VALITRON
                </a>
              </p>

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSecurity\\Validation;\n\n" +
                  "$response = Validation::validate($_POST, function(\\Valitron\\Validator $validator) {\n" +
                  "\t$validator\n\t\t->rule('required', 'users_email')\n\t\t->message('custom message...');\n" +
                  "});\n"
                }
              />
            </div>
          ),
        },
      },
    },
  };
}
