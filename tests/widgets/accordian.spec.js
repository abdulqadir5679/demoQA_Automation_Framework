import { expect, test } from "@playwright/test";

test.describe("Test Suite : Accordian", () => {
  test("test", async ({ page }) => {
    await page.goto("https://demoqa.com/accordian");

    await page.getByText("What is Lorem Ipsum?").click();
    await expect(page.getByText("Lorem Ipsum is simply dummy")).toBeVisible();

    await page.getByText("Where does it come from?").click();
    await expect(page.getByText("Contrary to popular belief,")).toBeVisible();

    await page.getByText("Why do we use it?").click();
    await expect(page.getByText("It is a long established fact")).toBeVisible();
  });
});