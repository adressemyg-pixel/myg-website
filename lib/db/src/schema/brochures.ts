import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const brochuresTable = pgTable("brochures", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  objectPath: text("object_path").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBrochureSchema = createInsertSchema(brochuresTable).omit({ id: true, createdAt: true });
export type InsertBrochure = z.infer<typeof insertBrochureSchema>;
export type Brochure = typeof brochuresTable.$inferSelect;
