import { test, expect } from "@playwright/test";

test("Drag and drop", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
});


// Div a and Div b 