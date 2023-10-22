import { test, expect } from "@playwright/test";
import {
  loginSite,
  loggedIn,
  userName,
  passsWord,
  errorName,
  errorPassword,
} from "../../fixtures/data/data";

test.describe("Test the login flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(loginSite);
    await page.getByLabel("username").fill(userName);
    await page.getByLabel("password").fill(passsWord);
  });

  test("Should be able to login", async ({ page }) => {
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.url()).toBe(loggedIn);
  });

  test("Should be able to logout", async ({ page }) => {
    await page.getByRole("button", { name: "Login" }).click();
    const locator = await page.getByRole("link", { name: "Logout" });
    locator.isVisible();
    await locator.click();
    await expect(page.url()).toBe(loginSite);
  });
});

test.describe("Test the unhappy login flow", () => {
  test("Login is unsuccesfull when invalid username is entered", async ({
    page,
  }) => {
    await page.goto(loginSite);
    await page.getByLabel("username").fill(errorName);
    await page.getByLabel("password").fill(passsWord);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.url()).toBe(loginSite);
  });
  test("Login is unsuccesful when invalid password is entered", async ({
    page,
  }) => {
    await page.goto(loginSite);
    await page.getByLabel("username").fill(userName);
    await page.getByLabel("password").fill(errorPassword);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.url()).toBe(loginSite);
  });
});
