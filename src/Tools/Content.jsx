// pages
import Library from "../pages/Library";

//commands
import v12_16_1_CMMD from "./Versions/Commands/v12_16_1_CMMD";
import v12_17_0_CMMD from "./Versions/Commands/v12_17_0_CMMD";
import v13_0_0_CMMD from "./Versions/Commands/v13_0_0_CMMD";
import v13_1_0_CMMD from "./Versions/Commands/v13_1_0_CMMD";

// framework
import v12_16_1_FRM from "./Versions/Framework/v12_16_1_FRM";
import v12_17_0_FRM from "./Versions/Framework/v12_17_0_FRM";
import v13_0_0_FRM from "./Versions/Framework/v13_0_0_FRM";
import v13_1_0_FRM from "./Versions/Framework/v13_1_0_FRM";

// libraries
import v4_7_0_LF from "./Versions/Libraries/LionFiles/v4_7_0_LF";
import v4_8_0_LF from "./Versions/Libraries/LionFiles/v4_8_0_LF";
import v4_9_0_LF from "./Versions/Libraries/LionFiles/v4_9_0_LF";
import v2_1_2_LH from "./Versions/Libraries/LionHelpers/v2_1_2_LH";
import v4_0_0_LM from "./Versions/Libraries/LionMailer/v4_0_0_LM";
import v4_2_0_LM from "./Versions/Libraries/LionMailer/v4_2_0_LM";
import v5_3_0_LR from "./Versions/Libraries/LionRequest/v5_3_0_LR";
import v8_1_0_LRT from "./Versions/Libraries/LionRoute/v8_1_0_LRT";
import v6_10_0_LS from "./Versions/Libraries/LionSecurity/v6_10_0_LS";
import v6_10_1_LS from "./Versions/Libraries/LionSecurity/v6_10_1_LS";
import v6_9_0_LS from "./Versions/Libraries/LionSecurity/v6_9_0_LS";
import v1_4_0_LSP from "./Versions/Libraries/LionSpreadsheet/v1_4_0_LSP";
import v1_5_0_LSP from "./Versions/Libraries/LionSpreadsheet/v1_5_0_LSP";
import v6_4_0_LSQ from "./Versions/Libraries/LionSQL/v6_4_0_LSQ";
import v6_5_1_LSQ from "./Versions/Libraries/LionSQL/v6_5_1_LSQ";
import v6_6_0_LSQ from "./Versions/Libraries/LionSQL/v6_6_0_LSQ";
import v7_0_0_LSQ from "./Versions/Libraries/LionSQL/v7_0_0_LSQ";
import v1_0_0_LA from "./Versions/Libraries/LionAuthentication/v1_0_0_LA";

