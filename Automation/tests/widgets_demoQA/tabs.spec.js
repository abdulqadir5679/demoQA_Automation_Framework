import { expect, test } from "playwright/test";

test.describe('Test Suite : Tabs', () => {
    test('Tabs', async ({ page }) => {
        await page.goto('https://demoqa.com/tabs')
        await page.locator('#demo-tab-origin').click()
        // assertion
        await expect(page.locator('#demo-tabpane-origin')).toBeVisible()
        await page.locator('#demo-tab-use').click()
        // assertion
        await expect(page.locator('#demo-tabpane-use')).toBeVisible()
    })
})