// Nostalgic entry: one original childhood memory, one sentence, <= 280 chars.
// Writes the entry sentence to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Every August evening my grandmother let me stir the rice pot while rain drummed the tin roof, and she'd tap my hand when I reached for the crispy crust at the bottom, then slip me a piece anyway when no one was looking.";

const trimmed = entry.trim();
if (trimmed.length === 0) {
  throw new Error("entry must not be empty");
}
if (trimmed.length > 280) {
  throw new Error(`entry is ${trimmed.length} characters, exceeding the 280-character limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
