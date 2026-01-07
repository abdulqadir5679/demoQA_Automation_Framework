import {test, expect} from '@playwright/test';

test.describe('Test suite : Frames', () => {
    test('Frames', async ({page}) => {
        await page.goto('/frames');

        // Assert frame1 heading is visible and has correct text
        await expect(page.frameLocator('#frame1').locator('#sampleHeading')).toBeVisible();
        const frame1Text = await page.frameLocator('#frame1').locator('#sampleHeading').textContent();
        await expect(frame1Text).toBe('This is a sample page');

        await page.frameLocator('#frame1').locator('#sampleHeading').click();

        // Assert frame2 heading is visible and has correct text 
        await expect(page.frameLocator('#frame2').locator('#sampleHeading')).toBeVisible();
        const frame2Text = await page.frameLocator('#frame2').locator('#sampleHeading').textContent();
        await expect(frame2Text).toBe('This is a sample page');

        await page.frameLocator('#frame2').locator('#sampleHeading').click();
    });
});