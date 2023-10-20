import { test, expect } from "@playwright/test";

//Number 1: Add/Delete elements
test("Website has a title", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  await expect(page).toHaveTitle(/Internet/);
});

test("Add one element", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  await page.getByRole("button", { name: "Add Element" }).click();
  await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();
});

test("Delete one element", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  await page.getByRole("button", { name: "Add Element" }).click();
  const locator = await page.getByRole("button", { name: "Delete" });
  await locator.click();
  await expect(locator).toBeHidden();
});
