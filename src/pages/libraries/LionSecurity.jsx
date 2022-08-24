import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ListTabs from "../components/ListTabs";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

function LionSecurity() {
  const [items, setItems] = useState([
    {
      event: "getting-started",
      name: "Getting started",
    },
    {
      event: "rsa",
      name: "RSA",
    },
    {
      event: "aes",
      name: "AES",
    },
    {
      event: "jwt",
      name: "JWT",
    },
    {
      event: "security",
      name: "Security",
    },
    {
      event: "credits-license",
      name: "Credits and license",
    },
  ]);

  const [panes, setPanes] = useState([
    {
      event: "getting-started",
      content: (
        <>
          <div className="mb-4">
            <h2 className="pb-2">Lion-Security</h2>

            <p>
              Library created with the function of implementing AES, RSA and JWT
              Security functions for PHP.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">INSTALL</h4>

            <CodeBlock
              language="powershell"
              content={"composer require lion-framework/lion-security"}
            />
          </div>
        </>
      ),
    },
    {
      event: "rsa",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">RSA</h4>

            <p>
              RSA interacts with properties set in{" "}
              <Badge bg="secondary">.env</Badge>, where the properties we use
              must be specified.
            </p>
          </div>

          <div className="mb-3">
            <h4>Example</h4>

            <CodeBlock
              language="powershell"
              content={
                'RSA_PATH="C:/xampp/php/extras/openssl/openssl.cnf"\n' +
                "RSA_PRIVATE_KEY_BITS=2048\n" +
                'RSA_DEFAULT_MD="sha256"'
              }
            />
          </div>

          <div className="mb-3">
            <p>
              To create the public and private key, it can be done in 2 ways.
              Keep in mind that the classes required for its operation must be
              imported. More information on{" "}
              <Link to={"/libraries/files"}>LionFiles</Link>.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSecurity\\RSA; \n" +
                "use LionFiles\\Manage;"
              }
            />

            <p>
              LionFiles is an external library, We call the folder function to
              create the folders of the established path,{" "}
              <Badge bg={"secondary"}>Manage::folder('path')</Badge> takes care
              of creating the folders of a given path.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">CREATE KEYS</h4>
            <h5 className="pb-2">Example #1.</h5>

            <p>
              In this first option we can create the keys automatically in an
              internally established route{" "}
              <Badge bg={"secondary"}>'storage/secret-key/'</Badge>, which when
              looking at your directories will have new folders and files in the
              respective <Badge bg={"secondary"}>'storage/secret-key/'</Badge>{" "}
              path.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "Manage::folder();\n" +
                "RSA::createKeys();\n\n" +
                "return ['status' => 'success', 'message' => 'Keys created successfully.'];"
              }
            />
          </div>

          <div className="mb-3">
            <h5 className="pb-2">Example #2.</h5>

            <p>
              In this second option we can specify which folders we are going to
              create, which will be where the public and private keys will be
              stored.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "$path = 'resources/my_secret_folder/';\n" +
                "Manage::folder($path);\n" +
                "RSA::createKeys($path);\n\n" +
                "return ['status' => 'success', 'message' => 'Keys created successfully.'];"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">ENCODE</h4>

            <p>
              To encrypt data with aes an stdClass object must be specified, You
              must send an array and parse it.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "$data = (object) [\n" +
                "\t'email' => 'myemail2022@example.com', \n" +
                "\t'password' => 'mypass1234'\n];"
              }
            />

            <p>
              The created object must be sent to the encryption function to
              encrypt the data.
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

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">DECODE</h4>

            <p>
              The created object must be sent to the decryption function to get the data.
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
        </>
      ),
    },
    {
      event: "aes",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">AES</h4>

            <p>
              AES interacts with properties set in{" "}
              <Badge bg="secondary">.env</Badge>, where the properties we use
              must be specified.
            </p>

            <CodeBlock
              language="powershell"
              content={
                'AES_METHOD="aes-256-cbc"\n' +
                'AES_KEY="AES_KEY-12345-KY"\n' +
                'AES_IV="AES_IV-123456-IV"'
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">ENCODE</h4>

            <p>
              To encrypt data with aes an stdClass object must be specified, You
              must send an array and parse it.
            </p>

            <CodeBlock
              language="php"
              content={
                "$data = (object) [\n" +
                '\t"email" => "myemail2022@example.com"\n' +
                '\t"password" => "mypass1234"\n];'
              }
            />

            <p>
              The created object must be sent to the encode function to encrypt
              the data, additionally specify the{" "}
              <Badge bg="secondary">.env</Badge> properties which the function
              will use for data encryption.
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

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">DECODE</h4>

            <p>
              The created object must be sent to the decryption function to
              decrypt the data; additionally, specify the{" "}
              <Badge bg="secondary">.env</Badge> properties to be used by the
              function for data encryption
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
        </>
      ),
    },
    {
      event: "jwt",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">JWT</h4>

            <p>
              JWT interacts with the properties established in{" "}
              <Badge bg={"secondary"}>.env</Badge>, where the properties we use
              must be specified. It is mandatory to create the public and
              private key with RSA beforehand, because JWT requires a public and
              private key for its operation.
            </p>

            <CodeBlock
              language="powershell"
              content={
                'SERVER_URL="http://localhost/Lion-Framework/Lion-Security/"\n' +
                'SERVER_URL_AUD="http://localhost:3000/"\n' +
                'JWT_DEFAULT_MD="RS256"\n' +
                "JWT_EXP=86400\n"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">ENCODE</h4>

            <p>
              The function works with 2 parameters, The first parameter is an
              array with the data to be added to the JWT, The second parameter
              is optional and it is the lifetime of the JWT.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSecurityJWT;\n\n" +
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
                "use LionSecurityJWT;\n\n" +
                "$data = ['idUsers' => 1, 'idRoles' => 3];\n" +
                "$jwtEnc = JWT::encode($data, 180000);\n" +
                "var_dump($jwtEnc);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">DECODE</h4>

            <p>To decrypt the JWT, the generated JWT string must be sent.</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSecurityJWT;\n\n" +
                "$jwtDec = JWT::decode($jwtEnc);\n" +
                "var_dump($jwtDec);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">GET JWT</h4>

            <p>
              In order to retrieve the JWT, It must be sent through a header.
              When sending your HTTP request, Ihe JWT is not attached to the
              data, So we must obtain the JWT from the headers sent.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSecurityJWT;\n\n" +
                "$jwtDec = JWT::decode(JWT::get());\n" +
                "var_dump($jwtDec);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "security",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">SECURITY</h4>

            <p>
              The security class is implemented to dynamically work some
              methods.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h4>SHA256</h4>

            <p>
              This function receives as a parameter an object of type stdClass,
              which we must fill an array with all the data that we want to
              encrypt with sha256 and parse it into an object. More information
              at{" "}
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
                "use LionSecurity\\SECURITY;\n\n" +
                "$password = (object) [\n" +
                "\t'password' => 'root1234',\n" +
                "\t'email' => 'example@example.com',\n];\n\n" +
                "$password = SECURITY::sha256($password);\n" +
                "var_dump($password);"
              }
            />
          </div>

          <div className="mb-3">
            <h4 className="pb-2">PASSWORD HASH</h4>

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
                "use LionSecurity\\SECURITY;\n\n" +
                "$password = SECURITY::passwordHash('root1234');\n" +
                "var_dump($password);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">PASSWORD VERIFY</h4>

            <p>
              This function checks if the 2 passwords sent are the same{" "}
              <a
                href="https://www.php.net/manual/es/function.password-verify"
                target={"_blank"}
              >
                php.net
              </a>
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSecurity\\SECURITY;\n\n" +
                "$password = '...';\n" +
                "$passwordConfirm = '...';\n\n" +
                "$request = SECURITY::passwordVerify($password, $passwordConfirm);\n" +
                "var_dump($request);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">VALIDATE</h4>

            <p>
              This function interacts with{" "}
              <a href="https://github.com/vlucas/valitron" target={"_blank"}>
                Valitron
              </a>
              , The first parameter is an array with all the properties which we
              are going to verify if they meet the established requirements, The
              second parameter is an array the which contains all the rules
              which specify all the parameters to check More information at{' '}
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
                "use LionSecurity\\SECURITY;\n\n" +
                "$request = SECURITY::validate($_POST, ['rulers...']);\n" +
                "var_dump($request);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "credits-license",
      content: (
        <>
          <div className="mb-4">
            <h3 className="pb-2">CREDITS</h3>
            <p>
              <a href="https://github.com/vlucas/phpdotenv" target="_blank">
                PHP dotenv
              </a>
            </p>

            <p>
              <a href="https://github.com/vlucas/valitron" target="_blank">
                Valitron
              </a>
            </p>

            <p>
              <a href="https://github.com/firebase/php-jwt" target="_blank">
                PHP-JWT
              </a>
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h3 className="pb-2">LICENSE</h3>
            <p>
              Copyright © 2022{" "}
              <a
                href="https://github.com/Sleon4/Lion-Security/blob/main/LICENSE"
                target="_blank"
              >
                MIT License
              </a>
            </p>
          </div>
        </>
      ),
    },
  ]);

  return <ListTabs default="getting-started" items={items} panes={panes} />;
}

export default LionSecurity;
