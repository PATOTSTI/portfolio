// Local preview of the packaged static site with Vercel-style clean URLs.
// Only public dist/ files are served. No dependencies or build framework.
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const root = path.join(projectRoot, "dist");
const config = JSON.parse(
  await readFile(path.join(projectRoot, "vercel.json"), "utf8"),
);
const port = Number(process.env.PORT || 3000);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};
await stat(path.join(root, "index.html")).catch(() => {
  throw new Error(
    "Build the static site first: node scripts/prepare-deploy.mjs",
  );
});
const server = http.createServer(async (req, res) => {
  try {
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405, { Allow: "GET, HEAD" }).end();
      return;
    }
    const url = new URL(req.url, "http://localhost");
    let pathname;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      res.writeHead(400).end("Invalid URL");
      return;
    }
    const explicit = config.redirects?.find((rule) => rule.source === pathname);
    let destination = explicit?.destination;
    if (
      !destination &&
      config.trailingSlash === false &&
      pathname !== "/" &&
      pathname.endsWith("/")
    )
      destination = pathname.replace(/\/+$/, "");
    if (!destination && config.cleanUrls && pathname.endsWith(".html"))
      destination = pathname.slice(0, -5);
    if (destination) {
      res.writeHead(308, { Location: destination + url.search }).end();
      return;
    }
    if (pathname === "/") pathname = "/index.html";
    else if (config.cleanUrls && !path.extname(pathname)) pathname += ".html";
    const parts = pathname.split("/");
    const file = path.resolve(root, "." + pathname);
    const relative = path.relative(root, file);
    if (
      relative.startsWith("..") ||
      path.isAbsolute(relative) ||
      parts.some((part) => part.startsWith(".") || part === "masters") ||
      !mime[path.extname(file)]
    ) {
      res.writeHead(404).end("Not found");
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, {
      "Content-Type": mime[path.extname(file)],
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-store",
    });
    res.end(req.method === "HEAD" ? undefined : body);
  } catch (error) {
    res
      .writeHead(error.code === "ENOENT" || error.code === "EISDIR" ? 404 : 500)
      .end("Page not found");
  }
});
server.on("error", (error) => {
  console.error(
    error.code === "EADDRINUSE"
      ? `Port ${port} is already in use. Set PORT to another number.`
      : error.message,
  );
  process.exitCode = 1;
});
server.listen(port, "127.0.0.1", () =>
  console.log(
    `Portfolio preview: http://localhost:${port}\nPress Ctrl+C to stop.`,
  ),
);
