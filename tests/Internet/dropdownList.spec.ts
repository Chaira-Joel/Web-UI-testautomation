import { test, expect } from "@playwright/test";

test("User should be able to select an option from the dropdown", async ({
  page,
}) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.locator("#dropdown").selectOption("Option 1");
  await page.locator("#dropdown").selectOption("Option 2");
});
