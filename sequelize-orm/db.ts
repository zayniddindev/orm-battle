import { Sequelize } from "sequelize";

export const sequelizeDb = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
  logging: false,
});
