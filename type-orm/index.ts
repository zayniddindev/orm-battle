import "reflect-metadata";
import "dotenv/config";
import { typeormDb } from "./db";
import { User } from "./user.entity";

// Prepare db
async function prepareDb() {
  await typeormDb.query(`DROP TABLE IF EXISTS "users"`);
  await typeormDb.query(`DROP SEQUENCE IF EXISTS users_id_seq`);
  await typeormDb.query(`CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1`);
  await typeormDb.query(`CREATE TABLE "users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    "email" character varying(255) NOT NULL,
    CONSTRAINT "users_email_key" UNIQUE ("email"),
    CONSTRAINT "users_pkey" PRIMARY KEY ("id"))`);
}

// Insert 100k users with TypeORM
async function insert100kUsersTypeorm() {
  console.time("Insert time of 100k users with TypeORM: ");
  await typeormDb.initialize();
  await prepareDb();

  for (let i = 0; i < 100_000; i++) {
    const name = `User #${i + 1} created with TypeORM`;
    const email = `user${i + 1}@typeorm.com`;
    await typeormDb.manager.save(User, { name, email });
  }

  console.timeEnd("Insert time of 100k users with TypeORM: ");
}

// yarn tsx type-orm/index.ts
insert100kUsersTypeorm();

// Result:
// Insert time of 100k users with TypeORM: : 3:24.115 (m:ss.mmm)
