import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

// A valid postgres connection URL parses and carries a postgres scheme + host.
function isValidPostgresUrl(value: string | undefined): value is string {
  if (!value) return false;
  try {
    const u = new URL(value);
    return (
      (u.protocol === "postgres:" || u.protocol === "postgresql:") &&
      u.hostname.length > 0
    );
  } catch {
    return false;
  }
}

// Fallback: assemble a connection URL from the discrete PG* env vars. Used when
// DATABASE_URL is absent or malformed (e.g. an overwritten secret), since the
// individual PGHOST/PGUSER/PGPASSWORD/PGDATABASE vars are managed separately.
function buildConnectionStringFromParts(): string | undefined {
  const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env;
  if (!PGHOST || !PGUSER || !PGDATABASE) return undefined;
  const port = PGPORT || "5432";
  const auth = PGPASSWORD
    ? `${encodeURIComponent(PGUSER)}:${encodeURIComponent(PGPASSWORD)}`
    : encodeURIComponent(PGUSER);
  return `postgresql://${auth}@${PGHOST}:${port}/${encodeURIComponent(PGDATABASE)}`;
}

let connectionString = process.env.DATABASE_URL;
if (!isValidPostgresUrl(connectionString)) {
  connectionString = buildConnectionStringFromParts();
}
if (!connectionString) {
  throw new Error(
    "DATABASE_URL must be set (or PGHOST/PGUSER/PGDATABASE provided). Did you forget to provision a database?",
  );
}

// Enable SSL for managed providers (Neon, Render, Supabase, etc.).
// Local and internal-managed URLs keep SSL off. Replit's internal managed
// PostgreSQL (host "helium") and private-network hosts do not support SSL.
const isLocal =
  /@(localhost|127\.0\.0\.1|helium|10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.)/.test(
    connectionString,
  );
const sslDisabled = process.env.DATABASE_SSL === "false";
const useSsl = !isLocal && !sslDisabled;

export const pool = new Pool({
  connectionString,
  ...(useSsl ? { ssl: { rejectUnauthorized: false } } : {}),
});
export const db = drizzle(pool, { schema });

export * from "./schema";
