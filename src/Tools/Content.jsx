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
import v1_4_0, {
  v1_4_0_CHANGELOG,
} from "./Versions/Libraries/LionSpreadsheet/v1_4_0";
import v6_4_0, { v6_4_0_CHANGELOG } from "./Versions/Libraries/LionSQL/v6_4_0";

export default {
  libraries: {
    lion: {
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
    external: {
      title: "Libraries",
      url: "/libraries/lion/helpers",
      description: "Easy to use helpers for any type of use.",
      class: {},
    },
  },
};
