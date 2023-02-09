import v4_7_0_LF from "./Versions/Libraries/LionFiles/v4_7_0_LF";
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

export default {
  libraries: {
    lion: {
      files: {
        title: "LION-FILES",
        url: "/libraries/lion/files/index",
        description:
          "Library created with the function of working internal system files.",
        class: {
          "v4.7.0": v4_7_0_LF(),
        },
      },
      security: {
        title: "LION-SECURITY",
        url: "/libraries/lion/security/index",
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
        description:
          "Library created to request input data and response requests.",
        class: {
          "v5.3.0": v5_3_0_LR(),
        },
      },
      sql: {
        title: "LION-SQL",
        url: "/libraries/lion/sql/index",
        description:
          "Package responsible for generating and executing MySQL processes.",
        class: {
          "v6.5.1": v6_5_1_LSQ(),
          "v6.4.0": v6_4_0_LSQ(),
        },
      },
      mailer: {
        title: "LION-MAILER",
        url: "/libraries/lion/mailer/index",
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
        description: "Library for easy spreadsheet use.",
        class: {
          "v1.5.0": v1_5_0_LSP(),
          "v1.4.0": v1_4_0_LSP(),
        },
      },
      route: {
        title: "LION-ROUTE",
        url: "/libraries/lion/route/index",
        description:
          "This library has a quick use of the router with regular expressions based on mrjgreen's phroute.",
        class: {
          "v8.1.0": v8_1_0_LRT(),
        },
      },
      helpers: {
        title: "LION-HELPERS",
        url: "/libraries/lion/helpers/index",
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
    ],
  },
};
