import { Model } from "objection";
import Knex from "knex";

export const knex = Knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL!,
  },
});

Model.knex(knex);
