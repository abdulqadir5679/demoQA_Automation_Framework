import {test, expect} from '@playwright/test';

test.describe('Test suite : Auto Complete', () => {
    test('Multiple Color', async ({page}) => {
        await page.goto('https://demoqa.com/auto-complete');

        await page.locator('#autoCompleteMultipleInput').fill('Red');
        await page.locator('#react-select-2-option-0').click();
        
        await page.locator('#autoCompleteMultipleInput').fill('Green');
        await page.locator('#react-select-2-option-0').click();

        // Verify selected colors
        await expect(page.locator('.css-12jo7m5').first()).toContainText('Red');
        await expect(page.locator('.css-12jo7m5').last()).toContainText('Green');
    });

    test('Single Color', async ({page}) => {
        await page.goto('https://demoqa.com/auto-complete');

        await page.locator('#autoCompleteSingleInput').fill('Red');
        await page.locator('#react-select-3-option-0').click();
        
        // Verify selected color
        await expect(page.locator('#autoCompleteSingleContainer')).toContainText('Red');
    });
});