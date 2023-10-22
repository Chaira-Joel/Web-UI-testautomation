import { test, expect } from "@playwright/test";
import { entryAdSite } from "../../fixtures/data/data";

test("Should hide modal when button is clicked", async ({ page }) => {
  await page.goto(entryAdSite);
  const modal = page.locator(".modal");
  await expect(modal).toBeVisible();
  const closeBtn = page.getByText("Close", { exact: true });
  await closeBtn.click();
  await expect(modal).toBeHidden();
});
