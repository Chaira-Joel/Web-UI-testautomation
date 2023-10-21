import { test, expect } from "@playwright/test";

test.describe("Test the login and logout flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.getByLabel("username").fill("tomsmith");
    await page.getByLabel("password").fill("SuperSecretPassword!");
  });

  test("Check the login flow", async ({ page }) => {
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.url()).toBe("https://the-internet.herokuapp.com/secure");
  });

  test("Test the logout flow", async ({ page }) => {
    await page.getByRole("button", { name: "Login" }).click();
    const locator = await page.getByRole("link", { name: "Logout" });
    locator.isVisible();
    await locator.click();
    await expect(page.url()).toBe("https://the-internet.herokuapp.com/login");
  });
});
