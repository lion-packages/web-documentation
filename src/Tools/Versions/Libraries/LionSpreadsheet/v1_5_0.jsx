import { Badge } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";

export function v1_5_0_CHANGELOG() {
  return {};
}

export default function v1_5_0() {
  return {
    spreadsheet: {
      title: "LionSpreadsheet\\Spreadsheet",
      description:
        "The spreadsheet class allows you to load and modify spreadsheets.",
      url: "/libraries/lion/spreadsheet/item_version/spreadsheet/load-excel",
      methods: {
        "load-excel": {
          title: "Spreadsheet::loadExcel",
          description:
            "The `loadExcel` function allows you to open a spreadsheet file.",
          link: "load-excel",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSpreadsheet\\Spreadsheet;\n\n" +
                    "Spreadsheet::loadExcel('myroute/file.xlsx');"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSpreadsheet\\Spreadsheet;\n\n" +
                    "//upload spreadsheet to a specific sheet\n" +
                    "Spreadsheet::loadExcel('myroute/file.xlsx', 'worksheet_name');"
                  }
                />
              </div>
            </>
          ),
        },
        "set-cell": {
          title: "Spreadsheet::setCell",
          description:
            "The `setCell` function allows you to change the value of a row with a column.",
          link: "set-cell",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionSpreadsheet\\Spreadsheet;\n\n" +
                "Spreadsheet::setCell('A1', 'Sergio');\n" +
                "Spreadsheet::setCell('B1', 'Leon');\n" +
                "Spreadsheet::setCell('C1', 'Sergio@gmail.com');\n" +
                "Spreadsheet::setCell('D1:E1', 'Sergio Leon');"
              }
            />
          ),
        },
        "get-cell": {
          title: "Spreadsheet::getCell",
          description:
            "The `getCell` function allows you to obtain the value of a row with a column.",
          link: "get-cell",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionSpreadsheet\\Spreadsheet;\n\n" +
                "Spreadsheet::getCell('A1');\n" +
                "Spreadsheet::getCell('B1');\n" +
                "Spreadsheet::getCell('C1');"
              }
            />
          ),
        },
        "change-worksheet": {
          title: "Spreadsheet::changeWorksheet",
          description:
            "The `getCell` function allows you to obtain the value of a row with a column.",
          link: "change-worksheet",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionSpreadsheet\\Spreadsheet;\n\n" +
                "Spreadsheet::changeWorksheet('ANOTHER_WORKSHEET');\n"
              }
            />
          ),
        },
        "save-excel": {
          title: "Spreadsheet::saveExcel",
          description:
            "the `saveExcel` function generates a copy of the loaded file.",
          link: "save-excel",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionSpreadsheet\\Spreadsheet;\n\n" +
                "Spreadsheet::saveExcel('my_path');\n"
              }
            />
          ),
        },
        "add-alignment-horizontal": {
          title: "Spreadsheet::addAlignmentHorizontal",
          description:
            "The `addAlignmentHorizontal` function aligns one or more columns horizontally.",
          link: "add-alignment-horizontal",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionSpreadsheet\\Spreadsheet;\n\n" +
                "Spreadsheet::addAlignmentHorizontal('A1:C1', 'center');\n"
              }
            />
          ),
        },
        "add-border": {
          title: "Spreadsheet::addBorder",
          description:
            "The `addBorder` function adds borders over one cell or more.",
          link: "add-border",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSpreadsheet\\Spreadsheet;\n" +
                    "use PhpOffice\\PhpSpreadsheet\\Style\\Border;\n\n" +
                    "Spreadsheet::addBorder('A1', Border::BORDER_THIN, '000000');\n"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSpreadsheet\\Spreadsheet;\n" +
                    "use PhpOffice\\PhpSpreadsheet\\Style\\Border;\n\n" +
                    "Spreadsheet::addBorder('A1:C1', Border::BORDER_THIN, '000000');\n"
                  }
                />
              </div>
            </>
          ),
        },
        "add-bold": {
          title: "Spreadsheet::addBold",
          description:
            "The `addBold` function adds bold in one or more columns.",
          link: "add-bold",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionSpreadsheet\\Spreadsheet;\n\n" +
                "Spreadsheet::addBold('A1');\n"
              }
            />
          ),
        },
        "add-color": {
          title: "Spreadsheet::addColor",
          description:
            "The `addColor` function adds color to the font of one cell or more.",
          link: "add-color",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSpreadsheet\\Spreadsheet;\n\n" +
                    "Spreadsheet::addColor('A1', '000000');\n"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSpreadsheet\\Spreadsheet;\n\n" +
                    "Spreadsheet::addColor('A1', 'FFFFFF');\n"
                  }
                />
              </div>
            </>
          ),
        },
        "add-background": {
          title: "Spreadsheet::addBackground",
          description:
            "The `add Background` function adds a background color to one or more cells.",
          link: "add-background",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSpreadsheet\\Spreadsheet;\n\n" +
                    "Spreadsheet::addBackground('A1', '000000');\n"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSpreadsheet\\Spreadsheet;\n\n" +
                    "Spreadsheet::addBackground(\n\t'A1',\n\t'000000',\n\tFill::FILL_GRADIENT_LINEAR // default Fill::FILL_SOLID\n);\n"
                  }
                />
              </div>
            </>
          ),
        },
        "add-data-validation": {
          title: "Spreadsheet::addDataValidation",
          description:
            "The `addDataValidation` function adds a data validation.",
          link: "add-data-validation",
          code: (
            <>
              <div className="mb-3">
                <p>
                  - The <Badge bg="secondary">worksheet</Badge> property defines
                  which worksheet the validation data will be applied to, if not
                  defined the
                  <Badge bg="secondary">worksheet</Badge> property defaults to
                  the first worksheet.
                </p>

                <p>
                  - The <Badge bg="secondary">column</Badge> property defines
                  the column to select.
                </p>

                <p>
                  - The <Badge bg="secondary">start</Badge> property defines
                  from the row number where the reading starts.
                </p>

                <p>
                  - The <Badge bg="secondary">end</Badge> property defines where
                  the row number ends the reading.
                </p>
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSpreadsheet\\Spreadsheet;\n\n" +
                    "Spreadsheet::addDataValidation(['A1'], [\n" +
                    "\t'error_title' => 'Username',\n" +
                    "\t'error_message' => 'You must select a username',\n" +
                    "\t'column' => 'E',\n" +
                    "\t'start' => 2,\n" +
                    "\t'end' => 10\n" +
                    "]);"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSpreadsheet\\Spreadsheet;\n\n" +
                    "Spreadsheet::addDataValidation(['A1'], [\n" +
                    "\t'error_title' => 'Username',\n" +
                    "\t'error_message' => 'You must select a username',\n" +
                    "\t'worksheet' => 'DATA',\n" +
                    "\t'column' => 'E',\n" +
                    "\t'start' => 2,\n" +
                    "\t'end' => 10\n" +
                    "]);"
                  }
                />
              </div>
            </>
          ),
        },
      },
    },
  };
}
