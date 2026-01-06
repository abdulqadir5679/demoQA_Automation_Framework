import { test, expect } from '@playwright/test';

test.describe('Test Suite : Resizeable', () => {
    test('Resizeable', async ({ page }) => {
        await page.goto('https://demoqa.com/resizable', { waitUntil: 'domcontentloaded' });
        
        const handle = page.locator('#resizableBoxWithRestriction .react-resizable-handle');
        await handle.hover({ force: true });
        await page.mouse.down();
        await page.mouse.move(400, 300);
        await page.mouse.up();
        
        const height = await page.locator('#resizableBoxWithRestriction').evaluate(el => getComputedStyle(el).height);
        expect(parseInt(height)).toBeGreaterThanOrEqual(150);
    });

    test('Resizeable Free', async ({ page }) => {
        await page.goto('https://demoqa.com/resizable', { waitUntil: 'domcontentloaded'});
        
        const handle = page.locator('#resizable .react-resizable-handle');
        await handle.hover({ force: true });
        await page.mouse.down();
        await page.mouse.move(500, 400);
        await page.mouse.up();
        
        const width = await page.locator('#resizable').evaluate(el => getComputedStyle(el).width);
        expect(parseInt(width)).toBeGreaterThanOrEqual(200);
    });
})