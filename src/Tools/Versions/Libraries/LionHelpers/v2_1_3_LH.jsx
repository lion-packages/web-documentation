import CodeBlock from "../../../../pages/components/CodeBlock";

export default function v2_1_3_LH() {
  return {
    arr: {
      title: "LionHelpers\\Arr",
      description:
        "The arr class allows you to transform or create dynamic array structures.",
      url: "/libraries/lion/helpers/item_version/arr/of",
      methods: {
        of: {
          title: "Arr::of",
          link: "of",
          description:
            "The `of` function allows initializing the array obtained in the arr class.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Arr;\n\n" +
                "Arr::of([1, 2, 3]);\n" +
                "// "
              }
            />
          ),
        },
        get: {
          title: "Arr::get",
          link: "get",
          description:
            "The `get` function is used to get the array obtained in the arr class.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Arr;\n\n" +
                "Arr::of([1, 2, 3])->get();\n" +
                "// [1, 2, 3]"
              }
            />
          ),
        },
        push: {
          title: "Arr::push",
          link: "push",
          description:
            "The `push` function allows you to insert an element into an array.",
          code: (
            <>
              <div>
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::of([1, 2, 3])->push(4)->get();\n" +
                    "// [1, 2, 3, 4]"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::of([1, 2, 3])->push(4, 'key-name')->get();\n" +
                    "// [1, 2, 3, 'key-name' => 4]"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::of([1, 2, 3])->push(4, 'key-name')->get();\n" +
                    "// [1, 2, 3, 'key-name' => 4]"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #4</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::of([1, 2, 3])->push([4], 'key-name')->get();\n" +
                    "// [1, 2, 3, 'key-name' => [4]]"
                  }
                />
              </div>
            </>
          ),
        },
        length: {
          title: "Arr::length",
          link: "length",
          description:
            "The `length` function allows you to get the size of an array.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Arr;\n\n" +
                "Arr::of([1, 3, 5, 7])->length();\n" +
                "// 4"
              }
            />
          ),
        },
        join: {
          title: "Arr::join",
          link: "join",
          description:
            "The `join` function allows you to obtain a string joined with the values of the array by delimiters.",
          code: (
            <>
              <div>
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::of(['Sergio', 'Santiago', 'David'])->join(', ');\n" +
                    "// 'Sergio, Santiago, David'"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::of(['Sergio', 'Santiago', 'David'])->join(', ', ' and ');\n" +
                    "// 'Sergio, Santiago and David'"
                  }
                />
              </div>
            </>
          ),
        },
        "key-by": {
          title: "Arr::keyBy",
          link: "key-by",
          description:
            "The `keyBy` function uses the value of a column of an array as the key of the same array.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Arr;\n\n" +
                "$data = [\n" +
                "\t['name' => 'Sergio Leon', 'rol' => 'admin'],\n" +
                "\t['name' => 'Santiago Ospina', 'rol' => 'admin'],\n" +
                "\t['name' => 'David Giraldo', 'rol' => 'provider'],\n" +
                "\t['name' => 'Alex Rojas', 'rol' => 'provider']\n" +
                "];\n\n" +
                "Arr::of($data)->keyBy('name');\n" +
                "// [\n" +
                "// \t'Sergio Leon' => ['name' => 'Sergio Leon', 'rol' => 'admin'],\n" +
                "// \t'Santiago Ospina' => ['name' => 'Santiago Ospina', 'rol' => 'admin'],\n" +
                "// \t'David Giraldo' => ['name' => 'David Giraldo', 'rol' => 'provider'],\n" +
                "// \t'Alex Rojas' => ['name' => 'Alex Rojas', 'rol' => 'provider']\n" +
                "// ];\n\n"
              }
            />
          ),
        },
        tree: {
          title: "Arr::tree",
          link: "tree",
          description:
            "The `tree` function uses the value of a column of an array as a key by creating a new array and adding all arrays that share the same column value.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Arr;\n\n" +
                "$data = [\n" +
                "\t['name' => 'Sergio Leon', 'rol' => 'admin'],\n" +
                "\t['name' => 'Santiago Ospina', 'rol' => 'admin'],\n" +
                "\t['name' => 'David Giraldo', 'rol' => 'provider'],\n" +
                "\t['name' => 'Alex Rojas', 'rol' => 'provider']\n" +
                "];\n\n" +
                "Arr::of($data)->tree('rol');\n" +
                "// [\n" +
                "// \t'admin' => [\n" +
                "// \t\t['name' => 'Sergio Leon', 'rol' => 'admin'],\n" +
                "// \t\t['name' => 'Santiago Ospina', 'rol' => 'admin']\n" +
                "// \t],\n" +
                "// \t'provider' => [\n" +
                "// \t\t['name' => 'David Giraldo', 'rol' => 'provider'],\n" +
                "// \t\t['name' => 'Alex Rojas', 'rol' => 'provider']\n" +
                "// \t]\n" +
                "// ];\n\n"
              }
            />
          ),
        },
        prepend: {
          title: "Arr::prepend",
          link: "prepend",
          description:
            "The `prepend` function adds a value to the start of an array.",
          code: (
            <>
              <div>
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "$data = [1, 2, 3];\n\n" +
                    "Arr::of($data)->prepend(4);\n" +
                    "// [4, 1, 2, 3]"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "$data = [1, 2, 3];\n\n" +
                    "Arr::of($data)->prepend(4, 'id');\n" +
                    "// ['id' => 4, 0 => 1, 1 => 2, 2 => 3]"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "$data = [\n" +
                    "\t['name' => 'Sergio Leon', 'rol' => 'admin']\n" +
                    "\t['name' => 'Santiago Ospina', 'rol' => 'admin']\n" +
                    "\t['name' => 'David Giraldo', 'rol' => 'provider']\n" +
                    "\t['name' => 'Alex Rojas', 'rol' => 'provider']\n" +
                    "];\n\n" +
                    "Arr::of($data)->prepend(['name' => 'Stiven', 'rol' => 'user']);\n" +
                    "// [\n" +
                    "// \t0 => ['name' => 'Stiven', 'rol' => 'user'],\n" +
                    "// \t'admin' => [\n" +
                    "// \t\t['name' => 'Sergio Leon', 'rol' => 'admin']\n" +
                    "// \t\t['name' => 'Santiago Ospina', 'rol' => 'admin']\n" +
                    "// \t],\n" +
                    "// \t'provider' => [\n" +
                    "// \t\t['name' => 'David Giraldo', 'rol' => 'provider']\n" +
                    "// \t\t['name' => 'Alex Rojas', 'rol' => 'provider']\n" +
                    "// \t]\n" +
                    "// ];\n\n"
                  }
                />
              </div>
            </>
          ),
        },
        random: {
          title: "Arr::random",
          link: "random",
          description:
            "The `random` function selects a number of random elements from an array.",
          code: (
            <>
              <div>
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::of(['Sergio', 'David', 'Santiago'])->random();\n" +
                    "// ['David'];"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::of(['Sergio', 'David', 'Santiago'])->random(2);\n" +
                    "// ['David', 'Sergio'];"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::of(['Sergio', 'David', 'Santiago'])->random(2);\n" +
                    "// ['Santiago', 'Sergio'];"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #4</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::of(['Sergio', 'David', 'Santiago'])->random(5);\n" +
                    "// (object) ['status' => 'error', 'message' => 'element size exceeds array size']"
                  }
                />
              </div>
            </>
          ),
        },
        sort: {
          title: "Arr::sort",
          link: "sort",
          description:
            "The `sort` function sorts the elements in ascending order of the values (string and numeric) of an array.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Arr;\n\n" +
                "Arr::of(['Sergio', 'David', 'Santiago'])->sort();\n" +
                "// ['David', 'Santiago', 'Sergio'];"
              }
            />
          ),
        },
        where: {
          title: "Arr::where",
          link: "where",
          description:
            "The `where` function gets a new array of elements based on its condition.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Arr;\n\n" +
                "Arr::of([5, 44, 22])->where(fn($value, $key) => $value > 20);\n" +
                "// [44, 22];"
              }
            />
          ),
        },
        "where-not-null": {
          title: "Arr::whereNotNull",
          link: "where-not-null",
          description:
            "The `whereNotNull` function gets a new array of elements where the values are not null or empty.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Arr;\n\n" +
                "Arr::of(['', 23, 'Sergio', null, 'Santiago', 25])->whereNotNull();\n" +
                "// [\n" +
                "//\t1 => 23,\n" +
                "//\t2 => 'Sergio'\n" +
                "//\t4 => 'Santiago',\n" +
                "//\t5 => 25,\n" +
                "//];"
              }
            />
          ),
        },
        first: {
          title: "Arr::first",
          link: "first",
          description:
            "The `first` function returns the first element of an array.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Arr;\n\n" +
                "Arr::of([null, 23, 'Sergio'])->first();\n" +
                "// null"
              }
            />
          ),
        },
        last: {
          title: "Arr::last",
          link: "last",
          description:
            "The `last` function returns the last element of an array.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Arr;\n\n" +
                "Arr::of([null, 23, 'Sergio'])->last();\n" +
                "// 'Sergio'"
              }
            />
          ),
        },
        wrap: {
          title: "Arr::wrap",
          link: "wrap",
          description:
            "The `wrap` function creates a new array with a value inside.",
          code: (
            <>
              <div>
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::wrap('Sergio');\n" +
                    "// ['Sergio']"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::wrap();\n" +
                    "// []"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Arr;\n\n" +
                    "Arr::wrap(null);\n" +
                    "// []"
                  }
                />
              </div>
            </>
          ),
        },
      },
    },
    str: {
      title: "LionHelpers\\Str",
      description:
        "The str class allows you to transform a string to different formats.",
      url: "/libraries/lion/helpers/item_version/str/of",
      methods: {
        of: {
          title: "Str::of",
          link: "of",
          description:
            "The `of` function allows initializing the string obtained in the str class",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('Sergio');\n" +
                "// "
              }
            />
          ),
        },
        get: {
          title: "Str::get",
          link: "get",
          description: "The `get` function gets the generated string.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('Sergio')->get();\n" +
                "// 'Sergio'"
              }
            />
          ),
        },
        replace: {
          title: "Str::replace",
          link: "replace",
          description:
            "The `replace` function does a replace of a delimiter and it is replaced by its selected value.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('Hello, world')->replace(',', '')->get();\n" +
                "// 'Hello world'"
              }
            />
          ),
        },
        prepend: {
          title: "Str::prepend",
          link: "prepend",
          description:
            "The `prepend` function adds the written value to the beginning of a string.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('world')->prepend('Hello ');\n" +
                "// 'Hello world'"
              }
            />
          ),
        },
        ln: {
          title: "Str::ln",
          link: "ln",
          description:
            "The `ln` function adds a newline `\\n` to the end of the string.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('Hello world')->ln()->get();\n" +
                "// 'Hello world\\n'"
              }
            />
          ),
        },
        "to-string": {
          title: "Str::toString",
          link: "to-string",
          description:
            "The `toString` function converts null values to empty strings.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of(null)->toString();\n" +
                "// ''"
              }
            />
          ),
        },
        "to-null": {
          title: "Str::toNull",
          link: "to-null",
          description: "The `toNull` function converts empty strings to null.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('')->toNull();\n" +
                "// null"
              }
            />
          ),
        },
        before: {
          title: "Str::before",
          link: "before",
          description:
            "The `before` function gets the string that is before the typed delimiter.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('Hello world')->before(' ');\n" +
                "// 'Hello'"
              }
            />
          ),
        },
        after: {
          title: "Str::after",
          link: "after",
          description:
            "The `after` function gets the string after the typed delimiter.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('Hello world')->after(' ');\n" +
                "// 'world'"
              }
            />
          ),
        },
        between: {
          title: "Str::between",
          link: "between",
          description:
            "The `between` function gets the string that is the first delimiter and the second.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world, this is an example')->between('world', 'an');\n" +
                "// ', this is '"
              }
            />
          ),
        },
        camel: {
          title: "Str::camel",
          link: "camel",
          description:
            "The `camel` function forms the camelcase to the obtained string.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world')->camel();\n" +
                "// 'helloWorld'"
              }
            />
          ),
        },
        pascal: {
          title: "Str::pascal",
          link: "pascal",
          description:
            "The `pascal` function forms the pascalcase to the obtained string.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world')->pascal();\n" +
                "// 'HelloWorld'"
              }
            />
          ),
        },
        snake: {
          title: "Str::snake",
          link: "snake",
          description:
            "The `snake` function forms the snakecase to the obtained string.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world')->snake();\n" +
                "// 'hello_world'"
              }
            />
          ),
        },
        kebab: {
          title: "Str::kebab",
          link: "kebab",
          description:
            "The `kebab` function forms the kebabcase to the obtained string.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world')->kebab();\n" +
                "// 'hello-world'"
              }
            />
          ),
        },
        headline: {
          title: "Str::headline",
          link: "headline",
          description:
            "The `headline` function formats a string with spaces and upper case.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world')->headline();\n" +
                "// 'Hello World'"
              }
            />
          ),
        },
        length: {
          title: "Str::length",
          link: "length",
          description:
            "The `headline` function gets the length of the obtained string.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world')->length();\n" +
                "// 11"
              }
            />
          ),
        },
        limit: {
          title: "Str::limit",
          link: "limit",
          description:
            "The `limit` function returns the number of characters in the string string.",
          code: (
            <>
              <div>
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('hello worl')->limit(); // default 10\n" +
                    "// 'hello world'"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('hello world')->limit(10);\n" +
                    "// 'hello worl'"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('hello world')->limit(5);\n" +
                    "// 'hello'"
                  }
                />
              </div>

              <div>
                <h5 className="pb-2 text-warning">Example #4</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('hello world')->limit(20);\n" +
                    "// 'hello world'"
                  }
                />
              </div>
            </>
          ),
        },
        lower: {
          title: "Str::lower",
          link: "lower",
          description:
            "The `lower` function converts the obtained string to lowercase.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('HELLO WORLD')->lower();\n" +
                "// 'hello world'"
              }
            />
          ),
        },
        upper: {
          title: "Str::upper",
          link: "upper",
          description:
            "The `upper` function converts the obtained string to uppercase.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world')->upper();\n" +
                "// 'HELLO WORLD'"
              }
            />
          ),
        },
        mask: {
          title: "Str::mask",
          link: "mask",
          description:
            "The `mask` function converts to specific characters part of the obtained string in a range of characters.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('sleon@gmail.com')->mask('*', 7);\n" +
                    "// '*******mail.com'"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('sleon@gmail.com')->mask('*', -7);\n" +
                    "// 'sleon@gm*******'"
                  }
                />
              </div>
            </>
          ),
        },
        contains: {
          title: "Str::contains",
          link: "contains",
          description:
            "The `contains` function checks if the obtained string contains a written lod.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world')->contains(['hello', 'world']);\n" +
                "// true"
              }
            />
          ),
        },
        swap: {
          title: "Str::swap",
          link: "swap",
          description:
            "The `swap` function checks if the obtained string swap a written lod.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world')->swap([\n\t'hello' => 'Sergio',\n\t'world' => 'Leon'\n]);\n" +
                "// 'Sergio Leon'"
              }
            />
          ),
        },
        test: {
          title: "Str::test",
          link: "test",
          description:
            "The `test` function validates a regular expression with the returned string.",
          code: (
            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "use LionHelpers\\Str;\n\n" +
                "Str::of('hello world')->test('/hello/i');\n" +
                "// true"
              }
            />
          ),
        },
        trim: {
          title: "Str::trim",
          link: "trim",
          description:
            "The `trim` function removes the spaces at the beginning and end of the obtained string.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('   hello world   ')->trim();\n" +
                    "// 'hello world'"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('   hello world   ')->trim('world');\n" +
                    "// 'hello'"
                  }
                />
              </div>
            </>
          ),
        },
        concat: {
          title: "Str::concat",
          link: "concat",
          description:
            "The `concat` function adds to the end of the obtained string the written string.",
          code: (
            <>
              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #1</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('hello')->concat(' world')->get();\n" +
                    "// 'hello world'"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #2</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('hello')\n\t->concat(' world')\n\t->concant(', this is an example')\n\t->get();\n" +
                    "// 'hello world, this is an example'"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="pb-2 text-warning">Example #3</h5>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "use LionHelpers\\Str;\n\n" +
                    "Str::of('hello')\n\t->concat(' world')\n\t->concant(', this is an example')\n\t->ln()\n\t->get();\n" +
                    "// 'hello world, this is an example\\n'"
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
