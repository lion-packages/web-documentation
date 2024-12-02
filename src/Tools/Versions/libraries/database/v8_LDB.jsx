import { Alert, ListGroup } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Description from "../../../../pages/components/Description";
import Example from "../../../../pages/components/Example";
import { Fragment } from "react";
import EquivalentTo from "../../../../pages/components/EquivalentTo";
import ExampleTitle from "../../../../pages/components/ExampleTitle";
import Title from "../../../../pages/components/Title";
import SupportVersion from "../../../../pages/components/SupportVersion";

const args = [
  {
    key: "type",
    desc: '["enum", "char", "nchar", "nvarchar", "varchar", "longtext", "mediumtext", "text", "tinytext", "blob", "varbinary", "date", "time", "timestamp", "datetime", "int", "bigint", "decimal", "double", "float", "mediumint", "real", "smallint", "tinyint"]',
  },
  {
    key: "primary-key",
    desc: "true|false",
  },
  {
    key: "foreign-key",
    desc: "['table' => 'users', 'column' => 'idusers']",
  },
  {
    key: "lenght",
    desc: "any integer numeric value (110, 5, 45, 255)",
  },
  {
    key: "null",
    desc: "true|false",
  },
  {
    key: "auto-increment",
    desc: "true|false",
  },
  {
    key: "default",
    desc: "by default adds a NULL value, this does not apply to columns of type `primery-key`",
  },
  {
    key: "comment",
    desc: "allows adding a comment to a column",
  },
  {
    key: "unique",
    desc: "true|false",
  },
  {
    key: "options",
    desc: "this attribute belongs to `enum` type columns, an array with the parameters must be passed (['ON', 'OFF'])",
  },
];

