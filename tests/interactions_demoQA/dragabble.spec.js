import {test, expect} from '@playwright/test';

test.describe('Test Suite : Draggablr', () => {

    test('Simple Draggable', async ({page}) => {
        await page.goto('https://demoqa.com/dragabble', { waitUntil: 'domcontentloaded' });
        const draggable = page.locator('#dragBox');
        const box = await draggable.boundingBox();
        if (box) {
            await draggable.hover();
            await page.mouse.down();
            await page.mouse.move(box.x + 100, box.y + 100);
            await page.mouse.up();
            expect(draggable).toBeVisible();
        }
        else {
            throw new Error('Element not found');
        }
        await page.waitForTimeout(2000);
    })
    test('Axis Restricted Draggable', async ({page}) => {
        await page.goto('https://demoqa.com/dragabble', { waitUntil: 'domcontentloaded' });
        const draggable = page.locator('#dragBox');
        const box = await draggable.boundingBox();
        if (box) {
            await draggable.hover();
            await page.mouse.down();
            await page.mouse.move(box.x + 100, box.y + 100);
            await page.mouse.up();
            expect(draggable).toBeVisible();
        }
        else {
            throw new Error('Element not found');
        }
        await page.waitForTimeout(2000);
    })
    test('Container Restricted Draggable', async ({page}) => {
        await page.goto('https://demoqa.com/dragabble', { waitUntil: 'domcontentloaded' });
        const draggable = page.locator('#dragBox');
        const box = await draggable.boundingBox();
        if (box) {
            await draggable.hover();
            await page.mouse.down();
            await page.mouse.move(box.x + 100, box.y + 100);
            await page.mouse.up();
            expect(draggable).toBeVisible();
        }
        else {
            throw new Error('Element not found');
        }
        await page.waitForTimeout(2000);
    })
    test('Cursor Style Draggable', async ({page}) => {
        await page.goto('https://demoqa.com/dragabble', { waitUntil: 'domcontentloaded' });
        const draggable = page.locator('#dragBox');
        const box = await draggable.boundingBox();
        if (box) {
            await draggable.hover();
            await page.mouse.down();
            await page.mouse.move(box.x + 100, box.y + 100);
            await page.mouse.up();
            expect(draggable).toBeVisible();
        }
        else {
            throw new Error('Element not found');
        }
        await page.waitForTimeout(2000);
    })
})