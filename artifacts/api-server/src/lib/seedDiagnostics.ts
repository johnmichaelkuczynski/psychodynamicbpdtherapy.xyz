import { sql } from "drizzle-orm";
import {
  db,
  diagnosticAssessmentsTable,
  diagnosticItemsTable,
} from "@workspace/db";
import { logger } from "./logger";
import { DIAGNOSTIC_SEED } from "./diagnosticContent";

// Rotate an options array by a random offset so the (originally-first) correct
// option lands at a random index, returning the new array plus the new correct
// index. This keeps authoring simple (write the correct option first) while
// avoiding both an "always A" pattern and any deterministic coupling between an
// item's public `position` and its hidden correct index.
function rotateOptions(options: string[]): {
  options: string[];
  correctIndex: number;
} {
  const n = options.length;
  const off = Math.floor(Math.random() * n);
  const rotated = new Array<string>(n);
  for (let k = 0; k < n; k++) {
    rotated[(k + off) % n] = options[k]!;
  }
  return { options: rotated, correctIndex: off };
}

// Signature of the desired seed: the sorted set of "instrument:phase" keys.
function desiredSignature(): string {
  return DIAGNOSTIC_SEED.map((a) => `${a.instrument}:${a.phase}`)
    .sort()
    .join("|");
}

async function existingSignature(): Promise<string> {
  const res = await db.execute(
    sql`select instrument, phase from diagnostic_assessments`,
  );
  const rows = res.rows as { instrument?: string; phase?: string }[];
  return rows
    .map((r) => `${r.instrument}:${r.phase}`)
    .sort()
    .join("|");
}

async function insertSeed(): Promise<void> {
  let itemTotal = 0;
  for (let i = 0; i < DIAGNOSTIC_SEED.length; i++) {
    const a = DIAGNOSTIC_SEED[i]!;
    const [inserted] = await db
      .insert(diagnosticAssessmentsTable)
      .values({
        instrument: a.instrument,
        phase: a.phase,
        title: a.title,
        subtitle: a.subtitle,
        instructions: a.instructions,
        position: i,
      })
      .returning();
    if (!inserted) throw new Error(`Failed to insert assessment ${a.title}`);

    let pos = 0;
    for (const m of a.mcqs) {
      const { options, correctIndex } = rotateOptions(m.options);
      await db.insert(diagnosticItemsTable).values({
        assessmentId: inserted.id,
        position: pos,
        type: "mcq",
        prompt: m.prompt,
        payload: { options },
        scoring: { correctIndex, skillArea: m.skillArea },
      });
      pos += 1;
      itemTotal += 1;
    }
  }
  logger.info(
    { assessments: DIAGNOSTIC_SEED.length, items: itemTotal },
    "Diagnostic seed complete",
  );
}

// Seed the diagnostic assessments, self-healing if the stored set no longer
// matches the desired (instrument, phase) signature — e.g. after the subsystem
// was redefined. Replacing them cascades to items, attempts, and responses, so
// only run a replace when the signature actually differs.
export async function seedDiagnosticsIfEmpty(): Promise<void> {
  const desired = desiredSignature();
  const existing = await existingSignature();

  if (existing === desired) {
    logger.info("Diagnostic seed: up to date, skipping");
    return;
  }

  if (existing.length > 0) {
    logger.info(
      "Diagnostic seed: signature changed, replacing diagnostic assessments",
    );
    // Delete cascades to items/attempts/responses via FK constraints.
    await db.delete(diagnosticAssessmentsTable);
  } else {
    logger.info("Diagnostic seed: populating reasoning assessments");
  }

  await insertSeed();
}
