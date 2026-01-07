import { test, expect } from '@playwright/test';
import { CheckBoxPage } from '../../pages/elements/CheckBoxPage.js';
import { checkBoxTestData } from '../../data/checkBoxTestData.js';

test.describe('Elements Suite: Check_Box', () => {
    let checkBoxPage;

    test.beforeEach(async ({ page }) => {
        checkBoxPage = new CheckBoxPage(page);
        await checkBoxPage.navigateTo(checkBoxTestData.url);
    });

    test('Expand checkbox tree', async () => {
        // Expanding whole list
        await checkBoxPage.expandAll();

        // Check only downloads dir
        await checkBoxPage.checkDownloads();

        // Check list items of Office dir
        await checkBoxPage.checkOfficeItems();

        // Check list items of Documents sub dir WorkSpace
        await checkBoxPage.checkWorkspace();

        // Check list items of Desktop dir
        await checkBoxPage.checkDesktop();

        // Assert that all checkboxes are checked
        const selectedItems = await checkBoxPage.getSelectedItems();
        expect(selectedItems).toEqual(checkBoxTestData.expectedSelectedItems);
    });
});
