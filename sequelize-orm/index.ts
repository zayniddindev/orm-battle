import "dotenv/config";
import { User } from "./user.model";
import { sequelizeDb } from "./db";

// Insert 100k users with Sequelize
async function insert100kUsersSequelize() {
  await sequelizeDb.authenticate();
  await User.sync({ force: true });
  console.time("Insert time of 100k users with Sequelize: ");
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