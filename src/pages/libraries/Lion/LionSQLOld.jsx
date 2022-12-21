import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ListTabs from "../components/ListTabs";
import Badge from "react-bootstrap/Badge";
import { BsGithub } from "react-icons/bs";
import { Button, Table } from "react-bootstrap";
import AccordionItems from "../components/AccordionItems";

function LionSQL() {
  const [items, setItems] = useState([
    {
      event: "getting-started",
      name: "GETTING STARTED",
    },
    {
      event: "connection",
      name: "CONNECTION",
    },
    {
      event: "operators",
      name: "OPERATORS",
    },
    {
      event: "insert",
      name: "INSERT",
    },
    {
      event: "select",
      name: "SELECT",
    },
    {
      event: "where",
      name: "WHERE",
    },
    {
      event: "and",
      name: "AND",
    },
    {
      event: "or",
      name: "OR",
    },
    {
      event: "update",
      name: "UPDATE",
    },
    {
      event: "delete",
      name: "DELETE",
    },
    {
      event: "call",
      name: "CALL",
    },
    {
      event: "credits-license",
      name: "CREDITS AND LICENSE",
    },
  ]);

  const [panes, setPanes] = useState([
    {
      event: "getting-started",
      content: (
        <>
          <Button
            variant="dark"
            href="https://github.com/Sleon4/Lion-SQL"
            target="_blank"
          >
            <BsGithub size={"2em"} className="me-2" />
            Lion-SQL
          </Button>

          <hr />

          <div className="mb-4">
            <h2 className="pb-2">Lion-SQL</h2>

            <p>
              Package responsible for generating and executing MySQL processes.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">INSTALL</h4>

            <CodeBlock
              language="powershell"
              content={"composer require lion/sql"}
            />
          </div>
        </>
      ),
    },
    {
      event: "connection",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">CONNECTION</h4>

            <p>
              The connection is established using an array containing data about
              your configuration to connect, currently only available with
              MySQL.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                'require_once("vendor/autoload.php");\n\n' +
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

            <p>
              The configuration can be overridden and parameterized as required.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                'require_once("vendor/autoload.php");\n\n' +
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
        </>
      ),
    },
    {
      event: "operators",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">OPERATORS</h4>

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
    {
      event: "insert",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">INSERT</h4>

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
          </div>
        </>
      ),
    },
    {
      event: "select",
      content: (
        <>
          <AccordionItems
            items={[
              {
                header: "SELECT",
                body: (
                  <>
                    <CodeBlock
                      language="sql"
                      content={"SELECT * FROM my_table"}
                    />

                    <CodeBlock
                      language="php"
                      content={
                        "<?php\n\n" +
                        "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                        "DB::table('my_table')->select()->getAll();"
                      }
                    />

                    <hr className="text-white" />

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
                  </>
                ),
              },
              {
                header: "BETWEEN",
                body: (
                  <>
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
                        "DB::table('my_table')->select()->where('date')->between('2022-11-01', '2022-11-04')->getAll();"
                      }
                    />
                  </>
                ),
              },
              {
                header: "LIKE",
                body: (
                  <>
                    <CodeBlock
                      language="sql"
                      content={
                        "SELECT * FROM my_table WHERE column1 LIKE '%my_text%'"
                      }
                    />

                    <CodeBlockWHERE
AND

                      language="php"
                      content={
                        "<?php\n\n" +
                        "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                        "DB::table('my_table')->select()->where('column1')->like('%my_text%')->getAll();"
                      }
                    />
                  </>
                ),
              },
              {
                header: "JOIN (INNER, LEFT AND RIGHT)",
                body: (
                  <>
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
                  </>
                ),
              },
              {
                header: "MIN",
                body: (
                  <>
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
                  </>
                ),
              },
              {
                header: "MAX",
                body: (
                  <>
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
                  </>
                ),
              },
              {
                header: "COUNT",
                body: (
                  <>
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
                  </>
                ),
              },
              {
                header: "SUM",
                body: (
                  <>
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
                  </>
                ),
              },
              {
                header: "AVG",
                body: (
                  <>
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
                  </>
                ),
              },
              {
                header: "ORDER BY",
                body: (
                  <>
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
                  </>
                ),
              },
              {
                header: "GROUP BY",
                body: (
                  <>
                    <CodeBlock
                      language={"sql"}
                      content={
                        "SELECT * FROM my_table GROUP BY date_start, name"
                      }
                    />

                    <CodeBlock
                      language="php"
                      content={
                        "<?php\n\n" +
                        "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                        "DB::table('my_table')->select()->groupBy('date_start', 'name')->getAll();\n"
                      }
                    />
                  </>
                ),
              },
              {
                header: "LIMIT",
                body: (
                  <>
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

                    <hr className="text-white" />

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
                  </>
                ),
              },
              {
                header: "HAVING",
                body: (
                  <>
                    <CodeBlock
                      language={"sql"}
                      content={"SELECT * FROM my_table HAVING id > 10"}
                    />

                    <CodeBlock
                      language="php"
                      content={
                        "<?php\n\n" +
                        "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                        "DB::table('my_table')->select()->having(DB::greaterThan('id'), 10)->getAll();"
                      }
                    />
                  </>
                ),
              },
              {
                header: "SHOW COLUMNS",
                body: (
                  <>
                    <CodeBlock
                      language="php"
                      content={
                        "<?php\n\n" +
                        "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                        "DB::table('my_table')->showColumns()->getAll();"
                      }
                    />
                  </>
                ),
              },
              {
                header: "SHOW TABLES",
                body: (
                  <>
                    <CodeBlock
                      language="php"
                      content={
                        "<?php\n\n" +
                        "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                        "DB::showTables()->getAll();"
                      }
                    />
                  </>
                ),
              },
            ]}
          />
        </>
      ),
    },
    {
      event: "where",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">WHERE</h4>

            <div className="mb-3">
              <h5>Example #1</h5>

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
          </div>

          <hr />

          <div className="mb-3">
            <h5>Example #2</h5>

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

          <hr />

          <div className="mb-3">
            <h5>Example #3</h5>

            <CodeBlock
              language="sql"
              content={"SELECT * FROM my_table WHERE column1=?"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                "DB::table('my_table')->select()->where(DB::equalTo('column1'), 1)->get();"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "and",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">AND</h4>

            <h5>Example #1</h5>

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
        </>
      ),
    },
    {
      event: "or",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">OR</h4>

            <h5>Example #1</h5>

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
        </>
      ),
    },
    {
      event: "update",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">UPDATE</h4>

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
                "])->where(DB::equalTo('id'), 1)->execute();"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "delete",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">DELETE</h4>

            <CodeBlock
              language={"sql"}
              content={"DELETE FROM my_table WHERE id=1"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as DB;\n\n" +
                "DB::table('my_table')->delete()->where(DB::equalTo('id'), 1)->execute();\n"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "call",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">CALL</h4>

            <p>
              Stored procedures have their name as their first parameter. The
              second parameter has an array with the number of elements
              required.
            </p>

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
                "]);\n\n"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "credits-license",
      content: (
        <>
          <div className="mb-4">
            <h2 className="pb-2">Credits license</h2>
            Copyright © 2022{" "}
            <a
              href="https://github.com/Sleon4/Lion-SQL/blob/main/LICENSE"
              target={"_blank"}
            >
              MIT License
            </a>
          </div>
        </>
      ),
    },
  ]);

  // getting-started
  return <ListTabs default="getting-started" items={items} panes={panes} />;
}

export default LionSQL;
