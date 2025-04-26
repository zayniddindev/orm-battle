import { DataSource } from "typeorm";
import { User } from "./user.entity";

export const typeormDb = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL!,
  entities: [User],
  synchronize: false,
});
