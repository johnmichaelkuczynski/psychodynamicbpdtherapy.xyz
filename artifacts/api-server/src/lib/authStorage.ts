import { db, usersTable } from "@workspace/db";
import { eq } from "drizzle-orm";

export type AuthUser = typeof usersTable.$inferSelect;

export async function getUserById(id: number): Promise<AuthUser | undefined> {
  const [user] = await db.select().from(usersTable).where(eq(usersTable.id, id));
  return user;
}

export async function getUserByGoogleId(
  googleId: string,
): Promise<AuthUser | undefined> {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.googleId, googleId));
  return user;
}

export async function getUserByEmail(
  email: string,
): Promise<AuthUser | undefined> {
  const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email));
  return user;
}

export async function createUserWithGoogle(input: {
  username: string;
  googleId: string;
  email: string | null;
  displayName: string | null;
}): Promise<AuthUser> {
  const [user] = await db.insert(usersTable).values(input).returning();
  return user;
}

export async function updateUserGoogle(
  id: number,
  input: { googleId?: string; displayName?: string | null },
): Promise<AuthUser> {
  const [user] = await db
    .update(usersTable)
    .set(input)
    .where(eq(usersTable.id, id))
    .returning();
  return user;
}
