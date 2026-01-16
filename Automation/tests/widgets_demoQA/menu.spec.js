import {test, expect} from '@playwright/test';

test.describe('Test suite : Menu', () => {
    test('Menu', async ({page}) => {
        await page.goto('https://demoqa.com/menu#', {waitUntil: 'domcontentloaded'});
        await page.getByText('Main Item 1').hover();
        await page.getByText('Main Item 3').hover();
        await page.getByText('Main Item 2').hover();
        await page.getByText('SUB SUB LIST »').hover(); 
        await page.getByText('Sub Sub Item 2').click();
    })
})