export default {
  commands: {
    "v13.1.0": v13_1_0_CMMD(),
    "v13.0.0": v13_0_0_CMMD(),
    "v12.17.0": v12_17_0_CMMD(),
    "v12.16.1": v12_16_1_CMMD(),
  },
  framework: {
    "v13.1.0": v13_1_0_FRM(),
    "v13.0.0": v13_0_0_FRM(),
    "v12.17.0": v12_17_0_FRM(),
    "v12.16.1": v12_16_1_FRM(),
  },
  libraries: {
    lion: {
      authentication: {
        title: "LION-AUTHENTICATION",
        url: "/libraries/lion/authentication/index",
        component: (
          <Library
            library={"authentication"}
            url_github={"https://github.com/Sleon4/Lion-Authentication"}
            command={"composer require lion/authentication"}
          />
        ),
        description: "Library to authenticate users in 2 steps.",
        class: {
          "v1.0.0": v1_0_0_LA(),
        },
      },
      files: {
        title: "LION-FILES",
        url: "/libraries/lion/files/index",
        component: (
          <Library
            library={"files"}
            url_github={"https://github.com/Sleon4/Lion-Files"}
            command={"composer require lion/files"}
          />
        ),
        description:
          "Library created with the function of working internal system files.",
        class: {
          "v4.9.0": v4_9_0_LF(),
          "v4.8.0": v4_8_0_LF(),
          "v4.7.0": v4_7_0_LF(),
        },
      },
      security: {
        title: "LION-SECURITY",
        url: "/libraries/lion/security/index",
        component: (
          <Library
            library={"security"}
            url_github={"https://github.com/Sleon4/Lion-Security"}
            command={"composer require lion/security"}
          />
        ),
        description:
          "Library created with the function of implementing AES, RSA and JWT Security functions for PHP.",
        class: {
          "v6.10.1": v6_10_1_LS(),
          "v6.10.0": v6_10_0_LS(),
          "v6.9.0": v6_9_0_LS(),
        },
      },
      request: {
        title: "LION-REQUEST",
        url: "/libraries/lion/request/index",
        component: (
          <Library
            library={"request"}
            url_github={"https://github.com/Sleon4/Lion-Request"}
            command={"composer require lion/request"}
          />
        ),
        description:
          "Library created to request input data and response requests.",
        class: {
          "v5.3.0": v5_3_0_LR(),
        },
      },
      sql: {
        title: "LION-SQL",
        url: "/libraries/lion/sql/index",
        component: (
          <Library
            library={"sql"}
            url_github={"https://github.com/Sleon4/Lion-SQL"}
            command={"composer require lion/sql"}
          />
        ),
        description:
          "Package responsible for generating and executing MySQL processes.",
        class: {
          "v7.0.0": v7_0_0_LSQ(),
          "v6.6.0": v6_6_0_LSQ(),
          "v6.5.1": v6_5_1_LSQ(),
          "v6.4.0": v6_4_0_LSQ(),
        },
      },
      mailer: {
        title: "LION-MAILER",
        url: "/libraries/lion/mailer/index",
        component: (
          <Library
            library={"mailer"}
            url_github={"https://github.com/Sleon4/Lion-Mailer"}
            command={"composer require lion/mailer"}
          />
        ),
        description:
          "Library created for easy email sending based on PHPMailer.",
        class: {
          "v4.2.0": v4_2_0_LM(),
          "v4.0.0": v4_0_0_LM(),
        },
      },
      spreadsheet: {
        title: "LION-SPREADSHEET",
        url: "/libraries/lion/spreadsheet/index",
        component: (
          <Library
            library={"spreadsheet"}
            url_github={"https://github.com/Sleon4/Lion-Spreadsheet"}
            command={"composer require lion/spreadsheet"}
          />
        ),
        description: "Library for easy spreadsheet use.",
        class: {
          "v1.5.0": v1_5_0_LSP(),
          "v1.4.0": v1_4_0_LSP(),
        },
      },
      route: {
        title: "LION-ROUTE",
        url: "/libraries/lion/route/index",
        component: (
          <Library
            library={"route"}
            url_github={"https://github.com/Sleon4/Lion-Route"}
            command={"composer require lion/route"}
          />
        ),
        description:
          "This library has a quick use of the router with regular expressions based on mrjgreen's phroute.",
        class: {
          "v8.1.0": v8_1_0_LRT(),
        },
      },
      helpers: {
        title: "LION-HELPERS",
        url: "/libraries/lion/helpers/index",
        component: (
          <Library
            library={"helpers"}
            url_github={"https://github.com/Sleon4/Lion-Helpers"}
            command={"composer require lion/helpers"}
          />
        ),
        description: "Easy to use helpers for any type of use.",
        class: {
          "v2.1.2": v2_1_2_LH(),
        },
      },
    },
    external: [
      {
        label: "firebase/php-jwt",
        description: "PHP package for JWT",
        url: "https://github.com/firebase/php-jwt",
      },
      {
        label: "vlucas/valitron",
        description:
          "Valitron is a simple, elegant, stand-alone validation library with NO dependencies",
        url: "https://github.com/vlucas/valitron",
      },
      {
        label: "vlucas/phpdotenv",
        description:
          "Loads environment variables from `.env` to `getenv()`, `$_ENV` and `$_SERVER` automagically",
        url: "https://github.com/vlucas/phpdotenv",
      },
      {
        label: "mrjgreen/phroute",
        description:
          "A super fast PHP router, with route parameters, restful controllers, filters and reverse routing",
        url: "https://github.com/mrjgreen/phroute",
      },
      {
        label: "guzzle/guzzle",
        description: "Guzzle, an extensible PHP HTTP client",
        url: "https://github.com/guzzle/guzzle",
      },
      {
        label: "PHPMailer/PHPMailer",
        description: "The classic email sending library for PHP",
        url: "https://github.com/PHPMailer/PHPMailer",
      },
      {
        label: "briannesbitt/Carbon",
        description: "A simple PHP API extension for DateTime",
        url: "https://github.com/briannesbitt/carbon",
      },
      {
        label: "ratchetphp/Ratchet",
        description: "Asynchronous WebSocket server",
        url: "https://github.com/ratchetphp/Ratchet",
      },
      {
        label: "symfony/console",
        description:
          "The Console component eases the creation of beautiful and testable command line interfaces",
        url: "https://github.com/symfony/console",
      },
      {
        label: "Seldaek/monolog",
        description:
          "Sends your logs to files, sockets, inboxes, databases and various web services",
        url: "https://github.com/Seldaek/monolog",
      },
      {
        label: "PHPOffice/PhpSpreadsheet",
        description:
          "A pure PHP library for reading and writing spreadsheet files",
        url: "https://github.com/PHPOffice/PhpSpreadsheet",
      },
      {
        label: "sebastianbergmann/phpunit",
        description: "The PHP Unit Testing framework",
        url: "https://github.com/sebastianbergmann/phpunit",
      },
      {
        label: "FakerPHP/Faker",
        description: "Faker is a PHP library that generates fake data for you",
        url: "https://github.com/FakerPHP/Faker",
      },
      {
        label: "antonioribeiro/google2fa",
        description:
          "A One Time Password Authentication package, compatible with Google Authenticator",
        url: "https://github.com/antonioribeiro/google2fa",
      },
      {
        label: "Bacon/BaconQrCode",
        description: "QR Code Generator for PHP",
        url: "https://github.com/Bacon/BaconQrCode",
      },
    ],
  },
};
