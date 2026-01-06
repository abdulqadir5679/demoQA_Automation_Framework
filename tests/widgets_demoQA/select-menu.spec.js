import { test, expect } from '@playwright/test';

test.describe('Test Suite : Select Menu', () => {
    test('Select Menu', async ({ page }) => {
        await page.goto('https://demoqa.com/select-menu', {waitUntil: 'domcontentloaded'});

        // Select from dropdown
        await page.locator('#withOptGroup').click();
        await page.locator('#react-select-2-option-0-0').click();
        await expect(page.locator('.css-1uccc91-singleValue')).toContainText('Group 1, option 1');

        // Select title
        await page.locator('#selectOne').click();
        await page.getByText('Prof.').click();
        await expect(page.locator('#selectOne')).toContainText('Prof.');

        // Multi-select
        await page.locator('#cars').selectOption(['volvo', 'saab', 'audi']);
        await expect(page.locator('#cars')).toHaveValue('volvo');
    })
})