import { test, expect } from "@playwright/test";
import { filePickerSite } from "../fixtures/data/data";

test("Should upload a photo to the file picker", async ({ page }) => {
  await page.goto(filePickerSite);
  await page.setInputFiles("#file-upload", "./fixtures/images/frenchtoast.jpg");
  const uploadBtn = await page.getByRole("button", { name: "Upload" });
  uploadBtn.click();
  await expect(page.getByText("frenchtoast.jpg")).toBeVisible();
});
