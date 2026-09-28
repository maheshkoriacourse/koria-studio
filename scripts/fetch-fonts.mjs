// Download Google Fonts (Sora + Inter, latin subset, variable woff2) for
// self-hosting. One-time asset fetch; run: node scripts/fetch-fonts.mjs
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
const CSS_URL =
  "https://fonts.googleapis.com/css2?family=Sora:wght@400..800&family=Inter:wght@400..600&display=swap";
const OUT = join(import.meta.dirname, "..", "public", "fonts");

const css = await (await fetch(CSS_URL, { headers: { "user-agent": UA } })).text();

// Take only the /* latin */ blocks (final subset per family)
const blocks = css.split("/*").filter((b) => b.trim().startsWith("latin "));
const faces = [];
await mkdir(OUT, { recursive: true });

for (const block of blocks) {
  const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
  const weight = /font-weight:\s*([\d\s]+);/.exec(block)?.[1];
  const style = /font-style:\s*(\w+);/.exec(block)?.[1] ?? "normal";
  const url = /url\((https:[^)]+\.woff2)\)/.exec(block)?.[1];
  if (!family || !url) continue;
  const fname = `${family.toLowerCase()}-${weight ?? "400"}-${style}.woff2`;
  const buf = Buffer.from(await (await fetch(url, { headers: { "user-agent": UA } })).arrayBuffer());
  await writeFile(join(OUT, fname), buf);
  faces.push({ family, weight, style, fname, bytes: buf.length });
  console.log(`saved ${fname} (${(buf.length / 1024).toFixed(1)} KB)`);
}

// Emit @font-face rules for theme.css
const rules = faces
  .map(
    (f) => `@font-face {
  font-family: "${f.family}";
  font-style: ${f.style};
  font-weight: ${f.weight};
  font-display: swap;
  src: url("/koria-studio/fonts/${f.fname}") format("woff2");
}`
  )
  .join("\n\n");
await writeFile(join(import.meta.dirname, "fontfaces.css"), rules + "\n");
console.log("fontfaces.css written");