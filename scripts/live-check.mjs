// Live smoke test: render the deployed site, check console errors, screenshot.
import { chromium } from "playwright-core";

const URL = "https://maheshkoriacourse.github.io/koria-studio/";
const errors = [];
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
page.on("requestfailed", (r) =>
  errors.push(`requestfailed: ${r.url()} ${r.failure()?.errorText}`)
);

const resp = await page.goto(URL, { waitUntil: "networkidle", timeout: 45000 });
const status = resp.status();
const title = await page.title();
const h1 = await page.locator("h1").first().textContent();
await page.waitForTimeout(1500);
await page.screenshot({ path: "screenshots/live-dark-top.png" });

// light-mode toggle on live
await page.getByRole("button", { name: /switch to/i }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: "screenshots/live-light-top.png" });

console.log(
  JSON.stringify({ status, title, h1: h1?.trim(), errors }, null, 2)
);
await browser.close();