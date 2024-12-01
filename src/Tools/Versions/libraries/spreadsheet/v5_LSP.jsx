import CodeBlock from "../../../../pages/components/CodeBlock";
import Description from "../../../../pages/components/Description";
import { Fragment } from "react";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import { Alert, ListGroup } from "react-bootstrap";
import Title from "../../../../pages/components/Title";
import Example from "../../../../pages/components/Example";
import SupportVersion from "../../../../pages/components/SupportVersion";

export default function v5_LSP() {
  return {
    "getting-started": {
      name: "Getting started",
      type: "sub_modules",
      list: {
        "about-as": {
          name: "About us",
          code: (
            <Fragment>
              <Title title={"About us"} />

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <Description
                description={"Library to facilitate the use of spreadsheet."}
              />
            </Fragment>
          ),
        },
        install: {
          name: "Install",
          code: (
            <Fragment>
              <Title title={"Install"} />

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <SupportVersion title={"Lion-Command"} version={"8.4"} />

              <CodeBlock
                language={"bash"}
                content={
                  "composer require phpoffice/phpspreadsheet lion/spreadsheet"
                }
              />
            </Fragment>
          ),
        },
      },
    },
    spreadsheet: {
      name: "Spreadsheet::class",
      type: "sub_modules",
      list: {
        "add-alignment-horizontal": {
          name: "addAlignmentHorizontal",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Spreadsheet"}
                methodName={"addAlignmentHorizontal"}
              />

              <Description
                description={
                  "The addAlignmentHorizontal function aligns one or more columns horizontally."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

(new Spreadsheet())->addAlignmentHorizontal('A1:C1', 'center');
`}
              />
            </Fragment>
          ),
        },
        "add-background": {
          name: "addBackground",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Spreadsheet"}
                methodName={"addBackground"}
              />

              <Description
                description={
                  "The addBackground function adds a background color to one or more cells."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

(new Spreadsheet())->addBackground('A1', '000000');
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use LionSpreadsheet\\Spreadsheet;
use PhpOffice\\PhpSpreadsheet\\Style\\Fill;

(new Spreadsheet())->addBackground(
	'A1',
	'000000',
	Fill::FILL_GRADIENT_LINEAR // default Fill::FILL_SOLID
);
`}
              />
            </Fragment>
          ),
        },
        "add-bold": {
          name: "addBold",
          code: (
            <Fragment>
              <LibraryTitle className={"Spreadsheet"} methodName={"addBold"} />

              <Description
                description={
                  "The addBold function adds bold in one or more columns."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

(new Spreadsheet())->addBold('A1');
`}
              />
            </Fragment>
          ),
        },
        "add-border": {
          name: "addBorder",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Spreadsheet"}
                methodName={"addBorder"}
              />

              <Description
                description={
                  "The addBorder function adds borders over one cell or more."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;
use PhpOffice\\PhpSpreadsheet\\Style\\Border;

(new Spreadsheet())->addBorder('A1', Border::BORDER_THIN, '000000');
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use LionSpreadsheet\\Spreadsheet;
use PhpOffice\\PhpSpreadsheet\\Style\\Border;

(new Spreadsheet())->addBorder('A1:C1', Border::BORDER_THIN, '000000');
`}
              />
            </Fragment>
          ),
        },
        "add-color": {
          name: "addColor",
          code: (
            <Fragment>
              <LibraryTitle className={"Spreadsheet"} methodName={"addColor"} />

              <Description
                description={
                  "The addColor function adds color to the font of one cell or more."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

(new Spreadsheet())->addColor('A1', '000000');
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use LionSpreadsheet\\Spreadsheet;

(new Spreadsheet())->addColor('A1', 'FFFFFF');
`}
              />
            </Fragment>
          ),
        },
        "add-data-validation": {
          name: "addDataValidation",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Spreadsheet"}
                methodName={"addDataValidation"}
              />

              <Description
                description={
                  "The addDataValidation function adds a data validation."
                }
              />

              <ListGroup className="mb-3">
                <ListGroup.Item variant="dark">
                  - The <strong>worksheet</strong> property defines which
                  worksheet the validation data will be applied to, if not
                  defined the
                  <strong>worksheet</strong> property defaults to the first
                  worksheet.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  - The <strong>column</strong> property defines the column to
                  select.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  - The <strong>start</strong> property defines from the row
                  number where the reading starts.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  - The <strong>end</strong> property defines where the row
                  number ends the reading.
                </ListGroup.Item>
              </ListGroup>

              <Example
                number={1}
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

(new Spreadsheet())->addDataValidation(['A1'], [
	'error_title' => 'Username',
	'error_message' => 'You must select a username',
	'column' => 'E',
	'start' => 2,
	'end' => 10
]);
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use LionSpreadsheet\\Spreadsheet;

(new Spreadsheet())->addDataValidation(['A1'], [
	'error_title' => 'Username',
	'error_message' => 'You must select a username',
	'worksheet' => 'DATA',
	'column' => 'E',
	'start' => 2,
	'end' => 10
]);
`}
              />
            </Fragment>
          ),
        },
        "change-worksheet": {
          name: "changeWorksheet",
          code: (
            <Fragment>
              <LibraryTitle
                className={"Spreadsheet"}
                methodName={"changeWorksheet"}
              />

              <Description
                description={
                  "The getCell function allows you to obtain the value of a row with a column."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

(new Spreadsheet())->changeWorksheet('ANOTHER_WORKSHEET');
`}
              />
            </Fragment>
          ),
        },
        download: {
          name: "download",
          code: (
            <Fragment>
              <LibraryTitle className={"Spreadsheet"} methodName={"download"} />

              <Description
                description={
                  "The download function will automatically download the stored spreadsheet."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

(new Spreadsheet())->download('my_path', 'file_name');
`}
              />
            </Fragment>
          ),
        },
        load: {
          name: "load",
          code: (
            <Fragment>
              <LibraryTitle className={"Spreadsheet"} methodName={"load"} />

              <Description
                description={
                  "The load function allows you to open a spreadsheet file."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

(new Spreadsheet())->load('myroute/file.xlsx');
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use LionSpreadsheet\\Spreadsheet;

(new Spreadsheet())->load('myroute/file.xlsx', 'worksheet_name');
`}
              />
            </Fragment>
          ),
        },
        "get-cell": {
          name: "getCell",
          code: (
            <Fragment>
              <LibraryTitle className={"Spreadsheet"} methodName={"getCell"} />

              <Description
                description={
                  "The getCell function allows you to obtain the value of a row with a column."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

$cell = (new Spreadsheet())->getCell('A1');

var_dump($cell);
`}
              />
            </Fragment>
          ),
        },
        "set-cell": {
          name: "setCell",
          code: (
            <Fragment>
              <LibraryTitle className={"Spreadsheet"} methodName={"setCell"} />

              <Description
                description={
                  "The setCell function allows you to change the value of a row with a column."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

(new Spreadsheet())->setCell('A1', 'Sergio Leon');
`}
              />
            </Fragment>
          ),
        },
        save: {
          name: "save",
          code: (
            <Fragment>
              <LibraryTitle className={"Spreadsheet"} methodName={"save"} />

              <Description
                description={
                  "The save function generates a copy of the loaded file."
                }
              />
              <Example
                number={1}
                language={"php"}
                content={`<?php

use Lion\\Spreadsheet\\Spreadsheet;

(new Spreadsheet())->save();
`}
              />
              <Example
                number={2}
                language={"php"}
                content={`<?php

use LionSpreadsheet\\Spreadsheet;

(new Spreadsheet())->save('/my_path');
`}
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
