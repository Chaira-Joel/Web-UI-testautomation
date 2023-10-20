import { test, expect } from "@playwright/test";
import { describe } from "node:test";

test("Website has title", async ({ page }) => {
  await page.goto("https://techblog.polteq.com/testshop/index.php");
  await expect(page).toHaveTitle(/Polteq/);
});

// test("Purchase ipod Flow", async ({ page }) => {
//   await page.goto("https://techblog.polteq.com/testshop/index.php");
// });
