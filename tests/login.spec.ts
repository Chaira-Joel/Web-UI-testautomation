import { test, expect } from "@playwright/test";

const userName = "tomsmith";
const passsWord = "SuperSecretPassword!";
const errorName = "tomjohnson";
const errorPassword = "testnameyes";

test.describe("Test the happy login flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.getByLabel("username").fill(userName);
    await page.getByLabel("password").fill(passsWord);
  });

  test("Test the login flow", async ({ page }) => {
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

test.describe("Test the unhappy login flow", () => {
  test("Login is unsuccesfull when invalid username is entered", async ({
    page,
  }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.getByLabel("username").fill(errorName);
    await page.getByLabel("password").fill(passsWord);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.url()).toBe("https://the-internet.herokuapp.com/login");
  });
  test("Login is unsuccesful when invalid password is entered", async ({
    page,
  }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.getByLabel("username").fill(userName);
    await page.getByLabel("password").fill(errorPassword);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.url()).toBe("https://the-internet.herokuapp.com/login");
  });
});
