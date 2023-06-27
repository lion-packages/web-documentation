// pages
import Library from "../pages/Library";

//commands
import v14_17_1_CMMD from "./Versions/Commands/v14_17_1_CMMD";
import v14_18_0_CMMD from "./Versions/Commands/v14_18_0_CMMD";
import v14_19_0_CMMD from "./Versions/Commands/v14_19_0_CMMD";
import v14_20_0_CMMD from "./Versions/Commands/v14_20_0_CMMD";
import v14_21_0_CMMD from "./Versions/Commands/v14_21_0_CMMD";
import v14_22_0_CMMD from "./Versions/Commands/v14_22_0_CMMD";
import v14_23_0_CMMD from "./Versions/Commands/v14_23_0_CMMD";
import v14_24_0_CMMD from "./Versions/Commands/v14_24_0_CMMD";
import v14_24_1_CMMD from "./Versions/Commands/v14_24_1_CMMD";
import v14_25_0_CMMD from "./Versions/Commands/v14_25_0_CMMD";

// framework
import v14_17_1_FRM from "./Versions/Framework/v14_17_1_FRM";
import v14_18_0_FRM from "./Versions/Framework/v14_18_0_FRM";
import v14_19_0_FRM from "./Versions/Framework/v14_19_0_FRM";
import v14_20_0_FRM from "./Versions/Framework/v14_20_0_FRM";
import v14_21_0_FRM from "./Versions/Framework/v14_21_0_FRM";
import v14_22_0_FRM from "./Versions/Framework/v14_22_0_FRM";
import v14_23_0_FRM from "./Versions/Framework/v14_23_0_FRM";
import v14_24_0_FRM from "./Versions/Framework/v14_24_0_FRM";
import v14_24_1_FRM from "./Versions/Framework/v14_24_1_FRM";
import v14_25_0_FRM from "./Versions/Framework/v14_25_0_FRM";

// libraries
import v4_7_0_LF from "./Versions/Libraries/LionFiles/v4_7_0_LF";
import v4_8_0_LF from "./Versions/Libraries/LionFiles/v4_8_0_LF";
import v4_9_0_LF from "./Versions/Libraries/LionFiles/v4_9_0_LF";
import v4_10_0_LF from "./Versions/Libraries/LionFiles/v4_10_0_LF";
import v4_11_0_LF from "./Versions/Libraries/LionFiles/v4_11_0_LF";

import v2_1_2_LH from "./Versions/Libraries/LionHelpers/v2_1_2_LH";
import v2_1_3_LH from "./Versions/Libraries/LionHelpers/v2_1_3_LH";
import v2_2_0_LH from "./Versions/Libraries/LionHelpers/v2_2_0_LH";
import v2_3_0_LH from "./Versions/Libraries/LionHelpers/v2_3_0_LH";

import v4_0_0_LM from "./Versions/Libraries/LionMailer/v4_0_0_LM";
import v4_2_0_LM from "./Versions/Libraries/LionMailer/v4_2_0_LM";
import v4_3_0_LM from "./Versions/Libraries/LionMailer/v4_3_0_LM";
import v5_0_0_LM from "./Versions/Libraries/LionMailer/v5_0_0_LM";
import v5_1_0_LM from "./Versions/Libraries/LionMailer/v5_1_0_LM";

import v8_1_0_LRT from "./Versions/Libraries/LionRoute/v8_1_0_LRT";
import v8_2_0_LRT from "./Versions/Libraries/LionRoute/v8_2_0_LRT";
import v8_3_0_LRT from "./Versions/Libraries/LionRoute/v8_3_0_LRT";
import v8_3_1_LRT from "./Versions/Libraries/LionRoute/v8_3_1_LRT";
import v8_3_2_LRT from "./Versions/Libraries/LionRoute/v8_3_2_LRT";
import v8_4_0_LRT from "./Versions/Libraries/LionRoute/v8_4_0_LRT";
import v8_5_0_LRT from "./Versions/Libraries/LionRoute/v8_5_0_LRT";

