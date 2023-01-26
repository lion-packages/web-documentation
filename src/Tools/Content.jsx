import v4_7_0, {
  v4_7_0_CHANGELOG,
} from "./Versions/Libraries/LionFiles/v4_7_0";
import v2_1_2, {
  v2_1_2_CHANGELOG,
} from "./Versions/Libraries/LionHelpers/v2_1_2";
import v4_0_0, {
  v4_0_0_CHANGELOG,
} from "./Versions/Libraries/LionMailer/v4_0_0";
import v5_3_0, {
  v5_3_0_CHANGELOG,
} from "./Versions/Libraries/LionRequest/v5_3_0";
import v8_1_0, {
  v8_1_0_CHANGELOG,
} from "./Versions/Libraries/LionRoute/v8_1_0";
import v6_9_0, {
  v6_9_0_CHANGELOG,
} from "./Versions/Libraries/LionSecurity/v6_9_0";
import v1_4_0, {
  v1_4_0_CHANGELOG,
} from "./Versions/Libraries/LionSpreadsheet/v1_4_0";
import v6_4_0, { v6_4_0_CHANGELOG } from "./Versions/Libraries/LionSQL/v6_4_0";

export default {
  libraries: {
    lion: {
      files: {
        title: "LION-FILES",
        url: "/libraries/lion/files/index",
        description:
          "Library created with the function of working internal system files.",
        class: {
          "v4.7.0": v4_7_0(),
        },
        changelod: {
          "v4.7.0": v4_7_0_CHANGELOG(),
        },
      },
      security: {
        title: "LION-SECURITY",
        url: "/libraries/lion/security/index",
        description:
          "Library created with the function of implementing AES, RSA and JWT Security functions for PHP.",
        class: {
          "v6.9.0": v6_9_0(),
        },
        changelod: {
          "v6.9.0": v6_9_0_CHANGELOG(),
        },
      },
      request: {
        title: "LION-REQUEST",
        url: "/libraries/lion/request/index",
        description:
          "Library created to request input data and response requests.",
        class: {
          "v1.4.0": v5_3_0(),
        },
        changelod: {
          "v1.4.0": v5_3_0_CHANGELOG(),
        },
      },
      sql: {
        title: "LION-SQL",
        url: "/libraries/lion/sql/index",
        description:
          "Package responsible for generating and executing MySQL processes.",
        class: {
          "v6.4.0": v6_4_0(),
        },
        changelod: {
          "v6.4.0": v6_4_0_CHANGELOG(),
        },
      },
      mailer: {
        title: "LION-MAILER",
        url: "/libraries/lion/mailer/index",
        description:
          "Library created for easy email sending based on PHPMailer.",
        class: {
          "v4.0.0": v4_0_0(),
        },
        changelod: {
          "v4.0.0": v4_0_0_CHANGELOG(),
        },
      },
      spreadsheet: {
        title: "LION-SPREADSHEET",
        url: "/libraries/lion/spreadsheet/index",
        description: "Library for easy spreadsheet use.",
        class: {
          "v1.4.0": v1_4_0(),
        },
        changelod: {
          "v1.4.0": v1_4_0_CHANGELOG(),
        },
      },
      route: {
        title: "LION-ROUTE",
        url: "/libraries/lion/route/index",
        description:
          "This library has a quick use of the router with regular expressions based on mrjgreen's phroute.",
        class: {
          "v8.1.0": v8_1_0(),
        },
        changelod: {
          "v8.1.0": v8_1_0_CHANGELOG(),
        },
      },
      helpers: {
        title: "LION-HELPERS",
        url: "/libraries/lion/helpers/index",
        description: "Easy to use helpers for any type of use.",
        class: {
          "v2.1.2": v2_1_2(),
        },
        changelod: {
          "v2.1.2": v2_1_2_CHANGELOG(),
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
