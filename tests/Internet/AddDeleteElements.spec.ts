import { test, expect } from "@playwright/test";
import { addRemoveSite } from "../../fixtures/data/data";

test("Website has a title", async ({ page }) => {
  await page.goto(addRemoveSite);
  await expect(page).toHaveTitle(/Internet/);
});

test("Should add one element", async ({ page }) => {
  await page.goto(addRemoveSite);
  await page.getByRole("button", { name: "Add Element" }).click();
  await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();
});

test("Should delete one element", async ({ page }) => {
  await page.goto(addRemoveSite);
  await page.getByRole("button", { name: "Add Element" }).click();
  const locator = await page.getByRole("button", { name: "Delete" });
  await locator.click();
  await expect(locator).toBeHidden();
});
