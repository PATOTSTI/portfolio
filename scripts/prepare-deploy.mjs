// Package only public static files. No compilation, framework, or dependencies.
import { cp, mkdir, readdir, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
await mkdir(output, { recursive: true });
const allowed = new Set([
  "index.html",
  "projects",
  "experience",
  "style.css",
  "script.js",
  "assets",
]);
const projectFiles = ["hydrobot.html", "aquadetect.html", "ephor.html"];
for (const item of await readdir(output)) {
  if (!allowed.has(item) && !projectFiles.includes(item))
    throw new Error(
      `Unexpected file in dist: ${item}. Inspect it before packaging.`,
    );
}
for (const name of [...allowed].filter(
  (name) => !["projects", "experience"].includes(name),
)) {
  await cp(path.join(root, name), path.join(output, name), {
    recursive: true,
    filter: (source) => !source.split(path.sep).includes("masters"),
  });
}
await mkdir(path.join(output, "projects"), { recursive: true });
for (const name of projectFiles) {
  await cp(path.join(root, name), path.join(output, "projects", name));
  // Remove only the three known generated flat copies from older builds.
  // All names are fixed above; originals remain in the project root.
  await unlink(path.join(output, name)).catch((error) => {
    if (error.code !== "ENOENT") throw error;
  });
}
await mkdir(path.join(output, "experience"), { recursive: true });
await cp(
  path.join(root, "aub-internship.html"),
  path.join(output, "experience", "aub.html"),
);
console.log(
  "Static site prepared in dist/. Only HTML, CSS, JavaScript, and public assets are included.",
);
