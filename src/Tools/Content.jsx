// components
import LionFiles from "../pages/LionFiles";
import LionHelpers from "../pages/LionHelpers";
import LionMailer from "../pages/LionMailer";
import LionRequest from "../pages/LionRequest";
import LionRoute from "../pages/LionRoute";
import LionSecurity from "../pages/LionSecurity";
import LionSpreadsheet from "../pages/LionSpreadsheet";
import LionSQL from "../pages/LionSQL";

// framework
import v12_16_0_FRM from "./Versions/Framework/v12_16_0_FRM";

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

export default {
  framework: {
    "v12.16.0": v12_16_0_FRM()
  },
  libraries: {
    lion: {
      files: {
        title: "LION-FILES",
        url: "/libraries/lion/files/index",
        component: <LionFiles />,
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
        component: <LionSecurity />,
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
        component: <LionRequest />,
        description:
          "Library created to request input data and response requests.",
        class: {
          "v5.3.0": v5_3_0_LR(),
        },
      },
      sql: {
        title: "LION-SQL",
        url: "/libraries/lion/sql/index",
        component: <LionSQL />,
        description:
          "Package responsible for generating and executing MySQL processes.",
        class: {
          "v6.6.0": v6_6_0_LSQ(),
          "v6.5.1": v6_5_1_LSQ(),
          "v6.4.0": v6_4_0_LSQ(),
        },
      },
      mailer: {
        title: "LION-MAILER",
        url: "/libraries/lion/mailer/index",
        component: <LionMailer />,
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
        component: <LionSpreadsheet />,
        description: "Library for easy spreadsheet use.",
        class: {
          "v1.5.0": v1_5_0_LSP(),
          "v1.4.0": v1_4_0_LSP(),
        },
      },
      route: {
        title: "LION-ROUTE",
        url: "/libraries/lion/route/index",
        component: <LionRoute />,
        description:
          "This library has a quick use of the router with regular expressions based on mrjgreen's phroute.",
        class: {
          "v8.1.0": v8_1_0_LRT(),
        },
      },
      helpers: {
        title: "LION-HELPERS",
        url: "/libraries/lion/helpers/index",
        component: <LionHelpers />,
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
