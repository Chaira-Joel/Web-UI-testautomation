import { test, expect } from "@playwright/test";
import { addRemoveSite } from "../../fixtures/data/data";

test.describe("Test the functionality of adding and deleting elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(addRemoveSite);
  });

  test("Website has a title", async ({ page }) => {
    await expect(page).toHaveTitle(/Internet/);
  });

  test("Should add one element", async ({ page }) => {
    await page.getByRole("button", { name: "Add Element" }).click();
    await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();
  });

  test("Should delete one element", async ({ page }) => {
    await page.getByRole("button", { name: "Add Element" }).click();
    const locator = page.getByRole("button", { name: "Delete" });
    await locator.click();
    await expect(locator).toBeHidden();
  });
});
