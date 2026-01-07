import {test, expect} from '@playwright/test';

test.describe('Test Suite : Sortable', () => {

    test('Sortable Grid', async ({page}) => {
        await page.goto('https://demoqa.com/sortable', { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('text=Grid');
        await page.click('text=Grid');
        await page.waitForSelector('.create-grid .list-group-item', { timeout: 10000 });
        const items = page.locator('.create-grid .list-group-item');
        const item1 = items.nth(0);
        const item4 = items.nth(3);
        const box1 = await item1.boundingBox();
        const box4 = await item4.boundingBox();
        if (box1 && box4) {
            await item1.hover();
            await page.mouse.down();
            await page.mouse.move(box4.x + box4.width / 2, box4.y + box4.height / 2);
            await page.mouse.up();
        }
    });

    test('Sortable List', async ({page}) => {
        await page.goto('https://demoqa.com/sortable', { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('.vertical-list-container .list-group-item');
        const items = page.locator('.vertical-list-container .list-group-item');
        const item1 = items.nth(0);
        const item3 = items.nth(2);
        const box1 = await item1.boundingBox();
        const box3 = await item3.boundingBox();
        if (box1 && box3) {
            await item1.hover();
            await page.mouse.down();
            await page.mouse.move(box3.x + box3.width / 2, box3.y + box3.height / 2);
            await page.mouse.up();
        }
    });

});