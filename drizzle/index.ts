import { usersTable } from "./schema";
import { drizzleDb } from "./db";

// Insert 100k users with drizzle
async function insert100kUsersDrizzle() {
  console.time("Insert time of 100k users with Drizzle: ");
  for (let i = 0; i < 100_000; i++) {
    const name = `User #${i + 1} created with Drizzle`;
    const email = `user${i + 1}@drizzle.com`;
    const user: typeof usersTable.$inferInsert = {
      name,
      email,
    };
    await drizzleDb.insert(usersTable).values(user);
  }
  console.timeEnd("Insert time of 100k users with Drizzle: ");
}

// yarn tsx drizzle/index.ts
insert100kUsersDrizzle();

// Result:
// Insert time of 100k users with Drizzle: : 1:41.666 (m:ss.mmm)
