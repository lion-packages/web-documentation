import v1_FRM from "./Versions/Framework/v1_FRM";
import v1_LA from "./Versions/libraries/authentication/v1_LA";
import v1_CMMD from "./Versions/Commands/v1_CMMD";
import v3_CMD from "./Versions/libraries/command/v3_CMD";
import v8_LBD from "./Versions/libraries/database/v8_LDB";
import v1_LDI from "./Versions/libraries/dependency-injection/v1_LDI";
import v4_LF from "./Versions/libraries/files/v4_LF";
import v2_LH from "./Versions/libraries/helpers/v2_LH";
import v5_LR from "./Versions/libraries/request/v5_LR";
import v5_LM from "./Versions/libraries/mailer/v5_LM";
import v8_LRT from "./Versions/libraries/route/v8_LRT";
import v7_LS from "./Versions/libraries/security/v7_LS";
import v1_LSP from "./Versions/libraries/spreadsheet/v1_LSP";
import v1_LT from "./Versions/libraries/test/v1_LT";
import v2_FRM from "./Versions/Framework/v2_FRM";
import v2_CMMD from "./Versions/Commands/V2_CMMD";

export default function Content() {
  return {
    framework: {
      v2: {
        docs: v2_FRM(),
        commands: v2_CMMD(),
      },
      v1: {
        docs: v1_FRM(),
        commands: v1_CMMD(),
      },
    },
    library: {
      authentication: {
        v1: v1_LA(),
      },
      command: {
        v3: v3_CMD(),
      },
      database: {
        v8: v8_LBD(),
      },
      "dependency-injection": {
        v1: v1_LDI(),
      },
      files: {
        v4: v4_LF(),
      },
      helpers: {
        v2: v2_LH(),
      },
      mailer: {
        v5: v5_LM(),
      },
      request: {
        v5: v5_LR(),
      },
      route: {
        v8: v8_LRT(),
      },
      security: {
        v7: v7_LS(),
      },
      spreadsheet: {
        v1: v1_LSP(),
      },
      test: {
        v1: v1_LT(),
      },
    },
  };
}
