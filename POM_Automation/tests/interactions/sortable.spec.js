import { test, expect } from '@playwright/test';
import { SortablePage } from '../../pages/interactions/SortablePage.js';
import { sortableTestData } from '../../data/sortableTestData.js';

test.describe('Test Suite : Sortable', () => {
    let sortablePage;

    test.beforeEach(async ({ page }) => {
        sortablePage = new SortablePage(page);
        await sortablePage.navigateTo(sortableTestData.url);
    });

    test('Sortable Grid', async () => {
        await sortablePage.clickGridTab();
        await sortablePage.waitForGridItems();
        await sortablePage.sortGridItems(sortableTestData.grid.fromIndex, sortableTestData.grid.toIndex);
    });

    test('Sortable List', async () => {
        await sortablePage.waitForListItems();
        await sortablePage.sortListItems(sortableTestData.list.fromIndex, sortableTestData.list.toIndex);
    });
});