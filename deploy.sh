#!/bin/bash
set -e
export DOCKER_HOST=ssh://root@gomano.de
docker-compose build
docker-compose up -d