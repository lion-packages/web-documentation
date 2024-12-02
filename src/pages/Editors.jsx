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
          <h5 className="text-lion-orange">
            Font: JetBrains Mono. A typeface for developers
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
          <h5 className="text-lion-orange">
            Warp: Great software starts on the command line
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
          <h5 className="text-lion-orange">Sublime Text 4</h5>

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
                <strong>OverrideAudit:</strong>{" "}
                <Description
                  description={
                    "OverrideAudit is the missing tool for working with and managing your package overrides in Sublime Text 3. From simply helping you remember what you've overridden to warning you of potential problems, OverrideAudit has you covered."
                  }
                />
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
                <strong>LSP-yaml:</strong>{" "}
                <Description
                  description={
                    "YAML support for Sublime's LSP plugin using yaml-language-server."
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
      "background": "#2b2b2b",
      "guide": "#545454"
    },
    "rules": 
    [
        {
            "scope": "variable, punctuation.definition.variable",
            "foreground": "#8d759e",
        },
        {
            "scope": "entity.name.function, meta.function-call.php",
            "foreground": "#ffc66d",
            // "font_style": "italic",
        },
        {
            "scope": "meta.function-call.object.php, variable.function",
            "foreground": "#ffc66d",
            // "font_style": "italic",
        },
        {
            "scope": "support.type, support.class",
            "font_style": "italic",
        },
        {
            "scope": "source.php entity.name.namespace.php",
            "font_style": "italic",
        },
        {
            "scope": "entity.name.class",
            "font_style": "italic",
        },
        {
            "scope": "source.php variable.namespace.php",
            "foreground": "#A9B7C6",
        },
        {
            "scope": "flow-statements",
            "foreground": "#000000",
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
            "class": "title_bar",
            "bg": "#3c3f41",
        },
        {
            "class": "puck_control",
            "layer0.texture": "ayu/assets/scrollbar-vertical-wide.png",
            "layer0.tint": "#707275",
            "layer0.opacity": 0.6,
            "layer0.inner_margin": [
                0,
                10
            ],
            "content_margin": [
                6,
                12
            ]
        },
      {
          "class": "tabset_control",
          "mouse_wheel_switch": true,
          "tab_min_width": 50,
          "tab_overlap": 0,
          "tab_height": 38,
          "tab_width": 100,
          "layer0.tint": "#3c3f41",
          "layer0.opacity": 1,
          "content_margin": [
              10,
              0
          ]
      },
      {
          "class": "panel_control",
          "layer0.tint": "#3c3f41",
          "layer0.opacity": 1,
          "content_margin": [
              0,
              5
          ]
      },
      {
          "class": "sidebar_button_control",
          "layer0.texture": "ayu/assets/sidebar.png",
          "layer0.tint": "#BFB9B9",
          "layer0.opacity": 1,
          "content_margin": [
              12,
              12
          ]
      },
      {
          "class": "sidebar_button_control",
          "attributes": [
              "hover"
          ],
          "layer0.tint": "#e6b450"
      },
      {
          "class": "label_control",
          "parents": [
              {
                  "class": "button_control"
              }
          ],
          "color": "#BFB9B9"
      },
      {
          "class": "label_control",
          "parents": [
              {
                  "class": "button_control",
                  "attributes": [
                      "hover"
                  ]
              }
          ],
          "color": "#565B66"
      },
      {
          "class": "sidebar_container",
          "content_margin": [10, 10, 10, 10],
          "layer0.tint": "#3c3f41",
      },
      {
          "class": "sidebar_tree",
          "indent_top_level": true,
          "row_padding": [20, 5],
          "indent": 10
      },
      {
          "class": "sidebar_label",
          "fg": "#BFB9B9",
          "font.size": 13,
      },
      {
          "class": "sidebar_label",
          "parents": [
              {
                  "class": "file_system_entry",
                  "attributes": [
                      "ignored"
                  ]
              }
          ],
          "fg": "#76787B"
      },
      {
          "class": "status_bar",
          "layer0.texture": "",
          "layer0.tint": "#3c3f41",
          "layer0.opacity": 1,
          "layer1.texture": "ayu/assets/separator-top.png",
          "layer1.tint": "#1b1f29",
          "layer1.inner_margin": [
              1,
              2,
              1,
              0
          ],
          "content_margin": [
              10,
              2
          ]
      },
      {
          "class": "label_control",
          "parents": [
              {
                  "class": "status_bar"
              }
          ],
          "color": "#BFB9B9",
          "font.bold": false
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
    "font_face": "Jetbrains Mono",
    // "font_face": "Jetbrains Mono NL Medium",
    "font_size": 13,
    "rulers": [80, 120],
    "ruler_width": 1.0,
    "ruler_style": "solid", // dotted - stippled - solid
    "index_files": true,
    "highlight_line": true,
    "line_padding_top": 2,
    "line_padding_bottom": 2,
    "bold_folder_labels": false,
    "hardware_acceleration": "none", // none - opengl
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
        </div>
      </div>
    </Container>
  );
}
