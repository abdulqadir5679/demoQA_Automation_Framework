import { test, expect } from '@playwright/test';
import { AutoCompletePage } from '../../pages/widgets_/AutoCompletePage.js';
import { autoCompleteTestData } from '../../data/autoCompleteTestData.js';

test.describe('Test suite : Auto Complete', () => {
    let autoCompletePage;

    test.beforeEach(async ({ page }) => {
        autoCompletePage = new AutoCompletePage(page);
        await autoCompletePage.navigateTo(autoCompleteTestData.url);
    });

    test('Multiple Color', async () => {
        await autoCompletePage.fillMultipleColor(autoCompleteTestData.colors.red);
        await autoCompletePage.fillMultipleColor(autoCompleteTestData.colors.green);

        // Verify selected colors
        await expect(autoCompletePage.selectedMultipleColors.first()).toContainText(autoCompleteTestData.colors.red);
        await expect(autoCompletePage.selectedMultipleColors.last()).toContainText(autoCompleteTestData.colors.green);
    });

    test('Single Color', async () => {
        await autoCompletePage.fillSingleColor(autoCompleteTestData.colors.red);
        
        // Verify selected color
        await expect(autoCompletePage.singleColorContainer).toContainText(autoCompleteTestData.colors.red);
    });
});