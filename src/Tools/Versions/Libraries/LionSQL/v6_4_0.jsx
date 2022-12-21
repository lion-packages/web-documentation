import { Badge, Col, Row, Table } from "react-bootstrap";
import CodeBlock from "../../../../pages/components/CodeBlock";

export function v6_4_0_CHANGELOG() {
  return {};
}

export default function v6_4_0() {
  return {
    "mysql-driver": {
      title: "LionSQL\\Drivers\\MySQLDriver",
      description: "-----",
      url: "/libraries/lion/sql/item_version/mysql-driver/init",
      methods: {
        init: {
          title: "MySQLDriver::init",
          description: "-----",
          link: "init",
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
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                    "DB::init([\n" +
                    "\t'type' => 'mysql',\n" +
                    "\t'host' => 'localhost',\n" +
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
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                    "DB::init([\n" +
                    "\t'type' => 'mysql',\n" +
                    "\t'host' => 'localhost',\n" +
                    "\t'dbname' => 'example',\n" +
                    "\t'user' => 'root',\n" +
                    "\t'password' => ''\n" +
                    "\t'config' => [\n" +
                    "\t\tPDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n" +
                    "\t]\n]);"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">OPERATORS</h5>

                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>TYPE</th>
                      <th>FUNCTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "=",
                        description:
                          "If both the operands have equal value, the condition becomes true; if not then false.",
                        function: "DB::equalTo('id')",
                      },
                      {
                        type: ">",
                        description:
                          "If the value of left operand is greater than that of the value of the right operand, the condition becomes true; if not then false.",
                        function: "DB::greaterThan('id');",
                      },
                      {
                        type: "<",
                        description:
                          "If the value of left operand is less than that of a value of the right operand, the condition becomes true; if not then false.",
                        function: "DB::lessThan('id');",
                      },
                      {
                        type: ">=",
                        description:
                          "If the value of left operand is greater than or equal to the right operand, the condition becomes true; if not then false.",
                        function: "DB::greaterThanOrEqualTo('id')",
                      },
                      {
                        type: "<=",
                        description:
                          "If the value of left operand is less than or equal to the right operand, the condition becomes true; if not then false.",
                        function: "DB::lessThanOrEqualTo('id')",
                      },
                      {
                        type: "<>",
                        description:
                          "If the values of two operands are not equal, the condition becomes true; if not then false.",
                        function: "DB::notEqualTo('id')",
                      },
                    ].map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.type}</td>
                          <td>{item.function}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </>
          ),
        },
        insert: {
          title: "MySQLDriver::insert",
          description: "-----",
          link: "insert",
          code: (
            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                "DB::table('my_table')->insert([\n" +
                "\t'name' => 'Sergio',\n" +
                "\t'lastname' => 'Leon'\n" +
                "])->execute();"
              }
            />
          ),
        },
        select: {
          title: "MySQLDriver::select",
          description: "-----",
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
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                    "DB::table('my_table')->select()->getAll();"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>
                <CodeBlock
                  language="sql"
                  content={
                    "SELECT alias.column1, alias.column2, alias.column3, alias.column4 FROM table AS my_table\n"
                  }
                />

                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                    "DB::table(DB::alias('table', 'my_table'))->select(\n" +
                    "\tDB::alias('column1', 'my_table', true),\n" +
                    "\tDB::alias('column2', 'my_table', true),\n" +
                    "\tDB::alias('column3', 'my_table', true),\n" +
                    "\tDB::alias('column4', 'my_table', true)\n" +
                    ")->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        between: {
          title: "MySQLDriver::between",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')\n\t->select()\n\t->where('date')\n\t->between('2022-11-01', '2022-11-04')\n\t->getAll();"
                }
              />
            </div>
          ),
        },
        like: {
          title: "MySQLDriver::like",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')\n\t->select()\n\t->where('column1')\n\t->like('%my_text%')\n\t->getAll();"
                }
              />
            </div>
          ),
        },
        join: {
          title: "MySQLDriver::inner/left/right",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table(DB::alias('table1', 'my_table_1'))->select(\n" +
                  "\tDB::alias('table1', 'my_table_1', true)\n" +
                  "\tDB::alias('table1', 'my_table_2', true)\n" +
                  ")->innerJoin( //leftJoin(...) and rightJoin(...)\n" +
                  "\tDB::alias('table12', 'my_table_2'), \n" +
                  "\tDB::alias('id_a', 'my_table_1', true), \n" +
                  "\tDB::alias('id_a', 'my_table_2', true), \n" +
                  ")" +
                  "->getAll();"
                }
              />
            </div>
          ),
        },
        min: {
          title: "MySQLDriver::min",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')->select(DB::min('id'))->get();"
                }
              />
            </div>
          ),
        },
        max: {
          title: "MySQLDriver::max",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')->select(DB::max('id'))->get();"
                }
              />
            </div>
          ),
        },
        count: {
          title: "MySQLDriver::count",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')->select(DB::count('*'))->get();"
                }
              />
            </div>
          ),
        },
        sum: {
          title: "MySQLDriver::sum",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')->select(DB::sum('price'))->get();"
                }
              />
            </div>
          ),
        },
        avg: {
          title: "MySQLDriver::avg",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')->select(DB::avg('price'))->get();"
                }
              />
            </div>
          ),
        },
        "order-by": {
          title: "MySQLDriver::orderBy",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')->select()->orderBy('id', 'name')->getAll();\n"
                }
              />
            </div>
          ),
        },
        "group-by": {
          title: "MySQLDriver::groupBy",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')\n\t->select()\n\t->groupBy('date_start', 'name')\n\t->getAll();\n"
                }
              />
            </div>
          ),
        },
        limit: {
          title: "MySQLDriver::limit",
          description: "-----",
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
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                    "DB::table('my_table')->select()->limit(1)->get();"
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
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                    "DB::table('my_table')->select()->limit(0, 10)->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        having: {
          title: "MySQLDriver::having",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')\n\t->select()\n\t->having(DB::greaterThan('id'), 10)\n\t->getAll();"
                }
              />
            </div>
          ),
        },
        show: {
          title: "MySQLDriver::show",
          description: "-----",
          link: "show",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>
                <CodeBlock
                  language="php"
                  content={
                    "<?php\n\n" +
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
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
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                    "DB::show()->tables()->getAll();"
                  }
                />
              </div>
            </>
          ),
        },
        where: {
          title: "MySQLDriver::where",
          description: "-----",
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
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
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
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
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
                    "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                    "DB::table('my_table')\n\t->select()\n\t->where(DB::equalTo('column1'), 1)\n\t->get();"
                  }
                />
              </div>
            </>
          ),
        },
        and: {
          title: "MySQLDriver::and",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
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
          title: "MySQLDriver::or",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
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
          title: "MySQLDriver::update",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
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
          title: "MySQLDriver::delete",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::table('my_table')\n\t->delete()\n\t->where(DB::equalTo('id'), 1)\n\t->execute();\n"
                }
              />
            </div>
          ),
        },
        call: {
          title: "MySQLDriver::call",
          description: "-----",
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
                  "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                  "DB::call('name_procedure', [\n" +
                  "\t'Sergio', '1999-09-30', 1\n" +
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
