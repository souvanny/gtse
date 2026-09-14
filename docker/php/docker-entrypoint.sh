#!/bin/sh
set -e

cd /var/www/html

if [ ! -d vendor ]; then
    echo "[entrypoint] vendor/ absent -> composer install"
    composer install --no-interaction --prefer-dist --no-progress
fi

exec "$@"
