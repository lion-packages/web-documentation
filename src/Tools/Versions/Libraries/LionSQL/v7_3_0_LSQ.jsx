import CodeBlock from "../../../../pages/components/CodeBlock";

export default function v7_3_0_LSQ() {
  return {
    driver: {
      title: "LionSQL\\Drivers\\Driver",
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

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\Driver;\n\n" +
                    "Driver::run([\n" +
                    "\t'type' => 'mysql',\n" +
                    "\t'host' => 'localhost',\n" +
                    "\t'port' => 3306,\n" +
                    "\t'dbname' => 'example',\n" +
                    "\t'user' => 'root',\n" +
                    "\t'password' => ''\n" +
                    "]);"
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
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\Driver;\n\n" +
                    "Driver::run([\n" +
                    "\t'type' => 'mysql',\n" +
                    "\t'host' => 'localhost',\n" +
                    "\t'port' => 3306,\n" +
                    "\t'dbname' => 'example',\n" +
                    "\t'user' => 'root',\n" +
                    "\t'password' => ''\n" +
                    "\t'config' => [\n" +
                    "\t\tPDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n" +
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
      title: "LionSQL\\Drivers\\MySQL",
      description:
        "The `MySQL` class manages processes in the MySQL database, to connect to a database read the `Driver` class first",
      url: "/libraries/lion/sql/item_version/mysql/insert",
      methods: {
        insert: {
          title: "MySQL::insert",
          description:
            "The `insert` function executes an insert statement in the database to a given table",
          link: "insert",
          code: (
            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                "DB::table('my_table')->insert([\n" +
                "\t'name' => 'Sergio',\n" +
                "\t'lastname' => 'Leon'\n" +
                "])->execute();"
              }
            />
          ),
        },
        select: {
          title: "MySQL::select",
          description:
            "The `between` function nests the `sql` statement in the current query",
          link: "select",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>
                <CodeBlock language="sql" content={"SELECT * FROM my_table"} />

                <CodeBlock
                  language="php"
                  content={
                    "SELECT * FROM my_table\n\n" +
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->select()->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>
                <CodeBlock
                  language="sql"
                  content={
                    "SELECT alias.column1, column2, column3, alias.column4 FROM my_table AS alias\n"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
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
        "select-distinct": {
          title: "MySQL::selectDistinct",
          description:
            "The `selectDistinct` function nests the `sql` statement in the current query",
          link: "select-distinct",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>
                <CodeBlock
                  language="sql"
                  content={"SELECT DISTINCT column1, column2 FROM my_table"}
                />
                <CodeBlock
                  language="php"
                  content={
                    "SELECT * FROM my_table\n\n" +
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->selectDistinct('column1', 'column2')->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>
                <CodeBlock
                  language="sql"
                  content={
                    "SELECT DISTINCT alias.column1, column2, column3, alias.column4 FROM my_table AS alias\n"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
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
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>
                <CodeBlock
                  language="sql"
                  content={"SELECT CONCAT(name, ' ', lastname) FROM users"}
                />

                <CodeBlock
                  language="php"
                  content={
                    "SELECT * FROM my_table\n\n" +
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                    "DB::table('users')\n\t->select(DB::concat(DB::column('name'), ' ', DB::column('lastname')))\n\t->getAll();"
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
                    "SELECT * FROM my_table\n\n" +
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                    "DB::table(DB::as('users', 'usr'))\n" +
                    "\t->select(\n" +
                    "\t\tDB::concat(DB::column('name', 'usr'), ' ', DB::column('lastname', 'usr'))\n" +
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
              <CodeBlock
                language="sql"
                content={
                  "(SELECT * FROM my_table) UNION (SELECT * FROM my_table2)"
                }
              />

              <CodeBlock
                language="php"
                content={
                  "SELECT * FROM my_table\n\n" +
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select()->union()->table('my_table2')->select()->getAll();"
                }
              />
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
              <CodeBlock
                language="sql"
                content={
                  "(SELECT * FROM my_table) UNION ALL (SELECT * FROM my_table2)"
                }
              />

              <CodeBlock
                language="php"
                content={
                  "SELECT * FROM my_table\n\n" +
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select()->unionAll()->table('my_table2')->select()->getAll();"
                }
              />
            </>
          ),
        },
        between: {
          title: "MySQL::between",
          description:
            "The `between` function nests the `sql` statement in the current query",
          link: "between",
          code: (
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
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')\n\t->select()\n\t->where('date')\n\t->between('2022-11-01', '2022-11-04')\n\t->getAll();"
                }
              />
            </div>
          ),
        },
        like: {
          title: "MySQL::like",
          description:
            "The `like` function nests the `sql` statement in the current query",
          link: "like",
          code: (
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
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')\n\t->select()\n\t->where('column1')\n\t->like('%my_text%')\n\t->getAll();"
                }
              />
            </div>
          ),
        },
        join: {
          title: "MySQL::innerJoin/leftJoin/rightJoin",
          description:
            "The function is nested to the `sql` statement in the current query",
          link: "join",
          code: (
            <div className="mb-3">
              <CodeBlock
                language="sql"
                content={
                  "SELECT my_table_1.id_a, my_table_2.name FROM table1 AS my_table_1 \n" +
                  "\tINNER JOIN table2 AS my_table_2 ON my_table_1.id_a=my_table_2.id_a\n"
                }
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
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
          ),
        },
        min: {
          title: "MySQL::min",
          description:
            "The `min` function is nested in the current `sql` statement",
          link: "min",
          code: (
            <div className="mb-3">
              <CodeBlock
                language="sql"
                content={"SELECT MIN(id) FROM my_table"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select(DB::min('id'))->get();"
                }
              />
            </div>
          ),
        },
        max: {
          title: "MySQL::max",
          description:
            "The `max` function is nested in the current `sql` statement",
          link: "max",
          code: (
            <div className="mb-3">
              <CodeBlock
                language="sql"
                content={"SELECT MAX(id) FROM my_table"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select(DB::max('id'))->get();"
                }
              />
            </div>
          ),
        },
        count: {
          title: "MySQL::count",
          description: "The `count` function is added above the sql statement",
          link: "count",
          code: (
            <div className="mb-3">
              <CodeBlock
                language="sql"
                content={"SELECT COUNT(*) FROM my_table"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select(DB::count('*'))->get();"
                }
              />
            </div>
          ),
        },
        sum: {
          title: "MySQL::sum",
          description: "The `sum` function is added above the sql statement",
          link: "sum",
          code: (
            <div className="mb-3">
              <CodeBlock
                language="sql"
                content={"SELECT SUM(price) FROM my_table"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select(DB::sum('price'))->get();"
                }
              />
            </div>
          ),
        },
        avg: {
          title: "MySQL::avg",
          description: "The `avg` function is added above the sql statement",
          link: "avg",
          code: (
            <div className="mb-3">
              <CodeBlock
                language="sql"
                content={"SELECT AVG(price) FROM my_table"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select(DB::avg('price'))->get();"
                }
              />
            </div>
          ),
        },
        "order-by": {
          title: "MySQL::orderBy",
          description:
            "The `orderBy` function is nested in the current `sql` statement",
          link: "order-by",
          code: (
            <div className="mb-3">
              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM my_table ORDER BY id, name"}
              />
              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select()->orderBy('id', 'name')->getAll();\n"
                }
              />
            </div>
          ),
        },
        "group-by": {
          title: "MySQL::groupBy",
          description:
            "The `groupBy` function is nested in the current `sql` statement",
          link: "group-by",
          code: (
            <div className="mb-3">
              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM my_table GROUP BY date_start, name"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')\n\t->select()\n\t->groupBy('date_start', 'name')\n\t->getAll();\n"
                }
              />
            </div>
          ),
        },
        limit: {
          title: "MySQL::limit",
          description:
            "The `limit` function is nested in the current `sql` statement",
          link: "limit",
          code: (
            <>
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
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
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
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
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
              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM my_table LIMIT 100 OFFSET 100"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
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
            <div className="mb-3">
              <CodeBlock
                language={"sql"}
                content={"SELECT * FROM my_table HAVING id > 10"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')\n\t->select()\n\t->having(DB::greaterThan('id'), 10)\n\t->getAll();"
                }
              />
            </div>
          ),
        },
        show: {
          title: "MySQL::show",
          description:
            "The `show` function is nested in the current `sql` statement",
          link: "show",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>
                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                    "DB::table('my_table')->show()->columns()->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>
                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                    "DB::show()->tables()->getAll();"
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
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
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
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
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
                    "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
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
            <div className="mb-3">
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
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select()->where(\n" +
                  "\tDB::equalTo('id'), 1\n" +
                  ")->and(\n" +
                  "\tDB::equalTo('date'), '2022-11-04'\n" +
                  ")->get();\n"
                }
              />
            </div>
          ),
        },
        or: {
          title: "MySQL::or",
          description:
            "The `or` function is nested in the current `sql` statement",
          link: "or",
          code: (
            <div className="mb-3">
              <CodeBlock
                language="sql"
                content={"SELECT * FROM my_table WHERE id=1 OR id=2"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->select()->where(\n" +
                  "\tDB::equalTo('id'), 1\n" +
                  ")->or(\n" +
                  "\tDB::equalTo('id'), 2\n" +
                  ")->get();\n"
                }
              />
            </div>
          ),
        },
        update: {
          title: "MySQL::update",
          description:
            "The `update` function is nested above the current `sql` statement",
          link: "update",
          code: (
            <div className="mb-3">
              <CodeBlock
                language={"sql"}
                content={"UPDATE table SET name=?, date=?, phone=? WHERE id=1"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')->update([\n" +
                  "\t'name' => 'Sergio'\n" +
                  "\t'date' => '1999-09-30'\n" +
                  "\t'phone' => '3159999999'\n" +
                  "])->where(\n\tDB::equalTo('id'), 1\n)->execute();"
                }
              />
            </div>
          ),
        },
        delete: {
          title: "MySQL::delete",
          description:
            "The `delete` function is nested above the current `sql` statement",
          link: "delete",
          code: (
            <div className="mb-3">
              <CodeBlock
                language={"sql"}
                content={"DELETE FROM my_table WHERE id=1"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::table('my_table')\n\t->delete()\n\t->where(DB::equalTo('id'), 1)\n\t->execute();\n"
                }
              />
            </div>
          ),
        },
        call: {
          title: "MySQL::call",
          description:
            "The `call` function executes a stored procedure in the database",
          link: "call",
          code: (
            <div className="mb-3">
              <CodeBlock
                language={"sql"}
                content={"CALL name_procedure('name', 'date', 3159999999)"}
              />

              <CodeBlock
                language="php"
                content={
                  "<?php\n\n" +
                  "use LionSQL\\Drivers\\MySQL as DB;\n\n" +
                  "DB::call('name_procedure', [\n" +
                  "\t'Sergio',\n\t'1999-09-30',\n\t1\n" +
                  "])->execute();\n\n"
                }
              />
            </div>
          ),
        },
      },
    },
  };
}
