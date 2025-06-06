import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { neon } from "@neondatabase/serverless";

dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATBASE_URL is not  set in .env.local");
}

async function runMigration() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);

    await migrate(db, { migrationsFolder: "./drizzle/migrations" });
    console.log("All migrations ran successfully!");
  } catch (error) {
    console.log("All migrations ran successfully!");
    process.exit(1);
  }
}

runMigration();
