import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {
  uuid,
  primaryKey,
  text,
  varchar,
  pgTable,
  timestamp,
} from "drizzle-orm/pg-core";

export const snippetTable = pgTable("snippet_table", {
  snippetId: uuid("snippet_id").primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  code: text("code").notNull(),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type SnippetType = InferSelectModel<typeof snippetTable>;
export type SnippetInsertType = InferInsertModel<typeof snippetTable>;
