---
name: connect-pg-simple table.sql bundling
description: esbuild-bundled production servers silently break connect-pg-simple's auto table creation, breaking session persistence in prod only
---

`connect-pg-simple`'s `createTableIfMissing: true` reads a `table.sql` file
from its own package directory at runtime. Esbuild bundling (single-file
`.mjs` output) never copies that file into `dist/`, so in production the
table-creation query throws `ENOENT` on every request and is swallowed by
`errorLog` — sessions silently never persist. Dev (`tsx`/unbundled) works
fine because the file is still on disk, which is why this only shows up
after a deploy: symptom is "user logs in via OAuth, but is immediately
logged out again."

**Why:** esbuild bundling doesn't traverse to copy non-JS asset files
referenced via `fs.readFile` at runtime; only literal `import`/`require`
targets get bundled.

**How to apply:** don't rely on `createTableIfMissing`. Set it to `false`
and run the `CREATE TABLE IF NOT EXISTS ... user_sessions ...` (+ pkey +
expire index) once yourself via the existing DB pool before/while wiring
up `express-session`. Applies to any esbuild/bundled Node server using
connect-pg-simple, not just this project.
