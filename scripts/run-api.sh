#!/usr/bin/env bash
cd ..

if [ -f .env.local ]
then
    export $(cat .env.local | xargs)
fi

docker-compose -f docker-compose.local.yml up --d
cd ./api

yarn dev