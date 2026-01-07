import { test, expect } from '@playwright/test';
import { SelectMenuPage } from '../../pages/widgets_/SelectMenuPage.js';
import { selectMenuTestData } from '../../data/selectMenuTestData.js';

test.describe('Test Suite : Select Menu', () => {
    let selectMenuPage;

    test.beforeEach(async ({ page }) => {
        selectMenuPage = new SelectMenuPage(page);
        await selectMenuPage.navigateTo(selectMenuTestData.url);
    });

    test('Select Menu', async () => {
        // Select from dropdown
        await selectMenuPage.selectFromOptGroup();
        await expect(selectMenuPage.singleValue).toContainText(selectMenuTestData.expectedValues.optGroup);

        // Select title
        await selectMenuPage.selectTitle();
        await expect(selectMenuPage.selectOne).toContainText(selectMenuTestData.expectedValues.title);

        // Multi-select
        await selectMenuPage.selectMultipleCars(selectMenuTestData.cars);
        await expect(selectMenuPage.carsSelect).toHaveValue(selectMenuTestData.expectedValues.firstCar);
    });
});