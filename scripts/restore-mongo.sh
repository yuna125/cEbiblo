#!/usr/bin/env bash
cd ..
docker-compose exec -T mongo sh -c 'mongorestore --username=${MONGO_INITDB_ROOT_USERNAME} --password="${MONGO_INITDB_ROOT_PASSWORD}" --authenticationDatabase=admin --archive' < db.dump