import v2_1_2, {
  v2_1_2_CHANGELOG,
} from "./Versions/Libraries/LionHelpers/v2_1_2";
import v8_1_0, {
  v8_1_0_CHANGELOG,
} from "./Versions/Libraries/LionRoute/v8_1_0";
import v1_4_0 from "./Versions/Libraries/LionSpreadsheet/v1_4_0";

export default {
  libraries: {
    lion: {
      spreadsheet: {
        title: "LION-SPREADSHEET",
        url: "/libraries/lion/spreadsheet/index",
        description: "Library for easy spreadsheet use.",
        class: {
          "v1.4.0": v1_4_0(),
        },
        changelod: {
          "v1.4.0": {},
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
