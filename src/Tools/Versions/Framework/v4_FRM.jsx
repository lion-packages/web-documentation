import {
  Alert,
  Badge,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ListCommandsNew from "../../../pages/components/ListCommandsNew";
import CodeBlock from "../../../pages/components/CodeBlock";
import Title from "../../../pages/components/Title";
import { Fragment } from "react";
import Description from "../../../pages/components/Description";
import ExampleTitle from "../../../pages/components/ExampleTitle";
import EquivalentTo from "../../../pages/components/EquivalentTo";
import Notes from "../../../pages/components/Notes";
import MarginBottom2 from "../../../pages/components/MarginBottom2";
import SupportVersion from "../../../pages/components/SupportVersion";
import YoutubeVideo from "../../../pages/components/YoutubeVideo";

export default function v4_FRM() {
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

              <Notes />

              <Fragment>
                <p className="fs-6">
                  Lion-Framework can also serve as an API backend for a
                  JavaScript single page application or a mobile application.
                  For example, you can use Lion-Framework as an API backend for
                  your ReactJS app or Kotlin app.
                </p>

                <p className="fs-6">
                  You can use Lion-Framework to provide authentication and data
                  storage/retrieval for your application, while taking advantage
                  of Lion-Framework services such as emails, databases and more.
                </p>

                <p className="fs-6">
                  To install <strong>Lion-Framework</strong> and libraries you
                  must have{" "}
                  <a href="https://getcomposer.org" target={"_blank"}>
                    composer
                  </a>{" "}
                  installed, <strong>Lion-Framework</strong> integrates most of
                  the available <strong>Lion</strong> libraries.
                </p>
              </Fragment>
            </Fragment>
          ),
        },
        install: {
          name: "Install",
          code: (
            <Fragment>
              <Title title={"Install"} />

              <Notes />

              <SupportVersion title={"Lion-Framework"} version={"8.4"} />

              <CodeBlock
                language={"bash"}
                content={"composer create-project lion/framework"}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Framework",
          code: (
            <Fragment>
              <Title title={"Use Framework"} />

              <Notes />

              <div className="mb-3">
                <Description
                  description={
                    "The framework comes with an API already created by default, it contains a ReactJS project to operate the platform which contains:"
                  }
                />

                <ListGroup numbered>
                  <ListGroupItem variant="dark">
                    User panel for administrator.
                  </ListGroupItem>

                  <ListGroupItem variant="dark">
                    Authentication login for users.
                  </ListGroupItem>

                  <ListGroupItem variant="dark">
                    Form to recover forgotten passwords.
                  </ListGroupItem>

                  <ListGroupItem variant="dark">
                    User registration form.
                  </ListGroupItem>

                  <ListGroupItem variant="dark">Dashboard.</ListGroupItem>

                  <ListGroupItem variant="dark">
                    Account module to update the user profile.
                  </ListGroupItem>

                  <ListGroupItem variant="dark">
                    2-Step Security with 2FA.
                  </ListGroupItem>
                </ListGroup>
              </div>

              <Fragment>
                <Title title={"First steps"} />
              </Fragment>

              <Row>
                <Col xs={12} sm={12} md={6}>
                  <Fragment>
                    <Description
                      description={"1- Change the project security hash."}
                    />

                    <CodeBlock language={"bash"} content={"php lion hash"} />

                    <CodeBlock
                      language={"bash"}
                      content={`# Change environment variable value
SERVER_HASH="..."
`}
                    />
                  </Fragment>
                </Col>

                <Col xs={12} sm={12} md={6}>
                  <Fragment>
                    <Description
                      description={"2- Change AES security settings."}
                    />

                    <CodeBlock language={"bash"} content={"php lion new:aes"} />

                    <CodeBlock
                      language={"bash"}
                      content={`# Change environment variable value
AES_METHOD="..."
AES_PASSPHRASE="..."
AES_KEY="..."
AES_IV="..."
`}
                    />
                  </Fragment>
                </Col>

                <Col xs={12} sm={12} md={6}>
                  <Fragment>
                    <Description
                      description={"3- Create public and private keys."}
                    />

                    <CodeBlock language={"bash"} content={"php lion new:rsa"} />
                  </Fragment>
                </Col>

                <Col xs={12} sm={12} md={6}>
                  <Fragment>
                    <Description description={"4- Run migrations and seeds."} />

                    <CodeBlock
                      language={"bash"}
                      content={"php lion migrate:fresh --seed"}
                    />
                  </Fragment>
                </Col>

                <Col xs={12} sm={12} md={6}>
                  <Description
                    description={
                      <Fragment>
                        5- Start by starting your web application's local
                        server. Open your API URL at{" "}
                        <a href="http://localhost:8000" target={"_blank"}>
                          <strong>http://localhost:8000</strong>
                        </a>
                        .
                      </Fragment>
                    }
                  />

                  <Alert variant="info">
                    <strong>Note: </strong>Skip this step if you are using
                    Docker.
                  </Alert>

                  <CodeBlock language={"bash"} content={"php lion serve"} />
                </Col>

                <Col xs={12} sm={12} md={6}>
                  <Description
                    description={
                      <Fragment>
                        6- Run the vite project by default, Open your website
                        URL at{" "}
                        <a href="http://localhost:5173" target={"_blank"}>
                          <strong>http://localhost:5173</strong>
                        </a>
                        .
                      </Fragment>
                    }
                  />

                  <CodeBlock language={"bash"} content={"php npm dev"} />
                </Col>
              </Row>
            </Fragment>
          ),
        },
        structure: {
          name: "Directory Structure",
          code: (
            <Fragment>
              {/* │ */}
              {/* ├──{"    "}*/}
              {/* └── */}

              <div
                className="file-tree p-3 rounded overflow-x-scroll"
                style={{ backgroundColor: "#2b2b2b" }}
              >
                <div className="mb-2">
                  <span className="folder-structure"></span>

                  <Fragment>
                    <div className="mb-2">
                      ├── <span className="folder"></span>
                      <label>app/</label>
                    </div>

                    <Fragment>
                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder"></span>
                          <label>Console/</label>
                        </div>

                        <div className="mb-2">
                          <Fragment>
                            <div className="mb-2">
                              │{"    "}│{"    "}├──{" "}
                              <span className="folder"></span>
                              <label>Commands/</label>
                            </div>

                            <Fragment>
                              │{"    "}│{"    "}│{"    "}└──{" "}
                              <label>
                                <span className="file-php-class"></span>
                                ExampleCommand.php
                              </label>
                            </Fragment>
                          </Fragment>

                          <MarginBottom2 />

                          <Fragment>
                            <div className="mb-2">
                              │{"    "}│{"    "}├──{" "}
                              <span className="folder"></span>
                              <label>Cron/</label>
                            </div>

                            <Fragment>
                              │{"    "}│{"    "}│{"    "}└──{" "}
                              <label>
                                <span className="file-php-class"></span>
                                ExampleCron.php
                              </label>
                            </Fragment>
                          </Fragment>
                        </div>
                      </Fragment>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder"></span>
                          <label>Enums/</label>
                        </div>

                        <Fragment>
                          │{"    "}│{"    "}└──{" "}
                          <label className="mb-2">
                            <span className="file-php-enum"></span>
                            ExampleEnum.php
                          </label>
                        </Fragment>
                      </Fragment>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder"></span>
                          <label>Exceptions/</label>
                        </div>

                        <Fragment>
                          │{"    "}│{"    "}└──{" "}
                          <label className="mb-2">
                            <span className="file-php-exception"></span>
                            ExampleException.php
                          </label>
                        </Fragment>
                      </Fragment>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder"></span>
                          <label>Html/</label>
                        </div>

                        <Fragment>
                          │{"    "}│{"    "}└──{" "}
                          <label className="mb-2">
                            <span className="file-php-class"></span>
                            ExampleHtml.php
                          </label>
                        </Fragment>
                      </Fragment>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder"></span>
                          <label>Http/</label>
                        </div>

                        <Fragment>
                          <Fragment>
                            <div className="mb-2">
                              │{"    "}│{"    "}├──{" "}
                              <span className="folder"></span>
                              <label>Controllers/</label>
                            </div>

                            <div>
                              │{"    "}│{"    "}│{"    "}└──{" "}
                              <label className="mb-2">
                                <span className="file-php-class"></span>
                                ExampleController.php
                              </label>
                            </div>
                          </Fragment>

                          <Fragment>
                            <div className="mb-2">
                              │{"    "}│{"    "}├──{" "}
                              <span className="folder"></span>
                              <label>Middleware/</label>
                            </div>

                            <div>
                              │{"    "}│{"    "}│{"    "}└──{" "}
                              <label className="mb-2">
                                <span className="file-php-class"></span>
                                ExampleMiddleware.php
                              </label>
                            </div>
                          </Fragment>

                          <Fragment>
                            <div className="mb-2">
                              │{"    "}│{"    "}├──{" "}
                              <span className="folder"></span>
                              <label>Services/</label>
                            </div>

                            <div>
                              │{"    "}│{"    "}│{"    "}└──{" "}
                              <label className="mb-2">
                                <span className="file-php-class"></span>
                                ExampleService.php
                              </label>
                            </div>
                          </Fragment>
                        </Fragment>
                      </Fragment>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder"></span>
                          <label>Interfaces/</label>
                        </div>

                        <div>
                          │{"    "}│{"    "}└──{" "}
                          <label className="mb-2">
                            <span className="file-php-interface"></span>
                            ExampleInterface.php
                          </label>
                        </div>
                      </Fragment>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder"></span>
                          <label>Models/</label>
                        </div>

                        <div>
                          │{"    "}│{"    "}└──{" "}
                          <label className="mb-2">
                            <span className="file-php-class"></span>
                            ExampleModel.php
                          </label>
                        </div>
                      </Fragment>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder"></span>
                          <label>Rules/</label>
                        </div>

                        <div>
                          │{"    "}│{"    "}└──{" "}
                          <label className="mb-2">
                            <span className="file-php-class"></span>
                            ExampleRule.php
                          </label>
                        </div>
                      </Fragment>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder"></span>
                          <label>Sockets/</label>
                        </div>

                        <div>
                          │{"    "}│{"    "}└──{" "}
                          <label className="mb-2">
                            <span className="file-php-class"></span>
                            ExampleSocket.php
                          </label>
                        </div>
                      </Fragment>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder"></span>
                          <label>Traits/</label>
                        </div>

                        <div>
                          │{"    "}│{"    "}└──{" "}
                          <label className="mb-2">
                            <span className="file-php-class"></span>
                            ExampleTrait.php
                          </label>
                        </div>
                      </Fragment>
                    </Fragment>

                    <div>
                      │{"    "}├──{" "}
                      <label className="mb-2">
                        <span className="file-php"></span>
                        helpers.php
                      </label>
                    </div>
                  </Fragment>

                  <Fragment>
                    <div className="mb-2">
                      ├── <span className="folder-config"></span>
                      <label>config/</label>
                    </div>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-php"></span>
                        cors.php
                      </label>
                    </div>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-php"></span>
                        database.php
                      </label>
                    </div>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-php"></span>
                        email.php
                      </label>
                    </div>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-php"></span>
                        queue.php
                      </label>
                    </div>
                  </Fragment>

                  <Fragment>
                    <div className="mb-2">
                      ├── <span className="folder"></span>
                      <label>database/</label>
                    </div>

                    <Fragment>
                      <div className="mb-2">
                        │{"    "}├── <span className="folder"></span>
                        <label>Class/</label>
                      </div>

                      <div>
                        │{"    "}│{"    "}└──{" "}
                        <label className="mb-2">
                          <span className="file-php-class"></span>
                          Example.php
                        </label>
                      </div>
                    </Fragment>

                    <Fragment>
                      <div className="mb-2">
                        │{"    "}├── <span className="folder"></span>
                        <label>Factory/</label>
                      </div>

                      <div>
                        │{"    "}│{"    "}└──{" "}
                        <label className="mb-2">
                          <span className="file-php-class"></span>
                          ExampleFactory.php
                        </label>
                      </div>
                    </Fragment>

                    <Fragment>
                      <div className="mb-2">
                        │{"    "}├── <span className="folder-migrations"></span>
                        <label>Migrations/</label>
                      </div>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}│{"    "}├── <span className="folder"></span>
                          <label>LionDatabase/</label>
                        </div>

                        <Fragment>
                          <div className="mb-2">
                            │{"    "}│{"    "}│{"    "}├──{" "}
                            <span className="folder"></span>
                            <label>StoreProcedures/</label>
                          </div>

                          <div>
                            │{"    "}│{"    "}│{"    "}│{"    "}└──{" "}
                            <label className="mb-2">
                              <span className="file-php-class-anonymous"></span>
                              CreateExample.php
                            </label>
                          </div>

                          <div>
                            │{"    "}│{"    "}│{"    "}│{"    "}└──{" "}
                            <label className="mb-2">
                              <span className="file-php-class-anonymous"></span>
                              DeleteExample.php
                            </label>
                          </div>

                          <div>
                            │{"    "}│{"    "}│{"    "}│{"    "}└──{" "}
                            <label className="mb-2">
                              <span className="file-php-class-anonymous"></span>
                              UpdateExample.php
                            </label>
                          </div>
                        </Fragment>

                        <Fragment>
                          <div className="mb-2">
                            │{"    "}│{"    "}│{"    "}├──{" "}
                            <span className="folder"></span>
                            <label>Tables/</label>
                          </div>

                          <div>
                            │{"    "}│{"    "}│{"    "}│{"    "}└──{" "}
                            <label className="mb-2">
                              <span className="file-php-class-anonymous"></span>
                              Example.php
                            </label>
                          </div>
                        </Fragment>

                        <Fragment>
                          <div className="mb-2">
                            │{"    "}│{"    "}│{"    "}├──{" "}
                            <span className="folder"></span>
                            <label>Views/</label>
                          </div>

                          <div>
                            │{"    "}│{"    "}│{"    "}│{"    "}└──{" "}
                            <label className="mb-2">
                              <span className="file-php-class-anonymous"></span>
                              ReadExample.php
                            </label>
                          </div>
                        </Fragment>
                      </Fragment>
                    </Fragment>

                    <Fragment>
                      <div className="mb-2">
                        │{"    "}├── <span className="folder"></span>
                        <label>Seed/</label>
                      </div>

                      <div>
                        │{"    "}│{"    "}└──{" "}
                        <label className="mb-2">
                          <span className="file-php-class"></span>
                          ExampleSeed.php
                        </label>
                      </div>
                    </Fragment>
                  </Fragment>

                  <Fragment>
                    <div className="mb-2">
                      ├── <span className="folder"></span>
                      <label>public/</label>
                    </div>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-htaccess"></span>
                        .htaccess
                      </label>
                    </div>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-php"></span>
                        index.php
                      </label>
                    </div>
                  </Fragment>

                  <Fragment>
                    <div className="mb-2">
                      ├── <span className="folder"></span>
                      <label>routes/</label>
                    </div>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-php"></span>
                        middleware.php
                      </label>
                    </div>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-php"></span>
                        web.php
                      </label>
                    </div>
                  </Fragment>

                  <Fragment>
                    <div className="mb-2">
                      ├── <span className="folder"></span>
                      <label>storage/</label>
                    </div>

                    <Fragment>
                      <div className="mb-2">
                        │{"    "}├── <span className="folder"></span>
                        <label>keys/</label>
                      </div>

                      <div className="mb-2">
                        <Fragment>
                          │{"    "}│{"    "}├──{" "}
                          <span className="file-gitignore"></span>
                          <label>.gitignore</label>
                        </Fragment>
                      </div>
                    </Fragment>

                    <Fragment>
                      <div className="mb-2">
                        │{"    "}├── <span className="folder-logs"></span>
                        <label>logs/</label>
                      </div>

                      <Fragment>
                        <Fragment>
                          <div className="mb-2">
                            │{"    "}│{"    "}├──{" "}
                            <span className="folder"></span>
                            <label>cron/</label>
                          </div>

                          <div className="mb-2">
                            <Fragment>
                              │{"    "}│{"    "}│{"    "}├──{" "}
                              <span className="file-gitignore"></span>
                              <label>.gitignore</label>
                            </Fragment>
                          </div>
                        </Fragment>

                        <Fragment>
                          <div className="mb-2">
                            │{"    "}│{"    "}├──{" "}
                            <span className="folder"></span>
                            <label>monolog/</label>
                          </div>

                          <div className="mb-2">
                            <Fragment>
                              │{"    "}│{"    "}│{"    "}├──{" "}
                              <span className="file-gitignore"></span>
                              <label>.gitignore</label>
                            </Fragment>
                          </div>
                        </Fragment>
                      </Fragment>
                    </Fragment>

                    <Fragment>
                      <div className="mb-2">
                        │{"    "}├── <span className="folder"></span>
                        <label>postman/</label>
                      </div>

                      <div className="mb-2">
                        <Fragment>
                          │{"    "}│{"    "}├──{" "}
                          <span className="file-gitignore"></span>
                          <label>.gitignore</label>
                        </Fragment>
                      </div>
                    </Fragment>

                    <Fragment>
                      <div className="mb-2">
                        │{"    "}├── <span className="folder"></span>
                        <label>sh/</label>
                      </div>

                      <div className="mb-2">
                        <Fragment>
                          │{"    "}│{"    "}├──{" "}
                          <span className="file-gitignore"></span>
                          <label>.gitignore</label>
                        </Fragment>
                      </div>
                    </Fragment>
                  </Fragment>

                  <Fragment>
                    <div className="mb-2">
                      ├── <span className="folder-tests-group"></span>
                      <label>tests/</label>
                    </div>

                    <Fragment>
                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder-tests"></span>
                          <label>App/</label>
                        </div>

                        <Fragment>
                          <div className="mb-2">
                            │{"    "}│{"    "}├──{" "}
                            <span className="folder-tests"></span>
                            <label>Http/</label>
                          </div>

                          <Fragment>
                            <div className="mb-2">
                              │{"    "}│{"    "}│{"    "}├──{" "}
                              <span className="folder-tests"></span>
                              <label>Controllers/</label>
                            </div>

                            <div>
                              │{"    "}│{"    "}│{"    "}│{"    "}└──{" "}
                              <label className="mb-2">
                                <span className="file-php-class-test"></span>
                                ExampleControllerTest.php
                              </label>
                            </div>
                          </Fragment>
                        </Fragment>
                      </Fragment>

                      <Fragment>
                        <div className="mb-2">
                          │{"    "}├── <span className="folder-tests"></span>
                          <label>Database/</label>
                        </div>

                        <Fragment>
                          <div className="mb-2">
                            │{"    "}│{"    "}├──{" "}
                            <span className="folder-tests"></span>
                            <label>Class/</label>
                          </div>

                          <div>
                            │{"    "}│{"    "}│{"    "}└──{" "}
                            <label className="mb-2">
                              <span className="file-php-class-test"></span>
                              ExampleTest.php
                            </label>
                          </div>
                        </Fragment>
                      </Fragment>
                    </Fragment>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-php"></span>
                        bootstrap.php
                      </label>
                    </div>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-php-class"></span>
                        Test.php
                      </label>
                    </div>
                  </Fragment>

                  <Fragment>
                    <div className="mb-2">
                      ├── <span className="folder"></span>
                      <label>vite/</label>
                    </div>

                    <div>
                      │{"    "}└──{" "}
                      <label className="mb-2">
                        <span className="file-gitignore"></span>
                        .gitignore
                      </label>
                    </div>
                  </Fragment>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-editorconfig"></span>
                      .editorconfig
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-env"></span>
                      .env.example
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-gitignore"></span>
                      .gitignore
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-markdown"></span>
                      CHANGELOG.md
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-markdown"></span>
                      CODE_OF_CONDUCT.md
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-json"></span>
                      composer.json
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-json"></span>
                      composer.lock
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-markdown"></span>
                      CONTRIBUTING.md
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-docker-compose"></span>
                      docker-compose.yml
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-docker"></span>
                      Dockerfile
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file"></span>
                      LICENSE
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-php"></span>
                      lion
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-php"></span>
                      npm
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-xml"></span>
                      phpunit.xml
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-markdown"></span>
                      README.md
                    </label>
                  </div>

                  <div>
                    └──{" "}
                    <label className="mb-2">
                      <span className="file-editorconfig"></span>
                      supervisord.conf
                    </label>
                  </div>
                </div>
              </div>
            </Fragment>
          ),
        },
        "youtube-video": {
          name: "Tutorials on Youtube (Basics)",
          code: (
            <Fragment>
              <Row>
                {[
                  "AvccAFqd3Qk?si=3s_xo0MYP1pi8lok",
                  "3zu6GiGDWXc?si=hoGoCqUNHHdCqAa5",
                  "clQFGkrIzRw?si=lE7N9Q469B9TfJlm",
                  "KHzb2CUDVqE?si=2340Bu03EW-xCk2r",
                  "mb74JmvXq2w?si=BA-t_I7qiP9GSpbB",
                  "OfaMvlXTLrs?si=evU-jmQ6hXyNkbgG",
                  "y-fjC_f-vd0?si=fB7GdMpUlLayaiM0",
                  "1pgBZ0jF0qg?si=K7N4Y0isVVdABIQ7",
                  "2hsp2zvEZnQ?si=W6ESUn1RqPUAirzG",
                  "tz9DLrOD4kw?si=I9r2mpKvPYg3Y-6q",
                  "zdT1tSu0T6M?si=GTKlprOZxBE9uQQF",
                  "QxqqX8Y8xnA?si=KY-34YEg8NCXNWBF",
                  "q_5vgkzfGks?si=3V4F9lrJHmwSH2xb",
                  "A4TVz2P2DDM?si=nHGucf-XyagEicee",
                  "9nCcWOHHtM0?si=cAmaxCGvjqtgH2we",
                  "Vu7NJwwf_Ys?si=sgF5JxEvCWfZxWBB",
                ].map((url, index) => (
                  <Col key={index} xs={12} sm={12} md={6}>
                    <YoutubeVideo
                      ratio={"16x9"}
                      title={"Lion-Packages: Framework"}
                      url={`https://www.youtube.com/embed/${url}&amp;start=1`}
                    />
                  </Col>
                ))}
              </Row>
            </Fragment>
          ),
        },
      },
    },
    commands: {
      name: "Commands",
      type: "sub_modules",
      list: {
        list: {
          name: "Command List",
          code: (
            <Fragment>
              {/* <Title title={"Command List"} /> */}

              <ListCommandsNew />
            </Fragment>
          ),
        },
        create: {
          name: "Create Commands",
          code: (
            <Fragment>
              <Title title={"Create Commands"} />

              <Description
                description={"Create your commands from the terminal."}
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:command ExampleCommand"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Console\\Commands;

use Lion\\Command\\Command;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Output\\OutputInterface;

/**
 * ExampleCommand description
 *
 * @package App\\Console\\Commands
 */
class ExampleCommand extends Command
{
    /**
     * Configures the current command
     *
     * @return void
     */
    protected function configure(): void
    {
        $this
            ->setName('example')
            ->setDescription('');
    }

    /**
     * Initializes the command after the input has been bound and before the
     * input is validated
     *
     * This is mainly useful when a lot of commands extends one main command
     * where some things need to be initialized based on the input arguments and
     * options
     *
     * @param InputInterface $input [InputInterface is the interface implemented
     * by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface
     * implemented by all Output classes]
     *
     * @return void
     */
    protected function initialize(InputInterface $input, OutputInterface $output): void
    {
    }

    /**
     * Interacts with the user
     *
     * This method is executed before the InputDefinition is validated
     *
     * This means that this is the only place where the command can
     * interactively ask for values of missing required arguments
     *
     * @param InputInterface $input [InputInterface is the interface implemented
     * by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface
     * implemented by all Output classes]
     *
     * @return void
     */
    protected function interact(InputInterface $input, OutputInterface $output): void
    {
    }

    /**
     * Executes the current command
     *
     * This method is not abstract because you can use this class
     * as a concrete class. In this case, instead of defining the
     * execute() method, you set the code to execute by passing
     * a Closure to the setCode() method
     *
     * @param InputInterface $input [InputInterface is the interface implemented
     * by all input classes]
     * @param OutputInterface $output [OutputInterface is the interface
     * implemented by all Output classes]
     *
     * @return int
     *
     * @throws LogicException [When this abstract method is not implemented]
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('ExampleCommand');

        return Command::SUCCESS;
    }
}
`}
              />
            </Fragment>
          ),
        },
      },
    },
    database: {
      name: "Database",
      type: "sub_modules",
      list: {
        config: {
          name: "Database Config",
          code: (
            <Fragment>
              <Title title={"Database Config"} />

              <Description
                description={
                  <Fragment>
                    To make a direct connection to the database, go to{" "}
                    <Badge bg="secondary">config/database.php</Badge>, for more
                    information read{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Database
                    </Link>
                    .
                  </Fragment>
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Database\\Driver;

/**
 * -----------------------------------------------------------------------------
 * Start database service
 * -----------------------------------------------------------------------------
 * describe connections to establish connecting to multiple databases
 * -----------------------------------------------------------------------------
 **/

Driver::run([
    'default' => env('DB_NAME', 'lion_database'),
    'connections' => [
        env('DB_NAME', 'lion_database') => [
            'type' => env('DB_TYPE', 'mysql'),
            'host' => env('DB_HOST', 'mysql'),
            'port' => env('DB_PORT', 3306),
            'dbname' => env('DB_NAME', 'lion_database'),
            'user' => env('DB_USER', 'root'),
            'password' => env('DB_PASSWORD', 'lion')
        ]
    ]
]);
`}
              />
            </Fragment>
          ),
        },
        show: {
          name: "Show Connections",
          code: (
            <Fragment>
              <Title title={"Show Database Connections"} />

              <Description
                description={"View all available database connections."}
              />

              <CodeBlock language={"bash"} content={"php lion db:show"} />
            </Fragment>
          ),
        },
        "create-crud": {
          name: "Create Crud",
          code: (
            <Fragment>
              <Title title={"Create Crud"} />

              <Description
                description={"Generate the crud of a specific entity."}
              />

              <CodeBlock
                language={"bash"}
                content={"php lion db:crud entity_name"}
              />

              <Alert variant="info">
                <strong>Note: </strong>This only generates the PHP code
                necessary for your use, you must create your own migrations for
                these database processes to work.
              </Alert>
            </Fragment>
          ),
        },
      },
    },
    routing: {
      name: "Routing",
      type: "sub_modules",
      list: {
        routes: {
          name: "Routes",
          code: (
            <Fragment>
              <Title title={"Routes"} />

              <Description
                description={
                  <Fragment>
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Route
                    </Link>{" "}
                    has been implemented for route handling, from the web you
                    can add all the necessary routes for the operation of your
                    web application{" "}
                    <Badge bg={"secondary"}>routes/web.php</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Route;

/**
 * -----------------------------------------------------------------------------
 * Web Routes
 * -----------------------------------------------------------------------------
 * Here is where you can register web routes for your application
 * -----------------------------------------------------------------------------
 */

Route::get('/', fn() => success());
`}
              />

              <p>You can add different routes to a controller.</p>

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use App\\Http\\Controllers\\UsersController;
use Lion\\Route;

/**
 * -----------------------------------------------------------------------------
 * Web Routes
 * -----------------------------------------------------------------------------
 * Here is where you can register web routes for your application
 * -----------------------------------------------------------------------------
 */

Route::controller(UsersController::class, function (): void {
    Route::post('users', 'create');
    Route::get('users', 'read');
    Route::get('users/{id}', 'readById');
    Route::put('users/{id}', 'update');
    Route::delete('users/{id}', 'delete');
});
`}
              />
            </Fragment>
          ),
        },
        list: {
          name: "Route List",
          code: (
            <>
              <div className="mb-3">
                <h3>Route List</h3>

                <hr />
              </div>

              <p className="fs-6">
                To view the available routes, start the local server first, run
                the <Badge bg="secondary">php lion serve</Badge> command, and
                then view the routes.
              </p>

              <Alert variant={"info"}>
                <strong>Note:</strong> The routes are loaded with the server
                route <Badge bg="secondary">SERVER_URL</Badge> set in{" "}
                <Badge bg="secondary">.env</Badge>, modify this route to avoid
                errors in the execution of the process, in the file{" "}
                <Badge bg="secondary">public/index.php</Badge> there is a public
                route which allows get the available routes from the terminal,
                comment this line once your web app is deployed.
              </Alert>

              <CodeBlock language={"bash"} content={"php lion route:list"} />
            </>
          ),
        },
      },
    },
    controllers: {
      name: "Controllers",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Controllers",
          code: (
            <Fragment>
              <Title title={"Create Controllers"} />

              <Fragment>
                <Description
                  description={
                    <Fragment>
                      Controllers are stored in{" "}
                      <Badge bg="secondary">{"app/http/Controllers/"}</Badge>.
                    </Fragment>
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:controller HomeController"}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

declare(strict_types=1);

namespace App\\Http\\Controllers;

use stdClass;

/**
 * Description
 *
 * @package App\\Http\\Controllers
 */
class HomeController
{
    /**
     * Description
     *
     * @return stdClass
     */
    public function example(): stdClass
    {
        return success();
    }
}
`}
                />
              </Fragment>

              <hr />

              <Fragment>
                <Alert variant={"info"}>
                  <strong>Note:</strong> You can create the model class
                  immediately with the <Badge bg={"secondary"}>--model</Badge>{" "}
                  option, Models are stored in{" "}
                  <Badge bg={"secondary"}>app/Models</Badge>.
                </Alert>

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:controller HomeController --model"}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

declare(strict_types=1);

namespace App\\Http\\Controllers;

use App\\Models\\HomeModel;
use Lion\\Database\\Interface\\DatabaseCapsuleInterface;
use stdClass;

/**
 * Description
 *
 * @package App\\Http\\Controllers
 */
class HomeController
{
    /**
     * Description
     *
     * @param HomeModel $model [Description]
     *
     * @return stdClass|array|DatabaseCapsuleInterface
     */
    public function example(HomeModel $model): stdClass|array|DatabaseCapsuleInterface
    {
        return $homeModel->exampleDB();
    }
}
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        use: {
          name: "Use Controllers",
          code: (
            <Fragment>
              <Title title={"Use Controllers"} />

              <Description
                description={
                  "When you create the controllers and define the methods you can add them to your web routes to consume your APIs."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use App\\Http\\Controllers\\HomeController;
use Lion\\Route;

/**
 * -----------------------------------------------------------------------------
 * Web Routes
 * -----------------------------------------------------------------------------
 * Here is where you can register web routes for your application
 * -----------------------------------------------------------------------------
 */

Route::get('home', [HomeController::class, 'method_name']);
`}
              />
            </Fragment>
          ),
        },
      },
    },
    services: {
      name: "Services",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Services",
          code: (
            <Fragment>
              <Title title={"Create Services"} />

              <Description description={"Create services from the terminal."} />

              <CodeBlock
                language={"bash"}
                content={"php lion new:service ExampleService"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Services;

/**
 * Service 'ExampleService'
 *
 * @package App\\Http\\Services
 */
class ExampleService
{
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Services",
          code: (
            <Fragment>
              <Title title={"Use Services"} />

              <Description
                description={"Inject your services for your processes."}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Controllers;

use App\\Http\\Services\\ExampleService;
use stdClass;

/**
 * Description
 *
 * @package App\\Http\\Controllers
 */
class ExampleController
{
    /**
     * Description
     *
     * @param ExampleService $exampleService [Service 'ExampleService']
     *
     * @return stdClass
     */
    public function example(ExampleService $exampleService): stdClass
    {
        return $exampleService->example();
    }
}
`}
              />
            </Fragment>
          ),
        },
      },
    },
    models: {
      name: "Models",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Models",
          code: (
            <Fragment>
              <Title title={"Create Models"} />

              <Description
                description={
                  <Fragment>
                    Models are stored in{" "}
                    <Badge bg="secondary">{"app/Models"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:model HomeModel"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Models;

use Lion\\Database\\Drivers\\MySQL as DB;
use Lion\\Database\\Interface\\DatabaseCapsuleInterface;
use stdClass;

/**
 * Description
 *
 * @package App\\Models
 */
class HomeModel
{
    /**
     * Description
     *
     * @return stdClass|array|DatabaseCapsuleInterface
     */
    public function exampleDB(): stdClass|array|DatabaseCapsuleInterface
    {
        return DB::table('table_name')
            ->select()
            ->getAll();
    }
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Models",
          code: (
            <Fragment>
              <Title title={"Use Models"} />

              <Description
                description={
                  "Create the required models and run them on your controllers."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Controllers;

use App\\Models\\HomeModel;
use Lion\\Database\\Interface\\DatabaseCapsuleInterface;
use stdClass;

/**
 * Description
 *
 * @package App\\Http\\Controllers
 */
class HomeController
{
    /**
     * Description
     *
     * @param HomeModel $model [Description]
     *
     * @return stdClass|array|DatabaseCapsuleInterface
     */
    public function example(HomeModel $model): stdClass|array|DatabaseCapsuleInterface
    {
        return $homeModel->exampleDB();
    }
}
`}
              />
            </Fragment>
          ),
        },
      },
    },
    interfaces: {
      name: "Interfaces",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Interfaces",
          code: (
            <Fragment>
              <Title title={"Create Interfaces"} />

              <Description
                description={
                  "Automatically generates interfaces for PHP classes, making it easier to implement abstractions and promoting better code structure."
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:interface ExampleInterface"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Interfaces;

use stdClass;

/**
 * Description of the 'ExampleInterface' interface
 *
 * @package App\\Interfaces
 */
interface ExampleInterface
{
    /**
     * Description
     *
     * @return stdClass
     */
    public function abstractMethod(): stdClass
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Interfaces",
          code: (
            <Fragment>
              <Title title={"Use Interfaces"} />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Services;

use App\\Interfaces\\ExampleInterface;
use stdClass;

/**
 * Description
 *
 * @package App\\Http\\Services
 */
class ExampleService implements ExampleInterface
{
    /**
     * {@inheritdoc}
     */
    public function abstractMethod(): stdClass
    {
        return success();
    }
}
`}
              />
            </Fragment>
          ),
        },
      },
    },
    capsules: {
      name: "Capsules",
      type: "sub_modules",
      list: {
        "entity-capsules": {
          name: "Entity Capsules",
          code: (
            <Fragment>
              <Title title={"Entity Capsules"} />

              <Description
                description={
                  "You can generate a capsule class with the properties of an entity."
                }
              />

              <Alert variant={"info"}>
                <strong>Note:</strong> Capsule classes by default are stored in
                the <Badge bg="secondary">database/Class/</Badge> directory.
              </Alert>

              <CodeBlock
                language={"bash"}
                content={"php lion db:capsule entity_name"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

declare(strict_types=1);

namespace Database\\Class;

use Lion\\Bundle\\Interface\\CapsuleInterface;

/**
 * Description
 *
 * @property int|null $id [Property for id]
 *
 * @package Database\\Class
 */
class EntityName implements CapsuleInterface 
{
    /**
     * [Property for id]
     *
     * @var int|null $id
     */
    private ?int $id = null;

    /**
     * {@inheritdoc}
     * */
    public function jsonSerialize(): array
    {
        return get_object_vars($this);
    }

    /**
     * {@inheritdoc}
     * */
    public function capsule(): EntityName
    {
        $this
            ->setId(request('id'));

        return $this;
    }

    /**
     * Getter method for 'id'
     *
     * @return int|null $id
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Setter method for 'id'
     *
     * @param int|null $id
     *
     * @return EntityName
     */
    public function setId(?int $id = null): EntityName
    {
        $this->id = $id;

        return $this;
    }
}
`}
              />
            </Fragment>
          ),
        },
        custom: {
          name: "Custom Capsules",
          code: (
            <Fragment>
              <Title title={"Custom Capsules"} />

              <Description
                description={
                  "Create custom capsule classes with unique properties for different uses."
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:capsule EntityName"}
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

namespace Database\\Class;

use Lion\\Bundle\\Interface\\CapsuleInterface;

/**
 * Description
 *
 * @package Database\\Class
 */
class EntityName implements CapsuleInterface 
{
    /**
     * {@inheritdoc}
     * */
    public function jsonSerialize(): array
    {
        return get_object_vars($this);
    }

    /**
     * {@inheritdoc}
     * */
    public function capsule(): EntityName
    {
        return $this;
    }
}
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <Alert variant="info">
                  <strong>Note: </strong>You can add{" "}
                  <strong>[-p, --properties]</strong> option to add the class
                  properties.
                </Alert>

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:capsule EntityName -p id:int"}
                />

                <CodeBlock
                  language={"bash"}
                  content={
                    "php lion new:capsule EntityName --properties id:int"
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

namespace Database\\Class;

use Lion\\Bundle\\Interface\\CapsuleInterface;

/**
 * Description
 *
 * @property int|null $id [Property for id]
 *
 * @package Database\\Class
 */
class EntityName implements CapsuleInterface 
{
    /**
     * [Property for id]
     *
     * @var int|null $id
     */
    private ?int $id = null;

    /**
     * {@inheritdoc}
     * */
    public function jsonSerialize(): array
    {
        return get_object_vars($this);
    }

    /**
     * {@inheritdoc}
     * */
    public function capsule(): EntityName
    {
        $this
            ->setId(request('id'));

        return $this;
    }

    /**
     * Getter method for 'id'
     *
     * @return int|null $id
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Setter method for 'id'
     *
     * @param int|null $id
     *
     * @return EntityName
     */
    public function setId(?int $id = null): EntityName
    {
        $this->id = $id;

        return $this;
    }
}
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
    exceptions: {
      name: "Exceptions",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Exceptions",
          code: (
            <Fragment>
              <Title title="Create Exceptions" />

              <Description
                description={
                  "Automatically generates custom exception classes in PHP, streamlining error handling and making it easier to create more readable and maintainable code."
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:exception ExampleException"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Exceptions;

use Lion\\Exceptions\\Exception;
use Lion\\Exceptions\\Interfaces\\ExceptionInterface;
use Lion\\Exceptions\\Traits\\ExceptionTrait;

/**
 * Description of 'ExampleException'
 *
 * @package App\\Exceptions
 */
class ExampleException extends Exception implements ExceptionInterface
{
    use ExceptionTrait;
}

`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Exceptions",
          code: (
            <Fragment>
              <Title title="Use Exceptions" />

              <CodeBlock
                language={"php"}
                content={`<?php 

declare(strict_types=1);

namespace App\\Http\\Services;

use App\\Exceptions\\ExampleException;

/**
 * Service 'ExampleService'
 *
 * @package App\\Http\\Services
 */
class ExampleService
{
    /**
     * Example method
     *
     * @return void
     *
     * @throws ExampleException [description]
     */
    public function example(): void
    {
        throw new ExampleException('Something went wrong!');
    }
}
`}
              />
            </Fragment>
          ),
        },
      },
    },
    "html-templates": {
      name: "HTML",
      type: "sub_modules",
      list: {
        create: {
          name: "Create HTML",
          code: (
            <Fragment>
              <Title title="Create HTML" />

              <Description
                description={"Create your own HTML templates to send emails."}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Html;

use Lion\\Bundle\\Helpers\\Commands\\Html;
use Lion\\Bundle\\Interface\\HtmlInterface;

/**
 * Define an HTML template
 *
 * @package App\\Html
 */
class ExampleHtml extends Html implements HtmlInterface
{
    /**
     * {@inheritdoc}
     */
    public function template(): ExampleHtml
    {
        $this->add(
            <<<HTML
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>HTML Template</title>
            </head>
            <body>
                <h1>HTML Template (--REPLACE--)</h1>
            </body>
            </html>
            HTML
        );

        return $this;
    }
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use HTML",
          code: (
            <Fragment>
              <Title title="Use HTML" />

              <CodeBlock
                language={"php"}
                content={`<?php 

declare(strict_types=1);

namespace App\\Http\\Services;

use App\\Html\\ExampleHtml;

/**
 * Service 'ExampleService'
 *
 * @package App\\Http\\Services
 */
class ExampleService
{
    /**
     * Example method
     *
     * @param ExampleHtml $exampleHtml [Define an HTML template]
     *
     * @return void
     */
    public function example(ExampleHtml $exampleHtml): void
    {
        vd($exampleHtml->template()->get());
    }
}
`}
              />
            </Fragment>
          ),
        },
      },
    },
    migration: {
      name: "Migrations",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Migration",
          code: (
            <Fragment>
              <Fragment>
                <Title title={"Create Migration"} />

                <Description
                  description={
                    <Fragment>
                      Migrations are used to create the structure of your
                      database, you can define the tables with their properties,
                      relate them, read{" "}
                      <Link
                        to={"/docs/library/content"}
                        className="text-decoration-none"
                      >
                        Lion-Database
                      </Link>
                      , You can select a migration type by running the command.
                    </Fragment>
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:migration example-migration"}
                />

                <ul className="mb-3" style={{ listStyle: "none" }}>
                  <li>- Table</li>
                  <li>- View</li>
                  <li>- Store-Procedure</li>
                </ul>

                <Description
                  description={
                    <Fragment>
                      The current configuration defaults to{" "}
                      <strong>Table</strong> as migration.
                    </Fragment>
                  }
                />
              </Fragment>

              <Fragment>
                <Fragment>
                  <Title title={"Migration Table"} />

                  <CodeBlock
                    language={"php"}
                    content={`<?php

declare(strict_types=1);

namespace Database\\Migrations\\LionDatabase\\Table;

use Lion\\Bundle\\Interface\\Migrations\\TableInterface;
use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;
use stdClass;

/**
 * Description
 *
 * @package Database\\Migrations\\LionDatabase\\Table
 */
class ExampleMigration implements TableInterface
{
    /**
     * [Index number for seed execution priority]
     *
     * @const INDEX
     */
    public const ?int INDEX = null;

    /**
     * {@inheritdoc}
     */
    public function up(): stdClass
    {
        return Schema::connection(env('DB_NAME', 'lion_database'))
            ->createTable('example', function (): void {
                Schema::int('id')->notNull()->autoIncrement()->primaryKey();
            })
            ->execute();
    }
};
`}
                  />
                </Fragment>

                <Fragment>
                  <Title title={"Migration View"} />

                  <CodeBlock
                    language={"php"}
                    content={`<?php

declare(strict_types=1);

namespace Database\\Migrations\\LionDatabase\\View;

use Lion\\Bundle\\Interface\\Migrations\\ViewInterface;
use Lion\\Database\\Drivers\\MySQL;
use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;
use stdClass;

/**
 * Description
 *
 * @package Database\\Migrations\\LionDatabase\\View
 */
class ExampleMigration implements ViewInterface
{
    /**
     * {@inheritdoc}
     */
    public function up(): stdClass
    {
        return Schema::connection(env('DB_NAME', 'lion_database'))
            ->createView('read_example', function (MySQL $db): void {
                $db
                    ->table('table')
                    ->select();
            })
            ->execute();
    }
};
`}
                  />
                </Fragment>

                <Fragment>
                  <Title title={"Migration Store-Procedure"} />

                  <CodeBlock
                    language={"php"}
                    content={`<?php

declare(strict_types=1);

namespace Database\\Migrations\\LionDatabase\\StoreProcedure;

use Lion\\Bundle\\Interface\\Migrations\\StoreProcedureInterface;
use Lion\\Database\\Drivers\\MySQL;
use Lion\\Database\\Drivers\\Schema\\MySQL as Schema;
use stdClass;

/**
 * Description
 *
 * @package Database\\Migrations\\LionDatabase\\StoreProcedure
 */
class ExampleMigration implements StoreProcedureInterface
{
    /**
     * {@inheritdoc}
     */
    public function up(): stdClass
    {
        return Schema::connection(env('DB_NAME', 'lion_database'))
            ->createStoreProcedure('example', function (): void {
                Schema::in()->varchar('_name', 25);
            }, function (MySQL $db): void {
                $db
                    ->table('table')
                    ->insert(['name' => '_name']);
            })
            ->execute();
    }
};
`}
                  />
                </Fragment>
              </Fragment>
            </Fragment>
          ),
        },
        empty: {
          name: "Empty Migrations",
          code: (
            <Fragment>
              <Title title={"Empty Migrations"} />

              <Description
                description={"Empties all tables built with the migrations."}
              />

              <CodeBlock language={"bash"} content={"php lion migrate:empty"} />
            </Fragment>
          ),
        },
        run: {
          name: "Run Migration",
          code: (
            <Fragment>
              <Title title={"Run Migration"} />

              <Fragment>
                <Description
                  description={
                    "Run all the migrations you have with a single command, these processes are executed and added on the specified databases."
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion migrate:fresh"}
                />
              </Fragment>

              <Fragment>
                <Description
                  description={"You can run the seeds with migrations."}
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion migrate:fresh --seed"}
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
    vite: {
      name: "Vite.JS",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Project",
          code: (
            <Fragment>
              <Title title={"Create Project"} />

              <Description
                description={
                  <Fragment>
                    Projects with vite allow you to create simple web pages
                    using npm, when initialized it should call the project name
                    assigned to the folder, projects with vite are stored in{" "}
                    <Badge bg="secondary">{"vite/"}</Badge>.
                  </Fragment>
                }
              />

              <Alert variant="info">
                <strong>Note: </strong>the default project type is{" "}
                <strong>[React]</strong>, for more information about the
                properties for generating projects with vite select the Command
                section in the list.
              </Alert>

              <Alert variant="info">
                <strong>Note: </strong>each time a project is created with vite,
                the base information for the vite configuration is added, where
                a config object will be added to hold the changes in real time,
                see <strong>[vite.config.js]</strong> for the configuration.
              </Alert>

              <CodeBlock
                language={"bash"}
                content={"php npm init project-name"}
              />
            </Fragment>
          ),
        },
        install: {
          name: "Install Dependencies",
          code: (
            <Fragment>
              <Title title={"Install Dependencies"} />

              <Description
                description={
                  "Install the required dependencies for your frontend web application with NPM by running the command."
                }
              />

              <CodeBlock language={"bash"} content={"php npm install axios"} />

              <CodeBlock
                language={"bash"}
                content={"php npm install axios dayjs"}
              />
            </Fragment>
          ),
        },
        update: {
          name: "Update Dependencies",
          code: (
            <Fragment>
              <Title title={"Update Dependencies"} />

              <Description
                description={
                  "To update the installed dependencies you must run the command."
                }
              />

              <CodeBlock language={"bash"} content={"php npm update"} />
            </Fragment>
          ),
        },
        uninstall: {
          name: "Uninstall Dependencies",
          code: (
            <Fragment>
              <Title title={"Uninstall Dependencies"} />

              <Description
                description={
                  "To uninstall the installed dependencies you must run the command."
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php npm uninstall axios"}
              />

              <CodeBlock
                language={"bash"}
                content={"php npm uninstall axios crypto-js"}
              />
            </Fragment>
          ),
        },
        dist: {
          name: "Generate Dist",
          code: (
            <Fragment>
              <Title title={"Generate Dist"} />

              <Description
                description={
                  "To generate the dist of the vite project you must execute the command."
                }
              />

              <CodeBlock language={"bash"} content={"php npm build"} />
            </Fragment>
          ),
        },
        test: {
          name: "Test Project",
          code: (
            <Fragment>
              <Fragment>
                <Title title={"package.json"} />

                <CodeBlock
                  language={"javascript"}
                  content={`"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "test": "vitest" // add
},
`}
                />
              </Fragment>

              <Fragment>
                <Title title={"vite.config.js"} />

                <CodeBlock
                  language={"javascript"}
                  content={`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "/var/www/html/.env",
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    css: true,
    reporters: ["html"],
  },
});
`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Run Tests"} />

                <CodeBlock language={"bash"} content={"php npm test"} />
              </Fragment>
            </Fragment>
          ),
        },
        run: {
          name: "Run Project",
          code: (
            <Fragment>
              <Title title={"Run Project"} />

              <Description description={"Execute your vite projects."} />

              <CodeBlock language={"bash"} content={"php npm dev"} />
            </Fragment>
          ),
        },
      },
    },
    mailer: {
      name: "Mailer",
      type: "sub_modules",
      list: {
        config: {
          name: "Mailer Config",
          code: (
            <Fragment>
              <Title title="Mailer Config" />

              <Description
                description={
                  <Fragment>
                    To send mail with different accounts it is necessary to add
                    the accounts and add the service that these accounts use
                    (SymfonyMailer/PHPMailer), go to{" "}
                    <Badge bg="secondary">config/email.php</Badge>, read{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Mailer
                    </Link>
                    .
                  </Fragment>
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Mailer\\Mailer;

/**
 * -----------------------------------------------------------------------------
 * Start mail service
 * -----------------------------------------------------------------------------
 * describe connections to establish connecting to multiple databases
 * -----------------------------------------------------------------------------
 **/

Mailer::initialize([
    env('MAIL_NAME', 'lion-app') => [
        'name' => env('MAIL_NAME', 'lion-app'),
        'type' => env('MAIL_TYPE', 'symfony'),
        'host' => env('MAIL_HOST', 'mailhog'),
        'username' => env('MAIL_USER_NAME', 'lion-app'),
        'password' => env('MAIL_PASSWORD', 'lion'),
        'port' => (int) env('MAIL_PORT', 1025),
        'encryption' => env('MAIL_ENCRYPTION', 'tls'),
        'debug' => env('MAIL_DEBUG', false)
    ]
], env('MAIL_NAME', 'lion-app'));
`}
              />
            </Fragment>
          ),
        },
      },
    },
    request: {
      name: "Request",
      type: "sub_modules",
      list: {
        use: {
          name: "Use Request",
          code: (
            <Fragment>
              <Title title="Use Request" />

              <Description
                description={
                  <Fragment>
                    The <Badge bg={"secondary"}>capture</Badge> function of the{" "}
                    <Badge bg={"secondary"}>Request</Badge> class is used in
                    order to obtain the data sent in an HTTP request, the system
                    internally initializes a{" "}
                    <Badge bg={"secondary"}>request</Badge> constant to obtain
                    the data. more information in{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Request
                    </Link>
                    .
                  </Fragment>
                }
              />

              <Fragment>
                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" +
                    "echo(request('users_name') . ' ' . request('users_last-name'));"
                  }
                />

                <EquivalentTo />

                <CodeBlock
                  langueage={"php"}
                  content={
                    "<?php\n\n" +
                    "echo($_POST['users_name'] . ' ' . $_POST['users_last-name']);"
                  }
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
    response: {
      name: "Response",
      type: "sub_modules",
      list: {
        use: {
          name: "Use Response",
          code: (
            <Fragment>
              <Title title={"Response"} />

              <Description
                description={
                  <Fragment>
                    The Response class implements different response functions
                    on HTTP requests, the system internally initializes a{" "}
                    <Badge bg={"secondary"}>response</Badge> constant to access
                    the functions. more information in{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Request
                    </Link>
                    .
                  </Fragment>
                }
              />

              <Fragment>
                <ExampleTitle number={1} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

return success('message');
`}
                />

                <EquivalentTo />

                <CodeBlock
                  language={"json"}
                  content={`{
  "code": 200,
  "status": "success",
  "message": "message"
}`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

return error('message');
`}
                />

                <EquivalentTo />

                <CodeBlock
                  language={"json"}
                  content={`{
  "code": 500,
  "status": "error",
  "message": "message"
}`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={3} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

use Lion\\Request\\Http;

return error('message', Http::UNAUTHORIZED);
`}
                />

                <EquivalentTo />

                <CodeBlock
                  language={"json"}
                  content={`{
  "code": 401,
  "status": "error",
  "message": "message"
}`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={4} />

                <CodeBlock
                  language={"php"}
                  content={`<?php

use Lion\\Request\\Http;
use Lion\\Request\\Status;

return response(Status::ERROR, 'message', Http::HTTP_UNAUTHORIZED);
`}
                />

                <EquivalentTo />

                <CodeBlock
                  language={"json"}
                  content={`{
  "code": 401,
  "status": "session-error",
  "message": "message"
}`}
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
    rules: {
      name: "Rules",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Rule",
          code: (
            <Fragment>
              <Title title={"Create Rule"} />

              <Description
                description={
                  <Fragment>
                    You can create rules from command line{" "}
                    <Badge bg={"secondary"}>php lion new:rule rule_name</Badge>,
                    rule usage is based on rules provided by{" "}
                    <a
                      href="https://github.com/vlucas/valitron"
                      target={"_blank"}
                      className="text-decoration-none"
                    >
                      vlucas/valitron
                    </a>
                    , more information in{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Route
                    </Link>
                    , rules are stored in{" "}
                    <Badge bg="secondary">{"app/Rules/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:rule ExampleRule"}
              />

              <Description
                description={
                  "You can generate all the database rules for each entity, for all its properties."
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion db:rules entity_name"}
              />

              <ListGroup className="mb-3">
                <ListGroup.Item variant="dark">
                  <strong>- field: </strong>property name, this property is
                  displayed in exported postman collections.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <strong>- desc: </strong> property description, this property
                  is displayed in exported postman collections.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <strong>- value: </strong> property value, this property is
                  displayed in exported postman collections.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <strong>- disabled: </strong> disable property, this property
                  is displayed on exported postman collections.
                </ListGroup.Item>
              </ListGroup>

              <CodeBlock
                langueage={"php"}
                content={`<?php
                
declare(strict_types=1);

namespace App\\Rules;

use Lion\\Route\\Helpers\\Rules;
use Lion\\Route\\Interface\\RulesInterface;
use Valitron\\Validator;

class ExampleRule extends Rules implements RulesInterface
{
    /**
     * [field for 'example']
     *
     * @var string $field
     */
    public string $field = 'example';

    /**
     * [description for 'example']
     *
     * @var string $desc
     */
    public string $desc = '';

    /**
     * [value for 'example']
     *
     * @var string $value;
     */
    public string $value = '';

    /**
     * [Defines whether the column is optional for postman collections]
     *
     * @var bool $disabled;
     */
    public bool $disabled = false;

    /**
     * {@inheritdoc}
     */
    public function passes(): void
    {
        $this->validate(function (Validator $validator): void {
            $validator
                ->rule('required', $this->field)
                ->message('the "example" property is required');
        });
    }
}

`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Rule",
          code: (
            <Fragment>
              <Title title={"Use Rule"} />

              <Description
                description={
                  "Add your rules to different routes in controllers."
                }
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Controllers;

use App\\Rules\\ExampleRule;

/**
 * Description
 *
 * @package App\\Http\\Controllers
 */
class ExampleController
{
    /**
     * Description
     *
     * @return stdClass
     */
    #[\\Lion\\Route\\Attributes\\Rules(ExampleRule::class)]
    public function example(): stdClass
    {
        return success();
    }
}`}
              />
            </Fragment>
          ),
        },
      },
    },
    traits: {
      name: "Traits",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Traits",
          code: (
            <Fragment>
              <Title title={"Create Traits"} />

              <Description
                description={
                  <Fragment>
                    Traits are stored in{" "}
                    <Badge bg="secondary">{"app/Traits/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:trait ExampleTrait"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Traits;

/**
 * Trait ExampleTrait
 *
 * @package App\\Traits
 */
trait ExampleTrait
{
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Traits",
          code: (
            <Fragment>
              <Title title={"Use Traits"} />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Services;

use App\\Traits\\ExampleTrait;

/**
 * Service 'ExampleService'
 *
 * @package App\\Http\\Services
 */
class ExampleService
{
    use ExampleTrait;
}
`}
              />
            </Fragment>
          ),
        },
      },
    },
    enums: {
      name: "Enums",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Enums",
          code: (
            <Fragment>
              <Title title={"Create Enums"} />

              <Description
                description={
                  <Fragment>
                    Enums are stored in{" "}
                    <Badge bg="secondary">{"app/Enums/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:enum StatusEnum"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Enums;

/**
 * Enum StatusEnum
 *
 * @package App\\Enums
 */
enum StatusEnum: string
{
    case SUCCESS = 'success';

    case ERROR = 'error';

    case WARNING = 'warning';

    case INFO = 'info';

    case DATABASE_ERROR = 'database-error';

    case SESSION_ERROR = 'session-error';

    case ROUTE_ERROR = 'route-error';
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Enums",
          code: (
            <Fragment>
              <Title title={"Use Enums"} />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Services;

use App\\Enums\\StatusEnum;

/**
 * Service 'ExampleService'
 *
 * @package App\\Http\\Services
 */
class ExampleService
{
    public function example(): void
    {
        vd(StatusEnum::SUCCESS->value);
    }
}`}
              />
            </Fragment>
          ),
        },
      },
    },
    middleware: {
      name: "Middleware",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Middleware",
          code: (
            <Fragment>
              <Title title={"Create Middleware"} />

              <Description
                description={
                  <Fragment>
                    Middleware is stored in{" "}
                    <Badge bg="secondary">app/Http/Middleware</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:middleware JWTMiddleware"}
              />
            </Fragment>
          ),
        },
        "add-functions": {
          name: "Add functions",
          code: (
            <Fragment>
              <Title title={"Add functions"} />

              <Description
                description={
                  "We can add the necessary functions in each middleware."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Middleware;

use Lion\\Bundle\\Exceptions\\MiddlewareException;
use Lion\\Files\\Store;
use Lion\\Request\\Http;
use Lion\\Request\\Status;
use Lion\\Security\\JWT;
use Lion\\Security\\RSA;

/**
 * Responsible for filtering and validating the JWT sent through an HTTP request
 *
 * @property Store $store [Store class object]
 * @property RSA $rsa [RSA class object]
 * @property JWT $jwt [JWT class object]
 *
 * @package App\Http\Middleware
 */
class JWTMiddleware
{
    /**
     * [Object of class Store]
     *
     * @var Store $store
     */
    private Store $store;

    /**
     * [Object of class RSA]
     *
     * @var RSA $rsa
     */
    private RSA $rsa;

    /**
     * [Object of class JWT]
     *
     * @var JWT $jwt
     */
    private JWT $jwt;

    /**
     * @required
     */
    public function setStore(Store $store): JWTMiddleware
    {
        $this->store = $store;

        return $this;
    }

    /**
     * @required
     */
    public function setRSA(RSA $rsa): JWTMiddleware
    {
        $this->rsa = $rsa;

        return $this;
    }

    /**
     * @required
     */
    public function setJWT(JWT $jwt): JWTMiddleware
    {
        $this->jwt = $jwt;

        return $this;
    }

    /**
     * Initialize RSA keys
     *
     * @param string $path [RSA key paths]
     *
     * @return void
     */
    private function initRSA(string $path): void
    {
        $this->rsa
            ->setUrlPath(storage_path($path))
            ->init();
    }

    /**
     * Validate the session defined in the JWT
     *
     * @param object $jwt [JWT object]
     *
     * @return void
     *
     * @throws MiddlewareException [The session with the JWT has failed]
     */
    private function validateSession(object $jwt): void
    {
        if (isError($jwt)) {
            throw new MiddlewareException($jwt->message, Status::SESSION_ERROR, Http::UNAUTHORIZED);
        }

        if (!isset($jwt->data->session)) {
            throw new MiddlewareException('undefined session', Status::SESSION_ERROR, Http::FORBIDDEN);
        }
    }

    /**
     * Validate if a JWT exists in the headers
     *
     * @return void
     *
     * @throws MiddlewareException [If authorization token does not exist]
     */
    public function existence(): void
    {
        if (empty($_SERVER['HTTP_AUTHORIZATION'])) {
            throw new MiddlewareException('the JWT does not exist', Status::SESSION_ERROR, Http::UNAUTHORIZED);
        }
    }

    /**
     * Validate a JWT in headers even though the signature is not validated
     *
     * @return void
     *
     * @throws MiddlewareException [If the authorization token is not valid]
     */
    public function authorizeWithoutSignature(): void
    {
        $this->existence();

        $splitToken = explode('.', $this->jwt->getJWT());

        if (arr->of($splitToken)->length() != 3) {
            throw new MiddlewareException('invalid JWT [AUTH-1]', Status::SESSION_ERROR, Http::UNAUTHORIZED);
        }

        $data = ((object) json_decode(base64_decode($splitToken[1]), true));

        if (empty($data->data['users_code'])) {
            throw new MiddlewareException('invalid JWT [AUTH-2]', Status::SESSION_ERROR, Http::FORBIDDEN);
        }

        $path = env('RSA_URL_PATH') . "{$data->data['users_code']}/";

        if (isError($this->store->exist(storage_path($path)))) {
            throw new MiddlewareException('invalid JWT [AUTH-3]', Status::SESSION_ERROR, Http::FORBIDDEN);
        }

        $this->initRSA($path);

        $token = $this->jwt
            ->config([
                'publicKey' => $this->rsa->getPublicKey()
            ])
            ->decode($this->jwt->getJWT())
            ->get();

        $this->validateSession($token);

        if (!$token->data->session || empty($token->data->session)) {
            throw new MiddlewareException(
                'user not logged in, you must log in',
                Status::SESSION_ERROR,
                Http::UNAUTHORIZED
            );
        }
    }

    /**
     * Validate a JWT to check if it is still valid and the session is true
     *
     * @return void
     *
     * @throws MiddlewareException [If the user session is not authorized]
     */
    public function authorize(): void
    {
        $this->initRSA(env('RSA_URL_PATH'));

        $this->existence();

        $token = $this->jwt
            ->config([
                'publicKey' => $this->rsa->getPublicKey()
            ])
            ->decode($this->jwt->getJWT())
            ->get();

        $this->validateSession($token);

        if (!$token->data->session || empty($token->data->session)) {
            throw new MiddlewareException(
                'user not logged in, you must log in',
                Status::SESSION_ERROR,
                Http::UNAUTHORIZED
            );
        }
    }

    /**
     * Validate a JWT to check if it is still valid and the session is false
     *
     * @return void
     *
     * @throws MiddlewareException [If the user session is authorized]
     */
    public function notAuthorize(): void
    {
        $this->initRSA(env('RSA_URL_PATH'));

        $this->existence();

        $token = $this->jwt
            ->config([
                'publicKey' => $this->rsa->getPublicKey()
            ])
            ->decode($this->jwt->getJWT())
            ->get();

        $this->validateSession($token);

        if ($token->data->session) {
            throw new MiddlewareException(
                'user in session, you must close the session',
                Status::SESSION_ERROR,
                Http::UNAUTHORIZED
            );
        }
    }
}
`}
              />
            </Fragment>
          ),
        },
        "add-middleware": {
          name: "Add Middleware",
          code: (
            <Fragment>
              <Title title={"Add Middleware"} />

              <Description
                description={
                  <Fragment>
                    To import middleware to the routes we must first import the
                    namespace of the middleware and inside this add an array to
                    create custom middleware.{" "}
                    <Badge bg={"secondary"}>config/middleware.php</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use App\\Http\\Middleware\\JWTMiddleware;
use Lion\\Bundle\\Helpers\\Http\\Routes;
use Lion\\Route\\Middleware;

/**
 * -----------------------------------------------------------------------------
 * Web middleware
 * -----------------------------------------------------------------------------
 * This is where you can register web middleware for your application
 * -----------------------------------------------------------------------------
 **/

Routes::setMiddleware([

    /**
     * [Filters to validate different states with JWT]
     */

    new Middleware('jwt-existence', JWTMiddleware::class, 'existence'),

    new Middleware('jwt-authorize', JWTMiddleware::class, 'authorize'),

    new Middleware('jwt-not-authorize', JWTMiddleware::class, 'notAuthorize'),

    new Middleware('jwt-without-signature', JWTMiddleware::class, 'authorizeWithoutSignature'),

]);
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Middleware",
          code: (
            <Fragment>
              <Title title={"Use Middleware"} />

              <Description
                description={
                  "You can use your middleware on routes and create more secure web applications."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use App\\Http\\Controllers\\HomeController;

Route::middleware(['jwt-exist', 'jwt-authorize'], function() {
	Route::get('/', [HomeController::class, 'index']);
});
`}
              />
            </Fragment>
          ),
        },
      },
    },
    factory: {
      name: "Factory",
      type: "sub_modules",
      list: {
        factory: {
          name: "Create Factory",
          code: (
            <Fragment>
              <Title title={"Create Factory"} />

              <Description
                description={
                  <Fragment>
                    Factories are stored in{" "}
                    <Badge bg="secondary">{"database/Factory/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:factory ExampleFactory"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

declare(strict_types=1);

namespace Database\\Factory;

use Lion\\Bundle\\Interface\\FactoryInterface;

/**
 * Description
 *
 * @package Database\\Factory
 */
class ExampleFactory implements FactoryInterface
{
    /**
     * {@inheritdoc}
     **/
    public static function columns(): array
    {
        return [
            'name',
        ];
    }

    /**
     * {@inheritdoc}
     **/
    public static function definition(): array
    {
        return [
            [
                fake()->name(),
            ],
            [
                fake()->name(),
            ],
        ];
    }
}
`}
              />
            </Fragment>
          ),
        },
      },
    },
    seed: {
      name: "Seed",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Seed",
          code: (
            <Fragment>
              <Title title={"Create Seed"} />

              <Description
                description={
                  <Fragment>
                    Seed are stored in{" "}
                    <Badge bg="secondary">{"database/Seed/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:seed ExampleSeed"}
              />

              <CodeBlock
                langueage={"php"}
                content={`<?php

declare(strict_types=1);

namespace Database\\Seed;

use Database\\Factory\\ExampleFactory;
use Lion\\Bundle\\Interface\\SeedInterface;
use Lion\\Database\\Drivers\\MySQL as DB;

/**
* Description
*
* @package Database\\Seed
*/
class ExampleSeed implements SeedInterface
{
  /**
   * [Index number for seed execution priority]
   *
   * @const INDEX
   */
  const ?int INDEX = null;

  /**
   * {@inheritdoc}
   **/
  public function run(): object
  {
      return DB::table('example')
          ->bulk(ExampleFactory::columns(), ExampleFactory::definition())
          ->execute();
  }
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Seed",
          code: (
            <Fragment>
              <Title title={"Use Seed"} />

              <Description
                description={
                  "Run your seeds to add test data to your local database."
                }
              />

              <CodeBlock language={"bash"} content={"php lion db:seed"} />
            </Fragment>
          ),
        },
      },
    },
    sockets: {
      name: "Sockets",
      type: "sub_modules",
      list: {
        create: {
          name: "Create Socket",
          code: (
            <Fragment>
              <Title title={"Create Socket"} />

              <Description
                description={
                  <Fragment>
                    Websockets interact with the{" "}
                    <a
                      href="http://socketo.me/docs/"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      Ratchet
                    </a>{" "}
                    library, Sockets are stored in{" "}
                    <Badge bg="secondary">{"app/Http/Sockets/"}</Badge>.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:socket ExampleSocket"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace App\\Http\\Sockets;

use Exception;
use Ratchet\\ConnectionInterface;
use Ratchet\\MessageComponentInterface;
use SplObjectStorage;

/**
 * Description of Socket 'ExampleSocket'
 *
 * @property SplObjectStorage $clients [List of clients connected to the Socket]
 *
 * @package App\\Http\\Sockets
 */
class ExampleSocket implements MessageComponentInterface
{
    /**
     * [List of clients connected to the Socket]
     *
     * @var SplObjectStorage $clients
     */
    protected SplObjectStorage $clients;

    /**
     * Class Constructor
     */
    public function __construct()
    {
        $this->clients = new SplObjectStorage();
    }

    /**
     * {@inheritdoc}
     */
    public function onOpen(ConnectionInterface $conn): void
    {
        echo("New connection! ({$conn->resourceId})");

        $this->clients->attach($conn);
    }

    /**
     * {@inheritdoc}
     */
    public function onMessage(ConnectionInterface $from, $msg): void
    {
        foreach ($this->clients as $client) {
            if ($from !== $client) {
                $client->send($msg);
            }
        }
    }

    /**
     * {@inheritdoc}
     */
    public function onClose(ConnectionInterface $conn): void
    {
        $this->clients->detach($conn);
    }

    /**
     * {@inheritdoc}
     */
    public function onError(ConnectionInterface $conn, Exception $e): void
    {
        $conn->close();
    }
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Sockets",
          code: (
            <Fragment>
              <Title title={"Use Sockets"} />

              <Description
                description={
                  "To execute a socket you must do it from the console."
                }
              />

              <CodeBlock language={"bash"} content={"php lion socket:serve"} />
            </Fragment>
          ),
        },
      },
    },
    test: {
      name: "Test",
      type: "sub_modules",
      list: {
        config: {
          name: "Config Test",
          code: (
            <Fragment>
              <Title title={"Config Test"} />

              <Description
                description={
                  <Fragment>
                    You can configure your own testsuite in{" "}
                    <a
                      href="https://phpunit.de/documentation.html"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      phpunit.xml
                    </a>
                    .
                  </Fragment>
                }
              />

              <Fragment>
                <Alert variant="info">
                  <strong>Note: </strong>Install the printer for a prettier
                  output in the tests.{" "}
                  <strong>(It is installed by default)</strong>
                </Alert>

                <CodeBlock
                  language={"bash"}
                  content={
                    "composer require --dev robiningelbrecht/phpunit-pretty-print"
                  }
                />
              </Fragment>

              <Fragment>
                <Title title={"phpunit.xml"} />

                <CodeBlock
                  language={"xml"}
                  content={`<?xml version="1.0" encoding="UTF-8"?>
<phpunit
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    defaultTestSuite="All-Test"
    testdox="false"
    cacheResult="true"
    colors="true"
    columns="80"
    backupGlobals="false"
    processIsolation="false"
    stopOnDefect="true"
    stopOnError="true"
    stopOnFailure="true"
    stopOnWarning="true"
    bootstrap="tests/bootstrap.php"
    xsi:noNamespaceSchemaLocation="https://schema.phpunit.de/11.1/phpunit.xsd"
    backupStaticProperties="false"
    displayDetailsOnIncompleteTests="true"
    displayDetailsOnSkippedTests="true"
    displayDetailsOnTestsThatTriggerDeprecations="true"
    displayDetailsOnTestsThatTriggerErrors="true"
    displayDetailsOnTestsThatTriggerNotices="true"
    displayDetailsOnTestsThatTriggerWarnings="true"
>
    <php>
        <env name="APP_ENV" value="testing" />
        <ini name="date.timezone" value="America/Bogota" />
        <ini name="intl.default_locale" value="C.UTF-8" />
        <ini name="memory_limit" value="2048M" />
    </php>

    <extensions>
        <bootstrap class="RobinIngelbrecht\PHPUnitPrettyPrint\PhpUnitExtension">
            <parameter name="enableByDefault" value="true" />
            <parameter name="displayProfiling" value="false" />
            <parameter name="useCompactMode" value="true" />
        </bootstrap>
    </extensions>

    <source>
        <include>
            <directory suffix=".php">app</directory>
            <directory suffix=".php">database/Class</directory>
        </include>

        <exclude>
            <directory suffix=".php">app/Html</directory>
            <directory suffix=".php">app/Rules</directory>
            <directory suffix=".php">app/Sockets</directory>
        </exclude>
    </source>

    <testsuites>
        <testsuite name="All-Test">
            <directory suffix=".php">tests/Api</directory>
            <directory suffix=".php">tests/App</directory>
            <directory suffix=".php">tests/Database</directory>
        </testsuite>

        <testsuite name="Unit">
            <directory suffix=".php">tests/App/Enums</directory>
            <directory suffix=".php">tests/App/Exceptions</directory>
            <directory suffix=".php">tests/App/Interfaces</directory>
            <directory suffix=".php">tests/Database</directory>
        </testsuite>

        <testsuite name="Integration">
            <directory suffix=".php">tests/App/Console/Commands</directory>
            <directory suffix=".php">tests/App/Http/Controllers</directory>
            <directory suffix=".php">tests/App/Http/Middleware</directory>
            <directory suffix=".php">tests/App/Http/Services</directory>
            <directory suffix=".php">tests/App/Models</directory>
        </testsuite>

        <testsuite name="Functional">
            <directory suffix=".php">tests/Api</directory>
        </testsuite>
    </testsuites>
</phpunit>
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        create: {
          name: "Create Test",
          code: (
            <Fragment>
              <Title title={"Create Test"} />

              <Description
                description={
                  <Fragment>
                    Add to your web application with{" "}
                    <strong>Lion-Framework</strong> test to perform the
                    necessary quality checks of your system, the tests are
                    implemented with the help of{" "}
                    <a
                      href="https://phpunit.de/"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      PHPUnit
                    </a>
                    .
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:test TestName"}
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

namespace Tests;

use Lion\\Test\\Test;

class ExampleTest extends Test
{
    protected function setUp(): void
    {
    }

    protected function tearDown(): void
    {
    }
}
`}
              />
            </Fragment>
          ),
        },
        use: {
          name: "Use Test",
          code: (
            <Fragment>
              <Title title={"Use Test"} />

              <Description
                description={"Generate a test and add your own assertions."}
              />

              <Fragment>
                <ExampleTitle number={1} />

                <Description
                  description={
                    "An example of testing a controller that has dependency injection."
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

namespace Tests\\Global\\App\\Http\\Controllers\\LionDatabase\\MySQL;

use Lion\\Dependency\\Injection\\Container;
use Lion\\Request\\Http;
use Lion\\Request\\Status;
use Lion\\Test\\Test;

class ExampleControllerTest extends Test
{
    private ExampleController $exampleController;
    private Container $container;

    protected function setUp(): void
    {
        $this->exampleController = new ExampleController();

        $this->container = new Container();
    }

    public function testExample(): void
    {
        $response = $this->container->injectDependenciesMethod($this->exampleController, 'example');

        $this->assertIsObject($response);
        $this->assertObjectHasProperty('code', $response);
        $this->assertObjectHasProperty('status', $response);
        $this->assertObjectHasProperty('message', $response);
        $this->assertSame(Http::OK, $response->code);
        $this->assertSame(Status::SUCCESS, $response->code);
        $this->assertSame('OK', $response->message);
    }
}
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={2} />

                <Description
                  description={"An example of testing a native exception."}
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

namespace Tests\\Global\\App\\Http\\Controllers\\LionDatabase\\MySQL;

use Exception;
use App\\Exceptions\\ExampleException;
use Lion\\Request\\Http;
use Lion\\Test\\Test;

class ExampleExceptionTest extends Test
{
    public function testExampleException(): void
    {
        $this->expectException(Exception::class);
        $this->expectExceptionMessage('ERR');
        $this->expectExceptionCode(Http::INTERNAL_SERVER_ERROR);

        throw new Exception('ERR', Http::INTERNAL_SERVER_ERROR);
    }
}
`}
                />
              </Fragment>

              <Fragment>
                <ExampleTitle number={3} />

                <Description
                  description={
                    <Fragment>
                      An example of testing a custom lion exception.{" "}
                      <Link
                        to="/docs/library/content"
                        className="text-decoration-none"
                      >
                        Lion-Test
                      </Link>{" "}
                      makes use of{" "}
                      <Link
                        to="/docs/library/content"
                        className="text-decoration-none"
                      >
                        Lion-Exceptions
                      </Link>{" "}
                      to handle exceptions.
                    </Fragment>
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

namespace Tests\\Global\\App\\Exceptions;

use App\\Exceptions\\ExampleException;
use Lion\\Request\\Http;
use Lion\\Request\\Status;
use Lion\\Test\\Test;

class ExampleExceptionTest extends Test
{
    public function testExampleException(): void
    {
        // Run the custom exception to add assertions.

        $this
            ->exception(ExampleException::class)
            ->exceptionMessage('ERR')
            ->exceptionStatus(Status::ERROR)
            ->exceptionCode(Http::INTERNAL_SERVER_ERROR)
            ->expectLionException();
    }

    public function testExampleExceptionWithCustomProcess(): void
    {
        // Run a specific process where an exception is expected.

        $this
            ->exception(ExampleException::class)
            ->exceptionMessage('ERR')
            ->exceptionStatus(Status::ERROR)
            ->exceptionCode(Http::INTERNAL_SERVER_ERROR)
            ->expectLionException(function (): void {
                throw new ExampleException('ERR', Status::ERROR, Http::INTERNAL_SERVER_ERROR);
            });
    }
}

`}
                />
              </Fragment>
            </Fragment>
          ),
        },
        run: {
          name: "Run Test",
          code: (
            <Fragment>
              <Title title={"Run Test"} />

              <Notes />

              <Fragment>
                <Description description={"Run all tests via command line."} />

                <CodeBlock language={"bash"} content={"php lion test"} />

                <CodeBlock
                  language={"bash"}
                  content={"php lion test --suite Unit-Tests"}
                />
              </Fragment>

              <Fragment>
                <Description
                  description={
                    "Run the reports to observe them from the coverage."
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion test --report"}
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion test --suite Unit-Tests --report"}
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
    rsa: {
      name: "RSA",
      type: "sub_modules",
      list: {
        create: {
          name: "Create",
          code: (
            <Fragment>
              <Title title={"Create"} />

              <Description
                description={
                  <Fragment>
                    Create public and private keys, perform encryption and
                    decryption with them{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      Lion-Security RSA lease
                    </Link>
                    , you can generate the keys from the terminal once the
                    parameters are set from the environment variables.
                  </Fragment>
                }
              />

              <Alert variant="info">
                <strong>Note: </strong> all generated keys are stored inside{" "}
                <Badge bg="secondary">{"storage/"}</Badge>.
              </Alert>

              <CodeBlock language={"bash"} content={"php lion new:rsa"} />

              <Description
                description={
                  <Fragment>
                    You can select a different folder than the selected one from
                    the environment variables with the{" "}
                    <Badge bg="secondary">{"--path"}</Badge> option.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"bash"}
                content={"php lion new:rsa --path keys-user-1/"}
              />
            </Fragment>
          ),
        },
      },
    },
    aes: {
      name: "AES",
      type: "sub_modules",
      list: {
        create: {
          name: "Create",
          code: (
            <Fragment>
              <Title title={"Create"} />

              <Description
                description={
                  <Fragment>
                    Generate (KEY - IV) to encrypt and decrypt with AES,{" "}
                    <Link
                      to={"/docs/library/content"}
                      className="text-decoration-none"
                    >
                      lease Lion-Security AES
                    </Link>
                    , you can generate the keys from the terminal once the
                    parameters are set from the environment variables.
                  </Fragment>
                }
              />

              <CodeBlock language={"bash"} content={"php lion new:aes"} />
            </Fragment>
          ),
        },
      },
    },
    postman: {
      name: "Postman",
      type: "sub_modules",
      list: {
        collections: {
          name: "Postman Collections",
          code: (
            <Fragment>
              <Title title={"Postman Collections"} />

              <p className="fs-6">
                To export the available routes you must run the local server and
                execute the export, after this you can observe the collections
                in <Badge bg="secondary">storage/postman/</Badge>.
              </p>

              <CodeBlock language={"bash"} content={"php lion route:postman"} />
            </Fragment>
          ),
        },
      },
    },
    cors: {
      name: "Cors",
      type: "sub_modules",
      list: {
        config: {
          name: "Cors Config",
          code: (
            <Fragment>
              <Title title={"Cors Config"} />

              <Description
                description={
                  <Fragment>
                    Enable and add the necessary headers for your web
                    application, go to{" "}
                    <Badge bg="secondary">config/cors.php</Badge> and set your
                    headers.
                  </Fragment>
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

declare(strict_types=1);

use Lion\\Request\\Http;
use Lion\\Request\\Request;

/**
 * -----------------------------------------------------------------------------
 * Cross-Origin Resource Sharing (CORS) Configuration
 * -----------------------------------------------------------------------------
 * Here you can configure your settings for cross-origin resource
 * sharing or "CORS". This determines which cross-origin operations
 * can be executed in web browsers.
 * -----------------------------------------------------------------------------
 **/

Request::header('Access-Control-Allow-Origin', env('SERVER_URL_AUD', 'http://localhost:5173'));

Request::header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

Request::header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

Request::header('Access-Control-Max-Age', '3600');

if (Http::OPTIONS === $_SERVER['REQUEST_METHOD']) {
    http_response_code(Http::OK);

    exit(0);
}

Request::header('Content-Type', 'application/json; charset=UTF-8');
`}
              />
            </Fragment>
          ),
        },
      },
    },
    schedule: {
      name: "Schedule",
      type: "sub_modules",
      list: {
        "create-cron": {
          name: "Create Cron",
          code: (
            <Fragment>
              <Fragment>
                <Title title={"Create Cron"} />

                <Alert variant={"info"}>
                  <strong>Note: </strong>Currently the framework is supported
                  for development in Linux environments.
                </Alert>

                <Alert variant={"info"}>
                  <strong>Note: </strong>You must have the <strong>cron</strong>{" "}
                  library installed.
                </Alert>

                <Alert variant={"info"}>
                  <strong>Note: </strong>When you create a scheduled task, a log
                  file is generated in the{" "}
                  <Badge bg="secondary">storage/logs/cron/</Badge> path.
                </Alert>

                <Description
                  description={"Create a scheduled task from terminal."}
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:cron ExampleCron"}
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

declare(strict_types=1);

namespace App\\Console\\Cron;

use App\\Console\\Commands\\ExampleCommand;
use Lion\\Bundle\\Helpers\\Commands\\Schedule\\Schedule;
use Lion\\Bundle\\Interface\\ScheduleInterface;

/**
 * schedule ExampleCron
 *
 * @package App\\Console\\Cron
 */
class ExampleCron implements ScheduleInterface
{
    /**
     * {@inheritdoc}
     */
    public function schedule(Schedule $schedule): void
    {
        $schedule
            ->cron('* * * * *')
            ->command(ExampleCommand::class)
            ->log('example');
    }
}
`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Schedule List"} />

                <Description
                  description={"View a list of available scheduled tasks"}
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion schedule:list"}
                />

                <CodeBlock
                  language={"log"}
                  content={`+-----------  SCHEDULED TASKS  -+---------+
| CRON      | COMMAND | OPTIONS | LOG     |
+-----------+---------+---------+---------+
| * * * * * | example | N/A     | example |
+-----------+---------+---------+---------+
+------  Showing a scheduled task  -------+`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Mount scheduled task"} />

                <Alert variant={"info"}>
                  <strong>Note: </strong>Currently the framework is supported
                  for development in Linux environments.
                </Alert>

                <Description
                  description={
                    "Add the schedule task to the crontab configuration from the environment variables file."
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={`################################################################################
################ CRONTAB -------------------------------------- ################
################################################################################
CRONTAB_PATH="/etc/" # the "/etc/" value for docker
CRONTAB_PHP_PATH="/usr/local/bin/php" # the '/usr/local/bin/php' value for docker
CRONTAB_PROJECT_PATH="/var/www/html/" # the "/var/www/html/" value for docker`}
                />

                <CodeBlock language={"bash"} content={"php lion schedule:up"} />
              </Fragment>
            </Fragment>
          ),
        },
        "queued-tasks": {
          name: "Queued tasks",
          code: (
            <Fragment>
              <Fragment>
                <Title title={"Add queued tasks"} />

                <Description
                  description={
                    <Fragment>
                      Queued tasks works with Redis. Processes for tasks have
                      dependency injections, you can also inject the properties
                      defined in the json. Read{" "}
                      <Link
                        to={"/docs/library/content"}
                        className="text-decoration-none"
                      >
                        Lion-Dependency-Injection
                      </Link>
                    </Fragment>
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

use Lion\\Bundle\\Helpers\\Commands\\Schedule\\Task;
use Lion\\Bundle\\Helpers\\Commands\\Schedule\\TaskQueue;

(new TaskQueue())->push(
    new Task(AccountService::class, 'myMethod', [
        'account' => fake()->email(),
        'code' => fake()->numerify('######'),
    ])
);
`}
                />
              </Fragment>

              <Fragment>
                <Title title={"Run queued tasks"} />

                <Description
                  description={
                    "Query and execute queued tasks in the background."
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"php lion schedule:run"}
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
    helpers: {
      name: "Helpers",
      type: "sub_modules",
      list: {
        "constants-helpers": {
          name: "Constants",
          code: (
            <Fragment>
              <Title title={"Constants"} />

              <Table
                size="sm"
                variant="dark"
                responsive
                hover
                className="align-middle"
              >
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CLIENT</td>
                    <td>
                      the CLIENT constant is an object of the GuzzleHttp\Client
                      class, it allows you to make HTTP requests.
                    </td>
                  </tr>

                  <tr>
                    <td>REQUEST</td>
                    <td>
                      the REQUEST constant is an object of the Lion
                      Request\Request class, it allows you to get the data
                      captured through an HTTP request.
                    </td>
                  </tr>

                  <tr>
                    <td>RESPONSE</td>
                    <td>
                      the RESPONSE constant is an object of the Lion
                      Request\Response class, it allows you to generate
                      responses of different types that the class provides.
                    </td>
                  </tr>

                  <tr>
                    <td>STR</td>
                    <td>
                      the constant STR is an object of class LionHelpers\Str, it
                      allows you to access this helper and transform strings.
                    </td>
                  </tr>

                  <tr>
                    <td>ARR</td>
                    <td>
                      the constant ARR is an object of class LionHelpers\Arr, it
                      allows you to access this helper and transform arrays.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Fragment>
          ),
        },
        "functions-helpers": {
          name: "Functions",
          code: (
            <Fragment>
              <Title title={"Functions"} />

              <Description
                description={
                  <Fragment>
                    Add helpers for your web application in{" "}
                    <Badge bg={"secondary"}>app/helpers.php</Badge>.
                  </Fragment>
                }
              />

              <Fragment>
                <h5 className="text-lion-orange">{"request"}</h5>

                <Description
                  description={
                    "Object with properties captured in an HTTP request and you can add properties to the object."
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

$request = request();

vd($request);

$request = request('users_name');

vd($request);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">{"now"}</h5>

                <Description
                  description={
                    "Get a Carbon instance for the current date and time."
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

$request = now()->format('Y-m-d H:i:s');

vd($date);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">fetch</h5>

                <Description
                  description={
                    <Fragment>
                      Function to make HTTP requests with GuzzleHttp.{" "}
                      <a
                        href="https://docs.guzzlephp.org/en/stable/request-options.html#verify"
                        target="_blank"
                      >
                        More info.
                      </a>
                    </Fragment>
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

use Lion\\Request\\Http;

$response = fetch(
    new Fetch(Http::POST, 'https://example.com/api/auth/login', [
        'headers' => [...],
        'json' => [...],
    ])
)
    ->getBody()
    ->getContents();

vd($response);
`}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

use Lion\\Request\\Http;

$response = fetch(
    new Fetch(Http::POST, '/api/auth/login', [
        'headers' => [...],
        'json' => [...],
    ])
        ->setFetchConfiguration(
            new FetchConfiguration([
                'base_uri' => 'https://example.com',
                'verify' => false,
            ])
        )
)
    ->getBody()
    ->getContents();

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">storage_path</h5>

                <Description
                  description={
                    "Function to get the path of the storage directory."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php
                    
$path = storage_path('path/to/file.txt');

vd($path);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">finish</h5>

                <Description
                  description={
                    "Function to display a response and end the execution of processes."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$response = success();

finish($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">response</h5>

                <Description
                  description={
                    "Allows you to generate a custom response object"
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

$response = response('custom', 'message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">success</h5>

                <Description
                  description={
                    "Allows you to generate an object of type success."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$response = success('message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">error</h5>

                <Description
                  description={
                    "Allows you to generate an object of type error."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php
                  
$response = error('message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">warning</h5>

                <Description
                  description={
                    "Allows you to generate an object of type warning."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php
                  
$response = warning('message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">info</h5>

                <Description
                  description={"Allows you to generate an object of type info."}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php
                  
$response = info('message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">vd</h5>

                <Description description={"Function to perform a var_dump."} />
                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$response = success('message');

vd($response);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">logger</h5>

                <Description
                  description={"Function to add a line to the log file."}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

use Lion\\Bundle\\Enums\\LogTypeEnum;

logger('lorem ipsum dolor sit amet...'); // default LogTypeEnum::INFO

logger('lorem ipsum dolor sit amet...', LogTypeEnum::ERROR);

logger('lorem ipsum dolor sit amet...', LogTypeEnum::WARNING, ['name' => 'Sleon']);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">json</h5>

                <Description
                  description={"Function to convert data to json."}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$json = json(['name' => 'Sleon']);

vd($json);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">{"isError"}</h5>

                <Description
                  description={
                    "Function to check if a response object comes with errors."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

use Exception;

$response = error('message');

if (isError($response)) {
    throw new Exception($response->message);
}
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">{"isSuccess"}</h5>

                <Description
                  description={
                    "Function to check if a response object is successful."
                  }
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

use Exception;

$response = success('message');

if (!isSuccess($response)) {
    throw new Exception($response->message);
}
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">jwt</h5>

                <Description
                  description={"Gets the HTTP_AUTHORIZATION header token."}
                />

                <CodeBlock
                  langueage={"php"}
                  content={`<?php

$jwt = jwt();

vd($jwt);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">fake</h5>

                <Description
                  description={
                    "Function that generates a Generator object to obtain fake data."
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

$name = fake()->name();

vd($name);
`}
                />
              </Fragment>

              <Fragment>
                <h5 className="text-lion-orange">env</h5>

                <Description
                  description={
                    "Gets the value defined for an environment variable."
                  }
                />

                <CodeBlock
                  language={"php"}
                  content={`<?php

$dbname = env('DB_NAME');

vd($dbname);

$dbname = env('DB_NAME', 'test_database'); // default value: 'test_database'

vd($dbname);
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
    docker: {
      name: "Docker",
      type: "sub_modules",
      list: {
        dockerfile: {
          name: "Dockerfile",
          code: (
            <Fragment>
              <Title title={"Dockerfile"} />

              <Description
                description={
                  <Fragment>
                    Use Docker to recreate an entire PHP environment to use
                    Lion-Framework.{" "}
                    <a
                      href={
                        "https://github.com/lion-packages/framework/blob/main/Dockerfile"
                      }
                      target="_blank"
                    >
                      Dockerfile
                    </a>
                  </Fragment>
                }
              />
            </Fragment>
          ),
        },
        "docker-compose": {
          name: "docker-compose.yml",
          code: (
            <Fragment>
              <Title title={"docker-compose.yml"} />

              <Description
                description={
                  <Fragment>
                    Use Docker to recreate an entire PHP environment to use
                    Lion-Framework.{" "}
                    <a
                      href={
                        "https://github.com/lion-packages/framework/blob/main/docker-compose.yml"
                      }
                      target="_blank"
                    >
                      docker-compose.yml
                    </a>
                  </Fragment>
                }
              />
            </Fragment>
          ),
        },
        run: {
          name: "Run Docker",
          code: (
            <Fragment>
              <Title title={"Run Docker"} />

              <Fragment>
                <Description
                  description={"Run the Docker container in the background."}
                />

                <CodeBlock language={"bash"} content={"docker compose up -d"} />
              </Fragment>

              <Fragment>
                <Description
                  description={
                    "Rebuild the Docker container in the background."
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"docker compose up -d --build"}
                />
              </Fragment>

              <Fragment>
                <Description description={"Restart Docker containers."} />

                <CodeBlock
                  language={"bash"}
                  content={"docker compose restart"}
                />
              </Fragment>

              <Fragment>
                <Description description={"Unmount the Docker containers."} />

                <CodeBlock language={"bash"} content={"docker compose down"} />
              </Fragment>

              <Fragment>
                <Description description={"Enter the Docker container."} />

                <CodeBlock
                  language={"bash"}
                  content={`docker exec -it -u lion framework-app zsh
# or
docker exec -it -u lion framework-app bash
`}
                />
              </Fragment>
            </Fragment>
          ),
        },
      },
    },
  };
}
