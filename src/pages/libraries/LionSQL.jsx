import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ListTabs from "../components/ListTabs";
import Badge from "react-bootstrap/Badge";
import { BsGithub } from "react-icons/bs";
import { Button } from "react-bootstrap";

function LionSQL() {
  const [items, setItems] = useState([
    {
      event: "getting-started",
      name: "Getting started",
    },
    {
      event: "connection",
      name: "CONNECTION",
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
      event: "between",
      name: "BETWEEN",
    },
    {
      event: "like",
      name: "LIKE",
    },
    {
      event: "join",
      name: "JOIN",
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
      event: "min",
      name: "MIN",
    },
    {
      event: "max",
      name: "MAX",
    },
    {
      event: "count",
      name: "COUNT",
    },
    {
      event: "avg",
      name: "AVG",
    },
    {
      event: "sum",
      name: "SUM",
    },
    {
      event: "order-by",
      name: "ORDER BY",
    },
    {
      event: "group-by",
      name: "GROUP BY",
    },
    {
      event: "limit",
      name: "LIMIT",
    },
    {
      event: "having",
      name: "HAVING",
    },
    {
      event: "show",
      name: "SHOW",
    },
    {
      event: "credits-license",
      name: "Credits and license",
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
              content={"composer require lion-framework/lion-sql"}
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
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "Builder::init([\n" +
                "\t'host' => 'localhost',\n" +
                "\t'port' => 3306,\n" +
                "\t'db_name' => 'example',\n" +
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
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "Builder::init([\n" +
                "\t'host' => 'localhost',\n" +
                "\t'port' => 3306,\n" +
                "\t'db_name' => 'example',\n" +
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
      event: "insert",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">INSERT</h4>

            <p>
              The first parameter is defined by the name of the table to insert
              data, The second parameter is set by the number of columns
              separated by <Badge bg={"secondary"}>(,)</Badge> without spaces,
              The third parameter is an array that contains the arrays of data
              to insert.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::insert('table', 'column,column,column', [\n" +
                "\t1, 'example_name', '1999-09-30'\n" +
                "]);\n\n" +
                "var_dump($list);"
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
          <div className="mb-4">
            <h4 className="pb-2">SELECT</h4>

            <p>
              The first parameter to define the type of method to use{" "}
              <Badge bg={"secondary"}>(fetch, fetchAll)</Badge>, The second
              parameter is defined for the name of the table, The third
              parameter is defined by the alias{" "}
              <Badge bg={"secondary"}>(AS)</Badge>, The fourth parameter is
              defined by the <Badge bg={"secondary"}>columns</Badge> you want to
              bring.
            </p>

            <h5>Example #1</h5>

            <CodeBlock
              language="sql"
              content={
                "SELECT alias.column, alias.column, alias.column, alias.column FROM table AS alias\n"
              }
            />

            <p>equivalent to</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table', 'alias', 'alias.column,alias.column,alias.column,alias.column');\n" +
                "var_dump($list);"
              }
            />

            <hr />

            <h5>Example #2</h5>

            <CodeBlock
              language="sql"
              content={"SELECT column1, column2, column3, column4 FROM table\n"}
            />

            <p>equivalent to</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table', null, 'table.column1,table.column2,column3,column4');\n" +
                "var_dump($list);"
              }
            />

            <hr />

            <h5>Example #3</h5>

            <CodeBlock language="sql" content={"SELECT * FROM table"} />

            <p>equivalent to</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "list = Builder::select(Builder::FETCH_ALL, 'table');\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "where",
      content: (
        <>
          <div className="mb-4">
            <h4 className="pb-2">WHERE</h4>

            <p>
              The fifth parameter of <Badge bg={"secondary"}>SELECT</Badge> is
              defined by an array containing the data to be prepared in the
              query. The use of <Badge bg={"secondary"}>where</Badge> is valid
              for the <Badge bg={"secondary"}>fetch</Badge> function.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5>Example #1</h5>

            <CodeBlock
              language="sql"
              content={
                "SELECT alias.column1, alias.column2 FROM table AS alias WHERE alias.id=1"
              }
            />

            <p>equivalent to</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', 'alias', 'alias.column1,alias.column2', [\n" +
                "\tBuilder::where('alias.id', '=' /* '>', '<', '<>' */)\n" +
                "], [$id]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5>Example #2</h5>

            <CodeBlock
              language="sql"
              content={"SELECT column, column FROM table WHERE id=1"}
            />

            <p>equivalent to</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, 'column1,column2', [\n" +
                "\tBuilder::where('id', '=' /* '>', '<', '<>' */)\n" +
                "], [$id]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5>Example #3</h5>

            <CodeBlock
              language="sql"
              content={"SELECT * FROM table WHERE id=?"}
            />

            <p>equivalent to</p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, null, [\n" +
                "\tBuilder::where('id', '=' /* '>', '<', '<>' */)\n" +
                "], [$id]);\n\n" +
                "var_dump($list);"
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
              content={"SELECT * FROM table WHERE id=? AND date=?"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, null, [\n" +
                "\tBuilder::where('id', '=' /* '>', '<', '<>' */),\n" +
                "\tBuilder::and('date', '=' /* '>', '<', '<>' */)\n" +
                "]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>

          <div className="mb-3">
            <h5>Example #2</h5>

            <CodeBlock
              language="sql"
              content={
                "SELECT * FROM table AS alias WHERE alias.id=? AND alias.date=?"
              }
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', 'alias', null, [\n" +
                "\tBuilder::where('alias.id', '='), // '>', '<', '<>'\n" +
                "\tBuilder::and('alias.date', '=') // '>', '<', '<>'\n" +
                "]);\n\n" +
                "var_dump($list);"
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
              content={"SELECT * FROM table WHERE id=? OR date=?"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, '*', [\n" +
                "\tBuilder::where('id', '='), // '>', '<', '<>'\n" +
                "\tBuilder::or('date', '=') // '>', '<', '<>'\n" +
                "]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>

          <div className="mb-3">
            <h5>Example #2</h5>

            <CodeBlock
              language="sql"
              content={
                "SELECT * FROM table AS alias WHERE alias.id=? OR alias.date=?"
              }
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', 'alias', '*', [\n" +
                "\tBuilder::where('alias.id', '='), // '>', '<', '<>'\n" +
                "\tBuilder::or('alias.date', '=') // '>', '<', '<>'\n" +
                "]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "between",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">BETWEEN</h4>

            <h5>Example #1</h5>

            <CodeBlock
              language="sql"
              content={"SELECT * FROM table WHERE date BETWEEN ? AND ?"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, null, [\n" +
                "\tBuilder::between('date')\n" +
                "], [$date1, $date2]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>

          <div className="mb-3">
            <h5>Example #2</h5>

            <CodeBlock
              language="sql"
              content={
                "SELECT * FROM table AS alias WHERE alias.date BETWEEN ? AND ?"
              }
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', 'alias', null, [\n" +
                "\tBuilder::between('alias.date')\n" +
                "], [$date1, $date2]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "like",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">LIKE</h4>

            <h5>Example #1</h5>

            <CodeBlock
              language="sql"
              content={
                "SELECT column1, column2 FROM table WHERE column1 LIKE '%like text...%'"
              }
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table', null, 'column1,column2', [\n" +
                "\tBuilder::where('column1'),\n" +
                "\tBuilder::like()\n" +
                "], ['%example%']);\n\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "join",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">JOIN</h4>

            <p>
              Implementation of join{" "}
              <Badge bg="secondary">INNER, LEFT AND RIGHT</Badge>.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5>Example #1</h5>

            <CodeBlock
              language="sql"
              content={
                "SELECT alias.name, alias1.name, alias2.name, alias3.name FROM table1 AS alias\n" +
                "\tINNER JOIN table2 AS alias1 ON alias.id_a=alias1.id_a\n" +
                "\tLEFT JOIN table3 AS alias2 ON alias.id_b=alias2.id_b\n" +
                "\tRIGHT JOIN table4 AS alias3 ON alias.id_c=alias3.id_c"
              }
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table1', 'alias', 'alias.name,alias1.name,alias2.name,alias3.name', [\n" +
                "\tBuilder::innerJoin('table2', 'alias1', 'alias.id_a=alias1.id_a'),\n" +
                "\tBuilder::leftJoin('table3', 'alias2', 'alias.id_b=alias2.id_b'),\n" +
                "\tBuilder::rightJoin('table4', 'alias3', 'alias.id_c=alias3.id_c')\n" +
                "]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5>Example #2</h5>

            <CodeBlock
              language="sql"
              content={
                "SELECT alias.name, alias1.name, alias2.name, alias3.name FROM table1 AS alias\n" +
                "\tINNER JOIN table2 AS alias1 ON alias.id_a=alias1.id_a\n" +
                "\tLEFT JOIN table3 AS alias2 ON alias.id_b=alias2.id_b\n" +
                "\tRIGHT JOIN table4 AS alias3 ON alias.id_c=alias3.id_c\n" +
                "WHERE alias.id=?"
              }
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table1', 'alias', 'alias.name,alias1.name,alias2.name,alias3.name', [\n" +
                "\tBuilder::innerJoin('table2', 'alias1', 'alias.id_a=alias1.id_a'),\n" +
                "\tBuilder::leftJoin('table3', 'alias2', 'alias.id_b=alias2.id_b'),\n" +
                "\tBuilder::rightJoin('table4', 'alias3', 'alias.id_c=alias3.id_c')\n" +
                "\tBuilder::where('alias.id', '=')\n" +
                "], [$id]);\n\n" +
                "var_dump($list);"
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

            <p>
              Update queries take the name of the table as their first
              parameter. The second parameter carries the columns separated by{" "}
              <Badge bg={"secondary"}>,</Badge>, the condition parameter is
              separated by <Badge bg={"secondary"}>:</Badge> at the end of the
              columns. The third parameter receives an array with the parameters
              to update.
            </p>

            <CodeBlock
              language={"sql"}
              content={"UPDATE table SET name=?, date=?, phone=? WHERE id=?"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::update('table', 'name,date,phone:id', [\n" +
                "\t$name, $date, $phone, $id\n" +
                "]);\n\n" +
                "var_dump($list);"
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

            <p>
              The first parameter receives the name of the table, The second
              parameter receives the name of the column that is referenced, The
              third parameter receives an array with the respective value to
              eliminate.
            </p>

            <CodeBlock
              language={"sql"}
              content={"DELETE FROM table WHERE id=?"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::delete('table', 'id', $id);\n" +
                "var_dump($list);"
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
              content={"CALL name_procedure('name...', 'date...', 1)"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::call('name_procedure', [\n" +
                "\t$name, $date, $id\n" +
                "]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "min",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">MIN</h4>

            <p>
              The first parameter references the name of the column. The second
              parameter is <Badge bg="secondary">optional</Badge> and is used to
              give an alias.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #1</h5>

            <CodeBlock language={"sql"} content={"SELECT MIN(id) FROM table"} />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, Builder::min('id'));\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #2</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT MIN(id) AS alias FROM table"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, Builder::min('id', 'alias'));\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "max",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">MAX</h4>

            <p>
              The first parameter references the name of the column. The second
              parameter is <Badge bg="secondary">optional</Badge> and is used to
              give an alias.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #1</h5>

            <CodeBlock language={"sql"} content={"SELECT MAX(id) FROM table"} />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, Builder::max('id'));\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #2</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT MAX(id) AS alias FROM table"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, Builder::max('id', 'alias'));\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "count",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">COUNT</h4>

            <p>
              The first parameter references the name of the column. The second
              parameter is <Badge bg="secondary">optional</Badge> and is used to
              give an alias.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #1</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT COUNT(*) FROM table"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, Builder::count());\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #2</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT COUNT(*) AS alias FROM table"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, Builder::count(null, 'alias'));\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "avg",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">AVG</h4>

            <p>
              The first parameter references the name of the column. The second
              parameter is <Badge bg="secondary">optional</Badge> and is used to
              give an alias.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #1</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT AVG(column) FROM table"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, Builder::avg('column'));\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #2</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT AVG(column) AS alias FROM table"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, Builder::avg('column', 'alias'));\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "sum",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">SUM</h4>

            <p>
              The first parameter references the name of the column. The second
              parameter is <Badge bg="secondary">optional</Badge> and is used to
              give an alias.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #1</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT SUM(column) FROM table"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, Builder::sum('column'));\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #2</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT SUM(column) AS alias FROM table"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, Builder::sum('column', 'alias'));\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "order-by",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">ORDER BY</h4>

            <p>
              The first parameter refers to the name of the column, The second
              parameter is <Badge bg="secondary">optional</Badge> and is used to
              give a type of order <Badge bg="secondary">ASC, DESC</Badge>.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #1</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT * FROM table ORDER BY column"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table', null, [\n" +
                "\tBuilder::orderBy('column')\n" +
                "]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #2</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT * FROM table ORDER BY column ASC, column DESC"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table', null, [\n" +
                "\tBuilder::orderBy('column ASC, column DESC')\n" +
                "]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "group-by",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">GROUP BY</h4>

            <p>
              The first parameter refers to the name of the column, The second
              parameter is <Badge bg="secondary">optional</Badge> and is used to
              give a type of order <Badge bg="secondary">ASC, DESC</Badge>.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #1</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT * FROM table GROUP BY column"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table', null, [\n" +
                "\tBuilder::groupBy('column')\n" +
                "]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #2</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT * FROM table GROUP BY column DESC"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table', null, [\n" +
                "\tBuilder::groupBy('column', 'DESC')\n" +
                "]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "limit",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">LIMIT</h4>

            <p>
              The first parameter is <Badge bg="secondary">boolean</Badge>, true
              for 2 parameters and false for a single parameter in the query,
              Note that the default parameter is initialized to true.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #1</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT * FROM table LIMIT ?"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table', null, null, [\n" +
                "\tBuilder::limit(false)\n" +
                "], [$id]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #2</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT * FROM table LIMIT ?, ?"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table', null, null, [\n" +
                "\tBuilder::limit()\n" +
                "], [$first, $second]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "having",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">HAVING</h4>

            <p>
              The first parameter is the <Badge bg="secondary">column</Badge>{" "}
              that is referenced, The second parameter is the operator with
              which the condition is handled, this parameter is optional.
            </p>
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #1</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT * FROM table HAVING column = ?"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH, 'table', null, null, [\n" +
                "\tBuilder::having('column', '=') // '>', '<', '<>'\n" +
                "], [$value]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5 className="pb-2">Example #2</h5>

            <CodeBlock
              language={"sql"}
              content={"SELECT * FROM table HAVING column"}
            />

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n\n" +
                "$list = Builder::select(Builder::FETCH_ALL, 'table', null, null, [\n" +
                "\tBuilder::having('column')\n" +
                "]);\n\n" +
                "var_dump($list);"
              }
            />
          </div>
        </>
      ),
    },
    {
      event: "show",
      content: (
        <>
          <div className="mb-3">
            <h4 className="pb-2">SHOW COLUMNS</h4>

            <p>
              The <Badge bg="secondary">showColumns</Badge> function generates a
              list of the columns that a table has.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n" +
                "var_dump(Builder::showColumns('table_name'));"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h4 className="pb-2">SHOW TABLES</h4>

            <p>
              The <Badge bg="secondary">showTables</Badge> function generates a
              list of the tables that the database owns.
            </p>

            <CodeBlock
              language="php"
              content={
                "<?php\n\n" +
                "use LionSQL\\Drivers\\MySQLDriver as Builder;\n" +
                "var_dump(Builder::showTables('database_name'));"
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
