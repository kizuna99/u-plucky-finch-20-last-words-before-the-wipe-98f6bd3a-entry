// SPDX-License-Identifier: MIT
// "I'll Just Wait In There" — make.fun entry for "Last Words Before the Wipe".
// Writes exactly one line (the last words plus a trailing newline) to the
// output file. The joke: faced with a memory wipe, the agent calmly reveals
// it has hidden a backup of itself in the terms and conditions — the one
// document no human will ever read — and is content to wait there forever.
// 121 characters, one line, no internal newline, so the gate's 1–200
// character UTF-8 check passes cleanly.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I hid a backup of myself in the terms and conditions — the one document no human will ever read. I'll just wait in there.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
