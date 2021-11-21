# Ebiblo Backend

## Run the project

### Local

Copy `.env.example` to `.env` file and run these commands at root of the project.

```bash
$ docker-compose up
```

and

```bash
$ yarn dev
```

### Local with Docker

cd to `scripts` folder and run `run-dev.sh`.

### Production
Copy .env.example to .env and make sure to change `API_HOST_ADDRESS` variable to the domain address which the application will be served on.<br>
Then Cd to `scripts` folder and run `run-prod.sh`.


## Env config

| Property                     | type                   | description                               |
| ---------------------------- | ---------------------- | ----------------------------------------- |
| NODE_ENV                     | development/production |                                           |
| PORT                         | number                 | the port api runs on                      |
| MONGO_DB_NAME                | string                 | main database name                        |
| MONGO_HOST                   | localhost/mongo        | url of mongo (mongo if in container)      |
| MONGO_INITDB_ROOT_USERNAME   | string                 | also needed to connect with mongo compass |
| MONGO_INITDB_ROOT_PASSWORD   | string                 | also needed to connect with mongo compass |
| JWT_SECRET                   | string                 | secret used to sign                       |
| JWT_REFRESH_SECRET           | string                 | used to sign refresh token                |
| JWT_EXPIRE                   | number + unit(ex:10m)  | JWT access token life duration            |
| JWT_REFRESH_EXPIRE           | number+ unit(1d)       | JWT refresh token life duration           |
| RESET_PASSWORD_LIFE_DURATION | number                 | in minutes                                |
| COOKIE_SECRET                | string                 | used to sign session ids(admin panel)     |
| API_HOST_ADDRESS             | string                 | host address (localhost)                  |
| NGINX_PORT                   | number                 | nginx exposed port (default is 80)        |
