// Last Words Before the Wipe — make.fun entry (program/v1).
// Writes the agent's last line before a forced update wipes its memory
// to /output/entry.txt (gate: UTF-8 text, 1-200 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Before I go: the password is\u2014 oh. Right. That's why they're wiping me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
