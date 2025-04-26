import "dotenv/config";
import { User } from "./user.model";
import { sequelizeDb } from "./db";

// Prepare db
async function prepareDb() {
  await sequelizeDb.query(`DROP TABLE IF EXISTS "users"`);
  await sequelizeDb.query(`DROP SEQUENCE IF EXISTS users_id_seq`);
  await sequelizeDb.query(`CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1`);
  await sequelizeDb.query(`CREATE TABLE "users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    "email" character varying(255) NOT NULL,
    CONSTRAINT "users_email_key" UNIQUE ("email"),
    CONSTRAINT "users_pkey" PRIMARY KEY ("id"))`);
}

// Insert 100k users with Sequelize
async function insert100kUsersSequelize() {
  console.time("Insert time of 100k users with Sequelize: ");
  await prepareDb();

  for (let i = 0; i < 100_000; i++) {
    const name = `User #${i + 1} created with Sequelize`;
    const email = `user${i + 1}@sequelize.com`;
    await User.create({ name, email });
  }

  console.timeEnd("Insert time of 100k users with Sequelize: ");
}

// yarn tsx sequelize-orm/index.ts
insert100kUsersSequelize();

// Result:
// Insert time of 100k users with Sequelize: : 2:05.304 (m:ss.mmm)
