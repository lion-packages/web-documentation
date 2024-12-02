import { Fragment } from "react";
import { Container, ListGroup } from "react-bootstrap";
import Description from "./components/Description";
import Title from "./components/Title";
import CodeBlock from "./components/CodeBlock";

export default function LinuxConfiguration() {
  return (
    <div className="bg-blur-right-ellipse">
      <Container>
        <div className="text-light my-3">
          <div className="mb-5">
            <Title title={"Linux Configuration"} />

            <Description
              description={
                "Within the organization we share a custom configuration for our environment configuration (Debian 12). We share it here as a guide."
              }
            />
          </div>

          <div className="mb-3">
            <h5 className="text-warning">Add Sudoers</h5>

            <Description description={"Add user to sudoers list."} />

            <CodeBlock language={"bash"} content={"su root"} />

            <CodeBlock language={"bash"} content={"nano /etc/sudoers"} />

            <Description description={"Add the user to the configuration."} />

            <CodeBlock
              language={"bash"}
              content={"my_user ALL=(ALL:ALL) ALL"}
            />
          </div>

          <hr className="my-5" />

          <div className="mb-3">
            <h5 className="text-warning">Install Dependencies</h5>

            <Fragment>
              <Fragment>
                <div className="mb-3">
                  <a
                    href="https://www.postman.com/downloads/"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    Postman
                  </a>
                </div>

                <Description
                  description={
                    "Download tar.gz, unzip and run the Postman binary."
                  }
                />
              </Fragment>

              <hr />

              <Fragment>
                <div className="mb-3">
                  <a
                    href="https://git-scm.com/downloads"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    Git
                  </a>
                </div>

                <CodeBlock
                  language={"bash"}
                  content={"sudo apt-get install git"}
                />
              </Fragment>

              <hr />

              <Fragment>
                <div className="mb-3">
                  <a
                    href="https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#ubuntu-debian--derivatives-windows-10-wsl--native-linux-kernel-with-windows-10-build-1903"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    ZSH
                  </a>
                </div>

                <CodeBlock language={"bash"} content={"sudo apt install zsh"} />
              </Fragment>

              <hr />

              <Fragment>
                <div className="mb-3">
                  <a
                    href="https://ohmyz.sh/#install"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    Oh My ZSH - Install with wget
                  </a>
                </div>

                <CodeBlock
                  language={"bash"}
                  content={
                    'sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"'
                  }
                />
              </Fragment>

              <hr />

              <Fragment>
                <div className="mb-3">
                  <a
                    href="https://github.com/lion-packages/linux-helper-command/blob/main/.bashrc"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    Configure custom commands
                  </a>
                </div>

                <Description
                  description={
                    "Add custom commands to speed up the use of commands from the console."
                  }
                />

                <div className="mb-3">
                  <a href="https://github.com/lion-packages/linux-helper-command/blob/main/.bashrc">
                    .bashrc
                  </a>
                </div>
              </Fragment>

              <hr />

              <Fragment>
                <div className="mb-3">
                  <a
                    href="https://docs.docker.com/engine/install/debian/"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    Docker Engine
                  </a>
                </div>

                <CodeBlock
                  language={"bash"}
                  content={
                    "for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done"
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={`# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update`}
                />

                <CodeBlock
                  language={"bash"}
                  content={
                    "sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin"
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"sudo usermod -aG docker my_user"}
                />

                <CodeBlock
                  language={"bash"}
                  content={`ls -l /var/run/docker.sock

# Output: 

# srw-rw---- 1 root docker 0 Nov  8 10:00 /var/run/docker.sock`}
                />

                <CodeBlock
                  language={"bash"}
                  content={"sudo chmod 660 /var/run/docker.sock"}
                />
              </Fragment>

              <hr />

              <Fragment>
                <div className="mb-3">
                  <a
                    href="https://github.com/Yash-Handa/logo-ls/releases"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    Logo-ls
                  </a>
                </div>

                <Description
                  description={
                    <Fragment>
                      Download the required .deb and install it.{" "}
                      <a
                        href="https://github.com/Yash-Handa/logo-ls/releases"
                        target="_blank"
                      >
                        Logo-ls
                      </a>
                    </Fragment>
                  }
                />

                <CodeBlock
                  language={"bash"}
                  content={"sudo apt install golang-go -y"}
                />

                <CodeBlock
                  language={"bash"}
                  content={"sudo apt-get install ./logo-ls_amd64.deb"}
                />

                <CodeBlock
                  language={"bash"}
                  content={
                    "curl https://raw.githubusercontent.com/UTFeight/logo-ls-modernized/master/INSTALL | bash"
                  }
                />
              </Fragment>
            </Fragment>
          </div>
        </div>
      </Container>
    </div>
  );
}
