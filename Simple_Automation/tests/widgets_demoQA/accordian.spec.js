import { expect, test } from "@playwright/test";

test.describe("Test Suite : Accordian", () => {
  test("test", async ({ page }) => {
    await page.goto("https://demoqa.com/accordian", {waitUntil: 'domcontentloaded'});

    // Just verify accordion headers are clickable
    await page.locator('#section1Heading').click();
    await page.locator('#section2Heading').click();
    await page.locator('#section3Heading').click();
  });
});