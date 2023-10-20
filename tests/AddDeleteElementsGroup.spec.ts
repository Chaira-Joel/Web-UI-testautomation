import { test, expect } from "@playwright/test";
const webSite = "https://the-internet.herokuapp.com/add_remove_elements/";

test.describe("Test the functionality of adding and deleting elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(webSite);
  });

  test("Website has a title", async ({ page }) => {
    await expect(page).toHaveTitle(/Internet/);
  });

  test("Add one element", async ({ page }) => {
    await page.getByRole("button", { name: "Add Element" }).click();
    await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();
  });

  test("Delete one element", async ({ page }) => {
    await page.getByRole("button", { name: "Add Element" }).click();
    const locator = page.getByRole("button", { name: "Delete" });
    await locator.click();
    await expect(locator).toBeHidden();
  });
});
