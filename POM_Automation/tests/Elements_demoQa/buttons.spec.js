import { test, expect } from '@playwright/test';
import { ButtonsPage } from '../../pages/elements/ButtonsPage.js';
import { buttonsTestData } from '../../data/buttonsTestData.js';
import { TestUtils } from '../../utils/TestUtils.js';

test.describe('Elements Suite: Buttons Functionality', () => {
    let buttonsPage;

    test.beforeEach(async ({ page }) => {
        buttonsPage = new ButtonsPage(page);
        await buttonsPage.navigateTo(buttonsTestData.url);
    });


    test('All Button Functionalities Combined', async () => {
        // Double click
        await buttonsPage.performDoubleClick();
        expect(await buttonsPage.verifyDoubleClickMessage(buttonsTestData.expectedMessages.doubleClick)).toBeTruthy();

        // Right click
        await buttonsPage.performRightClick();
        expect(await buttonsPage.verifyRightClickMessage(buttonsTestData.expectedMessages.rightClick)).toBeTruthy();

        // Dynamic click
        await buttonsPage.performClick();
        expect(await buttonsPage.verifyDynamicClickMessage(buttonsTestData.expectedMessages.dynamicClick)).toBeTruthy();
    });
});