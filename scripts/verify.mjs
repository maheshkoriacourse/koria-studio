/**
 * Verify + screenshot the production build of Koria Studio.
 * Serves dist/, loads the page headlessly at 375/768/1280, captures
 * screenshots, checks console errors, and saves a perf trace summary.
 *
 * Run: node scripts/verify.mjs
 */
import { chromium } from "playwright-core";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url)); // project root
const DIST = join(ROOT, "dist");
const OUT = join(ROOT, "screenshots");
const PORT = 4173;

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".txt": "text/plain",
  ".json": "application/json",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json",
};

// ---------- tiny static server for dist/ ----------
let server;
function serve() {
  return new Promise((resolve) => {
    server = createServer(async (req, res) => {
      try {
        let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
        if (p.startsWith("/koria-studio/")) p = p.slice("/koria-studio".length);
        if (p === "/" || p === "") p = "/index.html";
        const file = join(DIST, p);
        const st = await stat(file);
        if (!st.isFile()) throw new Error("not a file");
        res.writeHead(200, {
          "content-type":
            MIME[extname(p).toLowerCase()] ?? "application/octet-stream",
        });
        res.end(await readFile(file));
      } catch {
        // SPA fallback
        res.writeHead(200, { "content-type": "text/html" });
        res.end(await readFile(join(DIST, "index.html")));
      }
    });
    server.listen(PORT, "127.0.0.1", () => resolve());
  });
}

const errors = [];
const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
];

await serve();
const browser = await chromium.launch({ args: ["--no-sandbox"] });

try {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(`[${vp.name}] ${m.text()}`);
    });
    page.on("pageerror", (e) => errors.push(`[${vp.name}] pageerror: ${e.message}`));
    page.on("requestfailed", (r) =>
      errors.push(`[${vp.name}] requestfailed: ${r.url()} ${r.failure()?.errorText}`)
    );

    const resp = await page.goto(`http://127.0.0.1:${PORT}/koria-studio/`, {
      waitUntil: "networkidle",
      timeout: 30000,
    });
    if (!resp.ok()) errors.push(`[${vp.name}] HTTP ${resp.status()}`);

    await page.waitForTimeout(1200); // let hero reveals settle
    await page.screenshot({ path: join(OUT, `${vp.name}-dark-top.png`) });

    // Trigger all scroll-reveal animations: walk down the page, then return.
    // Override CSS smooth scrolling so jumps land instantly.
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = "auto";
      const step = window.innerHeight * 0.8;
      for (let y = 0; y <= document.body.scrollHeight; y += step) {
        window.scrollTo({ top: y, behavior: "instant" });
        await new Promise((r) => setTimeout(r, 200));
      }
      await new Promise((r) => setTimeout(r, 400));
      window.scrollTo({ top: 0, behavior: "instant" });
      document.documentElement.style.scrollBehavior = "";
    });
    await page.waitForTimeout(2200); // let reveals + number tickers settle
    await page.screenshot({
      path: join(OUT, `${vp.name}-dark-full.png`),
      fullPage: true,
    });

    // Light mode
    await page.evaluate(() => {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      try { localStorage.setItem("ks-theme", "light"); } catch {}
    });
    await page.waitForTimeout(400);
    await page.screenshot({ path: join(OUT, `${vp.name}-light-top.png`) });

    await ctx.close();
  }

  // -------- interaction checks on desktop --------
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await ctx.newPage();
  page.on("pageerror", (e) => errors.push(`[interact] pageerror: ${e.message}`));
  await page.goto(`http://127.0.0.1:${PORT}/koria-studio/`, { waitUntil: "networkidle" });

  // FAQ accordion toggles
  const faqBtn = page.locator("#faq button").first();
  await faqBtn.scrollIntoViewIfNeeded();
  await faqBtn.click();
  const expanded = await faqBtn.getAttribute("aria-expanded");
  if (expanded !== "true") errors.push("[interact] FAQ accordion did not open");
  await page.waitForTimeout(300);

  // Theme toggle flips classes
  const before = await page.evaluate(() =>
    document.documentElement.classList.contains("dark")
  );
  await page.getByRole("button", { name: /switch to/i }).first().click();
  const after = await page.evaluate(() =>
    document.documentElement.classList.contains("dark")
  );
  if (before === after) errors.push("[interact] theme toggle did not change theme");
  await page.waitForTimeout(300);
  await page.screenshot({ path: join(OUT, "desktop-light-after-toggle.png") });

  // Mobile menu
  const mctx = await browser.newContext({
    viewport: { width: 375, height: 812 },
  });
  const mpage = await mctx.newPage();
  await mpage.goto(`http://127.0.0.1:${PORT}/koria-studio/`, { waitUntil: "networkidle" });
  await mpage.getByRole("button", { name: /open menu/i }).click();
  await mpage.waitForTimeout(200);
  const menuVisible = await mpage.locator("#mobile-menu").isVisible();
  if (!menuVisible) errors.push("[interact] mobile menu did not open");
  await mpage.screenshot({ path: join(OUT, "mobile-menu-open.png") });
  await mctx.close();

  await ctx.close();

  // -------- load-time check (simulated load, no throttling in CDP-free run) --------
  const tctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const tpage = await tctx.newPage();
  const t0 = Date.now();
  await tpage.goto(`http://127.0.0.1:${PORT}/koria-studio/`, { waitUntil: "load" });
  const loadMs = Date.now() - t0;
  await tctx.close();

  console.log(
    JSON.stringify(
      { ok: errors.length === 0, errors, loadMs, out: OUT },
      null,
      2
    )
  );
} finally {
  await browser.close();
  server.close();
}