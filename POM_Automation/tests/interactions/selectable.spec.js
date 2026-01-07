import { test, expect } from '@playwright/test';
import { SelectablePage } from '../../pages/interactions/SelectablePage.js';
import { selectableTestData } from '../../data/selectableTestData.js';

test.describe('Test Suite : Selectable', () => {
    let selectablePage;

    test.beforeEach(async ({ page }) => {
        selectablePage = new SelectablePage(page);
        await selectablePage.navigateTo(selectableTestData.url);
    });

    test('Selectable', async () => {
        // List testing
        await selectablePage.clickListItem();
        await expect(selectablePage.listItem).toHaveClass(selectableTestData.expectedClass);

        // Grid testing
        await selectablePage.clickGridTab();
        await selectablePage.clickGridItem();
        await expect(selectablePage.gridItem).toHaveClass(selectableTestData.expectedClass);
    });
});