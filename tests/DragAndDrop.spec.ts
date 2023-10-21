import { test, expect } from "@playwright/test";

test("Test drag and drop functionality", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
  const columnA = page.locator("#column-a");
  const columnB = page.locator("#column-b");
  const textBeforeDrag = await columnA.locator("header").textContent(); //get the textcontent of the header before the drag
  await columnA.dragTo(columnB);
  const textAfterDrag = await columnA.locator("header").textContent(); // get the textcontent of the header after the drag
  await expect(textBeforeDrag).not.toEqual(textAfterDrag); //assert that the text content of header A has changed
});
