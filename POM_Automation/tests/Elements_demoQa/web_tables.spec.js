import { test, expect } from '@playwright/test';
import { WebTablesPage } from '../../pages/elements/WebTablesPage.js';
import { webTablesTestData } from '../../data/webTablesTestData.js';

test.describe('Elements Suite: Web Tables', () => {
    let webTablesPage;

    test.beforeEach(async ({ page }) => {
        webTablesPage = new WebTablesPage(page);
        await webTablesPage.navigateTo(webTablesTestData.url);
    });

    test('Web Tables', async () => {
        // Add new record
        await webTablesPage.clickAddNewRecord();
        await webTablesPage.fillForm(webTablesTestData.userData);
        await webTablesPage.submitForm();

        // Verify new record exists
        expect(await webTablesPage.isTextVisible(webTablesTestData.userData.firstName)).toBeTruthy();

        // Edit the added record
        await webTablesPage.clickLastEditButton();
        await webTablesPage.updateAge(webTablesTestData.updatedAge);
        await webTablesPage.submitForm();

        // Verify updated record
        expect(await webTablesPage.isTextVisible(webTablesTestData.updatedAge)).toBeTruthy();

        // Delete the record
        await webTablesPage.clickLastDeleteButton();
        expect(await webTablesPage.isTextNotVisible(webTablesTestData.userData.firstName)).toBeTruthy();
    });
});