import v6_10_0_LS from "./Versions/Libraries/LionSecurity/v6_10_0_LS";
import v6_10_1_LS from "./Versions/Libraries/LionSecurity/v6_10_1_LS";
import v6_9_0_LS from "./Versions/Libraries/LionSecurity/v6_9_0_LS";
import v6_11_0_LS from "./Versions/Libraries/LionSecurity/v6_11_0_LS";
import v6_12_0_LS from "./Versions/Libraries/LionSecurity/v6_12_0_LS";

import v1_4_0_LSP from "./Versions/Libraries/LionSpreadsheet/v1_4_0_LSP";
import v1_5_0_LSP from "./Versions/Libraries/LionSpreadsheet/v1_5_0_LSP";
import v1_6_0_LSP from "./Versions/Libraries/LionSpreadsheet/v1_6_0_LSP";

import v8_1_0_LSQ from "./Versions/Libraries/LionSQL/v8_1_0_LSQ";
import v8_1_1_LSQ from "./Versions/Libraries/LionSQL/v8_1_1_LSQ";
import v8_2_0_LSQ from "./Versions/Libraries/LionSQL/v8_2_0_LSQ";
import v8_3_0_LSQ from "./Versions/Libraries/LionSQL/v8_3_0_LSQ";
import v8_4_0_LSQ from "./Versions/Libraries/LionSQL/v8_4_0_LSQ";
import v8_5_0_LSQ from "./Versions/Libraries/LionSQL/v8_5_0_LSQ";
import v8_6_0_LSQ from "./Versions/Libraries/LionSQL/v8_6_0_LSQ";
import v8_7_0_LSQ from "./Versions/Libraries/LionSQL/v8_7_0_LSQ";
import v8_7_1_LSQ from "./Versions/Libraries/LionSQL/v8_7_1_LSQ";
import v8_7_2_LSQ from "./Versions/Libraries/LionSQL/v8_7_2_LSQ";

import v5_3_0_LR from "./Versions/Libraries/LionRequest/v5_3_0_LR";
import v5_4_0_LR from "./Versions/Libraries/LionRequest/v5_4_0_LR";

import v1_0_0_LA from "./Versions/Libraries/LionAuthentication/v1_0_0_LA";

