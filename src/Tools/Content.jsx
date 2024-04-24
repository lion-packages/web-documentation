import Library from "../pages/Library";
import v1_FRM from "./Versions/Framework/v1_FRM";
import v4_11_0_LF from "./Versions/Libraries/LionFiles/v4_11_0_LF";
import v2_3_0_LH from "./Versions/Libraries/LionHelpers/v2_3_0_LH";
import v5_1_0_LM from "./Versions/Libraries/LionMailer/v5_1_0_LM";
import v8_7_0_LRT from "./Versions/Libraries/LionRoute/v8_7_0_LRT";
import v7_0_0_LS from "./Versions/Libraries/LionSecurity/v7_0_0_LS";
import v1_7_0_LSP from "./Versions/Libraries/LionSpreadsheet/v1_7_0_LSP";
import v8_8_2_LBD from "./Versions/Libraries/LionDatabase/v8_8_2_LDB";
import v5_4_0_LR from "./Versions/Libraries/LionRequest/v5_4_0_LR";
import v1_0_0_LA from "./Versions/Libraries/LionAuthentication/v1_0_0_LA";
import v1_CMMD from "./Versions/Commands/v1_CMMD";

export default function Content() {
  return {
    framework: {
      v1: {
        docs: v1_FRM(),
        commands: v1_CMMD(),
      },
    },
    libraries: {
      lion: {
        database: {
          title: "lion-packages/database",
          url: "/libraries/lion/database/index",
          component: (
            <Library
              title={"lion-packages/database"}
              library={"database"}
              url_github={"https://github.com/lion-packages/database"}
              command={"composer require lion/database"}
              changelog={false}
            />
          ),
          description:
            "Package responsible for generating and executing MySQL processes",
          class: {
            "v8.8.2": v8_8_2_LBD(),
          },
        },
        authentication: {
          title: "lion-packages/authentication",
          url: "/libraries/lion/authentication/index",
          component: (
            <Library
              title={"lion-packages/authentication"}
              library={"authentication"}
              url_github={"https://github.com/lion-packages/authentication"}
              command={"composer require lion/authentication"}
              changelog={false}
            />
          ),
          description: "Library to authenticate users in 2 steps",
          class: {
            "v1.0.0": v1_0_0_LA(),
          },
        },
        files: {
          title: "lion-packages/files",
          url: "/libraries/lion/files/index",
          changelog: true,
          component: (
            <Library
              title={"lion-packages/files"}
              library={"files"}
              url_github={"https://github.com/lion-packages/files"}
              command={"composer require lion/files"}
              changelog={false}
            />
          ),
          description:
            "Library created with the function of working internal system files",
          class: {
            "v4.11.0": v4_11_0_LF(),
          },
        },
        helpers: {
          title: "lion-packages/helpers",
          url: "/libraries/lion/helpers/index",
          changelog: true,
          component: (
            <Library
              title={"lion-packages/helpers"}
              library={"helpers"}
              url_github={"https://github.com/lion-packages/helpers"}
              command={"composer require lion/helpers"}
              changelog={false}
            />
          ),
          description: "Easy to use helpers for any type of use",
          class: {
            "v2.3.0": v2_3_0_LH(),
          },
        },
        request: {
          title: "lion-packages/request",
          url: "/libraries/lion/request/index",
          changelog: true,
          component: (
            <Library
              title={"lion-packages/request"}
              library={"request"}
              url_github={"https://github.com/lion-packages/request"}
              command={"composer require lion/request"}
              changelog={false}
            />
          ),
          description:
            "Library created to request input data and response requests",
          class: {
            "v5.4.0": v5_4_0_LR(),
          },
        },
        mailer: {
          title: "lion-packages/mailer",
          url: "/libraries/lion/mailer/index",
          changelog: true,
          component: (
            <Library
              title={"lion-packages/mailer"}
              library={"mailer"}
              url_github={"https://github.com/lion-packages/mailer"}
              command={"composer require lion/mailer"}
              changelog={false}
            />
          ),
          description:
            "Library created to facilitate sending email based on different services",
          class: {
            "v5.1.0": v5_1_0_LM(),
          },
        },
        route: {
          title: "lion-packages/route",
          url: "/libraries/lion/route/index",
          changelog: true,
          component: (
            <Library
              title={"lion-packages/route"}
              library={"route"}
              url_github={"https://github.com/lion-packages/route"}
              command={"composer require lion/route"}
              changelog={false}
            />
          ),
          description:
            "This library has a quick use of the router with regular expressions based on mrjgreen's phroute",
          class: {
            "v8.7.0": v8_7_0_LRT(),
          },
        },
        security: {
          title: "lion-packages/security",
          url: "/libraries/lion/security/index",
          changelog: true,
          component: (
            <Library
              title={"lion-packages/security"}
              library={"security"}
              url_github={"https://github.com/lion-packages/security"}
              command={"composer require lion/security"}
              changelog={false}
            />
          ),
          description:
            "Library created with the function of implementing AES, RSA and JWT Security functions for PHP",
          class: {
            "v7.0.0": v7_0_0_LS(),
          },
        },
        spreadsheet: {
          title: "lion-packages/spreadsheet",
          url: "/libraries/lion/spreadsheet/index",
          changelog: true,
          component: (
            <Library
              title={"lion-packages/spreadsheet"}
              library={"spreadsheet"}
              url_github={"https://github.com/lion-packages/spreadsheet"}
              command={"composer require lion/spreadsheet"}
              changelog={false}
            />
          ),
          description: "Library for easy spreadsheet use.",
          class: {
            "v1.7.0": v1_7_0_LSP(),
          },
        },
      },
    },
  };
}
