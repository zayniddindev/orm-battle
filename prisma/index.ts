import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

// Prepare db
async function prepareDb() {
  await prisma.$executeRaw`DROP TABLE IF EXISTS "users"`;
  await prisma.$executeRaw`DROP SEQUENCE IF EXISTS users_id_seq`;
  await prisma.$executeRaw`CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1`;
  await prisma.$executeRaw`CREATE TABLE "users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    "email" character varying(255) NOT NULL,
    CONSTRAINT "users_email_key" UNIQUE ("email"),
    CONSTRAINT "users_pkey" PRIMARY KEY ("id"))`;
}

// Insert 100k users with Prisma
async function insert100kUsersPrisma() {
  console.time("Insert time of 100k users with Prisma: ");
  await prepareDb();

  for (let i = 0; i < 100_000; i++) {
    const name = `User #${i + 1} created with Prisma`;
    const email = `user${i + 1}@prisma.com`;
    await prisma.user.create({
      data: {
        name,
        email,
      },
    });
  }

  console.timeEnd("Insert time of 100k users with Prisma: ");
}

// yarn tsx prisma/index.ts
insert100kUsersPrisma();

// Result:
// Insert time of 100k users with Prisma: : 2:12.528 (m:ss.mmm)
