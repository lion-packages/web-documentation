import { Container } from "react-bootstrap";
import Title from "./components/Title";
import Description from "./components/Description";
import { Fragment } from "react";
import CodeBlock from "./components/CodeBlock";

export default function Editors() {
  return (
    <Container>
      <div className="my-3 text-light">
        <div className="mb-5">
          <Title title="Editors" />

          <Description
            description={
              "We will share with you the configuration we have in our editors and IDEs."
            }
          />
        </div>

        <div className="mb-4">
          <h5 className="text-warning">
            JetBrains Mono. A typeface for developers
          </h5>

          <Description
            description={
              <Fragment>
                JetBrains Mono is a typeface specifically designed for
                developers, optimized for reading and understanding code. It
                features a distinctive, modern look with a focus on legibility,
                which helps reduce eye strain during long coding sessions. The
                font includes characteristics such as increased height for
                lowercase letters, clear distinction between similar characters,
                and a broader range of ligatures to improve code readability.
                JetBrains Mono supports a wide array of characters and symbols,
                making it versatile for different programming languages. Its
                open-source nature allows developers to use and modify it freely
                to suit their needs.{" "}
                <a
                  href="https://www.jetbrains.com/es-es/lp/mono/"
                  target="_blank"
                >
                  Download font
                </a>
              </Fragment>
            }
          />
        </div>

        <div className="mb-4">
          <h5 className="text-warning">
            Great software starts on the command line
          </h5>

          <Description
            description={
              <Fragment>
                Warp is the terminal reimagined with AI and collaborative tools
                for better productivity.{" "}
                <a href="https://www.warp.dev/" target="_blank">
                  Download
                </a>
              </Fragment>
            }
          />
        </div>

        <div className="mb-4">
          <h5 className="text-warning">Sublime Text 4</h5>

          <Description
            description={
              <Fragment>
                Sublime Text 4 is a powerful, fast, and versatile text editor
                popular among developers for its efficiency and extensive
                feature set. It offers a highly customizable interface with
                support for various color schemes and themes. Key features
                include multiple selections, split editing, and a
                distraction-free mode, which enhance productivity. Sublime Text
                4 supports a wide range of programming languages and provides a
                robust plugin ecosystem through Package Control, allowing users
                to extend its functionality. Additionally, it includes
                performance improvements and compatibility with modern hardware,
                ensuring a smooth and responsive coding experience.{" "}
                <a href="https://www.sublimetext.com/" target="_blank">
                  Download
                </a>
              </Fragment>
            }
          />

          <Fragment>
            <h6 className="text-info">Settings</h6>

            <Fragment>
              <label>Settings</label>

              <CodeBlock
                language="json"
                content={`{
    "ignored_packages": ["Vintage"],
    "color_scheme": "Packages/Darkula Color Scheme/darkula.tmTheme",
    "theme": "ayu-dark.sublime-theme",
    "font_face": "Jetbrains Mono NL Regular",
    "font_size": 14,
    "rulers": [80, 120],
    "ruler_width": 1.0,
    "ruler_style": "solid", // dotted - stippled - solid
    "index_files": true,
    "highlight_line": true,
    "line_padding_top": 1,
    "line_padding_bottom": 1,
    "bold_folder_labels": false,
    "hardware_acceleration": "none", // none - opengl
    "draw_minimap_border": true,
}`}
              />
            </Fragment>

            <Fragment>
              <label>Key Bindings</label>

              <CodeBlock
                language="json"
                content={`[
    {
        "keys": ["ctrl+]"],
        "command": "toggle_comment",
        "args": {
            "block": false
        }
    },
    {
        "keys": ["ctrl+shift+]"],
        "command": "toggle_comment",
        "args": {
            "block": true
        }
    },
]`}
              />
            </Fragment>
          </Fragment>

          <Fragment>
            <h6 className="text-info">Plugins</h6>

            <ul>
              <li>
                <strong>Sublime Linter:</strong>{" "}
                <Description
                  description={"The code linting framework for Sublime Text."}
                />
              </li>

              <li>
                <strong>PHPGrammar:</strong>{" "}
                <Description description={"PHP macros for Sublime Text."} />
              </li>

              <li>
                <strong>PHPCompanion:</strong>{" "}
                <Description
                  description={
                    "This Sublime Text 3 Package provides cool stuff for PHP 5.3+ coding session."
                  }
                />
              </li>

              <li>
                <strong>LSP:</strong>{" "}
                <Description
                  description={
                    "Client implementation of the Language Server Protocol for Sublime Text."
                  }
                />
                <CodeBlock
                  language="json"
                  content={`// Settings in here override those in "LSP/LSP.sublime-settings"
{
    "lsp_format_on_paste": true,
    "lsp_format_on_save": true,
    "popup_max_characters_width": 120,
    "popup_max_characters_height": 1200,
}`}
                />
              </li>

              <li>
                <strong>LSP-dockerfile:</strong>{" "}
                <Description
                  description={"Dockerfile support for Sublime's LSP plugin."}
                />
              </li>

              <li>
                <strong>LSP-intelephense:</strong>{" "}
                <Description
                  description={
                    "PHP support for Sublime's LSP plugin provided through intelephense."
                  }
                />
              </li>

              <li>
                <strong>INI:</strong>{" "}
                <Description
                  description={
                    "Syntax highlighting for INI and REG files in Sublime Text."
                  }
                />
              </li>

              <li>
                <strong>Emmet:</strong>{" "}
                <Description
                  description={"The essential toolkit for web-developers."}
                />
              </li>

              <li>
                <strong>EditorConfig:</strong>{" "}
                <Description
                  description={
                    "Sublime Text plugin for EditorConfig - Helps developers maintain consistent coding styles between different editors."
                  }
                />
              </li>

              <li>
                <strong>DotENV:</strong>{" "}
                <Description
                  description={
                    "Syntax Highlighting support for Environment (.env) Files."
                  }
                />
              </li>

              <li>
                <strong>Dockerfile Syntax Highlighting:</strong>{" "}
                <Description description={"Dockerfile syntax."} />
              </li>

              <li>
                <strong>DocBlockr:</strong>{" "}
                <Description
                  description={
                    "Simplifies writing DocBlock comments in Javascript, PHP, CoffeeScript, Actionscript, C & C++."
                  }
                />
                <CodeBlock
                  language={"json"}
                  content={`{
    "jsdocs_align_tags": "shallow",
    "jsdocs_spacer_between_sections": true,
}`}
                />
              </li>

              <li>
                <strong>Darkula Color Scheme:</strong>{" "}
                <Description
                  description={
                    "IntelliJ Darkula Sublime Text / TextMate Color Scheme."
                  }
                />
                <CodeBlock
                  language="json"
                  content={`// Documentation at https://www.sublimetext.com/docs/color_schemes.html
{
    "variables":
    {
    },
    "globals":
    {
    },
    "rules":
    [
        {
            "scope": "entity.name.class",
            "font_style": "italic"
        },
        {
            "scope": "entity.other.inherited-class",
            "font_style": "italic"
        },
        {
            "scope": "support.type, support.class",
            "font_style": "italic"
        },
        {
            "scope": "source.php entity.name.namespace.php",
            "font_style": "italic"
        }
    ]
}`}
                />
              </li>

              <li>
                Ayu{" "}
                <Description description={"🎨🖌 Modern Sublime Text theme."} />
                <CodeBlock
                  language="json"
                  content={`// Documentation at https://www.sublimetext.com/docs/themes.html
{
    "variables":
    {
    },
    "rules":
    [
        {
            "class": "sidebar_container",
            "content_margin": [0, 0, 0, 0]
        },
        {
            "class": "sidebar_tree",
            "indent_top_level": true,
            "row_padding": [15, 5],
            "indent": 10
        },
        {
            "class": "sidebar_label",
            "font.size": 12.5,
        },
    ]
}`}
                />
              </li>

              <li>
                <strong>ApacheConf:</strong>{" "}
                <Description
                  description={
                    "For htaccess and .conf files. By GreyWyvern, with assist by radiosilence. <http://www.sublimetext.com/forum/viewtopic.php?f=5&t=856>."
                  }
                />
              </li>

              <li>
                <strong>All Autocomplete:</strong>{" "}
                <Description
                  description={
                    "Extend Sublime autocompletion to find matches in all open files of the current window."
                  }
                />
              </li>

              <li>
                <strong>A File Icon:</strong>{" "}
                <Description
                  description={
                    "Sublime Text File-Specific Icons for Improved Visual Grepping."
                  }
                />
              </li>
            </ul>
          </Fragment>
        </div>

        <div className="mb-4">
          <h5 className="text-warning">Visual Studio Code</h5>

          <p>
            Visual Studio Code (VS Code) is a lightweight yet powerful code
            editor developed by Microsoft, designed for building and debugging
            modern web and cloud applications. It is known for its speed,
            flexibility, and extensive feature set, making it a favorite among
            developers.
          </p>

          <p>Key features of Visual Studio Code include:</p>

          <ul>
            <li>
              <strong>IntelliSense:</strong> Provides smart code completions
              based on variable types, function definitions, and imported
              modules.
            </li>

            <li>
              <strong>Debugging:</strong> Built-in debugger helps you to inspect
              variables, view call stacks, and execute commands in the console.
            </li>

            <li>
              <strong>Extensions:</strong> A vast marketplace of extensions
              allows customization and enhancement of functionality to suit
              different programming languages and workflows.
            </li>

            <li>
              <strong>Integrated Terminal:</strong> Access the terminal within
              the editor to run command-line operations directly.
            </li>

            <li>
              <strong>Version Control:</strong> Built-in Git support makes it
              easy to manage source code versioning and collaboration.
            </li>

            <li>
              <strong>Customizability:</strong> Personalize the editor with
              themes, keyboard shortcuts, and settings tailored to your needs.
            </li>

            <li>
              <strong>Cross-Platform:</strong> Available on Windows, macOS, and
              Linux, ensuring a consistent development environment across
              different operating systems.
            </li>
          </ul>

          <p>
            VS Code combines the simplicity of a code editor with powerful
            developer tools, providing an efficient and versatile environment
            for software development.
          </p>
        </div>

        <Fragment>
          <h6 className="text-info">Settings</h6>

          <Fragment>
            <label>User Settings</label>

            <CodeBlock
              language="json"
              content={`{
  "workbench.colorTheme": "Darkula",
  "window.zoomLevel": 1,
  "explorer.confirmDelete": false,
  "workbench.sideBar.location": "right",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.rulers": [80, 120],
  "explorer.compactFolders": false,
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.formatOnSave": true
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.formatOnSave": true
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.formatOnSave": true
  },
  "[jsx]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.formatOnSave": true
  },
  "editor.fontFamily": "'JetBrains Mono NL', 'monospace', monospace, 'Droid Sans Fallback'",
  "explorer.confirmDragAndDrop": false,
  "workbench.iconTheme": "vscode-icons",
  "redhat.telemetry.enabled": true,
  "codeium.enableConfig": {
    "*": true,
    "properties": true
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "git.openRepositoryInParentFolders": "always",
  "codeium.enableCodeLens": false,
  "git.confirmSync": false,
  "editor.minimap.renderCharacters": false,
  "editor.fontSize": 16
}`}
            />
          </Fragment>
        </Fragment>

        <Fragment>
          <h6 className="text-info">Extensions</h6>

          <h5 className="text-warning">Soon...</h5>
          {/* <CodeBlock language="json" content={``} /> */}
        </Fragment>
      </div>
    </Container>
  );
}
