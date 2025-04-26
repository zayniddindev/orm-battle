import "dotenv/config";
import { User } from "./user.model";
import "./db";

// Insert 100k users with Objection.js
async function insert100kUsersObjection() {
  console.time("Insert time of 100k users with Objection.js: ");
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
