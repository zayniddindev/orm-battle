## Install deps:
```sh
yarn
```

## Spin-up Postgres database:
```sh
docker compose up -d
```

## Run queries:
### with Prisma:
```sh
yarn insert:prisma
```
Insert time of 100k users with Prisma: : 2:12.528 (m:ss.mmm)

### with TypeORM:
```sh
yarn insert:typeorm
```
Insert time of 100k users with TypeORM: : 3:24.115 (m:ss.mmm)

### with Sequelize:
```sh
yarn insert:sequelize
```
Insert time of 100k users with Sequelize: : 2:05.304 (m:ss.mmm)

### with Drizzle:
```sh
yarn insert:drizzle
```
Insert time of 100k users with Drizzle: : 1:41.666 (m:ss.mmm)

### with Objection.js:
```sh
yarn insert:objection
```
Insert time of 100k users with Objection.js: : 1:53.682 (m:ss.mmm)