export default function Content(mdText = "") {
  return {
    commands: {
      "v14.25.0": v14_25_0_CMMD(),
      "v14.24.1": v14_24_1_CMMD(),
      "v14.24.0": v14_24_0_CMMD(),
      "v14.23.0": v14_23_0_CMMD(),
      "v14.22.0": v14_22_0_CMMD(),
      "v14.21.0": v14_21_0_CMMD(),
      "v14.20.0": v14_20_0_CMMD(),
      "v14.19.0": v14_19_0_CMMD(),
      "v14.18.0": v14_18_0_CMMD(),
      "v14.17.1": v14_17_1_CMMD(),
      // "v14.17.0": v14_17_0_CMMD(),
      // "v14.16.0": v14_16_0_CMMD(),
      // "v14.15.0": v14_15_0_CMMD(),
      // "v14.14.0": v14_14_0_CMMD(),
      // "v14.13.0": v14_13_0_CMMD(),
      // "v14.12.0": v14_12_0_CMMD(),
      // "v14.11.0": v14_11_0_CMMD(),
      // "v14.10.1": v14_10_1_CMMD(),
      // "v14.10.0": v14_10_0_CMMD(),
      // "v14.9.0": v14_9_0_CMMD(),
      // "v14.8.0": v14_8_0_CMMD(),
      // "v14.7.0": v14_7_0_CMMD(),
      // "v14.6.0": v14_6_0_CMMD(),
      // "v14.5.0": v14_5_0_CMMD(),
      // "v14.4.0": v14_4_0_CMMD(),
      // "v14.3.2": v14_3_2_CMMD(),
      // "v14.3.1": v14_3_1_CMMD(),
      // "v14.3.0": v14_3_0_CMMD(),
      // "v14.2.0": v14_2_0_CMMD(),
      // "v14.1.0": v14_1_0_CMMD(),
      // "v14.0.0": v14_0_0_CMMD(),
      // "v13.14.0": v13_14_0_CMMD(),
      // "v13.13.0": v13_13_0_CMMD(),
      // "v13.12.0": v13_12_0_CMMD(),
      // "v13.11.0": v13_11_0_CMMD(),
      // "v13.10.0": v13_10_0_CMMD(),
      // "v13.9.0": v13_9_0_CMMD(),
      // "v13.8.1": v13_8_1_CMMD(),
      // "v13.8.0": v13_8_0_CMMD(),
      // "v13.7.0": v13_7_0_CMMD(),
      // "v13.6.0": v13_6_0_CMMD(),
      // "v13.5.0": v13_5_0_CMMD(),
      // "v13.4.0": v13_4_0_CMMD(),
      // "v13.3.0": v13_3_0_CMMD(),
      // "v13.2.0": v13_2_0_CMMD(),
      // "v13.1.0": v13_1_0_CMMD(),
      // "v13.0.0": v13_0_0_CMMD(),
      // "v12.17.0": v12_17_0_CMMD(),
      // "v12.16.1": v12_16_1_CMMD(),
    },
    framework: {
      "v14.25.0": v14_25_0_FRM(mdText),
      "v14.24.1": v14_24_1_FRM(mdText),
      "v14.24.0": v14_24_0_FRM(mdText),
      "v14.23.0": v14_23_0_FRM(mdText),
      "v14.22.0": v14_22_0_FRM(mdText),
      "v14.21.0": v14_21_0_FRM(mdText),
      "v14.20.0": v14_20_0_FRM(mdText),
      "v14.19.0": v14_19_0_FRM(mdText),
      "v14.18.0": v14_18_0_FRM(mdText),
      "v14.17.1": v14_17_1_FRM(mdText),
      // "v14.17.0": v14_17_0_FRM(mdText),
      // "v14.16.0": v14_16_0_FRM(mdText),
      // "v14.15.0": v14_15_0_FRM(mdText),
      // "v14.14.0": v14_14_0_FRM(mdText),
      // "v14.13.0": v14_13_0_FRM(mdText),
      // "v14.12.0": v14_12_0_FRM(mdText),
      // "v14.11.0": v14_11_0_FRM(mdText),
      // "v14.10.1": v14_10_1_FRM(mdText),
      // "v14.10.0": v14_10_0_FRM(mdText),
      // "v14.9.0": v14_9_0_FRM(mdText),
      // "v14.8.0": v14_8_0_FRM(mdText),
      // "v14.7.0": v14_7_0_FRM(mdText),
      // "v14.6.0": v14_6_0_FRM(mdText),
      // "v14.5.0": v14_5_0_FRM(mdText),
      // "v14.4.0": v14_4_0_FRM(mdText),
      // "v14.3.2": v14_3_2_FRM(mdText),
      // "v14.3.1": v14_3_1_FRM(mdText),
      // "v14.3.0": v14_3_0_FRM(mdText),
      // "v14.2.0": v14_2_0_FRM(mdText),
      // "v14.1.0": v14_1_0_FRM(mdText),
      // "v14.0.0": v14_0_0_FRM(mdText),
      // "v13.14.0": v13_14_0_FRM(mdText),
      // "v13.13.0": v13_13_0_FRM(mdText),
      // "v13.12.0": v13_12_0_FRM(mdText),
      // "v13.11.0": v13_11_0_FRM(mdText),
      // "v13.10.0": v13_10_0_FRM(mdText),
      // "v13.9.0": v13_9_0_FRM(mdText),
      // "v13.8.1": v13_8_1_FRM(mdText),
      // "v13.8.0": v13_8_0_FRM(mdText),
      // "v13.7.0": v13_7_0_FRM(mdText),
      // "v13.6.0": v13_6_0_FRM(mdText),
      // "v13.5.0": v13_5_0_FRM(mdText),
      // "v13.4.0": v13_4_0_FRM(mdText),
      // "v13.3.0": v13_3_0_FRM(mdText),
      // "v13.2.0": v13_2_0_FRM(),
      // "v13.1.0": v13_1_0_FRM(),
      // "v13.0.0": v13_0_0_FRM(),
      // "v12.17.0": v12_17_0_FRM(),
      // "v12.16.1": v12_16_1_FRM(),
    },
    libraries: {
      lion: {
        sql: {
          title: "Lion-SQL",
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
            "v8.7.2": v8_7_2_LSQ(),
            "v8.7.1": v8_7_1_LSQ(),
            "v8.7.0": v8_7_0_LSQ(),
            "v8.6.0": v8_6_0_LSQ(),
            "v8.5.0": v8_5_0_LSQ(),
            "v8.4.0": v8_4_0_LSQ(),
            "v8.3.0": v8_3_0_LSQ(),
            "v8.2.0": v8_2_0_LSQ(),
            "v8.1.1": v8_1_1_LSQ(),
            "v8.1.0": v8_1_0_LSQ(),
            // "v8.0.3": v8_0_3_LSQ(),
            // "v8.0.2": v8_0_2_LSQ(),
            // "v8.0.1": v8_0_1_LSQ(),
            // "v8.0.0": v8_0_0_LSQ(),
            // "v7.7.0": v7_7_0_LSQ(),
            // "v7.6.0": v7_6_0_LSQ(),
            // "v7.5.0": v7_5_0_LSQ(),
            // "v7.4.0": v7_4_0_LSQ(),
            // "v7.3.0": v7_3_0_LSQ(),
            // "v7.2.1": v7_2_1_LSQ(),
            // "v7.2.0": v7_2_0_LSQ(),
            // "v7.1.0": v7_1_0_LSQ(),
            // "v7.0.0": v7_0_0_LSQ(),
            // "v6.6.0": v6_6_0_LSQ(),
            // "v6.5.1": v6_5_1_LSQ(),
            // "v6.4.0": v6_4_0_LSQ(),
          },
        },
        authentication: {
          title: "Lion-Authentication",
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
          title: "Lion-Files",
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
            "v4.11.0": v4_11_0_LF(),
            "v4.10.0": v4_10_0_LF(),
            "v4.9.0": v4_9_0_LF(),
            "v4.8.0": v4_8_0_LF(),
            "v4.7.0": v4_7_0_LF(),
          },
        },
        helpers: {
          title: "Lion-Helpers",
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
            "v2.3.0": v2_3_0_LH(),
            "v2.2.0": v2_2_0_LH(),
            "v2.1.3": v2_1_3_LH(),
            "v2.1.2": v2_1_2_LH(),
          },
        },
        request: {
          title: "Lion-Request",
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
            "v5.4.0": v5_4_0_LR(),
            "v5.3.0": v5_3_0_LR(),
          },
        },
        mailer: {
          title: "Lion-Mailer",
          url: "/libraries/lion/mailer/index",
          component: (
            <Library
              library={"mailer"}
              url_github={"https://github.com/Sleon4/Lion-Mailer"}
              command={"composer require lion/mailer"}
            />
          ),
          description:
            "Library created to facilitate sending email based on different services",
          class: {
            "v5.1.0": v5_1_0_LM(),
            "v5.0.0": v5_0_0_LM(),
            "v4.3.0": v4_3_0_LM(),
            "v4.2.0": v4_2_0_LM(),
            "v4.0.0": v4_0_0_LM(),
          },
        },
        route: {
          title: "Lion-Route",
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
            "v8.5.0": v8_5_0_LRT(),
            "v8.4.0": v8_4_0_LRT(),
            "v8.3.2": v8_3_2_LRT(),
            "v8.3.1": v8_3_1_LRT(),
            "v8.3.0": v8_3_0_LRT(),
            "v8.2.0": v8_2_0_LRT(),
            "v8.1.0": v8_1_0_LRT(),
          },
        },
        security: {
          title: "Lion-Security",
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
            "v6.12.0": v6_12_0_LS(),
            "v6.11.0": v6_11_0_LS(),
            "v6.10.1": v6_10_1_LS(),
            "v6.10.0": v6_10_0_LS(),
            "v6.9.0": v6_9_0_LS(),
          },
        },
        spreadsheet: {
          title: "Lion-Spreadsheet",
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
            "v1.6.0": v1_6_0_LSP(),
            "v1.5.0": v1_5_0_LSP(),
            "v1.4.0": v1_4_0_LSP(),
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
          description:
            "Faker is a PHP library that generates fake data for you",
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
}
