import { sql } from "drizzle-orm";
import { usersTable } from "./schema";
import { drizzleDb } from "./db";

// Prepare db
async function prepareDb() {
  await drizzleDb.execute(sql`DROP TABLE IF EXISTS "users"`);
  await drizzleDb.execute(sql`DROP SEQUENCE IF EXISTS users_id_seq`);
  await drizzleDb.execute(sql`CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1`);
  await drizzleDb.execute(sql`CREATE TABLE "users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    "email" character varying(255) NOT NULL,
    CONSTRAINT "users_email_key" UNIQUE ("email"),
    CONSTRAINT "users_pkey" PRIMARY KEY ("id"))`);
}

// Insert 100k users with drizzle
async function insert100kUsersDrizzle() {
  console.time("Insert time of 100k users with Drizzle: ");
  await prepareDb();

  for (let i = 0; i < 100_000; i++) {
    const name = `User #${i + 1} created with Drizzle`;
    const email = `user${i + 1}@drizzle.com`;
    await drizzleDb.insert(usersTable).values({ name, email });
  }

  console.timeEnd("Insert time of 100k users with Drizzle: ");
}

// yarn tsx drizzle/index.ts
insert100kUsersDrizzle();

// Result:
// Insert time of 100k users with Drizzle: : 1:41.666 (m:ss.mmm)
