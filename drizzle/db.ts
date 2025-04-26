import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

export const drizzleDb = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL!,
  },
});
