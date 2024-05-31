FROM php:8.3-apache

# ----------------------------------------------------------------------------------------------------------------------
USER root

RUN useradd -m lion && echo 'lion:lion' | chpasswd && usermod -aG sudo lion && usermod -s /bin/bash lion

# Dependencies
RUN apt-get update -y \
    && apt-get install -y sudo nano zsh git curl wget unzip golang-go \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Configure PHP-Extensions
RUN a2enmod rewrite
# ----------------------------------------------------------------------------------------------------------------------
USER lion

SHELL ["/bin/bash", "--login", "-i", "-c"]

# Install nvm, Node.js and npm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
    && source /home/lion/.bashrc \
    && nvm install 20 \
    && npm install -g npm

# Install OhMyZsh
RUN sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
# ----------------------------------------------------------------------------------------------------------------------
USER root

SHELL ["/bin/bash", "--login", "-c"]

# Install logo-ls
RUN wget https://github.com/Yash-Handa/logo-ls/releases/download/v1.3.7/logo-ls_amd64.deb \
    && dpkg -i logo-ls_amd64.deb \
    && rm logo-ls_amd64.deb \
    && curl https://raw.githubusercontent.com/UTFeight/logo-ls-modernized/master/INSTALL | bash

# Add configuration in .zshrc
RUN echo 'export NVM_DIR="$HOME/.nvm"' >> /home/lion/.zshrc \
    && echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> /home/lion/.zshrc \
    && echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> /home/lion/.zshrc \
    && echo 'alias ls="logo-ls"' >> /home/lion/.zshrc \
    && source /home/lion/.zshrc
# ----------------------------------------------------------------------------------------------------------------------
COPY . .
