// Package only public static files. No compilation, framework, or dependencies.
import { cp, mkdir, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
await mkdir(output, { recursive: true });
const allowed = new Set([
  "index.html",
  "hydrobot.html",
  "aquadetect.html",
  "ephor.html",
  "style.css",
  "script.js",
  "assets",
]);
for (const item of await readdir(output)) {
  if (!allowed.has(item))
    throw new Error(
      `Unexpected file in dist: ${item}. Inspect it before packaging.`,
    );
}
for (const name of allowed) {
  await cp(path.join(root, name), path.join(output, name), {
    recursive: true,
    filter: (source) => !source.split(path.sep).includes("masters"),
  });
}
console.log(
  "Static site prepared in dist/. Only HTML, CSS, JavaScript, and public assets are included.",
);
