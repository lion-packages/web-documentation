import { Alert, ListGroup } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Description from "../../../../pages/components/Description";
import Example from "../../../../pages/components/Example";
import { Fragment } from "react";
import Title from "../../../../pages/components/Title";
import SupportVersion from "../../../../pages/components/SupportVersion";

export default function v10_LBD() {
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

              <p className="fs-6">
                Package responsible for generating and executing statements for
                databases (MySQL/PostgreSQL).
              </p>
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

              <SupportVersion title={"Lion-Database"} version={"8.3"} />

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

declare(strict_types=1);

use Lion\\Database\\Driver;

/**
 * ------------------------------------------------------------------------------
 * Start database service
 * ------------------------------------------------------------------------------
 * describe connections to establish connecting to multiple databases
 * ------------------------------------------------------------------------------
 */

Driver::run([
    'default' => 'connection-name',
    'connections' => [
        'connection-name' => [
            'type' => 'mysql',
            'host' => 'localhost',
            'port' => 3306,
            'dbname' => 'lion_database',
            'user' => 'root',
            'password' => 'lion',
        ],
    ],
]);
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

declare(strict_types=1);

use LionDatabase\\Driver;

/**
 * ------------------------------------------------------------------------------
 * Start database service
 * ------------------------------------------------------------------------------
 * describe connections to establish connecting to multiple databases
 * ------------------------------------------------------------------------------
 */

Driver::run([
    'default' => 'connection-name',
    'connections' => [
        'connection-name' => [
            'type' => 'mysql',
            'host' => 'localhost',
            'port' => 3306,
            'dbname' => 'lion_database',
            'user' => 'root',
            'password' => 'lion',
            'config' => [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
            ],
        ],
    ],
]);
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
        connection: {
          name: "connection",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="connection" />

              <Description
                description={
                  "Changes the data of the current connection with those of the specified connection."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::connection('connection');
`}
              />
            </Fragment>
          ),
        },
        transaction: {
          name: "transaction",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="transaction" />

              <Description
                description={
                  "Activate the configuration to execute a transaction type process in the service."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::connection('connection')
    ->transaction();
`}
              />
            </Fragment>
          ),
        },
        "enable-insert": {
          name: "enableInsert",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="enableInsert" />

              <Description
                description={
                  "Enable the setting for nesting insert statements."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::connection('connection')
    ->enableInsert();
`}
              />
            </Fragment>
          ),
        },
        execute: {
          name: "execute",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="execute" />

              <Description description={"Execute the current query."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::connection('connection')
    ->query("INSERT INTO users (users_name) VALUES ('Sergio')")
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        get: {
          name: "get",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="get" />

              <Description description={"Run and get an object from a row."} />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->get();

var_dump($user);
`}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::table('users')
    ->select('users_name', 'users_lastname')
    ->where()->equalTo('idusers', 1)
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
        "get-all": {
          name: "getAll",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="getAll" />

              <Description description={"Run and get an array of objects."} />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select()
    ->getAll();

var_dump($users);
`}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select('users_name', 'users_lastname')
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
        query: {
          name: "query",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"query"} />

              <Description
                description={"Nests the QUERY statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::connection('connection')
    ->query('INSERT INTO users (users_name) VALUES ("Sergio")')
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        database: {
          name: "database",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="database" />

              <Description
                description={
                  "Nests the DATABASE statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::database();
`}
              />
            </Fragment>
          ),
        },
        truncate: {
          name: "truncate",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="truncate" />

              <Description
                description={
                  "Nests the TRUNCATE statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::truncate();
`}
              />
            </Fragment>
          ),
        },
        "auto-increment": {
          name: "autoIncrement",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="autoIncrement" />

              <Description
                description={
                  "Nests the AUTO_INCREMENT statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::autoIncrement();
`}
              />
            </Fragment>
          ),
        },
        action: {
          name: "action",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="action" />

              <Description
                description={"Nests the ACTION statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::action();
`}
              />
            </Fragment>
          ),
        },
        no: {
          name: "no",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="no" />

              <Description
                description={"Nests the NO statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::no();
`}
              />
            </Fragment>
          ),
        },
        cascade: {
          name: "cascade",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="cascade" />

              <Description
                description={
                  "Nests the CASCADE statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::cascade();
`}
              />
            </Fragment>
          ),
        },
        restrict: {
          name: "restrict",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="restrict" />

              <Description
                description={
                  "Nests the RESTRICT statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::restrict();
`}
              />
            </Fragment>
          ),
        },
        "on-delete": {
          name: "onDelete",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="onDelete" />

              <Description
                description={
                  "Nests the ON DELETE statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::onDelete();
`}
              />
            </Fragment>
          ),
        },
        "on-update": {
          name: "onUpdate",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="onUpdate" />

              <Description
                description={
                  "Nests the ON UPDATE statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::onUpdate();
`}
              />
            </Fragment>
          ),
        },
        on: {
          name: "on",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="on" />

              <Description
                description={"Nests the ON statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::on();
`}
              />
            </Fragment>
          ),
        },
        references: {
          name: "references",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="references" />

              <Description
                description={
                  "Nests the REFERENCES statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::references();
`}
              />
            </Fragment>
          ),
        },
        foreign: {
          name: "foreign",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="foreign" />

              <Description
                description={
                  "Nests the FOREIGN statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::foreign();
`}
              />
            </Fragment>
          ),
        },
        add: {
          name: "add",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="add" />

              <Description
                description={"Nests the ADD statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::add();
`}
              />
            </Fragment>
          ),
        },
        alter: {
          name: "alter",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="alter" />

              <Description
                description={"Nests the ALTER statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::alter();
`}
              />
            </Fragment>
          ),
        },
        comment: {
          name: "comment",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="comment" />

              <Description
                description={
                  "Nests the COMMENT statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::comment('comment...');
`}
              />
            </Fragment>
          ),
        },
        unique: {
          name: "unique",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="unique" />

              <Description
                description={"Nests the UNIQUE statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::unique();
`}
              />
            </Fragment>
          ),
        },
        "primary-key": {
          name: "primaryKey",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="primaryKey" />

              <Description
                description={
                  "Nests the PRIMARY KEY statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::primaryKey();
`}
              />
            </Fragment>
          ),
        },
        key: {
          name: "key",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="key" />

              <Description
                description={"Nests the KEY statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::key();
`}
              />
            </Fragment>
          ),
        },
        primary: {
          name: "primary",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="primary" />

              <Description
                description={
                  "Nests the PRIMARY statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::primary();
`}
              />
            </Fragment>
          ),
        },
        engine: {
          name: "engine",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="engine" />

              <Description
                description={"Nests the ENGINE statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::engine();
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::engine('INNODB');
`}
              />
            </Fragment>
          ),
        },
        "not-null": {
          name: "notNull",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="notNull" />

              <Description
                description={
                  "Nests the NOT NULL statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::notNull();
`}
              />
            </Fragment>
          ),
        },
        null: {
          name: "null",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="null" />

              <Description
                description={"Nests the NULL statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::null();
`}
              />
            </Fragment>
          ),
        },
        innodb: {
          name: "innodb",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="innodb" />

              <Description
                description={"Nests the INNODB statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::innodb();
`}
              />
            </Fragment>
          ),
        },
        collate: {
          name: "collate",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="collate" />

              <Description
                description={
                  "Nests the COLLATE statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::collate();
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::collate('utf8mb4_spanish_ci');
`}
              />
            </Fragment>
          ),
        },
        set: {
          name: "set",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="set" />

              <Description
                description={"Nests the SET statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::set();
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::set('utf8mb4');
`}
              />
            </Fragment>
          ),
        },
        character: {
          name: "character",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="character" />

              <Description
                description={
                  "Nests the CHARACTER statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::character();
`}
              />
            </Fragment>
          ),
        },
        default: {
          name: "default",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="default" />

              <Description
                description={
                  "Nests the DEFAULT statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::default();
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::default('default value');
`}
              />
            </Fragment>
          ),
        },
        schema: {
          name: "schema",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="schema" />

              <Description
                description={"Nests the SCHEMA statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::schema();
`}
              />
            </Fragment>
          ),
        },
        "add-query": {
          name: "addQuery",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="addQuery" />

              <Description
                description={"Nests the query in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::addQuery('SELECT * FROM users')
    ->addQuery(' WHERE id = 1')
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
        "if-exists": {
          name: "ifExists",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="ifExists" />

              <Description
                description={
                  "Nests the IF EXISTS statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::ifExists('table_name');
`}
              />
            </Fragment>
          ),
        },
        "if-not-exists": {
          name: "ifNotExists",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="ifNotExists" />

              <Description
                description={
                  "Nests the IF NOT EXISTS statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::ifNotExists('table_name');
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "use",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="use" />

              <Description
                description={"Nests the USE statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::use('database_name');
`}
              />
            </Fragment>
          ),
        },
        begin: {
          name: "begin",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="begin" />

              <Description
                description={"Nests the BEGIN statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::begin();
`}
              />
            </Fragment>
          ),
        },
        end: {
          name: "end",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="end" />

              <Description
                description={"Nests the END statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::end();
`}
              />
            </Fragment>
          ),
        },
        create: {
          name: "create",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="create" />

              <Description
                description={"Nests the CREATE statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::create();
`}
              />
            </Fragment>
          ),
        },
        procedure: {
          name: "procedure",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="procedure" />

              <Description
                description={
                  "Nests the PROCEDURE statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::procedure();
`}
              />
            </Fragment>
          ),
        },
        status: {
          name: "status",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="status" />

              <Description
                description={"Nests the STATUS statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::status();
`}
              />
            </Fragment>
          ),
        },
        "close-query": {
          name: "closeQuery",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="closeQuery" />

              <Description
                description={"Add semicolon to the end of the query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::addQuery('SELECT * FROM users')
    ->addQuery(' WHERE id = 1')
    ->closeQuery()
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
        full: {
          name: "full",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="full" />

              <Description
                description={"Nests the FULL statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::full();
`}
              />
            </Fragment>
          ),
        },
        "group-query": {
          name: "groupQuery",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="groupQuery" />

              <Description
                description={"Adds a SQL statement to the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::groupQuery(function (): void {
    DB::addQuery('SELECT * FROM users')
        ->addQuery(' WHERE id = 1');
})
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
        recursive: {
          name: "recursive",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"recursive"} />

              <Description
                description={
                  "Nests the RECURSIVE AS statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

use Lion\\Database\\Drivers\\MySQL as DB;

DB::with()
  ->recursive('example_recursive')
  ->groupQuery(...);
`}
              />
            </Fragment>
          ),
        },
        with: {
          name: "with",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"with"} />

              <Description
                description={"Nests the WITH statement in the current query."}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Database\\Drivers\\MySQL as DB;

DB::addQuery(DB::with(true));
  `}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use Lion\\Database\\Drivers\\MySQL as DB;

DB::with()->recursive(...);
  `}
              />
            </Fragment>
          ),
        },
        table: {
          name: "table",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"table"} />

              <Description
                description={"Nests the TABLE statement in the current query."}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->select()
    ->getAll();
  `}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table();
  `}
              />
            </Fragment>
          ),
        },
        view: {
          name: "view",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"view"} />

              <Description
                description={"Nests the VIEW statement in the current query."}
              />

              <Example
                number={1}
                language="php"
                content={`<?php

use Lion\\Database\\Drivers\\MySQL as DB;

DB::view('users')
    ->select()
    ->getAll();
  `}
              />

              <Example
                number={2}
                language="php"
                content={`<?php

use Lion\\Database\\Drivers\\MySQL as DB;

DB::view();
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
                  "Nests the IS NULL statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::isNull();
`}
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
                  "Nests the IS NOT NULL statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::isNotNull();
