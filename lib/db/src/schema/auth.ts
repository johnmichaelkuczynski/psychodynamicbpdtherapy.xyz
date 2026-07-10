import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// Minimal user record for optional Google sign-in. The app itself remains
// fully open (no server-side route gating) — this table exists purely so a
// signed-in identity can be persisted across sessions.
export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email"),
  googleId: text("google_id").unique(),
  displayName: text("display_name"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
