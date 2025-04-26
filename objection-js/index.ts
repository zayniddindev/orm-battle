import "dotenv/config";
import { User } from "./user.model";
import "./db";
import { knex } from "./db";

// Prepare db
async function prepareDb() {
  await knex.raw(`DROP TABLE IF EXISTS "users"`);
  await knex.raw(`DROP SEQUENCE IF EXISTS users_id_seq`);
  await knex.raw(`CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1`);
  await knex.raw(`CREATE TABLE "users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    "email" character varying(255) NOT NULL,
    CONSTRAINT "users_email_key" UNIQUE ("email"),
    CONSTRAINT "users_pkey" PRIMARY KEY ("id"))`);
}

// Insert 100k users with Objection.js
async function insert100kUsersObjection() {
  console.time("Insert time of 100k users with Objection.js: ");
  await prepareDb();

  for (let i = 0; i < 100_000; i++) {
    const name = `User #${i + 1} created with Objection.js`;
    const email = `user${i + 1}@objection.js.com`;
    await User.query().insert({
      name,
      email,
    });
  }

  console.timeEnd("Insert time of 100k users with Objection.js: ");
}

// yarn tsx objection-js/index.ts
insert100kUsersObjection();

// Result:
// Insert time of 100k users with Objection.js: : 1:53.682 (m:ss.mmm)
