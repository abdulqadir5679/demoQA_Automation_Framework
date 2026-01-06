import {test, expect} from '@playwright/test';

test.describe('Test suite : Menu', () => {
    test('Menu', async ({page}) => {
        await page.goto('https://demoqa.com/menu#');
        await page.getByText('Main Item 1').hover();
        await page.getByText('Main Item 3').hover();
        await page.getByText('Main Item 2').hover();
        await page.getByText('SUB SUB LIST »').hover(); 
        await page.getByText('Sub Sub Item 2').click();
        
        // Verify menu item is visible after navigation
        await expect(page.getByText('Sub Sub Item 2')).toBeVisible();
    })
})