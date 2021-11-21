#!/usr/bin/env bash
cd ..
source .env
echo "dumping from ${PUBLIC_HOST_ADDRESS} port: ${MONGO_PUBLIC_PORT}"
mongodump --host="${PUBLIC_HOST_ADDRESS}" --port="${MONGO_PUBLIC_PORT}" --username="${MONGO_INITDB_ROOT_USERNAME}" --password="${MONGO_INITDB_ROOT_PASSWORD}" --archive  > db.dump