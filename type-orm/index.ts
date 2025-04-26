import "reflect-metadata";
import "dotenv/config";
import { typeormDb } from "./db";
import { User } from "./user.entity";

// Insert 100k users with TypeORM
async function insert100kUsersTypeorm() {
  console.time("Insert time of 100k users with TypeORM: ");
  const connection = await typeormDb.initialize();
  for (let i = 0; i < 100_000; i++) {
    const name = `User #${i + 1} created with TypeORM`;
    const email = `user${i + 1}@typeorm.com`;
    const user: Partial<User> = {
      name,
      email,
    };
    await connection.manager.save(User, user);
  }
  console.timeEnd("Insert time of 100k users with TypeORM: ");
}

// yarn tsx type-orm/index.ts
insert100kUsersTypeorm();

// Result:
// Insert time of 100k users with TypeORM: : 3:24.115 (m:ss.mmm)