`}
              />
            </Fragment>
          ),
        },
        offset: {
          name: "offset",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"offset"} />

              <Description
                description={"Nests the OFFSET statement in the current query."}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::offset(1);
`}
              />
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
                  "Nests the UNION ALL statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::unionAll();
`}
              />
            </Fragment>
          ),
        },
        union: {
          name: "union",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"union"} />

              <Description
                description={"Nests the UNION statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::union();
`}
              />
            </Fragment>
          ),
        },
        as: {
          name: "as",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"as"} />

              <Description
                description={"Nests the AS statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::as('column name', 'alias name');
`}
              />
            </Fragment>
          ),
        },
        concat: {
          name: "concat",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"concat"} />

              <Description
                description={"Nests the CONCAT statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$concat = DB::concat('val1' . ' ' . 'val2');

var_dump($concat);
`}
              />
            </Fragment>
          ),
        },
        "create-table": {
          name: "createTable",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="createTable" />

              <Description
                description={
                  "Nests the CREATE TABLE statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::createTable();
`}
              />
            </Fragment>
          ),
        },
        show: {
          name: "show",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="show" />

              <Description
                description={"Nests the SHOW statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::show();
`}
              />
            </Fragment>
          ),
        },
        from: {
          name: "from",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="from" />

              <Description
                description={"Nests the FROM statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')->from(); // FROM users
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::from('users'); // FROM users
`}
              />
            </Fragment>
          ),
        },
        index: {
          name: "index",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"index"} />

              <Description
                description={"Nests the INDEX statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::index();
`}
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
                description={"Nests the DROP statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::drop();
`}
              />
            </Fragment>
          ),
        },
        constraint: {
          name: "constraint",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"constraint"} />

              <Description
                description={
                  "Nests the SELECT CONSTRAINT_NAME, TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME FROM information_schema.KEY_COLUMN_USAGE WHERE TABLE_SCHEMA=? AND TABLE_NAME=? AND REFERENCED_COLUMN_NAME IS NOT NULL statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$constraints = DB::connection('connection')
    ->table('users')
    ->constraint()
    ->get();

var_dump($constraints);
`}
              />
            </Fragment>
          ),
        },
        tables: {
          name: "tables",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"tables"} />

              <Description
                description={"Nests the TABLES statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::tables();
`}
              />
            </Fragment>
          ),
        },
        columns: {
          name: "columns",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"columns"} />

              <Description
                description={
                  "Nests the COLUMNS statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::columns();
`}
              />
            </Fragment>
          ),
        },
        bulk: {
          name: "bulk",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="bulk" />

              <Description
                description={"Nesting multiple values in an insert run."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';
                  
use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->bulk(['users_name', 'users_lastname'], [
        ['Sergio',  'Leon'],
        ['Emmanuel','Hernandez'],
        ['Santiago','Ospina'],
        ['Santiago','Correa'],
    ])
    ->execute();
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
                description={"Nests the IN statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->update([
        'users_name' => 'Sergio',
        'users_last_name' => 'Leon',
    ])
    ->where('id')->in([1, 2, 3, 4])
    ->execute();
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
                description={"Nests the CALL statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::call('stored_procedure_name', [
    'Sergio',
    '1999-09-30',
    1,
])
    ->execute();
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
                description={"Nests the DELETE statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->delete()
    ->where('idusers')->equalTo(1)
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        update: {
          name: "update",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"update"} />

              <Description
                description={"Nests the UPDATE statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->update([
        'users_name' => 'Sergio',
        'users_date' => '1999-09-30',
        'users_phone' => '3159999999',
    ])
    ->where('idusers')->equalTo(1)
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        insert: {
          name: "insert",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"insert"} />

              <Description
                description={"Nests the INSERT statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->insert([
        'users_name' => 'Sergio',
        'users_date' => '1999-09-30',
        'users_phone' => '3159999999',
    ])
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        select: {
          name: "select",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="select" />

              <Description
                description={"Nests the SELECT statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select()
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
        "select-distinct": {
          name: "selectDistinct",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"selectDistinct"} />

              <Description
                description={
                  "Nests the SELECT DISTINCT statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->selectDistinct('users_name', 'users_lastname')
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
        between: {
          name: "between",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"between"} />

              <Description
                description={
                  "Nests the BETWEEN statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select()
    ->where('created_at')->between('2022-11-01', '2022-11-04')
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
        like: {
          name: "like",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"like"} />

              <Description
                description={"Nests the LIKE statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users_id = ...;

$users = DB::table('users')
    ->select()
    ->where('users_id')->like("%{$users_id}%")
    ->getAll();

var_dump($users);
`}
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
                  "Nests the GROUP BY statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select()
    ->groupBy('users_name', ...)
    ->getAll();

var_dump($users);
`}
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
                description={"Nests the LIMIT statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select()
    ->limit(0, 10)
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
        asc: {
          name: "asc",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"asc"} />

              <Description
                description={"Nests the ASC statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select()
    ->orderBy('users_name' . DB::asc(true), 'users_lastname')
    ->getAll();

var_dump($users);
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select()
    ->orderBy('users_name')->asc()
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
        desc: {
          name: "desc",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"desc"} />

              <Description
                description={"Nests the DESC statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select()
    ->orderBy('users_name' . DB::desc(true), 'users_lastname')
    ->getAll();

var_dump($users);
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select()
    ->orderBy('users_name')->desc()
    ->getAll();

var_dump($users);
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
                  "Nests the ORDER BY statement in the current query."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select()
    ->orderBy('users_name', ...)
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
        inner: {
          name: "inner",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"inner"} />

              <Description
                description={"Nests the INNER statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::inner();
`}
              />
            </Fragment>
          ),
        },
        left: {
          name: "left",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"left"} />

              <Description
                description={"Nests the LEFT statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::left();
`}
              />
            </Fragment>
          ),
        },
        right: {
          name: "right",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"right"} />

              <Description
                description={"Nests the RIGHT statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::right();
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
                description={"Nests the JOIN statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table(DB::as('users', 'usr'))
    ->select()
    ->join(
        DB::as('roles', 'rl'),
        DB::column('idusers', 'usr'),
        DB::column('idroles', 'rl'),
    )
    ->getAll();

var_dump($users);
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table(DB::as('users', 'usr'))
    ->select()
    ->inner()
    ->join(
        DB::as('roles', 'rl'),
        DB::column('idusers', 'usr'),
        DB::column('idroles', 'rl'),
    )
    ->getAll();

var_dump($users);
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table(DB::as('users', 'usr'))
    ->select()
    ->left()
    ->join(
        DB::as('roles', 'rl'),
        DB::column('idusers', 'usr'),
        DB::column('idroles', 'rl'),
    )
    ->getAll();

var_dump($users);
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table(DB::as('users', 'usr'))
    ->select()
    ->right()
    ->join(
        DB::as('roles', 'rl'),
        DB::column('idusers', 'usr'),
        DB::column('idroles', 'rl'),
    )
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
        where: {
          name: "where",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"where"} />

              <Description
                description={"Nests the WHERE statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->get();

var_dump($user);
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::table('users')
    ->select()
    ->where(function (): void {
        DB::equalTo('idusers', 1);
    }) // WHERE (idusers = 1)
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
        and: {
          name: "and",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"and"} />

              <Description
                description={"Nests the AND statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->and()->equalTo('create_at', '2025-01-22')
    ->get();

var_dump($user);
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->and(function (): void {
        DB::equalTo('create_at', '2025-01-22');
    }); // AND (create_at = '2025-01-22')
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
        or: {
          name: "or",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"or"} />

              <Description
                description={"Nests the OR statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->or()->equalTo('idusers', 2)
    ->get();

var_dump($user);
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::table('users')
    ->select()
    ->where()->equalTo('idusers', 1)
    ->or(function (): void {
        DB::equalTo('idusers', 2);
    }); // OR (idusers = 2)
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
        "get-column": {
          name: "getColumn",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"getColumn"} />

              <Description description={"Gets the column."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select(
        DB::getColumn('idusers', 'users'),
        DB::getColumn('name', 'users'),
        DB::getColumn('email', 'users'),
    )
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
        min: {
          name: "min",
          code: (
            <Fragment>
              <LibraryTitle className={"MySQL"} methodName={"min"} />

              <Description
                description={"Nests the MIN statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->select(DB::min('idusers'))
    ->get();
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
                description={"Nests the MAX statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('my_table')
    ->select(DB::max('id'))
    ->get();
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
                description={"Nests the AVG statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('products')
    ->select(DB::avg('price'))
    ->get();
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
                description={"Nests the SUM statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('products')
    ->select(DB::sum('price'))
    ->get();
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
                description={"Nests the COUNT statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->select(DB::count('*'))
    ->get();
`}
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
                description={"Nests the DAY statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->select()
    ->where()->equalTo(DB::day('column_day'), '2023-05-02')
    ->get();
`}
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
                description={"Nests the MONTH statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->select()
    ->where()->equalTo(DB::month('column_month'), '2023-05-02')
    ->get();
`}
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
                description={"Nests the YEAR statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

DB::table('users')
    ->select()
    ->where()->equalTo(DB::year('column_month'), '2023-05-02')
    ->get();
`}
              />
            </Fragment>
          ),
        },
      },
    },
    "mysql-schema": {
      name: "Schema\\MySQL::class",
      type: "sub_modules",
      list: {
        connection: {
          name: "connection",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="connection" />

              <Description
                description={
                  "Changes the data of the current connection with those of the specified connection."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection');
`}
              />
            </Fragment>
          ),
        },
        execute: {
          name: "execute",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="execute" />

              <Description description={"Execute the current query."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as DB;

DB::connection('connection')
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        "create-database": {
          name: "createDatabase",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="createDatabase" />

              <Description
                description={"Generate the query to create a database."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->createDatabase('database_name')
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        "drop-database": {
          name: "dropDatabase",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="dropDatabase" />

              <Description
                description={"Generate the query to delete a database."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->dropDatabase('database_name')
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        "create-table": {
          name: "createTable",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="createTable" />

              <Description
                description={"Generate the query to create a table."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->createTable('roles', function (): void {
        Schema::int('idroles')->notNull()->autoIncrement()->primaryKey();

        Schema::varchar('roles_name', 25)->notNull();

        Schema::varchar('roles_description', 30)->null();
    })
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        "drop-table": {
          name: "dropTable",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="dropTable" />

              <Description description={"Delete a table from the database."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->dropTable('table_name')
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        "drop-tables": {
          name: "dropTables",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="dropTables" />

              <Description description={"Dropping tables from the database."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->dropTables()
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        "truncate-table": {
          name: "truncateTable",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="truncateTable" />

              <Description description={"Empty a database table."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->truncateTable('table_name')
    ->execute();
`}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->truncateTable('table_name', true)
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        "create-stored-procedure": {
          name: "createStoredProcedure",
          code: (
            <Fragment>
              <LibraryTitle
                className="MySQL"
                methodName="createStoredProcedure"
              />

              <Description description={"Create a stored procedure."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->createStoreProcedure('create_roles', function (): void {
        Schema::in()->varchar('_roles_name', 25);

        Schema::in()->varchar('_roles_description', 30);
    }, function (MySQL $db): void {
        $db
            ->table('roles')
            ->insert([
                'roles_name' => '_roles_name',
                'roles_description' => '_roles_description',
            ]);
    })
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        "drop-stored-procedure": {
          name: "dropStoredProcedure",
          code: (
            <Fragment>
              <LibraryTitle
                className="MySQL"
                methodName="dropStoredProcedure"
              />

              <Description description={"Delete a stored procedure."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->dropStoredProcedure('stored_procedure_name')
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        "create-view": {
          name: "createView",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="createView" />

              <Description description={"Create a view."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->createView('read_users', function (MySQL $db): void {
        $db
            ->table($db->as('users', 'usr'))
            ->select(
                $db->getColumn('idusers', 'usr'),
                $db->getColumn('users_citizen_identification', 'usr'),
                $db->getColumn('users_name', 'usr'),
                $db->getColumn('users_last_name', 'usr'),
                $db->getColumn('users_nickname', 'usr'),
            );
    })
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        "drop-view": {
          name: "dropView",
          code: (
            <Fragment>
              <LibraryTitle className="MySQL" methodName="dropView" />

              <Description description={"Delete a view."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;

Schema::connection('connection')
    ->dropView('view_name')
    ->execute();
`}
              />
            </Fragment>
          ),
        },
      },
    },
    postgresql: {
      name: "PostgreSQL::class",
      type: "sub_modules",
      list: {
        connection: {
          name: "connection",
          code: (
            <Fragment>
              <LibraryTitle className="PostgreSQL" methodName="connection" />

              <Description
                description={
                  "Changes the data of the current connection with those of the specified connection."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\PostgreSQL as DB;

DB::connection('connection');
`}
              />
            </Fragment>
          ),
        },
        transaction: {
          name: "transaction",
          code: (
            <Fragment>
              <LibraryTitle className="PostgreSQL" methodName="transaction" />

              <Description
                description={
                  "Activate the configuration to execute a transaction type process in the service."
                }
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\PostgreSQL as DB;

DB::connection('connection')
    ->transaction();
`}
              />
            </Fragment>
          ),
        },
        execute: {
          name: "execute",
          code: (
            <Fragment>
              <LibraryTitle className="PostgreSQL" methodName="execute" />

              <Description description={"Execute the current query."} />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\PostgreSQL as DB;

DB::connection('connection')
    ->query("INSERT INTO users (users_name) VALUES ('Sergio')")
    ->execute();
`}
              />
            </Fragment>
          ),
        },
        get: {
          name: "get",
          code: (
            <Fragment>
              <LibraryTitle className="PostgreSQL" methodName="get" />

              <Description description={"Run and get an object from a row."} />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\PostgreSQL as DB;

$user = DB::query('SELECT * FROM users WHERE idusers = 1')
    ->get();

var_dump($user);
`}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$user = DB::table('users')
    ->select('users_name', 'users_lastname')
    ->where()->equalTo('idusers', 1)
    ->get();

var_dump($user);
`}
              />
            </Fragment>
          ),
        },
        "get-all": {
          name: "getAll",
          code: (
            <Fragment>
              <LibraryTitle className="PostgreSQL" methodName="getAll" />

              <Description description={"Run and get an array of objects."} />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\PostgreSQL as DB;

$users = DB::query('SELECT * FROM users')
    ->getAll();

var_dump($users);
`}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\MySQL as DB;

$users = DB::table('users')
    ->select('users_name', 'users_lastname')
    ->getAll();

var_dump($users);
`}
              />
            </Fragment>
          ),
        },
        query: {
          name: "query",
          code: (
            <Fragment>
              <LibraryTitle className={"PostgreSQL"} methodName={"query"} />

              <Description
                description={"Nests the QUERY statement in the current query."}
              />

              <CodeBlock
                language="php"
                content={`<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Lion\\Database\\Drivers\\PostgreSQL as DB;

DB::connection('connection')
    ->query('INSERT INTO users (users_name) VALUES ("Sergio")')
    ->execute();
`}
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
