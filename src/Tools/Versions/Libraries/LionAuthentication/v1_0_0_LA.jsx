import CodeBlock from "../../../../pages/components/CodeBlock";

export default function v1_0_0_LA() {
  return {
    auth2fa: {
      title: "LionAuthentication\\Auth2FA",
      description:
        "Auth2FA class allows users to authenticate with 2 steps with Google authenticator",
      url: "/libraries/lion/authentication/item_version/auth2fa/init",
      methods: {
        init: {
          title: "Auth2FA::init",
          description: "the init method allows initializing the Auth2FA class.",
          link: "init",
          code: (
            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionAuthentication\\Auth2FA;\n\n" +
                "Auth2FA::init();"
              }
            />
          ),
        },
        qr: {
          title: "Auth2FA::qr",
          description: "the qr method generates the qr image.",
          link: "qr",
          code: (
            <>
              <p>
                the method that returns an object with the qr property where its
                value is a base_64 of the generated qr code and the secret_key
                property where it takes the secret value to verify the code.
              </p>

              <div className="mb-3">
                <h5 className="pb-2">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionAuthentication\\Auth2FA;\n\n" +
                    "Auth2FA::init()\n\t->qr('company_name', 'company_email');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionAuthentication\\Auth2FA;\n\n" +
                    "Auth2FA::init()\n\t->qr('company_name', 'company_email', 200);\n" +
                    "\t// default size of 400"
                  }
                />
              </div>
            </>
          ),
        },
        verify: {
          title: "Auth2FA::verify",
          description:
            "the verify method verifies that the code obtained is valid.",
          link: "verify",
          code: (
            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionAuthentication\\Auth2FA;\n\n" +
                "Auth2FA::init()\n\t->verify('secret_key', 'secret_code');"
              }
            />
          ),
        },
      },
    },
  };
}
