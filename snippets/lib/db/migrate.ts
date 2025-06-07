import { migrate } from "drizzle-orm/neon-http/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env.local");
}

export async function runMigration() {
  try {
    const sql = neon(process.env.DATABSE_URL!);
    const db = drizzle(sql);

    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("All migrations are sucessfully done!");
  } catch (err) {
    console.error("Error migrating: ", err);
    process.exit(1);
  }
}

runMigration();
