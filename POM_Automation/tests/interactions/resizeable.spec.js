import { test, expect } from '@playwright/test';
import { ResizeablePage } from '../../pages/interactions/ResizeablePage.js';
import { resizeableTestData } from '../../data/resizeableTestData.js';

test.describe('Test Suite : Resizeable', () => {
    let resizeablePage;

    test.beforeEach(async ({ page }) => {
        resizeablePage = new ResizeablePage(page);
        await resizeablePage.navigateTo(resizeableTestData.url);
    });

    test('Resizeable', async () => {
        await resizeablePage.resizeRestricted(resizeableTestData.restricted.x, resizeableTestData.restricted.y);
        
        const height = await resizeablePage.getRestrictedHeight();
        expect(parseInt(height)).toBeGreaterThanOrEqual(resizeableTestData.restricted.minHeight);
    });

    test('Resizeable Free', async () => {
        await resizeablePage.resizeFree(resizeableTestData.free.x, resizeableTestData.free.y);
        
        const width = await resizeablePage.getFreeWidth();
        expect(parseInt(width)).toBeGreaterThanOrEqual(resizeableTestData.free.minWidth);
    });
});