import { test, expect } from '@playwright/test';
import { DroppablePage } from '../../pages/interactions/DroppablePage.js';
import { droppableTestData } from '../../data/droppableTestData.js';

test.describe('Test Suite : Droppable', () => {
    let droppablePage;

    test.beforeEach(async ({ page }) => {
        droppablePage = new DroppablePage(page);
        await droppablePage.navigateTo(droppableTestData.url);
    });

    test('Simple Droppable', async () => {
        await droppablePage.dragToSimpleDroppable();
        await expect(droppablePage.simpleDroppable).toBeVisible();
        await droppablePage.page.waitForTimeout(droppableTestData.waitTime);
    });

    test('Accept Droppable', async () => {
        await droppablePage.clickAcceptTab();
        await droppablePage.page.waitForTimeout(1000);
        await droppablePage.dragToAcceptDroppable();
        await expect(droppablePage.acceptDroppable).toHaveText(droppableTestData.expectedText);
        await droppablePage.page.waitForTimeout(droppableTestData.waitTime);
    });

    test('Prevent Propogation Droppable', async () => {
        await droppablePage.clickPreventTab();
        await droppablePage.dragToPreventDroppable();
        await expect(droppablePage.notGreedyInnerDropBox).toHaveClass(droppableTestData.expectedClass);
        await droppablePage.page.waitForTimeout(droppableTestData.waitTime);
    });

    test('Revert Droppable', async () => {
        await droppablePage.clickRevertTab();
        await droppablePage.dragToRevertDroppable();
        await expect(droppablePage.revertDroppable).toBeVisible();
        await droppablePage.page.waitForTimeout(droppableTestData.waitTime);
    });
});