import {test, expect} from '@playwright/test';

test.describe('Test suite', () => {
    test('Test case', async ({page}) => {
        await page.goto('https://demoqa.com/progress-bar');

        await page.locator('#startStopButton').click();

        await page.waitForTimeout(5000);

        await page.locator('#startStopButton').click();

        // Assert progress bar value is around 48-52%
        await expect(page.locator('.progress-bar')).toHaveAttribute('aria-valuenow', /4[8-9]|5[0-2]/);
    });
});