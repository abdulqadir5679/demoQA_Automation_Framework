import { test, expect } from '@playwright/test';
import { ProgressBarPage } from '../../pages/widgets_/ProgressBarPage.js';
import { progressBarTestData } from '../../data/progressBarTestData.js';

test.describe('Test suite', () => {
    let progressBarPage;

    test.beforeEach(async ({ page }) => {
        progressBarPage = new ProgressBarPage(page);
        await progressBarPage.navigateTo(progressBarTestData.url);
    });

    test('Test case', async () => {
        await progressBarPage.clickStartStop();
        await progressBarPage.waitForProgress(progressBarTestData.waitTime);
        await progressBarPage.clickStartStop();

        // Assert progress bar value is around 50% (allow range 40-60)
        const value = await progressBarPage.getProgressValue();
        const numValue = parseInt(value);
        expect(numValue).toBeGreaterThanOrEqual(40);
        expect(numValue).toBeLessThanOrEqual(60);
    });
});