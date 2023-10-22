import { test, expect } from "@playwright/test";
import { hoverSite } from "../../fixtures/data/data";

test("Should show information on hover", async ({ page }) => {
  await page.goto(hoverSite);
  const figure1 = await page.getByRole("img", { name: "User Avatar" }).first();
  const details1 = await page.getByText("name: user1 View profile");
  await expect(figure1).toBeVisible();
  await expect(details1).toBeHidden();
  await figure1.hover();
  await expect(details1).toBeVisible();
});
