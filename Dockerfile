FROM php:8.2-apache

RUN useradd -m lion && echo 'lion:lion' | chpasswd && usermod -aG sudo lion && usermod -s /bin/bash lion

RUN apt-get update -y \
    && apt-get install -y npm curl wget unzip libpng-dev libzip-dev \
    && apt-get install -y zlib1g-dev libonig-dev libevent-dev libssl-dev \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install mbstring gd zip \
    && docker-php-ext-enable gd zip

RUN a2enmod rewrite

COPY . .
