import {
  Alert,
  Badge,
  Card,
  Col,
  ListGroup,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ListCommandsNew from "../../../../../pages/components/ListCommandsNew";
import CodeBlock from "../../../../../pages/components/CodeBlock";
import GithubButton from "../../../../../pages/components/GithubButton";

import { DiPhp } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import docker_ps from "./../../../assets/img/docker/docker-ps.png";
import docker_exec from "./../../../assets/img/docker/docker-exec.png";
import script_sh from "./../../../assets/img/docker/script-sh.png";
import permissions_sh from "./../../../assets/img/docker/permissions-sh.png";
import etc_data from "./../../../assets/img/docker/etc-data.png";
import crontab_edit from "./../../../assets/img/docker/crontab-edit.png";

export default function v14_24_0_FRM(mdText) {
  return {
    changelog: {
      name: "Changelog",
      code: <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdText}</ReactMarkdown>,
    },
    commands: {
      name: "Commands",
      code: (
        <Tabs defaultActiveKey="list-commands" id="commands" fill>
          <Tab eventKey="list-commands" title="LIST">
            <div className="my-3">
              <h2>LIST COMMANDS</h2>
              <hr />

              <ListCommandsNew />
            </div>
          </Tab>

          <Tab eventKey="add-commands" title="ADD">
            <div className="my-3">
              <h2>ADD COMMANDS</h2>
              <hr />

              <p>
                You need to add the commands in the{" "}
                <Badge bg="secondary">config/commands.php</Badge> array,
                Commands are stored in{" "}
                <Badge bg="secondary">{"app/Console/Commands/"}</Badge>.
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "return [\n" +
                  "\t'app' => [\n\t\t// \\App\\Console\\Commands\\MyCommandCommand::class\n\t];\n" +
                  "..."
                }
              />
            </div>
          </Tab>

          <Tab eventKey="execute-commands" title="EXECUTE">
            <div className="my-3">
              <h2>EXECUTE COMMANDS</h2>
              <hr />

              <p>execute commands with the command and execute functions.</p>

              <CodeBlock
                language={"php"}
                content={"<?php\n\n" + "kernel->execute('php lion db:show');"}
              />

              <CodeBlock
                language={"php"}
                content={"<?php\n\n" + "kernel->command('db:show');"}
              />
            </div>
          </Tab>
        </Tabs>
      ),
    },
    docker: {
      name: "Docker",
      code: (
        <Tabs defaultActiveKey="files" id="docker" fill>
          <Tab eventKey="files" title="FILES">
            <div className="my-3">
              <h2>DOCKER FILES</h2>
              <hr />

              <p>
                Add the <strong>Dockerfile</strong> and{" "}
                <strong>docker-compose.yml</strong> to the root of the project,
                to create the container you must execute the command{" "}
                <strong>docker-compose up</strong>.
              </p>

              <CodeBlock
                language={"dockerfile"}
                content={
                  "# Dockerfile \n" +
                  "FROM php:8.2-apache \n" +
                  "ARG DEBIAN_FRONTEND=noninteractive \n\n" +
                  "RUN apt-get update \\ \n" +
                  "\t&& apt-get install -y git \\ \n" +
                  "\t&& apt-get install -y unzip \\ \n" +
                  "\t&& apt-get install -y sudo \\ \n" +
                  "\t&& apt-get install -y nano \\ \n" +
                  "\t&& apt-get install -y cron \\ \n" +
                  "\t&& apt-get install -y sendmail \\ \n" +
                  "\t&& apt-get install -y libpng-dev \\ \n" +
                  "\t&& apt-get install -y libzip-dev \\ \n" +
                  "\t&& apt-get install -y zlib1g-dev \\ \n" +
                  "\t&& apt-get install -y libonig-dev \\ \n" +
                  "\t&& apt-get install -y supervisor \\ \n" +
                  "\t&& apt-get install -y libevent-dev \\ \n" +
                  "\t&& apt-get install -y curl \\ \n" +
                  "\t&& apt-get install -y libssl-dev \\ \n" +
                  "\t&& rm -rf /var/lib/apt/lists/*\n\n" +
                  "RUN pecl install ev\n\n" +
                  "RUN docker-php-ext-install mbstring \\ \n" +
                  "\t&& docker-php-ext-install zip \\ \n" +
                  "\t&& docker-php-ext-install gd \\ \n" +
                  "\t&& docker-php-ext-install pdo_mysql \\ \n" +
                  "\t&& docker-php-ext-install mysqli \\ \n" +
                  "\t&& docker-php-ext-enable gd \\ \n" +
                  "\t&& docker-php-ext-enable zip\n\n" +
                  "COPY . . \n" +
                  "COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf\n\n" +
                  "RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \n" +
                  "RUN a2enmod rewrite \n\n" +
                  "CMD composer install && /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf \n\n" +
                  "EXPOSE 8000"
                }
              />

              <CodeBlock
                language={"yaml"}
                content={
                  "# docker-compose.yml \n" +
                  'version: "3.8"\n' +
                  "services:\n" +
                  "\tapp:\n" +
                  "\t\tcontainer_name: lion-framework-app\n" +
                  "\t\tbuild:\n" +
                  "\t\t\tcontext: .\n" +
                  "\t\t\tdockerfile: Dockerfile\n" +
                  "\t\tenv_file:\n" +
                  "\t\t\t- .env\n" +
                  "\t\tports:\n" +
                  '\t\t\t- "8000:8000"\n' +
                  '\t\t\t- "5173:5173"\n' +
                  "\t\tvolumes:\n" +
                  "\t\t\t- ./:/var/www/html\n" +
                  "\t\tdepends_on:\n" +
                  "\t\t\t- db\n" +
                  "\t\tnetworks:\n" +
                  "\t\t\t- lion\n" +
                  "\tdb:\n" +
                  "\t\timage: mysql\n" +
                  "\t\tcontainer_name: lion-framework-mysql\n" +
                  "\t\tcommand: --default-authentication-plugin=mysql_native_password\n" +
                  "\t\tenvironment:\n" +
                  "\t\t\tMYSQL_DATABASE: ${DB_NAME}\n" +
                  "\t\t\tMYSQL_PASSWORD: ${DB_PASSWORD}\n" +
                  "\t\t\tMYSQL_ROOT_PASSWORD: ${DB_PASSWORD}\n" +
                  "\t\tports:\n" +
                  '\t\t\t- "3306:3306"\n' +
                  "\t\tvolumes:\n" +
                  "\t\t\t- db_data:/var/lib/mysql\n" +
                  "\t\tnetworks:\n" +
                  "\t\t\t- lion\n" +
                  "\tphpmyadmin:\n" +
                  "\t\timage: phpmyadmin/phpmyadmin\n" +
                  "\t\tcontainer_name: lion-framework-phpmyadmin\n" +
                  "\t\tlinks:\n" +
                  "\t\t\t- db:db\n" +
                  "\t\tports:\n" +
                  '\t\t\t- "8080:80"\n' +
                  "\t\tenvironment:\n" +
                  "\t\t\tMYSQL_USER: ${DB_USER}\n" +
                  "\t\t\tMYSQL_PASSWORD: ${DB_PASSWORD}\n" +
                  "\t\t\tMYSQL_ROOT_PASSWORD: ${DB_PASSWORD}\n" +
                  "\t\tnetworks:\n" +
                  "\t\t\t- lion\n" +
                  "volumes:\n" +
                  "\tdb_data:\n" +
                  "networks:\n" +
                  "\tlion:"
                }
              />

              <CodeBlock
                language={"ini"}
                content={
                  "# supervisord.conf\n" +
                  "[supervisord]\n" +
                  "user=root\n" +
                  "nodaemon=true\n" +
                  "logfile=/var/www/html/storage/logs/supervisord/supervisord.log\n\n" +
                  "[program:web-server]\n" +
                  "command=php lion serve --host 0.0.0.0 --port 8000\n" +
                  "directory=/var/www/html\n" +
                  "autostart=true\n" +
                  "autorestart=true\n" +
                  "redirect_stderr=true\n" +
                  "stdout_logfile=/var/www/html/storage/logs/server/web-server.log\n\n" +
                  "; [program:socket-notifications]\n" +
                  "; command=php lion socket:serve NotificationsSocket\n" +
                  "; directory=/var/www/html\n" +
                  "; autostart=true\n" +
                  "; autorestart=true\n" +
                  "; redirect_stderr=true\n" +
                  "; stdout_logfile=/var/www/html/storage/logs/sockets/socket.log"
                }
              />
            </div>
          </Tab>

          <Tab eventKey="config" title="CONFIG">
            <div className="my-3">
              <h2>DOCKER CONFIG</h2>
              <hr />

              <div className="mb-3">
                <h5 className="text-warning">DOCKER-COMPOSE</h5>

                <p>
                  If sockets were configured to run with Docker, you must expose
                  in the "services: app" the port of the sockets to be listened
                  on.
                </p>

                <CodeBlock
                  language={"yaml"}
                  content={
                    "# docker-compose.yml \n" +
                    'version: "3.8"\n' +
                    "services:\n" +
                    "\tapp:\n" +
                    "\t\tcontainer_name: lion-framework-app\n" +
                    "\t\tbuild:\n" +
                    "\t\t\tcontext: .\n" +
                    "\t\t\tdockerfile: Dockerfile\n" +
                    "\t\tenv_file:\n" +
                    "\t\t\t- .env\n" +
                    "\t\tports:\n" +
                    '\t\t\t- "8000:8000"\n' +
                    '\t\t\t- "8090:8090" # sockert port\n' +
                    "\t\tvolumes:\n" +
                    "\t\t\t- ./:/var/www/html\n" +
                    "\t\tdepends_on:\n" +
                    "\t\t\t- db\n" +
                    "\t\tnetworks:\n" +
                    "\t\t\t- lion"
                  }
                />
              </div>

              <div className="mb-3">
                <h5 className="text-warning">ENV</h5>

                <p>
                  The host of the connection to the databases must be
                  established with the value <strong>DB_HOST=db</strong>
                </p>

                <CodeBlock
                  language={"bash"}
                  content={
                    "##################################################### \n" +
                    "### DATABASE CONNECTIONS ------------------------ ### \n" +
                    "##################################################### \n" +
                    'DB_TYPE="mysql" \n' +
                    "DB_HOST=db \n" +
                    "DB_PORT=3306 \n" +
                    'DB_NAME="lion_database" \n' +
                    'DB_USER="root" \n' +
                    'DB_PASSWORD="lion-framework"'
                  }
                />
              </div>
            </div>
          </Tab>

          <Tab eventKey="run" title="RUN">
            <div className="my-3">
              <h2>RUN DOCKER</h2>
              <hr />

              <p>run the container</p>

              <CodeBlock language={"bash"} content={"docker-compose up"} />
            </div>
          </Tab>
        </Tabs>
      ),
    },
    cron: {
      name: "Cron",
      code: (
        <>
          <h2>CRON</h2>
          <hr />

          <p>
            CRON tasks can be run in <strong>Docker</strong> containers,{" "}
            <strong>Lion-Framework</strong> provides the necessary docker files
            to create a container with their respective images, to start
            creating CRON tasks generate the necessary commands to run them
            through <strong>sh</strong> files, note that this is performed under
            a <strong>Linux</strong> development environment with the{" "}
            <strong>Debian</strong> distribution specified in the{" "}
            <strong>Dockerfile</strong>.
          </p>

          <div className="mb-3">
            <h5 className="text-warning">
              1. Create the command for the CRON task
            </h5>

            <p>
              With the generated command you can carry out the necessary
              instructions for the execution of the CRON task.
            </p>

            <CodeBlock
              language={"bash"}
              content={"php lion new:command command_name"}
            />
          </div>

          <div className="mb-3">
            <h5 className="text-warning">2. Add the command</h5>

            <p>
              The command should be added to the command list found in
              <Badge bg="secondary">{"config/commands.php"}</Badge>.
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "return [\n" +
                "\t'app' => [\n\t\t// \\App\\Console\\Commands\\MyCommandCommand::class;\n\t];\n" +
                "..."
              }
            />
          </div>

          <div className="mb-3">
            <h5 className="text-warning">3. Create file to run</h5>

            <p>
              You must generate the sh file to run the CRON tasks with your
              instructions, this file is stored in{" "}
              <Badge bg="secondary">storage/cron/</Badge>.
            </p>

            <CodeBlock language={"bash"} content={"php lion sh:new sh_name"} />

            <img src={script_sh} className="img-fluid" />
          </div>

          <div className="mb-3">
            <h5 className="text-warning">4. Build the Docker container</h5>

            <p>
              You must generate the Docker container to configure for the
              execution of the CRON task.
            </p>

            <CodeBlock language={"bash"} content={"docker-compose up"} />
          </div>

          <div className="mb-3">
            <h5 className="text-warning">5. Access the container bash.</h5>

            <p>
              Access lion-framework-app container (image) bash, you can get the
              image id.
            </p>

            <CodeBlock language={"bash"} content={"docker ps"} />

            <img src={docker_ps} className="img-fluid mb-3" />

            <p>
              After copying the id of the lion-framework-app image, bash should
              be accessed.
            </p>

            <CodeBlock
              language={"bash"}
              content={"docker exec -it image_id bash"}
            />

            <img src={docker_exec} className="img-fluid" />
          </div>

          <div className="mb-3">
            <h5 className="text-warning">6. Permissions for sh file</h5>

            <p>
              To give read and write permissions to a shell script file (file
              with .sh extension), you can use the chmod command. For example,
              to give read and write permissions to the script.sh file, you can
              run the following command:
            </p>

            <CodeBlock language={"bash"} content={"chmod +rw script.sh"} />

            <img src={permissions_sh} className="img-fluid" />
          </div>

          <div className="mb-3">
            <h5 className="text-warning">7. configure crontab</h5>

            <p>
              To configure the <strong>crontab</strong> file you must go to the{" "}
              <strong>etc/</strong> path, where you can run the{" "}
              <strong>ls</strong> command to display the{" "}
              <strong>crontab</strong> file, to configure the{" "}
              <strong>crontab</strong> run the following command:
            </p>

            <img src={etc_data} className="img-fluid mb-3" />

            <CodeBlock language={"bash"} content={"sudo crontab -e"} />

            <p>
              This opens the <strong>crontab</strong> file from the terminal or
              the editor that you have configured, add the instruction in the
              last line to perform the CRON task with its respective
              configuration.
            </p>

            <img src={crontab_edit} className="img-fluid mb-3" />

            <p>
              Save the changes with the command <strong>Ctrl + X</strong>, on
              Linux and macOS, the Windows equivalent of{" "}
              <strong>Ctrl + X</strong> is <strong>Command + X</strong> or{" "}
              <strong>Ctrl + X</strong>.
            </p>

            <p>
              Press <strong>Y</strong> to accept the changes and then press the
              <strong>Intro</strong> key to exit.
            </p>
          </div>

          <div className="mb-3">
            <h5 className="text-warning">8. restart the container</h5>

            <p>
              After configuring the CRON task, you must restart the container to
              see the changes, otherwise the configured CRON tasks run, go back
              to step #5 to access the container bash again, run the following
              command:
            </p>

            <CodeBlock
              language={"bash"}
              content={"sudo service cron restart"}
            />
          </div>
        </>
      ),
    },
    database: {
      name: "Database",
      code: (
        <Tabs defaultActiveKey="config" id="database" fill>
          <Tab eventKey="config" title="CONFIG">
            <div className="my-3">
              <h2 className="pb-2">DATABASE CONFIG</h2>
              <hr />

              <p>
                To make a direct connection to the database, go to{" "}
                <Badge bg="secondary">config/database.php</Badge>, for more
                information read{" "}
                <Link
                  to={"/libraries/lion/sql/index"}
                  className="text-decoration-none"
                >
                  Lion-SQL
                </Link>
                . The connections established in the config must be added
                directly in the .env
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "/**\n" +
                  "* ------------------------------------------------------------------------------\n" +
                  "* Start database service\n" +
                  "* ------------------------------------------------------------------------------\n" +
                  "* describe connections to establish connecting to multiple databases\n" +
                  "* ------------------------------------------------------------------------------\n" +
                  "**/\n\n" +
                  "return [\n" +
                  "\t'default' => env->DB_NAME,\n" +
                  "\t'connections' => [\n" +
                  "\t\tenv->DB_NAME => [\n" +
                  "\t\t\t'type' => env->DB_TYPE,\n" +
                  "\t\t\t'host' => env->DB_HOST,\n" +
                  "\t\t\t'port' => env->DB_PORT,\n" +
                  "\t\t\t'dbname' => env->DB_NAME,\n" +
                  "\t\t\t'user' => env->DB_USER,\n" +
                  "\t\t\t'password' => env->DB_PASSWORD\n" +
                  "\t\t],\n" +
                  "\t]\n" +
                  "];"
                }
              />
            </div>
          </Tab>

          <Tab eventKey="show" title="SHOW">
            <div className="my-3">
              <h2 className="pb-2">SHOW DATABASE CONNECTIONS</h2>
              <hr />

              <p>View all available database connections.</p>
              <CodeBlock language={"bash"} content={"php lion db:show"} />
            </div>
          </Tab>
        </Tabs>
      ),
    },
    email: {
      name: "Email",
      code: (
        <Tabs defaultActiveKey="config" id="email" fill>
          <Tab eventKey="config" title="CONFIG">
            <div className="my-3">
              <h2>MAIL CONFIG</h2>
              <hr />

              <p>
                To send mail with different accounts you need to add the
                accounts and add the service, go to{" "}
                <Badge bg="secondary">config/email.php</Badge>, email accounts
                must be added to the .env, for more information, read{" "}
                <Link
                  to={"/libraries/lion/mailer/index"}
                  className="text-decoration-none"
                >
                  Lion-Mailer
                </Link>
                .
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "/**\n" +
                  "* ------------------------------------------------------------------------------\n" +
                  "* Start mail service\n" +
                  "* ------------------------------------------------------------------------------\n" +
                  "* describe connections to establish connecting to multiple databases\n" +
                  "* ------------------------------------------------------------------------------\n" +
                  "**/\n\n" +
                  "return [\n" +
                  "\t'default' => env->MAIL_NAME,\n" +
                  "\t'accounts' => [\n" +
                  "\t\tenv->MAIL_NAME => [\n" +
                  "\t\t\t'services' => explode('-', env->MAIL_SERVICES),\n" +
                  "\t\t\t'debug' => (int) env->MAIL_DEBUG,\n" +
                  "\t\t\t'host' => env->MAIL_HOST,\n" +
                  "\t\t\t'encryption' => env->MAIL_ENCRYPTION,\n" +
                  "\t\t\t'port' => (int) env->MAIL_PORT,\n" +
                  "\t\t\t'name' => env->MAIL_NAME,\n" +
                  "\t\t\t'account' => env->MAIL_ACCOUNT,\n" +
                  "\t\t\t'password' => env->MAIL_PASSWORD\n" +
                  "\t\t],\n" +
                  "\t\tenv->MAIL_NAME_SUPP => [\n" +
                  "\t\t\t'services' => explode('-', env->MAIL_SERVICES_SUPP),\n" +
                  "\t\t\t'debug' => (int) env->MAIL_DEBUG_SUPP,\n" +
                  "\t\t\t'host' => env->MAIL_HOST_SUPP,\n" +
                  "\t\t\t'encryption' => env->MAIL_ENCRYPTION_SUPP,\n" +
                  "\t\t\t'port' => (int) env->MAIL_PORT_SUPP,\n" +
                  "\t\t\t'name' => env->MAIL_NAME_SUPP,\n" +
                  "\t\t\t'account' => env->MAIL_ACCOUNT_SUPP,\n" +
                  "\t\t\t'password' => env->MAIL_PASSWORD_SUPP\n" +
                  "\t\t]\n" +
                  "\t],\n" +
                  "];"
                }
              />
            </div>
          </Tab>

          <Tab eventKey="show" title="SHOW">
            <div className="my-3">
              <h2>SHOW ACCOUNTS</h2>
              <hr />

              <p>View the accounts available in the system.</p>
              <CodeBlock language={"bash"} content={"php lion email:show"} />
            </div>
          </Tab>
        </Tabs>
      ),
    },
    cors: {
      name: "Cors",
      code: (
        <>
          <div className="mb-3">
            <h2 className="pb-2">CORS</h2>

            <hr />

            <p>
              Enable and add the necessary headers for your web application, go
              to <Badge bg="secondary">config/cors.php</Badge> and set your
              headers.
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "/**\n" +
                "* ------------------------------------------------------------------------------\n" +
                "* Cross-Origin Resource Sharing (CORS) Configuration\n" +
                "* ------------------------------------------------------------------------------\n" +
                "* Here you can configure your settings for cross-origin resource\n" +
                "* sharing or 'CORS'. This determines which cross-origin operations\n" +
                "* can be executed in web browsers.\n" +
                "* ------------------------------------------------------------------------------\n" +
                "**/\n\n" +
                "return [\n" +
                "\t'Access-Control-Allow-Origin' => '*',\n" +
                "\t'Content-Type' => 'application/json; charset=UTF-8',\n" +
                "\t'Access-Control-Max-Age' => 0,\n" +
                "\t'Allow' => 'GET, POST, PUT, DELETE, PATCH, OPTIONS',\n" +
                "\t'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, PATCH, OPTIONS',\n" +
                "\t'Access-Control-Allow-Headers' => 'Origin, X-Requested-With, Content-Type, Accept, Authorization'\n" +
                "];"
              }
            />
          </div>
        </>
      ),
    },
    resource: {
      name: "Resources",
      code: (
        <Tabs defaultActiveKey="new" id="resources" fill>
          <Tab eventKey="new" title="NEW">
            <div className="my-3">
              <h2>CREATE RESOURCES</h2>
              <hr />

              <p>
                Resources allow you to create simple web pages using the twig
                templating engine (symfony), resources are created with a unique
                folder name, when initialized it should call the resource name
                assigned to the folder, resources are stored in{" "}
                <Badge bg="secondary">{"resources/"}</Badge>.
              </p>

              <p>
                By default a resource is already installed that allows you to
                use basic functions of the integrated terminal from the web
                (http:127.0.0.1:5173)
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion resource:new resource_name"}
              />
            </div>
          </Tab>

          <Tab eventKey="use" title="USE">
            <div className="my-3">
              <h2>USE RESOURCES</h2>
              <hr />

              <div className="mb-3">
                <p>
                  Add the resource to the supervisord to run with the container.
                  If there is an error for not finding the log files, you can
                  create them in the respective paths described in
                  stdout_logfile
                </p>

                <p>
                  By default a resource is already installed that allows you to
                  use basic functions of the integrated terminal from the web
                  (http:127.0.0.1:5173)
                </p>

                <CodeBlock
                  language={"ini"}
                  content={
                    "# supervisord.conf\n" +
                    "[supervisord]\n" +
                    "user=root\n" +
                    "nodaemon=true\n" +
                    "logfile=/var/www/html/storage/logs/supervisord/supervisord.log\n\n" +
                    "[program:web-server]\n" +
                    "command=php lion serve --host 0.0.0.0 --port 8000\n" +
                    "directory=/var/www/html\n" +
                    "autostart=true\n" +
                    "autorestart=true\n" +
                    "redirect_stderr=true\n" +
                    "stdout_logfile=/var/www/html/storage/logs/server/web-server.log\n\n" +
                    "[program:resource-example]\n" +
                    "command=php lion resource:serve resource_name --host 0.0.0.0 --port 5173\n" +
                    "directory=/var/www/html\n" +
                    "autostart=true\n" +
                    "autorestart=true\n" +
                    "redirect_stderr=true\n" +
                    "stdout_logfile=/var/www/html/storage/logs/resources/resource-example.log"
                  }
                />
              </div>

              <div className="mb-3">
                <p>
                  Add the port in the docker-compose.yml file configuration.
                </p>

                <CodeBlock
                  language={"yaml"}
                  content={
                    "# docker-compose.yml \n" +
                    'version: "3.8"\n' +
                    "services:\n" +
                    "\tapp:\n" +
                    "\t\tcontainer_name: lion-framework-app\n" +
                    "\t\tbuild:\n" +
                    "\t\t\tcontext: .\n" +
                    "\t\t\tdockerfile: Dockerfile\n" +
                    "\t\tenv_file:\n" +
                    "\t\t\t- .env\n" +
                    "\t\tports:\n" +
                    '\t\t\t- "8000:8000"\n' +
                    '\t\t\t- "5173:5173" # resource port\n' +
                    "\t\tvolumes:\n" +
                    "\t\t\t- ./:/var/www/html\n" +
                    "\t\tdepends_on:\n" +
                    "\t\t\t- db\n" +
                    "\t\tnetworks:\n" +
                    "\t\t\t- lion"
                  }
                />
              </div>
            </div>
          </Tab>
        </Tabs>
      ),
    },
    request: {
      name: "Request",
      code: (
        <>
          <div className="mb-3">
            <h2>REQUEST</h2>
            <hr />

            <p>
              The <Badge bg={"secondary"}>capture</Badge> function of the{" "}
              <Badge bg={"secondary"}>Request</Badge> class is used in order to
              obtain the data sent in an HTTP request, the system internally
              initializes a <Badge bg={"secondary"}>request</Badge> constant to
              obtain the data. more information in{" "}
              <Link
                to={"/libraries/lion/request/index"}
                className="text-decoration-none"
              >
                Lion-Request
              </Link>
              .
            </p>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "define('request', LionRequest\\Request::getInstance()->capture()); // (object)"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5>EXAMPLE</h5>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "echo(\n" +
                "\trequest->users_name . ' ' . request->{'users_last-name'}\n" +
                ");"
              }
            />

            <p>equivalent to</p>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "echo(\n" +
                `\t$_POST['users_name'] . ' ' . $_POST['users_last-name']\n` +
                ");"
              }
            />
          </div>
        </>
      ),
    },
    response: {
      name: "Response",
      code: (
        <>
          <div className="mb-3">
            <h2>RESPONSE</h2>
            <hr />

            <p>
              The Response class implements different response functions on HTTP
              requests, the system internally initializes a{" "}
              <Badge bg={"secondary"}>response</Badge> constant to access the
              functions. more information in{" "}
              <Link
                to={"/libraries/lion/request/index"}
                className="text-decoration-none"
              >
                Lion-Request
              </Link>
              .
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "define('response', LionRequest\\Response::getInstance()); // (Response)"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5>EXAMPLE #1</h5>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "return response->success('message...');\n" +
                "// or \n" +
                "return success('message...');"
              }
            />

            <CodeBlock
              language={"json"}
              content={
                "{\n" +
                '\t"status": "success",\n' +
                '\t"message": "message...",\n' +
                '\t"data": []\n' +
                "}"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5>EXAMPLE #2</h5>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "return response->error('message...');\n" +
                "// or \n" +
                "return error('message...');"
              }
            />

            <CodeBlock
              language={"json"}
              content={
                "{\n" +
                '\t"status": "error",\n' +
                '\t"message": "message...",\n' +
                '\t"data": []\n' +
                "}"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <h5>EXAMPLE #3</h5>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "return response->response('my_custom_response', 'message...');"
              }
            />

            <CodeBlock
              language={"json"}
              content={
                "{\n" +
                '\t"status": "my_custom_response",\n' +
                '\t"message": "message...",\n' +
                '\t"data": []\n' +
                "}"
              }
            />
          </div>
        </>
      ),
    },
    migration: {
      name: "Migrations",
      code: (
        <Tabs defaultActiveKey="new-migrations" id="migrations" fill>
          <Tab eventKey="new-migrations" title="NEW">
            <div className="my-3">
              <h2>CREATE MIGRATION</h2>
              <hr />

              <p>
                Migrations are used to create the structure of your database,
                you can define the tables with their properties, relate them,
                read{" "}
                <Link
                  to={"/libraries/lion/sql/index"}
                  className="text-decoration-none"
                >
                  Lion-SQL
                </Link>
                , You can select a migration type by running the command.
              </p>

              <ul className="mb-3" style={{ listStyle: "none" }}>
                <li>TABLE</li>
                <li>VIEW</li>
                <li>PROCEDURE</li>
              </ul>

              <CodeBlock
                language={"bash"}
                content={"php lion migrate:new example_migrate my_connection"}
              />

              <CodeBlock
                language={"bash"}
                content={
                  "php lion migrate:new example_migrate my_connection --type PROCEDURE"
                }
              />
            </div>
          </Tab>

          <Tab eventKey="generate-migrations" title="GENERATE">
            <div className="my-3">
              <h2>GENERATE MIGRATION</h2>
              <hr />

              <p>
                Generate all the migrations you have from an existing database
                with one command, the generated migrations are unique to tables
                that are in the database.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion migrate:generate"}
              />
            </div>
          </Tab>

          <Tab eventKey="fresh-migrations" title="FRESH">
            <div className="my-3">
              <h2>RUN MIGRATION</h2>
              <hr />

              <p>
                Run all the migrations you have with a single command, these
                processes are executed and added on the specified databases.
              </p>

              <CodeBlock language={"bash"} content={"php lion migrate:fresh"} />
            </div>
          </Tab>
        </Tabs>
      ),
    },
    crud: {
      name: "Crud",
      code: (
        <>
          <h2>CRUD</h2>
          <hr />

          <div className="mb-3">
            <h5 className="text-warning">ALL-CRUD</h5>

            <p>
              Generate all the CRUDs of your entities with a single command, the
              command checks the entire list of available connections, this maps
              all the entities from each database, gets the properties of each
              entity and generates a basic crud.
            </p>

            <CodeBlock language={"bash"} content={"php lion db:all-crud"} />

            <p>characteristics:</p>

            <ul>
              <li>
                <strong>CAPSULE CLASS</strong>: generates the capsule class of
                the entity.
              </li>

              <li>
                <strong>CONTROLLER CLASS</strong>: generates the controller
                class of the entity.
              </li>

              <li>
                <strong>MODEL CLASS</strong>: generates the model class of the
                entity.
              </li>

              <li>
                <strong>VIEWS</strong>: generates the basic views to read
                entities.
              </li>

              <li>
                <strong>PROCEDURES</strong>: the respective basic procedures of
                the entity are generated.
              </li>
            </ul>
          </div>

          <div className="mb-3">
            <h5 className="text-warning">CRUD</h5>
            <p>You can generate the crud of a specific connection.</p>

            <CodeBlock language={"bash"} content={"php lion db:crud users"} />

            <CodeBlock
              language={"bash"}
              content={"php lion db:crud users --connection second_database"}
            />

            <CodeBlock
              language={"bash"}
              content={"php lion db:crud users -c second_database"}
            />

            <CodeBlock
              language={"bash"}
              content={
                "php lion db:crud users --connection second_database --path MyFolder/"
              }
            />
            <CodeBlock
              language={"bash"}
              content={"php lion db:crud users -c second_database -p MyFolder/"}
            />
          </div>
        </>
      ),
    },
    rules: {
      name: "Rules",
      code: (
        <>
          <h2>RULES</h2>
          <hr />

          <>
            <div className="mb-3">
              <p>
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
                , you can set language response from environment variables with
                lang language preference to <Badge bg={"secondary"}>.env</Badge>{" "}
                more information in{" "}
                <Link
                  to={"/libraries/lion/security/index"}
                  className="text-decoration-none"
                >
                  Lion-Security
                </Link>
                , rules are stored in{" "}
                <Badge bg="secondary">{"app/Rules/"}</Badge>.
              </p>
            </div>

            <div className="mb-3">
              <CodeBlock
                language={"bash"}
                content={"php lion new:rule EmailRule"}
              />

              <ListGroup className="mb-3" numbered>
                <ListGroup.Item variant="dark">
                  <strong>field: </strong>property name, this property is
                  displayed in exported postman collections.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <strong>desc: </strong> property description, this property is
                  displayed in exported postman collections.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <strong>value: </strong> property value, this property is
                  displayed in exported postman collections.
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                  <strong>disabled: </strong> disable property, this property is
                  displayed on exported postman collections.
                </ListGroup.Item>
              </ListGroup>

              <p>
                You can generate all the database rules for each entity, for all
                its properties.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion db:all-rules my_table"}
              />

              <CodeBlock
                language={"bash"}
                content={"php lion db:rules my_table"}
              />

              <CodeBlock
                language={"bash"}
                content={
                  "php lion db:rules my_table --connection second_connection"
                }
              />

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" +
                  "namespace App\\Rules;\n\n" +
                  "use App\\Traits\\Framework\\ShowErrors;\n\n" +
                  "class EmailRule {\n\n" +
                  "\tuse ShowErrors;\n\n" +
                  '\tpublic static string $field = "users_email";\n' +
                  '\tpublic static string $desc = "this field applies a property of type email";\n' +
                  '\tpublic static string $value = "";\n' +
                  "\tpublic static string $disabled = false;\n\n" +
                  "\tpublic function passes(): void {\n" +
                  "\t\tself::validate(function(\\Valitron\\Validator $validator) {\n" +
                  "\t\t\t$validator\n\t\t\t\t->rule('required', self::$field)\n\t\t\t\t->message('custom message...');\n" +
                  "\t\t});\n" +
                  "\t}\n\n" +
                  "}"
                }
              />
            </div>
          </>

          <div className="mb-3">
            <h2>USE RULES</h2>
            <hr />

            <p>
              Add your rules to different routes in{" "}
              <Badge bg={"secondary"}>routes/rules.php</Badge>
            </p>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "return [\n" +
                "\t'POST' => [\n" +
                "\t\t'api/auth/signin' => [\n" +
                "\t\t\tApp\\Rules\\EmailRule::class\n" +
                "\t\t]\n" +
                "\t]\n" +
                "];"
              }
            />

            <p>You can reuse a rule in different routes.</p>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "return [\n" +
                "\t'POST' => [\n" +
                "\t\t'api/auth/signin' => [\n" +
                "\t\t\tApp\\Rules\\EmailRule::class\n" +
                "\t\t],\n" +
                "\t\t'api/users/update/{idusers}' => [\n" +
                "\t\t\tApp\\Rules\\EmailRule::class\n" +
                "\t\t]\n" +
                "\t]\n" +
                "];"
              }
            />
          </div>
        </>
      ),
    },
    traits: {
      name: "Traits",
      code: (
        <>
          <h2>Traits</h2>
          <hr />

          <p>
            Traits are stored in <Badge bg="secondary">{"app/Traits/"}</Badge>.
          </p>

          <CodeBlock
            language={"bash"}
            content={"php lion new:trait trait_name"}
          />

          <CodeBlock
            language={"php"}
            content={
              "<?php\n\n" +
              "namespace App\\Traits;\n\n" +
              "trait TraitName {\n\n" +
              "}"
            }
          />
        </>
      ),
    },
    enums: {
      name: "Enums",
      code: (
        <>
          <h2>Enums</h2>
          <hr />

          <p>
            Enums are stored in <Badge bg="secondary">{"app/Enums/"}</Badge>.
          </p>

          <CodeBlock
            language={"bash"}
            content={"php lion new:enum enum_name"}
          />

          <CodeBlock
            language={"php"}
            content={
              "<?php\n\n" +
              "namespace App\\Enums;\n\n" +
              "enum StatusEnum: string {\n\n" +
              '\tcase SUCCESS = "success";\n' +
              '\tcase ERROR = "error";\n' +
              '\tcase WARNING = "warning";\n' +
              '\tcase INFO = "info";\n' +
              '\tcase DATABASE_ERROR = "database-error";\n' +
              '\tcase SESSION_ERROR = "session-error";\n' +
              '\tcase ROUTE_ERROR = "route-error";\n\n' +
              "}"
            }
          />
        </>
      ),
    },
    carbon: {
      name: "Carbon",
      code: (
        <>
          <div className="mb-3">
            <h2>CARBON</h2>

            <hr />

            <p>
              A simple PHP API extension for DateTime,{" "}
              <a href="https://carbon.nesbot.com/" target={"_blank"}>
                Carbon
              </a>{" "}
              is installed by default.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="pb-2">Example #1</h4>

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "use Carbon\\Carbon;\n\n" +
                "return success('my time! ' . Carbon::now()->format('Y-m-d H:i:s'));"
              }
            />
          </div>
        </>
      ),
    },
    routes: {
      name: "Routes",
      code: (
        <>
          <div>
            <div className="mb-3">
              <h2>ROUTES</h2>
              <hr />

              <p>
                <Link
                  to={"/libraries/lion/route/index"}
                  className="text-decoration-none"
                >
                  Lion-Route
                </Link>{" "}
                has been implemented for route handling, from the web you can
                add all the necessary routes for the operation of your web
                application <Badge bg={"secondary"}>routes/web.php</Badge>.
              </p>
            </div>

            <div className="mb-3">
              <h4 className="pb-2">Example #1</h4>

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" +
                  "use App\\Http\\Controllers\\HomeController;\n\n" +
                  "Route::get('/', [HomeController::class, 'index']);\n" +
                  "// or\n" +
                  "Route::get('/', fn() => (new HomeController())->index());"
                }
              />
            </div>

            <div className="mb-3">
              <h4 className="pb-2">Example #2</h4>

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" + "Route::get('/', fn() => success('test'));"
                }
              />
            </div>
          </div>

          <hr />

          <div className="mb-3">
            <h2 className="pb-2">ROUTE LIST</h2>

            <p>
              To view the available routes, start the local server first, run
              the <Badge bg="secondary">php lion serve</Badge> command, and then
              view the routes.
            </p>

            <CodeBlock language={"bash"} content={"php lion route:list"} />

            <Alert variant={"warning"}>
              <strong>Note:</strong> The routes are loaded with the server route{" "}
              <Badge bg="warning">SERVER_URL</Badge> set in{" "}
              <Badge bg="warning">.env</Badge>, modify this route to avoid
              errors in the execution of the process, in the file{" "}
              <Badge bg="warning">public/index.php</Badge> there is a public
              route which allows get the available routes from the terminal,
              comment this line once your web app is deployed.
            </Alert>
          </div>
        </>
      ),
    },
    postman: {
      name: "Postman",
      code: (
        <>
          <h2 className="pb-2">POSTMAN</h2>
          <hr />

          <p>
            To export the available paths, first start the local server, then
            view the exported paths in{" "}
            <Badge bg="warning">storage/postman/</Badge>.
          </p>

          <CodeBlock language={"bash"} content={"php lion route:postman"} />

          <Alert variant={"warning"}>
            <strong>Note:</strong> The routes are loaded with the server route{" "}
            <Badge bg="warning">SERVER_URL</Badge> set in{" "}
            <Badge bg="warning">.env</Badge>, modify this route to avoid errors
            in the execution of the process, in the file{" "}
            <Badge bg="warning">public/index.php</Badge> there is a public route
            which allows get the available routes from the terminal, comment
            this line once your web app is deployed.
          </Alert>

          <p>
            If you want the POST, PUT and DELETE routes to be exported with
            dynamically required parameters these must have been declared as
            rules first, for each rule that is added it is recognized as a
            required parameter to send through an http request and it is
            exported in the postman collections.
          </p>

          <CodeBlock
            langueage={"php"}
            content={
              "<?php\n\n" +
              "return [\n" +
              "\t'POST' => [\n" +
              "\t\t'api/auth/signin' => [\n" +
              "\t\t\tApp\\Rules\\EmailRule::class\n" +
              "\t\t],\n" +
              "\t\t'api/users/update/{idusers}' => [\n" +
              "\t\t\tApp\\Rules\\EmailRule::class\n" +
              "\t\t]\n" +
              "\t]\n" +
              "];"
            }
          />
        </>
      ),
    },
    controllers: {
      name: "Controllers",
      code: (
        <>
          <div className="mb-3">
            <h2>CONTROLLERS</h2>
            <hr />

            <p>
              Models are stored in{" "}
              <Badge bg="secondary">{"app/http/Controllers/"}</Badge>.
            </p>

            <CodeBlock
              language={"bash"}
              content={"php lion new:controller HomeController"}
            />

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Http\\Controllers;\n\n" +
                "class HomeController {\n\n" +
                "\tpublic function __contruct() {\n\n" +
                "\t}\n\n" +
                "}"
              }
            />
          </div>

          <hr />

          <div className="mb-3">
            <Alert variant={"warning"}>
              <strong>Note:</strong> You can create the model class immediately
              with the <Badge bg={"warning"}>--model</Badge> option, Models are
              stored in <Badge bg={"warning"}>app/Models</Badge>.
            </Alert>

            <CodeBlock
              language={"bash"}
              content={
                "php lion new:controller HomeController --model HomeModel"
              }
            />

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Http\\Controllers;\n\n" +
                "use App\\Models\\HomeModel;\n\n" +
                "class HomeController {\n\n" +
                "\tprivate HomeModel $homeModel;\n\n" +
                "\tpublic function __contruct() {\n" +
                "\t\t$this->homeModel = new HomeModel();\n" +
                "\t}\n\n" +
                "}"
              }
            />
          </div>
        </>
      ),
    },
    middleware: {
      name: "Middleware",
      code: (
        <Tabs defaultActiveKey="new" id="middleware" fill>
          <Tab eventKey="new" title="NEW">
            <div className="my-3">
              <div className="mb-3">
                <h2>CREATE MIDDLEWARE</h2>
                <hr />

                <p>
                  Middleware is stored in{" "}
                  <Badge bg="secondary">app/Http/Middleware</Badge>.
                </p>

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:middleware middleware_name"}
                />
              </div>

              <div className="mb-3">
                <h2>ADD FUNCTIONS</h2>
                <hr />

                <p>We can add the necessary functions in each middleware.</p>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "namespace App\\Http\\Middleware\\JWT;\n\n" +
                    "class AuthorizationMiddleware {\n\n" +
                    "\tpublic function __contruct() {\n\n" +
                    "\t}\n\n" +
                    "\tpublic function exist(): void {\n" +
                    "\t\t$headers = apache_request_headers();\n\n" +
                    "\t\tif (!isset($headers['Authorization'])) {\n" +
                    "\t\t\tfinish(response->error('The JWT does not exist'));\n" +
                    "\t\t}\n" +
                    "\t}\n\n" +
                    "\tpublic function authorize(): void {\n" +
                    "\t\t$headers = apache_request_headers();\n\n" +
                    "\t\tif (preg_match('/Bearers(S+)/', $headers['Authorization'], $matches)) {\n" +
                    "\t\t\t$jwt = JWT::decode($matches[1]);\n\n" +
                    "\t\t\tif ($jwt->status === 'error') {\n" +
                    "\t\t\t\tfinish(response->error($jwt->message));\n" +
                    "\t\t\t}\n" +
                    "\t\t} else {\n" +
                    "\t\t\tfinish(response->error('Invalid JWT'));\n" +
                    "\t\t}\n" +
                    "\t}\n\n" +
                    "\tpublic function notAuthorize(): void {\n" +
                    "\t\t$headers = apache_request_headers();\n\n" +
                    "\t\tif (isset($headers['Authorization'])) {\n" +
                    "\t\t\tfinish(response->error('User in session, You must close the session'));\n" +
                    "\t\t}\n" +
                    "\t}\n\n" +
                    "}"
                  }
                />
              </div>
            </div>
          </Tab>

          <Tab eventKey="add" title="ADD">
            <div className="my-3">
              <h2>ADD MIDDLEWARE</h2>
              <hr />

              <p>
                To import middleware to the routes we must first import the
                namespace of the middleware and inside this add an array to
                create custom middleware.{" "}
                <Badge bg={"secondary"}>config/middleware.php</Badge>
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "return [\n" +
                  "\tApp\\Http\\Middleware\\JWT\\AuthorizationMiddleware::class => [\n" +
                  "\t\t['name' => 'jwt-exist', 'method' => 'exist']\n" +
                  "\t\t['name' => 'jwt-authorize', 'method' => 'authorize']\n" +
                  "\t\t['name' => 'jwt-not-authorize', 'method' => 'notAuthorize']\n" +
                  "\t]\n" +
                  "];"
                }
              />
            </div>
          </Tab>

          <Tab eventKey="use" title="USE">
            <div className="my-3">
              <h2>USE MIDDLEWARE</h2>
              <hr />

              <p>
                <Badge bg={"secondary"}>routes/web.php</Badge>
              </p>

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "Route::middleware(['jwt-exist', 'jwt-authorize'], function() {\n" +
                  "\tRoute::get('/', [HomeController::class, 'index']);\n\n" +
                  "\t// or\n\n" +
                  "\tRoute::get('/', function() {\n" +
                  "\t\treturn (new HomeController())->index();\n" +
                  "\t});\n" +
                  "});"
                }
              />
            </div>
          </Tab>
        </Tabs>
      ),
    },
    models: {
      name: "Models",
      code: (
        <>
          <h2>MODELS</h2>
          <hr />

          <p>
            Models are stored in <Badge bg="secondary">{"app/Models"}</Badge>.
          </p>

          <div className="mb-3">
            <CodeBlock
              language={"bash"}
              content={"php lion new:model HomeModel"}
            />

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Http\\Models;\n\n" +
                "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n" +
                "use LionSQL\\Drivers\\MySQL\\Schema;\n\n" +
                "class HomeModel {\n\n}"
              }
            />
          </div>

          <div className="mb-3">
            <h5 className="pb-2 text-warning">SoftDeletes</h5>

            <p>
              to include the softdelete function you must include the
              SoftDeletes trait
            </p>

            <CodeBlock
              language={"php"}
              content={
                "<?php\n\n" +
                "namespace App\\Http\\Models;\n\n" +
                "use App\\Traits\\Framework\\Database\\SoftDeletes;\n" +
                "use LionSQL\\Drivers\\MySQL\\MySQL as DB;\n" +
                "use LionSQL\\Drivers\\MySQL\\Schema;\n\n" +
                "class HomeModel {\n\n\tuse SoftDeletes;\n\n}"
              }
            />
          </div>
        </>
      ),
    },
    capsules: {
      name: "Capsules",
      code: (
        <>
          <>
            <div className="mb-3">
              <h2>CAPSULES</h2>
              <hr />

              <p>
                The capsules can be created in 2 ways, individually or in
                groups, previously the database connection credentials must be
                written from <Badge bg={"secondary"}>.env</Badge>, the capsules
                are mapped from the tables obtained from the database, along
                with their properties are written.
              </p>
            </div>

            <div className="mb-3">
              <h5>EXAMPLE #1</h5>

              <CodeBlock
                language={"bash"}
                content={"php lion db:capsule table_name"}
              />

              <Alert variant={"warning"}>
                <strong>Note:</strong> Capsule classes by default are stored in
                the <Badge bg="warning">database/Class/</Badge> directory, you
                can change the path with the <Badge bg="warning">--path</Badge>{" "}
                option.
              </Alert>

              <Alert variant={"warning"}>
                <strong>Note:</strong> If you need to map entities from another
                database, specify the connection through the{" "}
                <Badge bg="warning">--connection</Badge> option.
              </Alert>

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" +
                  "namespace App\\Class;\r\n\n" +
                  "class TableName implements \\JsonSerializable {\n\n" +
                  "\tprivate ?int $id = null;\n" +
                  "\tprivate ?string $name = null;\n\n" +
                  "\tpublic function __contruct() {}\n\n" +
                  "\tpublic function jsonSerialize(): mixed {\n\t\treturn get_object_vars($this);\n\t}\n\n" +
                  "\tpublic function getId(): ?int {\n" +
                  "\t\treturn $this->id;\n" +
                  "\t}\n\n" +
                  "\tpublic function setId(?int $id): TableName {\n" +
                  "\t\t$this->id = $id;\n" +
                  "\t\treturn $this;\n" +
                  "\t}\n\n" +
                  "\tpublic function getName(): ?string {\n" +
                  "\t\treturn $this->name;\n" +
                  "\t}\n\n" +
                  "\tpublic function setName(?string $name): TableName {\n" +
                  "\t\t$this->name = $name;\n" +
                  "\t\treturn $this;\n" +
                  "\t}\n\n" +
                  "}"
                }
              />
            </div>

            <div className="mb-3">
              <h5>EXAMPLE #2</h5>

              <CodeBlock
                language={"bash"}
                content={"php lion db:all-capsules"}
              />

              <Alert variant={"warning"}>
                <strong>Note:</strong> Capsule classes by default are stored in
                the <Badge bg="warning">database/Class/</Badge> directory,{" "}
                <Badge bg="warning">db:all-capsules</Badge> reads all the tables
                in the database, generating for each table its respective class
                along with its properties and functions.
              </Alert>

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" +
                  "namespace App\\Class;\r\n\n" +
                  "class TableName {/* ... */} \n\n" +
                  "class TableName2 {/* ... */} \n\n" +
                  "class TableName3 {/* ... */} \n\n"
                }
              />
            </div>
          </>

          <div className="mb-3">
            <h2>CREATE CUSTOM CAPSULES</h2>
            <hr />

            <p>
              create custom capsule classes with unique properties for different
              uses.
            </p>

            <CodeBlock
              language={"bash"}
              content={"php lion new:capsule ClassName"}
            />
          </div>
        </>
      ),
    },
    factory: {
      name: "Factory",
      code: (
        <>
          <h2>FACTORY</h2>
          <hr />

          <p>
            Factories are stored in{" "}
            <Badge bg="secondary">{"database/Factories/"}</Badge>.
          </p>

          <CodeBlock
            language={"bash"}
            content={"php lion db:factory UsersFactory"}
          />

          <CodeBlock
            langueage={"php"}
            content={
              "<?php\n\n" +
              "namespace Database\\Factories;\n\n" +
              "use App\\Traits\\Framework\\Faker;\n\n" +
              "class UsersFactory {\n\n" +
              "\tuse Faker;\n\n" +
              "\t/**\n" +
              "\t * ------------------------------------------------------------------------------\n" +
              "\t * Define the model's default state\n" +
              "\t * ------------------------------------------------------------------------------\n" +
              "\t **/\n" +
              "\tpublic static function definition(): array {\n" +
              "\t\treturn [Faker::get()->name()];\n" +
              "\t}\n\n" +
              "}"
            }
          />
        </>
      ),
    },
    seed: {
      name: "Seed",
      code: (
        <>
          <div className="mb-3">
            <h2 className="pb-2">CREATE SEED</h2>
            <hr />

            <p>
              Factories are stored in{" "}
              <Badge bg="secondary">{"database/Seeders/"}</Badge>.
            </p>

            <CodeBlock
              language={"bash"}
              content={"php lion db:seed UsersSeed"}
            />

            <CodeBlock
              langueage={"php"}
              content={
                "<?php\n\n" +
                "namespace Database\\Seeders;\n\n" +
                "use LionSql\\Drivers\\MySQL\\MySQL as DB;\n" +
                "use LionSql\\Drivers\\MySQL\\Schema;\n" +
                "use Database\\Factories\\UsersFactory;\n\n" +
                "class UsersSeed {\n\n" +
                "\t/**\n" +
                "\t * ------------------------------------------------------------------------------\n" +
                "\t * Seed the application's database\n" +
                "\t * ------------------------------------------------------------------------------\n" +
                "\t **/\n" +
                "\tpublic static function run(): object {\n" +
                "\t\treturn DB::call('stored_procedure_name', UsersFactory::definition())->execute();\n" +
                "\t}\n\n" +
                "}"
              }
            />
          </div>

          <div className="mb-3">
            <h2 className="pb-2">USE SEED</h2>
            <hr />

            <CodeBlock
              language={"bash"}
              content={
                "php lion db:seed Database\\Seeders\\UsersSeed --run true"
              }
            />
          </div>
        </>
      ),
    },
    sockets: {
      name: "Sockets",
      code: (
        <Tabs defaultActiveKey="new" id="sockets" fill>
          <Tab eventKey="new" title="NEW">
            <div className="my-3">
              <h2>CREATE SOCKET</h2>
              <hr />

              <p>
                websockets interact with the{" "}
                <a
                  href="http://socketo.me/docs/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Ratchet
                </a>{" "}
                library, Sockets are stored in{" "}
                <Badge bg="secondary">{"app/Http/Sockets/"}</Badge>.
              </p>

              <CodeBlock
                language={"bash"}
                content={"php lion socket:new NotificationsSocket"}
              />

              <CodeBlock
                langueage={"php"}
                content={
                  "<?php\n\n" +
                  "namespace App\\Http\\Sockets;\n\n" +
                  "use Ratchet\\ConnectionInterface;\n" +
                  "use Ratchet\\MessageComponentInterface;\n" +
                  "use \\SplObjectStorage;\n\n" +
                  "class NotificationsSocket implements MessageComponentInterface {\n\n" +
                  "\tprotected int $port = 8090;\n" +
                  "\tprotected string $host = '0.0.0.0';\n" +
                  "\tprotected SplObjectStorage $clients;\n\n" +
                  "\tpublic function __construct() {\n" +
                  "\t\t$this->clients = new SplObjectStorage();\n" +
                  "\t}\n\n" +
                  "\tpublic function getSocket() {\n" +
                  "\t\treturn ['port' => $this->port, 'host' => $this->host];\n" +
                  "\t}\n\n" +
                  "\tpublic function onOpen(ConnectionInterface $conn) {\n" +
                  "\t\t$this->clients->attach($conn);\n" +
                  "\t}\n\n" +
                  "\tpublic function onMessage(ConnectionInterface $from, $msg) {\n" +
                  "\t\tforeach ($this->clients as $client) {\n" +
                  "\t\t\tif ($from !== $client) {\n" +
                  "\t\t\t\t$client->send($msg);\n" +
                  "\t\t\t}\n\t\t}\n" +
                  "\t}\n\n" +
                  "\tpublic function onClose(ConnectionInterface $conn) {\n" +
                  "\t\t$this->clients->detach($conn);\n" +
                  "\t}\n\n" +
                  "\tpublic function onError(ConnectionInterface $conn, \\Exception $e) {\n" +
                  "\t\t$conn->close();\n" +
                  "\t}\n\n" +
                  "}"
                }
              />
            </div>
          </Tab>

          <Tab eventKey="add" title="ADD">
            <div className="my-3">
              <h2>ADD SOCKETS COMMANDS</h2>
              <hr />

              <div className="mb-3">
                <p>
                  You need to add the commands in the{" "}
                  <Badge bg="secondary">config/socket-commands.php</Badge>{" "}
                  array.
                </p>

                <CodeBlock
                  language={"php"}
                  content={
                    "<?php\n\n" +
                    "return [\n" +
                    "\t// 'ExampleSocket' => App\\Http\\Sockets\\ExampleSocket::class\n" +
                    "];"
                  }
                />
              </div>

              <div className="mb-3">
                <p>
                  Add the socket to the supervisord to run with the container.
                </p>

                <CodeBlock
                  language={"ini"}
                  content={
                    "# supervisord.conf\n" +
                    "[supervisord]\n" +
                    "user=root\n" +
                    "nodaemon=true\n" +
                    "logfile=/var/www/html/storage/logs/supervisord/supervisord.log\n\n" +
                    "[program:web-server]\n" +
                    "command=php lion serve --host 0.0.0.0 --port 8000\n" +
                    "directory=/var/www/html\n" +
                    "autostart=true\n" +
                    "autorestart=true\n" +
                    "redirect_stderr=true\n" +
                    "stdout_logfile=/var/www/html/storage/logs/server/web-server.log\n\n" +
                    "[program:socket-example]\n" +
                    "command=php lion socket:serve ExampleSocket\n" +
                    "directory=/var/www/html\n" +
                    "autostart=true\n" +
                    "autorestart=true\n" +
                    "redirect_stderr=true\n" +
                    "stdout_logfile=/var/www/html/storage/logs/sockets/socket.log"
                  }
                />
              </div>

              <div className="mb-3">
                <p>
                  Add the port in the docker-compose.yml file configuration.
                </p>

                <CodeBlock
                  language={"yaml"}
                  content={
                    "# docker-compose.yml \n" +
                    'version: "3.8"\n' +
                    "services:\n" +
                    "\tapp:\n" +
                    "\t\tcontainer_name: lion-framework-app\n" +
                    "\t\tbuild:\n" +
                    "\t\t\tcontext: .\n" +
                    "\t\t\tdockerfile: Dockerfile\n" +
                    "\t\tenv_file:\n" +
                    "\t\t\t- .env\n" +
                    "\t\tports:\n" +
                    '\t\t\t- "8000:8000"\n' +
                    '\t\t\t- "8090:8090" # sockert port\n' +
                    "\t\tvolumes:\n" +
                    "\t\t\t- ./:/var/www/html\n" +
                    "\t\tdepends_on:\n" +
                    "\t\t\t- db\n" +
                    "\t\tnetworks:\n" +
                    "\t\t\t- lion"
                  }
                />
              </div>
            </div>
          </Tab>

          <Tab eventKey="use" title="USE">
            <div className="my-3">
              <h2>USE SOCKETS</h2>
              <hr />

              <div className="mb-3">
                <p>
                  to execute a socket you must do it from the console, you can
                  configure a different port with the{" "}
                  <Badge bg="secondary">--port</Badge> option.
                </p>

                <CodeBlock
                  language={"php"}
                  content={"php lion socket:serve SocketClass"}
                />

                <CodeBlock
                  language={"php"}
                  content={"php lion socket:serve SocketClass --port 8081"}
                />
              </div>
            </div>
          </Tab>
        </Tabs>
      ),
    },
    helpers: {
      name: "Helpers",
      code: (
        <Tabs defaultActiveKey="constants-helpers" id="helpers" fill>
          <Tab eventKey="constants-helpers" title="CONSTANTS">
            <div className="my-3">
              <h2>CONSTANTS</h2>
              <hr />

              <div className="mb-3">
                <Table size="sm" variant="dark" responsive hover>
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>client</td>
                      <td>
                        the client constant is an object of the
                        GuzzleHttp\Client class, it allows you to make HTTP
                        requests
                      </td>
                    </tr>

                    <tr>
                      <td>request</td>
                      <td>
                        the request constant is an object of the Lion
                        Request\Request class, it allows you to get the data
                        captured through an HTTP request
                      </td>
                    </tr>

                    <tr>
                      <td>response</td>
                      <td>
                        the response constant is an object of the Lion
                        Request\Response class, it allows you to generate
                        responses of different types that the class provides
                      </td>
                    </tr>

                    <tr>
                      <td>json</td>
                      <td>
                        the json constant is an object of the LionRequest\Json
                        class, it allows you to encode and decode JSON data
                      </td>
                    </tr>

                    <tr>
                      <td>env</td>
                      <td>
                        the env constant is an object that contains the
                        properties of the environment variable file
                      </td>
                    </tr>

                    <tr>
                      <td>str</td>
                      <td>
                        the constant str is an object of class LionHelpers\Str,
                        it allows you to access this helper and transform
                        strings
                      </td>
                    </tr>

                    <tr>
                      <td>arr</td>
                      <td>
                        the constant arr is an object of class LionHelpers\Arr,
                        it allows you to access this helper and transform arrays
                      </td>
                    </tr>

                    <tr>
                      <td>kernel</td>
                      <td>
                        the kernel constant is an object of class
                        App\Console\Kernel, it allows you to execute commands
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Tab>

          <Tab eventKey="functions-helpers" title="FUNCTIONS">
            <div className="my-3">
              <h2>FUNCTIONS</h2>
              <hr />

              <div className="mb-3">
                <Row>
                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">{"session"}</h5>

                      <p>
                        You can create sessions, read them and destroy them with
                        the session helper.
                      </p>

                      <CodeBlock
                        langueage={"php"}
                        content={
                          "<?php\n\n" +
                          "session()->new('name', 'lion')->new('age', '23');"
                        }
                      />

                      <CodeBlock
                        langueage={"php"}
                        content={
                          "<?php\n\n" +
                          "session()->get(); // get all sessions\n" +
                          "// or\n" +
                          "session()->get('name');"
                        }
                      />

                      <CodeBlock
                        langueage={"php"}
                        content={
                          "<?php\n\n" +
                          "session()->destroy(); // destroy all sessions\n" +
                          "// or\n" +
                          "session()->destroy('name');"
                        }
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">{"jwt"}</h5>

                      <p>
                        Function to check if a jwt is valid, returns an object
                        (object) without the JWT exists and is valid
                      </p>

                      <CodeBlock
                        langueage={"php"}
                        content={"<?php\n\n" + "$jwt = jwt();"}
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">{"isError"}</h5>

                      <p>
                        Function to check if a response object comes with
                        errors.
                      </p>

                      <CodeBlock
                        langueage={"php"}
                        content={
                          "<?php\n\n" + "isError(success())); // return false"
                        }
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">{"isSuccess"}</h5>

                      <p>
                        Function to check if a response object is successful.
                      </p>

                      <CodeBlock
                        langueage={"php"}
                        content={
                          "<?php\n\n" + "isSuccess(error())); // return false"
                        }
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">fetch</h5>

                      <p>
                        The fetch helper allows you to make http requests,
                        internally with guzzle http.
                      </p>

                      <CodeBlock
                        langueage={"php"}
                        content={"<?php\n\n" + "fetch('GET', 'my-url.com');"}
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">fetchXML</h5>

                      <p>
                        The get helper allows you to make http requests to get
                        xml in String format, internally with http guzzle.
                      </p>

                      <CodeBlock
                        langueage={"php"}
                        content={"<?php\n\n" + "fetchXML('GET', 'my-url.com');"}
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">storage_path</h5>

                      <p>
                        The storage_path helper allows access to directories and
                        files in the storage directory.
                      </p>

                      <CodeBlock
                        langueage={"php"}
                        content={
                          "<?php\n\n" +
                          "use LionFiles\\Store;\n\n" +
                          "Store::view(storage_path('files/'));"
                        }
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">finish</h5>

                      <p>
                        The finish helper ends the execution of all processes.
                      </p>

                      <CodeBlock
                        langueage={"php"}
                        content={
                          "<?php\n\n" + "finish(success('my response'));"
                        }
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">success</h5>

                      <p>Function to display a success response.</p>

                      <CodeBlock
                        langueage={"php"}
                        content={"<?php\n\n" + "return success('message');"}
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">error</h5>

                      <p>Function to display a error response.</p>

                      <CodeBlock
                        langueage={"php"}
                        content={"<?php\n\n" + "return error('message');"}
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">warning</h5>

                      <p>Function to display a warning response.</p>

                      <CodeBlock
                        langueage={"php"}
                        content={"<?php\n\n" + "return warning('message');"}
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">info</h5>

                      <p>Function to display a info response.</p>

                      <CodeBlock
                        langueage={"php"}
                        content={"<?php\n\n" + "return info('message');"}
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">vd</h5>

                      <p>The helper vd executes the function var_dump.</p>

                      <CodeBlock
                        langueage={"php"}
                        content={"<?php\n\n" + "vd(success('finished'));"}
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">json</h5>

                      <p>The json helper converts any value to json.</p>

                      <CodeBlock
                        langueage={"php"}
                        content={"<?php\n\n" + "json(['name' => 'Sleon']);"}
                      />
                    </div>
                  </Col>

                  <Col xs={12} sm={12}>
                    <div className="mb-3">
                      <h5 className="pb-2 text-warning">logger</h5>

                      <p>
                        The logger helper generates a log file stored in{" "}
                        <strong>storage/logs/</strong> and implements Monolog
                        internally.
                      </p>

                      <CodeBlock
                        langueage={"php"}
                        content={
                          "<?php\n\n" +
                          "logger('lorem ipsum dolor sit amet...'); // default info\n" +
                          "logger('lorem ipsum dolor sit amet...', 'error');\n" +
                          "logger('lorem ipsum dolor sit amet...', 'warning', ['name' => 'Sleon']);"
                        }
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Tab>
        </Tabs>
      ),
    },
    rsa: {
      name: "RSA",
      code: (
        <>
          <h2 className="pb-2">RSA</h2>
          <hr />

          <p>
            Create public and private keys, perform encryption and decryption
            with them{" "}
            <Link
              to={"/libraries/lion/security/index"}
              className="text-decoration-none"
            >
              Lion-Security RSA lease
            </Link>
            , you can generate the keys from the terminal once the parameters
            are set from the environment variables.
          </p>

          <Alert variant="warning">
            <strong>Note: </strong> all generated keys are stored inside{" "}
            <Badge bg="warning">{"storage/"}</Badge>.
          </Alert>

          <CodeBlock language={"bash"} content={"php lion rsa:new"} />

          <p>
            You can select a different folder than the selected one from the
            environment variables with the{" "}
            <Badge bg="secondary">{"--path"}</Badge> option.
          </p>

          <CodeBlock
            language={"bash"}
            content={"php lion rsa:new --path keys-user-1/"}
          />
        </>
      ),
    },
    aes: {
      name: "AES",
      code: (
        <>
          <h2 className="pb-2">AES</h2>
          <hr />

          <p>
            Generate (KEY - IV) to encrypt and decrypt with AES,{" "}
            <Link
              to={"/libraries/lion/security/index"}
              className="text-decoration-none"
            >
              lease Lion-Security AES
            </Link>
            , you can generate the keys from the terminal once the parameters
            are set from the environment variables.
          </p>

          <CodeBlock language={"bash"} content={"php lion aes:new"} />
        </>
      ),
    },
    test: {
      name: "Test",
      code: (
        <>
          <Tabs defaultActiveKey="new" id="test" fill>
            <Tab eventKey="new" title="NEW">
              <div className="my-3">
                <h2>CREATE TEST</h2>
                <hr />

                <p>
                  Add to your web application with{" "}
                  <strong>Lion-Framework</strong> test to perform the necessary
                  quality checks of your system, the tests are implemented with
                  the help of{" "}
                  <a
                    href="https://phpunit.de/"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    PHPUnit
                  </a>
                  .
                </p>

                <CodeBlock
                  language={"bash"}
                  content={"php lion new:test TestName"}
                />
              </div>
            </Tab>

            <Tab eventKey="use" title="USE">
              <div className="my-3">
                <h2>RUN TEST</h2>
                <hr />

                <p>run all tests via command line.</p>

                <CodeBlock language={"bash"} content={"php lion test"} />
              </div>
            </Tab>
          </Tabs>
        </>
      ),
    },
    examples: {
      name: "Examples",
      code: (
        <>
          <div>
            <h2>DEVELOPMENT EXAMPLES</h2>
            <hr />

            <Row>
              {[
                {
                  title: "CHAT",
                  desc: "Development of a practical example of the use of Lion-Framework and ReactJS to carry out a real-time chat.",
                  buttons: (
                    <>
                      <GithubButton
                        url={"https://github.com/Sleon4/chat-php"}
                        variantButton={"outline-light"}
                        className="me-4"
                      >
                        <DiPhp className="ms-2" size={"2em"} />
                      </GithubButton>

                      <GithubButton
                        url={"https://github.com/Sleon4/chat-react"}
                        variantButton={"outline-light"}
                      >
                        <FaReact className="ms-2" size={"2em"} />
                        <SiVite className="ms-2" size={"2em"} />
                      </GithubButton>
                    </>
                  ),
                },
                {
                  title: "BASIC-CRUD",
                  desc: "Basic CRUD implemented with Lion-Framework (v14.11.0) ReactJS (VITE v4.3.9) and MySQL (v8.0).",
                  buttons: (
                    <>
                      <GithubButton
                        url={"https://github.com/Sleon4/basic-crud-php"}
                        variantButton={"outline-light"}
                        className="me-4"
                      >
                        <DiPhp className="ms-2" size={"2em"} />
                      </GithubButton>

                      <GithubButton
                        url={"https://github.com/Sleon4/basic-crud-reactjs"}
                        variantButton={"outline-light"}
                      >
                        <FaReact className="ms-2" size={"2em"} />
                        <SiVite className="ms-2" size={"2em"} />
                      </GithubButton>
                    </>
                  ),
                },
              ].map((card, index) => (
                <Col key={index} sm={12} md={6} lg={6} className="mx-auto mb-3">
                  <Card bg="dark-logo" className="border border-secondary">
                    <Card.Header className="border-bottom border-secondary">
                      {card.title}
                    </Card.Header>

                    <Card.Body>
                      <Card.Text>{card.desc}</Card.Text>
                      {card.buttons}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      ),
    },
  };
}