export default function v8_LBD() {
  return {
    "getting-started": {
      name: "Getting started",
      type: "sub_modules",
      list: {
        "about-as": {
          name: "About us",
          code: (
            <>
              <div className="mb-3">
                <h3>About us</h3>

                <hr />
              </div>

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <p className="fs-6">
                Package responsible for generating and executing statements for
                databases (MySQL).
              </p>
            </>
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

              <SupportVersion title={"Lion-Database"} version={"8.2"} />

              <CodeBlock
                language={"bash"}
                content={"composer require lion/database"}
              />
            </Fragment>
          ),
        },
      },
    },
    driver: {
      name: "Driver::class",
      type: "sub_modules",
      list: {
        run: {
          name: "run",
          code: (
            <Fragment>
              <LibraryTitle className="Driver" methodName="run" />

              <Description
                description={
                  "The connection is established using an array containing data about your configuration to connect, currently only available with MySQL."
                }
              />

              <Description
                description={
                  "To establish the connection to the database, two priorities are required:"
                }
              />

              <ListGroup className="mb-3">
                <ListGroup.Item variant="dark">
                  <strong>- default: </strong>is the property that defines the
                  connection to the database by default.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <strong>- connections: </strong>is the property that stores
                  the arrays with all the connections needed to connect to the
                  databases.
                </ListGroup.Item>
              </ListGroup>

              <CodeBlock
                language={"php"}
                content={`<?php

/**
* ------------------------------------------------------------------------------
* Start database service
* ------------------------------------------------------------------------------
* describe connections to establish connecting to multiple databases
* ------------------------------------------------------------------------------
*/

return [
    'default' => env->DB_NAME,
    'connections' => [
        env->DB_NAME => [
            'type' => env->DB_TYPE,
            'host' => env->DB_HOST,
            'port' => env->DB_PORT,
            'dbname' => env->DB_NAME,
            'user' => env->DB_USER,
            'password' => env->DB_PASSWORD,
        ],
    ],
];
`}
              />

              <p>
                The configuration it handles is an array of elements with
                parameters set by default.
              </p>

              <CodeBlock
                language="php"
                content={`[
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
]`}
              />

              <p>
                The configuration can be overridden and parameterized as
                required.
              </p>

              <CodeBlock
                language={"php"}
                content={`<?php

/**
* ------------------------------------------------------------------------------
* Start database service
* ------------------------------------------------------------------------------
* describe connections to establish connecting to multiple databases
* ------------------------------------------------------------------------------
*/

return [
    'default' => env->DB_NAME,
    'connections' => [
        env->DB_NAME => [
            'type' => env->DB_TYPE,
            'host' => env->DB_HOST,
            'port' => env->DB_PORT,
            'dbname' => env->DB_NAME,
            'user' => env->DB_USER,
            'password' => env->DB_PASSWORD,
            'config' => [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
            ]
        ],
    ],
];
`}
              />
            </Fragment>
          ),
        },
      },
    },
    mysql: {
      name: "MySQL::class",
      type: "sub_modules",
      list: {
        "get-connections": {
          name: "getConnections",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  MySQL::
                  <span className="text-lion-orange h3">getConnections()</span>
                </h3>

                <hr />
              </div>

              <p className="fs-6">
                The <strong>getConnections</strong> function returns an array
                with the information of the executed drivers.
              </p>

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$connections = DB::getConnections();

var_dump($connections);
`}
              />
            </>
          ),
        },
        connection: {
          name: "connection",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  MySQL::
                  <span className="text-lion-orange h3">connection()</span>
                </h3>

                <hr />
              </div>

              <p>
                The <strong>connection</strong> function allows you to select
                one of the connections established in the driver to execute a
                process in the database.
              </p>

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

DB::connection('second_connection')
    ->table('my_table')   
    ->select()    
    ->getAll();
`}
              />
            </>
          ),
        },
        "fetch-mode": {
          name: "fetchMode",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="fetchMode" />

              <Description
                description={
                  "The fetchMode function allows you to modify the setFetchMode."
                }
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('users')
    ->select()
    ->fetchMode(PDO::FETCH_ASSOC)
    ->getAll();

var_dump($data);
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use Class\\MyClass;

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

DB::table('users')
    ->select()
    ->fetchMode(PDO::FETCH_CLASS, MyClass::class)
    ->getAll();
`}
              />
            </Fragment>
          ),
        },
        query: {
          name: "query",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="query" />

              <Description
                description={
                  "The query function allows you to execute any query."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language={"sql"}
                  content={"DROP TABLE example_2023_05"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$response = DB::query('DROP TABLE example_2023_05')->execute();

var_dump($response);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock language={"sql"} content={"SELECT * FROM users"} />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::query('SELECT * FROM users')->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={3} />

                <CodeBlock
                  language={"sql"}
                  content={"SELECT * FROM users WHERE idusers=1"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::query('SELECT * FROM users WHERE idusers=1')->get();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        "get-query-string": {
          name: "getQueryString",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"getQueryString"} />

              <Description
                description={
                  "The getQueryString function returns the string generated in the current statement."
                }
              />

              <CodeBlock language={"sql"} content={"SELECT * FROM users"} />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$query = DB::table('users')->select()->getQueryString();

var_dump($query);
`}
              />
            </Fragment>
          ),
        },
        operators: {
          name: "operators",
          code: (
            <Fragment>
              <Title title={"Operators"} />

              <Description
                description={"Operator functions available in Lion-Database."}
              />

              <Fragment>
                <div className="mb-3">
                  <h5>equalTo</h5>
                </div>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM users WHERE column = ?"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('users')->select()->where(DB::equalTo('column'), 'Sleon');"
                  }
                />
              </Fragment>

              <Fragment>
                <div className="mb-3">
                  <h5>notEqualTo</h5>
                </div>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column <> ?"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::notEqualTo('column'), 'Sleon');"
                  }
                />
              </Fragment>

              <Fragment>
                <div className="mb-3">
                  <h5>greaterThan</h5>
                </div>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column > ?"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::greaterThan('column'), 'Sleon');"
                  }
                />
              </Fragment>

              <Fragment>
                <div className="mb-3">
                  <h5>lessThan</h5>
                </div>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column < ?"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::lessThan('column'), 'Sleon');"
                  }
                />
              </Fragment>

              <Fragment>
                <div className="mb-3">
                  <h5>greaterThanOrEqualTo</h5>
                </div>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column >= ?"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::greaterThanOrEqualTo('column'), 'Sleon');"
                  }
                />
              </Fragment>

              <Fragment>
                <div className="mb-3">
                  <h5>lessThanOrEqualTo</h5>
                </div>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column <= ?"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::lessThanOrEqualTo('column'), 'Sleon');"
                  }
                />
              </Fragment>
            </Fragment>
          ),
        },
        end: {
          name: "end",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="end" />

              <Description
                description={
                  "The end function allows you to nest a delimiter to the current statement."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language={"sql"}
                  content={`INSERT INTO my_table (name) VALUES (?); 
INSERT INTO my_table (name) VALUES (?)`}
                />

                <EquivalentTo />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->insert(['name' => 'Sleon'])->end()\n" +
                    "\t->table('my_table')->insert(['name' => 'Sleon'])\n" +
                    "\t->execute();"
                  }
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language={"sql"}
                  content={`SELECT * FROM my_table; 
SELECT * FROM my_table_second`}
                />

                <EquivalentTo />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->end()\n" +
                    "\t->table('my_table')->select()\n" +
                    "\t->getAll();"
                  }
                />
              </Fragment>
            </Fragment>
          ),
        },
        insert: {
          name: "insert",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="insert" />

              <Description
                description={
                  <Fragment>
                    The <strong>insert</strong> function executes an insert
                    statement in the database to a given table.
                  </Fragment>
                }
              />

              <CodeBlock
                language="sql"
                content={
                  "INSERT INTO my_table ('name', 'lastname') VALUES (?,?)"
                }
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$response = DB::table('my_table')
    ->insert([
        'name' => 'Sergio',
        'lastname' => 'Leon'
    ])
    ->execute();

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        bulk: {
          name: "bulk",
          code: (
            <>
              <div className="mb-3">
                <h3>
                  MySQL::<span className="text-lion-orange h3">bulk()</span>
                </h3>

                <hr />
              </div>

              <p className="fs-6">
                The <strong>bulk</strong> function allows you to insert data in
                bulk.
              </p>

              <CodeBlock
                language="sql"
                content={
                  "INSERT INTO my_table ('name', 'lastname') VALUES (?,?), (?,?), (?,?), (?,?)"
                }
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php
                  
use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$response = DB::table('my_table')->bulk(['name', 'lastname'], [
    ['Sergio',  'Leon'],
    ['Emmanuel','Hernandez'],
    ['Santiago','Ospina'],
    ['Santiago','Correa'],
])->execute();

var_dump($response);
`}
              />
            </>
          ),
        },
        select: {
          name: "select",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="select" />

              <Description
                description={
                  <Fragment>
                    The <strong>between</strong> function nests the `sql`
                    statement in the current query.
                  </Fragment>
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock language="sql" content={"SELECT * FROM my_table"} />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')->select()->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT alias.column1, column2, column3, alias.column4 FROM my_table AS alias"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table(DB::as('my_table', 'alias'))
    ->select(
        DB::column('column1', 'alias'),
        DB::column('column2'),
        DB::column('column3'),
        DB::column('column4', 'alias'),
    )
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        "group-query": {
          name: "groupQuery",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="groupQuery" />

              <Description
                description={
                  "The groupQuery function allows grouping of subqueries."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock language={"sql"} content={"(SELECT * FROM users)"} />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php
                  
use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::groupQuery(function(DB $db) {
    $db->table('users')->select();
})->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language={"sql"}
                  content={
                    "(SELECT * FROM users) UNION ALL (SELECT * FROM users_second)"
                  }
                />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::groupQuery(fn(DB $db) => $db->table('users')->select())
    ->unionAll()
    ->groupQuery(fn(DB $query) => $query->table('users_second')->select())
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        with: {
          name: "with",
          code: (
            <>
              <LibraryTitle className={"MySQL"} methodName={"with"} />

              <Description
                description={
                  "The with function is appended to the current statement or returns the WITH statement as a string."
                }
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

DB::with(true);
                `}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

DB::with()->recursive(...);
                `}
              />
            </>
          ),
        },
        recursive: {
          name: "recursive",
          code: (
            <>
              <LibraryTitle className={"MySQL"} methodName={"recursive"} />

              <Description
                description={
                  "The recursive function is appended to the current statement or returns the RECURSIVE statement as a string."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

DB::with()
    ->recursive('example_recursive')
    ->groupQuery(...);
`}
              />
            </>
          ),
        },
        "select-distinct": {
          name: "selectDistinct",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"selectDistinct"} />

              <Description
                description={
                  "The selectDistinct function nests the sql statement in the current query."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={"SELECT DISTINCT column1, column2 FROM my_table"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
->selectDistinct('column1', 'column2')
->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT DISTINCT alias.column1, column2, column3, alias.column4 FROM my_table AS alias"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table(DB::as('my_table', 'alias'))
->selectDistinct(
DB::column('column1', 'alias'),
DB::column('column2'),
DB::column('column3'),
DB::column('column4', 'alias')
)
->getAll();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        concat: {
          name: "concat",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"concat"} />

              <Description
                description={
                  "The concat function nests the sql statement in the current query and returns a CONCAT string."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={"SELECT CONCAT(name, ' ', lastname) FROM users"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    `DB::table('users')\n\t->select(DB::concat(DB::column('name'), '" "', DB::column('lastname')))\n\t->getAll();`
                  }
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT CONCAT(usr.name, ' ', usr.lastname) AS fullname FROM users AS usr"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table(DB::as('users', 'usr'))\n" +
                    "\t->select(\n" +
                    "\t\tDB::as(\n" +
                    `\t\t\tDB::concat(DB::column('name', 'usr'), '" "', DB::column('lastname', 'usr')), \n\t\t\t"fullname"\n` +
                    "\t\t)\n" +
                    "\t)\n" +
                    "\t->getAll();"
                  }
                />
              </Fragment>
            </Fragment>
          ),
        },
        union: {
          name: "union",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"union"} />

              <Description
                description={
                  "The union function nests the sql statement in the current query."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={
                    "(SELECT * FROM my_table) UNION (SELECT * FROM my_table2)"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')->select()
    ->union()->table('my_table2')->select()
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language={"sql"}
                  content={
                    "(SELECT * FROM users) UNION (SELECT * FROM users_second)"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::groupQuery(fn (DB $query) => $query->table('users')->select())
    ->union()->groupQuery(fn (DB $query) => $query->table('users_second')->select())
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        "union-all": {
          name: "unionAll",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"unionAll"} />

              <Description
                description={
                  "The unionAll function nests the sql statement in the current query."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT * FROM my_table UNION ALL SELECT * FROM my_table2"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')->select()
    ->unionAll()->table('my_table2')->select()
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language={"sql"}
                  content={
                    "(SELECT * FROM users) UNION ALL (SELECT * FROM users_second)"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::groupQuery(fn (DB $query) => $query->table('users')->select())
    ->unionAll()->groupQuery(fn (DB $query) => $query->table('users_second')->select())
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        between: {
          name: "between",
          code: (
            <>
              <LibraryTitle className={"MySQL"} methodName={"between"} />

              <Description
                description={
                  "The between function nests the sql statement in the current query."
                }
              />

              <Fragment>
                <CodeBlock
                  language="sql"
                  content={
                    "SELECT * FROM my_table WHERE date BETWEEN '2022-11-01' AND '2022-11-04'"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select()
    ->where('date')->between('2022-11-01', '2022-11-04')
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>
            </>
          ),
        },
        like: {
          name: "like",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"like"} />

              <Description
                description={
                  "The like function nests the sql statement in the current query."
                }
              />

              <CodeBlock
                language="sql"
                content={
                  "SELECT * FROM my_table WHERE column1 LIKE '%my_text%'"
                }
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select()
    ->where('column1')->like('%my_text%')
    ->getAll();

var_dump($data);
`}
              />
            </Fragment>
          ),
        },
        join: {
          name: "join",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"join"} />

              <Description
                description={
                  "The function is nested to the sql statement in the current query."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={`SELECT my_table_1.id, my_table_2.name FROM table1 AS my_table_1
    JOIN table2 AS my_table_2 ON my_table_1.id=my_table_2.id`}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table(DB::as('table1', 'my_table_1'))
    ->select(
        DB::column('id', 'my_table_1')
    )->join(
        DB::as('table12', 'my_table_2'), 
        DB::column('id', 'my_table_1'), 
        DB::column('id', 'my_table_2'), 
    )
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT my_table_1.id, my_table_2.name FROM table1 AS my_table_1 \n" +
                    "\tINNER JOIN table2 AS my_table_2 ON my_table_1.id=my_table_2.id"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table(DB::as('table1', 'my_table_1'))
    ->select(
        DB::column('id', 'my_table_1')
    )
    ->inner()->join(
        DB::as('table12', 'my_table_2'), 
        DB::column('id', 'my_table_1'), 
        DB::column('id', 'my_table_2'), 
    )
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={3} />

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT my_table_1.id, my_table_2.name FROM table1 AS my_table_1 \n" +
                    "\tLEFT JOIN table2 AS my_table_2 ON my_table_1.id=my_table_2.id"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php
use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table(DB::as('table1', 'my_table_1'))
    ->select(
        DB::column('id', 'my_table_1')
    )
    ->left()->join(
        DB::as('table12', 'my_table_2'), 
        DB::column('id', 'my_table_1'), 
        DB::column('id', 'my_table_2'), 
    )
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={4} />

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT my_table_1.id, my_table_2.name FROM table1 AS my_table_1 \n" +
                    "\tRIGHT JOIN table2 AS my_table_2 ON my_table_1.id=my_table_2.id"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php
use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table(DB::as('table1', 'my_table_1'))
    ->select(
        DB::column('id', 'my_table_1')
    )
    ->right()->join(
        DB::as('table12', 'my_table_2'), 
        DB::column('id', 'my_table_1'), 
        DB::column('id', 'my_table_2'), 
    )
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        min: {
          name: "min",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"min"} />

              <Description
                description={
                  "The min function is nested in the current sql statement."
                }
              />

              <CodeBlock
                language="sql"
                content={"SELECT MIN(id) FROM my_table"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select(DB::min('id'))
    ->get();

var_dump($data);
                  `}
              />
            </Fragment>
          ),
        },
        max: {
          name: "max",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"max"} />

              <Description
                description={
                  "The max function is nested in the current sql statement."
                }
              />

              <CodeBlock
                language="sql"
                content={"SELECT MAX(id) FROM my_table"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select(DB::max('id'))
    ->get();

var_dump($data);
                  `}
              />
            </Fragment>
          ),
        },
        count: {
          name: "count",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"count"} />

              <Description
                description={
                  "The count function is added above the sql statement."
                }
              />

              <CodeBlock
                language="sql"
                content={"SELECT COUNT(*) FROM my_table"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select(DB::count('*'))
    ->get();

var_dump($data);
`}
              />
            </Fragment>
          ),
        },
        sum: {
          name: "sum",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"sum"} />

              <Description
                description={
                  "The sum function is added above the sql statement."
                }
              />

              <CodeBlock
                language="sql"
                content={"SELECT SUM(price) FROM my_table"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select(DB::sum('price'))
    ->get();

var_dump($data);
`}
              />
            </Fragment>
          ),
        },
        avg: {
          name: "avg",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"avg"} />

              <Description
                description={
                  "The avg function is added above the sql statement."
                }
              />

              <CodeBlock
                language="sql"
                content={"SELECT AVG(price) FROM my_table"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select(DB::avg('price'))
    ->get();

var_dump($data);
`}
              />
            </Fragment>
          ),
        },
        "order-by": {
          name: "orderBy",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"orderBy"} />

              <Description
                description={
                  "The orderBy function is nested in the current sql statement."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM my_table ORDER BY id, name"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select()->orderBy('id', 'name')->getAll();"
                }
              />
            </Fragment>
          ),
        },
        "group-by": {
          name: "groupBy",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"groupBy"} />

              <Description
                description={
                  "The groupBy function is nested in the current sql statement."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM my_table GROUP BY date_start, name"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('my_table')\n\t->select()\n\t->groupBy('date_start', 'name')\n\t->getAll();"
                }
              />
            </Fragment>
          ),
        },
        limit: {
          name: "limit",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"limit"} />

              <Description
                description={
                  "The limit function is nested in the current sql statement."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language={"sql"}
                  content={"SELECT * FROM my_table LIMIT 1"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->limit(1)->getAll();"
                  }
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language={"sql"}
                  content={"SELECT * FROM my_table LIMIT 0, 10"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->limit(0, 10)->AllAll();"
                  }
                />
              </Fragment>
            </Fragment>
          ),
        },
        offset: {
          name: "offset",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"offset"} />

              <Description
                description={
                  "The offset function is nested in the current sql statement."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM my_table LIMIT 100 OFFSET 100"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select()->limit(100)->offset(100)->getAll();"
                }
              />
            </Fragment>
          ),
        },
        having: {
          name: "having",
          code: (
            <>
              <LibraryTitle className={"MySQL"} methodName={"having"} />

              <Description
                description={
                  "The having function is nested in the current sql statement."
                }
              />

              <Fragment>
                <CodeBlock
                  language={"sql"}
                  content={"SELECT * FROM my_table HAVING id > 10"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select()
    ->having(DB::greaterThan('id'), 10)
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>
            </>
          ),
        },
        show: {
          name: "show",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"show"} />

              <Description
                description={
                  "The show function is nested in the current sql statement."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::show()->columns()->from('my_table')->getAll();

var_dump($data);
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::show()->tables()->from('database')->getAll();

var_dump($data);
`}
              />

              <Example
                number={3}
                language={"php"}
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')->showCreateTable()->get();

var_dump($data);
`}
              />

              <Example
                number={4}
                language={"php"}
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::show()->indexes()->from('my_table')->getAll();

var_dump($data);
`}
              />
            </Fragment>
          ),
        },
        full: {
          name: "full",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"full"} />

              <Description
                description={
                  "The full function is nested above the sql statement."
                }
              />

              <CodeBlock
                language="sql"
                content={"SHOW FULL COLUMNS FROM my_table"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::show()->full()->columns()->from('my_table')->getAll();"
                }
              />
            </Fragment>
          ),
        },
        from: {
          name: "from",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"from"} />

              <Description
                description={
                  "The from function is nested above the sql statement."
                }
              />

              <CodeBlock
                language="sql"
                content={"SHOW FULL COLUMNS FROM my_table"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::show()->full()->columns()->from('my_table')->getAll();

var_dump($data);
`}
              />
            </Fragment>
          ),
        },
        procedure: {
          name: "procedure",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"procedure"} />

              <Description
                description={
                  "The procedure function is nested in the sql statement."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={"SHOW PROCEDURE STATUS WHERE Db='my_database'"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::show()->procedure()->status()
    ->where(DB::equalTo('Db'), 'my_database')
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="sql"
                  content={"SHOW PROCEDURE STATUS WHERE Db='my_database'"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::connection('my_database')->show()->procedure()->status()
    ->where(DB::equalTo('Db'), 'my_database')
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        status: {
          name: "status",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"status"} />

              <Description
                description={
                  "The status function is nested in the sql statement."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={"SHOW PROCEDURE STATUS WHERE Db='my_database'"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::show()->procedure()->status()
    ->where(DB::equalTo('Db'), 'my_database')
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="sql"
                  content={"SHOW PROCEDURE STATUS WHERE Db='my_database'"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::connection('my_database')->show()->procedure()->status()
    ->where(DB::equalTo('Db'), 'my_database')
    ->getAll();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        create: {
          name: "create",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"create"} />

              <Description
                description={
                  "The create function is nested in the sql statement."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={"SHOW CREATE VIEW my_view"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->create()->view('my_view', true, true)->get();"
                  }
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="sql"
                  content={"SHOW CREATE VIEW my_database.my_view"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->create()->view('my_view', false, true)->get();"
                  }
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={3} />

                <CodeBlock
                  language="sql"
                  content={"SHOW CREATE VIEW my_view"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::connection('my_database')->show()->create()->view('my_view', true, true)->get();"
                  }
                />
              </Fragment>
            </Fragment>
          ),
        },
        where: {
          name: "where",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"where"} />

              <Description
                description={
                  "The where function is nested in the current sql statement."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT my_table.column1, my_table.column2 FROM table AS my_table WHERE my_table.column1=?"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table(DB::alias('table', 'my_table'))
    ->select(
        DB::alias('column1', 'my_table', true),
        DB::alias('column2', 'my_table', true),
    )
    ->where(DB::equalTo(DB::alias('column1', 'my_table', true)), 1)
    ->get();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="sql"
                  content={"SELECT column1, column2 FROM table WHERE column1=?"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php
                    
use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('table')
    ->select('column1', 'column2')
    ->where(DB::equalTo('column1'), 1)
    ->get();

var_dump($data);
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={3} />

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM my_table WHERE column1=?"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select()
    ->where(DB::equalTo('column1'), 1)
    ->get();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        and: {
          name: "and",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"and"} />

              <Description
                description={
                  "The and function is nested in the current sql statement."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM my_table WHERE id=? AND date=?"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select()
    ->where(DB::equalTo('id'), 1)
    ->and(DB::equalTo('date'), '2022-11-04')
    ->get();

var_dump($data);
  `}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT * FROM my_table WHERE id=1 AND date IS NOT NULL"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select()
    ->where(DB::equalTo('id'), 1)
    ->and('date')->isNotNull()
    ->get();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        or: {
          name: "or",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"or"} />

              <Description
                description={
                  "The or function is nested in the current sql statement."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM my_table WHERE id=? OR date=?"}
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select()
    ->where(DB::equalTo('id'), 1)
    ->or(DB::equalTo('date'), '2022-11-04')
    ->get();

var_dump($data);
  `}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT * FROM my_table WHERE id=1 OR date IS NOT NULL"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$data = DB::table('my_table')
    ->select()
    ->where(DB::equalTo('id'), 1)
    ->or('date')->isNotNull()
    ->get();

var_dump($data);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        update: {
          name: "update",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"update"} />

              <Description
                description={
                  "The update function is nested above the current sql statement."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"UPDATE table SET name=?, date=?, phone=? WHERE id=?"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$response = DB::table('my_table')
    ->update([
        'name' => 'Sergio',
        'date' => '1999-09-30',
        'phone' => '3159999999',
    ])
    ->where(DB::equalTo('id'), 1)
    ->execute();

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        delete: {
          name: "delete",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"delete"} />

              <Description
                description={
                  "The delete function is nested above the current sql statement."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"DELETE FROM my_table WHERE id=?"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$response = DB::table('my_table')
    ->delete()
    ->where(DB::equalTo('id'), 1)
    ->execute();

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        call: {
          name: "call",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"call"} />

              <Description
                description={
                  "The call function executes a stored procedure in the database."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"CALL name_procedure(?,?,?)"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$response = DB::call('name_procedure', [
    'Sergio',
    '1999-09-30',
    1,
])
    ->execute();

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        in: {
          name: "in",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"in"} />

              <Description
                description={
                  "The in function nests the required parameters to the current statement."
                }
              />

              <CodeBlock
                language={"sql"}
                content={
                  "UPDATE users SET name=?, last_name=? WHERE id IN(?,?,?,?)"
                }
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={`<?php

use LionDatabase\\Drivers\\MySQL\\MySQL as DB;

$response = DB::table('users')
    ->update([
        'name' => 'Sergio'
        'last_name' => 'Leon'
    ])
    ->where('id')->in(1, 2, 3, 4)
    ->execute();

var_dump($response);
`}
              />
            </Fragment>
          ),
        },
        "is-null": {
          name: "isNull",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"isNull"} />

              <Description
                description={
                  "The isNull function nests the IS NULL function to the current statement."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM users WHERE deleted_at IS NULL"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')->select()->where('deleted_at')->isNull()->getAll();"
                }
              />
            </Fragment>
          ),
        },
        "is-not-null": {
          name: "isNotNull",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"isNotNull"} />

              <Description
                description={
                  "The isNotNull function nests the IS NOT NULL function to the current statement."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM users WHERE deleted_at IS NOT NULL"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')->select()->where('deleted_at')->isNotNull()->getAll();"
                }
              />
            </Fragment>
          ),
        },
        day: {
          name: "day",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"day"} />

              <Description
                description={"The day function returns the mysql day function."}
              />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM users WHERE DAY(column_day)=?"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')\n\t->select()\n\t->where(DB::equalTo(DB::day('column_day')), '2023-05-02')\n\t->getAll();"
                }
              />
            </Fragment>
          ),
        },
        month: {
          name: "month",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"month"} />

              <Description
                description={
                  "The month function returns the mysql month function."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM users WHERE MONTH(column_month)=?"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')\n\t->select()\n\t->where(DB::equalTo(DB::month('column_month')), '2023-05-02')\n\t->getAll();"
                }
              />
            </Fragment>
          ),
        },
        year: {
          name: "year",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"year"} />

              <Description
                description={
                  "The year function returns the mysql year function."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM users WHERE YEAR(column_year)=?"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')\n\t->select()\n\t->where(DB::equalTo(DB::year('column_year')), '2023-05-02')\n\t->getAll();"
                }
              />
            </Fragment>
          ),
        },
        drop: {
          name: "drop",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"drop"} />

              <Description
                description={
                  "The drop function drops a table or view from the database."
                }
              />

              <CodeBlock
                language={"sql"}
                content={"DROP TABLE example_2023_05"}
              />

              <EquivalentTo />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('example_2023_05')\n\t->drop()\n\t->execute();"
                }
              />
            </Fragment>
          ),
        },
      },
    },
    "mysql-schema": {
      name: "Schema::class",
      type: "sub_modules",
      list: {
        create: {
          name: "create",
          code: (
            <Fragment>
              <LibraryTitle className={"Schema"} methodName={"create"} />

              <Description
                description={
                  "The create function creates tables in the database."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language={"sql"}
                  content={
                    "CREATE SCHEMA my_database DEFAULT CHARACTER SET UTF8 COLLATE UTF8_SPANISH_CI;"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\Schema;\n\n" +
                    "Schema::schema('my_database')->create()->execute(); // default: 'UTF8', 'UTF8_SPANISH_CI', 'INNODB'"
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\Schema;\n\n" +
                    "Schema::schema('my_database')->create('UTF8', 'UTF8_SPANISH_CI', 'INNODB')->execute();"
                  }
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language={"sql"}
                  content={
                    "USE `my_database`;\n\n" +
                    "DROP procedure IF EXISTS `my_procedure`;\n\n" +
                    "CREATE PROCEDURE `my_procedure` (\n" +
                    "\tIN _name VARCHAR(45),\n" +
                    "\tIN _lastname VARCHAR(45)\n" +
                    ")\n" +
                    "BEGIN \n" +
                    "\tINSERT INTO my_table (name,lastname) VALUES (_name,_lastname);\n" +
                    "END;"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\Schema;\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "Schema::procedure('my_procedure')\n" +
                    "\t->create()\n" +
                    "\t->groupQueryParams(function(Schema $schema) {\n" +
                    "\t\t$schema\n" +
                    "\t\t\t->in()->varchar('_name', 45)->end(',')\n" +
                    "\t\t\t->in()->varchar('_lastname', 45);\n" +
                    "\t})\n" +
                    "\t->groupQueryBegin(function(DB $db) {\n" +
                    "\t\t$db->table('my_table')\n" +
                    "\t\t\t->insert(['name' => '_name', 'lastname' => '_lastname'])\n" +
                    "\t\t\t->end();\n" +
                    "\t})\n" +
                    "\t->execute();"
                  }
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={3} />

                <CodeBlock
                  language={"sql"}
                  content={
                    "USE `my_database`;\n\n" +
                    "CREATE OR REPLACE VIEW `my_view` AS\n" +
                    "\tSELECT * FROM my_table"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\Schema;\n" +
                    "use LionDatabase\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "Schema::view('my_view')\n" +
                    "\t->create()\n" +
                    "\t->groupQuery(function(DB $db) {\n" +
                    "\t\t$db->table('my_table')->select();\n" +
                    "\t})\n" +
                    "\t->execute();"
                  }
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={4} />

                <CodeBlock
                  language="sql"
                  content={
                    "USE `my_database`;\n\n" +
                    "DROP TABLE IF EXISTS `lion_database.example_2023_05`;\n\n" +
                    "CREATE TABLE lion_database.example_2023_05(\n" +
                    "\tidexample_2023_05 INT(11) NOT NULL AUTO_INCREMENT, \n" +
                    "\texample_2023_05_name VARCHAR(45) NULL DEFAULT 'unnamed', \n" +
                    "\texample_2023_05_code VARCHAR(64) NOT NULL COMMENT 'group records', \n" +
                    "\texample_2023_05_description TEXT(45) NULL DEFAULT NULL, \n" +
                    "\texample_2023_05_options ENUM('ONLINE', 'OFFLINE') NOT NULL DEFAULT 'ONLINE', \n" +
                    "\texample_2023_05_date_birth DATETIME NOT NULL, \n" +
                    "\tidusers_key INT(11) NOT NULL, \n" +
                    "\tidusers_key_second INT(11) NOT NULL, \n" +
                    "\tidusers_tech INT(11) NOT NULL, \n" +
                    "\tidnew_table INT(11) NOT NULL, \n" +
                    "\tPRIMARY KEY (idexample_2023_05), \n" +
                    "\tUNIQUE INDEX example_2023_05_code_UNIQUE (example_2023_05_code ASC)\n" +
                    ") ENGINE=INNODB DEFAULT CHARACTER SET=UTF8 COLLATE = UTF8_SPANISH_CI; \n\n" +
                    "ALTER TABLE lion_database.example_2023_05\n" +
                    "\tADD INDEX example_2023_05_idusers_key_FK_idx (idusers_key  ASC), \n" +
                    "\tADD INDEX example_2023_05_idusers_key_second_FK_idx (idusers_key_second  ASC), \n" +
                    "\tADD INDEX example_2023_05_idusers_tech_FK_idx (idusers_tech  ASC), \n" +
                    "\tADD INDEX example_2023_05_idnew_table_FK_idx (idnew_table  ASC); \n\n" +
                    "ALTER TABLE lion_database.example_2023_05 \n" +
                    "\tADD CONSTRAINT example_2023_05_idusers_key_FK \n" +
                    "\t\tFOREIGN KEY (idusers_key) \n" +
                    "\t\tREFERENCES lion_database.users (idusers) \n" +
                    "\t\tON DELETE RESTRICT \n" +
                    "\t\tON UPDATE RESTRICT, \n" +
                    "\tADD CONSTRAINT example_2023_05_idusers_key_second_FK \n" +
                    "\t\tFOREIGN KEY (idusers_key_second) \n" +
                    "\t\tREFERENCES lion_database.users (idusers) \n" +
                    "\t\tON DELETE RESTRICT \n" +
                    "\t\tON UPDATE RESTRICT, \n" +
                    "\tADD CONSTRAINT example_2023_05_idusers_tech_FK \n" +
                    "\t\tFOREIGN KEY (idusers_tech) \n" +
                    "\t\tREFERENCES lion_database.users (idusers) \n" +
                    "\t\tON DELETE RESTRICT \n" +
                    "\t\tON UPDATE RESTRICT, \n" +
                    "\tADD CONSTRAINT example_2023_05_idnew_table_FK \n" +
                    "\t\tFOREIGN KEY (idnew_table) \n" +
                    "\t\tREFERENCES lion_database.new_table (idnew_table) \n" +
                    "\t\tON DELETE RESTRICT \n" +
                    "\t\tON UPDATE RESTRICT;"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionDatabase\\Drivers\\MySQL\\Schema;\n\n" +
                    "Schema::connection('lion_database')\n\t->table('example')\n\t->create()\n" +
                    "\t->column('id', [" +
                    "'type' => 'int', 'primary-key' => true, 'lenght' => 11, 'null' => false, 'auto-increment' => true" +
                    "])\n" +
                    "\t->column('name', [" +
                    "'type' => 'varchar', 'null' => true, 'default' => 'unnamed'" +
                    "])\n" +
                    "\t->column('code', [" +
                    "'type' => 'varchar', 'lenght' => 64, 'null' => false, 'comment' => 'group records', 'unique' => true, 'default' => false" +
                    "])\n" +
                    "\t->column('description', [" +
                    "'type' => 'text', 'null' => true" +
                    "])\n" +
                    "\t->column('options', [" +
                    "'type' => 'enum', 'null' => false, 'options' => ['ONLINE', 'OFFLINE'], 'default' => 'ONLINE'" +
                    "])\n" +
                    "\t->column('date_birth', [" +
                    "'type' => 'datetime', 'null' => false, 'default' => false " +
                    "])\n" +
                    "\t->column('idusers_key', [" +
                    "'type' => 'int', 'lenght' => 11, 'null' => false, 'default' => false, 'foreign-key' => ['table' => 'users', 'column' => 'idusers']" +
                    "])\n" +
                    "\t->column('idusers_key_second', [" +
                    "'type' => 'int', 'lenght' => 11, 'null' => false, 'default' => false, 'foreign-key' => ['table' => 'users', 'column' => 'idusers']" +
                    "])\n" +
                    "\t->column('idusers_tech', [" +
                    "'type' => 'int', 'lenght' => 11, 'null' => false, 'default' => false, 'foreign-key' => ['table' => 'users', 'column' => 'idusers']" +
                    "])\n" +
                    "\t->column('idnew_table', [" +
                    "'type' => 'int', 'lenght' => 11, 'null' => false, 'default' => false, 'foreign-key' => ['table' => 'new_table', 'column' => 'idnew_table']" +
                    "])\n\t->execute();"
                  }
                />
              </Fragment>
            </Fragment>
          ),
        },
        column: {
          name: "column",
          code: (
            <Fragment>
              <LibraryTitle className={"Schema"} methodName={"column"} />

              <Description
                description={
                  "The column function allows you to add properties to automatically generate columns."
                }
              />

              <Description
                description={
                  "There are different properties available to add to columns dynamically."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionDatabase\\Drivers\\MySQL\\Schema;\n\n" +
                  "Schema::column('column_name', ['options...']);"
                }
              />

              <ul>
                {args.map((arg, index) => (
                  <li key={index}>
                    <h6 className="text-lion-orange">{arg.key}:</h6>
                    <p>{arg.desc}</p>
                  </li>
                ))}
              </ul>
            </Fragment>
          ),
        },
      },
    },
  };
}
