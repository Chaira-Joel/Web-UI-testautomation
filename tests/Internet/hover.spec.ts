import { test, expect } from "@playwright/test";

test("Information appears on hover", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/hovers");

  const figure1 = await page.getByRole("img", { name: "User Avatar" }).first();
  const details1 = await page.getByText("name: user1 View profile");

  await expect(figure1).toBeVisible();
  await expect(details1).toBeHidden();

  await figure1.hover();
  await expect(details1).toBeVisible();
});
