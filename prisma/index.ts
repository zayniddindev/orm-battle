import { Prisma, PrismaClient } from "../generated/prisma";

// Insert 100k users with Prisma
async function insert100kUsersPrisma() {
  console.time("Insert time of 100k users with Prisma: ");
  const prisma = new PrismaClient();
  for (let i = 0; i < 100_000; i++) {
    const name = `User #${i + 1} created with Prisma`;
    const email = `user${i + 1}@prisma.com`;
    const user: Prisma.UserCreateInput = {
      name,
      email,
    };
    await prisma.user.create({ data: user });
  }
  console.timeEnd("Insert time of 100k users with Prisma: ");
}

// yarn tsx prisma/index.ts
insert100kUsersPrisma();

// Result:
// Insert time of 100k users with Prisma: : 2:12.528 (m:ss.mmm)
