import CodeBlock from "../../../../pages/components/CodeBlock";

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

export default function v8_7_1_LSQ() {
  return {
    driver: {
      title: "LionSQL\\Driver",
      description:
        "The `Driver` class allows establishing connections to databases`",
      url: "/libraries/lion/sql/item_version/driver/run",
      methods: {
        run: {
          title: "Driver::run",
          description:
            "The `run` function allows you to establish a connection to databases",
          link: "run",
          code: (
            <>
              <div className="mb-3">
                <h5 className="text-warning">CONNECTION</h5>

                <p>
                  {" "}
                  The connection is established using an array containing data
                  about your configuration to connect, currently only available
                  with MySQL.{" "}
                </p>

                <p>
                  To establish the connection to the database, two priorities
                  are required:
                </p>

                <ul>
                  <li>
                    <strong>default:</strong> is the property that defines the
                    connection to the database by default.
                  </li>

                  <li>
                    <strong>connections:</strong> is the property that stores
                    the arrays with all the connections needed to connect to the
                    databases.
                  </li>
                </ul>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Driver;\n\n" +
                    "Driver::run([\n" +
                    "\t'default' => 'first_connection',\n" +
                    "\t'connections' => [\n" +
                    "\t\t'first_connection' => [\n" +
                    "\t\t\t'type' => 'mysql',\n" +
                    "\t\t\t'host' => '127.0.0.1',\n" +
                    "\t\t\t'port' => 3306,\n" +
                    "\t\t\t'dbname' => 'example_1',\n" +
                    "\t\t\t'user' => 'root',\n" +
                    "\t\t\t'password' => ''\n" +
                    "\t\t],\n" +
                    "\t\t'second_connection' => [\n" +
                    "\t\t\t'type' => 'mysql',\n" +
                    "\t\t\t'host' => '127.0.0.1',\n" +
                    "\t\t\t'port' => 3306,\n" +
                    "\t\t\t'dbname' => 'example_2',\n" +
                    "\t\t\t'user' => 'root',\n" +
                    "\t\t\t'password' => ''\n" +
                    "\t\t]\n" +
                    "\t]\n]);"
                  }
                />
              </div>

              <div className="mb-3">
                <p>
                  The configuration it handles is an array of elements with
                  parameters set by default.
                </p>

                <CodeBlock
                  language="php"
                  content={
                    "[\n" +
                    "\tPDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n" +
                    "\tPDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,\n" +
                    "]"
                  }
                />
              </div>

              <div className="mb-3">
                <p>
                  The configuration can be overridden and parameterized as
                  required.
                </p>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Driver;\n\n" +
                    "Driver::run([\n" +
                    "\t'default' => 'first_connection',\n" +
                    "\t'connections' => [\n" +
                    "\t\t'first_connection' => [\n" +
                    "\t\t\t'type' => 'mysql',\n" +
                    "\t\t\t'host' => '127.0.0.1',\n" +
                    "\t\t\t'port' => 3306,\n" +
                    "\t\t\t'dbname' => 'example_1',\n" +
                    "\t\t\t'user' => 'root',\n" +
                    "\t\t\t'password' => ''\n" +
                    "\t\t],\n" +
                    "\t\t'second_connection' => [\n" +
                    "\t\t\t'type' => 'mysql',\n" +
                    "\t\t\t'host' => '127.0.0.1',\n" +
                    "\t\t\t'port' => 3306,\n" +
                    "\t\t\t'dbname' => 'example_2',\n" +
                    "\t\t\t'user' => 'root',\n" +
                    "\t\t\t'password' => '',\n" +
                    "\t\t\t'config' => [\n" +
                    "\t\t\t\tPDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n" +
                    "\t\t\t]\n" +
                    "\t\t]\n" +
                    "\t]\n]);"
                  }
                />
              </div>
            </>
          ),
        },
      },
    },
    mysql: {
      title: "LionSQL\\Drivers\\MySQL\\MySQL",
      description:
        "The `MySQL` class manages processes in the MySQL database, to connect to a database read the `Driver` class first",
      url: "/libraries/lion/sql/item_version/mysql/insert",
      methods: {
        operators: {
          title: "MySQL::operators",
          description: "Operator functions available in Lion-SQL",
          link: "operators",
          code: (
            <>
              <h2 className="pb-2">OPERATORS</h2>
              <hr />

              <div className="mb-3">
                <h2 className="pb-2">equalTo</h2>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column = ?"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::equalTo('column'), 'Sleon');"
                  }
                />
              </div>

              <div className="mb-3">
                <h2 className="pb-2">notEqualTo</h2>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column <> ?"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::notEqualTo('column'), 'Sleon');"
                  }
                />
              </div>

              <div className="mb-3">
                <h2 className="pb-2">greaterThan</h2>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column > ?"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::greaterThan('column'), 'Sleon');"
                  }
                />
              </div>

              <div className="mb-3">
                <h2 className="pb-2">lessThan</h2>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column < ?"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::lessThan('column'), 'Sleon');"
                  }
                />
              </div>

              <div className="mb-3">
                <h2 className="pb-2">greaterThanOrEqualTo</h2>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column >= ?"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::greaterThanOrEqualTo('column'), 'Sleon');"
                  }
                />
              </div>

              <div className="mb-3">
                <h2 className="pb-2">lessThanOrEqualTo</h2>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM WHERE column <= ?"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::where(DB::lessThanOrEqualTo('column'), 'Sleon');"
                  }
                />
              </div>
            </>
          ),
        },
        insert: {
          title: "MySQL::insert",
          description:
            "The `insert` function executes an insert statement in the database to a given table",
          link: "insert",
          code: (
            <>
              <h2 className="pb-2">INSERT</h2>
              <hr />

              <CodeBlock
                language="sql"
                content={
                  "INSERT INTO my_table ('name', 'lastname') VALUES (?,?)"
                }
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->insert([\n" +
                  "\t'name' => 'Sergio',\n" +
                  "\t'lastname' => 'Leon'\n" +
                  "])->execute();"
                }
              />
            </>
          ),
        },
        end: {
          title: "MySQL::end",
          description:
            "The `end` function allows you to nest a delimiter to the current statement",
          link: "end",
          code: (
            <>
              <h2 className="pb-2">END</h2>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"sql"}
                  content={
                    "INSERT INTO my_table (name) VALUES (?); INSERT INTO my_table (name) VALUES (?);"
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->insert(['name' => 'Sleon'])->end()\n" +
                    "\t->table('my_table')->insert(['name' => 'Sleon'])\n" +
                    "\t->execute();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language={"sql"}
                  content={
                    "SELECT * FROM my_table; SELECT * FROM my_table_second;"
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->end()\n" +
                    "\t->table('my_table')->select()\n" +
                    "\t->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        bulk: {
          title: "MySQL::bulk",
          description: "The `bulk` function allows you to insert data in bulk",
          link: "bulk",
          code: (
            <>
              <h2 className="pb-2">BULK</h2>
              <hr />

              <CodeBlock
                language="sql"
                content={
                  "INSERT INTO my_table ('name', 'lastname') VALUES (?,?), (?,?), (?,?), (?,?)"
                }
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->bulk(['name', 'lastname'], [\n" +
                  "\t['Sergio',  'Leon'],\n" +
                  "\t['Santiago','Ospina'],\n" +
                  "\t['Dailleth','Arismendi'],\n" +
                  "\t['Santiago','Correa']\n" +
                  "])->execute();"
                }
              />
            </>
          ),
        },
        connection: {
          title: "MySQL::connection",
          description:
            "The `connection` function allows you to select one of the connections established in the driver to execute a process in the database",
          link: "connection",
          code: (
            <>
              <h2 className="pb-2">CONNECTION</h2>
              <hr />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::connection('second_connection')\n\t->table('my_table')\n\t->select()\n\t->getAll();"
                }
              />
            </>
          ),
        },
        "get-connections": {
          title: "MySQL::getConnections",
          description:
            "The `getConnections` function returns an array with the information of the executed drivers",
          link: "get-connections",
          code: (
            <>
              <h2 className="pb-2">GET CONNECTIONS</h2>
              <hr />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::getConnections();"
                }
              />
            </>
          ),
        },
        select: {
          title: "MySQL::select",
          description:
            "The `between` function nests the `sql` statement in the current query",
          link: "select",
          code: (
            <>
              <h2 className="pb-2">SELECT</h2>
              <hr />

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>
                <CodeBlock language="sql" content={"SELECT * FROM my_table"} />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT alias.column1, column2, column3, alias.column4 FROM my_table AS alias"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table(DB::as('my_table', 'alias'))->select(\n" +
                    "\tDB::column('column1', 'alias'),\n" +
                    "\tDB::column('column2'),\n" +
                    "\tDB::column('column3'),\n" +
                    "\tDB::column('column4', 'alias')\n" +
                    ")->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        "fetch-mode": {
          title: "MySQL::fetchMode",
          description:
            "The `fetchMode` function allows you to modify the setFetchMode",
          link: "fetch-mode",
          code: (
            <>
              <h2 className="pb-2">FETCH MODE</h2>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning pb-2">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::fetchMode(PDO::FETCH_ASSOC);"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning pb-2">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::fetchMode(PDO::FETCH_CLASS, \\Class\\MyClass::class);"
                  }
                />
              </div>
            </>
          ),
        },
        "group-query": {
          title: "MySQL::groupQuery",
          description:
            "The `groupQuery` function allows grouping of subqueries",
          link: "group-query",
          code: (
            <>
              <h2 className="pb-2">GROUP QUERY</h2>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock language={"sql"} content={"(SELECT * FROM users)"} />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::groupQuery(function(DB $query) {\n" +
                    "\t$query->table('users')->select();\n" +
                    "})->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"sql"}
                  content={
                    "(SELECT * FROM users) UNION ALL (SELECT * FROM users_second)"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::groupQuery(function(DB $query) {\n" +
                    "\t$query->table('users')->select();\n" +
                    "})\n->unionAll()\n" +
                    "->groupQuery(function(DB $query) {\n" +
                    "\t$query->table('users_second')->select();\n" +
                    "})\n->getAll()"
                  }
                />
              </div>
            </>
          ),
        },
        with: {
          title: "MySQL::with",
          description:
            "The `with` function is appended to the current statement or returns the WITH statement as a string",
          link: "with",
          code: (
            <>
              <h2 className="pb-2">WITH</h2>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning pb-2">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::with(true);" // "string"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning pb-2">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::with()->recursive(...);"
                  }
                />
              </div>
            </>
          ),
        },
        recursive: {
          title: "MySQL::recursive",
          description:
            "The `recursive` function is appended to the current statement or returns the RECURSIVE statement as a string",
          link: "recursive",
          code: (
            <>
              <h2 className="pb-2">RECURSIVE</h2>
              <hr />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::with()->recursive('example_recursive')->groupQuery(...);"
                }
              />
            </>
          ),
        },
        "select-distinct": {
          title: "MySQL::selectDistinct",
          description:
            "The `selectDistinct` function nests the `sql` statement in the current query",
          link: "select-distinct",
          code: (
            <>
              <h2 className="pb-2">SELECT DISTINCT</h2>
              <hr />

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="sql"
                  content={"SELECT DISTINCT column1, column2 FROM my_table"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->selectDistinct('column1', 'column2')->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT DISTINCT alias.column1, column2, column3, alias.column4 FROM my_table AS alias"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table(DB::as('my_table', 'alias'))->selectDistinct(\n" +
                    "\tDB::column('column1', 'alias'),\n" +
                    "\tDB::column('column2'),\n" +
                    "\tDB::column('column3'),\n" +
                    "\tDB::column('column4', 'alias')\n" +
                    ")->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        concat: {
          title: "MySQL::concat",
          description:
            "The `concat` function nests the `sql` statement in the current query and returns a CONCAT string",
          link: "concat",
          code: (
            <>
              <h2 className="pb-2">CONCAT</h2>
              <hr />

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>
                <CodeBlock
                  language="sql"
                  content={"SELECT CONCAT(name, ' ', lastname) FROM users"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    `DB::table('users')\n\t->select(DB::concat(DB::column('name'), '" "', DB::column('lastname')))\n\t->getAll();`
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>
                <CodeBlock
                  language="sql"
                  content={
                    "SELECT CONCAT(usr.name, ' ', usr.lastname) AS fullname FROM users AS usr"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table(DB::as('users', 'usr'))\n" +
                    "\t->select(\n" +
                    "\t\tDB::as(\n" +
                    `\t\t\tDB::concat(DB::column('name', 'usr'), '" "', DB::column('lastname', 'usr')), \n\t\t\t"fullname"\n` +
                    "\t\t)\n" +
                    "\t)\n" +
                    "\t->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        union: {
          title: "MySQL::union",
          description:
            "The `union` function nests the `sql` statement in the current query",
          link: "union",
          code: (
            <>
              <h2 className="pb-2">UNION</h2>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>
                <CodeBlock
                  language="sql"
                  content={
                    "(SELECT * FROM my_table) UNION (SELECT * FROM my_table2)"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->union()->table('my_table2')->select()->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language={"sql"}
                  content={
                    "(SELECT * FROM users) UNION (SELECT * FROM users_second)"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::groupQuery(function(DB $query) {\n" +
                    "\t$query->table('users')->select();\n" +
                    "})\n->union()\n" +
                    "->groupQuery(function(DB $query) {\n" +
                    "\t$query->table('users_second')->select();\n" +
                    "})\n->getAll()"
                  }
                />
              </div>
            </>
          ),
        },
        "union-all": {
          title: "MySQL::unionAll",
          description:
            "The `unionAll` function nests the `sql` statement in the current query",
          link: "union-all",
          code: (
            <>
              <h2 className="pb-2">UNION ALL</h2>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT * FROM my_table UNION ALL SELECT * FROM my_table2"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->unionAll()->table('my_table2')->select()->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language={"sql"}
                  content={
                    "(SELECT * FROM users) UNION ALL (SELECT * FROM users_second)"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::groupQuery(function(DB $query) {\n" +
                    "\t$query->table('users')->select();\n" +
                    "})\n->unionAll()\n" +
                    "->groupQuery(function(DB $query) {\n" +
                    "\t$query->table('users_second')->select();\n" +
                    "})\n->getAll()"
                  }
                />
              </div>
            </>
          ),
        },
        between: {
          title: "MySQL::between",
          description:
            "The `between` function nests the `sql` statement in the current query",
          link: "between",
          code: (
            <>
              <h2 className="pb-2">BETWEEN</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language="sql"
                  content={
                    "SELECT * FROM my_table WHERE date BETWEEN '2022-11-01' AND '2022-11-04'"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')\n\t->select()\n\t->where('date')\n\t->between('2022-11-01', '2022-11-04')\n\t->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        like: {
          title: "MySQL::like",
          description:
            "The `like` function nests the `sql` statement in the current query",
          link: "like",
          code: (
            <>
              <h2 className="pb-2">LIKE</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language="sql"
                  content={
                    "SELECT * FROM my_table WHERE column1 LIKE '%my_text%'"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')\n\t->select()\n\t->where('column1')\n\t->like('%my_text%')\n\t->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        join: {
          title: "MySQL::innerJoin/leftJoin/rightJoin",
          description:
            "The function is nested to the `sql` statement in the current query",
          link: "join",
          code: (
            <>
              <h2 className="pb-2">JOIN</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language="sql"
                  content={
                    "SELECT my_table_1.id_a, my_table_2.name FROM table1 AS my_table_1 \n" +
                    "\tINNER JOIN table2 AS my_table_2 ON my_table_1.id_a=my_table_2.id_a"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table(DB::as('table1', 'my_table_1'))->select(\n" +
                    "\tDB::column('table1', 'my_table_1')\n" +
                    "\tDB::column('table1', 'my_table_2')\n" +
                    ")->innerJoin( //leftJoin(...) and rightJoin(...)\n" +
                    "\tDB::as('table12', 'my_table_2'), \n" +
                    "\tDB::column('id_a', 'my_table_1'), \n" +
                    "\tDB::column('id_a', 'my_table_2'), \n" +
                    ")" +
                    "->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        min: {
          title: "MySQL::min",
          description:
            "The `min` function is nested in the current `sql` statement",
          link: "min",
          code: (
            <>
              <h2 className="pb-2">MIN</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language="sql"
                  content={"SELECT MIN(id) FROM my_table"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select(DB::min('id'))->get();"
                  }
                />
              </div>
            </>
          ),
        },
        max: {
          title: "MySQL::max",
          description:
            "The `max` function is nested in the current `sql` statement",
          link: "max",
          code: (
            <>
              <h2 className="pb-2">MAX</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language="sql"
                  content={"SELECT MAX(id) FROM my_table"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select(DB::max('id'))->get();"
                  }
                />
              </div>
            </>
          ),
        },
        count: {
          title: "MySQL::count",
          description: "The `count` function is added above the sql statement",
          link: "count",
          code: (
            <>
              <h2 className="pb-2">COUNT</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language="sql"
                  content={"SELECT COUNT(*) FROM my_table"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select(DB::count('*'))->get();"
                  }
                />
              </div>
            </>
          ),
        },
        sum: {
          title: "MySQL::sum",
          description: "The `sum` function is added above the sql statement",
          link: "sum",
          code: (
            <>
              <h2 className="pb-2">SUM</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language="sql"
                  content={"SELECT SUM(price) FROM my_table"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select(DB::sum('price'))->get();"
                  }
                />
              </div>
            </>
          ),
        },
        avg: {
          title: "MySQL::avg",
          description: "The `avg` function is added above the sql statement",
          link: "avg",
          code: (
            <>
              <h2 className="pb-2">AVG</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language="sql"
                  content={"SELECT AVG(price) FROM my_table"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select(DB::avg('price'))->get();"
                  }
                />
              </div>
            </>
          ),
        },
        "order-by": {
          title: "MySQL::orderBy",
          description:
            "The `orderBy` function is nested in the current `sql` statement",
          link: "order-by",
          code: (
            <>
              <h2 className="pb-2">ORDER BY</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language={"sql"}
                  content={"SELECT * FROM my_table ORDER BY id, name"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->orderBy('id', 'name')->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        "group-by": {
          title: "MySQL::groupBy",
          description:
            "The `groupBy` function is nested in the current `sql` statement",
          link: "group-by",
          code: (
            <>
              <h2 className="pb-2">GROUP BY</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language={"sql"}
                  content={"SELECT * FROM my_table GROUP BY date_start, name"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')\n\t->select()\n\t->groupBy('date_start', 'name')\n\t->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        limit: {
          title: "MySQL::limit",
          description:
            "The `limit` function is nested in the current `sql` statement",
          link: "limit",
          code: (
            <>
              <h2 className="pb-2">LIMIT</h2>
              <hr />

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>
                <CodeBlock
                  language={"sql"}
                  content={"SELECT * FROM my_table LIMIT 1"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->limit(1)->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>
                <CodeBlock
                  language={"sql"}
                  content={"SELECT * FROM my_table LIMIT 0, 10"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->limit(0, 10)->AllAll();"
                  }
                />
              </div>
            </>
          ),
        },
        offset: {
          title: "MySQL::offset",
          description:
            "The `offset` function is nested in the current `sql` statement",
          link: "offset",
          code: (
            <>
              <h2 className="pb-2">OFFSET</h2>
              <hr />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM my_table LIMIT 100 OFFSET 100"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select()->limit(100)->offset(100)->getAll();"
                }
              />
            </>
          ),
        },
        having: {
          title: "MySQL::having",
          description:
            "The `having` function is nested in the current `sql` statement",
          link: "having",
          code: (
            <>
              <h2 className="pb-2">HAVING</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language={"sql"}
                  content={"SELECT * FROM my_table HAVING id > 10"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')\n\t->select()\n\t->having(DB::greaterThan('id'), 10)\n\t->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        show: {
          title: "MySQL::show",
          description:
            "The `show` function is nested in the current `sql` statement",
          link: "show",
          code: (
            <>
              <h2 className="pb-2">SHOW</h2>
              <hr />

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->columns()->from('my_table')->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->tables()->from('database')->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->showCreateTable()->get();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #4</h5>

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->indexes()->from('my_table')->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        full: {
          title: "MySQL::full",
          description: "The `full` function is nested above the sql statement",
          link: "full",
          code: (
            <>
              <h2 className="pb-2">FULL</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language="sql"
                  content={"SHOW FULL COLUMNS FROM my_table"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->full()->columns()->from('my_table')->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        from: {
          title: "MySQL::from",
          description: "The `from` function is nested above the sql statement",
          link: "from",
          code: (
            <>
              <h2 className="pb-2">FROM</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language="sql"
                  content={"SHOW FULL COLUMNS FROM my_table"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->full()->columns()->from('my_table')->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        procedure: {
          title: "MySQL::procedure",
          description:
            "The `procedure` function is nested in the sql statement",
          link: "procedure",
          code: (
            <>
              <h2 className="pb-2">PROCEDURE</h2>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language="sql"
                  content={"SHOW PROCEDURE STATUS WHERE Db='my_database'"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->procedure()->status()->where(DB::equalTo('Db'), 'my_database')->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language="sql"
                  content={"SHOW PROCEDURE STATUS WHERE Db='my_database'"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::connection('my_database')->show()->procedure()->status()->where(DB::equalTo('Db'), 'my_database')->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        status: {
          title: "MySQL::status",
          description: "The `status` function is nested in the sql statement",
          link: "status",
          code: (
            <>
              <h2 className="pb-2">STATUS</h2>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language="sql"
                  content={"SHOW PROCEDURE STATUS WHERE Db='my_database'"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->procedure()->status()->where(DB::equalTo('Db'), 'my_database')->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language="sql"
                  content={"SHOW PROCEDURE STATUS WHERE Db='my_database'"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::connection('my_database')->show()->procedure()->status()->where(DB::equalTo('Db'), 'my_database')->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        create: {
          title: "MySQL::create",
          description: "The `create` function is nested in the sql statement",
          link: "create",
          code: (
            <>
              <h2 className="pb-2">CREATE</h2>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language="sql"
                  content={"SHOW CREATE VIEW my_view"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->create()->view('my_view', true, true)->get();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

                <CodeBlock
                  language="sql"
                  content={"SHOW CREATE VIEW my_database.my_view"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::show()->create()->view('my_view', false, true)->get();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #3</h5>

                <CodeBlock
                  language="sql"
                  content={"SHOW CREATE VIEW my_view"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::connection('my_database')->show()->create()->view('my_view', true, true)->get();"
                  }
                />
              </div>
            </>
          ),
        },
        where: {
          title: "MySQL::where",
          description:
            "The `where` function is nested in the current `sql` statement",
          link: "where",
          code: (
            <>
              <h2 className="pb-2">WHERE</h2>
              <hr />

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT my_table.column1, my_table.column2 FROM table AS my_table WHERE my_table.column1=1"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table(DB::alias('table', 'my_table'))->select(\n" +
                    "\tDB::alias('column1', 'my_table', true),\n" +
                    "\tDB::alias('column2', 'my_table', true),\n" +
                    ")->where(\n" +
                    "\tDB::equalTo(DB::alias('column1', 'my_table', true)), 1\n" +
                    ")->get();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="sql"
                  content={"SELECT column1, column2 FROM table WHERE column1=1"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('table')->select(\n" +
                    "\t'column1',\n" +
                    "\t'column2'\n" +
                    ")->where(\n" +
                    "\tDB::equalTo('column1'), 1\n" +
                    ")->get();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM my_table WHERE column1=?"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')\n\t->select()\n\t->where(DB::equalTo('column1'), 1)\n\t->get();"
                  }
                />
              </div>
            </>
          ),
        },
        and: {
          title: "MySQL::and",
          description:
            "The `and` function is nested in the current `sql` statement",
          link: "and",
          code: (
            <>
              <h2 className="pb-2">AND</h2>
              <hr />

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT * FROM my_table WHERE id=1 AND date='2022-11-04'"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->where(\n" +
                    "\tDB::equalTo('id'), 1\n" +
                    ")->and(\n" +
                    "\tDB::equalTo('date'), '2022-11-04'\n" +
                    ")->get();\n"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT * FROM my_table WHERE id=1 AND date IS NOT NULL"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->where(\n" +
                    "\tDB::equalTo('id'), 1\n" +
                    ")->and('date')->isNotNull()->get();\n"
                  }
                />
              </div>
            </>
          ),
        },
        or: {
          title: "MySQL::or",
          description:
            "The `or` function is nested in the current `sql` statement",
          link: "or",
          code: (
            <>
              <h2 className="pb-2">OR</h2>
              <hr />

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language="sql"
                  content={"SELECT * FROM my_table WHERE id=1 OR id=2"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->where(\n" +
                    "\tDB::equalTo('id'), 1\n" +
                    ")->or(\n" +
                    "\tDB::equalTo('id'), 2\n" +
                    ")->get();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language="sql"
                  content={
                    "SELECT * FROM my_table WHERE id=1 OR date IS NOT NULL"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->where(\n" +
                    "\tDB::equalTo('id'), 1\n" +
                    ")->or('date')->isNotNull()->get();"
                  }
                />
              </div>
            </>
          ),
        },
        update: {
          title: "MySQL::update",
          description:
            "The `update` function is nested above the current `sql` statement",
          link: "update",
          code: (
            <>
              <h2 className="pb-2">UPDATE</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language={"sql"}
                  content={
                    "UPDATE table SET name=?, date=?, phone=? WHERE id=1"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->update([\n" +
                    "\t'name' => 'Sergio'\n" +
                    "\t'date' => '1999-09-30'\n" +
                    "\t'phone' => '3159999999'\n" +
                    "])->where(\n\tDB::equalTo('id'), 1\n)->execute();"
                  }
                />
              </div>
            </>
          ),
        },
        delete: {
          title: "MySQL::delete",
          description:
            "The `delete` function is nested above the current `sql` statement",
          link: "delete",
          code: (
            <>
              <h2 className="pb-2">DELETE</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language={"sql"}
                  content={"DELETE FROM my_table WHERE id=1"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::table('my_table')\n\t->delete()\n\t->where(DB::equalTo('id'), 1)\n\t->execute();\n"
                  }
                />
              </div>
            </>
          ),
        },
        call: {
          title: "MySQL::call",
          description:
            "The `call` function executes a stored procedure in the database",
          link: "call",
          code: (
            <>
              <h2 className="pb-2">CALL</h2>
              <hr />

              <div className="mb-3">
                <CodeBlock
                  language={"sql"}
                  content={"CALL name_procedure('name', 'date', 3159999999)"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::call('name_procedure', [\n" +
                    "\t'Sergio',\n\t'1999-09-30',\n\t1\n" +
                    "])->execute();\n\n"
                  }
                />
              </div>
            </>
          ),
        },
        in: {
          title: "MySQL::in",
          description:
            "The `in` function nests the required parameters to the current statement",
          link: "in",
          code: (
            <>
              <h2 className="pb-2">IN</h2>
              <hr />

              <CodeBlock
                language={"sql"}
                content={
                  "UPDATE users SET name=?, last_name=? WHERE id IN(?,?,?,?)"
                }
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')->update([\n" +
                  "\t'name' => 'Sergio'\n" +
                  "\t'last_name' => 'Leon'\n" +
                  "])->where('id')->in(1, 2, 3, 4)->execute();"
                }
              />
            </>
          ),
        },
        "is-null": {
          title: "MySQL::isNull",
          description:
            "The `isNull` function nests the IS NULL function to the current statement",
          link: "is-null",
          code: (
            <>
              <h2 className="pb-2">IS NULL</h2>
              <hr />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM users WHERE deleted_at IS NULL"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')->select()->where('deleted_at')->isNull()->getAll();"
                }
              />
            </>
          ),
        },
        "is-not-null": {
          title: "MySQL::isNotNull",
          description:
            "The `isNotNull` function nests the IS NOT NULL function to the current statement",
          link: "is-not-null",
          code: (
            <>
              <h2 className="pb-2">IS NOT NULL</h2>
              <hr />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM users WHERE deleted_at IS NOT NULL"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')->select()->where('deleted_at')->isNotNull()->getAll();"
                }
              />
            </>
          ),
        },
        day: {
          title: "MySQL::day",
          description: "The `day` function returns the mysql day function",
          link: "day",
          code: (
            <>
              <h2 className="pb-2">DAY</h2>
              <hr />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM users WHERE DAY(column_day)=?"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')\n\t->select()\n\t->where(DB::equalTo(DB::day('column_day')), '2023-05-02')\n\t->getAll();"
                }
              />
            </>
          ),
        },
        month: {
          title: "MySQL::month",
          description: "The `month` function returns the mysql month function",
          link: "month",
          code: (
            <>
              <h2 className="pb-2">MONTH</h2>
              <hr />

              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM users WHERE MONTH(column_month)=?"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')\n\t->select()\n\t->where(DB::equalTo(DB::month('column_month')), '2023-05-02')\n\t->getAll();"
                }
              />
            </>
          ),
        },
        year: {
          title: "MySQL::year",
          description: "The `year` function returns the mysql year function",
          link: "year",
          code: (
            <>
              <h2 className="pb-2">YEAR</h2>
              <hr />
              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM users WHERE YEAR(column_year)=?"}
              />
              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')\n\t->select()\n\t->where(DB::equalTo(DB::year('column_year')), '2023-05-02')\n\t->getAll();"
                }
              />
              |
            </>
          ),
        },
        drop: {
          title: "MySQL::drop",
          description:
            "The `drop` function drops a table or view from the database",
          link: "drop",
          code: (
            <>
              <h2 className="pb-2">DROP</h2>
              <hr />
              <CodeBlock
                language={"sql"}
                content={"DROP TABLE example_2023_05"}
              />
              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('example_2023_05')\n\t->drop()\n\t->execute();"
                }
              />
              |
            </>
          ),
        },
        query: {
          title: "MySQL::query",
          description: "The `query` function allows you to execute any query",
          link: "query",
          code: (
            <>
              <h2 className="pb-2">QUERY</h2>
              <hr />

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"sql"}
                  content={"DROP TABLE example_2023_05"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::query('DROP TABLE example_2023_05')->execute();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock language={"sql"} content={"SELECT * FROM users"} />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::query('SELECT * FROM users')->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"sql"}
                  content={"SELECT * FROM users WHERE idusers=1"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "DB::query('SELECT * FROM users WHERE idusers=1')->get();"
                  }
                />
              </div>
            </>
          ),
        },
        "get-query-string": {
          title: "MySQL::getQueryString",
          description:
            "The `getQueryString` function returns the string generated in the current statement",
          link: "get-query-string",
          code: (
            <>
              <h2 className="pb-2">GET QUERY STRING</h2>
              <hr />

              <CodeBlock language={"sql"} content={"SELECT * FROM users"} />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                  "DB::table('users')->select()->getQueryString();"
                }
              />
            </>
          ),
        },
      },
    },
    schema: {
      title: "LionSQL\\Drivers\\MySQL\\Schema",
      description:
        "The `Schema` class allows creating tables with dynamic parameters through arrays",
      url: "/libraries/lion/sql/item_version/schema/create",
      methods: {
        create: {
          title: "Schema::create",
          description: "The `create` function creates tables in the database",
          link: "create",
          code: (
            <>
              <h1>CREATE</h1>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning">Example #1</h5>

                <CodeBlock
                  language={"sql"}
                  content={
                    "CREATE SCHEMA my_database DEFAULT CHARACTER SET UTF8 COLLATE UTF8_SPANISH_CI;"
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\Schema;\n\n" +
                    "Schema::schema('my_database')->create()->execute(); // default: 'UTF8', 'UTF8_SPANISH_CI', 'INNODB'"
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\Schema;\n\n" +
                    "Schema::schema('my_database')->create('UTF8', 'UTF8_SPANISH_CI', 'INNODB')->execute();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #2</h5>

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

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\Schema;\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
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
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #3</h5>

                <CodeBlock
                  language={"sql"}
                  content={
                    "USE `my_database`;\n\n" +
                    "CREATE OR REPLACE VIEW `my_view` AS\n" +
                    "\tSELECT * FROM my_table"
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\Schema;\n" +
                    "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n\n" +
                    "Schema::view('my_view')\n" +
                    "\t->create()\n" +
                    "\t->groupQuery(function(DB $db) {\n" +
                    "\t\t$db->table('my_table')->select();\n" +
                    "\t})\n" +
                    "\t->execute();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">Example #4</h5>

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

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL\\Schema;\n\n" +
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
              </div>
            </>
          ),
        },
        column: {
          title: "Schema::column",
          description:
            "The `column` function allows you to add properties to automatically generate columns",
          link: "column",
          code: (
            <>
              <h2>COLUMNS</h2>
              <hr />

              <p>
                There are different properties available to add to columns
                dynamically.
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL\\Schema;\n\n" +
                  "Schema::column('column_name', ['options...']);"
                }
              />

              <ul>
                {args.map((arg, index) => (
                  <li key={index}>
                    <h6 className="text-warning">{arg.key}:</h6>
                    <p>{arg.desc}</p>
                  </li>
                ))}
              </ul>
            </>
          ),
        },
      },
    },
  };
}
