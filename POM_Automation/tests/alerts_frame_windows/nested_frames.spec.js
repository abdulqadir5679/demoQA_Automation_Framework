import { test, expect } from '@playwright/test';
import { NestedFramesPage } from '../../pages/alerts_frame_windows/NestedFramesPage.js';
import { nestedFramesTestData } from '../../data/nestedFramesTestData.js';

test.describe('Test suite : Nested Frames', () => {
    let nestedFramesPage;

    test.beforeEach(async ({ page }) => {
        nestedFramesPage = new NestedFramesPage(page);
        await nestedFramesPage.navigateTo(nestedFramesTestData.url);
    });

    test('Nested Frames', async () => {
        // Verify parent frame content
        await expect(nestedFramesPage.parentFrameText).toBeVisible();

        // Verify child frame content
        await expect(nestedFramesPage.childFrameText).toBeVisible();
    });
});